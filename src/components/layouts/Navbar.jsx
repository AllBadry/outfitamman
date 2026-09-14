import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // تأثير تغيير لون الناف بار عند التمرير
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#f8f6f0]/90 backdrop-blur-md border-b border-[#d6cec0]/50 shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* 1. الشعار (Logo) */}
        <div className="flex-shrink-0">
          <a href="/" className="text-[#2c241e] font-serif text-2xl md:text-3xl font-bold tracking-widest uppercase flex items-baseline gap-1">
            Outfit <span className="text-[#c6a87c] italic font-light text-xl md:text-2xl">Amman</span>
          </a>
        </div>

        {/* 2. روابط سطح المكتب (Desktop Links) */}
        <div className="hidden md:flex items-center gap-10">
          {['New Arrivals', 'Collections', 'Tailoring', 'Lookbook'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-[#5c4e42] text-xs font-semibold uppercase tracking-[0.2em] hover:text-[#c6a87c] transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-1/2 w-0 h-[1.5px] bg-[#c6a87c] transition-all duration-300 group-hover:w-full group-hover:left-0" />
            </a>
          ))}
        </div>

        {/* 3. الأيقونات (Icons) */}
        <div className="hidden md:flex items-center gap-6 text-[#2c241e]">
          <button className="hover:text-[#c6a87c] transition-colors duration-300">
            <Search size={22} strokeWidth={1.5} />
          </button>
          <button className="hover:text-[#c6a87c] transition-colors duration-300">
            <User size={22} strokeWidth={1.5} />
          </button>
          <button className="hover:text-[#c6a87c] transition-colors duration-300 relative">
            <ShoppingBag size={22} strokeWidth={1.5} />
            <span className="absolute -top-1.5 -right-1.5 bg-[#c6a87c] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              2
            </span>
          </button>
        </div>

        {/* 4. زر القائمة للموبايل (Mobile Menu Button) */}
        <button
          className="md:hidden text-[#2c241e] hover:text-[#c6a87c] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
        </button>
      </div>

      {/* 5. قائمة الموبايل (Mobile Menu) */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-[#f8f6f0] border-b border-[#d6cec0]/50 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[400px] opacity-100 py-8 shadow-xl' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {['New Arrivals', 'Collections', 'Tailoring', 'Lookbook'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-[#3b322b] text-sm font-medium uppercase tracking-[0.2em] hover:text-[#c6a87c] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          
          <div className="flex gap-8 mt-4 pt-6 border-t border-[#d6cec0]/50 w-[60%] justify-center text-[#2c241e]">
            <Search size={24} strokeWidth={1.5} className="hover:text-[#c6a87c] cursor-pointer" />
            <User size={24} strokeWidth={1.5} className="hover:text-[#c6a87c] cursor-pointer" />
            <div className="relative cursor-pointer hover:text-[#c6a87c]">
              <ShoppingBag size={24} strokeWidth={1.5} />
              <span className="absolute -top-1.5 -right-1.5 bg-[#c6a87c] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}