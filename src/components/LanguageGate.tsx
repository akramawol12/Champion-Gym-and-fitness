import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Dumbbell, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function LanguageGate() {
  const { setLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a selection in the past
    const hasSelected = localStorage.getItem('champion_gym_lang_selected');
    if (!hasSelected) {
      setIsVisible(true);
      // Disable background scrolling while language gate is active
      document.body.style.overflow = 'hidden';
    } else {
      // If language was stored previously, apply it
      const savedLang = localStorage.getItem('champion_gym_lang_code');
      if (savedLang === 'en' || savedLang === 'am') {
        setLanguage(savedLang);
      }
    }
  }, [setLanguage]);

  const selectLanguage = (lang: 'en' | 'am') => {
    setLanguage(lang);
    localStorage.setItem('champion_gym_lang_selected', 'true');
    localStorage.setItem('champion_gym_lang_code', lang);
    setIsVisible(false);
    // Restore normal scrolling
    document.body.style.overflow = '';
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] text-white selection:bg-brand-primary"
        >
          {/* Immersive Red Ambient Light Flare */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,49,49,0.12)_0%,transparent_60%)] pointer-events-none" />
          
          {/* Cyber grid overlay */}
          <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

          {/* Centralized High-Impact Console card */}
          <div className="relative max-w-md w-full mx-4 p-8 rounded-2xl border border-white/10 bg-zinc-950/80 backdrop-blur-2xl text-center space-y-8 shadow-[0_0_60px_rgba(255,49,49,0.1)] overflow-hidden">
            {/* Corner Bracket Accents for futuristic sci-fi feel */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-primary/40 rounded-tl-lg" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-primary/40 rounded-tr-lg" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-primary/40 rounded-bl-lg" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-primary/40 rounded-br-lg" />

            <div className="flex flex-col items-center space-y-3">
              {/* Spinning / Glowing Badge Icon */}
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-tr from-brand-primary to-orange-500 rounded-full blur-md opacity-30 animate-pulse" />
                <div className="relative h-14 w-14 rounded-full bg-zinc-900 border border-brand-primary/45 flex items-center justify-center text-brand-primary">
                  <Dumbbell size={24} className="animate-bounce" />
                </div>
              </div>

              <div className="pt-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-widest bg-brand-primary/10 text-brand-primary border border-brand-primary/20 uppercase">
                  <Globe size={10} /> SELECT INSTANT ACCESS
                </span>
                <h1 className="text-3xl md:text-4xl font-display font-black tracking-tight mt-3 text-white italic uppercase">
                  CHAMPION <span className="text-brand-primary">GYM</span>
                </h1>
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mt-1">
                  Addis Ababa, Ethiopia
                </p>
              </div>
            </div>

            {/* Language Selection Grid */}
            <div className="space-y-4">
              {/* Amharic Option Button */}
              <button
                onClick={() => selectLanguage('am')}
                className="w-full group relative flex items-center justify-between p-5 rounded-xl border border-white/10 bg-zinc-900/60 hover:border-brand-primary hover:bg-brand-primary/5 transition-all duration-300 text-left cursor-pointer"
              >
                <div className="space-y-1">
                  <span className="block text-lg font-bold text-white font-sans tracking-wide">
                    በአማርኛ ይግቡ
                  </span>
                  <span className="block text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
                    Enter in Amharic
                  </span>
                </div>
                <div className="h-9 w-9 rounded-lg bg-zinc-950 border border-white/5 flex items-center justify-center text-zinc-400 group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all duration-300">
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              {/* English Option Button */}
              <button
                onClick={() => selectLanguage('en')}
                className="w-full group relative flex items-center justify-between p-5 rounded-xl border border-white/10 bg-zinc-900/60 hover:border-brand-primary hover:bg-brand-primary/5 transition-all duration-300 text-left cursor-pointer"
              >
                <div className="space-y-1">
                  <span className="block text-lg font-bold text-white font-sans tracking-wide">
                    Enter in English
                  </span>
                  <span className="block text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
                    በእንግሊዝኛ ይግቡ
                  </span>
                </div>
                <div className="h-9 w-9 rounded-lg bg-zinc-950 border border-white/5 flex items-center justify-center text-zinc-400 group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all duration-300">
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>

            {/* Aesthetic disclaimer */}
            <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">
              ★ {`High-Performance Fitness Hub • Megenagna ሾላ`}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
