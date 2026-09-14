import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CraftSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.craft-text', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
      });

      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
        yPercent: 25,
        ease: 'none',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-[#f8f6f0] py-32 px-6 md:px-12 z-40">
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center gap-16">
        
        <div className="flex-1 max-w-xl">
          <div className="craft-text flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-[#c6a87c]" />
            <span className="text-[#c6a87c] uppercase tracking-[0.3em] text-xs font-bold">The Heritage</span>
          </div>
          
          <h2 className="craft-text text-[#2c241e] text-5xl md:text-6xl font-serif font-light leading-[1.1] mb-8">
            Mastering <br /> The Art of <br /> <span className="italic text-[#8b7355]">Tailoring</span>
          </h2>
          
          <p className="craft-text text-[#5c4e42] text-sm leading-relaxed mb-10 font-mono">
            At Outfit Amman, we believe that true elegance lies in the details. 
            Every stitch, every fold, and every choice of fabric is meticulously 
            curated to create garments that don't just fit your body, but complement your legacy.
          </p>
          
          <button className="craft-text group flex items-center gap-4 text-[#2c241e] text-xs uppercase tracking-widest font-bold hover:text-[#c6a87c] transition-colors">
            Explore The Process
            <span className="w-10 h-10 rounded-full border border-[#d6cec0] flex items-center justify-center group-hover:border-[#c6a87c] transition-colors">
              <ArrowRight size={16} strokeWidth={1.5} />
            </span>
          </button>
        </div>

        <div className="flex-1 w-full relative">
          <div className="craft-text relative w-full aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl bg-[#2c241e]">
            {/* الصورة الجديدة المستقرة لأدوات التفصيل والخياطة */}
            <img 
              ref={imageRef}
              src="https://placehold.co/800x1000/2c241e/c6a87c?text=Outfit+Amman%5CnCraftsmanship" 
              alt="Tailoring process" 
              className="absolute top-[-15%] left-0 w-full h-[130%] object-cover opacity-90"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#c6a87c] rounded-2xl -z-10" />
            <div className="absolute top-8 right-8 w-16 h-16 border border-white/40 rounded-full backdrop-blur-sm flex items-center justify-center">
              <span className="text-white text-[10px] uppercase tracking-widest font-bold">Est.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}