import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutCinematic() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // إعداد الـ Timeline مع خاصية التثبيت (Pin)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=2500', // مسافة الغوص
          scrub: 1.2,
          pin: true,
        }
      });

      // 1. تأثير الغوص: الكلمة المركزية (Discover) تكبر وتخترقها
      tl.to('.fly-text', {
        scale: 15,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.in',
      }, 0);

      // 2. اتساع البوابة
      tl.to('.portal-mask', {
        clipPath: 'inset(0% 0% 0% 0% round 0px)',
        duration: 1.2,
        ease: 'power2.inOut',
      }, 0.2);

      // 3. تأثير الكاميرا للصورة
      tl.fromTo('.portal-img',
        { scale: 1.6 },
        { scale: 1, duration: 1.2, ease: 'power2.inOut' },
        0.2
      );

      // 4. ظهور قصة العلامة التجارية (About Content)
      tl.from('.cinematic-reveal', {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
      }, 0.9);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full h-screen bg-[#14110e] text-[#f8f6f0] flex items-center justify-center overflow-hidden"
    >
      {/* 
        الكلمة التي تعبر من خلالها (المدخل للقصة)
      */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <h2 className="fly-text text-center font-serif text-5xl md:text-7xl font-bold tracking-[0.2em] uppercase text-[#c6a87c]">
          Discover <br /> Our Story
        </h2>
      </div>

      {/* البوابة السينمائية */}
      <div 
        className="portal-mask absolute inset-0 z-20 flex items-center justify-center bg-[#1a1511]"
        style={{ clipPath: 'inset(40% 40% 40% 40% round 40px)' }}
      >
        <div className="relative w-full h-full">
          {/* تظليل داكن لضمان وضوح النص */}
          <div className="absolute inset-0 bg-black/60 z-10" /> 
          
          {/* صورة تعكس الفخامة والخياطة الراقية */}
          <img 
            className="portal-img w-full h-full object-cover object-[50%_30%]"
            src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&w=1920&q=80" 
            alt="Outfit Amman Tailoring" 
          />

          {/* محتوى الـ About الذي يظهر بعد الغوص */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6 max-w-3xl mx-auto">
            <span className="cinematic-reveal text-[#c6a87c] text-xs md:text-sm font-bold tracking-[0.4em] uppercase mb-4">
              About Outfit Amman
            </span>
            
            <h3 className="cinematic-reveal text-4xl md:text-7xl font-serif font-light leading-tight mb-6 text-white drop-shadow-2xl">
              Crafting <span className="italic text-[#d6cec0]">Confidence</span> <br /> Since 2026
            </h3>
            
            <p className="cinematic-reveal text-[#d6cec0] text-sm md:text-base font-mono leading-relaxed mb-10 max-w-xl">
              Born in the heart of Amman, we blend traditional sartorial craftsmanship 
              with contemporary aesthetics. Every garment is a testament to our dedication 
              to uncompromising quality, premium fabrics, and absolute elegance.
            </p>
            
            <button className="cinematic-reveal px-8 py-3 bg-transparent border border-[#c6a87c] text-[#c6a87c] text-xs uppercase tracking-widest hover:bg-[#c6a87c] hover:text-[#14110e] transition-colors duration-500 rounded-full">
              Explore Our Heritage
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}