import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Reveal({ children, className = '', delay = 0, y = 50, once = true }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay,
          ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 88%', once },
        });
    }, ref);
    return () => ctx.revert();
  }, [delay, y, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}