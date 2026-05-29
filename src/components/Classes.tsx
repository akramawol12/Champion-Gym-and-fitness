import { useState } from 'react';
import { motion } from 'motion/react';
import { FitnessClass } from '../types';
import { Swords, Dumbbell, Flame, HeartPulse, Activity, TrendingDown, Info, Calculator, Trophy } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface ClassesProps {
  onSelectClass: (cls: FitnessClass) => void;
}

export default function Classes({ onSelectClass }: ClassesProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { language, t } = useLanguage();

  // Calorie Calculator state
  const [weightKg, setWeightKg] = useState<number>(75);
  const [durationMins, setDurationMins] = useState<number>(60);
  const [selectedClassId, setSelectedClassId] = useState<string>('class-hiit');
  const [calculatedBurn, setCalculatedBurn] = useState<number | null>(null);

  const classes: FitnessClass[] = language === 'am' ? [
    {
      id: 'class-taebo',
      name: 'ታይቦ ካምባት fit (TaeBo)',
      category: 'combat',
      duration: '60 ደቂቃ ክፍለ-ጊዜ',
      intensity: 'Intermediate',
      caloriesBurned: 580,
      description: 'ከከባድ ሙዚቃዎች ጋር የተቀናጀ የማርሻል አርት እንቅስቃሴ። ካሎሪ ለማቃጠል፣ ትከሻዎን ለማጠንከር እና ውጥረትን በእርግጫ ለመደርመስ ፍፁም ነው።',
      icon: 'Swords',
      bgGradient: 'from-purple-900/40 to-black',
    },
    {
      id: 'class-aerobics',
      name: 'ዳንስ ኤሮቢክስ (Group Aerobics)',
      category: 'aerobics',
      duration: '50 ደቂቃ ክፍለ-ጊዜ',
      intensity: 'All Levels',
      caloriesBurned: 450,
      description: 'ደስ የሚሉ የዳንስ ጭፈራዎች። ላብ ማፍሰስ ግዴታ የሆነበት እና ሙዚቃውን እየተከተሉ በደስታ የሚለማመዱበት ድንቅ የቡድን ስብስብ።',
      icon: 'Activity',
      bgGradient: 'from-pink-950/20 to-black',
    },
    {
      id: 'class-strength',
      name: 'የከባድ ማጎልበቻ ስልጠና (Elite Strength)',
      category: 'strength',
      duration: '60 ደቂቃ ክፍለ-ጊዜ',
      intensity: 'Elite',
      caloriesBurned: 500,
      description: 'እዚህ ጂም ውስጥ ስበት እንደ ቀልድ ነው። ክብደቶችን ወደላይ እና ወደታች በማንቀሳቀስ ጡንቻዎን በማሳደግ መስታወትዎን በኩራት እንዲመለከቱ ያደርግዎታል!',
      icon: 'Dumbbell',
      bgGradient: 'from-orange-950/35 to-black',
    },
    {
      id: 'class-hiit',
      name: 'ተቀጣጣይ ሂት (HIIT)',
      category: 'cardio',
      duration: '45 ደቂቃ ክፍለ-ጊዜ',
      intensity: 'Elite',
      caloriesBurned: 650,
      description: 'ፈጣን እና ለአፍታ እረፍት የማይሰጥ የካርዲዮ ፍንዳታ። ድምፅን እንዲያዩ፣ ቀለማትን እንዲሰሙ እና እንደ ላብ መጥበሻ እንዲንተከተኩ የሚያደርግ ፈታኝ እቅድ!',
      icon: 'Flame',
      bgGradient: 'from-red-950/40 to-black',
    },
    {
      id: 'class-cardio',
      name: 'የልብ ምት ካርዲዮ (Heart Cardio)',
      category: 'cardio',
      duration: '45 ደቂቃ ክፍለ-ጊዜ',
      intensity: 'All Levels',
      caloriesBurned: 420,
      description: 'ከጭንቀት ሮጦ ለማምለጥ የሚረዳ ፍፁም እንቅስቃሴ። የልብ ምትዎን ይቆጣጠሩ፣ የጂሙን ትላልቅ ስክሪኖች ይመልከቱ፣ እና ከመኝታ ሰነፍ ክበብ ይውጡ።',
      icon: 'HeartPulse',
      bgGradient: 'from-teal-950/20 to-black',
    },
    {
      id: 'class-weightloss',
      name: 'ውፍረት መቀነሻ (Weight Reducer)',
      category: 'weight-loss',
      duration: '60 ደቂቃ ክፍለ-ጊዜ',
      intensity: 'All Levels',
      caloriesBurned: 550,
      description: 'ከመገናኛ አደባባይ መነሻውን አድርጎ በከፍተኛ ትራፊክ ሰዓት ቁልቁል እንደሚምዘገዘግ ባጃጅ ፍጥነት ስብን በፍጥነት የሚያቀልጥ ስልጠና። የሰበብ መጨረሻ!',
      icon: 'TrendingDown',
      bgGradient: 'from-zinc-900/60 to-black',
    },
  ] : [
    {
      id: 'class-taebo',
      name: 'TaeBo Combat Fit',
      category: 'combat',
      duration: '60 Min Sessions',
      intensity: 'Intermediate',
      caloriesBurned: 580,
      description: 'The legendary martial arts discipline mixed with wild music. Perfect for burning calories, toning your shoulders, or punching your invisible worries right in the face.',
      icon: 'Swords',
      bgGradient: 'from-purple-900/40 to-black',
    },
    {
      id: 'class-aerobics',
      name: 'Choreographed Aerobics',
      category: 'aerobics',
      duration: '50 Min Sessions',
      intensity: 'All Levels',
      caloriesBurned: 450,
      description: 'Hypnotic dance routines. It is basically a party where sweating is mandatory and pretending you are on beat is highly encouraged.',
      icon: 'Activity',
      bgGradient: 'from-pink-950/20 to-black',
    },
    {
      id: 'class-strength',
      name: 'Elite Strength Training',
      category: 'strength',
      duration: '60 Min Sessions',
      intensity: 'Elite',
      caloriesBurned: 500,
      description: 'Gravity is only a suggestion here. Move heavy metal plates up and down to make your mirrors proud and convince your friends you can lift a small car.',
      icon: 'Dumbbell',
      bgGradient: 'from-orange-950/35 to-black',
    },
    {
      id: 'class-hiit',
      name: 'Thermogenic HIIT',
      category: 'cardio',
      duration: '45 Min Sessions',
      intensity: 'Elite',
      caloriesBurned: 650,
      description: 'Vicious high-speed interval splits. Ideal for making you see sound, hear colors, and sweat like you are explaining a mysterious dent on your dad’s car.',
      icon: 'Flame',
      bgGradient: 'from-red-950/40 to-black',
    },
    {
      id: 'class-cardio',
      name: 'Heart Rate Zone Cardio',
      category: 'cardio',
      duration: '45 Min Sessions',
      intensity: 'All Levels',
      caloriesBurned: 420,
      description: 'The closest legal thing to running away from your actual responsibilities. Control your pulse, watch commercial screens, and stay out of the snooze zone.',
      icon: 'HeartPulse',
      bgGradient: 'from-teal-950/20 to-black',
    },
    {
      id: 'class-weightloss',
      name: 'Power Weight Reducer',
      category: 'weight-loss',
      duration: '60 Min Sessions',
      intensity: 'All Levels',
      caloriesBurned: 550,
      description: 'An aggressive double-strike plan that liquefies fat cells faster than a bajaj zooming down Megenagna hill during peak traffic hour.',
      icon: 'TrendingDown',
      bgGradient: 'from-zinc-900/60 to-black',
    },
  ];

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Swords':
        return <Swords className="text-purple-400 group-hover:scale-110 transition-transform duration-300" size={24} />;
      case 'Dumbbell':
        return <Dumbbell className="text-brand-primary group-hover:scale-110 transition-transform duration-300" size={24} />;
      case 'Flame':
        return <Flame className="text-[#ff3131] group-hover:scale-110 transition-transform duration-300" size={24} />;
      case 'HeartPulse':
        return <HeartPulse className="text-teal-400 group-hover:scale-110 transition-transform duration-300" size={24} />;
      case 'Activity':
        return <Activity className="text-pink-400 group-hover:scale-110 transition-transform duration-300" size={24} />;
      case 'TrendingDown':
        return <TrendingDown className="text-amber-500 group-hover:scale-110 transition-transform duration-300" size={24} />;
      default:
        return <Dumbbell size={24} />;
    }
  };

  const categories = language === 'am' ? [
    { label: 'ሁሉም ስልጠናዎች', value: 'all' },
    { label: 'የጡንቻና ጉልበት', value: 'strength' },
    { label: 'ካርዲዮና ሂት', value: 'cardio' },
    { label: 'ታይቦ (Combat)', value: 'combat' },
    { label: 'ኤሮቢክስ ዳንስ', value: 'aerobics' },
    { label: 'ውፍረት መቀነሻ', value: 'weight-loss' },
  ] : [
    { label: 'All Disciplines', value: 'all' },
    { label: 'Strength & Power', value: 'strength' },
    { label: 'Cardio & HIIT', value: 'cardio' },
    { label: 'Combat (TaeBo)', value: 'combat' },
    { label: 'Aerobics', value: 'aerobics' },
    { label: 'Weight Reducer', value: 'weight-loss' },
  ];

  const filteredClasses = activeCategory === 'all'
    ? classes
    : classes.filter((cls) => cls.category === activeCategory);

  // MET-based exact burn calculation: Burn = MET * 3.5 * weightKg / 200 * durationMins
  const calculateMetBurn = () => {
    const matched = classes.find((c) => c.id === selectedClassId);
    if (!matched) return;

    let MET = 6.0; // base standard sports MET
    if (matched.category === 'combat') MET = 8.5; // TaeBo is intense
    if (matched.category === 'strength') MET = 6.0;
    if (matched.category === 'aerobics') MET = 6.5;
    if (matched.id === 'class-hiit') MET = 10.5; // High intensity
    if (matched.id === 'class-cardio') MET = 7.0;
    if (matched.category === 'weight-loss') MET = 8.0;

    const burn = Math.round((MET * 3.5 * weightKg / 200) * durationMins);
    setCalculatedBurn(burn);
  };

  return (
    <section id="classes" className="relative py-20 md:py-32 bg-[#0a0a0a] border-t border-white/5 px-4">
      {/* Visual Ambient elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand-primary/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header Title */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider bg-brand-primary/10 text-brand-primary border border-brand-primary/20 uppercase">
            <Trophy size={12} /> {t.classes.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter text-white mt-3 uppercase italic leading-none">
            {t.classes.title1} <span className="stroke-text block sm:inline">{t.classes.title2}</span>
          </h2>
          <p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto mt-4 font-sans leading-relaxed">
            {t.classes.subtitle}
          </p>
        </div>

        {/* Dynamic Category Filtering Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-3xl mx-auto">
          {categories.map((cat) => (
            <button
               key={cat.value}
               onClick={() => setActiveCategory(cat.value)}
               className={`px-4 py-2 rounded-xl font-mono text-xs uppercase tracking-wider cursor-pointer border transition-all font-semibold ${
                 activeCategory === cat.value
                   ? 'bg-brand-primary border-brand-primary text-white font-bold shadow-[0_0_15px_rgba(255,49,49,0.25)]'
                   : 'bg-zinc-900/50 border-white/5 text-zinc-400 hover:border-white/10'
               }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Staggered Grid of Modern Animated Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 lg:mb-24">
          {filteredClasses.map((cls) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              key={cls.id}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b ${cls.bgGradient} p-6 md:p-8 flex flex-col justify-between h-[360px] glass-panel transition-all hover:border-brand-primary/40 hover:shadow-[0_0_25px_rgba(255,49,49,0.12)]`}
            >
              <div>
                {/* Icon Circle */}
                <div className="h-12 w-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-6">
                  {renderIcon(cls.icon)}
                </div>

                <h3 className="text-xl md:text-2xl font-display font-black italic uppercase tracking-wider text-white">
                  {cls.name}
                </h3>
                <p className="text-xs text-zinc-400 mt-2 line-clamp-3 leading-relaxed font-sans">
                  {cls.description}
                </p>
              </div>

              <div>
                {/* Specifics */}
                <div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-4 mt-6 text-center font-mono text-[10px]">
                  <div>
                    <span className="block text-zinc-500 uppercase">{language === 'am' ? 'ሰዓት/ቆይታ' : 'Duration'}</span>
                    <span className="block text-white font-semibold mt-0.5 uppercase">{cls.duration}</span>
                  </div>
                  <div>
                    <span className="block text-zinc-500 uppercase">{language === 'am' ? 'ደረጃ' : 'Intensity'}</span>
                    <span className="block text-brand-primary font-bold mt-0.5 uppercase">
                      {cls.intensity === 'Intermediate' ? (language === 'am' ? 'መካከለኛ' : 'Intermediate') : cls.intensity === 'Elite' ? (language === 'am' ? 'ሻምፒዮን' : 'Elite') : (language === 'am' ? 'ለሁሉም' : 'All Levels')}
                    </span>
                  </div>
                  <div>
                    <span className="block text-zinc-500 uppercase">{language === 'am' ? 'ካሎሪ' : 'Est Burn'}</span>
                    <span className="block text-emerald-400 font-bold mt-0.5 uppercase">~{cls.caloriesBurned} {language === 'am' ? 'ካሎ' : 'Kcal'}</span>
                  </div>
                </div>

                {/* Instant Book Class CTA */}
                <button
                  onClick={() => onSelectClass(cls)}
                  className="w-full mt-4 bg-zinc-900 hover:bg-brand-primary hover:text-white text-zinc-300 font-mono text-xs uppercase font-bold py-2.5 rounded-lg border border-white/5 hover:border-brand-primary transition-all cursor-pointer"
                >
                  {t.classes.selectBtn}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MET-Based Calorie Calculator Overlay Box */}
        <div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto backdrop-blur-md relative overflow-hidden">
          {/* Accent border glow */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Context copywriting */}
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-flex items-center gap-1 font-mono text-[10px] text-brand-primary uppercase tracking-widest bg-brand-primary/10 px-2 py-0.5 rounded">
                <Calculator size={10} /> {language === 'am' ? 'የሜታቦሊክ መርማሪ' : 'Metabolic diagnostics'}
              </span>
              <h3 className="text-xl md:text-2xl font-display font-bold uppercase italic text-white leading-tight">
                {language === 'am' ? 'የስፖርት ካሎሪ ማስያ ⚡' : 'DYNAMIC ENERGY BURN ESTIMATOR'}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                {language === 'am' 
                  ? 'የሰውነትዎን ክብደት (Mass) እና እያንዳንዱ ስልጠና የሚፈልገውን ሜታቦሊክ ጥምርታ (MET) በማስላት በስፖርት ሰዓት የሚቃጠለውን ያግኙ።' 
                  : 'Estimate the exact metric energy expenditure of your body taking into account target athlete body mass indices and physical metabolic ratios (MET).'}
              </p>
              <div className="flex gap-2 text-[10px] font-mono text-zinc-500">
                <span>★ Formula: MET × 3.5 × Mass(kg) / 200 × Min</span>
              </div>
            </div>

            {/* Inputs & Output */}
            <div className="lg:col-span-7 bg-zinc-950 p-5 md:p-6 rounded-xl border border-white/5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                
                {/* Weight Input */}
                <div>
                  <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1.5">
                    {language === 'am' ? 'የእርስዎ ክብደት (Kg)' : 'Your Weight (Kg)'}
                  </label>
                  <input
                    type="number"
                    min="40"
                    max="180"
                    value={weightKg}
                    onChange={(e) => { setWeightKg(Number(e.target.value)); setCalculatedBurn(null); }}
                    className="w-full bg-zinc-900 border border-white/10 rounded-lg py-2.5 px-3 text-white text-xs font-mono focus:outline-none focus:border-brand-primary/50"
                  />
                </div>

                {/* Duration Input */}
                <div>
                  <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1.5">
                    {language === 'am' ? 'የስልጠና ቆይታ (ደቂቃ)' : 'Session Length (Min)'}
                  </label>
                  <input
                    type="number"
                    min="10"
                    max="180"
                    value={durationMins}
                    onChange={(e) => { setDurationMins(Number(e.target.value)); setCalculatedBurn(null); }}
                    className="w-full bg-zinc-900 border border-white/10 rounded-lg py-2.5 px-3 text-white text-xs font-mono focus:outline-none focus:border-brand-primary/50"
                  />
                </div>

                {/* Selected Athlete Class */}
                <div>
                  <label className="block text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-1.5">
                    {language === 'am' ? 'ልዩ ስልጠና' : 'Target Program'}
                  </label>
                  <select
                    value={selectedClassId}
                    onChange={(e) => { setSelectedClassId(e.target.value); setCalculatedBurn(null); }}
                    className="w-full bg-zinc-900 border border-white/10 rounded-lg py-2.5 px-3 text-white text-xs font-mono focus:outline-none focus:border-brand-primary/50 appearance-none cursor-pointer"
                  >
                    {classes.map((c) => (
                      <option key={c.id} value={c.id} className="bg-zinc-950">
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Action and Output box */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-white/5">
                <button
                  onClick={calculateMetBurn}
                  className="w-full sm:w-auto bg-brand-primary hover:bg-brand-accent text-white font-mono text-xs uppercase font-bold py-3 px-5 rounded-lg tracking-widest transition-all cursor-pointer"
                >
                  {language === 'am' ? 'ካሎሪውን አስላ ⚡' : 'CALCULATE PROTOCOL'}
                </button>

                {calculatedBurn !== null ? (
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-xs text-zinc-500 font-mono">{language === 'am' ? 'የሚቃጠለው አጠቃላይ ካሎሪ፡' : 'ESTIMATED EXPENDITURE:'}</span>
                    <span className="text-xl font-display font-black text-emerald-400 tracking-wide font-mono animate-pulse">
                      {calculatedBurn} KCAL
                    </span>
                  </motion.div>
                ) : (
                  <span className="text-[10px] text-zinc-500 font-mono italic">
                    {language === 'am' ? 'ለማስላት ቁልፉን ይጫኑ።' : 'Click calculate to compile.'}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
