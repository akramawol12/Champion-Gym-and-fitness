import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, Clock, Compass, Dumbbell, Zap, Flame, Printer, HeartHandshake, ChevronRight, FileDown } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface RoutineDay {
  day: string;
  focus: string;
  classRecommendation: string;
  duration: string;
  calories: number;
}

export default function InteractiveCoach() {
  const [goal, setGoal] = useState<'muscle' | 'stamina' | 'weight' | 'combat'>('muscle');
  const [level, setLevel] = useState<'beginner' | 'intermediate' | 'elite'>('intermediate');
  const [frequency, setFrequency] = useState<3 | 4 | 5>(3);
  const [routine, setRoutine] = useState<RoutineDay[]>([]);
  const [isGenerated, setIsGenerated] = useState(true);
  const resultsRef = useRef<HTMLDivElement>(null);
  const { language, t } = useLanguage();

  type GoalDetails = {
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
  };

  const goalOptions: Record<'muscle' | 'stamina' | 'weight' | 'combat', GoalDetails> = {
    muscle: {
      title: language === 'am' ? 'የጡንቻና ጉልበት' : 'Power & Muscle',
      description: language === 'am' ? 'ከፍተኛ የጡንቻ ማጎልበቻ፣ የጀርባና የክንድ ጥንካሬ።' : 'Maximize hypertrophy, core strength & heavy load lifting capacities.',
      icon: <Dumbbell className="text-brand-primary" size={20} />,
      color: 'from-brand-primary to-rose-600',
    },
    stamina: {
      title: language === 'am' ? 'ካርዲዮና ጽናት' : 'HIIT & Endurance',
      description: language === 'am' ? 'የልብ ጽናት መጨመር፣ ከፍተኛ የካርዲዮ ማገገሚያ።' : 'Enhance V02max, high-energy cardio recovery & stamina loops.',
      icon: <Zap className="text-amber-500" size={20} />,
      color: 'from-amber-500 to-orange-600',
    },
    weight: {
      title: language === 'am' ? 'ውፍረት መቀነሻ' : 'Weight Loss Programs',
      description: language === 'am' ? 'ፈጣን ሜታቦሊዝም፣ ስብ ማቅለጥ እና ዳንስ ኤሮቢክስ።' : 'Lean metabolic conditioning, pure deficit burning & aerobics blends.',
      icon: <Flame className="text-red-500" size={20} />,
      color: 'from-red-500 to-amber-500',
    },
    combat: {
      title: language === 'am' ? 'ታይቦ ፍልሚያ' : 'TaeBo & Combat Fit',
      description: language === 'am' ? 'ኪክ ቦክሲንግ፣ የማርሻል አርት ቅልጥፍና እና ጽናት።' : 'Explosive high-kick boxing, martial rhythm agility & conditioning.',
      icon: <Compass className="text-purple-500" size={20} />,
      color: 'from-purple-500 to-indigo-600',
    },
  };

  const buildRoutine = () => {
    const baseRoutines: Record<'muscle' | 'stamina' | 'weight' | 'combat', Record<3 | 4 | 5, Omit<RoutineDay, 'day'>[]>> = language === 'am' ? {
      muscle: {
        3: [
          { focus: 'የላይኛው ደረትና ክንድ ግፊት (Push)', classRecommendation: 'Strength Training', duration: '60 ደቂቃ', calories: 450 },
          { focus: 'የጀርባና የቢሴፕ ስበት (Pull)', classRecommendation: 'Strength Training', duration: '60 ደቂቃ', calories: 400 },
          { focus: 'እግርና መቀመጫ ማጠንከርያ (Squats)', classRecommendation: 'Strength Training', duration: '75 ደቂቃ', calories: 550 },
        ],
        4: [
          { focus: 'የላይኛ አካል ኃይል መጫኛ', classRecommendation: 'Strength Training', duration: '60 ደቂቃ', calories: 480 },
          { focus: 'የታችኛ አካልና ሆድ ቅልጥፍና', classRecommendation: 'Strength Training', duration: '60 ደቂቃ', calories: 500 },
          { focus: 'ትከሻ እና ክንድ ማወፈርያ', classRecommendation: 'Strength Training', duration: '50 ደቂቃ', calories: 380 },
          { focus: 'ፈጣን ካርዲዮና ስብ ማቅለጫ', classRecommendation: 'HIIT', duration: '45 ደቂቃ', calories: 600 },
        ],
        5: [
          { focus: 'ደረትና ትራይሴፕስ ጥንካሬ', classRecommendation: 'Strength Training', duration: '60 ደቂቃ', calories: 460 },
          { focus: 'ጀርባና የክንድ ጡንቻ ማጎልበቻ', classRecommendation: 'Strength Training', duration: '60 ደቂቃ', calories: 430 },
          { focus: 'የባርቤል ስኳት የስኬት ቀን', classRecommendation: 'Strength Training', duration: '75 ደቂቃ', calories: 600 },
          { focus: 'ፈጣን ትከሻ መገንቢያ', classRecommendation: 'Strength Training', duration: '50 ደቂቃ', calories: 400 },
          { focus: 'አጠቃላይ የሰውነት ማገገሚያ', classRecommendation: 'HIIT', duration: '45 ደቂቃ', calories: 620 },
        ],
      },
      stamina: {
        3: [
          { focus: 'ፈጣን የልብ ምትና መሮጫ', classRecommendation: 'Cardio', duration: '50 ደቂቃ', calories: 550 },
          { focus: 'አጠቃላይ የሰውነት ቅልጥፍና', classRecommendation: 'HIIT', duration: '45 ደቂቃ', calories: 620 },
          { focus: 'ኤሮቢክስ የዳንስ ሙዚቃ', classRecommendation: 'Aerobics', duration: '60 ደቂቃ', calories: 480 },
        ],
        4: [
          { focus: 'የልብ ምት መቆጣጠሪያ ካርዲዮ', classRecommendation: 'Cardio', duration: '45 ደቂቃ', calories: 520 },
          { focus: 'የሜታቦሊክ ኃይል ማሳደጊያ', classRecommendation: 'HIIT', duration: '50 ደቂቃ', calories: 650 },
          { focus: 'ታይቦ ካምባት ቦክስና እርግጫ', classRecommendation: 'TaeBo', duration: '60 ደቂቃ', calories: 580 },
          { focus: 'ኤሮቢክስ የሆድ ስብ ማጥፊያ', classRecommendation: 'Aerobics', duration: '60 ደቂቃ', calories: 450 },
        ],
        5: [
          { focus: 'ፈጣን ሩጫና የልብ ጽናት', classRecommendation: 'Cardio', duration: '40 ደቂቃ', calories: 500 },
          { focus: 'ከፍተኛ የHIIT ስልጠና', classRecommendation: 'HIIT', duration: '50 ደቂቃ', calories: 700 },
          { focus: 'እጅግ ከባድ ቦክስና እርግጫ', classRecommendation: 'TaeBo', duration: '60 ደቂቃ', calories: 620 },
          { focus: 'አጠቃላይ ስብ ማውደሚያ', classRecommendation: 'Weight Loss Programs', duration: '60 ደቂቃ', calories: 550 },
          { focus: 'ኤሮቢክስ ዘና ማድረጊያ', classRecommendation: 'Aerobics', duration: '50 ደቂቃ', calories: 420 },
        ],
      },
      weight: {
        3: [
          { focus: 'ከፍተኛ ስብ ማቅለጫ', classRecommendation: 'Weight Loss Programs', duration: '60 ደቂቃ', calories: 580 },
          { focus: 'ኤሮቢክስ ዳንስ ስፖርት', classRecommendation: 'Aerobics', duration: '60 ደቂቃ', calories: 500 },
          { focus: 'የኬትልቤል ስብ ማውደሚያ', classRecommendation: 'HIIT', duration: '45 ደቂቃ', calories: 600 },
        ],
        4: [
          { focus: 'አጠቃላይ የሰውነት ክብደት መቀነሻ', classRecommendation: 'Weight Loss Programs', duration: '65 ደቂቃ', calories: 630 },
          { focus: 'ፈጣን ሩጫና ዝላይ (Plyometrics)', classRecommendation: 'HIIT', duration: '45 ደቂቃ', calories: 610 },
          { focus: 'የዳንስ እንቅስቃሴ ጥምረት', classRecommendation: 'Aerobics', duration: '60 ደቂቃ', calories: 520 },
          { focus: 'ሆድ መቀነሻ ማራቶን', classRecommendation: 'Cardio', duration: '50 ደቂቃ', calories: 550 },
        ],
        5: [
          { focus: 'የሰውነት ቅጥነት ጥንካሬ', classRecommendation: 'Weight Loss Programs', duration: '60 ደቂቃ', calories: 640 },
          { focus: 'ፈጣን ሂት (HIIT) ስልጠና', classRecommendation: 'HIIT', duration: '45 ደቂቃ', calories: 620 },
          { focus: 'ታይቦ የኪክ ቦክስ ስብስብ', classRecommendation: 'TaeBo', duration: '60 ደቂቃ', calories: 590 },
          { focus: 'ካሎሪ አውዳሚ የልብ ምት ስፖርት', classRecommendation: 'Cardio', duration: '55 ደቂቃ', calories: 570 },
          { focus: 'ኤሮቢክስ ከፍተኛ ደረጃ', classRecommendation: 'Aerobics', duration: '60 ደቂቃ', calories: 510 },
        ],
      },
      combat: {
        3: [
          { focus: 'የተዋጊ ፍልሚያ ልምምድ (TaeBo)', classRecommendation: 'TaeBo', duration: '60 ደቂቃ', calories: 610 },
          { focus: 'ፈጣን ፍንዳታ ካርዲዮ', classRecommendation: 'HIIT', duration: '45 ደቂቃ', calories: 580 },
          { focus: 'የትከሻና ጉልበት ጥንካሬ', classRecommendation: 'Strength Training', duration: '55 ደቂቃ', calories: 430 },
        ],
        4: [
          { focus: 'ኪክ-ቦክስና የእግር እንቅስቃሴ', classRecommendation: 'TaeBo', duration: '60 ደቂቃ', calories: 620 },
          { focus: 'ከፍተኛ ዝላይና ፈጣን ሂት', classRecommendation: 'HIIT', duration: '50 ደቂቃ', calories: 640 },
          { focus: 'ተዋጊ ሆድና ወገብ ቅርጽ', classRecommendation: 'Cardio', duration: '50 ደቂቃ', calories: 520 },
          { focus: 'ከባድ ክብደት ማንሳት', classRecommendation: 'Strength Training', duration: '60 ደቂቃ', calories: 480 },
        ],
        5: [
          { focus: 'ሙአይ ታይ (Muay Thai) ኃይል', classRecommendation: 'TaeBo', duration: '65 ደቂቃ', calories: 660 },
          { focus: 'ፈጣን ካርዲዮ ፍንዳታ', classRecommendation: 'Cardio', duration: '50 ደቂቃ', calories: 570 },
          { focus: 'የፍልሚያ ጽናት ማጎልበቻ', classRecommendation: 'HIIT', duration: '45 ደቂቃ', calories: 650 },
          { focus: 'የላይኛ አካል ፍጹም ጥንካሬ', classRecommendation: 'Strength Training', duration: '60 ደቂቃ', calories: 500 },
          { focus: 'ቦክስና ኤሮቢክስ ጥምረት', classRecommendation: 'Aerobics', duration: '60 ደቂቃ', calories: 480 },
        ],
      },
    } : {
      muscle: {
        3: [
          { focus: 'Heavy Upper Push Hypertrophy', classRecommendation: 'Strength Training', duration: '60 Mins', calories: 450 },
          { focus: 'High-Volume Pull Development', classRecommendation: 'Strength Training', duration: '60 Mins', calories: 400 },
          { focus: 'Brutal Quad & Posterior Loading', classRecommendation: 'Strength Training', duration: '75 Mins', calories: 550 },
        ],
        4: [
          { focus: 'Upper Body Power Loading', classRecommendation: 'Strength Training', duration: '60 Mins', calories: 480 },
          { focus: 'Lower Body Quad & Core Crush', classRecommendation: 'Strength Training', duration: '60 Mins', calories: 500 },
          { focus: 'Shoulder & Arm Hypertrophy', classRecommendation: 'Strength Training', duration: '50 Mins', calories: 380 },
          { focus: 'Active Combat Cardio Intervals', classRecommendation: 'HIIT', duration: '45 Mins', calories: 600 },
        ],
        5: [
          { focus: 'Anterior Chest & Tricep Power', classRecommendation: 'Strength Training', duration: '60 Mins', calories: 460 },
          { focus: 'Posterior Lats & Bicep Hypertrophy', classRecommendation: 'Strength Training', duration: '60 Mins', calories: 430 },
          { focus: 'Barbell Leg Dominance Day', classRecommendation: 'Strength Training', duration: '75 Mins', calories: 600 },
          { focus: 'Explosive Shoulder Conditioning', classRecommendation: 'Strength Training', duration: '50 Mins', calories: 400 },
          { focus: 'Full-Body High-Impact Blitz', classRecommendation: 'HIIT', duration: '45 Mins', calories: 620 },
        ],
      },
      stamina: {
        3: [
          { focus: 'VO2 Max Threshold Run & Climb', classRecommendation: 'Cardio', duration: '50 Mins', calories: 550 },
          { focus: 'Full-Body Agility Circuits', classRecommendation: 'HIIT', duration: '45 Mins', calories: 620 },
          { focus: 'Aerobic Rhythm Fat Burn', classRecommendation: 'Aerobics', duration: '60 Mins', calories: 480 },
        ],
        4: [
          { focus: 'Lactic Threshold Cardio Intervals', classRecommendation: 'Cardio', duration: '45 Mins', calories: 520 },
          { focus: 'Metabolic Power Circuits', classRecommendation: 'HIIT', duration: '50 Mins', calories: 650 },
          { focus: 'Martial Cardio Combat Drill', classRecommendation: 'TaeBo', duration: '60 Mins', calories: 580 },
          { focus: 'Core Stamina Steady State', classRecommendation: 'Aerobics', duration: '60 Mins', calories: 450 },
        ],
        5: [
          { focus: 'Anaerobic Fast-Twitch Sprint Loop', classRecommendation: 'Cardio', duration: '40 Mins', calories: 500 },
          { focus: 'Insanity Power Metabolic Burning', classRecommendation: 'HIIT', duration: '50 Mins', calories: 700 },
          { focus: 'Extreme Kick Boxing Agility', classRecommendation: 'TaeBo', duration: '60 Mins', calories: 620 },
          { focus: 'Full Body Sculpt & Calorie Shred', classRecommendation: 'Weight Loss Programs', duration: '60 Mins', calories: 550 },
          { focus: 'Steady Active Recovery Cardio', classRecommendation: 'Aerobics', duration: '50 Mins', calories: 420 },
        ],
      },
      weight: {
        3: [
          { focus: 'High-Deficit Metabolic Conditioning', classRecommendation: 'Weight Loss Programs', duration: '60 Mins', calories: 580 },
          { focus: 'Rhythm Cardio & Kinetic Sculpt', classRecommendation: 'Aerobics', duration: '60 Mins', calories: 500 },
          { focus: 'Fat Oxidation Kettlebell HIIT', classRecommendation: 'HIIT', duration: '45 Mins', calories: 600 },
        ],
        4: [
          { focus: 'Full Body Metabolic Thermogenesis', classRecommendation: 'Weight Loss Programs', duration: '65 Mins', calories: 630 },
          { focus: 'Agility Speed & Plyometric Blitz', classRecommendation: 'HIIT', duration: '45 Mins', calories: 610 },
          { focus: 'Rhythm Dance Strength Combo', classRecommendation: 'Aerobics', duration: '60 Mins', calories: 520 },
          { focus: 'Core Sculpting & Sweat Marathon', classRecommendation: 'Cardio', duration: '50 Mins', calories: 550 },
        ],
        5: [
          { focus: 'Thermogenic Metabolic Strength', classRecommendation: 'Weight Loss Programs', duration: '60 Mins', calories: 640 },
          { focus: 'Fast-Paced HIIT Agility Burn', classRecommendation: 'HIIT', duration: '45 Mins', calories: 620 },
          { focus: 'Choreographed Kick Core Cardio', classRecommendation: 'TaeBo', duration: '60 Mins', calories: 590 },
          { focus: 'Calorie Shredder Steady Cardio', classRecommendation: 'Cardio', duration: '55 Mins', calories: 570 },
          { focus: 'High-energy Aerobic Conditioning', classRecommendation: 'Aerobics', duration: '60 Mins', calories: 510 },
        ],
      },
      combat: {
        3: [
          { focus: 'Fighter Reflexes & Heavy Kick Drills', classRecommendation: 'TaeBo', duration: '60 Mins', calories: 610 },
          { focus: 'Anaerobic Explosive Speed Splits', classRecommendation: 'HIIT', duration: '45 Mins', calories: 580 },
          { focus: 'Power Core & Shoulder Endurance', classRecommendation: 'Strength Training', duration: '55 Mins', calories: 430 },
        ],
        4: [
          { focus: 'Martial Kickboxing Footwork & Stamina', classRecommendation: 'TaeBo', duration: '60 Mins', calories: 620 },
          { focus: 'High-Intensity Athletic Plyometrics', classRecommendation: 'HIIT', duration: '50 Mins', calories: 640 },
          { focus: 'Fighter Core Conditioning & Abs', classRecommendation: 'Cardio', duration: '50 Mins', calories: 520 },
          { focus: 'Explosive Lifting Muscle Strength', classRecommendation: 'Strength Training', duration: '60 Mins', calories: 480 },
        ],
        5: [
          { focus: 'Muay Thai Agility & Combo Power', classRecommendation: 'TaeBo', duration: '65 Mins', calories: 660 },
          { focus: 'Vicious Interval Stamina Intervals', classRecommendation: 'Cardio', duration: '50 Mins', calories: 570 },
          { focus: 'Fighter Metabolic Endurance Blast', classRecommendation: 'HIIT', duration: '45 Mins', calories: 650 },
          { focus: 'Absolute Upper Body Explosiveness', classRecommendation: 'Strength Training', duration: '60 Mins', calories: 500 },
          { focus: 'Kinetic Boxing Footwork & Aerobics', classRecommendation: 'Aerobics', duration: '60 Mins', calories: 480 },
        ],
      },
    };

    const multiplier = level === 'beginner' ? 0.8 : level === 'elite' ? 1.25 : 1.0;
    
    // Choose dynamic days block
    const daysEN = frequency === 3 ? ['MON', 'WED', 'FRI'] : frequency === 4 ? ['MON', 'TUE', 'THU', 'FRI'] : ['MON', 'TUE', 'WED', 'THU', 'FRI'];
    const daysAM = frequency === 3 ? ['ሰኞ', 'ረቡዕ', 'አርብ'] : frequency === 4 ? ['ሰኞ', 'ማክሰኞ', 'ሐሙስ', 'አርብ'] : ['ሰኞ', 'ማክሰኞ', 'ረቡዕ', 'ሐሙስ', 'አርብ'];
    const days = language === 'am' ? daysAM : daysEN;

    const chosenBase = baseRoutines[goal][frequency];
    const computed: RoutineDay[] = chosenBase.map((item, idx) => ({
      day: days[idx],
      focus: item.focus,
      classRecommendation: item.classRecommendation,
      duration: item.duration,
      calories: Math.round(item.calories * multiplier),
    }));

    setRoutine(computed);
    setIsGenerated(true);
  };

  // Run initial build and update dynamically whenever parameters change for instant reactivity!
  useEffect(() => {
    buildRoutine();
  }, [goal, level, frequency, language]);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const timestamp = new Date().toLocaleDateString();
    const divider = "==================================================\n";
    const subDivider = "--------------------------------------------------\n";
    
    let docContent = "";
    docContent += divider;
    docContent += language === 'am' 
      ? "          ሻምፒዮን ጂም እና ፊትነስ - አዲስ አበባ           \n" 
      : "          CHAMPION GYM & FITNESS - ADDIS ABABA    \n";
    docContent += language === 'am'
      ? "          የልዩ ስልጠና ፕሮግራም ሰሌዳ እና መመሪያ           \n"
      : "          ELITE WORKOUT ROUTINE PROTOCOL          \n";
    docContent += divider;
    docContent += `${language === 'am' ? 'የተዘጋጀበት ቀን' : 'Generated'}: ${timestamp}\n`;
    docContent += `${language === 'am' ? 'የአካል ብቃት ደረጃ' : 'Profile'}: ${language === 'am' ? (level === 'beginner' ? 'ጀማሪ' : level === 'elite' ? 'ሻምፒዮን' : 'መካከለኛ') : level.toUpperCase()} \n`;
    docContent += `${language === 'am' ? 'የስልጠናው ግብ' : 'Objective'}: ${goalOptions[goal].title.toUpperCase()}\n`;
    docContent += `${language === 'am' ? 'ዋና ትኩረት' : 'Weekly Focus'}: ${goalOptions[goal].description}\n`;
    docContent += `${language === 'am' ? 'በሳምንት የልምምድ ቀናት ልክ' : 'Frequency'}: ${frequency}\n`;
    docContent += divider + "\n";
    
    routine.forEach((day, idx) => {
      docContent += `[${language === 'am' ? 'ቀን' : 'DAY'} ${idx + 1}] - ${day.day}\n`;
      docContent += `★ ${language === 'am' ? 'ዒላማ ትኩረት' : 'TARGET FOCUS'}: ${day.focus}\n`;
      docContent += `★ ${language === 'am' ? 'ለልምምዱ የተመረጠ' : 'CLASS REC'}:   ${day.classRecommendation}\n`;
      docContent += `★ ${language === 'am' ? 'ቆይታ' : 'DURATION'}:    ${day.duration}\n`;
      docContent += `★ ${language === 'am' ? 'ግምታዊ የካሎሪ ፍጆታ' : 'EST. METABOLIC BURN'}: ~${day.calories} Kcal\n`;
      docContent += subDivider + "\n";
    });
    
    docContent += divider;
    docContent += language === 'am' ? "አድራሻ፡ መገናኛ ሾላ (ሱመያ መስጂድ አጠገብ)፣ አዲስ አበባ\n" : "Address: Megenagna Shola (near Sumeya Mosque), Addis Ababa\n";
    docContent += "Hotlines: 0929485202 / 0953556666\n";
    docContent += divider;
    
    const blob = new Blob([docContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `champion_athletic_blueprint_${goal}_${level}.txt`;
    document.body.appendChild(link);
    link.click();
    
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div id="coach" className="w-full relative py-16 md:py-24 overflow-hidden border-t border-white/5 bg-[#0a0a0a] px-4">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1 bg-brand-primary/10 border border-brand-primary/30 text-brand-primary px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase">
            <Sparkles size={12} className="text-brand-primary" /> {t.coach.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter text-white mt-3 uppercase italic leading-none">
            {t.coach.title1} <span className="stroke-text block sm:inline">{t.coach.title2}</span>
          </h2>
          <p className="text-sm md:text-base text-zinc-400 mt-4 max-w-xl mx-auto font-sans leading-relaxed">
            {t.coach.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Box */}
          <div className="lg:col-span-5 bg-zinc-900/60 p-6 md:p-8 rounded-2xl border border-white/5 backdrop-blur-md relative overflow-hidden">
            <h3 className="text-lg md:text-xl font-display font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
              <Compass className="text-brand-primary" size={20} /> {language === 'am' ? 'የልምምድ ገደቦች' : 'Personal Parameters'}
            </h3>

            <div className="space-y-6">
              {/* Goal Select */}
              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">
                  {language === 'am' ? '1. የስልጠና ግብ መረጣ፡' : '1. Choose Your Ultimate Objective:'}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {(Object.keys(goalOptions) as (typeof goal)[]).map((key) => {
                    const option = goalOptions[key];
                    const active = goal === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => { setGoal(key); }}
                        className={`p-3 text-left rounded-xl transition-all border flex flex-col justify-between h-28 cursor-pointer ${
                          active
                            ? 'bg-zinc-800 border-brand-primary shadow-[0_0_15px_rgba(255,49,49,0.15)] text-white'
                            : 'bg-zinc-950/75 border-white/5 text-zinc-400 hover:border-white/10'
                        }`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center">
                          {option.icon}
                        </div>
                        <div>
                          <p className="text-xs font-semibold tracking-wide uppercase">{option.title}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Fitness level */}
              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2.5">
                  {language === 'am' ? '2. አጠቃላይ የአካል ብቃት ልምድዎ፡' : '2. Current Fitness Capacity:'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['beginner', 'intermediate', 'elite'] as const).map((lvl) => {
                    const active = level === lvl;
                    return (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => { setLevel(lvl); }}
                        className={`py-2 px-3 text-center rounded-lg font-mono text-xs uppercase tracking-wider transition-all border cursor-pointer ${
                          active
                            ? 'bg-gradient-to-r from-brand-primary to-brand-accent border-brand-primary text-white font-bold'
                            : 'bg-zinc-950/75 border-white/5 text-zinc-400 hover:border-white/10'
                        }`}
                      >
                        {lvl === 'beginner' ? (language === 'am' ? 'ጀማሪ' : 'Beginner') : lvl === 'elite' ? (language === 'am' ? 'ሻምፒዮን' : 'Elite') : (language === 'am' ? 'መካከለኛ' : 'Intermediate')}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Frequency selection */}
              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2.5">
                  {language === 'am' ? '3. በሳምንት የሚመርጡት ቀኖች፡' : '3. Total Weekly Volume:'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {([3, 4, 5] as const).map((freq) => {
                    const active = frequency === freq;
                    return (
                      <button
                        key={freq}
                        type="button"
                        onClick={() => { setFrequency(freq); }}
                        className={`py-2 px-3 text-center rounded-lg font-mono text-xs transition-all border cursor-pointer ${
                          active
                            ? 'bg-zinc-800 border-brand-primary text-brand-primary font-bold'
                            : 'bg-zinc-950/75 border-white/5 text-zinc-400 hover:border-white/10'
                        }`}
                      >
                        {freq} {language === 'am' ? 'ቀናት' : 'Days'}
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  buildRoutine();
                  resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }}
                className="w-full mt-4 bg-white text-black hover:bg-brand-primary hover:text-white hover:shadow-[0_0_20px_rgba(255,49,49,0.3)] font-mono text-xs uppercase font-bold py-3.5 px-6 rounded-xl tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{language === 'am' ? 'ሰሌዳውን አዘጋጅ ⚡' : 'GENERATE FORMULA'}</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Routine Output Card */}
          <div ref={resultsRef} className="lg:col-span-7 h-full">
            <AnimatePresence mode="wait">
              {!isGenerated ? (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-[400px] border border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center text-center p-6 bg-zinc-900/10 backdrop-blur-sm"
                >
                  <div className="p-4 rounded-full bg-zinc-900 border border-white/5 text-zinc-500 mb-4">
                    <HeartHandshake size={32} />
                  </div>
                  <h4 className="text-white font-display font-bold uppercase tracking-wider text-base mb-1">
                    {language === 'am' ? 'ዝግጁ ነው፤ አዝራሩን ይጫኑ' : 'Your Personalized Elite Sheet is Ready to Compile'}
                  </h4>
                  <p className="text-xs text-zinc-500 max-w-sm font-sans">
                    {language === 'am' 
                      ? 'ግብዎንና ቀናትን መርጠው በስተግራ በኩል ያለውን ሰማያዊ «ሰሌዳውን አዘጋጅ» የሚለውን ይጫኑ።' 
                      : 'Configure your constraints on the left and click "Generate Formula" to map out your metabolic blueprint.'}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-black border border-brand-primary/20 rounded-2xl shadow-[0_0_35px_rgba(255,49,49,0.08)] overflow-hidden"
                >
                  {/* Routine Receipt Header */}
                  <div className="bg-gradient-to-r from-zinc-900 to-zinc-950 p-6 border-b border-brand-primary/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <span className="text-[10px] font-mono text-brand-primary font-bold tracking-widest uppercase bg-brand-primary/10 px-2 py-0.5 rounded border border-brand-primary/20">
                        {level === 'beginner' ? (language === 'am' ? 'ጀማሪ' : 'BEGINNER') : level === 'elite' ? (language === 'am' ? 'ሻምፒዮን' : 'ELITE') : (language === 'am' ? 'መካከለኛ' : 'INTERMEDIATE')} {language === 'am' ? 'የስልጠና ካርታ' : 'BLUEPRINT'}
                      </span>
                      <h4 className="text-xl font-display font-black text-white uppercase italic tracking-wide mt-1">
                        {goalOptions[goal].title} {language === 'am' ? 'ዝርዝር መርሐግብር' : 'SCHEDULE'}
                      </h4>
                      <p className="text-xs text-zinc-500 font-sans">{goalOptions[goal].description}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        onClick={handleDownload}
                        className="flex items-center gap-1.5 font-mono text-[10px] uppercase text-white bg-brand-primary hover:bg-brand-accent px-3 py-1.5 rounded-lg transition-all font-bold shadow-[0_0_15px_rgba(255,49,49,0.2)] cursor-pointer"
                      >
                        <FileDown size={12} /> {language === 'am' ? 'ካርታውን አውርድ' : 'Download Blueprint'}
                      </button>

                      <button
                        onClick={handlePrint}
                        className="flex items-center gap-1.5 font-mono text-[10px] uppercase text-zinc-400 hover:text-white border border-white/10 hover:border-brand-primary px-3 py-1.5 rounded-lg transition-all cursor-pointer"
                      >
                        <Printer size={12} /> {language === 'am' ? 'አትም (Print)' : 'Print Protocol'}
                      </button>
                    </div>
                  </div>

                  {/* Daily list */}
                  <div className="divide-y divide-white/5">
                    {routine.map((day, idx) => (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        key={day.day}
                        className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-zinc-900/10 transition-colors"
                      >
                        <div className="flex gap-4 items-center">
                          {/* Day Banner */}
                          <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5 flex flex-col items-center justify-center font-mono text-center">
                            <span className="text-[10px] text-zinc-500 uppercase">{language === 'am' ? 'ቀን' : 'Day'}</span>
                            <span className="text-sm font-black text-brand-primary leading-tight">{day.day}</span>
                          </div>

                          <div>
                            <p className="text-sm text-white font-semibold font-sans">{day.focus}</p>
                            <span className="inline-flex items-center gap-1.5 text-xs text-brand-primary mt-1 font-semibold uppercase font-mono bg-brand-primary/5 px-2 py-0.5 rounded border border-brand-primary/10">
                              <Calendar size={10} /> {language === 'am' ? 'የተመከረ፡' : 'REC Class:'} {day.classRecommendation}
                            </span>
                          </div>
                        </div>

                        {/* Metrics */}
                        <div className="flex items-center gap-4 sm:text-right font-mono self-end sm:self-center">
                          <div className="text-left sm:text-right">
                            <span className="text-[9px] text-zinc-500 uppercase tracking-widest block">{language === 'am' ? 'ቆይታ ሰዓት' : 'Session Time'}</span>
                            <span className="text-xs text-white uppercase flex items-center gap-1 mt-0.5">
                              <Clock size={12} className="text-zinc-500" /> {day.duration}
                            </span>
                          </div>
                          <div className="text-left sm:text-right border-l border-white/10 pl-4">
                            <span className="text-[9px] text-zinc-500 uppercase tracking-widest block">{language === 'am' ? 'የሚቃጠል ካሎሪ' : 'Est. Cal Burn'}</span>
                            <span className="text-xs text-emerald-400 font-bold flex items-center gap-1 mt-0.5">
                              <Flame size={12} className="text-emerald-500" /> {day.calories} kcal
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Routine Summary footer */}
                  <div className="p-6 bg-zinc-950 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono">
                    <span className="text-zinc-500">
                      {language === 'am' ? 'በሳምንት የሚቃጠል ጠቅላላ ካሎሪ፡' : 'Total Weekly Calorie Deficit:'}{' '}
                      <b className="text-emerald-400 text-sm font-black">
                        {routine.reduce((acc, curr) => acc + curr.calories, 0)} kcal
                      </b>
                    </span>
                    <span className="text-zinc-500">
                      {language === 'am' ? 'ስልጠና አዳራሽ፡' : 'Host Gym:'} <b className="text-white">{language === 'am' ? 'ሻምፒዮን መገናኛ ቅርንጫፍ' : 'Champion Addis Ababa Gate'}</b>
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
