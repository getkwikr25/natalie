
import React, { useState } from 'react';

const Journal: React.FC = () => {
  const [entry, setEntry] = useState('');
  const [prompt, setPrompt] = useState('How are you nurturing your spirit today?');
  
  const prompts = [
    "How are you nurturing your spirit today?",
    "What intersection of your identity feels most alive right now?",
    "Where did you find a moment of liberation this week?",
    "What systems are you currently navigating, and how can you offer yourself grace?",
    "Write about a boundary that brought you peace recently.",
    "What does collective healing look like in your daily life?",
    "Reflect on a moment of intergenerational strength you feel today."
  ];

  const rotatePrompt = () => {
    const nextIndex = (prompts.indexOf(prompt) + 1) % prompts.length;
    setPrompt(prompts[nextIndex]);
  };

  return (
    <div className="pt-20 pb-24 min-h-screen bg-[#FDFBF7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <span className="uppercase tracking-[0.2em] text-[#D9B99B] font-bold text-sm mb-4 block">Self-Care Practice</span>
          <h1 className="serif text-5xl font-bold text-[#4A5D4E] mb-4">Daily Journaling.</h1>
          <p className="text-lg text-[#333333]/70 font-light leading-relaxed">
            A quiet, private space for reflection. Your words here are for you alone—this tool does not save your data externally; it is a safe vessel for your thoughts in the moment.
          </p>
        </header>

        <div className="bg-white rounded-[40px] shadow-2xl border border-[#4A5D4E]/5 overflow-hidden">
          <div className="p-8 border-b border-[#4A5D4E]/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#A4B494]/10 rounded-2xl flex items-center justify-center">
                <i className="fa-solid fa-pen-nib text-2xl text-[#4A5D4E]"></i>
              </div>
              <div>
                <div className="text-xs font-bold text-[#D9B99B] uppercase tracking-widest">Reflection Prompt</div>
                <h3 className="serif text-xl font-bold text-[#4A5D4E]">{prompt}</h3>
              </div>
            </div>
            <button 
              onClick={rotatePrompt}
              className="flex items-center gap-2 text-sm font-bold text-[#4A5D4E] hover:text-[#D9B99B] transition-colors"
            >
              <i className="fa-solid fa-rotate"></i> New Prompt
            </button>
          </div>

          <div className="p-0">
            <textarea
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
              className="w-full h-[500px] p-12 text-xl font-light text-[#333333] placeholder:text-[#333333]/20 focus:outline-none bg-transparent leading-relaxed resize-none"
              placeholder="Begin your reflection here..."
            />
          </div>

          <div className="px-8 py-6 bg-[#FDFBF7]/50 border-t border-[#4A5D4E]/10 flex justify-between items-center text-xs text-[#333333]/40">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-calendar-days"></i>
              {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            <div className="flex items-center gap-2 italic">
              <i className="fa-solid fa-circle-info"></i>
              Privacy Note: Clearing your browser or refreshing will reset this page.
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#4A5D4E]/60 text-sm italic">
            "We do not learn from experience... we learn from reflecting on experience." — John Dewey
          </p>
        </div>
      </div>
    </div>
  );
};

export default Journal;
