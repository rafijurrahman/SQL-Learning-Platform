import { useState, useEffect } from 'react';
import { User } from './types';

const SESSION_KEY = 'sql_learner_session';

export function useUserStore() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedSession = localStorage.getItem(SESSION_KEY);
    if (storedSession) {
      try {
        const parsedUser = JSON.parse(storedSession);
        // Sync with persistent progress storage just in case
        const progressKey = `progress_${parsedUser.name}`;
        const storedProgress = localStorage.getItem(progressKey);
        if (storedProgress) {
            const level = parseInt(storedProgress, 10);
            if (level > parsedUser.unlockedModules) {
                parsedUser.unlockedModules = level;
            }
        }
        setUser(parsedUser);
      } catch (e) {
        console.error("Failed to parse user session", e);
      }
    }
    setLoading(false);
  }, []);

  const login = (name: string, email: string) => {
    // 1. Determine Progress
    const progressKey = `progress_${name}`;
    const storedProgress = localStorage.getItem(progressKey);
    let initialLevel = 1;

    if (storedProgress) {
        initialLevel = parseInt(storedProgress, 10);
    }

    const newUser: User = {
      name,
      email,
      unlockedModules: initialLevel
    };

    setUser(newUser);
    localStorage.setItem(SESSION_KEY, JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(SESSION_KEY);
  };

  const updateProgress = (moduleId: number) => {
    if (!user) return;
    
    // Only update if new level is higher
    if (moduleId > user.unlockedModules) {
      const updated = { ...user, unlockedModules: moduleId };
      setUser(updated);
      
      // Save Session
      localStorage.setItem(SESSION_KEY, JSON.stringify(updated));
      
      // Save Persistent Progress
      localStorage.setItem(`progress_${user.name}`, moduleId.toString());
    }
  };

  const unlockWithCode = (code: string): boolean => {
    if (!user) return false;
    
    // Format: SQL-<MODULE>-ZUBORAJ (Even) / SQL-<MODULE>-RAFIJUR (Odd)
    const parts = code.trim().toUpperCase().split('-');
    if (parts.length !== 3 || parts[0] !== 'SQL') return false;

    const modNum = parseInt(parts[1], 10);
    if (isNaN(modNum) || modNum < 1 || modNum > 24) return false;

    const suffix = parts[2];
    const isEven = modNum % 2 === 0;

    let isValid = false;
    if (isEven && suffix === 'ZUBORAJ') isValid = true;
    if (!isEven && suffix === 'RAFIJUR') isValid = true;

    if (isValid) {
        // Unlock all modules up to modNum
        // If current is less than modNum, update it.
        // If current is already higher, we don't downgrade, but return true as "code valid".
        if (modNum > user.unlockedModules) {
            updateProgress(modNum);
        }
        return true;
    }
    return false;
  };

  return { user, loading, login, logout, updateProgress, unlockWithCode };
}
