import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // حركة دخول العناصر بتتابع (Stagger) عند الوصول للقسم
      gsap.from('.contact-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%', // يبدأ الأنيميشن عندما يصل القسم إلى 80% من الشاشة
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#f8f6f0] py-20 md:py-32 px-6 md:px-12 relative overflow-hidden">
      
      {/* لمسة تصميمية: حرف M ضخم وشفاف في الخلفية */}
      <div className="absolute -bottom-20 -right-10 text-[#d6cec0]/20 text-[400px] font-serif leading-none select-none pointer-events-none">
        M
      </div>

      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative z-10">
        
        {/* العمود الأيسر: معلومات التواصل */}
        <div className="flex flex-col justify-center">
          <div className="contact-item flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-[#c6a87c]" />
            <span className="text-[#c6a87c] uppercase tracking-[0.3em] text-xs font-bold">Get In Touch</span>
          </div>
          
          <h2 className="contact-item text-[#2c241e] text-5xl md:text-6xl font-serif font-light leading-tight mb-8">
            Visit Our <br /> <span className="italic text-[#8b7355]">Boutique</span>
          </h2>
          
          <p className="contact-item text-[#5c4e42] text-sm leading-relaxed mb-12 font-mono max-w-md">
            Experience the art of tailoring firsthand. Book a private fitting session or visit our showroom in Amman to explore our latest collections.
          </p>

          <div className="flex flex-col gap-8">
            <div className="contact-item flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border border-[#d6cec0] flex items-center justify-center text-[#c6a87c] shrink-0">
                <MapPin size={18} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-[#2c241e] font-serif text-lg mb-1">Showroom Address</h4>
                <p className="text-[#8a7f72] text-sm font-mono">Sweifieh Village, Amman<br />Hashemite Kingdom of Jordan</p>
              </div>
            </div>

            <div className="contact-item flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border border-[#d6cec0] flex items-center justify-center text-[#c6a87c] shrink-0">
                <Phone size={18} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-[#2c241e] font-serif text-lg mb-1">Contact Details</h4>
                <p className="text-[#8a7f72] text-sm font-mono">+962 7 9000 0000<br />concierge@outfitamman.com</p>
              </div>
            </div>

            <div className="contact-item flex items-start gap-4">
              <div className="w-10 h-10 rounded-full border border-[#d6cec0] flex items-center justify-center text-[#c6a87c] shrink-0">
                <Clock size={18} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-[#2c241e] font-serif text-lg mb-1">Opening Hours</h4>
                <p className="text-[#8a7f72] text-sm font-mono">Saturday - Thursday: 10:00 AM - 10:00 PM<br />Friday: 2:00 PM - 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* العمود الأيمن: نموذج المراسلة (Contact Form) */}
        <div className="contact-item bg-white p-10 md:p-14 rounded-[2rem] shadow-xl border border-[#f4f1eb]">
          <h3 className="text-[#2c241e] text-3xl font-serif mb-2">Send an Inquiry</h3>
          <p className="text-[#8a7f72] text-xs uppercase tracking-widest mb-10">We will get back to you shortly</p>
          
          <form className="flex flex-col gap-8">
            {/* حقل الاسم */}
            <div className="relative group">
              <input 
                type="text" 
                id="name"
                placeholder=" "
                className="block w-full bg-transparent border-b border-[#d6cec0] py-3 text-[#2c241e] text-sm focus:outline-none focus:border-[#c6a87c] transition-colors peer"
              />
              <label 
                htmlFor="name" 
                className="absolute left-0 top-3 text-[#8a7f72] text-sm uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#c6a87c] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px]"
              >
                Full Name
              </label>
            </div>

            {/* حقل البريد الإلكتروني */}
            <div className="relative group">
              <input 
                type="email" 
                id="email"
                placeholder=" "
                className="block w-full bg-transparent border-b border-[#d6cec0] py-3 text-[#2c241e] text-sm focus:outline-none focus:border-[#c6a87c] transition-colors peer"
              />
              <label 
                htmlFor="email" 
                className="absolute left-0 top-3 text-[#8a7f72] text-sm uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#c6a87c] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px]"
              >
                Email Address
              </label>
            </div>

            {/* حقل الرسالة */}
            <div className="relative group">
              <textarea 
                id="message"
                rows="4"
                placeholder=" "
                className="block w-full bg-transparent border-b border-[#d6cec0] py-3 text-[#2c241e] text-sm focus:outline-none focus:border-[#c6a87c] transition-colors resize-none peer"
              ></textarea>
              <label 
                htmlFor="message" 
                className="absolute left-0 top-3 text-[#8a7f72] text-sm uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#c6a87c] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px]"
              >
                Your Message
              </label>
            </div>

            {/* زر الإرسال */}
            <button 
              type="button" 
              className="mt-4 flex items-center justify-between w-full bg-[#2c241e] text-[#f8f6f0] px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#c6a87c] transition-colors duration-300 group"
            >
              Send Message
              <ArrowRight size={18} strokeWidth={2} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}