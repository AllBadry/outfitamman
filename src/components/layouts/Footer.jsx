import React from 'react';
import { ArrowRight } from 'lucide-react'; // احتفظنا بالسهم من Lucide
import { FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6'; // أيقونات السوشيال ميديا
import Logo from '../Logo';

export default function Footer() {
  return (
    <footer className="w-full bg-[#14110e] text-[#d6cec0] pt-24 pb-8 px-6 md:px-12 border-t border-[#2c241e]">
      <div className="max-w-[1300px] mx-auto">
        
        {/* القسم العلوي: النشرة البريدية */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20">
          <div className="max-w-md">
            <h3 className="text-[#f8f6f0] text-3xl font-serif font-light mb-4">Join The Club</h3>
            <p className="text-sm font-mono opacity-80 leading-relaxed">
              Subscribe to receive updates on new arrivals, exclusive offers, and sartorial inspiration directly to your inbox.
            </p>
          </div>
          
          <div className="w-full md:w-auto flex-1 max-w-md">
            <form className="relative flex items-end">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-transparent border-b border-[#5c4e42] py-3 text-[#f8f6f0] text-sm focus:outline-none focus:border-[#c6a87c] transition-colors placeholder:text-[#5c4e42] placeholder:uppercase placeholder:tracking-widest placeholder:text-[10px]"
              />
              <button 
                type="button"
                className="absolute right-0 bottom-3 text-[#c6a87c] hover:text-[#f8f6f0] transition-colors"
              >
                <ArrowRight size={20} strokeWidth={1.5} />
              </button>
            </form>
          </div>
        </div>

        {/* القسم الأوسط: الروابط والشعار */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* الشعار والوصف */}
          <div className="md:col-span-4 flex flex-col items-start">
            <div className="mb-6">
              <Logo textColor="text-[#f8f6f0]" accentColor="text-[#c6a87c]" />
            </div>
            <p className="text-xs font-mono opacity-60 leading-relaxed max-w-xs mb-8">
              Redefining modern elegance through premium bespoke tailoring, curated collections, and timeless essentials for the modern gentleman.
            </p>
            
            {/* أيقونات التواصل الاجتماعي المحدثة */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-[#5c4e42] flex items-center justify-center hover:border-[#c6a87c] hover:text-[#c6a87c] transition-colors">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#5c4e42] flex items-center justify-center hover:border-[#c6a87c] hover:text-[#c6a87c] transition-colors">
                <FaFacebookF size={14} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#5c4e42] flex items-center justify-center hover:border-[#c6a87c] hover:text-[#c6a87c] transition-colors">
                <FaXTwitter size={14} />
              </a>
            </div>
          </div>

          {/* روابط سريعة */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-[#f8f6f0] font-serif text-lg mb-6">Explore</h4>
            <ul className="flex flex-col gap-4 text-xs uppercase tracking-widest font-bold opacity-80">
              <li><a href="#" className="hover:text-[#c6a87c] transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-[#c6a87c] transition-colors">Collections</a></li>
              <li><a href="#" className="hover:text-[#c6a87c] transition-colors">Tailoring</a></li>
              <li><a href="#" className="hover:text-[#c6a87c] transition-colors">Lookbook</a></li>
              <li><a href="#" className="hover:text-[#c6a87c] transition-colors">Our Story</a></li>
            </ul>
          </div>

          {/* خدمة العملاء */}
          <div className="md:col-span-2">
            <h4 className="text-[#f8f6f0] font-serif text-lg mb-6">Services</h4>
            <ul className="flex flex-col gap-4 text-xs uppercase tracking-widest font-bold opacity-80">
              <li><a href="#" className="hover:text-[#c6a87c] transition-colors">Book an Appointment</a></li>
              <li><a href="#" className="hover:text-[#c6a87c] transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-[#c6a87c] transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-[#c6a87c] transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-[#c6a87c] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* تواصل */}
          <div className="md:col-span-2">
            <h4 className="text-[#f8f6f0] font-serif text-lg mb-6">Contact</h4>
            <ul className="flex flex-col gap-4 text-xs font-mono opacity-80">
              <li>+962 7 9000 0000</li>
              <li>concierge@outfitamman.com</li>
              <li className="mt-2 text-[#c6a87c] uppercase tracking-widest font-bold text-[10px]">
                Sweifieh Village, Amman
              </li>
            </ul>
          </div>

        </div>

        {/* القسم السفلي: حقوق النشر */}
        <div className="pt-8 border-t border-[#5c4e42]/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-mono opacity-60">
          <p>&copy; {new Date().getFullYear()} Outfit Amman. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#c6a87c] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#c6a87c] transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}