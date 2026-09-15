import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { IMG } from '../data/images';
import { ShoppingBag, ArrowRight, ArrowUpRight } from 'lucide-react';

const steps = [
  { n: '01', title: 'Browse the Collection', text: 'Explore new arrivals, curated collections, and bespoke services.' },
  { n: '02', title: 'Add to Bag', text: 'Place items into your bag — added from any piece across the site.' },
  { n: '03', title: 'Fitting & Delivery', text: 'Complete your order in-store or by phone with a personal fitting.' },
];

export default function Cart() {
  return (
    <main className="w-full bg-[#f8f6f0] min-h-screen">
      <PageHero
        eyebrow="Your Selection"
        titleLines={['Shopping', 'Bag']}
        subtitle="Reserved for your fitting — every piece is held, pressed and prepared for its new wardrobe."
        image={IMG.cinema}
        height="h-[50vh] min-h-[400px]"
      />

      {/* السلة الفارغة — واجهة جاهزة للاستخدام */}
      <section className="w-full py-24 px-6 md:px-12">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* منطقة السلة */}
          <div className="lg:col-span-8">
            <Reveal className="flex flex-col items-center text-center py-16 md:py-24 border border-dashed border-[#d6cec0] rounded-[2.5rem] bg-white/50 px-6">
              <div className="relative mb-8">
                <div className="w-24 h-24 rounded-full border border-[#c6a87c]/40 flex items-center justify-center text-[#c6a87c]">
                  <ShoppingBag size={34} strokeWidth={1.25} />
                </div>
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#2c241e] text-[#f8f6f0] text-[9px] font-bold flex items-center justify-center">
                  0
                </span>
              </div>

              <h2 className="text-[#2c241e] text-3xl md:text-5xl font-serif font-light leading-tight mb-5">
                Your bag is <span className="italic text-[#8b7355]">empty.</span>
              </h2>
              <p className="text-[#5c4e42] text-sm font-mono leading-relaxed max-w-md mb-12">
                Add pieces from the collection and they will appear here — ready for a private fitting and delivery.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <Link
                  to="/new-arrivals"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#2c241e] text-[#f8f6f0] text-xs uppercase tracking-widest font-bold rounded-full hover:bg-[#c6a87c] transition-colors"
                >
                  Browse New Arrivals
                  <ArrowRight size={16} strokeWidth={2} />
                </Link>
                <Link
                  to="/book-appointment"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#2c241e] text-[#2c241e] text-xs uppercase tracking-widest font-bold rounded-full hover:bg-[#2c241e] hover:text-[#f8f6f0] transition-colors"
                >
                  Book a Fitting
                  <ArrowUpRight size={16} strokeWidth={2} />
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-12 pt-8 border-t border-[#d6cec0]/40 text-[10px] uppercase tracking-widest font-bold text-[#8a7f72] font-mono">
                <Link to="/collections" className="hover:text-[#c6a87c] transition-colors">The Collections</Link>
                <Link to="/tailoring" className="hover:text-[#c6a87c] transition-colors">Bespoke Tailoring</Link>
                <Link to="/lookbook" className="hover:text-[#c6a87c] transition-colors">Seasonal Lookbook</Link>
              </div>
            </Reveal>
          </div>

          {/* خطوات الاستخدام */}
          <div className="lg:col-span-4">
            <Reveal delay={0.05} className="flex flex-col gap-10">
              <div className="flex items-center gap-4 mb-2">
                <span className="w-10 h-[1px] bg-[#c6a87c]" />
                <span className="text-[#c6a87c] uppercase tracking-[0.3em] text-xs font-bold">How It Works</span>
              </div>
              {steps.map((s) => (
                <div key={s.n} className="flex gap-5 border-b border-[#d6cec0]/40 pb-8 last:border-0 last:pb-0">
                  <span className="text-[#c6a87c] font-serif text-3xl leading-none">{s.n}</span>
                  <div>
                    <h3 className="text-[#2c241e] font-serif text-xl mb-2">{s.title}</h3>
                    <p className="text-[#8a7f72] text-xs font-mono leading-relaxed">{s.text}</p>
                  </div>
                </div>
              ))}
              <Link
                to="/services#shipping-returns"
                className="inline-flex items-center gap-3 text-[#2c241e] text-xs uppercase tracking-widest font-bold hover:text-[#c6a87c] transition-colors"
              >
                Shipping & Returns
                <ArrowRight size={15} strokeWidth={2} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}