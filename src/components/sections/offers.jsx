import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Tag, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// روابط صور مستقرة ومضمونة 100%
const offersData = [
  {
    id: 1,
    title: "The Executive Bundle",
    discount: "25% OFF",
    desc: "Tailored Suit, Premium Cotton Shirt, and a Silk Tie. The complete boardroom look.",
    image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=800&q=80",
    color: "bg-[#2c241e]"
  },
  {
    id: 2,
    title: "Summer Linen Essentials",
    discount: "BUY 2 GET 1",
    desc: "Stay cool with our breathable Italian linen shirts. Perfect for the Mediterranean heat.",
    // الرابط المضمون 100% (نسيج قماش صيفي)
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
    color: "bg-[#4a3f35]"
  },
  {
    id: 3,
    title: "The Leather Signature",
    discount: "SPECIAL PRICE",
    desc: "Handcrafted Oxford shoes paired with a matching full-grain leather belt.",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
    color: "bg-[#14110e]"
  }
];

export default function Offers() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      
      const moveAmount = track.scrollWidth - window.innerWidth;

      const scrollTl = gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${moveAmount}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });

      gsap.utils.toArray('.offer-image').forEach(img => {
        gsap.to(img, {
          x: 100,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${moveAmount}`,
            scrub: 1,
          }
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen bg-[#14110e] overflow-hidden text-[#f8f6f0]">
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c6a87c] opacity-[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="absolute top-24 md:top-20 left-6 md:left-12 z-20">
        <div className="flex items-center gap-3 mb-2">
          <Tag size={16} className="text-[#c6a87c]" />
          <span className="text-[#c6a87c] uppercase tracking-[0.3em] text-[10px] font-bold">VIP Members</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-light leading-none">
          Exclusive <br /> <span className="italic text-[#d6cec0]">Offers</span>
        </h2>
      </div>

      <div 
        ref={trackRef} 
        className="absolute top-0 left-0 h-full flex items-center pt-24 md:pt-16 px-6 md:px-12 w-max"
      >
        <div className="flex gap-8 md:gap-16 items-center">
          
          <div className="w-[10vw] md:w-[30vw] shrink-0" />

          {offersData.map((offer, index) => (
            <div 
              key={offer.id} 
              className={`relative flex-shrink-0 w-[85vw] md:w-[600px] h-[55vh] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row ${offer.color}`}
            >
              <div className="flex-1 p-8 md:p-10 flex flex-col justify-between z-10">
                <div>
                  <span className="inline-block px-3 py-1 border border-[#c6a87c] text-[#c6a87c] text-[10px] uppercase tracking-widest rounded-full mb-6">
                    {offer.discount}
                  </span>
                  <h3 className="text-3xl font-serif leading-tight mb-4">{offer.title}</h3>
                  <p className="text-sm text-[#d6cec0]/80 font-mono leading-relaxed">
                    {offer.desc}
                  </p>
                </div>
                
                <button className="group flex items-center gap-4 text-xs uppercase tracking-widest font-bold mt-8 w-max">
                  <span className="group-hover:text-[#c6a87c] transition-colors">Claim Offer</span>
                  <div className="w-10 h-10 rounded-full bg-[#f8f6f0] text-[#14110e] flex items-center justify-center group-hover:bg-[#c6a87c] transition-colors">
                    <ArrowUpRight size={18} strokeWidth={2} />
                  </div>
                </button>
              </div>

              <div className="relative flex-1 h-48 md:h-full overflow-hidden hidden sm:block">
                <img 
                  src={offer.image} 
                  alt={offer.title} 
                  className="offer-image absolute top-0 -left-12 w-[150%] h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-inherit to-transparent w-12" />
              </div>
            </div>
          ))}

          <div className="w-[10vw] shrink-0 flex flex-col items-center justify-center text-[#d6cec0]/40 font-mono text-sm">
            <span className="w-12 h-[1px] bg-[#d6cec0]/40 mb-4" />
            End of Offers
          </div>

        </div>
      </div>

    </section>
  );
}