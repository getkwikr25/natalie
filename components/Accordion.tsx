
import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[#4A5D4E]/10 last:border-0 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-[#D9B99B] transition-colors focus:outline-none group"
      >
        <span className="serif text-xl md:text-2xl font-medium pr-4">{title}</span>
        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <i className="fa-solid fa-chevron-down text-xl text-[#4A5D4E]/50 group-hover:text-[#D9B99B]"></i>
        </div>
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[2000px] pb-8 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-lg text-[#333333]/80 leading-relaxed font-light">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
