import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CinematicDive() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    // الأجهزة الكبيرة (Liquid + pinned timeline كامل)
    mm.add('(min-width: 768px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=2500',
          scrub: 1.2,
          pin: true,
        }
      });

      tl.to('.fly-text', { scale: 15, opacity: 0, duration: 0.8, ease: 'power2.in' }, 0);
      tl.to('.portal-mask', { clipPath: 'inset(0% 0% 0% 0% round 0px)', duration: 1.2, ease: 'power2.inOut' }, 0.2);
      tl.fromTo('.portal-img', { scale: 1.6 }, { scale: 1, duration: 1.2, ease: 'power2.inOut' }, 0.2);
      tl.from('.cinematic-reveal', { y: 40, opacity: 0, duration: 0.6, stagger: 0.2, ease: 'power3.out' }, 0.9);
    });

    // الجوال: مسافة سكرول أقل + أوزان أنيميشن أخف لتحسين الأداء
    mm.add('(max-width: 767px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=1100',
          scrub: 1,
          pin: true,
        }
      });

      tl.to('.fly-text', { scale: 8, opacity: 0, duration: 0.7, ease: 'power2.in' }, 0);
      tl.to('.portal-mask', { clipPath: 'inset(0% 0% 0% 0% round 0px)', duration: 1, ease: 'power2.inOut' }, 0.15);
      tl.fromTo('.portal-img', { scale: 1.4 }, { scale: 1, duration: 1, ease: 'power2.inOut' }, 0.15);
      tl.from('.cinematic-reveal', { y: 30, opacity: 0, duration: 0.5, stagger: 0.15, ease: 'power3.out' }, 0.6);
    });

    return () => mm.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full h-screen bg-[#14110e] text-[#f8f6f0] flex items-center justify-center overflow-hidden"
    >
      {/* 
        الطبقة الأولى: النص الذي سنخترقه (Fly-past Text)
        لون داكن جداً ليعطي تبايناً سينمائياً 
      */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <h2 className="fly-text text-center font-serif text-4xl sm:text-5xl md:text-7xl font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[#c6a87c]">
          Enter The <br /> Capsule
        </h2>
      </div>

      {/* 
        الطبقة الثانية: البوابة (The Portal)
        تبدأ كنافذة صغيرة بحواف دائرية وتتسع لتملأ الشاشة.
        تم استخدام inline-style لتعريف الـ clip-path المبدئي ليسهل على GSAP تحريكه.
      */}
      <div 
        className="portal-mask absolute inset-0 z-20 flex items-center justify-center bg-[#1a1511]"
        style={{ clipPath: 'inset(40% 40% 40% 40% round 40px)' }}
      >
        {/* الصورة الدراماتيكية داخل البوابة */}
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-black/40 z-10" /> {/* طبقة تظليل سينمائية */}
          <img 
            className="portal-img w-full h-full object-cover object-top"
            src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1920&q=80" 
            alt="Cinematic Fashion Shot" 
          />

          {/* العناوين التي تظهر بعد اكتمال الغوص */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
            <span className="cinematic-reveal text-[#c6a87c] text-xs md:text-sm font-bold tracking-[0.4em] uppercase mb-4">
              Autumn / Winter 2026
            </span>
            <h3 className="cinematic-reveal text-4xl sm:text-5xl md:text-8xl font-serif font-light leading-none mb-6 text-white drop-shadow-2xl">
              Midnight <br /> <span className="italic text-[#d6cec0]">Elegance</span>
            </h3>
            <button className="cinematic-reveal mt-8 px-8 py-3 bg-transparent border border-[#c6a87c] text-[#c6a87c] text-xs uppercase tracking-widest hover:bg-[#c6a87c] hover:text-[#14110e] transition-colors duration-500 rounded-full">
              Watch The Film
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}