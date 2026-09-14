import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PageHero({
  eyebrow,
  titleLines = [],
  subtitle = '',
  image,
  height = 'h-[80vh] min-h-[540px]',
  dark = true,
}) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ph-img', { opacity: 0, scale: 1.15, duration: 1.6, ease: 'power2.out' });
      gsap.from('.ph-eyebrow', { y: 24, opacity: 0, duration: 1, ease: 'power3.out' });
      gsap.from('.ph-title', { y: 70, opacity: 0, duration: 1.2, delay: 0.12, stagger: 0.12, ease: 'power3.out' });
      gsap.from('.ph-sub', { y: 30, opacity: 0, duration: 1, delay: 0.45, ease: 'power3.out' });

      gsap.fromTo('.ph-img',
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: 'none',
          scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: 1 },
        });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className={`relative w-full ${height} ${dark ? 'bg-[#14110e]' : 'bg-[#f8f6f0]'} overflow-hidden flex items-end`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="ph-img absolute top-0 left-0 w-full h-full">
          <img src={image} alt={eyebrow} className="w-full h-full object-cover" />
        </div>
        <div
          className={`absolute inset-0 ${
            dark
              ? 'bg-gradient-to-t from-[#14110e] via-[#14110e]/45 to-[#14110e]/20'
              : 'bg-gradient-to-t from-[#f8f6f0] via-[#f8f6f0]/30 to-transparent'
          }`}
        />
        {dark && <div className="absolute inset-0 bg-gradient-to-r from-[#14110e]/55 to-transparent" />}
      </div>

      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 md:px-12 pt-40 pb-14 md:pb-20">
        <div className="ph-eyebrow flex items-center gap-4 mb-6">
          <span className="w-12 h-[1px] bg-[#c6a87c]" />
          <span className="text-[#c6a87c] uppercase tracking-[0.3em] text-xs font-bold">{eyebrow}</span>
          <span className="w-24 h-[1px] bg-[#c6a87c]/30" />
        </div>
        <h1 className={`font-serif font-light leading-[1.04] ${dark ? 'text-[#f8f6f0]' : 'text-[#2c241e]'}`}>
          {titleLines.map((line, i) => (
            <span key={i} className="ph-title block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              {line}
            </span>
          ))}
        </h1>
        {subtitle && (
          <p className={`ph-sub mt-6 max-w-md text-xs sm:text-sm md:text-base font-mono leading-relaxed ${dark ? 'text-[#d6cec0]/85' : 'text-[#5c4e42]'}`}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}