
import React, { useState, useEffect } from 'react';

interface SpamProtectionProps {
  onVerify: (isValid: boolean) => void;
  className?: string;
  theme?: 'light' | 'dark';
}

const SpamProtection: React.FC<SpamProtectionProps> = ({ onVerify, className = '', theme = 'light' }) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');

  useEffect(() => {
    // Generate simple random numbers for the challenge
    setNum1(Math.floor(Math.random() * 9) + 1);
    setNum2(Math.floor(Math.random() * 9) + 1);
  }, []);

  useEffect(() => {
    const isCorrect = parseInt(userAnswer) === (num1 + num2);
    onVerify(isCorrect);
  }, [userAnswer, num1, num2, onVerify]);

  const isDark = theme === 'dark';

  return (
    <div className={`flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl border transition-all ${
      isDark 
        ? 'bg-white/5 border-white/10 text-white' 
        : 'bg-[#FDFBF7] border-[#4A5D4E]/10 text-[#4A5D4E]'
    } ${className}`}>
      <div className="flex items-center gap-3 font-medium text-sm">
        <i className={`fa-solid fa-shield-halved text-xl ${isDark ? 'text-[#D9B99B]' : 'text-[#D9B99B]'}`}></i>
        <span className="whitespace-nowrap">Human Check: What is {num1} + {num2}?</span>
      </div>
      <input
        type="number"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        className={`w-20 px-4 py-2 rounded-xl text-center font-bold focus:ring-2 focus:ring-[#D9B99B] focus:outline-none transition-all ${
          isDark 
            ? 'bg-white/10 border-white/20 text-white placeholder:text-white/30' 
            : 'bg-white border-[#4A5D4E]/20 text-[#4A5D4E]'
        }`}
        placeholder="?"
      />
    </div>
  );
};

export default SpamProtection;
