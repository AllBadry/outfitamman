import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { IMG } from '../data/images';
import { Truck, RotateCcw, PackageSearch, Ruler, ArrowRight, Check } from 'lucide-react';

const shippingOptions = [
  { name: 'Boutique Pickup', time: 'Free · Ready in 48h', note: 'Collect your order in Sweifieh at the delivery counter — same day for ready-made pieces.' },
  { name: 'Standard Courier', time: 'JD 4 · 2–4 Business Days', note: 'Insured delivery across Jordan by our partner courier, with live tracking.' },
  { name: 'Express Worldwide', time: 'JD 25 · 3–6 Days', note: 'DHL door-to-door with full insurance to the Gulf, Europe and North America.' },
];

const returnSteps = [
  'Notify us within 14 days of delivery with your order number.',
  'Return the garment unworn, with tags attached, in its original packaging.',
  'We refund to your original payment method within 3 business days of inspection.',
  'Bespoke and personalised items are made to order and, unless flawed, non-returnable.',
];

const trackSteps = [
  'Your order is confirmed the moment our cutter signs the cutting slip.',
  'Ready-made pieces are checked, pressed and dispatched within 24 hours.',
  'Bespoke orders follow your fittings — you will receive a call before each one.',
  'A delivery note with your tracking number is sent by SMS and email upon dispatch.',
];

const sizes = [
  ['R', '45', '38', '46', '58', '64'],
  ['S', '47', '40', '48', '60', '66'],
  ['M', '49', '42', '50', '62', '68'],
  ['L', '51', '44', '52', '64', '70'],
  ['XL', '53', '46', '54', '66', '72'],
];

