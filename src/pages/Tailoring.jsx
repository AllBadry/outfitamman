import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import ParallaxImage from '../components/ParallaxImage';
import { IMG } from '../data/images';
import { Link } from 'react-router-dom';
import { ArrowRight, Ruler, Scissors, PenLine, BadgeCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Ruler,
    title: 'The Consultation',
    desc: 'A one-hour private session to understand posture, preference and occasions — in-house or at your home.',
  },
  {
    icon: Scissors,
    title: 'Measured & Cut',
    desc: '27 measurements recorded by hand. The cloth is then cut on our heritage pattern block, never duplicated.',
  },
  {
    icon: PenLine,
    title: 'Three Fittings',
    desc: 'Basted fittings at the shoulders, waist and final hand-finish. Adjustments happen live on your body.',
  },
  {
    icon: BadgeCheck,
    title: 'Signed & Delivered',
    desc: 'Monogrammed, pressed and delivered in a numbered garment bag — with notes on how to wear and care for it.',
  },
];

export default function Tailoring() {
  const sectionRef = useRef(null);
  const ritualRef = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ritualRef.current,
          start: 'top top',
          end: '+=2200',
          scrub: 1.2,
          pin: true,
        },
      });
      tl.to('.ritual-fly', { scale: 14, opacity: 0, duration: 0.8, ease: 'power2.in' }, 0);
      tl.to('.ritual-mask', { clipPath: 'inset(0% 0% 0% 0% round 0px)', duration: 1.3, ease: 'power2.inOut' }, 0.25);
      tl.fromTo('.ritual-img', { scale: 1.6 }, { scale: 1, duration: 1.3, ease: 'power2.inOut' }, 0.25);
      tl.from('.t-step', { y: 50, opacity: 0, duration: 0.7, stagger: 0.25, ease: 'power3.out' }, 1);
    });

    mm.add('(max-width: 767px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ritualRef.current,
          start: 'top top',
          end: '+=1200',
          scrub: 1,
          pin: true,
        },
      });
      tl.to('.ritual-fly', { scale: 9, opacity: 0, duration: 0.7, ease: 'power2.in' }, 0);
      tl.to('.ritual-mask', { clipPath: 'inset(0% 0% 0% 0% round 0px)', duration: 1, ease: 'power2.inOut' }, 0.2);
      tl.fromTo('.ritual-img', { scale: 1.4 }, { scale: 1, duration: 1, ease: 'power2.inOut' }, 0.2);
      tl.from('.t-step', { y: 40, opacity: 0, duration: 0.5, stagger: 0.15, ease: 'power3.out' }, 0.65);
    });

    return () => mm.revert();
  }, []);

  return (
    <main ref={sectionRef} className="w-full bg-[#f8f6f0] min-h-screen">
      <PageHero
        eyebrow="Bespoke Tailoring"
        titleLines={['Cut &', 'Constructed']}
        subtitle="From the first tape measure to the final press — a single craftsman, a single silhouette, zero compromise."
        image={IMG.tailoring}
        height="h-[72vh] min-h-[500px]"
      />

      {/* فلسفة الحرفة */}
      <section className="w-full py-28 px-6 md:px-12">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-[#c6a87c]" />
              <span className="text-[#c6a87c] uppercase tracking-[0.3em] text-xs font-bold">The Philosophy</span>
            </div>
            <h2 className="text-[#2c241e] text-4xl md:text-6xl font-serif font-light leading-[1.05] mb-8">
              True elegance is <span className="italic text-[#8b7355]">invisible.</span>
            </h2>
            <p className="text-[#5c4e42] text-sm leading-relaxed font-mono max-w-lg mb-6">
              A bespoke garment should vanish into the moment — the collar sits, the shoulder moves, the trouser breaks exactly once. We do not decorate; we construct.
            </p>
            <p className="text-[#8a7f72] text-sm leading-relaxed font-mono max-w-lg">
              Every commission passes the hands of a single cutter end-to-end. That continuity is the entire secret.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <Reveal delay={0.1} className="relative overflow-hidden rounded-[2rem] aspect-[3/4]">
              <img src={IMG.suitDetail} alt="Suit construction" className="w-full h-full object-cover" />
            </Reveal>
            <Reveal delay={0.2} className="relative overflow-hidden rounded-[2rem] aspect-[3/4] mt-12">
              <img src={IMG.fabric} alt="Fabric rolls" className="w-full h-full object-cover" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* المشهد السينمائي المثبّت: طقوس القياس */}
      <section ref={ritualRef} className="relative w-full h-screen bg-[#14110e] text-[#f8f6f0] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <h2 className="ritual-fly text-center font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.2em] uppercase text-[#c6a87c]">
            The Ritual
          </h2>
        </div>

        <div
          className="ritual-mask absolute inset-0 z-20 flex items-center justify-center bg-[#0d0b09]"
          style={{ clipPath: 'inset(38% 38% 38% 38% round 40px)' }}
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-black/50 z-10" />
            <img
              className="ritual-img w-full h-full object-cover object-top"
              src={IMG.cinema}
              alt="Atelier cinematic"
            />

            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="w-full max-w-[1300px] mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {steps.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.title} className="t-step bg-[#14110e]/80 backdrop-blur-md border border-[#c6a87c]/20 rounded-[1.5rem] p-6">
                      <span className="text-[#c6a87c] font-serif text-2xl mb-4 block">0{i + 1}</span>
                      <div className="w-9 h-9 rounded-xl bg-[#c6a87c]/15 text-[#c6a87c] flex items-center justify-center mb-5">
                        <Icon size={18} strokeWidth={1.5} />
                      </div>
                      <h3 className="font-serif text-xl md:text-2xl font-light mb-3">{s.title}</h3>
                      <p className="text-[#d6cec0]/70 text-xs font-mono leading-relaxed">{s.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* الأقمشة */}
      <section className="relative w-full bg-[#f8f6f0] py-28 px-6 md:px-12">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative h-[60vh] min-h-[420px] overflow-hidden rounded-[2rem] order-2 lg:order-1">
            <ParallaxImage src={IMG.shirt} alt="Shirting fabric" speed={10} />
          </div>
          <Reveal className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-[#c6a87c]" />
              <span className="text-[#c6a87c] uppercase tracking-[0.3em] text-xs font-bold">Cloth & Finish</span>
            </div>
            <h2 className="text-[#2c241e] text-4xl md:text-5xl font-serif font-light leading-tight mb-8">
              Cloth is the <span className="italic text-[#8b7355]">first argument.</span>
            </h2>
            <div className="flex flex-col gap-6">
              {[
                ['Italian Wools', 'Loro Piana, Vitale Barberis and Scabal — from 240g summer weights to 420g winter cloth.'],
                ['Hand-Finished Linens & Cottons', 'Irish linens, Egyptian cotton duties and Japanese selvedge for soft shoulders.'],
                ['Silk & Satin Details', 'Half-canvas fronts, functional buttonholes and silk-lined sleeves, pressed by hand.'],
              ].map(([t, d]) => (
                <div key={t} className="border-b border-[#d6cec0]/50 pb-6">
                  <h4 className="text-[#2c241e] font-serif text-xl mb-2">{t}</h4>
                  <p className="text-[#8a7f72] text-sm font-mono leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* دعوة الحجز */}
      <section className="relative w-full bg-[#14110e] py-28 px-6 md:px-12 overflow-hidden">
        <div className="absolute -top-24 -right-16 text-[#2c241e] text-[320px] font-serif leading-none select-none pointer-events-none">M</div>
        <div className="relative z-10 max-w-[1300px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <Reveal>
            <span className="text-[#c6a87c] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Begin Yours</span>
            <h3 className="text-[#f8f6f0] font-serif text-4xl md:text-6xl font-light leading-tight">
              Your first fitting <br /> is an <span className="italic text-[#d6cec0]">appointment</span>
            </h3>
          </Reveal>
          <Reveal delay={0.15} className="shrink-0">
            <Link
              to="/book-appointment"
              className="group flex items-center gap-4 px-8 py-4 bg-[#c6a87c] text-[#2c241e] text-xs uppercase tracking-widest font-bold rounded-full hover:bg-[#b5986c] transition-colors"
            >
              Book a Fitting
              <ArrowRight size={16} strokeWidth={2} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}