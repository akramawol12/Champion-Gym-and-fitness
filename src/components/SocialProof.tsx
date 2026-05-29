import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ShieldCheck, Flame, Scale, Activity, Zap, Info, Calendar } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function SocialProof() {
  const [unit, setUnit] = useState<'kg' | 'lbs'>('kg');
  const [activeLift, setActiveLift] = useState<'squat' | 'bench' | 'deadlift' | 'press'>('squat');
  const { language, t } = useLanguage();
  
  // States of the Visual Drag Calculator
  const [weight, setWeight] = useState<number>(100); // default 100 kg or lbs
  const [reps, setReps] = useState<number>(5);

  const stats = language === 'am' ? [
    { value: '100%', label: 'ቪዥዋል ባዮሜካኒክስ', sub: 'የክብደት ሰሌዳ ድልድል' },
    { value: 'Epley', label: 'የሂሳብ ደረጃዎች', sub: 'የሻምፒዮን ዘመናዊ ፎርሙላ' },
    { value: 'ዜሮ ግምት', label: 'ደህንነቱ የተጠበቀ ጡንቻ', sub: 'ሳይንሳዊ የአካል ብቃት' },
    { value: '98.8%', label: 'የስኬት መቶኛ', sub: 'የጉዳት አደጋ ቅነሳ' },
  ] : [
    { value: '100%', label: 'Visual Biomechanics', sub: 'Real-time Plate Allocation' },
    { value: 'Epley', label: 'Mathematical Standard', sub: 'Elite Athletic Formula' },
    { value: 'Zero-Guess', label: 'Muscular Safety', sub: 'Calculated 1RM Thresholds' },
    { value: '98.8%', label: 'Progression Success', sub: 'Risk Reduction Ratio' },
  ];

  const badges = language === 'am' ? [
    { title: 'ሰርጭት', desc: 'ፈጣን የባርቤል ስሌት' },
    { title: 'ትክክለኛ ክብደት', desc: 'ትክክለኛ የክብደት ሳህኖች' },
    { title: 'የጡንቻ ኃይል', desc: 'ወጥ የሆነ የስበት አቅጣጫ' },
  ] : [
    { title: 'automatic loading', desc: 'Real-time barbell calculation' },
    { title: 'precision plates', desc: 'Accurate dynamic weight stacks' },
    { title: 'metabolic exertion', desc: 'Symmetrical power statistics' },
  ];

  // Specific settings based on physical lift types
  const liftMeta = {
    squat: {
      name: language === 'am' ? "ኦሊምፒክ ስኳት 🏋️" : "Olympic Back Squat",
      primaryMuscle: language === 'am' ? "የጭን እና መቀመጫ ጡንቻዎች (Quads)" : "Quadriceps & Gluteus",
      barWeightKg: 20,
      barWeightLbs: 45,
      defaultKg: 100,
      defaultLbs: 225,
      maxKg: 300,
      maxLbs: 650,
      multiplier: 1.15, // Metabolic stress coefficient
      description: language === 'am' ? "ጠቃሚ የታችኛው የሰውነት ክፍል ማጎልበቻ።" : "Primary closed-chain lower body force driver."
    },
    bench: {
      name: language === 'am' ? "ቤንች ፕሬስ 🏋️‍♀️" : "Precision Bench Press",
      primaryMuscle: language === 'am' ? "ደረት እና የክንድ ጡንቻዎች (Pecs)" : "Pectoralis Major & Triceps",
      barWeightKg: 20,
      barWeightLbs: 45,
      defaultKg: 80,
      defaultLbs: 185,
      maxKg: 220,
      maxLbs: 485,
      multiplier: 0.85,
      description: language === 'am' ? "ደረት እና የላይኛውን አካል ማወፈርያ።" : "Horizontal upper body chest power standard."
    },
    deadlift: {
      name: language === 'am' ? "ዴድ ሊፍት 💀🏋️‍♂️" : "Sovereign Deadlift",
      primaryMuscle: language === 'am' ? "አጠቃላይ የጀርባ ጡንቻዎች (Posterior Chain)" : "Posterior Chain & Erector Spinae",
      barWeightKg: 20,
      barWeightLbs: 45,
      defaultKg: 120,
      defaultLbs: 275,
      maxKg: 340,
      maxLbs: 750,
      multiplier: 1.35,
      description: language === 'am' ? "አጠቃላይ ጥንካሬን የሚፈትሽ ከባድ ስልጠና።" : "Full posterior kinetic chain output test."
    },
    press: {
      name: language === 'am' ? "ኦቨርሄድ ፕሬስ (ትከሻ)" : "Military Overhead Press",
      primaryMuscle: language === 'am' ? "ትከሻ እና አንገት (Deltoids)" : "Deltoids & Clavicular Head",
      barWeightKg: 20,
      barWeightLbs: 45,
      defaultKg: 50,
      defaultLbs: 115,
      maxKg: 140,
      maxLbs: 315,
      multiplier: 0.75,
      description: language === 'am' ? "ከትከሻ በላይ ክብደትን የመቆጣጠር ብቃት።" : "Vertical shoulder press stability marker."
    }
  };

  const currentLiftMeta = liftMeta[activeLift];
  const barWeight = unit === 'kg' ? currentLiftMeta.barWeightKg : currentLiftMeta.barWeightLbs;

  // Enforce minimum weight as the barbell weight
  const activeWeight = Math.max(barWeight, weight);

  // Estimates One-Rep Max (1RM) using Epley Formula
  const est1RM = useMemo(() => {
    if (reps === 1) return activeWeight;
    return Math.round(activeWeight * (1 + reps / 30));
  }, [activeWeight, reps]);

  // Est calorie burn per set based on metabolic multiplier
  const estCalories = useMemo(() => {
    return Math.round(activeWeight * reps * 0.08 * currentLiftMeta.multiplier);
  }, [activeWeight, reps, currentLiftMeta]);

  // Exertion intensity score
  const intensityPct = useMemo(() => {
    const minW = barWeight;
    const maxW = unit === 'kg' ? currentLiftMeta.maxKg : currentLiftMeta.maxLbs;
    const baseVal = ((activeWeight - minW) / (maxW - minW)) * 100;
    return Math.min(100, Math.max(5, Math.round(baseVal + (reps * 2))));
  }, [activeWeight, reps, barWeight, unit, currentLiftMeta]);

  // Plate Calculations for visual distribution
  const barbellPlates = useMemo(() => {
    const weightPerSide = Math.max(0, (activeWeight - barWeight) / 2);
    const platesList: Array<{ weight: number; color: string; label: string; heightClass: string; widthClass: string }> = [];

    // Realistic plate specifications
    const platesKg = [
      { w: 25, color: 'bg-red-600 border-red-800 text-white', label: '25', h: 'h-40', w_c: 'w-6' },
      { w: 20, color: 'bg-blue-600 border-blue-800 text-white', label: '20', h: 'h-36', w_c: 'w-5.5' },
      { w: 15, color: 'bg-yellow-500 border-yellow-600 text-neutral-900', label: '15', h: 'h-32', w_c: 'w-5' },
      { w: 10, color: 'bg-green-600 border-green-850 text-white', label: '10', h: 'h-28', w_c: 'w-4.5' },
      { w: 5, color: 'bg-zinc-200 border-zinc-400 text-neutral-800', label: '5', h: 'h-24', w_c: 'w-4' },
      { w: 2.5, color: 'bg-zinc-700 border-zinc-800 text-zinc-100', label: '2.5', h: 'h-18', w_c: 'w-3' },
      { w: 1.25, color: 'bg-amber-600 border-amber-700 text-white', label: '1.25', h: 'h-14', w_c: 'w-2.5' }
    ];

    const platesLbs = [
      { w: 45, color: 'bg-red-600 border-red-800 text-white', label: '45', h: 'h-40', w_c: 'w-6.5' },
      { w: 35, color: 'bg-blue-600 border-blue-800 text-white', label: '35', h: 'h-36', w_c: 'w-5.5' },
      { w: 25, color: 'bg-yellow-500 border-yellow-600 text-neutral-900', label: '25', h: 'h-32', w_c: 'w-5' },
      { w: 10, color: 'bg-green-600 border-green-800 text-white', label: '10', h: 'h-28', w_c: 'w-4.5' },
      { w: 5, color: 'bg-zinc-200 border-zinc-400 text-neutral-800', label: '5', h: 'h-24', w_c: 'w-4' },
      { w: 2.5, color: 'bg-zinc-700 border-zinc-800 text-zinc-100', label: '2.5', h: 'h-18', w_c: 'w-3' }
    ];

    const targetPlateSet = unit === 'kg' ? platesKg : platesLbs;
    let remainingReal = weightPerSide;

    // Use epsilon to prevent floating point inaccuracies
    for (const plate of targetPlateSet) {
      while (remainingReal >= plate.w - 0.01) {
        platesList.push({
          weight: plate.w,
          color: plate.color,
          label: plate.label,
          heightClass: plate.h,
          widthClass: plate.w_c
        });
        remainingReal -= plate.w;
      }
    }
    return platesList;
  }, [activeWeight, barWeight, unit]);

  return (
    <section id="social-proof" className="relative py-20 md:py-32 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 h-96 w-96 bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 h-80 w-80 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headings & Copywriting & Stats */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider bg-brand-primary/10 text-brand-primary border border-brand-primary/20 uppercase">
              <Activity size={12} /> {language === 'am' ? 'ባዮሜካኒካል ሲሙሌተር' : 'BIOMECHANICAL MODELER'}
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter text-white uppercase italic leading-[0.9]">
              {language === 'am' ? (
                <>
                  {t.socialProof.calculatorSubtitle} <br />
                  <span className="stroke-text font-black block sm:inline">ዜሮ</span> <span className="text-brand-primary">ግምት።</span>
                </>
              ) : (
                <>
                  STRESS FACTORS.<br />
                  <span className="stroke-text font-black block sm:inline">ZERO</span> <span className="text-brand-primary">GUESSWORK.</span>
                </>
              )}
            </h2>
            <p className="text-sm md:text-base text-zinc-400 max-w-lg leading-relaxed font-sans">
              {t.socialProof.calculatorDesc}
            </p>

            {/* Badges/Stats cards */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-zinc-950 border border-white/5 shadow-md">
                  <span className="block font-display font-black text-xl md:text-2xl text-white italic">
                    {stat.value}
                  </span>
                  <span className="block text-[10px] font-mono font-bold text-brand-primary uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </span>
                  <p className="text-[9px] text-zinc-500 mt-0.5">{stat.sub}</p>
                </div>
              ))}
            </div>

            {/* Certification lines */}
            <div className="pt-4 border-t border-white/5 flex flex-wrap gap-4 items-center">
              {badges.map((b, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-semibold">
                    {b.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Barbell Visual Plate Drag Calculator */}
          <div className="lg:col-span-7 flex flex-col items-center w-full">
            <div className="w-full bg-zinc-950/90 border border-white/5 rounded-2xl overflow-hidden shadow-[2px_10px_40px_rgba(0,0,0,0.95)] flex flex-col relative">
              
              {/* Card top flare */}
              <div className="absolute top-0 left-1/4 -translate-y-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent pointer-events-none" />

              {/* Tag/Header bar with units option */}
              <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between bg-zinc-900/30">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
                  <span className="text-[10px] font-mono tracking-widest text-zinc-300 font-bold uppercase">
                    {language === 'am' ? 'የባርቤል ክብደት መቆጣጠሪያ' : 'BARBELL CONFIGURATION MODELER'}
                  </span>
                </div>
                
                {/* Metric / Imperial toggle */}
                <div className="flex rounded-md p-0.5 bg-black border border-white/5">
                  <button 
                    onClick={() => {
                      if (unit === 'lbs') {
                        // conversion approximation for slider state smoothness
                        setWeight(prev => Math.round((prev * 0.453592) / 5) * 5);
                      }
                      setUnit('kg');
                    }}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase transition-all ${unit === 'kg' ? 'bg-brand-primary text-white font-black' : 'text-zinc-500 hover:text-zinc-300'}`}
                  >
                    KG
                  </button>
                  <button 
                    onClick={() => {
                      if (unit === 'kg') {
                        // conversion approximation for slider state smoothness
                        setWeight(prev => Math.round((prev * 2.20462) / 10) * 10);
                      }
                      setUnit('lbs');
                    }}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider uppercase transition-all ${unit === 'lbs' ? 'bg-brand-primary text-white font-black' : 'text-zinc-500 hover:text-zinc-300'}`}
                  >
                    LBS
                  </button>
                </div>
              </div>

              {/* Lift Selection Tabs */}
              <div className="p-3 border-b border-white/5 bg-zinc-950 grid grid-cols-4 gap-1.5">
                {(['squat', 'bench', 'deadlift', 'press'] as const).map((lift) => (
                  <button
                    key={lift}
                    onClick={() => {
                      setActiveLift(lift);
                      const defWeight = unit === 'kg' ? liftMeta[lift].defaultKg : liftMeta[lift].defaultLbs;
                      setWeight(defWeight);
                    }}
                    className={`py-2 px-1 rounded-lg text-[10px] md:text-xs font-mono font-bold tracking-wider uppercase transition-all flex flex-col items-center justify-center border cursor-pointer relative z-20 ${
                      activeLift === lift
                        ? 'bg-brand-primary border-brand-primary/40 text-white shadow-md'
                        : 'bg-zinc-900/50 border-white/5 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900'
                    }`}
                  >
                    <span className="font-extrabold">{lift === 'press' ? 'OH PRESS' : lift}</span>
                  </button>
                ))}
              </div>

              {/* THE BARBELL PREVIEW STAGE (Highly visual & premium) */}
              <div className="relative h-56 bg-gradient-to-b from-[#111111] to-[#040404] flex flex-col justify-center items-center overflow-hidden border-b border-white/5 p-4 select-none">
                
                {/* Technical grids */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                
                {/* Dynamic barbell description display overlay */}
                <div className="absolute top-3 left-4 text-left">
                  <span className="text-[10px] font-mono font-black text-brand-primary block uppercase tracking-wide">
                    {currentLiftMeta.name}
                  </span>
                  <span className="text-[9px] text-zinc-500 block font-mono">
                    {language === 'am' ? 'ዒላማ ጡንቻ፡' : 'Target:'} {currentLiftMeta.primaryMuscle}
                  </span>
                </div>

                <div className="absolute top-3 right-4 text-right">
                  <span className="text-[10px] font-mono text-zinc-400 block uppercase font-bold">
                    {language === 'am' ? 'የባር ክብደት ተካቷል' : 'Bar weight included'}
                  </span>
                  <span className="text-[9px] text-zinc-500 block font-mono">
                    {barWeight} {unit.toUpperCase()} {language === 'am' ? 'ባር' : 'bar'}
                  </span>
                </div>

                {/* THE BARBELL */}
                <div className="relative w-full max-w-sm flex items-center justify-center h-44">
                  
                  {/* Outer safety rack upright columns (background depth layer) */}
                  <div className="absolute left-1/4 -translate-x-1/2 w-1.5 h-36 bg-zinc-900 border-r border-white/5 opacity-40" />
                  <div className="absolute right-1/4 translate-x-1/2 w-1.5 h-36 bg-zinc-900 border-l border-white/5 opacity-40" />

                  {/* Horizontal Bar Structure */}
                  {/* Left knurling sleeve bar */}
                  <div className="absolute left-6 w-1/4 h-2 bg-gradient-to-b from-zinc-300 via-zinc-400 to-zinc-600 rounded shadow-md z-10" />
                  
                  {/* Center main bar handle section */}
                  <div className="absolute inset-x-12 h-2.5 bg-gradient-to-b from-zinc-400 via-zinc-500 to-zinc-700/80 rounded z-10" />

                  {/* Right sleeve (to stack plates) */}
                  <div className="absolute right-6 w-1/4 h-3 bg-gradient-to-b from-zinc-300 via-zinc-500 to-zinc-200 border-l-2 border-zinc-500 shadow-lg z-10" />

                  {/* Collar stopper on left inner and right inner */}
                  <div className="absolute left-[44px] w-1.5 h-6 bg-amber-500 border border-amber-600 rounded shadow-sm z-20" />
                  <div className="absolute right-[44px] w-1.5 h-6 bg-amber-500 border border-amber-600 rounded shadow-sm z-20" />

                  {/* LEFT STACK RENDERING (Symmetrical Stack mirror) */}
                  <div className="absolute right-[52px] flex flex-row-reverse items-center gap-[1px] z-20 pointer-events-none">
                    <AnimatePresence initial={false}>
                      {barbellPlates.map((plate, index) => (
                        <motion.div
                          key={`plate-left-${index}-${plate.weight}`}
                          initial={{ opacity: 0, scaleY: 0.2, x: 20 }}
                          animate={{ opacity: 1, scaleY: 1, x: 0 }}
                          exit={{ opacity: 0, scaleY: 0.2, x: 20 }}
                          transition={{ type: "spring", stiffness: 350, damping: 25 }}
                          className={`${plate.color} ${plate.heightClass} ${plate.widthClass} border border-black/80 rounded-sm flex items-center justify-center select-none shadow-[2px_2px_5px_rgba(0,0,0,0.6)]`}
                        >
                          <span className="text-[7px] font-mono font-black tracking-tighter rotate-90 opacity-90 select-none">
                            {plate.label}
                          </span>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  {/* RIGHT STACK RENDERING */}
                  <div className="absolute left-[52px] flex flex-row items-center gap-[1px] z-20 pointer-events-none">
                    <AnimatePresence initial={false}>
                      {barbellPlates.map((plate, index) => (
                        <motion.div
                          key={`plate-right-${index}-${plate.weight}`}
                          initial={{ opacity: 0, scaleY: 0.2, x: -20 }}
                          animate={{ opacity: 1, scaleY: 1, x: 0 }}
                          exit={{ opacity: 0, scaleY: 0.2, x: -20 }}
                          transition={{ type: "spring", stiffness: 350, damping: 25 }}
                          className={`${plate.color} ${plate.heightClass} ${plate.widthClass} border border-black/80 rounded-sm flex items-center justify-center select-none shadow-[-2px_2px_5px_rgba(0,0,0,0.6)]`}
                        >
                          <span className="text-[7px] font-mono font-black tracking-tighter -rotate-90 opacity-90 select-none">
                            {plate.label}
                          </span>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                </div>

                {/* Plates label stack helper at the bottom of the canvas */}
                <div className="absolute bottom-2 inset-x-0 text-center flex justify-center gap-1.5 max-w-full overflow-x-auto px-4">
                  {barbellPlates.length === 0 ? (
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                      {language === 'am' ? 'ባዶ ባርቤል' : 'Empty barbell'}
                    </span>
                  ) : (
                    <div className="flex gap-1 items-center flex-wrap justify-center">
                      <span className="text-[9px] font-mono text-zinc-400 font-bold uppercase mr-1">
                        {language === 'am' ? 'በአንድ በኩል የነገሩ ክብደቶች፡' : 'Plates loaded per side:'}
                      </span>
                      {barbellPlates.map((pt, idx) => (
                        <span key={idx} className="px-1 py-0.5 bg-zinc-900 border border-white/10 text-[9px] font-mono font-black rounded text-zinc-200">
                          {pt.weight}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

              </div>

              {/* CONTROLS AREA with rich tactile touchpoints */}
              <div className="p-6 md:p-8 space-y-6 bg-zinc-950">
                
                {/* Weight Control Row */}
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <label className="text-xs font-mono font-bold uppercase text-zinc-400 tracking-wider">
                      {language === 'am' ? 'ደረጃ የተጫነ ጠቅላላ ክብደት' : 'TOTAL LOADED WEIGHT'}
                    </label>
                    <div className="flex items-baseline gap-1 bg-zinc-900/60 border border-white/5 py-1 px-3.5 rounded-xl">
                      <span className="text-3xl font-display font-black text-brand-primary italic">
                        {activeWeight}
                      </span>
                      <span className="text-xs font-mono font-bold text-zinc-400 uppercase">
                        {unit}
                      </span>
                    </div>
                  </div>

                  {/* Interactive weight slider */}
                  <div className="relative pt-2">
                    <input 
                      type="range"
                      min={barWeight}
                      max={unit === 'kg' ? currentLiftMeta.maxKg : currentLiftMeta.maxLbs}
                      step={unit === 'kg' ? 2.5 : 5}
                      value={activeWeight}
                      onChange={(e) => setWeight(Number(e.target.value))}
                      className="w-full accent-brand-primary h-1.5 bg-zinc-900 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-[9px] font-mono text-zinc-600 uppercase tracking-widest pt-1">
                      <span>{barWeight} {unit} ({language === 'am' ? 'ባር' : 'Bar'})</span>
                      <span>{language === 'am' ? 'መካከለኛ' : 'Mid'} ({unit === 'kg' ? `${Math.round((barWeight + currentLiftMeta.maxKg) / 2)}kg` : `${Math.round((barWeight + currentLiftMeta.maxLbs) / 2)}lbs`})</span>
                      <span>{language === 'am' ? 'ከፍተኛ' : 'Max'} ({unit === 'kg' ? `${currentLiftMeta.maxKg}kg` : `${currentLiftMeta.maxLbs}lbs`})</span>
                    </div>
                  </div>
                </div>

                {/* Reps Control Row */}
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <label className="text-xs font-mono font-bold uppercase text-zinc-400 tracking-wider">
                      {language === 'am' ? 'የታለመው የደገገሞሽ ልክ (Reps)' : 'TARGET SET REPETITIONS'}
                    </label>
                    <div className="flex items-baseline gap-1 bg-zinc-900/60 border border-white/5 py-1 px-3.5 rounded-xl">
                      <span className="text-2xl font-display font-black text-white italic">
                        {reps}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase mt-1">
                        {language === 'am' ? 'ደገመ' : 'REPS'}
                      </span>
                    </div>
                  </div>

                  {/* Tactile Rep range picker */}
                  <div className="relative pt-2">
                    <input 
                      type="range"
                      min={1}
                      max={15}
                      step={1}
                      value={reps}
                      onChange={(e) => setReps(Number(e.target.value))}
                      className="w-full accent-white h-1.5 bg-zinc-900 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-[9px] font-mono text-zinc-600 uppercase tracking-widest pt-1">
                      <span>{language === 'am' ? '1RM ብቃት' : '1 Rep Max'}</span>
                      <span>5 ({language === 'am' ? 'ጉልበት' : 'Strength'})</span>
                      <span>10 ({language === 'am' ? 'ጡንቻ' : 'Hypertrophy'})</span>
                      <span>15 ({language === 'am' ? 'ጽናት' : 'Endurance'})</span>
                    </div>
                  </div>
                </div>

                {/* DYNAMIC CALCULATOR OUTPUT METRICS GRID (Highly premium details) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                  
                  {/* METRIC 1: Estimated 1RM */}
                  <div className="p-3 bg-zinc-900/40 border border-white/5 rounded-xl flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block">
                        {language === 'am' ? 'ግምታዊ 1-REP MAX' : 'ESTIMATED 1-REP MAX'}
                      </span>
                      <span className="text-[10px] text-zinc-400 font-mono italic">
                        {language === 'am' ? 'ከፍተኛ የጡንቻ ጉልበት' : 'Limit muscular force'}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1 mt-2.5">
                      <span className="text-2xl font-display font-black text-white italic">
                        {est1RM}
                      </span>
                      <span className="text-[9px] font-mono font-bold text-zinc-400">
                        {unit.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  {/* METRIC 2: Caloric Block Cost */}
                  <div className="p-3 bg-zinc-900/40 border border-white/5 rounded-xl flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block">
                        {language === 'am' ? 'የሚቃጠል ካሎሪ በራውንድ' : 'SYSTEM EXERTION COST'}
                      </span>
                      <span className="text-[10px] text-zinc-400 font-mono italic">
                        {language === 'am' ? 'ግምት ስልጠና ስራ' : 'Est. mechanical work'}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-1 mt-2.5">
                      <span className="text-2xl font-display font-black text-emerald-400 italic">
                        {estCalories}
                      </span>
                      <span className="text-[9px] font-mono font-bold text-emerald-500">
                        KCAL/SET
                      </span>
                    </div>
                  </div>

                  {/* METRIC 3: Intensity Score Ring/Bar */}
                  <div className="p-3 bg-zinc-900/40 border border-white/5 rounded-xl flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block">
                        {language === 'am' ? 'የልምምድ ጥንካሬ ደረጃ' : 'METABOLIC EXERTION'}
                      </span>
                      <span className="text-[10px] text-zinc-400 font-mono italic">
                        {language === 'am' ? 'ላይ የበረታ ጫና' : 'Neuromuscular toll'}
                      </span>
                    </div>
                    <div className="mt-2.5 space-y-1">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs font-mono font-bold text-white">
                          {intensityPct}%
                        </span>
                        <span className="text-[8px] font-mono text-brand-primary tracking-widest uppercase">
                          {intensityPct > 75 
                            ? (language === 'am' ? '🔥 ሻምፒዮን ሞድ (ከፍተኛ ላብ)' : '🔥 BEAST MODE (SWEAT FLOOD)') 
                            : intensityPct > 45 
                            ? (language === 'am' ? '⚡ የማኪያቶ ኃይል ደረጃ' : '⚡ MACCHIATO FUEL LEVEL') 
                            : (language === 'am' ? '🧘 የቀሊል እረፍት ፍጥነት' : '🧘 EASY CURL-BRO PACE')}
                        </span>
                      </div>
                      <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-yellow-500 via-brand-primary to-purple-600" 
                          initial={{ width: 0 }}
                          animate={{ width: `${intensityPct}%` }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
                  </div>

                </div>

                {/* Trainer Bio Feedback disclaimer */}
                <div className="pt-3 border-t border-white/5 flex items-start gap-2 text-[10px] text-zinc-500 font-mono">
                  <Info size={14} className="text-brand-primary flex-shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    {language === 'am' 
                      ? 'የክብደት ሰሌዳዎች ስርጭት ትክክለኛውን ዓለም አቀፍ ደረጃ የተከተለ ነው። ይህ ሲሙሌተር ለመጀመሪያ ጊዜ ክብደቶችን ከመጫንዎ በፊት ለመገምገም የሚረዳ ነፃ የሳይንስ መሳሪያ ነው። ሁልጊዜም ከስፖርት አጋርዎ ጋር በመሆን ጥንቃቄ በተሞላበት መንገድ ክብደቶችን ያንሱ።' 
                      : 'Plate loading mirrors exact standard bumper sizes. This calculations protocol serves as high-fidelity assessment tooling. Safe lifting protocols suggest perfect symmetric load validation before initiation.'}
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
