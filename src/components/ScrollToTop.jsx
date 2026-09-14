import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
        requestAnimationFrame(() => ScrollTrigger.refresh());
        return;
      }
    }
    window.scrollTo(0, 0);
    requestAnimationFrame(() => requestAnimationFrame(() => ScrollTrigger.refresh()));
  }, [pathname, hash]);

  return null;
}