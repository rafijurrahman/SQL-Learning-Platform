import React, { useState } from 'react';
import { useUserStore } from '../store';

interface LoginProps {
  onLogin: (name: string, email: string) => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      onLogin(name, email);
    }
  };

  return (
    <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4 font-sans">
      <div className="bg-white p-8 rounded-2xl shadow-sm max-w-md w-full border border-stone-200">
        <h1 className="text-2xl font-bold text-stone-800 mb-6 text-center">SQL Learning Platform</h1>
        
        <div className="space-y-4 text-stone-600 mb-8 text-sm leading-relaxed">
          <p>
            লগইন করলে তোমার শেখার প্রগ্রেস সেভ থাকবে।
            পরবর্তীতে ওয়েবসাইটে ঢুকলে নির্দিষ্ট মডিউল থেকেই শুরু করতে পারবে।
          </p>
          <p className="font-medium text-stone-800">
            নাম বা ইমেল কেস-সেনসিটিভ।
            একবার যে নামে শুরু করবে, পরবর্তীতে সেই নামই ব্যবহার করতে হবে।
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-400 transition-all"
              placeholder="তোমার নাম"
              required
            />
          </div>
          
          <div>
            <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-400 transition-all"
              placeholder="তোমার ইমেইল"
              required
            />
          </div>

          <div className="pt-4 flex gap-3">
            <button
              type="submit"
              className="flex-1 bg-stone-800 text-white py-3 rounded-xl font-medium hover:bg-stone-900 transition-colors"
            >
              Login
            </button>
            <button
              type="submit"
              className="flex-1 bg-white text-stone-800 border border-stone-300 py-3 rounded-xl font-medium hover:bg-stone-50 transition-colors"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
