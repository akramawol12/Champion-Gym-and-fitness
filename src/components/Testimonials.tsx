import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles, Trophy } from 'lucide-react';
import { Testimonial } from '../types';
import { useLanguage } from '../LanguageContext';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { language, t } = useLanguage();

  const list: Testimonial[] = language === 'am' ? [
    {
      id: 'test-1',
      name: '야ሬድ ከበደ',
      role: 'የተግባር ባለሀብት',
      achievement: '16 ኪሎ ቀነሰ እና የሆድ ስብን አጠፋ 📉',
      comment: 'በመገናኛ ሾላ ቅርንጫፍ የወሰድኳቸው የታይቦ (TaeBo) ስልጠናዎች እና የካርዲዮ ክፍለ-ጊዜዎች ሙሉ በሙሉ ሳንባዬን እና ብቃትዬን ቀይረውታል። እጅግ ተነሳሽነት የሚሰጥ ድባብ ነው ያለው—ደክሞህ ትገባና በከፍተኛ ኃይል ትወጣለህ።',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      rating: 5,
    },
    {
      id: 'test-2',
      name: 'ሰላማዊት ኣለሙ',
      role: 'ጥበብ ነዳፊ እና አትሌት',
      achievement: 'ተቀጣጣይ ዳንስ እና ሆድ ቅርጽ መያዝ 💃',
      comment: 'የሻምፒዮን ጂም ንጽህና፣ የኦክስጂን መጠን እና ዘመናዊ ዲዛይን በኢትዮጵያ ውስጥ ተወዳዳሪ የለውም። ከፍተኛ ብቃት ያላቸው የግል ስልጠና አሰልጣኞች ድጋፍ መስጠታቸው ሁልጊዜ እንድፀና ይረዳኛል።',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      rating: 5,
    },
    {
      id: 'test-3',
      name: 'ናთან ማቆነን',
      role: 'ፕሮፌሽናል እሮጭ',
      achievement: 'የልብ ጽናት V02 Max በ 22% ጨመረ 🏃',
      comment: 'በጣም ምቹ የሆኑ የብረት ክብደት ማንሻዎች እና በሚገርም ሁኔታ ወዳጃዊ የሆኑ የሪሴፕሽን ድጋፎች። ሻምፒዮን ጂም ክብደት ማንሻ ብቻ ሳይሆን የአዕምሮ መረጋጊያ ቅዱስ ሥፍራም ጭምር ነው።',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      rating: 5,
    },
  ] : [
    {
      id: 'test-1',
      name: 'Yared Kebede',
      role: 'Addis Business Mogul',
      achievement: 'Lost 16kg & Dropped Core Fat Percent',
      comment: 'TaeBo classes combined with Elite Cardio loops at Megenagna Shola completely redesigned my active respiratory rates. The atmosphere is intensely motivational—you arrive exhausted but walk away with insane vigor.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      rating: 5,
    },
    {
      id: 'test-2',
      name: 'Selamawit Alemu',
      role: 'Creative Designer & Athlete',
      achievement: 'Sculpted Lean Glutes & Agility Core Strength',
      comment: 'The cleanliness, oxygenation level, and modern design of Champion is unmatched in Ethiopia. Having structured guidance from highly expert personal fitness coaches allows me to stay consistent every week.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
      rating: 5,
    },
    {
      id: 'test-3',
      name: 'Nathaniel Demisse',
      role: 'Professional Runner',
      achievement: 'Enhanced Endurance V02 Max by 22%',
      comment: 'Heavy commercial power racks, pristine metal plates, and incredibly friendly desk support. Champion Gym isn’t just a workspace for physical lifts—it’s a premium mental sanctuary.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      rating: 5,
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % list.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + list.length) % list.length);
  };

  // Implement automatic sliding behavior every 6 seconds
  useEffect(() => {
    const slideTimer = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(slideTimer);
  }, [currentIndex]); // Re-init timer when active index changes to avoid rapid clicks skipping slides too quickly

  const active = list[currentIndex];

  return (
    <section id="testimonials" className="relative py-20 md:py-32 bg-[#0a0a0a] border-t border-white/5 px-4 overflow-hidden">
      {/* Decorative Blur BG */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-primary/5 blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider bg-brand-primary/10 text-brand-primary border border-brand-primary/20 uppercase">
            <Trophy size={12} /> {language === 'am' ? 'የአትሌቶች አስተያየት' : 'Elite Athletic Feedback'}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter text-white mt-3 uppercase italic leading-none">
            {language === 'am' ? (
              <>
                የሻምፒዮኖች <span className="stroke-text block sm:inline">ስኬት</span> <span className="text-brand-primary">እና ለውጥ</span>
              </>
            ) : (
              <>
                CHAMPION <span className="stroke-text block sm:inline">STORIES</span> <span className="text-brand-primary">& SHIFTS</span>
              </>
            )}
          </h2>
          <p className="text-sm text-zinc-400 mt-4 max-w-sm mx-auto font-sans leading-relaxed">
            {language === 'am'
              ? 'አባሎቻችን በስፖርት ያገኙትን አስደናቂ የአካል ብቃት ለውጥ እና ምስክርነት ይመልከቱ።'
              : 'Read transparent reviews written by our active gym members about their physical compositions.'}
          </p>
        </div>

        {/* Carousel Slider with animations */}
        <div className="relative bg-zinc-900/40 border border-white/5 rounded-2xl p-6 md:p-10 backdrop-blur-md shadow-2xl overflow-hidden min-h-[340px] flex flex-col justify-between">
          <div className="absolute top-4 right-6 text-zinc-800 opacity-60">
            <Quote size={100} className="transform rotate-12 scale-y-[-1]" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              {/* Rating stars */}
              <div className="flex gap-1 text-amber-500">
                {[...Array(active.rating)].map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-base md:text-xl font-sans text-zinc-200 tracking-wide font-medium leading-relaxed italic pr-4">
                "{active.comment}"
              </p>

              {/* Author profile */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <div className="h-14 w-14 rounded-full flex items-center justify-center bg-zinc-950 border-2 border-brand-primary text-brand-primary font-mono text-base font-bold shadow-lg tracking-wider italic select-none">
                  {active.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-white font-bold tracking-wide">{active.name}</h4>
                  <p className="text-xs text-brand-primary font-mono uppercase tracking-wider">{active.role}</p>
                  <span className="inline-flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/25 px-2 py-0.5 rounded text-[10px] text-emerald-400 font-mono mt-1 font-bold uppercase">
                    <Sparkles size={10} /> {active.achievement}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls button controls and pagination */}
          <div className="flex justify-between items-center mt-8 pt-4 border-t border-white/5">
            <div className="flex gap-2 text-zinc-500 font-mono text-xs">
              <span className="text-white font-bold">{currentIndex + 1}</span> / {list.length}
            </div>

            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 hover:border-brand-primary text-white hover:text-brand-primary transition-colors cursor-pointer"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 hover:border-brand-primary text-white hover:text-brand-primary transition-colors cursor-pointer"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
