import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// صورة بارالاكس: يجب أن تكون داخل حاوية relative + overflow-hidden
export default function ParallaxImage({ src, alt = '', className = '', speed = 12 }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const wrap = ref.current.parentElement;
      if (!wrap) return;
      gsap.fromTo(ref.current,
        { yPercent: -speed },
        {
          yPercent: speed,
          ease: 'none',
          scrollTrigger: { trigger: wrap, start: 'top bottom', end: 'bottom top', scrub: true },
        });
    }, ref);
    return () => ctx.revert();
  }, [speed]);

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={`absolute top-[-17%] left-0 w-full h-[135%] object-cover ${className}`}
    />
  );
}