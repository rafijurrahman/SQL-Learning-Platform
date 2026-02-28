import React, { useState, useEffect } from 'react';
import { useUserStore } from './store';
import Login from './components/Login';
import ModuleAccordionItem from './components/ModuleAccordionItem';
import { LogOut } from 'lucide-react';
import {
  HomeIntro,
  HowItWorks,
  Philosophy,
  DbFiddleSetup,
  Instructor,
  RecoverProgress,
  Reviews
} from './components/Sections';

export default function App() {
  const { user, loading, login, logout, unlockWithCode, updateProgress } = useUserStore();
  const [expandedModuleId, setExpandedModuleId] = useState<number | null>(null);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) return null;

  if (!user) {
    return <Login onLogin={login} />;
  }

  const handleModuleToggle = (id: number) => {
    setExpandedModuleId(expandedModuleId === id ? null : id);
  };

  const handleModuleComplete = (id: number) => {
    // Unlock next module
    const nextId = id + 1;
    updateProgress(nextId);
    
    // Close current, open next
    setExpandedModuleId(nextId);
    
    // Optional: Scroll to next module
    setTimeout(() => {
      const element = document.getElementById(`module-${nextId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const scrollToModules = () => {
    const element = document.getElementById('modules-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#8E4B42] font-sans text-white selection:bg-[#B56A5A]/30">
      
      {/* Logout Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={logout}
          className="bg-[#2d2d2d] text-white/80 px-4 py-2 rounded-full text-sm font-medium hover:bg-[#1a1a1a] hover:text-white transition-colors flex items-center gap-2 shadow-lg"
        >
          <LogOut size={14} />
          Logout
        </button>
      </div>

      <main className="max-w-4xl mx-auto px-6 md:px-12 py-12 space-y-24">
        
        {/* 1) HOME */}
        <section id="home">
          <HomeIntro onStart={scrollToModules} />
        </section>

        {/* 2) HOW THIS WEBSITE WORKS */}
        <section id="how-it-works">
          <HowItWorks />
        </section>

        {/* 3) WHY THIS IS DIFFERENT */}
        <section id="philosophy">
          <Philosophy />
        </section>

        {/* 4) DB-FIDDLE PRACTICE */}
        <section id="db-fiddle">
          <DbFiddleSetup />
        </section>

        {/* 5) MODULES (1–24) */}
        <section id="modules-section" className="space-y-8 py-8 border-t border-[#E3A08F]/30 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-[#F5EDEB] font-serif tracking-normal">Learning Modules</h2>
            <p className="text-[#E6D2CC] max-w-2xl font-sans tracking-normal">
              মোট ২৪টি মডিউল রয়েছে।
              প্রতিটি মডিউল আগেরটার উপর ভিত্তি করে তৈরি।
              একটি শেষ না করলে পরেরটি খুলবে না।
            </p>
          </div>

          <div className="space-y-4">
            {Array.from({ length: 24 }, (_, i) => i + 1).map((id) => {
              const isLocked = id > user.unlockedModules;
              const isCompleted = id < user.unlockedModules;
              
              return (
                <div key={id} id={`module-${id}`}>
                  <ModuleAccordionItem
                    moduleId={id}
                    isOpen={expandedModuleId === id}
                    isLocked={isLocked}
                    isCompleted={isCompleted}
                    onToggle={() => handleModuleToggle(id)}
                    onComplete={() => handleModuleComplete(id)}
                  />
                </div>
              );
            })}
          </div>
        </section>

        {/* 6) ABOUT THE INSTRUCTOR */}
        <section id="instructor">
          <Instructor />
        </section>

        {/* 7) RECOVERY PROGRESS */}
        <section id="recover">
          <RecoverProgress onUnlock={unlockWithCode} />
        </section>

        {/* 8) LEARNER REVIEWS */}
        <section id="reviews">
          <Reviews />
        </section>

        {/* Footer */}
        <footer className="text-center text-[#E6D2CC]/60 text-sm py-12 border-t border-[#E3A08F]/30">
          <p>© {new Date().getFullYear()} SQL Learning Platform. All rights reserved.</p>
        </footer>

      </main>
    </div>
  );
}
