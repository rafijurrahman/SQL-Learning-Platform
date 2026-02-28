import React, { useState } from 'react';
import { SectionId } from '../types';
import { ExternalLink, MessageCircle, Send, User, ChevronDown, ChevronUp } from 'lucide-react';

// Common Button Styles
const primaryBtnClass = "bg-[#B56A5A] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#9F5A4C] hover:scale-105 hover:shadow-lg hover:shadow-[#B56A5A]/50 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 font-sans tracking-normal";
const secondaryBtnClass = "bg-[#D58C7A] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#C97A69] hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 font-sans tracking-normal";

export function HomeIntro({ onStart }: { onStart: () => void }) {
  return (
    <div className="space-y-6 py-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h1 className="text-5xl font-bold text-white leading-tight font-serif tracking-normal">
        বিনামূল্যে SQL শেখার প্ল্যাটফর্ম
      </h1>
      <div className="prose prose-lg prose-invert text-[#F5EDEB] space-y-3 max-w-2xl font-sans tracking-normal">
        <p>
          এই প্ল্যাটফর্মটি তৈরি করা হয়েছে SQL শেখার জন্য—
          ধাপে ধাপে, বাস্তব উদাহরণে, এবং কঠোর অনুশীলনের মাধ্যমে।
          এখানে মুখস্থ নয়, চিন্তা করে SQL লেখা শিখবে।
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <button 
          onClick={onStart}
          className={primaryBtnClass}
        >
          Start Learning
        </button>
        <button 
          onClick={onStart}
          className={secondaryBtnClass}
        >
          Continue Learning
        </button>
      </div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <div className="space-y-4 py-8 border-t border-[#E3A08F]/30 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h2 className="text-3xl font-bold text-[#F5EDEB] font-serif tracking-normal">How This Website Works</h2>
      <div className="prose prose-invert text-[#E6D2CC] space-y-3 max-w-2xl font-sans tracking-normal">
        <p>এই ওয়েবসাইটে শেখার নিয়ম খুব সহজ কিন্তু কঠোর।</p>
        <p>
          ১) প্রতিটি মডিউলে আগে কনসেপ্ট পরিষ্কারভাবে বোঝানো হবে<br/>
          ২) তারপর বাস্তব গল্পে সেই কনসেপ্ট কোথায় ব্যবহার হয় তা দেখানো হবে<br/>
          ৩) শেষে নিজে SQL লিখে সমস্যার সমাধান করতে হবে<br/>
          ৪) যতক্ষণ সঠিক কুয়েরি না লিখতে পারবে, ততক্ষণ পরের মডিউল আনলক হবে না
        </p>
      </div>
    </div>
  );
}