export default function Services() {
  return (
    <main className="w-full bg-[#f8f6f0] min-h-screen">
      <PageHero
        eyebrow="Client Care"
        titleLines={['Every Promise,', 'Kept']}
        subtitle="Shipping, returns, tracking and sizing — the fine print, written in plain language and delivered with the same care as the garments."
        image={IMG.shoes}
        height="h-[55vh] min-h-[420px]"
      />

      {/* روابط الأقسام */}
      <div className="sticky top-[76px] z-30 bg-[#f8f6f0]/90 backdrop-blur-md border-b border-[#d6cec0]/40">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12 flex items-center gap-8 overflow-x-auto py-4 text-[11px] uppercase tracking-widest font-bold text-[#8a7f72]">
          {[
            ['Shipping & Returns', '#shipping-returns'],
            ['Track Your Order', '#track-order'],
            ['Size Guide', '#size-guide'],
          ].map(([label, href]) => (
            <a key={href} href={href} className="whitespace-nowrap hover:text-[#c6a87c] transition-colors flex items-center gap-2">
              {label}
              <ArrowRight size={12} strokeWidth={2} className="opacity-40" />
            </a>
          ))}
        </div>
      </div>

      {/* الشحن والإرجاع */}
      <section id="shipping-returns" className="w-full scroll-mt-36 py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1300px] mx-auto">
          <Reveal className="mb-14 max-w-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-11 h-11 rounded-2xl bg-[#c6a87c]/15 text-[#c6a87c] flex items-center justify-center">
                <Truck size={20} strokeWidth={1.5} />
              </div>
              <span className="text-[#c6a87c] uppercase tracking-[0.3em] text-xs font-bold">01 · Shipping & Returns</span>
            </div>
            <h2 className="text-[#2c241e] text-4xl md:text-5xl font-serif font-light leading-tight">
              Delivered like a <span className="italic text-[#8b7355]">gift</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {shippingOptions.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.08} className="bg-white rounded-[1.6rem] p-8 border border-[#f4f1eb] shadow-sm flex flex-col">
                <h3 className="text-[#2c241e] font-serif text-2xl mb-2">{s.name}</h3>
                <span className="text-[#c6a87c] text-[11px] uppercase tracking-widest font-bold mb-4">{s.time}</span>
                <p className="text-[#8a7f72] text-sm font-mono leading-relaxed">{s.note}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="bg-[#14110e] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row gap-10 justify-between">
            <div className="max-w-md">
              <span className="text-[#c6a87c] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
                <RotateCcw size={14} className="inline mr-2" />Returns — The Easy Part
              </span>
              <h3 className="text-[#f8f6f0] font-serif text-3xl font-light leading-tight">
                14 days, no theatre
              </h3>
            </div>
            <ol className="flex flex-col gap-4 md:w-1/2">
              {returnSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-4 text-[#d6cec0]/80 text-sm font-mono leading-relaxed">
                  <span className="w-6 h-6 rounded-full bg-[#c6a87c]/15 text-[#c6a87c] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* تتبع الطلب */}
      <section id="track-order" className="w-full scroll-mt-36 bg-[#f4f1eb]/60 border-y border-[#d6cec0]/40 py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-[#c6a87c]/15 text-[#c6a87c] flex items-center justify-center">
                  <PackageSearch size={20} strokeWidth={1.5} />
                </div>
                <span className="text-[#c6a87c] uppercase tracking-[0.3em] text-xs font-bold">02 · Track Your Order</span>
              </div>
              <h2 className="text-[#2c241e] text-4xl md:text-5xl font-serif font-light leading-tight mb-8">
                Where in the world <br /> is your <span className="italic text-[#8b7355]">suit?</span>
              </h2>
              <form className="relative max-w-sm" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="e.g. OA-20-1146"
                  className="w-full bg-transparent border-b border-[#5c4e42] py-3 text-[#2c241e] text-sm focus:outline-none focus:border-[#c6a87c] transition-colors placeholder:text-[#a89c8f] placeholder:text-xs placeholder:uppercase placeholder:tracking-widest"
                />
                <button type="submit" className="absolute right-0 bottom-3 text-[#c6a87c] hover:text-[#2c241e] transition-colors">
                  <ArrowRight size={20} strokeWidth={1.5} />
                </button>
              </form>
            </Reveal>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trackSteps.map((step, i) => (
              <Reveal key={i} delay={i * 0.06} className="bg-white rounded-[1.4rem] p-6 border border-[#f4f1eb] shadow-sm">
                <span className="text-[#c6a87c] font-serif text-xl mb-3 block">0{i + 1}</span>
                <p className="text-[#5c4e42] text-sm font-mono leading-relaxed">{step}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* دليل المقاسات */}
      <section id="size-guide" className="w-full scroll-mt-36 py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1300px] mx-auto">
          <Reveal className="mb-14 max-w-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-11 h-11 rounded-2xl bg-[#c6a87c]/15 text-[#c6a87c] flex items-center justify-center">
                <Ruler size={20} strokeWidth={1.5} />
              </div>
              <span className="text-[#c6a87c] uppercase tracking-[0.3em] text-xs font-bold">03 · Size Guide</span>
            </div>
            <h2 className="text-[#2c241e] text-4xl md:text-5xl font-serif font-light leading-tight">
              Chest to <span className="italic text-[#8b7355]">collar</span>
            </h2>
            <p className="text-[#8a7f72] text-sm font-mono leading-relaxed mt-6 max-w-md">
              A rough guide for ready-made fits, in centimetres. For true accuracy, book a fitting — every body deserves its own numbers.
            </p>
          </Reveal>

          <Reveal className="overflow-x-auto rounded-[2rem] border border-[#d6cec0]/50 bg-white shadow-sm">
            <table className="w-full min-w-[560px]">
              <thead>
                <tr className="border-b border-[#d6cec0]/50 text-[#8a7f72] text-[10px] uppercase tracking-widest font-bold">
                  <th className="text-left font-bold px-6 py-5">Size</th>
                  {['Chest', 'Waist', 'Shoulder', 'Sleeve', 'Inseam'].map((h) => (
                    <th key={h} className="text-left font-bold px-6 py-5 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sizes.map((row, i) => (
                  <tr key={row[0]} className={`border-b border-[#d6cec0]/40 ${i % 2 === 1 ? 'bg-[#f8f6f0]/60' : ''}`}>
                    <td className="px-6 py-5 text-[#c6a87c] font-serif text-xl">{row[0]}</td>
                    <td className="px-6 py-5 text-[#2c241e] font-mono text-sm">{row[1]}</td>
                    <td className="px-6 py-5 text-[#2c241e] font-mono text-sm">{row[2]}</td>
                    <td className="px-6 py-5 text-[#2c241e] font-mono text-sm">{row[3]}</td>
                    <td className="px-6 py-5 text-[#2c241e] font-mono text-sm">{row[4]}</td>
                    <td className="px-6 py-5 text-[#2c241e] font-mono text-sm">{row[5]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 text-[#5c4e42] text-sm font-mono">
            <span className="flex items-center gap-3">
              <Check size={16} className="text-[#c6a87c]" /> Relaxed silhouette? Size up.
            </span>
            <span className="flex items-center gap-3">
              <Check size={16} className="text-[#c6a87c]" /> Between sizes? Confide in us.
            </span>
          </Reveal>
        </div>
      </section>
    </main>
  );
}