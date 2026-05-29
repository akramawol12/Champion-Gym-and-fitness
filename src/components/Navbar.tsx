import { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.results, href: '#social-proof' },
    { name: t.nav.programs, href: '#classes' },
    { name: t.nav.reels, href: '#reels' },
    { name: t.nav.pricing, href: '#pricing' },
    { name: t.nav.branches, href: '#locations' },
    { name: t.nav.stories, href: '#testimonials' },
    { name: t.nav.faq, href: '#faq' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo Brand Indicator for Mobile/All */}
          <a href="#home" className="flex items-center gap-1.5 focus:outline-none">
            <span className="text-md sm:text-lg font-display font-black tracking-wider text-white uppercase italic">
              CHAMPION
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/70 hover:text-brand-primary font-mono text-[11px] uppercase tracking-wider transition-all font-semibold"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Callouts, Language Selector & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Dynamic Bright Language Selector Pill */}
            <button
              onClick={toggleLanguage}
              className="group/lang flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-zinc-900/90 text-white font-mono text-[11px] uppercase hover:bg-zinc-800 hover:border-brand-primary transition-all cursor-pointer shadow-md shrink-0 focus:outline-none focus:ring-1 focus:ring-brand-primary"
              title="Switch Language / ቋንቋ ቀይር"
            >
              <Globe size={12} className="text-brand-primary group-hover/lang:rotate-12 transition-transform" />
              <span>{language === 'am' ? 'አማርኛ 🇪🇹' : 'English 🇬🇧'}</span>
            </button>

            <a
              href="tel:0929485202"
              className="flex items-center gap-1.5 text-zinc-400 hover:text-brand-primary transition-colors text-[11px] font-mono font-semibold"
            >
              <Phone size={12} className="text-brand-primary" />
              <span>0929485202</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="px-5 py-2 bg-brand-primary hover:bg-brand-accent text-white font-black uppercase text-[11px] tracking-widest rounded-lg transition-all cursor-pointer shadow-[0_0_15px_rgba(255,49,49,0.2)]"
            >
              {t.nav.joinElite}
            </button>
          </div>

          {/* Mobile Actions (Language switcher, Call and Hamburger) */}
          <div className="lg:hidden flex items-center gap-2.5">
            {/* Mobile quick language toggle */}
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-brand-primary flex items-center justify-center cursor-pointer"
              title="ቋንቋ ቀይር / Switch Language"
            >
              <span className="text-xs font-mono font-bold">{language === 'am' ? '🇪🇹' : '🇬🇧'}</span>
            </button>

            <a
              href="tel:0929485202"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-brand-primary"
            >
              <Phone size={15} />
            </a>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu Slide with Backdrop */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-35 bg-black/98 backdrop-blur-2xl flex flex-col justify-center p-6 lg:hidden">
          <div className="flex flex-col gap-5 text-center">
            {/* Big Language Toggle at the center of mobile menu */}
            <button
              onClick={() => {
                toggleLanguage();
              }}
              className="flex items-center gap-2 px-4 py-2 mx-auto rounded-full border border-brand-primary/30 bg-zinc-950 text-white font-mono text-xs uppercase hover:bg-zinc-900 transition-all cursor-pointer shadow-[0_0_15px_rgba(255,49,49,0.1)] mb-4"
            >
              <Globe size={13} className="text-brand-primary animate-pulse" />
              <span className="font-bold text-[11px]">{language === 'am' ? 'አማርኛ 🇪🇹' : 'English 🇬🇧'}</span>
              <span className="text-[9px] text-zinc-500 font-mono">(Switch / ይቀይሩ)</span>
            </button>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-display font-black text-white hover:text-brand-primary uppercase italic tracking-wider py-1.5 transition-all text-center"
              >
                {link.name}
              </a>
            ))}
            
            <div className="h-[1px] bg-white/10 w-24 mx-auto my-3" />
            
            <div className="flex flex-col gap-3.5 items-center">
              <a
                href="tel:0929485202"
                className="flex items-center gap-2 text-zinc-300 font-mono text-xs uppercase"
              >
                <Phone size={13} className="text-brand-primary" />
                <span>{t.nav.reception}: 0929485202</span>
              </a>
              <a
                href="tel:0953556666"
                className="flex items-center gap-2 text-zinc-300 font-mono text-xs uppercase"
              >
                <Phone size={13} className="text-brand-primary" />
                <span>{t.nav.reception} 2: 0953556666</span>
              </a>
              
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-brand-primary hover:bg-brand-accent text-white py-3.5 px-6 rounded-xl font-mono text-xs uppercase font-bold tracking-widest shadow-[0_0_20px_rgba(255,49,49,0.3)] mt-2"
              >
                {t.nav.passCTA}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
