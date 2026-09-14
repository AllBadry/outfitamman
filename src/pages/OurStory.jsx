import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import ParallaxImage from '../components/ParallaxImage';
import { IMG } from '../data/images';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Users, Award, Scissors as ScissorsIcon } from 'lucide-react';

const milestones = [
  { year: '2008', title: 'A Single Table', desc: 'Outfit Amman begins as a two-man atelier above a Sweifieh print shop.' },
  { year: '2014', title: 'The House Grows', desc: 'We open our permanent showroom and take the first overseas commissions from the Gulf.' },
  { year: '2020', title: 'Craft in Lockdown', desc: 'While doors closed, the cutting tables stayed open — forty bespoke suits shipping worldwide.' },
  { year: '2026', title: 'The New Season', desc: 'Tonight we are what we set out to be: Amman’s house of modern elegance.' },
];

const stats = [
  { icon: Building2, value: '17', label: 'Years of Craft' },
  { icon: Users, value: '4,800+', label: 'Bespoke Suits' },
  { icon: Award, value: '3', label: 'International Fittings' },
  { icon: ScissorsIcon, value: '01', label: 'House Cutter' },
];

export default function OurStory() {
  return (
    <main className="w-full bg-[#f8f6f0] min-h-screen">
      <PageHero
        eyebrow="Our Story"
        titleLines={['A House in the', 'Old City']}
        subtitle="Where an Albanian tailor, a Lebanese pattern-master and a Jordanian obsession with cloth became one address."
        image={IMG.cinema}
        height="h-[70vh] min-h-[480px]"
      />

      {/* السرد */}
      <section className="w-full py-28 px-6 md:px-12">
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-[#c6a87c]" />
              <span className="text-[#c6a87c] uppercase tracking-[0.3em] text-xs font-bold">The Beginning</span>
            </div>
            <p className="text-[#2c241e] font-serif text-3xl md:text-5xl font-light leading-[1.2] mb-10">
              “We never wanted to be the biggest. We wanted to be the one people <span className="italic text-[#8b7355]">kept.</span>”
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <Reveal className="text-[#5c4e42] text-sm leading-relaxed font-mono">
              The house was founded on the belief that a suit is not bought — it is begun. Each commission opens with the
              same ritual: coffee, cloth books, and a conversation that takes far longer than it should.
            </Reveal>
            <Reveal delay={0.1} className="text-[#5c4e42] text-sm leading-relaxed font-mono">
              Today the atelier stands behind the same glass door it did in 2008. The mirrors are older, the archive is
              heavier, and the pattern blocks carry the names of three thousand men who trusted us with their shoulders.
            </Reveal>
          </div>
        </div>
      </section>

      {/* الأرقام */}
      <section className="w-full bg-[#14110e] py-20 px-6 md:px-12">
        <div className="max-w-[1300px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.label} delay={i * 0.08} className="flex flex-col items-center text-center border border-[#2c241e] rounded-[1.5rem] py-10 px-4">
                <div className="w-12 h-12 rounded-2xl bg-[#c6a87c]/15 text-[#c6a87c] flex items-center justify-center mb-5">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <span className="text-[#f8f6f0] font-serif text-4xl md:text-5xl mb-2">{s.value}</span>
                <span className="text-[#d6cec0]/60 text-[10px] uppercase tracking-widest font-bold">{s.label}</span>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* بانر بارالاكس */}
      <section className="relative w-full h-[55vh] min-h-[380px] overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage src={IMG.tailoring} alt="Hands sewing" speed={12} />
        </div>
        <div className="absolute inset-0 bg-[#14110e]/45" />
        <div className="relative z-10 w-full h-full max-w-[1300px] mx-auto px-6 md:px-12 flex items-center">
          <Reveal>
            <span className="text-[#c6a87c] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Still Patterned Here</span>
            <h3 className="text-[#f8f6f0] font-serif text-4xl md:text-6xl font-light leading-tight max-w-2xl">
              Every block is cut <span className="italic text-[#d6cec0]">in Amman.</span>
            </h3>
          </Reveal>
        </div>
      </section>

      {/* الخط الزمني */}
      <section className="w-full py-28 px-6 md:px-12">
        <div className="max-w-[1300px] mx-auto">
          <Reveal className="mb-16">
            <h2 className="text-[#2c241e] text-4xl md:text-5xl font-serif font-light leading-tight">
              Moments That <span className="italic text-[#8b7355]">Made the House</span>
            </h2>
          </Reveal>
          <div className="flex flex-col gap-14">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={0.05} className="relative grid grid-cols-[90px_1fr] md:grid-cols-[150px_1fr] gap-6 md:gap-12 border-b border-[#d6cec0]/50 pb-12">
                <span className="text-[#c6a87c] font-serif text-4xl md:text-6xl font-light leading-none">‘{m.year.slice(2)}</span>
                <div>
                  <h3 className="text-[#2c241e] font-serif text-2xl md:text-3xl font-light mb-3">{m.title}</h3>
                  <p className="text-[#8a7f72] text-sm font-mono leading-relaxed max-w-xl">{m.desc}</p>
                  {i === 0 && (
                    <span className="inline-block mt-4 px-3 py-1 bg-[#f4f1eb] text-[#c6a87c] text-[9px] uppercase tracking-widest font-bold rounded-full">
                      Est. 2008 · Amman
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-[#f8f6f0] pb-28 px-6 md:px-12">
        <div className="max-w-[1300px] mx-auto bg-[#2c241e] rounded-[2rem] px-8 md:px-16 py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 overflow-hidden relative">
          <div className="absolute -right-10 -bottom-16 text-[#3b322b] text-[260px] font-serif leading-none select-none pointer-events-none">M</div>
          <Reveal className="relative z-10">
            <h3 className="text-[#f8f6f0] font-serif text-3xl md:text-5xl font-light leading-tight mb-3">
              Become part of the <span className="italic text-[#c6a87c]">archive</span>
            </h3>
            <p className="text-[#d6cec0]/70 text-sm font-mono">The story continues one fitting at a time.</p>
          </Reveal>
          <Reveal delay={0.1} className="relative z-10 shrink-0">
            <Link
              to="/book-appointment"
              className="inline-flex items-center gap-4 px-8 py-4 bg-[#c6a87c] text-[#2c241e] text-xs uppercase tracking-widest font-bold rounded-full hover:bg-[#b5986c] transition-colors"
            >
              Book a Fitting
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}