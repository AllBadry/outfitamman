import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function NotFound() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.nf-404', { y: 80, opacity: 0, scale: 0.9, duration: 1.4, ease: 'power3.out' });
      gsap.from('.nf-ring', { scale: 0, opacity: 0, duration: 1.4, ease: 'expo.out', delay: 0.2, transformOrigin: 'center center' });
      gsap.from('.nf-text', { y: 30, opacity: 0, duration: 1, stagger: 0.1, delay: 0.4, ease: 'power3.out' });
      gsap.from('.nf-btn', { y: 20, opacity: 0, duration: 1, delay: 0.7, ease: 'power3.out' });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={ref}
      className="relative w-full min-h-screen bg-[#14110e] flex items-center justify-center overflow-hidden text-[#f8f6f0]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#14110e] via-[#1d1813] to-[#14110e]" />

      <div className="nf-ring absolute w-[420px] h-[420px] md:w-[560px] md:h-[560px] border border-[#c6a87c]/15 rounded-full" />
      <div className="nf-ring absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] border border-[#c6a87c]/10 rounded-full" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <span className="nf-text text-[#c6a87c] uppercase tracking-[0.35em] text-xs font-bold mb-6">Page not found</span>
        <div className="nf-404 font-serif text-[120px] md:text-[220px] leading-none font-bold tracking-tight">
          4<span className="italic text-[#c6a87c]">0</span>4
        </div>
        <p className="nf-text max-w-md text-[#d6cec0]/70 font-mono text-sm leading-relaxed mb-10">
          Even the sharpest lapel has its limits. This seam doesn&apos;t exist — or it has been restyled beyond recognition.
        </p>
        <Link
          to="/"
          className="nf-btn group flex items-center gap-4 px-8 py-4 bg-[#c6a87c] text-[#2c241e] text-xs uppercase tracking-widest font-bold rounded-full hover:bg-[#b5986c] transition-colors"
        >
          Back to the Collection
          <ArrowRight size={16} strokeWidth={2} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </main>
  );
}