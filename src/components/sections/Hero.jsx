import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShoppingBag, Scissors, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function FashionHero() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    // ============================================================
    // سطح المكتب (>= 768px): التركيبة الأصلية Pixel-Perfect كما هي
    // ============================================================
    mm.add('(min-width: 768px)', () => {
      // 1. حركة دخول التجميع (Assembly/Gathering Intro)
      gsap.from('.collage-item', {
        y: () => gsap.utils.random(-150, 150),
        x: () => gsap.utils.random(-150, 150),
        rotation: () => gsap.utils.random(-15, 15),
        opacity: 0,
        scale: 0.8,
        duration: 1.8,
        ease: 'expo.out',
        stagger: 0.05,
      });

      // 2. حركة البارالاكس مع التمرير (Scroll Parallax)
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });

      scrollTl.to('.parallax-very-fast', { y: -250, ease: 'none' }, 0);
      scrollTl.to('.parallax-fast', { y: -150, ease: 'none' }, 0);
      scrollTl.to('.parallax-slow', { y: -60, ease: 'none' }, 0);
      scrollTl.to('.parallax-reverse', { y: 90, ease: 'none' }, 0);
      scrollTl.to('.big-m', { y: -30, scale: 0.9, opacity: 0.3, ease: 'none' }, 0);
    });

    // ============================================================
    // الجوال (< 768px): نفس بطاقات الكولاج لكن بترتيب عمودي متجاوب
    // ============================================================
    mm.add('(max-width: 767px)', () => {
      // حركة دخول متتابعة خفيفة (Lighter Assembly Intro)
      gsap.from('.collage-item', {
        y: () => gsap.utils.random(-60, 60),
        x: () => gsap.utils.random(-40, 40),
        rotation: () => gsap.utils.random(-8, 8),
        opacity: 0,
        scale: 0.9,
        duration: 1.4,
        ease: 'expo.out',
        stagger: 0.08,
      });

      // بارالاكس بسيط للحرف M خلف البطاقات
      gsap.to('.m-mobile', {
        y: -90,
        opacity: 0.05,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 5%',
          end: 'bottom top',
          scrub: 1.1,
        },
      });

      // رفع خفيف للكومة كاملة لإحساس العمق أثناء التمرير
      gsap.to('.mobile-stack', {
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.1,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#f8f6f0] font-sans overflow-hidden"
    >

      {/* =====================================================
          نسخة سطح المكتب (دون أي تغيير عن التصميم الأصلي)
      ===================================================== */}
      <div className="hidden md:flex items-start justify-center min-h-[150vh] pt-32 overflow-hidden">

        {/* حاوية الـ Canvas الثابتة (Pixel-Perfect) */}
        <div className="sticky top-20 relative w-[1300px] h-[900px] origin-top scale-[0.35] sm:scale-50 md:scale-75 xl:scale-100 2xl:scale-105">

          {/* 0. خطوط الشبكة الخلفية */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-[32%] left-[25%] w-[50%] h-[35%] border border-[#d6cec0] rounded-[60px]" />
            <div className="absolute top-[20%] left-[38%] w-[24%] h-[60%] border border-[#d6cec0] rounded-[60px]" />
          </div>

          {/* 1. الحرف الضخم M */}
          <div className="big-m collage-item absolute top-[2%] left-[33%] text-[#e6dfd1] text-[320px] font-serif tracking-tighter leading-none z-10 select-none">
            M
          </div>

          {/* 2. البطاقة البيضاء العلوية اليسرى */}
          <div className="collage-item parallax-fast absolute top-[8%] left-[14%] w-[240px] bg-white rounded-[2rem] p-5 shadow-2xl z-30">
            <div className="w-8 h-1.5 bg-[#c6a87c] rounded-full mb-4" />
            <h3 className="text-[#3b322b] text-[22px] font-medium leading-tight mb-4">Summer<br />Collection</h3>
            <div className="grid grid-cols-2 gap-2">
              <img src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=300&q=80" alt="Fabric texture" className="h-20 w-full object-cover rounded-[14px]" />
              <div className="h-20 w-full bg-[#f4f1eb] rounded-[14px]" />
              <div className="h-20 w-full bg-[#f4f1eb] rounded-[14px]" />
              <img src="https://images.unsplash.com/photo-1594938298596-70f56f91f3c4?auto=format&fit=crop&w=300&q=80" alt="Suit detail" className="h-20 w-full object-cover rounded-[14px]" />
            </div>
          </div>

          {/* 3. البطاقة الداكنة اليسرى */}
          <div className="collage-item parallax-reverse absolute top-[13%] left-[3%] w-[230px] h-[360px] bg-gradient-to-b from-[#4a3f35] to-[#2c241e] border border-[#5c4e42] rounded-[32px] p-6 shadow-2xl z-20 flex flex-col justify-between overflow-hidden">
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-[#c6a87c]/10 blur-[40px] rounded-full pointer-events-none" />
            <div>
              <div className="w-8 h-1.5 bg-[#c6a87c] rounded-full mb-5" />
              <h2 className="text-[#f8f6f0] text-3xl font-light leading-tight">Premium<br />Custom<br />Tailoring</h2>
            </div>
            <div className="w-full h-36 rounded-2xl overflow-hidden relative bg-[#3b322b]">
              <img src="https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=400&q=80" alt="Tailoring" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>

          {/* 4. القبة الوسطى (عريس / موديل) */}
          <div className="collage-item parallax-slow absolute top-[26%] left-[49%] w-[230px] h-[330px] overflow-hidden rounded-t-[120px] rounded-b-[32px] shadow-2xl z-20 border border-white/50 bg-[#d6cec0]">
            <img src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&w=500&q=80" alt="Men fashion model" className="w-full h-full object-cover" />
          </div>

          {/* 5. الوجه المقطوع أعلى اليمين */}
          <div className="collage-item parallax-fast absolute top-[0%] left-[68%] w-[180px] h-[380px] bg-[#e6dfd1] z-10 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80" alt="Male profile" className="w-full h-full object-cover object-center grayscale contrast-125 mix-blend-multiply opacity-80" />
          </div>

          {/* 6. الأيقونات أعلى اليمين */}
          <div className="collage-item parallax-reverse absolute top-[9%] right-[6%] flex gap-4 z-20">
            {[ShoppingBag, Scissors, Award].map((Icon, i) => (
              <div key={i} className="w-[54px] h-[54px] bg-[#e3dbc8] border border-white/60 rounded-[20px] flex items-center justify-center text-[#4a3f35] shadow-lg">
                <Icon size={26} strokeWidth={1.5} />
              </div>
            ))}
          </div>

          {/* 7. شريط النسبة Progress Bar */}
          <div className="collage-item parallax-fast absolute top-[49%] right-[6%] w-[360px] z-20">
            <div className="text-right text-[#5c4e42] font-medium text-[13px] mb-3 uppercase tracking-widest">Material Blend</div>
            <div className="flex gap-1.5 h-3.5 mb-3">
              <div className="w-[40%] bg-[#bfae99] rounded-full" />
              <div className="w-[30%] bg-[#c6a87c] rounded-full shadow-[0_0_10px_#c6a87c80]" />
              <div className="w-[20%] bg-[#8b7355] rounded-full" />
              <div className="w-[10%] bg-[#d6cec0] rounded-full" />
            </div>
            <div className="flex justify-between text-[11px] text-[#8a7f72] uppercase tracking-widest font-mono">
              <span>Wool</span>
              <span>Cotton</span>
              <span>Silk</span>
              <span>Linen</span>
            </div>
          </div>

          {/* 8. بطاقة الواجهة الكبيرة */}
          <div className="collage-item parallax-very-fast absolute bottom-[6%] left-[8%] w-[440px] bg-[#2c241e] border border-[#5c4e42] rounded-[32px] p-6 shadow-2xl z-30">
            <div className="flex items-center gap-1.5 mb-8 border-b border-white/10 pb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-[#d9d1c1]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#c6a87c]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#8b7355]" />
              <span className="ml-4 text-[11px] uppercase tracking-widest text-[#c6a87c]/70 font-mono">Outfit Amman</span>
            </div>
            <div className="flex gap-6">
              <div className="flex-1">
                <h2 className="text-[32px] font-serif text-[#f8f6f0] mb-8 leading-[1.15]">Redefining<br />Modern<br />Elegance</h2>
                <button className="px-6 py-2.5 bg-[#c6a87c] text-[#2c241e] text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-[#b5986c] transition-colors">
                  Shop Now
                </button>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <img src="https://images.unsplash.com/photo-1499013819532-e4ff41b00669?auto=format&fit=crop&w=300&q=80" alt="Leather shoes" className="h-[80px] w-full rounded-2xl object-cover" />
                <div className="flex gap-2 h-[80px]">
                  <img src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=300&q=80" alt="Accessories" className="w-1/2 rounded-2xl object-cover" />
                  <div className="w-1/2 rounded-2xl bg-gradient-to-br from-[#c6a87c] to-[#8b7355]" />
                </div>
              </div>
            </div>
          </div>

          {/* 9. بطاقة Lookbook */}
          <div className="collage-item parallax-slow absolute bottom-[10%] left-[45.5%] w-[230px] h-[170px] bg-[#e6dfd1] border border-white rounded-[30px] p-6 flex flex-col justify-end shadow-2xl z-20">
            <h4 className="text-[#3b322b] text-[19px] font-medium leading-tight mb-2">Lookbook<br />2026</h4>
            <p className="text-[11px] text-[#8a7f72] font-mono">Curated daily essentials</p>
          </div>

          {/* 10. بطاقة The Classics */}
          <div className="collage-item parallax-fast absolute bottom-[11%] right-[6%] w-[390px] bg-white rounded-[2rem] p-6 shadow-2xl z-30 flex gap-5 border border-[#f4f1eb]">
            <div className="flex-1 flex flex-col justify-between">
              <span className="text-[#c6a87c] font-serif font-bold text-2xl">01</span>
              <div>
                <h3 className="text-[#3b322b] text-[26px] font-medium leading-tight">The<br />Classics</h3>
                <p className="text-[10px] text-[#8a7f72] mt-4 uppercase tracking-wider">Timeless Men's Wardrobe</p>
              </div>
            </div>
            <div className="w-[180px] flex flex-col gap-2">
              <div className="h-[60px] bg-[#f4f1eb] rounded-[14px] ml-auto w-16 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=200&q=80" alt="Tie" className="w-full h-full object-cover" />
              </div>
              <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80" alt="Leather bag" className="h-[105px] w-full rounded-[20px] object-cover bg-zinc-100" />
            </div>
          </div>

        </div>
      </div>

      {/* =====================================================
          نسخة الجوال: ترتيب عمودي أنيق بنفس هوية الكولاج
      ===================================================== */}
      <div className="md:hidden relative min-h-[115vh] pt-24 overflow-hidden">

        {/* الحاوية اللاصقة لتكرار إحساس البارالاكس أثناء التمرير */}
        <div className="sticky top-16 mobile-stack w-full max-w-md mx-auto px-5 flex flex-col items-center gap-5 pb-10">

          {/* الحرف الضخم M في الخلفية */}
          <div className="m-mobile pointer-events-none absolute -top-10 -right-8 text-[#e6dfd1] text-[210px] font-serif leading-none z-0 select-none">
            M
          </div>

          {/* خطوط زخرفية */}
          <div className="pointer-events-none absolute top-[32%] left-[4%] right-[4%] h-[58%] border border-[#d6cec0] rounded-[60px] z-0" />

          {/* أيقونات الهوية */}
          <div className="collage-item relative z-10 flex gap-3 mt-6">
            {[ShoppingBag, Scissors, Award].map((Icon, i) => (
              <div key={i} className="w-[46px] h-[46px] bg-[#e3dbc8] border border-white/60 rounded-2xl flex items-center justify-center text-[#4a3f35] shadow-lg">
                <Icon size={22} strokeWidth={1.5} />
              </div>
            ))}
          </div>

          {/* بطاقة الواجهة الرئيسية */}
          <div className="collage-item relative z-10 w-full bg-[#2c241e] border border-[#5c4e42] rounded-[2rem] p-6 shadow-2xl">
            <div className="flex items-center gap-1.5 mb-5 border-b border-white/10 pb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-[#d9d1c1]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#c6a87c]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#8b7355]" />
              <span className="ml-3 text-[10px] uppercase tracking-widest text-[#c6a87c]/70 font-mono">Outfit Amman</span>
            </div>
            <h2 className="text-[#f8f6f0] font-serif text-[28px] leading-[1.15]">Redefining<br />Modern<br />Elegance</h2>
            <div className="grid grid-cols-3 gap-2 mt-5">
              <img src="https://images.unsplash.com/photo-1499013819532-e4ff41b00669?auto=format&fit=crop&w=300&q=80" alt="Leather shoes" className="h-20 w-full rounded-2xl object-cover" />
              <img src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=300&q=80" alt="Accessories" className="h-20 w-full rounded-2xl object-cover" />
              <div className="h-20 w-full rounded-2xl bg-gradient-to-br from-[#c6a87c] to-[#8b7355]" />
            </div>
            <button className="mt-6 w-full py-3 bg-[#c6a87c] text-[#2c241e] text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-[#b5986c] transition-colors">
              Shop Now
            </button>
          </div>

          {/* القبة الوسطى (الموديل) */}
          <div className="collage-item relative z-10 w-[230px] aspect-[230/330] overflow-hidden rounded-t-[120px] rounded-b-[2rem] shadow-2xl border border-white/50 bg-[#d6cec0] shrink-0">
            <img src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&w=500&q=80" alt="Men fashion model" className="w-full h-full object-cover" />
          </div>

          {/* بطاقتان صغيرتان جنباً إلى جنب */}
          <div className="relative z-10 grid grid-cols-2 gap-4 w-full">
            <div className="collage-item bg-white rounded-[1.5rem] p-4 shadow-xl border border-[#f4f1eb]">
              <div className="w-6 h-1 bg-[#c6a87c] rounded-full mb-4" />
              <h3 className="text-[#3b322b] text-[17px] font-medium leading-tight mb-3">Summer<br />Collection</h3>
              <div className="grid grid-cols-2 gap-1.5">
                <img src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=300&q=80" alt="Fabric texture" className="h-14 w-full object-cover rounded-xl" />
                <div className="h-14 w-full bg-[#f4f1eb] rounded-xl" />
                <div className="h-14 w-full bg-[#f4f1eb] rounded-xl" />
                <img src="https://images.unsplash.com/photo-1594938298596-70f56f91f3c4?auto=format&fit=crop&w=300&q=80" alt="Suit detail" className="h-14 w-full object-cover rounded-xl" />
              </div>
            </div>

            <div className="collage-item bg-white rounded-[1.5rem] p-4 shadow-xl border border-[#f4f1eb] flex flex-col">
              <span className="text-[#c6a87c] font-serif font-bold text-xl">01</span>
              <h3 className="text-[#3b322b] text-[17px] font-medium leading-tight mt-auto">The<br />Classics</h3>
              <p className="text-[9px] text-[#8a7f72] mt-1 uppercase tracking-wider font-mono">Timeless Wardrobe</p>
            </div>
          </div>

          {/* شريط النسبة Progress Bar */}
          <div className="collage-item relative z-10 w-full">
            <div className="text-right text-[#5c4e42] font-medium text-xs mb-2 uppercase tracking-widest">Material Blend</div>
            <div className="flex gap-1.5 h-3 mb-2">
              <div className="w-[40%] bg-[#bfae99] rounded-full" />
              <div className="w-[30%] bg-[#c6a87c] rounded-full shadow-[0_0_10px_#c6a87c80]" />
              <div className="w-[20%] bg-[#8b7355] rounded-full" />
              <div className="w-[10%] bg-[#d6cec0] rounded-full" />
            </div>
            <div className="flex justify-between text-[10px] text-[#8a7f72] uppercase tracking-widest font-mono">
              <span>Wool</span>
              <span>Cotton</span>
              <span>Silk</span>
              <span>Linen</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}