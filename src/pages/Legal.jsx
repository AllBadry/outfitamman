import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { IMG } from '../data/images';

export default function Legal({ eyebrow, title, subtitle, updated, sections }) {
  return (
    <main className="w-full bg-[#f8f6f0] min-h-screen">
      <PageHero
        eyebrow={eyebrow}
        titleLines={title}
        subtitle={subtitle}
        image={IMG.fabric}
        height="h-[45vh] min-h-[360px]"
      />

      <section className="w-full py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-[820px] mx-auto">
          <Reveal className="flex items-center gap-4 text-[#8a7f72] font-mono text-xs uppercase tracking-widest mb-16">
            <span className="w-10 h-[1px] bg-[#c6a87c]" />
            Last reviewed {updated}
          </Reveal>

          <div className="flex flex-col gap-14">
            {sections.map((s, i) => (
              <Reveal key={i}>
                <h2 className="text-[#2c241e] font-serif text-2xl md:text-3xl font-light mb-4">
                  <span className="text-[#c6a87c] mr-3">0{i + 1}</span>
                  {s.h}
                </h2>
                {s.p.map((para, j) => (
                  <p key={j} className="text-[#5c4e42] text-sm leading-relaxed font-mono mb-4 max-w-2xl">
                    {para}
                  </p>
                ))}
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20 border-t border-[#d6cec0]/50 pt-10 text-[#8a7f72] text-xs font-mono leading-relaxed">
            For any request regarding your data, write to privacy@outfitamman.com or visit the boutique in Sweifieh Village, Amman.
          </Reveal>
        </div>
      </section>
    </main>
  );
}