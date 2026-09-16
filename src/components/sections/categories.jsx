import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// روابط صور مستقرة ومضمونة 100%
const categoriesData = [
  {
    id: 1,
    slug: 'bespoke-suits',
    title: 'Bespoke Suits',
    subtitle: 'Signature Tailoring',
    image: '/products/suit-01.jpg',
  },
  {
    id: 2,
    slug: 'smart-casual',
    title: 'Smart Casual',
    subtitle: 'Everyday Elegance',
    image: '/products/casual-01.jpg',
  },
  {
    id: 3,
    slug: 'fine-footwear',
    title: 'Fine Footwear',
    subtitle: 'Crafted Leather',
    image: '/products/shoes-01.jpg',
  },
  {
    id: 4,
    slug: 'accessories',
    title: 'Accessories',
    subtitle: 'The Final Touch',
    image: '/products/bag-01.jpg',
  },
];

export default function Categories() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cat-header', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.cat-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#f8f6f0] py-24 px-6 md:px-12">
      <div className="max-w-[1300px] mx-auto">
        
        <div className="cat-header flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-10 h-[1px] bg-[#c6a87c]" />
              <span className="text-[#c6a87c] uppercase tracking-[0.3em] text-xs font-bold">Collections</span>
            </div>
            <h2 className="text-[#2c241e] text-4xl md:text-5xl font-serif font-light leading-tight">
              Curated <br /> For The <span className="italic text-[#8b7355]">Gentleman</span>
            </h2>
          </div>
          <Link to="/collections" className="flex items-center gap-2 text-[#2c241e] hover:text-[#c6a87c] transition-colors border-b border-[#2c241e] hover:border-[#c6a87c] pb-1 text-xs uppercase tracking-widest font-bold">
            View All Categories
            <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {categoriesData.map((category) => (
            <Link
              key={category.id}
              to={`/collections/${category.slug}`}
              className="cat-card group relative overflow-hidden rounded-[2rem] aspect-[3/4] cursor-pointer shadow-lg bg-[#2c241e] block"
            >
              <img 
                src={category.image} 
                alt={category.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#14110e]/90 via-[#14110e]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-500">
                <span className="block text-[#c6a87c] text-[10px] uppercase tracking-[0.2em] font-bold mb-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 sm:delay-100">
                  {category.subtitle}
                </span>
                <h3 className="text-[#f8f6f0] text-xl md:text-2xl font-serif font-medium flex items-center justify-between">
                  {category.title}
                  <ArrowRight 
                    size={20} 
                    className="text-[#c6a87c] opacity-100 sm:opacity-0 -translate-x-2 sm:-translate-x-4 sm:group-hover:opacity-100 sm:group-hover:translate-x-0 transition-all duration-500 sm:delay-100" 
                  />
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}