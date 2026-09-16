import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import ParallaxImage from '../components/ParallaxImage';
import { IMG } from '../data/images';
import { collections } from '../data/collections';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Collections() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const moveAmount = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${moveAmount}`,
          pin: true,
          anticipatePin: 1,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      gsap.utils.toArray('.col-img').forEach((img) => {
        gsap.fromTo(img,
          { x: -60 },
          {
            x: 60,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: () => `+=${moveAmount}`,
              scrub: 1,
            },
          });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full bg-[#f8f6f0] min-h-screen">
      <PageHero
        eyebrow="Collections"
        titleLines={['Four Capsules,', 'One Wardrobe']}
        subtitle="Explore the houses of the Outfit Amman universe — each collection a study in silhouette, fabric and restraint."
        image={IMG.cinema}
        height="h-[65vh] min-h-[460px]"
      />

      {/* السكّرول الأفقي المثبّت (Pinned Horizontal) */}
      <section ref={sectionRef} className="relative w-full h-screen bg-[#14110e] overflow-hidden text-[#f8f6f0]">
        <div className="absolute top-24 md:top-28 left-6 md:left-12 z-20">
          <div className="flex items-center gap-4 mb-3">
            <span className="w-12 h-[1px] bg-[#c6a87c]" />
            <span className="text-[#c6a87c] uppercase tracking-[0.3em] text-[10px] font-bold">The Universe</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light leading-tight">
            Scroll <span className="italic text-[#d6cec0]">Through</span>
          </h2>
        </div>

        <div ref={trackRef} className="absolute top-0 left-0 h-full flex items-center pt-28 md:pt-24 px-6 md:px-12 w-max">
          <div className="flex gap-8 md:gap-14 items-center">
            <div className="w-[8vw] shrink-0" />

            {collections.map((c) => (
              <Link
                key={c.id}
                to={`/collections/${c.slug}`}
                className="relative flex-shrink-0 w-[84vw] md:w-[620px] h-[56vh] md:h-[560px] rounded-[2rem] overflow-hidden shadow-2xl group cursor-pointer bg-[#2c241e] block"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={c.hero}
                    alt={c.title}
                    className="col-img absolute top-0 -left-[8%] w-[116%] h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b09]/85 via-[#0d0b09]/20 to-transparent" />

                <div className="absolute top-6 right-8 text-6xl md:text-8xl font-serif text-[#f8f6f0]/10 font-bold select-none">
                  {c.id}
                </div>

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">
                  <span className="block text-[#c6a87c] text-[10px] uppercase tracking-[0.25em] font-bold mb-3">{c.subtitle}</span>
                  <h3 className="text-[#f8f6f0] font-serif text-3xl md:text-5xl font-light mb-4">{c.title}</h3>
                  <p className="text-[#d6cec0]/70 text-xs md:text-sm font-mono leading-relaxed max-w-md mb-6">{c.description}</p>
                  <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold text-[#f8f6f0] border-b border-[#c6a87c] pb-1 group-hover:text-[#c6a87c] transition-colors">
                    View Collection ({c.products.length})
                    <ArrowRight size={14} strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            ))}

            <div className="w-[12vw] shrink-0 flex flex-col items-center justify-center text-[#d6cec0]/40 font-mono text-sm">
              <span className="w-12 h-[1px] bg-[#d6cec0]/40 mb-4" />
              End of Capsules
            </div>
          </div>
        </div>
      </section>

      {/* ترشيحات مختارة */}
      <section className="w-full py-28 px-6 md:px-12">
        <div className="max-w-[1300px] mx-auto">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-[1px] bg-[#c6a87c]" />
                <span className="text-[#c6a87c] uppercase tracking-[0.3em] text-xs font-bold">Curated Pairs</span>
              </div>
              <h2 className="text-[#2c241e] text-4xl md:text-5xl font-serif font-light leading-tight">
                Pieces That <span className="italic text-[#8b7355]">Pair</span> Themselves
              </h2>
            </div>
            <p className="text-[#5c4e42] text-xs sm:text-sm font-mono leading-relaxed max-w-sm">
              Our curators pair across capsules — a midnight suit with an olive scarf, or a chalk blazer with croc loafers.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {collections.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.08} className="group relative overflow-hidden rounded-[1.6rem] aspect-[4/5] cursor-pointer">
                <Link to={`/collections/${c.slug}`} className="block w-full h-full">
                  <img src={c.products[0].image} alt={c.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14110e]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute bottom-5 left-5 text-[#f8f6f0] font-serif text-lg opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {c.title.split(' ')[0]} 0{i + 1}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* قسم بارالاكس تفاعلي */}
      <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage src={IMG.darkSuit} alt="Dark suit portrait" speed={12} />
        </div>
        <div className="absolute inset-0 bg-[#14110e]/55" />
        <div className="relative z-10 w-full h-full max-w-[1300px] mx-auto px-6 md:px-12 flex items-center justify-between gap-8">
          <Reveal className="max-w-xl">
            <span className="text-[#c6a87c] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Made For You</span>
            <h3 className="text-[#f8f6f0] font-serif text-4xl md:text-6xl font-light leading-tight">
              Every Capsule Can Be <span className="italic text-[#d6cec0]">Tailored</span>
            </h3>
          </Reveal>
          <Reveal delay={0.15} className="hidden md:flex w-28 h-28 rounded-full border border-[#c6a87c]/60 items-center justify-center text-[#c6a87c] font-mono text-[10px] uppercase tracking-widest text-center shrink-0">
            Visit the <br /> Atelier
          </Reveal>
        </div>
      </section>
    </main>
  );
}