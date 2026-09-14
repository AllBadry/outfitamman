import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import ParallaxImage from '../components/ParallaxImage';
import { IMG } from '../data/images';
import { ArrowUpRight, Plus } from 'lucide-react';

const products = [
  { name: 'Camel Wool Overcoat', cat: 'Outerwear', price: 'JD 420', image: IMG.blazer, tag: 'New' },
  { name: 'Midnight Navy Suit', cat: 'Bespoke Suits', price: 'JD 780', image: IMG.manSuit, tag: 'New' },
  { name: 'Oxford Brogues', cat: 'Fine Footwear', price: 'JD 310', image: IMG.shoes, tag: 'New' },
  { name: 'Silk Knit Tie', cat: 'Accessories', price: 'JD 85', image: IMG.tie, tag: 'New' },
  { name: 'Linen Brush Shirt', cat: 'Shirting', price: 'JD 140', image: IMG.shirt, tag: 'New' },
  { name: 'Full-Grain Tote', cat: 'Leather Goods', price: 'JD 265', image: IMG.bag, tag: 'New' },
  { name: 'Double-Breasted Blazer', cat: 'Bespoke Suits', price: 'JD 640', image: IMG.model, tag: 'New' },
  { name: 'Heritage Loafers', cat: 'Fine Footwear', price: 'JD 290', image: IMG.mocassin, tag: 'New' },
];

export default function NewArrivals() {
  return (
    <main className="w-full bg-[#f8f6f0] min-h-screen">
      <PageHero
        eyebrow="New Arrivals"
        titleLines={['The New', 'Season']}
        subtitle="Fresh silhouettes, hand-finished pieces and rare fabrics — the first edits of the season, delivered before the turning of the year."
        image={IMG.manStreet}
        height="h-[72vh] min-h-[500px]"
      />

      {/* مؤشر القائمة العلوي */}
      <div className="sticky top-[76px] z-30 bg-[#f8f6f0]/90 backdrop-blur-md border-b border-[#d6cec0]/40">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12 flex items-center gap-6 overflow-x-auto py-4 text-[11px] uppercase tracking-widest font-bold text-[#8a7f72]">
          {['All', 'Bespoke Suits', 'Shirting', 'Outerwear', 'Footwear', 'Accessories'].map((c) => (
            <a href="#" key={c} onClick={(e) => e.preventDefault()} className="whitespace-nowrap hover:text-[#c6a87c] transition-colors">
              {c}
            </a>
          ))}
        </div>
      </div>

      {/* شبكة المنتجات */}
      <section className="w-full py-24 px-6 md:px-12">
        <div className="max-w-[1300px] mx-auto">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-[1px] bg-[#c6a87c]" />
                <span className="text-[#c6a87c] uppercase tracking-[0.3em] text-xs font-bold">Fresh Drops</span>
              </div>
              <h2 className="text-[#2c241e] text-4xl md:text-5xl font-serif font-light leading-tight">
                Arrived Just <br className="sm:hidden" /> In <span className="italic text-[#8b7355]">Stock</span>
              </h2>
            </div>
            <p className="text-[#5c4e42] text-xs sm:text-sm font-mono leading-relaxed max-w-sm">
              Each piece is numbered, quality-checked and finished in-house before it reaches the floor. Limited quantities.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
            {products.map((p, i) => (
              <Reveal key={p.name} delay={(i % 4) * 0.08} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-[1.6rem] aspect-[3/4] bg-[#e6dfd1] shadow-lg">
                  <img
                    src={p.image}
                    alt={p.name}
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
                <div className="mt-5 flex items-start justify-between gap-3 border-b border-[#d6cec0]/50 pb-4">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.25em] text-[#8a7f72] font-mono mb-1">{p.cat}</p>
                    <h3 className="text-[#2c241e] font-serif text-xl leading-tight">{p.name}</h3>
                  </div>
                  <span className="text-[#c6a87c] font-mono text-sm whitespace-nowrap pt-1">{p.price}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* بانر بارالاكس */}
      <section className="relative w-full h-[55vh] min-h-[380px] overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage src={IMG.casual} alt="Men casual fashion" speed={14} />
        </div>
        <div className="absolute inset-0 bg-[#14110e]/45" />
        <div className="relative z-10 w-full h-full max-w-[1300px] mx-auto px-6 md:px-12 flex flex-col justify-center">
          <Reveal>
            <span className="text-[#c6a87c] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Wardrobe Edit</span>
            <h3 className="text-[#f8f6f0] font-serif text-4xl md:text-6xl font-light leading-tight mb-8 max-w-2xl">
              The Quiet <span className="italic text-[#d6cec0]">Luxury</span> of Everyday Dressing
            </h3>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-4 text-[#f8f6f0] text-xs uppercase tracking-widest font-bold hover:text-[#c6a87c] transition-colors"
            >
              Explore the Edit
              <span className="w-10 h-10 rounded-full border border-[#c6a87c]/60 flex items-center justify-center">
                <ArrowUpRight size={18} strokeWidth={1.5} />
              </span>
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}