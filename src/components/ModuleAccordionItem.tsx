import React, { useState } from 'react';
import { Copy, CheckCircle, ArrowRight, Play, AlertCircle, ChevronDown, ChevronUp, Lock, Unlock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { modules } from '../data/modules';
import { validateSql, ValidationResult } from '../utils/sqlValidator';
import { normalizeSql } from '../utils/sqlNormalizer';

interface ModuleAccordionItemProps {
  moduleId: number;
  isOpen: boolean;
  isLocked: boolean;
  isCompleted: boolean;
  onToggle: () => void;
  onComplete: () => void;
}

const Section = ({ 
  title, 
  children, 
  defaultExpanded = false,
  className = ""
}: { 
  title: string, 
  children: React.ReactNode, 
  defaultExpanded?: boolean,
  className?: string
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  return (
    <div className={`border border-[#E3A08F]/30 rounded-xl overflow-hidden bg-[#9F5A4C]/10 shadow-sm ${className} mb-4`}>
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 flex justify-between items-center bg-[#9F5A4C]/20 hover:bg-[#9F5A4C]/30 transition-colors text-left"
      >
        <h2 className="text-sm font-bold text-[#F5EDEB] uppercase tracking-wide font-serif">{title}</h2>
        {isExpanded ? <ChevronUp size={18} className="text-[#E6D2CC]" /> : <ChevronDown size={18} className="text-[#E6D2CC]" />}
      </button>
      {isExpanded && (
        <div className="p-6 border-t border-[#E3A08F]/20 animate-in fade-in duration-300">
          {children}
        </div>
      )}
    </div>
  );
};

const MarkdownContent = ({ content }: { content: React.ReactNode | string }) => {
  if (!content) return <p className="text-[#E6D2CC]/60 italic font-sans tracking-normal">Content coming soon...</p>;
  
  if (typeof content === 'string') {
    const normalizedContent = normalizeSql(content);
    return (
      <div className="prose prose-invert max-w-none text-[#E6D2CC] leading-relaxed whitespace-pre-wrap font-sans tracking-normal">
        <ReactMarkdown>{normalizedContent}</ReactMarkdown>
      </div>
    );
  }
  
  return <>{content}</>;
};

export default function ModuleAccordionItem({ 
  moduleId, 
  isOpen, 
  isLocked, 
  isCompleted, 
  onToggle, 
  onComplete 
}: ModuleAccordionItemProps) {
  const [copied, setCopied] = useState(false);
  const [userSql, setUserSql] = useState('');
  const [validationResult, setValidationResult] = useState<ValidationResult | null>(null);
  const [isValidating, setIsValidating] = useState(false);

  const moduleData = modules[moduleId];

  if (!moduleData) return null;

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (moduleData.dbFiddle) {
      navigator.clipboard.writeText(normalizeSql(moduleData.dbFiddle));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleVerify = () => {
    if (!moduleData.dbFiddle || !moduleData.solutionSql) {
      if (moduleId >= 22) {
         onComplete();
         return;
      }
      onComplete();
      return;
    }

    setIsValidating(true);
    setValidationResult(null);

    setTimeout(async () => {
      const normalizedDbFiddle = normalizeSql(moduleData.dbFiddle!);
      const normalizedSolutionSql = normalizeSql(moduleData.solutionSql!);
      
      const result = await validateSql(normalizedDbFiddle, userSql, normalizedSolutionSql);
      setValidationResult(result);
      setIsValidating(false);
    }, 500);
  };

  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
      isLocked 
        ? 'bg-[#9F5A4C]/5 border-[#E3A08F]/20 opacity-70' 
        : isOpen 
          ? 'bg-[#8E4B42] border-[#E3A08F] shadow-lg ring-1 ring-[#E3A08F]/50' 
          : 'bg-[#9F5A4C]/10 border-[#E3A08F]/30 hover:border-[#E3A08F]/60 hover:shadow-md'
    }`}>
      <button
        onClick={onToggle}
        disabled={isLocked}
        className={`w-full px-6 py-5 flex items-center justify-between text-left transition-colors ${
          isLocked ? 'cursor-not-allowed' : 'cursor-pointer'
        }`}
      >
        <div className="flex items-center gap-4">
          <div className={`
            w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors
            ${isCompleted 
              ? 'bg-[#22c55e]/20 text-[#22c55e]' 
              : isLocked 
                ? 'bg-[#9F5A4C]/20 text-[#E6D2CC]/40' 
                : 'bg-[#F5EDEB] text-[#8E4B42]'}
          `}>
            {isLocked ? (
              <Lock size={18} />
            ) : isCompleted ? (
              <CheckCircle size={20} />
            ) : (
              <span className="font-bold text-sm font-sans">{moduleId}</span>
            )}
          </div>
          <div>
            <h3 className={`font-bold text-lg font-serif tracking-normal ${isLocked ? 'text-[#E6D2CC]/60' : 'text-[#F5EDEB]'}`}>
              {moduleData.title}
            </h3>
            {!isLocked && (
              <p className="text-xs text-[#E6D2CC]/80 font-medium uppercase tracking-wider mt-0.5 font-sans">
                Module {moduleId}
              </p>
            )}
          </div>
        </div>
        
        {!isLocked && (
          <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            <ChevronDown size={20} className="text-[#E6D2CC]" />
          </div>
        )}
      </button>

      {isOpen && !isLocked && (
        <div className="px-6 pb-8 pt-2 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="space-y-6">
            {/* Section A */}
            <Section title="A. Core Concept (Mental Model)" defaultExpanded={true}>
              <MarkdownContent content={moduleData.coreConcept} />
            </Section>

            {/* Section B */}
            <Section title="B. Concept Breakdown + Commands">
              <MarkdownContent content={moduleData.conceptBreakdown} />
            </Section>

            {/* Section C */}
            <Section title="C. Story & Scenario (Concept Applied)">
              <MarkdownContent content={moduleData.storyScenario} />
            </Section>

            {/* Section D */}
            {moduleId !== 1 && (
              <Section title="D. DB-Fiddle Setup">
                {moduleData.dbFiddle ? (
                  <div className="bg-[#2d2d2d] rounded-xl overflow-hidden text-stone-300 font-mono text-sm relative group border border-[#E3A08F]/20">
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                       <button 
                         onClick={handleCopy}
                         className="bg-stone-800 p-2 rounded hover:bg-stone-700 text-white flex items-center gap-2" 
                         title="Copy Code"
                       >
                         {copied ? <CheckCircle size={16} className="text-green-400" /> : <Copy size={16} />}
                         {copied ? <span className="text-xs font-sans">Copied!</span> : null}
                       </button>
                    </div>
                    <div className="p-4 border-b border-stone-800 bg-[#1a1a1a] text-stone-500 text-xs uppercase tracking-wider font-sans">
                      SQL Schema (Copy & Paste to DB-Fiddle)
                    </div>
                    <pre className="p-6 overflow-x-auto whitespace-pre-wrap text-[#E6D2CC] font-mono tracking-normal">
                      {normalizeSql(moduleData.dbFiddle)}
                    </pre>
                  </div>
                ) : (
                  <p className="text-[#E6D2CC]/60 italic font-sans">No setup code required for this module.</p>
                )}
              </Section>
            )}

            {/* Section E */}
            {moduleId !== 1 && (
              <Section title="E. Practice & Test" defaultExpanded={true}>
                {moduleData.practice ? (
                  <div className="space-y-6">
                    <div className="p-6 bg-[#F5EDEB] rounded-xl border border-[#E3A08F]/30 text-[#8E4B42] font-medium font-sans tracking-normal">
                      {moduleData.practice}
                    </div>

                    {moduleId < 22 && (
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-[#E6D2CC] font-sans">Write your SQL Query:</label>
                        <textarea
                          value={userSql}
                          onChange={(e) => setUserSql(e.target.value)}
                          className="w-full h-32 bg-[#2d2d2d] text-stone-100 font-mono text-sm p-4 rounded-xl border border-[#E3A08F]/30 focus:ring-2 focus:ring-[#B56A5A] focus:outline-none placeholder-stone-500 tracking-normal"
                          placeholder="SELECT ... FROM ..."
                        />
                        <div className="flex justify-end">
                          <button
                            onClick={handleVerify}
                            disabled={!userSql.trim() || isValidating}
                            className="bg-[#D58C7A] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#C97A69] transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 font-sans tracking-normal"
                          >
                            {isValidating ? 'Verifying...' : 'Run & Verify'} <Play size={16} />
                          </button>
                        </div>
                      </div>
                    )}

                    {validationResult && (
                      <div className={`p-4 rounded-xl border ${validationResult.success ? 'bg-green-900/20 border-green-500/30' : 'bg-red-900/20 border-red-500/30'} animate-in fade-in slide-in-from-top-2`}>
                        <div className="flex items-start gap-3">
                          {validationResult.success ? (
                            <CheckCircle className="text-green-400 shrink-0 mt-0.5" size={20} />
                          ) : (
                            <AlertCircle className="text-red-400 shrink-0 mt-0.5" size={20} />
                          )}
                          <div className="space-y-2 w-full font-sans tracking-normal">
                            <h3 className={`font-bold ${validationResult.success ? 'text-green-300' : 'text-red-300'}`}>
                              {validationResult.success ? 'Correct Answer!' : 'Incorrect Answer'}
                            </h3>
                            {validationResult.message && (
                              <p className={`text-sm ${validationResult.success ? 'text-green-200' : 'text-red-200'}`}>
                                {validationResult.message}
                              </p>
                            )}
                            {validationResult.hint && (
                              <div className="mt-2 text-sm bg-white/10 p-3 rounded-lg border border-red-500/20 text-red-100">
                                <strong>Hint:</strong> {validationResult.hint}
                              </div>
                            )}
                            
                            {validationResult.actualResult && validationResult.actualResult.length > 0 && (
                              <div className="mt-4 overflow-x-auto">
                                <p className="text-xs font-semibold uppercase text-[#E6D2CC]/60 mb-1">Your Result Preview:</p>
                                <table className="min-w-full text-xs text-left text-stone-300 bg-[#2d2d2d] rounded-lg overflow-hidden font-mono">
                                  <thead className="bg-[#1a1a1a] text-[#E6D2CC] font-bold">
                                    <tr>
                                      {Object.keys(validationResult.actualResult[0]).map((key) => (
                                        <th key={key} className="px-3 py-2 border-b border-stone-700">{key}</th>
                                      ))}
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {validationResult.actualResult.slice(0, 5).map((row, i) => (
                                      <tr key={i} className="border-b border-stone-700 last:border-0 hover:bg-stone-700/50">
                                        {Object.values(row).map((val: any, j) => (
                                          <td key={j} className="px-3 py-2 border-r border-stone-700 last:border-0">{String(val)}</td>
                                        ))}
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                                {validationResult.actualResult.length > 5 && (
                                  <p className="text-xs text-stone-500 mt-1 italic">Showing first 5 rows...</p>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-[#E6D2CC]/60 italic font-sans">No practice exercise for this module.</p>
                )}
              </Section>
            )}

            {/* Completion Action */}
            <div className="mt-8 pt-8 border-t border-[#E3A08F]/20 text-center">
               {(!moduleData.practice || moduleId >= 22) ? (
                 <button 
                   onClick={onComplete}
                   className="bg-[#B56A5A] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#9F5A4C] hover:scale-105 hover:shadow-lg hover:shadow-[#B56A5A]/50 active:scale-95 transition-all flex items-center gap-2 mx-auto font-sans tracking-normal"
                 >
                   Complete Module & Continue <ArrowRight size={18} />
                 </button>
               ) : (
                 <div className="space-y-4">
                   {validationResult?.success ? (
                      <button 
                        onClick={onComplete}
                        className="bg-[#B56A5A] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#9F5A4C] hover:scale-105 hover:shadow-lg hover:shadow-[#B56A5A]/50 active:scale-95 transition-all flex items-center gap-2 mx-auto font-sans tracking-normal"
                      >
                        Continue to Next Module <ArrowRight size={18} />
                      </button>
                   ) : (
                     <p className="text-sm text-[#E6D2CC]/60 italic font-sans">
                       Run your query correctly to unlock the next module.
                     </p>
                   )}
                 </div>
               )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
