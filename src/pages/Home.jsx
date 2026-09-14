import React from 'react';
import Hero from '../components/sections/Hero'; // أو مسار Hero المناسب لمجلدك
import CraftSection from '../components/sections/CraftSection';
import About from '../components/sections/CinematicDive';
import Categories from '../components/sections/categories';
import Offers from '../components/sections/offers';
import Contact from '../components/sections/contact';

export default function Home() {
  return (
    <main className="w-full bg-[#091a16] min-h-screen">
      <Hero />
      <CraftSection />
      <About  />
      <Categories />
      <Offers />
      <Contact />
      
  
    </main>
  );
}