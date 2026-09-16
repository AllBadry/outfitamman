import { Link, useParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import ParallaxImage from '../components/ParallaxImage';
import { collections, f } from '../data/collections';
import NotFound from './NotFound';
import { ArrowLeft, ArrowUpRight, Plus } from 'lucide-react';

export default function CollectionPage() {
  const { slug } = useParams();
  const col = collections.find((c) => c.slug === slug);

  if (!col) return <NotFound />;

  const words = col.title.split(' ');
  const titleLines = words.length > 2 ? [words.slice(0, -1).join(' '), words[words.length - 1]] : words;

  return (
    <main className="w-full bg-[#f8f6f0] min-h-screen">
      <PageHero
        eyebrow={col.subtitle}
        titleLines={titleLines}
        subtitle={col.description}
        image={col.hero}
        height="h-[62vh] min-h-[440px]"
      />

      <section className="w-full py-24 px-6 md:px-12">
        <div className="max-w-[1300px] mx-auto">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-[1px] bg-[#c6a87c]" />
                <span className="text-[#c6a87c] uppercase tracking-[0.3em] text-xs font-bold">
                  {col.id} — {col.subtitle}
                </span>
              </div>
              <h2 className="text-[#2c241e] text-4xl md:text-5xl font-serif font-light leading-tight">
                The <span className="italic text-[#8b7355]">Edit</span>
              </h2>
            </div>
            <p className="text-[#5c4e42] text-xs sm:text-sm font-mono leading-relaxed max-w-sm">
              Each piece is hand-finished in-house and produced in strictly limited quantities.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {col.products.map((p, i) => (
              <Reveal key={p.name} delay={(i % 4) * 0.08} className="group cursor-pointer">
                <Link to="/cart" className="block">
                  <div className="relative overflow-hidden rounded-[1.6rem] aspect-[3/4] bg-[#e6dfd1] shadow-lg">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14110e]/70 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                    {p.tag && (
                      <span className="absolute top-4 left-4 px-3 py-1 bg-[#c6a87c] text-[#2c241e] text-[9px] uppercase tracking-widest font-bold rounded-full">
                        {p.tag}
                      </span>
                    )}
                    <span className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#f8f6f0]/90 text-[#2c241e] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      <Plus size={18} strokeWidth={1.5} />
                    </span>
                  </div>
                </Link>
                <div className="mt-5 flex items-start justify-between gap-3 border-b border-[#d6cec0]/50 pb-4">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.25em] text-[#8a7f72] font-mono mb-1">{p.cat}</p>
                    <h3 className="text-[#2c241e] font-serif text-xl leading-tight">{p.name}</h3>
                  </div>
                  <span className="text-[#c6a87c] font-mono text-sm whitespace-nowrap pt-1">{f(p.price)}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-6 mt-16 pt-10 border-t border-[#d6cec0]/40">
            <Link
              to="/collections"
              className="inline-flex items-center gap-3 text-[#2c241e] text-xs uppercase tracking-widest font-bold hover:text-[#c6a87c] transition-colors"
            >
              <ArrowLeft size={16} strokeWidth={2} />
              All Collections
            </Link>
            <Link
              to="/book-appointment"
              className="group inline-flex items-center gap-3 text-[#2c241e] text-xs uppercase tracking-widest font-bold hover:text-[#c6a87c] transition-colors"
            >
              Book a Private Fitting
              <span className="w-10 h-10 rounded-full border border-[#c6a87c]/60 flex items-center justify-center group-hover:bg-[#c6a87c] group-hover:border-[#c6a87c] transition-colors">
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative w-full h-[55vh] min-h-[380px] overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage src={col.products[Math.max(0, col.products.length - 1)]?.image} alt={col.title} speed={14} />
        </div>
        <div className="absolute inset-0 bg-[#14110e]/50" />
        <div className="relative z-10 w-full h-full max-w-[1300px] mx-auto px-6 md:px-12 flex flex-col justify-center">
          <Reveal>
            <span className="text-[#c6a87c] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">{col.subtitle}</span>
            <h3 className="text-[#f8f6f0] font-serif text-4xl md:text-6xl font-light leading-tight mb-8 max-w-2xl">
              The <span className="italic text-[#d6cec0]">Quiet Luxury</span> of {col.title}
            </h3>
            <Link
              to="/book-appointment"
              className="inline-flex items-center gap-3 text-[#f8f6f0] text-xs uppercase tracking-widest font-bold hover:text-[#c6a87c] transition-colors"
            >
              Reserve a Fitting
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}