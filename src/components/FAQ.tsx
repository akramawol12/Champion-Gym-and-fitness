import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQItem } from '../types';
import { ChevronDown, Plus, Minus, HelpCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const { language, t } = useLanguage();

  const faqs: FAQItem[] = language === 'am' ? [
    {
      id: 'faq-1',
      question: 'የሻምፒዮን ጂም የት ነው የሚገኘው? ከባድ ደምብሎችን ለማግኘት ጂፒኤስ (GPS) ያስፈልገኛል?',
      answer: 'መገናኛ ሾላ ገበያ፣ ከሱመያ መስጂድ ጎን በሚገኘው ሰፊ አዳራሽ ውስጥ እንገኛለን። ደማቁን የኒዮን መብራት አርማ አግኝተው በኃይለኛው የስፖርት ሙዚቃ ድምፅ ተከታትለው መምጣት ይችላሉ። መኪናዎ በታማኝ ዘበኛ የሚጠበቅ በመሆኑ ስለ መኪናዎ ሳይጨነቁ በቢሴፕስዎ (biceps) ጡንቻዎች ላይ ብቻ ማተኮር ይችላሉ።',
    },
    {
      id: 'faq-2',
      question: 'በስኳት መደርደሪያው (Squat Rack) ላይ ቀለል ያሉ ክብደቶችን መስራት እችላለሁ? ወይስ በቅጣት የበርፒ (Burpee) እቅስቃሴ ይደረግብኛል?',
      answer: 'በስኳት መደርደሪያው ላይ ሌሎች እንቅስቃሴዎችን መስራት በሻምፒዮን ጂም የፊዚክስ ህግጋት መሰረት ፍጹም ህገ-ወጥ ነው! ጥሰት ፈፃሚዎች በከፍተኛ ጥራት ካሜራዎቻችን የሚቀረጹ ሲሆን ቅጣቱም ወዲያውኑ በ110 ኪሎ አሰልጣኛችን የሚጠበቅ 50 የዘለለ በርፒ እቅስቃሴዎችን ማድረግ ነው። እባክዎ ከተጠቀሙ በኋላ ክብደቱን ወደ ቦታው ይምልሱ!',
    },
    {
      id: 'faq-3',
      question: 'የታይቦ (TaeBo)፣ ኮምባት ፊት እና ኤሮቢክስ ክፍለ ጊዜዎች ተጨማሪ ክፍያ ያስፈልጋቸዋል?',
      answer: 'ምንም ድብቅ ክፍያ የለም! ሁሉም የቡድን ስልጠናዎች—ኤሮቢክስ፣ ታይቦ እና ፈጣን ሂት—100% በወርቅ (Gold) እና በቪቪአይፒ (VVIP) ጥቅሎች ውስጥ የተካተቱ ናቸው። እዚህ ጋር «በእያንዳንዱ እርምጃ መክፈል» ወይም «የላብ ግብር» የሚባል ነገር የለም።',
    },
    {
      id: 'faq-4',
      question: 'እንባ እንደ ላብ ይቆጠራል? ሶፍት (ቲሹ) ካለቀብኝ የአባልነት ጊዜዬን ማቀዝቀዝ እችላለሁ?',
      answer: 'በሳይንሳዊ አገላለጽ እንባ ማለት ስብ ሲቃጠልና ከmuscular system ሲወጣ የሚፈጠር ፈሳሽ ነው! እርግጥ እረፍት ከፈለጉ፣ የወርቅ እና የVVIP አባላት አባልነታቸውን በዓመት እስከ 30 ቀናት በነጻ ማቀዝቀዝ/ማቆም ይችላሉ። በጡንቻ ድንገተኛ የስልክ መስመራችን (0929485202 / 0953556666) ብቻ ይደውሉልን!',
    },
    {
      id: 'faq-5',
      question: 'አሰልጣኞቻችሁ በእርግጥ የተማሩ ናቸው ወይስ በፊልም ላይ የሮኪ ባልቦዋን ተነሳሽነት ብቻ ነው ያዩት?',
      answer: 'እውነተኛ የተረጋገጡ የመስኩ ባለሙያዎች ናቸው! የአዲስ አበባ ምርጥ የስፖርት ሳይንቲስቶችን እና የተመጣጠነ ምግብ አዋቂዎችን ይዘናል። በመሆኑም ልምምድ እየቀነሱ እንደሆነ ወይም እኩለ ሌሊት ላይ በድብቅ የተጠበሰ ሳምቡሳ እየበሉ እንደሆነ በትክክል ያውቃሉ!',
    },
    {
      id: 'faq-6',
      question: 'አእምሮዬ ሙሉ በሙሉ ሳይነቃ በፊት ስፖርት ለመስራት እንድችል ጂሙ በማለዳ ይከፈታል?',
      answer: 'አዎ በፍጹም! በስራ ቀናት ከጠዋቱ 11፡00 (5:00 AM) ሰዓት ጀምሮ እንከፍታለን፣ እስከ ምሽቱ 4፡00 (10:00 PM) ሰዓት ድረስ ክፍት ነን። ቅዳሜ ከጠዋቱ 12፡00 (6:00 AM) እስከ ምሽቱ 2፡00 (8:00 PM) ሲሆን፤ እሁድ ደግሞ ከጠዋቱ 2:00 (8:00 AM) እስከ ከሰዓት 12:00 (6:00 PM) እናገለግላለን። የሪሴፕሽን መስመሮቻችን ጥያቄዎን ለመመለስ በማንኛውም ጊዜ ክፍት ናቸው።',
    },
  ] : [
    {
      id: 'faq-1',
      question: 'Where is Champion Gym located, and will I need a GPS to find the heavy dumbbells?',
      answer: 'We are situated on a massive, highly aerated floor right at Megenagna square Shola gebeya, near Sumeya Mosque (Addis Ababa). Look for the glowing neon logo and follow the sound of wild Phonk beats and motivational grunts. Guarded parking is available so you can worry entirely about your biceps, not your car.',
    },
    {
      id: 'faq-2',
      question: 'Can I curl weights inside the squat rack, or is that punishable by active burpee duty?',
      answer: 'Curling in the squat rack is highly illegal according to the physics laws of Champion Gym. Offenders will be caught on our high-definition cameras and immediate punishment is 50 triple-jump burpees supervised by an 110kg IFBB Pro. Please re-rack your plates, or they will be used as background weights for the next VVIP group class dynamic lift.',
    },
    {
      id: 'faq-3',
      question: 'Are TaeBo, Combat Fit, and Aerobics classes extra, or are they built into my membership?',
      answer: "No secret charges! All group classes—Aerobics, high-kick TaeBo, and thermogenic heart-zone splits—are 100% included in our Gold and VVIP packages. No 'paying per step' or 'sweat tax' here. Just pure high-cadence endorphin generation.",
    },
    {
      id: 'faq-4',
      question: 'Do tears count as perspiration, and can I pause my membership if I run out of tissues?',
      answer: "Scientifically speaking, tears are just the fat fatiguing and leaving the muscular system! If you run out of fuel, of course! Gold and VVIP members have the constitutional privilege to freeze/pause their active memberships for up to 30 days per year. Just call our emergency muscle hotline (0929485202 / 0953556666).",
    },
    {
      id: 'faq-5',
      question: 'Are your coaches actually certified, or did they just watch motivational movie montages?',
      answer: "They are real IFBB Pros! We house Addis Ababa's finest, certified fitness gurus, sport scientists, and nutrition wizards who structure actual customized athletic blueprints. They will know exactly if you are slacking or secretly eating twice-fried sambusas at midnight.",
    },
    {
      id: 'faq-6',
      question: 'Do you open early enough for me to workout before my brain fully boots up?',
      answer: "Oh absolutely. We start pumpin' iron at 5:00 AM sharp on weekdays and close at 10:00 PM. Saturday is 6:00 AM – 8:00 PM, and on Sundays we are live from 8:00 AM – 6:05 PM (EAT). Our premium reception lines are staffed almost 24/7 for late-night weight-lifting queries or existential motivational emergencies.",
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-20 md:py-32 bg-[#0a0a0a] border-t border-white/5 px-4 overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute bottom-1/4 right-[5%] w-80 h-80 rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-[5%] w-96 h-96 rounded-full bg-brand-accent/5 blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-1 bg-brand-primary/10 border border-brand-primary/30 text-brand-primary px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase">
            <HelpCircle size={12} /> {language === 'am' ? 'ጥንካሬና ምላሾች' : 'Resolving Queries'}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter text-white mt-3 uppercase italic leading-none">
            {language === 'am' ? (
              <>
                በብዛት የሚጠየቁ <span className="stroke-text block sm:inline">ጥያቄዎች</span>
              </>
            ) : (
              <>
                FREQUENTLY ASKED <span className="stroke-text block sm:inline">QUESTIONS</span>
              </>
            )}
          </h2>
          <p className="text-sm text-zinc-400 mt-4 font-sans leading-relaxed">
            {language === 'am'
              ? 'ስለ ሻምፒዮን ደንቦች፣ ሰዓታት፣ እና መገናኛ ቅርንጫፍ ግልጽና ሐቀኛ መልሶች'
              : 'Clear, transparent details about rules, schedules, and Addis Ababa HQ.'}
          </p>
        </div>

        {/* Minimalist modern accordion */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-zinc-900/40 border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
              >
                {/* Trigger bar */}
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer transition-colors hover:text-brand-primary"
                >
                  <span className="text-sm md:text-base font-display font-bold text-white tracking-wide pr-4">
                    {faq.question}
                  </span>
                  <div className="h-8 w-8 rounded-lg bg-zinc-950 flex items-center justify-center text-zinc-400 border border-white/5 shrink-0">
                    {isOpen ? <Minus size={14} className="text-brand-primary" /> : <Plus size={14} />}
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-zinc-400 text-xs md:text-sm leading-relaxed border-t border-white/5 font-sans">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
