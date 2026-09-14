import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { IMG } from '../data/images';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

export default function BookAppointment() {
  return (
    <main className="w-full bg-[#f8f6f0] min-h-screen">
      <PageHero
        eyebrow="Private Appointments"
        titleLines={['Your Time,', 'Your Measure']}
        subtitle="Book a private fitting — at the boutique or in the comfort of your own home. Both options include coffee, naturally."
        image={IMG.profile}
        height="h-[60vh] min-h-[440px]"
      />

      <section className="w-full py-24 px-6 md:px-12">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* معلومات التواصل */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[1px] bg-[#c6a87c]" />
                <span className="text-[#c6a87c] uppercase tracking-[0.3em] text-xs font-bold">At Your Service</span>
              </div>
              <h2 className="text-[#2c241e] text-4xl md:text-5xl font-serif font-light leading-tight mb-8">
                The Boutique <br /> is <span className="italic text-[#8b7355]">open.</span>
              </h2>
              <p className="text-[#5c4e42] text-sm leading-relaxed font-mono max-w-md mb-12">
                Whether you are selecting your first suit or your fortieth, the first appointment is always unhurried and without obligation.
              </p>
            </Reveal>

            <div className="flex flex-col gap-7">
              <Reveal delay={0.05} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-[#d6cec0] flex items-center justify-center text-[#c6a87c] shrink-0">
                  <MapPin size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[#2c241e] font-serif text-lg mb-1">Boutique & Atelier</h4>
                  <p className="text-[#8a7f72] text-sm font-mono">Sweifieh Village, Amman<br />Hashemite Kingdom of Jordan</p>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-[#d6cec0] flex items-center justify-center text-[#c6a87c] shrink-0">
                  <Phone size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[#2c241e] font-serif text-lg mb-1">Concierge Line</h4>
                  <p className="text-[#8a7f72] text-sm font-mono">+962 7 9000 0000<br />concierge@outfitamman.com</p>
                </div>
              </Reveal>

              <Reveal delay={0.15} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-[#d6cec0] flex items-center justify-center text-[#c6a87c] shrink-0">
                  <Clock size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[#2c241e] font-serif text-lg mb-1">Opening Hours</h4>
                  <p className="text-[#8a7f72] text-sm font-mono">Saturday–Thursday: 10:00–22:00<br />Friday: 14:00–22:00</p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* النموذج */}
          <div className="lg:col-span-7">
            <Reveal delay={0.05} className="bg-white p-8 md:p-14 rounded-[2rem] shadow-xl border border-[#f4f1eb]">
              <h3 className="text-[#2c241e] text-3xl font-serif mb-2">Request an Appointment</h3>
              <p className="text-[#8a7f72] text-xs uppercase tracking-widest mb-10">We confirm within 24 hours by phone</p>

              <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input type="text" id="full-name" placeholder=" " className="peer block w-full bg-transparent border-b border-[#d6cec0] py-3 text-[#2c241e] text-sm focus:outline-none focus:border-[#c6a87c] transition-colors" />
                    <label htmlFor="full-name" className="absolute left-0 top-3 text-[#8a7f72] text-sm uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#c6a87c] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px]">Full Name</label>
                  </div>
                  <div className="relative group">
                    <input type="tel" id="phone" placeholder=" " className="peer block w-full bg-transparent border-b border-[#d6cec0] py-3 text-[#2c241e] text-sm focus:outline-none focus:border-[#c6a87c] transition-colors" />
                    <label htmlFor="phone" className="absolute left-0 top-3 text-[#8a7f72] text-sm uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#c6a87c] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px]">Phone Number</label>
                  </div>
                </div>

                <div className="relative group">
                  <input type="email" id="email" placeholder=" " className="peer block w-full bg-transparent border-b border-[#d6cec0] py-3 text-[#2c241e] text-sm focus:outline-none focus:border-[#c6a87c] transition-colors" />
                  <label htmlFor="email" className="absolute left-0 top-3 text-[#8a7f72] text-sm uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#c6a87c] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px]">Email Address</label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="relative group">
                    <select id="service" defaultValue="" className="peer block w-full appearance-none bg-transparent border-b border-[#d6cec0] py-3 text-sm text-[#2c241e] focus:outline-none focus:border-[#c6a87c] transition-colors cursor-pointer">
                      <option value="" disabled>Select a service</option>
                      <option>Bespoke Suit</option>
                      <option>First Fitting Session</option>
                      <option>Wardrobe Refresh</option>
                      <option>Home Visit</option>
                      <option>Accessory Consultation</option>
                    </select>
                    <label htmlFor="service" className="absolute left-0 -top-4 text-[10px] text-[#c6a87c] uppercase tracking-widest">Service</label>
                  </div>
                  <div className="relative group">
                    <input type="date" id="date" className="peer block w-full bg-transparent border-b border-[#d6cec0] py-3 text-sm text-[#2c241e] focus:outline-none focus:border-[#c6a87c] transition-colors" />
                    <label htmlFor="date" className="absolute left-0 -top-4 text-[10px] text-[#c6a87c] uppercase tracking-widest">Preferred Date</label>
                  </div>
                </div>

                <div className="relative group">
                  <textarea id="notes" rows="3" placeholder=" " className="peer block w-full bg-transparent border-b border-[#d6cec0] py-3 text-[#2c241e] text-sm focus:outline-none focus:border-[#c6a87c] transition-colors resize-none"></textarea>
                  <label htmlFor="notes" className="absolute left-0 top-3 text-[#8a7f72] text-sm uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#c6a87c] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px]">Occasion & Notes</label>
                </div>

                <button
                  type="submit"
                  className="mt-4 flex items-center justify-between w-full bg-[#2c241e] text-[#f8f6f0] px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#c6a87c] transition-colors duration-300 group"
                >
                  Reserve My Slot
                  <ArrowRight size={18} strokeWidth={2} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-[#a89c8f] text-[10px] text-center font-mono -mt-3">
                  <Mail size={12} className="inline mr-1" />
                  Prefer to write? concierge@outfitamman.com answers within one business day.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}