export function Philosophy() {
  return (
    <div className="space-y-4 py-8 border-t border-[#E3A08F]/30 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h2 className="text-3xl font-bold text-[#F5EDEB] font-serif tracking-normal">Why This Is Different</h2>
      <div className="prose prose-invert text-[#E6D2CC] space-y-3 max-w-2xl font-sans tracking-normal">
        <p>
          এই প্ল্যাটফর্মে SQL শেখানো হয় বাস্তব ডেটার মতো করে।
          উদাহরণগুলো বাংলাদেশের প্রেক্ষাপটে, তাই কনসেপ্টগুলো মনে থাকে।
          এখানে শেখা মানে হলো— চাকরির কাজের মতো করে সমস্যা সমাধান শেখা।
        </p>
      </div>
    </div>
  );
}

export function DbFiddleSetup() {
  return (
    <div className="space-y-6 py-8 border-t border-[#E3A08F]/30 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h2 className="text-3xl font-bold text-[#F5EDEB] font-serif tracking-normal">DB-Fiddle Practice</h2>
      
      <div className="w-full max-w-[900px] rounded-xl overflow-hidden shadow-lg border border-[#E3A08F]/20">
        <img 
          src="https://i.imgur.com/uoGFgO2.png" 
          alt="DB-Fiddle Guide" 
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="prose prose-invert text-[#E6D2CC] space-y-2 max-w-2xl font-sans tracking-normal">
        <ul className="list-disc pl-5 space-y-1 marker:text-[#B56A5A]">
          <li>নিচের "Open DB-Fiddle" বাটনে ক্লিক করো।</li>
          <li>বাম পাশে (Schema SQL) টেবিল বানানোর কোড পেস্ট করো।</li>
          <li>ডান পাশে (Query SQL) কুয়েরি লেখার কোড পেস্ট করো।</li>
          <li>উপরে "Run" বাটনে ক্লিক করে ফলাফল দেখো।</li>
        </ul>
      </div>
      
      <div className="pt-2">
        <a 
          href="https://www.db-fiddle.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`${primaryBtnClass} w-full md:w-auto text-lg`}
        >
          Open DB-Fiddle <ExternalLink size={20} />
        </a>
      </div>
    </div>
  );
}

export function Instructor() {
  return (
    <div className="space-y-6 py-8 border-t border-[#E3A08F]/30 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h2 className="text-3xl font-bold text-[#F5EDEB] font-serif tracking-normal">About The Instructor</h2>
      
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="w-40 h-40 bg-[#9F5A4C] rounded-2xl flex-shrink-0 overflow-hidden border border-[#E3A08F] shadow-sm">
          <img 
            src="https://i.imgur.com/InSVL51.png" 
            alt="Md. Rafijur Rahman" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://i.imgur.com/InSVL51.png';
            }}
          />
        </div>
        
        <div className="space-y-3 flex-1 font-sans tracking-normal">
          <div>
            <h3 className="text-2xl font-bold text-[#F5EDEB] font-serif tracking-normal">Md. Rafijur Rahman (Zuboraj)</h3>
            <p className="text-[#E6D2CC] font-medium">B.Sc. (Honours) in Statistics</p>
            <p className="text-[#E6D2CC]/80">Govt. Brojomuhun College, Barishal</p>
            <p className="text-[#E6D2CC]/80">Session: 2019–20 • 7th Batch</p>
          </div>
          
          <div className="text-[#E6D2CC] leading-relaxed space-y-2">
            <p>
              এই প্ল্যাটফর্মটি তৈরি করা হয়েছে নিজের শেখার অভিজ্ঞতা থেকে।
              যারা নিজের চেষ্টায় ডেটা অ্যানালিস্ট হতে চায়,
              এই প্ল্যাটফর্মটি মূলত তাদের জন্য।
              ডেটা সেক্টরের অন্যতম গুরুত্বপূর্ণ ভিত্তি হলো SQL।
            </p>
          </div>

          <div className="pt-2">
            <a 
              href="https://wa.me/qr/YDAFKT2SE25AI1" 
              target="_blank" 
              rel="noopener noreferrer"
              className={primaryBtnClass}
            >
              <MessageCircle size={20} />
              Message me on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RecoverProgress({ onUnlock }: { onUnlock: (code: string) => boolean }) {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = onUnlock(code);
    if (success) {
      setMessage('Progress updated successfully!');
      setCode('');
    } else {
      setMessage('Invalid code. Please try again.');
    }
  };

  return (
    <div className="space-y-6 py-8 border-t border-[#E3A08F]/30 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h2 className="text-3xl font-bold text-[#F5EDEB] font-serif tracking-normal">Recover Progress</h2>
      <div className="prose prose-invert text-[#E6D2CC] space-y-3 max-w-2xl font-sans tracking-normal">
        <p>
          আগে যেখানে থেমেছিলে, সেখান থেকেই আবার শুরু করতে পারো।
          তোমার রিকভারি কোড এখানে ব্যবহার করো।
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md space-y-4 bg-[#9F5A4C]/20 p-6 rounded-2xl border border-[#E3A08F]/30 shadow-sm font-sans">
        <div>
          <label className="block text-xs font-bold text-[#E6D2CC] uppercase tracking-wider mb-2 font-sans">
            Unlock Code
          </label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full p-3 bg-[#F5EDEB] text-[#8E4B42] border border-[#E3A08F] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B56A5A] transition-all placeholder-[#8E4B42]/50 font-mono tracking-normal"
            placeholder="Enter code here"
          />
        </div>
        <button 
          type="submit"
          className={`${secondaryBtnClass} w-full`}
        >
          Recover Progress
        </button>
        {message && (
          <p className={`text-sm text-center font-medium ${message.includes('success') ? 'text-[#22c55e]' : 'text-red-300'}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

export function Reviews() {
  const [reviews, setReviews] = useState<{name: string, text: string}[]>([
    { name: "Arif", text: "খুবই চমৎকার একটি উদ্যোগ। SQL শেখার ভীতি কেটে গেছে।" },
    { name: "Sultana", text: "গল্পের মাধ্যমে শেখার পদ্ধতিটা দারুণ।" }
  ]);
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [showReviews, setShowReviews] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && review) {
      setReviews([...reviews, { name, text: review }]);
      setName('');
      setReview('');
    }
  };

  return (
    <div className="space-y-8 py-8 border-t border-[#E3A08F]/30 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-24">
      <h2 className="text-3xl font-bold text-[#F5EDEB] font-serif tracking-normal">Learner Reviews</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="prose prose-invert text-[#E6D2CC] font-sans tracking-normal">
            <p>
              এই প্ল্যাটফর্ম ব্যবহার করে তোমার অভিজ্ঞতা লিখে যেতে পারো।
              কোনো মডিউল শেষ করা বাধ্যতামূলক নয়।
              সৎ মতামতই অন্যদের সাহায্য করবে।
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 bg-[#9F5A4C]/20 p-6 rounded-2xl border border-[#E3A08F]/30 shadow-sm font-sans">
            <div>
              <label className="block text-xs font-bold text-[#E6D2CC] uppercase tracking-wider mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 bg-[#F5EDEB] text-[#8E4B42] border border-[#E3A08F] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B56A5A] placeholder-[#8E4B42]/50"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#E6D2CC] uppercase tracking-wider mb-2">Review</label>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="w-full p-3 bg-[#F5EDEB] text-[#8E4B42] border border-[#E3A08F] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B56A5A] h-32 resize-none placeholder-[#8E4B42]/50"
                placeholder="Share your experience..."
              />
            </div>
            <button 
              type="submit"
              disabled={!name || !review}
              className={`${primaryBtnClass} w-full disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              Submit Review <Send size={18} />
            </button>
          </form>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-[#F5EDEB] uppercase tracking-wide font-serif">Recent Reviews</h3>
            <button
              onClick={() => setShowReviews(!showReviews)}
              className="bg-[#22c55e] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#16a34a] transition-colors flex items-center gap-2 font-sans tracking-normal"
            >
              {showReviews ? 'Hide Reviews' : 'Show Reviews'}
              {showReviews ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
          
          <div className={`space-y-4 overflow-hidden transition-all duration-500 ease-in-out ${showReviews ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="pr-2 space-y-4 overflow-y-auto max-h-[500px]">
              {reviews.map((r, i) => (
                <div key={i} className="bg-[#9F5A4C]/20 p-6 rounded-xl border border-[#E3A08F]/30 shadow-sm hover:shadow-md transition-shadow font-sans">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-[#F5EDEB] rounded-full flex items-center justify-center text-[#8E4B42]">
                      <User size={16} />
                    </div>
                    <span className="font-bold text-[#F5EDEB]">{r.name}</span>
                  </div>
                  <p className="text-[#E6D2CC] leading-relaxed tracking-normal">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
