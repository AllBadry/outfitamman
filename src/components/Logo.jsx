import React from 'react';

export default function Logo({ 
  iconSize = "w-10 h-10", 
  textColor = "text-[#2c241e]", 
  accentColor = "text-[#c6a87c]" 
}) {
  return (
    <a href="/" className="flex items-center gap-3 select-none group">
      {/* الأيقونة (Monogram OA) */}
      <svg 
        viewBox="0 0 100 100" 
        className={`${iconSize} transition-transform duration-500 group-hover:scale-105`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* حرف O كإطار دائري كلاسيكي نحيف */}
        <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="2.5" className={textColor} />
        
        {/* حرف A متداخل بخطوط حادة (Bespoke Style) */}
        <path 
          d="M50 18 L24 78 H33 L50 38 L67 78 H76 L50 18 Z" 
          fill="currentColor" 
          className={accentColor}
        />
        
        {/* الخط العرضي المائل قليلاً لحرف الـ A (لمسة ديناميكية) */}
        <path 
          d="M38 60 L62 58" 
          stroke="currentColor" 
          strokeWidth="3" 
          className={accentColor}
        />
      </svg>

      {/* النص (Typography) */}
      <div className="flex flex-col justify-center">
        <span className={`font-serif text-xl md:text-2xl font-bold tracking-[0.2em] uppercase leading-none ${textColor} transition-colors`}>
          Outfit
        </span>
        <span className={`font-serif text-[11px] md:text-xs italic font-light tracking-[0.3em] leading-none mt-1.5 ${accentColor} transition-colors`}>
          Amman
        </span>
      </div>
    </a>
  );
}