import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ShieldAlert, ArrowDown, ChevronRight, Users, Trophy, Percent, Star, Phone, Crown, MapPin, Power, Sparkles } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import heroBg from '../assets/images/gym_hero_bg_1779634574508.png';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const [lightOn, setLightOn] = useState<boolean>(true);
  const [tipIdx, setTipIdx] = useState<number>(0);
  const { language, t } = useLanguage();

  const funnyTips = language === 'am' ? [
    "በሾላ ገበያ የሚገኝ አንድ ማኪያቶ ከስፖርት በፊት መጠጣት ክንድዎን የ+20kg ኃይል እንደሚጨምር በሳይንስ ተረጋግጧል። ☕",
    "ድንጋጌ #1፡ ዳምቤሎችን ቦታቸው ላይ ይመልሱ፣ ካልሆነ ግን IFBB ሰርተፊኬት ያላቸው አሰልጣኞቻችን በትዝብት ያዩዎታል። 👀",
    "እንቅስቃሴ በሚሰሩበት ጊዜ መጮህ ሙሉ በሙሉ ህጋዊ ነው፣ ነገር ግን ድምፅዎ ከቦይንግ 777 አውሮፕላን ጩኸት እንዳይበልጥ እንጠይቃለን። ✈️",
    "ላብ ማለት ስብዎ ሲያለቅስ ማለት ነው። ስቡ እስኪንሰቀሰቅ ድረስ እናሰቃየው! 😂🔥",
    "ከአያትዎ የተጻፈ ልዩ የፈቃድ ወረቀት ከሌለዎት በስተቀር የስኳት ራክ (squat rack) ውስጥ ባይስፕስ መስራት በጥብቅ የተከለከለ ነው። 🚫"
  ] : [
    "Macchiato espresso fuel from Shola market is scientifically proven to boost your overhead press by +20kg.",
    "Rule #1: Re-rack your dumbbells, or our certified IFBB coaches will stare at you very disapprovingly.",
    "Audible grunting is fully legal, but please keep it below the volume of a Boeing 777 jet engine.",
    "Sweat is just your fat crying. Let's make that fat sob hysterically!",
    "No curling inside the squat rack under any circumstances, unless you hold a direct hand-written pass from your grandma."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTipIdx((prev) => (prev + 1) % funnyTips.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: '600+', label: t.hero.stats.eliteMembers, icon: <Users size={16} className="text-brand-primary" />, suffix: t.hero.stats.suffixMembers },
    { value: '8+', label: t.hero.stats.certifiedCoaches, icon: <Trophy size={16} className="text-amber-500" />, suffix: t.hero.stats.suffixCoaches },
    { value: '7+', label: t.hero.stats.yearsExp, icon: <Award size={16} className="text-purple-400" />, suffix: t.hero.stats.suffixExp },
    { value: '100%', label: t.hero.stats.successRatio, icon: <Percent size={16} className="text-emerald-400" />, suffix: t.hero.stats.suffixSuccess },
  ];

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] pt-20">
      {/* Background Cinematic Image with Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Champion Gym Premium Cinematic Backdrop"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_infinite] opacity-65 md:opacity-80"
          referrerPolicy="no-referrer"
        />
        {/* Deep vignette overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/45 to-[#0a0a0a]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
        
        {/* Radial spotlight from the theme overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#ff313125_0%,transparent_50%)] pointer-events-none" />
        {/* Carbon texture layer */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />

        {/* Glow point */}
        <div className="absolute top-1/3 left-1/4 h-80 w-80 rounded-full bg-brand-primary/10 blur-[130px]" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-brand-accent/5 blur-[150px]" />
      </div>

      {/* Grid overlay for high-tech look */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] md:bg-[size:48px_48px] opacity-70" />

      {/* Hero content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-12 md:pt-24 pb-16 flex flex-col justify-between h-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Headline & CTAs */}
          <div className="lg:col-span-7 space-y-8 md:space-y-10 text-left">
            
            {/* EXTREMELY PREMIUM BRAND LOGO BLOCK - DRAGGED TO THE TOP WITH SPACE & DYNAMIC NEON LIGHT SWITCH */}
            <motion.div
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex items-center justify-between gap-4 p-5 md:p-6 rounded-2xl bg-zinc-950/80 border-2 backdrop-blur-md max-w-md transition-all duration-500 group/hero-brand -mt-8 md:-mt-16 mb-4 select-none ${
                lightOn 
                  ? 'border-brand-primary/40 shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_30px_rgba(255,49,49,0.15)] bg-zinc-950/90' 
                  : 'border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.85)] bg-zinc-950/65'
              }`}
            >
              <div className="flex items-center gap-4.5">
                {/* Giant Extra Premium rotating animated Logo Icon for maximum brand impact */}
                <div 
                  onClick={() => setLightOn(!lightOn)}
                  className={`relative flex items-center justify-center w-16 h-16 rounded-2xl bg-black border-2 transition-all duration-500 shadow-[0_12px_30px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.1)] overflow-hidden shrink-0 cursor-pointer ${
                    lightOn ? 'border-brand-primary/40' : 'border-zinc-850'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-tr from-brand-primary/20 via-transparent to-[#ff3131]/20 transition-opacity duration-300 ${lightOn ? 'opacity-60' : 'opacity-10'}`} />
                  <div className={`absolute -bottom-2 w-full h-10 bg-brand-primary/25 blur-md rounded-full transition-all duration-500 ${lightOn ? 'opacity-100 scale-110' : 'opacity-0 scale-50'}`} />
                  
                  <div className="relative flex items-center justify-center w-full h-full">
                    {/* Rotating framing grids */}
                    <div className={`absolute w-9 h-9 border rotate-45 transition-all duration-1000 group-hover/hero-brand:rotate-[225deg] ${lightOn ? 'border-white/15' : 'border-white/5'}`} />
                    <div className={`absolute w-7.5 h-7.5 border -rotate-12 transition-all duration-700 group-hover/hero-brand:rotate-45 ${lightOn ? 'border-white/10' : 'border-transparent'}`} />
                    
                    {/* Glowing inner core bullet (On / Off state) */}
                    <div 
                      className={`absolute w-4.5 h-4.5 rounded-xs rotate-45 transition-all duration-500 ${
                        lightOn 
                          ? 'bg-gradient-to-br from-brand-primary via-[#ff5d5d] to-[#ff2a1a] shadow-[0_0_25px_rgba(255,49,49,0.95)] scale-110' 
                          : 'bg-zinc-800 scale-90 opacity-40 shadow-none'
                      }`} 
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <span className={`text-2xl md:text-3xl font-display font-black tracking-wider uppercase italic leading-none transition-colors duration-300 ${
                    lightOn ? 'text-white' : 'text-zinc-500'
                  }`}>
                    {language === 'am' ? 'ሻምፒዮን' : 'CHAMPION'}
                  </span>
                  <span className={`text-[11px] md:text-[12px] font-mono tracking-[0.18em] font-black uppercase leading-none mt-2 flex items-center gap-1.5 transition-colors duration-300 ${
                    lightOn ? 'text-brand-primary/95' : 'text-zinc-600'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${lightOn ? 'bg-brand-primary animate-pulse' : 'bg-zinc-800'}`} />
                    {language === 'am' ? 'ጂምና ፊልነስ' : 'GYM & FITNESS'}
                  </span>
                </div>
              </div>

              {/* TACTILE NEON INTERACTIVE SWITCH (Like on-off button) */}
              <div className="flex flex-col items-end gap-1.5 pl-3 border-l border-white/5 shrink-0">
                <span className="text-[8px] font-mono text-zinc-600 font-extrabold tracking-widest uppercase block">
                  {language === 'am' ? 'የኔዮን ማብሪያ' : 'NEON EMISSION'}
                </span>
                <button
                  onClick={() => setLightOn(!lightOn)}
                  className={`w-12 h-6.5 rounded-full p-1 transition-colors duration-300 focus:outline-none flex items-center cursor-pointer shadow-inner relative overflow-hidden ${
                    lightOn 
                      ? 'bg-brand-primary/20 border border-brand-primary/30' 
                      : 'bg-zinc-900 border border-zinc-800'
                  }`}
                  aria-label="Toggle neon light"
                >
                  <motion.div
                    layout
                    className={`w-4.5 h-4.5 rounded-full shadow-md flex items-center justify-center transition-all ${
                      lightOn 
                        ? 'bg-brand-primary text-white' 
                        : 'bg-zinc-600 text-zinc-950'
                    }`}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Power size={9} className="font-extrabold" />
                  </motion.div>
                  
                  {/* Neon laser trail */}
                  {lightOn && (
                    <span className="absolute inset-y-0 right-2 left-5 bg-brand-primary/10 blur-[2px] rounded-full pointer-events-none" />
                  )}
                </button>
                <span className={`text-[8px] font-mono font-black tracking-wider ${
                  lightOn ? 'text-brand-primary animate-pulse' : 'text-zinc-600'
                }`}>
                  {lightOn ? (language === 'am' ? 'በርቷል' : 'ONLINE') : (language === 'am' ? 'ጠፍቷል' : 'STANDBY')}
                </span>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider bg-brand-primary/10 text-brand-primary border border-brand-primary/20 uppercase"
            >
              <Users size={12} /> {language === 'am' ? 'አዲስ አበባ ፣ መገናኛ ሾላ' : 'ESTABLISHED IN ADDIS ABABA'}
            </motion.div>

            {/* Aggressive Bold Typography */}
            <div className="space-y-4">
              <p className="text-brand-primary font-black uppercase tracking-[0.25em] text-xs md:text-sm">
                {language === 'am' ? 'ሰበብ የለም • NO EXCUSES' : 'DOMINATE YOUR LIMITS'}
              </p>
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl sm:text-6xl md:text-[85px] leading-[0.9] font-black italic uppercase tracking-tighter text-white font-sans"
              >
                {t.hero.headingPart1} <br />
                <span className="text-brand-primary">{t.hero.headingPart2}</span>{' '}
                <span className="stroke-text block sm:inline">{t.hero.headingPart3}</span>{' '}
                <span className="text-white block md:inline">{t.hero.headingPart4}</span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm md:text-base text-zinc-300 max-w-xl font-sans tracking-wide leading-relaxed"
            >
              {t.hero.subheading}
            </motion.p>

            {/* Interactive CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenBooking}
                className="relative group overflow-hidden bg-gradient-to-r from-brand-primary to-brand-accent text-white font-mono text-sm uppercase font-bold tracking-widest py-4 px-8 rounded-xl hover:shadow-[0_0_25px_rgba(255,60,0,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ChevronRight size={16} />
              </button>
              
              <a
                href="#classes"
                className="flex items-center justify-center gap-2 py-4 px-8 rounded-xl border border-white/10 hover:border-brand-primary text-white font-mono text-sm uppercase tracking-widest hover:bg-white/5 transition-all font-semibold"
              >
                <span>{t.hero.ctaSecondary}</span>
              </a>
            </motion.div>

            {/* Quality assurance banner with funny interactive ticker */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-3"
            >
              <div className="flex flex-wrap items-center gap-3 text-[10px] md:text-xs text-zinc-500 font-mono tracking-widest uppercase">
                <span className="flex items-center gap-0.5 text-amber-400">
                  <Star size={11} fill="currentColor" />
                  <Star size={11} fill="currentColor" />
                  <Star size={11} fill="currentColor" />
                  <Star size={11} fill="currentColor" />
                  <Star size={11} fill="currentColor" />
                </span>
                <span>• {t.hero.luxuryBadge}</span>
              </div>

              {/* Glowing Humorous Live Advice Ticker */}
              <div className="p-3.5 rounded-xl bg-zinc-950/90 border border-brand-primary/20 shadow-[0_4px_12px_rgba(255,49,49,0.05)] max-w-xl">
                <div className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary text-[10px] font-mono font-bold animate-pulse">
                    💡
                  </span>
                  <div className="flex-1 overflow-hidden min-h-[38px] flex items-center">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={tipIdx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.35 }}
                        className="text-[11px] md:text-xs text-zinc-300 font-mono italic leading-relaxed"
                      >
                        {funnyTips[tipIdx]}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature Showcase right column */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* VIP Card preview element */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass-panel p-6 md:p-8 rounded-2xl relative shadow-[0_0_50px_rgba(255,60,0,0.1)] overflow-hidden border border-white/5 group"
            >
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 h-32 w-32 bg-brand-primary/10 rounded-full blur-2xl group-hover:bg-brand-primary/20 transition-all duration-500" />
              
              <span className="text-[10px] font-mono text-brand-primary font-bold uppercase tracking-widest">
                {language === 'am' ? 'የአዲስ አበባ ልዩ መተላለፊያ' : 'EXCLUSIVE ADDIS GATEWAY'}
              </span>
              <h3 className="text-xl md:text-2xl font-display font-bold text-white uppercase italic mt-1.5">
                {language === 'am' ? 'የአባላት ምዝገባ ተጀምሯል' : 'ATHLETE MEMBERSHIP OPEN'}
              </h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                {language === 'am' 
                  ? 'ዛሬውኑ ይቀላቀሉንና ዘመናዊ የክብደት ማንሻዎችን፣ የባለሙያ ደጋፊዎችን፣ የታይቦ እና የኤሮቢክስ ስልጠናዎችን እንዲሁም ተጫዋች አሰልጣኞቻችንን ያግኙ።' 
                  : 'Join our premium ecosystem today. Unlock access to state-of-the-art weights, professional coaching, TaeBo classes, and interactive metabolism planners.'}
              </p>

              <div className="my-6 space-y-4 border-y border-white/5 py-4">
                <motion.div 
                  animate={{
                    borderColor: [
                      "rgba(255, 49, 49, 0.2)",
                      "rgba(255, 49, 49, 0.7)",
                      "rgba(255, 49, 49, 0.2)"
                    ],
                    boxShadow: [
                      "0 0 10px rgba(255, 49, 49, 0.08)",
                      "0 0 25px rgba(255, 49, 49, 0.35)",
                      "0 0 10px rgba(255, 49, 49, 0.08)"
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="flex flex-col gap-2.5 bg-gradient-to-r from-brand-primary/10 to-zinc-950/95 p-4 rounded-xl border relative overflow-hidden group/loc"
                >
                  {/* Subtle moving ambient light in the background of location box */}
                  <div className="absolute inset-0 bg-gradient-to-l from-brand-primary/5 via-transparent to-transparent opacity-50 pointer-events-none group-hover/loc:opacity-80 transition-opacity duration-300" />
                  
                  <div className="flex items-center justify-between z-10 relative">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded bg-[#ff3131]/20 text-[#ff3131] border border-[#ff3131]/30">
                        <MapPin size={11} className="animate-pulse" />
                      </div>
                      <span className="text-brand-primary font-mono shrink-0 uppercase tracking-[0.2em] font-extrabold text-[10px]">
                        {language === 'am' ? 'ምርጥ አድራሻ' : 'PREMIUM LOCATION'}
                      </span>
                    </div>
                    <span className="text-[9px] font-mono text-zinc-500 font-semibold uppercase tracking-wider">
                      {language === 'am' ? 'አዲስ አበባ' : 'ADDIS ABABA'}
                    </span>
                  </div>

                  <span className="text-white font-bold font-mono text-[11px] tracking-wide select-all bg-black/90 px-3 py-2 rounded-lg border border-white/10 leading-relaxed hover:border-[#ff3131]/40 transition-colors z-10 block relative cursor-text">
                    {language === 'am' ? 'መገናኛ አደባባይ ሾላ ገበያ፣ ከሱመያ መስጂድ አጠገብ' : 'Megenagna Square Shola Gebeya, near Sumeya Mosque'}
                  </span>
                </motion.div>
                
                {/* Premium Interactive Contact Hub */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500 font-mono text-[9px] uppercase tracking-[0.15em] block font-bold">
                      {language === 'am' ? 'የመመዝገቢያ የስልክ መስመሮች' : 'OFFICIAL ENROLLMENT CHANNELS'}
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-[9px] text-[#ff3131]/95 tracking-widest font-bold">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#ff3131] animate-ping" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#ff3131] absolute" />
                      {language === 'am' ? 'የቀጥታ መስመር' : 'SECURE CONNECT'}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-2.5">
                    {/* Reception Line 1 */}
                    <a 
                      href="tel:0929485202" 
                      className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-950 border border-white/10 hover:border-brand-primary/60 hover:shadow-[0_0_15px_rgba(255,49,49,0.15)] transition-all group/line select-none cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded bg-[#ff3131]/10 text-brand-primary border border-[#ff3131]/20">
                          <Phone size={13} className="group-hover/line:animate-bounce" />
                        </div>
                        <div>
                          <span className="text-zinc-500 font-mono text-[9px] tracking-widest uppercase block leading-none font-bold">
                            {language === 'am' ? 'የመቀበያ ስልክ መስመር 1' : 'RECEPTION LINE I'}
                          </span>
                          <span className="text-[10px] text-zinc-400 font-mono tracking-wider font-semibold group-hover/line:text-white transition-colors">
                            {language === 'am' ? 'ለመደወል ይጫኑ' : 'TAP TO CALL'}
                          </span>
                        </div>
                      </div>
                      <span className="text-white font-black font-mono text-sm tracking-widest group-hover/line:text-brand-primary transition-colors">0929485202</span>
                    </a>
                    
                    {/* Reception Line 2 */}
                    <a 
                      href="tel:0953556666" 
                      className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-950 border border-white/10 hover:border-brand-primary/60 hover:shadow-[0_0_15px_rgba(255,49,49,0.15)] transition-all group/line select-none cursor-pointer relative z-10"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded bg-[#ff3131]/10 text-brand-primary border border-[#ff3131]/20">
                          <Phone size={13} className="group-hover/line:animate-bounce" />
                        </div>
                        <div>
                          <span className="text-zinc-500 font-mono text-[9px] tracking-widest uppercase block leading-none font-bold">
                            {language === 'am' ? 'የመቀበያ ስልክ መስመር 2' : 'RECEPTION LINE II'}
                          </span>
                          <span className="text-[10px] text-zinc-400 font-mono tracking-wider font-semibold group-hover/line:text-white transition-colors">
                            {language === 'am' ? 'ለመደወል ይጫኑ' : 'TAP TO CALL'}
                          </span>
                        </div>
                      </div>
                      <span className="text-white font-black font-mono text-sm tracking-widest group-hover/line:text-brand-primary transition-colors">0953556666</span>
                    </a>

                    {/* Owner Direct line */}
                    <a 
                      href="tel:0911259024" 
                      className="flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-amber-500/10 to-zinc-950/40 border border-amber-500/30 hover:border-amber-500/70 hover:shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-all group/line select-none cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                          <Crown size={13} className="group-hover/line:rotate-12 transition-transform duration-300" />
                        </div>
                        <div>
                          <span className="text-amber-400 font-mono text-[9px] font-black tracking-widest uppercase block leading-none">
                            {language === 'am' ? 'ማኔጅመንት ቀጥተኛ ማለፊያ' : 'OWNER BYPASS'}
                          </span>
                          <span className="text-[10px] text-zinc-400 font-mono tracking-wider font-semibold group-hover/line:text-white transition-colors">
                            {language === 'am' ? 'ቀጥታ መስመር' : 'DIRECT PASSAGE'}
                          </span>
                        </div>
                      </div>
                      <span className="text-white font-black font-mono text-sm tracking-widest group-hover/line:text-amber-400 transition-colors">0911259024</span>
                    </a>
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-zinc-500 font-mono uppercase tracking-widest">
                    {language === 'am' ? 'ገባሪ አባላት በየቀኑ' : 'MEMBERS ACTIVE'}
                  </span>
                  <span className="text-white font-medium font-mono">
                    {language === 'am' ? '1,200+ የሚሳተፉ' : '1,200+ Regulars Daily'}
                  </span>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full text-center bg-zinc-900 hover:bg-zinc-800 text-white border border-white/10 hover:border-brand-primary font-mono text-xs uppercase py-3.5 rounded-xl transition-all tracking-wider font-bold"
              >
                {language === 'am' ? 'ለአባልነት ቦታ ይያዙ 🎫' : 'REQUEST PRIORITY ACCESS'}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Dynamic Static Statistics bottom row */}
        <div className="mt-16 md:mt-24 border-t border-white/5 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={stat.label}
              className="p-4 bg-zinc-950/40 border border-white/5 rounded-xl flex items-start gap-4 hover:border-brand-primary/20 transition-all group"
            >
              <div className="p-2 bg-zinc-900 border border-white/5 rounded-lg group-hover:bg-zinc-800 transition-colors">
                {stat.icon}
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-display font-black text-white italic leading-none">
                  {stat.value}
                </span>
                <span className="block text-[11px] font-mono text-zinc-400 uppercase tracking-widest mt-1">
                  {stat.label}
                </span>
                <span className="text-[9px] text-zinc-600 uppercase font-mono tracking-wider">
                  {stat.suffix}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60">
        <span className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={14} className="text-brand-primary" />
        </motion.div>
      </div>
    </div>
  );
}
