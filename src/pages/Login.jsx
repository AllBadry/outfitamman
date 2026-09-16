import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { IMG } from '../data/images';
import { ArrowRight, AlertCircle, Lock } from 'lucide-react';

export default function Login() {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    setError('Something went wrong. Please try again later.');
  };

  const handleCreateAccount = () => {
    setError('Something went wrong. Please try again later.');
  };

  return (
    <main className="w-full bg-[#f8f6f0] min-h-screen">
      <PageHero
        eyebrow="Client Account"
        titleLines={['Welcome', 'Back']}
        subtitle="Sign in to view your fitting history, saved selections, and private sale invitations."
        image={IMG.darkSuit}
        height="h-[45vh] min-h-[360px]"
      />

      <section className="w-full px-6 md:px-12 pb-24">
        <div className="max-w-lg mx-auto -mt-10">
          <Reveal delay={0.05} className="bg-white rounded-[2rem] shadow-xl border border-[#f4f1eb] p-8 md:p-12">
            <div className="flex items-center gap-3 justify-center mb-10">
              <div className="w-11 h-11 rounded-full border border-[#d6cec0] flex items-center justify-center text-[#c6a87c]">
                <Lock size={18} strokeWidth={1.5} />
              </div>
            </div>

            {error && (
              <div className="flex items-start gap-3 mb-8 rounded-xl border border-[#b3463a]/30 bg-[#b3463a]/5 px-5 py-4 text-[#b3463a]">
                <AlertCircle size={20} strokeWidth={1.75} className="shrink-0 mt-0.5" />
                <p className="text-sm font-mono leading-relaxed">{error}</p>
              </div>
            )}

            <form onSubmit={handleSignIn} className="flex flex-col gap-8">
              <div className="relative group">
                <input
                  type="email"
                  id="login-email"
                  placeholder=" "
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(''); }}
                  className="peer block w-full bg-transparent border-b border-[#d6cec0] py-3 text-[#2c241e] text-sm focus:outline-none focus:border-[#c6a87c] transition-colors"
                />
                <label
                  htmlFor="login-email"
                  className="absolute left-0 top-3 text-[#8a7f72] text-sm uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#c6a87c] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px]"
                >
                  Email Address
                </label>
              </div>

              <div className="relative group">
                <input
                  type="password"
                  id="login-password"
                  placeholder=" "
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(''); }}
                  className="peer block w-full bg-transparent border-b border-[#d6cec0] py-3 text-[#2c241e] text-sm focus:outline-none focus:border-[#c6a87c] transition-colors"
                />
                <label
                  htmlFor="login-password"
                  className="absolute left-0 top-3 text-[#8a7f72] text-sm uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#c6a87c] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px]"
                >
                  Password
                </label>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCreateAccount}
                  className="text-[#8a7f72] text-[10px] uppercase tracking-widest font-bold hover:text-[#c6a87c] transition-colors"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-[#2c241e] text-[#f8f6f0] px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#c6a87c] transition-colors duration-300 flex items-center justify-center gap-3"
              >
                Sign In
                <ArrowRight size={16} strokeWidth={2} />
              </button>
            </form>

            <div className="relative my-10 flex items-center">
              <span className="flex-1 h-[1px] bg-[#d6cec0]/60" />
              <span className="px-4 text-[10px] uppercase tracking-widest text-[#a89c8f] font-bold font-mono">or</span>
              <span className="flex-1 h-[1px] bg-[#d6cec0]/60" />
            </div>

            <button
              type="button"
              onClick={handleCreateAccount}
              className="w-full border border-[#2c241e] text-[#2c241e] px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#2c241e] hover:text-[#f8f6f0] transition-colors duration-300"
            >
              Create an Account
            </button>

            <div className="mt-10 pt-8 border-t border-[#d6cec0]/40 flex flex-col items-center gap-3">
              <Link to="/" className="text-[#8a7f72] text-[10px] uppercase tracking-widest font-bold hover:text-[#c6a87c] transition-colors">
                ← Back to Homepage
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}