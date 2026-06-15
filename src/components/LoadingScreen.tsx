import React, { useEffect, useState } from 'react';

export const LoadingScreen: React.FC<{ onLoadComplete: () => void }> = ({ onLoadComplete }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [fade, setFade] = useState(false);
  
  const loadingTexts = [
    'Initializing parameters...',
    'Loading deep learning models...',
    'Compiling data visualizations...',
    'Rendering creative canvas...'
  ];

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev < loadingTexts.length - 1 ? prev + 1 : prev));
    }, 320);

    const timer = setTimeout(() => {
      setFade(true);
      const finishTimer = setTimeout(() => {
        onLoadComplete();
      }, 500); // Match Tailwind duration-500
      return () => clearTimeout(finishTimer);
    }, 1500);

    return () => {
      clearInterval(textInterval);
      clearTimeout(timer);
    };
  }, [onLoadComplete, loadingTexts.length]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-tr from-slate-950 via-purple-950 to-slate-950 text-white transition-opacity duration-500 ease-in-out ${
        fade ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex items-center justify-center mb-6">
        {/* Glow rings */}
        <div className="absolute w-24 h-24 rounded-full border border-purple-500/20 animate-ping"></div>
        <div className="absolute w-20 h-20 rounded-full border border-indigo-500/30 animate-pulse"></div>
        
        {/* Spinner */}
        <div className="w-16 h-16 rounded-full border-t-2 border-r-2 border-purple-500 border-b-2 border-l-2 border-b-transparent border-l-transparent animate-spin"></div>
        
        {/* Middle sparkle */}
        <span className="absolute text-xl">✨</span>
      </div>
      
      <h1 className="font-heading text-2xl font-extrabold tracking-widest bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-200 bg-clip-text text-transparent mb-2">
        AKRITI RAJ
      </h1>
      
      <p className="font-mono text-xs text-purple-300/80 h-4">
        {loadingTexts[textIndex]}
      </p>
    </div>
  );
};
