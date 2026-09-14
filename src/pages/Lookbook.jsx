import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import ParallaxImage from '../components/ParallaxImage';
import { IMG } from '../data/images';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const looks = [
  {
    num: 'Look 001',
    title: 'The Architect',
    tag: 'Autumn / Winter 2026',
    desc: 'Charcoal herringbone, one-button, no shoulder padding — the city uniform for long mezzanine arguments.',
    image: IMG.manPortrait,
    tall: true,
  },
  {
    num: 'Look 002',
    title: 'The Long Weekender',
    tag: 'Resort 2026',
    desc: 'Unstructured linen blazer over a box-pleat trouser. For the airport, the coast and everywhere after.',
    image: IMG.manStreet,
    tall: false,
  },
  {
    num: 'Look 003',
    title: 'The Silent Hour',
    tag: 'Evening Edit',
    desc: 'Midnight navy, satin peak lapels, a single mother-of-pearl button. The quietest thing in the room.',
    image: IMG.darkSuit,
    tall: false,
  },
  {
    num: 'Look 004',
    title: 'Second Skin',
    tag: 'Bespoke One-Off',
    desc: 'A double-breasted in brushed herringbone wool, cut to a man who runs meetings the way he runs mornings.',
    image: IMG.stylishMan,
    tall: true,
  },
];

export default function Lookbook() {
  return (
    <main className="w-full bg-[#f8f6f0] min-h-screen">
      <PageHero
        eyebrow="Lookbook 2026"
        titleLines={['A Study in', 'Stillness']}
        subtitle="Five silhouettes photographed at golden hour — no retouching of the drape, no fixing of the fold."
        image={IMG.model}
        height="h-[70vh] min-h-[480px]"
      />

      {/* المقدمة */}
      <section className="w-full py-24 px-6 md:px-12">
        <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between gap-10 items-start md:items-end">
          <Reveal className="max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-[#c6a87c]" />
              <span className="text-[#c6a87c] uppercase tracking-[0.3em] text-xs font-bold">The Edit</span>
            </div>
            <h2 className="text-[#2c241e] text-4xl md:text-5xl font-serif font-light leading-tight">
              Shot on a single <span className="italic text-[#8b7355]">afternoon</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="text-[#5c4e42] text-xs sm:text-sm font-mono leading-relaxed max-w-sm">
            This year the book is deliberately quiet — fewer props, more posture. Each image is a straight record of the cut.
          </Reveal>
        </div>
      </section>

      {/* معرض البارالاكس */}
      <section className="w-full px-6 md:px-12 pb-28">
        <div className="max-w-[1300px] mx-auto flex flex-col gap-24">
          {looks.map((look, i) => (
            <div
              key={look.num}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                i % 2 === 1 ? 'lg:[direction:rtl]' : ''
              }`}
              style={i % 2 === 1 ? { direction: 'rtl' } : {}}
            >
              <div className={`${look.tall ? 'lg:col-span-7' : 'lg:col-span-6'}`} style={{ direction: 'ltr' }}>
                <div
                  className={`relative overflow-hidden rounded-[2rem] shadow-2xl ${
                    look.tall ? 'h-[68vh] min-h-[460px]' : 'h-[52vh] min-h-[360px]'
                  }`}
                >
                  <ParallaxImage src={look.image} alt={look.title} speed={10} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14110e]/30 to-transparent" />
                  <span className="absolute top-6 left-6 px-4 py-1.5 bg-[#f8f6f0]/85 text-[#2c241e] text-[9px] uppercase tracking-widest font-bold rounded-full">
                    {look.num}
                  </span>
                </div>
              </div>

              <div className={`${look.tall ? 'lg:col-span-5' : 'lg:col-span-6'}`} style={{ direction: 'ltr' }}>
                <Reveal>
                  <span className="text-[#c6a87c] uppercase tracking-[0.25em] text-[10px] font-bold mb-4 block">{look.tag}</span>
                  <h3 className="text-[#2c241e] font-serif text-4xl md:text-5xl font-light leading-tight mb-6">{look.title}</h3>
                  <p className="text-[#8a7f72] text-sm font-mono leading-relaxed max-w-md mb-8">{look.desc}</p>
                  <Link
                    to="/tailoring"
                    className="inline-flex items-center gap-3 text-[10px] uppercase tracking-widest font-bold text-[#2c241e] border-b border-[#2c241e] pb-1 hover:text-[#c6a87c] hover:border-[#c6a87c] transition-colors"
                  >
                    Made to Order
                    <ArrowRight size={14} strokeWidth={1.5} />
                  </Link>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* شريط اقتباس بارالاكس */}
      <section className="relative w-full h-[55vh] min-h-[380px] overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage src={IMG.manSmile} alt="Man in suit smiling" speed={14} />
        </div>
        <div className="absolute inset-0 bg-[#14110e]/55" />
        <div className="relative z-10 w-full h-full max-w-[1300px] mx-auto px-6 md:px-12 flex flex-col justify-center">
          <Reveal>
            <span className="text-[#c6a87c] uppercase tracking-[0.3em] text-xs font-bold mb-6 block">From the Notes</span>
            <blockquote className="text-[#f8f6f0] font-serif text-3xl md:text-5xl font-light leading-snug max-w-3xl">
              “A man’s posture is the suit’s <span className="italic text-[#d6cec0]">best tailor</span> — we simply build for the way he stands.”
            </blockquote>
            <p className="mt-8 text-[#d6cec0]/60 font-mono text-xs uppercase tracking-widest">— Head Cutter, Outfit Amman</p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-[#f8f6f0] py-24 px-6 md:px-12">
        <div className="max-w-[1300px] mx-auto flex flex-col items-center text-center">
          <Reveal>
            <h3 className="text-[#2c241e] font-serif text-4xl md:text-6xl font-light leading-tight mb-6">
              See yourself <span className="italic text-[#8b7355]">in the book</span>
            </h3>
            <p className="text-[#5c4e42] text-sm font-mono max-w-md mx-auto mb-10">
              Every look here is a commission, never a stock item. Your name can sit beside Look 005.
            </p>
            <Link
              to="/book-appointment"
              className="inline-flex items-center gap-4 px-8 py-4 bg-[#2c241e] text-[#f8f6f0] text-xs uppercase tracking-widest font-bold rounded-full hover:bg-[#c6a87c] hover:text-[#2c241e] transition-colors"
            >
              Begin Your Look
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}