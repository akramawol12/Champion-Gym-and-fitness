import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface NavItem {
  id: string;
  label: string;
  shortLabel: string;
  number: string;
}

export default function SideNav() {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');
  const [isHovered, setIsHovered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItemsAM: NavItem[] = [
    { id: 'home', label: 'ወደ መጀመሪያ ገፅ', shortLabel: 'ዋና ገፅ', number: '01' },
    { id: 'social-proof', label: 'የአባላት ለውጦች', shortLabel: 'ለውጦች', number: '02' },
    { id: 'classes', label: 'የስልጠና ፕሮግራሞች', shortLabel: 'ስፖርቶች', number: '03' },
    { id: 'coach', label: 'የልምምድ አውጪ', shortLabel: 'አሰልጣኝ', number: '04' },
    { id: 'reels', label: 'የስልጠና ቪዲዮዎች', shortLabel: 'ቪዲዮዎች', number: '05' },
    { id: 'testimonials', label: 'የአባላት ምስክርነት', shortLabel: 'ምስክርነት', number: '06' },
    { id: 'pricing', label: 'ለመመዝገብ', shortLabel: 'ጥቅሎች', number: '07' },
    { id: 'locations', label: 'ጂም ቅርንጫፎች', shortLabel: 'ቅርንጫፍ', number: '08' },
    { id: 'faq', label: 'የሚነሱ ጥያቄዎች', shortLabel: 'ጥያቄዎች', number: '09' },
  ];

  const navItemsEN: NavItem[] = [
    { id: 'home', label: 'Home Base', shortLabel: 'Home', number: '01' },
    { id: 'social-proof', label: 'Elite Results', shortLabel: 'Results', number: '02' },
    { id: 'classes', label: 'Fitness Programs', shortLabel: 'Programs', number: '03' },
    { id: 'coach', label: 'Routine Builder', shortLabel: 'Formula', number: '04' },
    { id: 'reels', label: 'Drills Reels', shortLabel: 'Reels', number: '05' },
    { id: 'testimonials', label: 'Champion Stories', shortLabel: 'Stories', number: '06' },
    { id: 'pricing', label: 'Membership Plans', shortLabel: 'Pricing', number: '07' },
    { id: 'locations', label: 'Addis Branches', shortLabel: 'Branches', number: '08' },
    { id: 'faq', label: 'Queries Hub', shortLabel: 'FAQ', number: '09' },
  ];

  const navItems = language === 'am' ? navItemsAM : navItemsEN;

  // Monitor Scroll offset to update floating active indicator and gauge progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 105 : 0;
      setScrollProgress(Math.min(progress, 100));

      // Find the currently active section from IDs
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const element = document.getElementById(item.id);
        if (element) {
          const topOffset = element.offsetTop;
          if (scrollPosition >= topOffset) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on load
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Up/Down navigation helpers (cycle through sections)
  const navigateStep = (direction: 'up' | 'down') => {
    const currentIndex = navItems.findIndex((item) => item.id === activeSection);
    if (direction === 'up' && currentIndex > 0) {
      scrollToSection(navItems[currentIndex - 1].id);
    } else if (direction === 'down' && currentIndex < navItems.length - 1) {
      scrollToSection(navItems[currentIndex + 1].id);
    }
  };

  return (
    <div 
      className="fixed right-3 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Scroll Up Button */}
      <button
        onClick={() => navigateStep('up')}
        disabled={activeSection === navItems[0].id}
        className="p-2.5 rounded-xl border border-white/5 bg-zinc-950/85 hover:border-brand-primary/40 text-zinc-400 hover:text-brand-primary transition-all disabled:opacity-20 disabled:pointer-events-none hover:shadow-[0_0_12px_rgba(255,49,49,0.25)] scroll-btn backdrop-blur-md cursor-pointer"
        aria-label="Scroll Up"
      >
        <ChevronUp size={14} className="animate-pulse" />
      </button>

      {/* Vertical Navigation Bar Body */}
      <div className="relative py-6 px-3 rounded-2xl bg-zinc-950/80 border border-white/5 shadow-2xl backdrop-blur-lg flex flex-col items-center gap-4">
        {/* Progress bar line indicator on back edge */}
        <div className="absolute left-1/2 -translate-x-1/2 top-6 bottom-6 w-[2px] bg-white/5 rounded-full overflow-hidden">
          <div 
            className="w-full bg-gradient-to-b from-[#ff3131] to-amber-500 transition-all duration-150"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>

        {/* Individual Anchor Pill List */}
        <div className="flex flex-col gap-3.5 relative z-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <div key={item.id} className="relative flex items-center justify-center">
                {/* Floating Futuristic Text Label (revealed on hover or dynamic selection) */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, x: 20, scale: 0.95 }}
                      animate={{ opacity: 1, x: -12, scale: 1 }}
                      exit={{ opacity: 0, x: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      onClick={() => scrollToSection(item.id)}
                      className="absolute right-full mr-2 pointer-events-auto whitespace-nowrap bg-zinc-900 border border-white/10 px-3 py-1.5 rounded-lg text-[10px] uppercase font-mono tracking-widest text-zinc-300 shadow-xl flex items-center gap-1.5 hover:border-brand-primary hover:text-white transition-all cursor-pointer font-sans"
                    >
                      <span className="text-brand-primary/80 font-bold">{item.number}</span>
                      <span className="w-1.5 h-[1px] bg-white/20" />
                      <span>{item.shortLabel}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Dot Trigger */}
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="relative group/btn flex items-center justify-center h-5 w-5 rounded-full transition-all cursor-pointer"
                  aria-label={`Go to section ${item.label}`}
                >
                  {/* Outer Orbit Glowing Hex Ring when active */}
                  <span 
                    className={`absolute inset-0 rounded-full border transition-all duration-300 ${
                      isActive 
                        ? 'border-brand-primary scale-110 opacity-100 rotate-45 shadow-[0_0_12px_rgba(255,49,49,0.3)]' 
                        : 'border-white/10 scale-50 opacity-0 group-hover/btn:opacity-60 group-hover/btn:scale-90 group-hover/btn:border-brand-primary/40'
                    }`} 
                  />

                  {/* Inner Core Solid Active Indicator */}
                  <span 
                    className={`h-2 w-2 rounded-xs rotate-45 transition-all duration-300 ${
                      isActive 
                        ? 'bg-brand-primary scale-110' 
                        : 'bg-zinc-600 scale-100 group-hover/btn:bg-white group-hover/btn:scale-110'
                    }`} 
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll Down Button */}
      <button
        onClick={() => navigateStep('down')}
        disabled={activeSection === navItems[navItems.length - 1].id}
        className="p-2.5 rounded-xl border border-white/5 bg-zinc-950/85 hover:border-brand-primary/40 text-zinc-400 hover:text-brand-primary transition-all disabled:opacity-20 disabled:pointer-events-none hover:shadow-[0_0_12px_rgba(255,49,49,0.25)] scroll-btn backdrop-blur-md cursor-pointer"
        aria-label="Scroll Down"
      >
        <ChevronDown size={14} className="animate-pulse" />
      </button>
    </div>
  );
}
