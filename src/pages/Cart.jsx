import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { IMG } from '../data/images';
import { Minus, Plus, X, ArrowRight, ShoppingBag, Lock } from 'lucide-react';

const initialItems = [
  { id: 1, name: 'Midnight Navy Suit', cat: 'Bespoke Suits', detail: 'Chest 40 · 3-piece', price: 780, image: IMG.manSuit },
  { id: 2, name: 'Camel Wool Overcoat', cat: 'Outerwear', detail: 'Size 52', price: 420, image: IMG.blazer },
  { id: 3, name: 'Oxford Brogues', cat: 'Fine Footwear', detail: 'EU 43', price: 310, image: IMG.shoes },
];

const f = (n) => `JD ${n.toLocaleString('en-US')}`;

export default function Cart() {
  const [items, setItems] = useState(initialItems);

  const changeQty = (id, delta) =>
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, qty: Math.max(1, (it.qty || 1) + delta) } : it))
    );

  const removeItem = (id) => setItems((prev) => prev.filter((it) => it.id !== id));

  const subtotal = items.reduce((s, it) => s + it.price * (it.qty || 1), 0);
  const freeShip = subtotal >= 500;
  const shipping = freeShip ? 0 : 25;
  const total = subtotal + shipping;

  return (
    <main className="w-full bg-[#f8f6f0] min-h-screen">
      <PageHero
        eyebrow="Your Selection"
        titleLines={['Shopping', 'Bag']}
        subtitle="Reserved for your fitting — every piece is held, pressed and prepared for its new wardrobe."
        image={IMG.cinema}
        height="h-[50vh] min-h-[400px]"
      />

      <section className="w-full py-24 px-6 md:px-12">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* عناصر السلة */}
          <div className="lg:col-span-8">
            {items.length === 0 ? (
              <Reveal className="flex flex-col items-start">
                <div className="w-16 h-16 rounded-full border border-[#d6cec0] flex items-center justify-center text-[#c6a87c] mb-6">
                  <ShoppingBag size={26} strokeWidth={1.25} />
                </div>
                <h2 className="text-[#2c241e] text-3xl md:text-4xl font-serif font-light mb-4">
                  Your bag is <span className="italic text-[#8b7355]">empty.</span>
                </h2>
                <p className="text-[#5c4e42] text-sm font-mono max-w-sm mb-10 leading-relaxed">
                  Nothing here yet — a well-considered wardrobe begins with a single piece. Start with the season's arrivals.
                </p>
                <Link
                  to="/new-arrivals"
                  className="inline-flex items-center gap-4 px-8 py-4 bg-[#2c241e] text-[#f8f6f0] text-xs uppercase tracking-widest font-bold rounded-full hover:bg-[#c6a87c] transition-colors"
                >
                  Browse New Arrivals
                  <ArrowRight size={16} strokeWidth={2} />
                </Link>
              </Reveal>
            ) : (
              <div className="flex flex-col">
                {items.map((it) => (
                  <Reveal
                    key={it.id}
                    className="flex gap-5 md:gap-7 py-8 border-b border-[#d6cec0]/60 group item"
                  >
                    <div className="w-24 md:w-32 shrink-0 overflow-hidden rounded-2xl aspect-[3/4] bg-[#e6dfd1]">
                      <img src={it.image} alt={it.name} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[9px] uppercase tracking-[0.25em] text-[#8a7f72] font-mono mb-1">{it.cat}</p>
                          <h3 className="text-[#2c241e] font-serif text-xl leading-tight">{it.name}</h3>
                          <p className="text-[#8a7f72] text-xs font-mono mt-1">{it.detail}</p>
                        </div>
                        <span className="text-[#c6a87c] font-mono text-sm whitespace-nowrap">{f(it.price * (it.qty || 1))}</span>
                      </div>

                      <div className="mt-5 flex items-center justify-between">
                        <div className="flex items-center gap-4 rounded-full border border-[#d6cec0] px-3 py-1.5">
                          <button onClick={() => changeQty(it.id, -1)} className="text-[#8a7f72] hover:text-[#c6a87c] transition-colors">
                            <Minus size={14} strokeWidth={2} />
                          </button>
                          <span className="w-6 text-center text-[#2c241e] font-mono text-sm">{it.qty || 1}</span>
                          <button onClick={() => changeQty(it.id, 1)} className="text-[#8a7f72] hover:text-[#c6a87c] transition-colors">
                            <Plus size={14} strokeWidth={2} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(it.id)}
                          className="flex items-center gap-2 text-[#a89c8f] hover:text-[#b3463a] text-[10px] uppercase tracking-widest font-bold transition-colors"
                        >
                          <X size={14} strokeWidth={1.5} />
                          Remove
                        </button>
                      </div>
                    </div>
                  </Reveal>
                ))}

                <div className="flex flex-wrap gap-8 py-8 text-[11px] uppercase tracking-widest font-bold text-[#8a7f72] font-mono">
                  <Link to="/collections" className="hover:text-[#c6a87c] transition-colors">Continue Shopping</Link>
                  <Link to="/tailoring" className="hover:text-[#c6a87c] transition-colors">Bespoke Services</Link>
                </div>
              </div>
            )}
          </div>

          {/* الملخص */}
          <div className="lg:col-span-4">
            <Reveal delay={0.05} className="sticky top-28 bg-white rounded-[2rem] shadow-xl border border-[#f4f1eb] p-8 md:p-10">
              <h3 className="text-[#2c241e] text-2xl font-serif mb-8">Order Summary</h3>

              <div className="flex flex-col gap-5 border-b border-[#d6cec0]/60 pb-6 mb-6 font-mono text-sm">
                <div className="flex justify-between text-[#5c4e42]">
                  <span>Subtotal</span>
                  <span className="text-[#2c241e]">{f(subtotal)}</span>
                </div>
                <div className="flex justify-between text-[#5c4e42]">
                  <span>Shipping</span>
                  <span className={freeShip && items.length > 0 ? 'text-[#c6a87c]' : 'text-[#2c241e]'}>
                    {items.length === 0 ? '—' : freeShip ? 'Free' : f(shipping)}
                  </span>
                </div>
                <div className="flex justify-between text-[#5c4e42]">
                  <span>Clothing Upon Request</span>
                  <span className="text-[#c6a87c]">Complimentary</span>
                </div>
              </div>

              <div className="flex justify-between items-baseline mb-8">
                <span className="text-[#2c241e] font-serif text-lg">Total</span>
                <span className="text-[#2c241e] font-serif text-3xl">{f(total)}</span>
              </div>

              {items.length > 0 && !freeShip && (
                <p className="text-[#a89c8f] text-[10px] font-mono leading-relaxed mb-6 -mt-3">
                  Spend {f(500 - subtotal)} more for free express shipping.
                </p>
              )}

              <Link
                to="/login"
                className="flex items-center justify-center gap-3 w-full bg-[#2c241e] text-[#f8f6f0] px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#c6a87c] transition-colors duration-300"
              >
                <Lock size={15} strokeWidth={2} />
                Proceed to Checkout
              </Link>

              <p className="mt-6 text-[10px] text-[#a89c8f] font-mono text-center leading-relaxed">
                Final fitting and checkout are completed in-store or by phone.{' '}
                <a href="tel:+962790000000" className="text-[#c6a87c] hover:underline">+962 7 9000 0000</a>
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}