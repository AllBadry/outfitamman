import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/new-arrivals', label: 'New Arrivals' },
  { to: '/collections', label: 'Collections' },
  { to: '/tailoring', label: 'Tailoring' },
  { to: '/lookbook', label: 'Lookbook' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  // نص فاتح فوق الهيرو الداكن في الصفحات الداخلية، وداكن في الهوم
  const lightTop = !isScrolled && pathname !== '/';

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

        <div className="flex-shrink-0">
          <Link
            to="/"
            className={`font-serif text-2xl md:text-3xl font-bold tracking-widest uppercase flex items-baseline gap-1 transition-colors ${
              lightTop ? 'text-[#f8f6f0]' : 'text-[#2c241e]'
            }`}
          >
            Outfit <span className="text-[#c6a87c] italic font-light text-xl md:text-2xl">Amman</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-300 relative group ${
                  isActive
                    ? 'text-[#c6a87c]'
                    : lightTop
                      ? 'text-[#d6cec0] hover:text-white'
                      : 'text-[#5c4e42] hover:text-[#c6a87c]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-[1.5px] bg-[#c6a87c] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className={`hidden md:flex items-center gap-6 transition-colors ${lightTop ? 'text-[#f8f6f0]' : 'text-[#2c241e]'}`}>
          <button className="hover:text-[#c6a87c] transition-colors duration-300" aria-label="Search">
            <Search size={22} strokeWidth={1.5} />
          </button>
          <Link to="/login" aria-label="Sign in" className="hover:text-[#c6a87c] transition-colors duration-300">
            <User size={22} strokeWidth={1.5} />
          </Link>
          <Link to="/cart" aria-label="Shopping bag" className="hover:text-[#c6a87c] transition-colors duration-300 relative">
            <ShoppingBag size={22} strokeWidth={1.5} />
            <span className="absolute -top-1.5 -right-1.5 bg-[#c6a87c] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              2
            </span>
          </Link>
        </div>

        <button
          className={`md:hidden transition-colors ${lightTop ? 'text-[#f8f6f0]' : 'text-[#2c241e] hover:text-[#c6a87c]'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
        </button>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#f8f6f0] border-b border-[#d6cec0]/50 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[400px] opacity-100 py-8 shadow-xl' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-sm font-medium uppercase tracking-[0.2em] transition-colors ${
                  isActive ? 'text-[#c6a87c]' : 'text-[#3b322b] hover:text-[#c6a87c]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div className="flex gap-8 mt-4 pt-6 border-t border-[#d6cec0]/50 w-[60%] justify-center text-[#2c241e]">
            <Search size={24} strokeWidth={1.5} className="hover:text-[#c6a87c] cursor-pointer" />
            <Link to="/login" onClick={() => setIsOpen(false)} aria-label="Sign in">
              <User size={24} strokeWidth={1.5} className="hover:text-[#c6a87c] cursor-pointer" />
            </Link>
            <Link to="/cart" onClick={() => setIsOpen(false)} aria-label="Shopping bag">
              <div className="relative cursor-pointer hover:text-[#c6a87c]">
                <ShoppingBag size={24} strokeWidth={1.5} />
                <span className="absolute -top-1.5 -right-1.5 bg-[#c6a87c] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  2
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}