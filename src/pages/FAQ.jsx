import { useState } from 'react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { IMG } from '../data/images';
import { Link } from 'react-router-dom';
import { Minus, Plus, ArrowRight } from 'lucide-react';

const faqs = [
  {
    q: 'How long does a bespoke suit take?',
    a: 'Six to eight weeks from your first measurement, including three fittings. With the express programme, a single-fitting "fast suit" can be finished in three weeks — made possible by our permanent pattern archive.',
  },
  {
    q: 'Do I really need three fittings?',
    a: 'A house that promises "perfect from the first fitting" is either lucky or lying. The basted fitting, the waist fitting and the final press exist because cloth moves, bodies move, and you deserve the last word.',
  },
  {
    q: 'What fabrics can I choose from?',
    a: 'Over 1,800 bolts across Italian wools, Irish linens, Egyptian cottons and Japanese denim — from 240g summer weights to hand-finished cashmere blends. Your cutter will guide you, never pressure you.',
  },
  {
    q: 'Can I book a home fitting?',
    a: 'Yes. Our concierge visits homes and offices within Greater Amman, and travels to private clients across the Gulf several times a year. Travel appointments carry no additional cost for orders above JD 400.',
  },
  {
    q: 'What is included in the suit price?',
    a: 'The price covers the cloth, all three fittings, functioning buttonholes, silk-lined sleeves, a monogram, two trouser finishes of your choice and a numbered garment bag. No hidden line items, ever.',
  },
  {
    q: 'How do I care for my bespoke garment?',
    a: 'Brush, don\'t wash; rest, don\'t crowd. We also offer free pressing and light repairs for members for the life of the garment — tailoring is a relationship, not a transaction.',
  },
  {
    q: 'Do you offer gift cards?',
    a: 'We do — a finishing session, a tie-making workshop, or a full commission, wrapped in paper and delivered with a handwritten note.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <main className="w-full bg-[#f8f6f0] min-h-screen">
      <PageHero
        eyebrow="Frequently Asked"
        titleLines={['Questions,', 'Answers']}
        subtitle="Everything clients ask before, during and long after their first commission. Still unsure? Write to us — a person answers."
        image={IMG.tie}
        height="h-[55vh] min-h-[420px]"
      />

      <section className="w-full py-24 px-6 md:px-12">
        <div className="max-w-[860px] mx-auto">
          <div className="flex flex-col gap-4">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={i} y={30}>
                  <div className={`border ${isOpen ? 'border-[#c6a87c]/60 bg-white' : 'border-[#d6cec0]/50 bg-white/60'} rounded-[1.4rem] overflow-hidden transition-colors duration-300`}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-6 text-left px-6 md:px-8 py-6"
                    >
                      <span className="flex items-center gap-5">
                        <span className={`font-serif text-2xl md:text-3xl font-light ${isOpen ? 'text-[#c6a87c]' : 'text-[#d6cec0]'}`}>
                          0{i + 1}
                        </span>
                        <span className="text-[#2c241e] font-serif text-lg md:text-xl">{f.q}</span>
                      </span>
                      <span className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-[#c6a87c] border-[#c6a87c] text-[#2c241e]' : 'border-[#d6cec0] text-[#8a7f72]'}`}>
                        {isOpen ? <Minus size={16} strokeWidth={2} /> : <Plus size={16} strokeWidth={2} />}
                      </span>
                    </button>
                    <div
                      className="grid transition-all duration-500 ease-in-out"
                      style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 md:px-8 pb-7 pl-[60px] md:pl-[76px] text-[#5c4e42] text-sm font-mono leading-relaxed">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1} className="mt-16 bg-[#14110e] rounded-[2rem] px-8 md:px-12 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h3 className="text-[#f8f6f0] font-serif text-2xl md:text-3xl font-light leading-tight mb-2">
                Still have a <span className="italic text-[#c6a87c]">question?</span>
              </h3>
              <p className="text-[#d6cec0]/70 text-sm font-mono">Our concierge answers within one business day.</p>
            </div>
            <Link
              to="/book-appointment"
              className="shrink-0 inline-flex items-center gap-4 px-7 py-3.5 bg-[#c6a87c] text-[#2c241e] text-xs uppercase tracking-widest font-bold rounded-full hover:bg-[#b5986c] transition-colors"
            >
              Ask Us Directly
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}