import { useState } from 'react';
import { motion } from 'motion/react';
import { PricingPlan } from '../types';
import { Check, Star, Award, Sparkles, AlertCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface PricingProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  const [isYearly, setIsYearly] = useState(false);
  const { language, t } = useLanguage();

  // Prices are specified in ETB (Ethiopian Birr), representing actual localized luxury branding
  const plans: PricingPlan[] = language === 'am' ? [
    {
      id: 'plan-silver',
      name: 'የብር ጂም ፓስ (Silver)',
      priceMonthly: 1500,
      priceYearly: 1200,
      description: 'ብቻቸውን ራሳቸውን ችለው ለሚሰለጥኑ፣ ከፍተኛ ጥራት ባላቸው የብረትና ክብደት መሣሪያዎች የአካል ብቃት ጥንካሬን ማሳደግ ለሚፈልጉ ተስማሚ ምርጫ።',
      features: [
        'የመገናኛ ጂም አዳራሽና ከባድ ክብደቶች ሙሉ አጠቃቀም',
        'አዲስ ዘመናዊ ድምፅ አልባ ደምብሎች',
        'የመቆለፊያ ክፍል፣ አልባሳት መቀያየሪያና ሙቅ ሻወሮች',
        'በሳምንት 3 የልዩ ስልጠና ክፍለ-ጊዜዎች በነጻ መሳተፍ',
        'የፓምፕ ፎቶዎችን ወዲያውኑ ለመለጠፍ ፍጥነት ያለው ዋይፋይ (Wi-Fi)',
      ],
      accentColor: 'border-zinc-800',
    },
    {
      id: 'plan-gold',
      name: 'የወርቅ እጩ ክለብ (Gold Elite)',
      priceMonthly: 2500,
      priceYearly: 2000,
      description: 'የኛ ኮከብ ጥቅል። ያለገደብ የጂም አጠቃቀም፣ ልዩ ስልጠናዎች (ታይቦ፣ ዳንስ፣ ሂት) እና በየወሩ የሰውነት የስብና ጡንቻ መመዘኛ (InBody) ምርመራ።',
      features: [
        'ወደ ክብደት ማንሻው ቅድሚያ የማለፍ መብት (ከመጠበቅ ነጻ)',
        'ያለገደብ ልዩ ስልጠናዎች (ታይቦ፣ ዳንስ፣ HIIT)',
        'የፊንላንድ ሳውና (Sauna) እና የእንፋሎት (Steam) ክፍሎች አጠቃቀም',
        'InBody የሰውነት ስብና ጡንቻ መመዘኛ ምርመራ በየወሩ',
        'ክብደቶችን በስኳት መደርደሪያ ላይ ስላለመተው ነጻ ምክረ ሀሳብ',
        'በየወሩ 1 ለጓደኛዎ የሚሆን የነጻ መግቢያ ፓስ',
        'ለአትሌቶች የሚሰጥ ልዩ የሻምፒዮን መለያ ቁሳቁሶች',
      ],
      isPopular: true,
      accentColor: 'border-brand-primary/50 shadow-[0_0_35px_rgba(255,49,49,0.15)] bg-gradient-to-b from-brand-primary/5 to-black/90',
    },
    {
      id: 'plan-vvip',
      name: 'የሻምፒዮን VVIP ጥቅል',
      priceMonthly: 4000,
      priceYearly: 3200,
      description: 'ምቾትና ከፍተኛ ቅንጦት የታከለበት ልዩ የጂም አገልግሎት። የግል አሰልጣኞች በየእርምጃው እየተከታተሉ ብቃትዎን የሚገነቡበት የክለባችን ቁንጮ።',
      features: [
        'ሁሉም የወርቅ Elite ጥቅሞች + የቪአይፒ ላውንጅ (Lounge) አጠቃቀም',
        'ድምፃቸውን ከፍ አድርገው ቁጥርዎን የሚቆጥሩ የግል አሰልጣኝ ድጋፍ',
        'በሁሉም የታቀዱ የአዲስ አበባ የሻምፒዮን ቅርንጫፎች ያለገደብ መለማመድ',
        'የግል መቆለፊያ ሳጥን፣ ትኩስ ፎጣዎች እና ልዩ ተነሳሽነት ስልጠና',
        'የሳምንት የተመጣጠነ ምግብ እቅድ እና የሰምቡሳ መከታተያ መርሃግብር',
        'InBody የሰውነት ስብና ጡንቻ መመዘኛ ምርመራ በየሳምንቱ',
        'በየቀኑ 1 ሼክ (ፕሮቲን ሼክ ወይም ቅድመ-ልምምድ የድል መጠጥ)',
        'በየወሩ 5 ለጓደኞችዎ የሚሆኑ ነጻ መግቢያ ፓሶች',
      ],
      accentColor: 'border-amber-500/40 shadow-[0_0_25px_rgba(245,158,11,0.15)] bg-gradient-to-b from-amber-500/[0.03] to-black/95',
    },
  ] : [
    {
      id: 'plan-silver',
      name: 'Silver Gym Pass',
      priceMonthly: 1500,
      priceYearly: 1200,
      description: 'Ideal for independent athletes searching for high-end gear access, standard grunting rights, and heavy iron lifting.',
      features: [
        'Access to full Megenagna Gym floor & heavy weights',
        'State-of-the-art dumbbells (un-thrown, hopefully)',
        'Standard locker room & high-pressure showers for crying after leg day',
        '3 Recommended scheduled classes per week to break some real sweat',
        'Free high-speed member Wi-Fi to post your pump selfies immediately',
      ],
      accentColor: 'border-zinc-800',
    },
    {
      id: 'plan-gold',
      name: 'Gold Elite Club',
      priceMonthly: 2500,
      priceYearly: 2000,
      description: 'Our signature Tier. Unlimited access, premium classes, and diagnostic body composition assessments to measure your ego.',
      features: [
        'Priority access to the weight gates (Skip the curl bros)',
        'Unlimited specialized classes (TaeBo, Aerobics, HIIT)',
        'Full Finnish sauna & steam room to evaporate yesterday\'s pizza',
        'Monthly physical composition assessments (InBody)',
        'Free instruction on why curling in the squat rack is bad for your karma',
        '1 Complimentary guest pass per month (Bring a victim to train)',
        'Exclusive Champion athlete starter pack',
      ],
      isPopular: true,
      accentColor: 'border-brand-primary/50 shadow-[0_0_35px_rgba(255,49,49,0.15)] bg-gradient-to-b from-brand-primary/5 to-black/90',
    },
    {
      id: 'plan-vvip',
      name: 'VVIP Champion Club',
      priceMonthly: 4000,
      priceYearly: 3200,
      description: 'The absolute summit of athletic luxury where personal trainers smile at you at least twice a day and guide your soul.',
      features: [
        'All Gold Elite features + exclusive executive level lounge access',
        'Dedicated professional training consultant to count your reps out loud',
        'Unlimited access to all planned luxury Addis branches',
        'Private locker, fresh towels, & premium motivational whispering',
        'Custom weekly split nutrition planning & Sambusa tracking diagnostics',
        'InBody composition audit every single week to count new muscle cells',
        'Free daily pre-workout or cold recovery protein shake (Tastes like victory)',
        '5 Guest passes per month (Convert your lazy friends into beasts)',
      ],
      accentColor: 'border-amber-500/40 shadow-[0_0_25px_rgba(245,158,11,0.15)] bg-gradient-to-b from-amber-500/[0.03] to-black/95',
    },
  ];

  return (
    <section id="pricing" className="relative py-20 md:py-32 bg-[#0a0a0a] border-t border-white/5 px-4 overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-80 h-80 rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-[5%] w-96 h-96 rounded-full bg-orange-600/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header content */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider bg-brand-primary/10 text-brand-primary border border-brand-primary/20 uppercase">
            <Sparkles size={12} /> {language === 'am' ? 'በጡንቻ መዋዕለ ንዋይ ይፍጠሩ' : 'INVEST IN HYPERTROPHY'}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter text-white mt-3 uppercase italic leading-none">
            {t.pricing.title1} <span className="stroke-text block sm:inline">{t.pricing.title2}</span>
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto mt-4 font-sans leading-relaxed">
            {t.pricing.subtitle}
          </p>

          {/* Billing Switcher Toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-xs font-mono uppercase tracking-widest ${!isYearly ? 'text-white font-bold' : 'text-zinc-500'}`}>
              {language === 'am' ? 'የወር ክፍያ' : 'Monthly billing'}
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-12 h-6 bg-zinc-800 rounded-full border border-white/10 transition-colors cursor-pointer"
            >
              <div
                className={`absolute top-0.5 w-[18px] h-[18px] rounded-full transition-all duration-300 ${
                  isYearly ? 'left-6 bg-emerald-400' : 'left-0.5 bg-brand-primary'
                }`}
              />
            </button>
            <span className={`text-xs font-mono uppercase tracking-widest flex items-center gap-1.5 ${isYearly ? 'text-emerald-400 font-bold' : 'text-zinc-500'}`}>
              {language === 'am' ? 'የዓመት ክፍያ' : 'Yearly billing'} <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[9px] px-1.5 py-0.5 rounded font-bold">{language === 'am' ? '20% ቆጥብ' : 'SAVE 20%'}</span>
            </span>
          </div>
        </div>

        {/* Pricing columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-6 mb-20">
          {plans.map((plan) => {
            const price = isYearly ? plan.priceYearly : plan.priceMonthly;
            const totalAnnualSavings = (plan.priceMonthly - plan.priceYearly) * 12;

            return (
              <div
                key={plan.id}
                className={`glass-panel rounded-2xl p-6 md:p-8 flex flex-col justify-between border relative ${plan.accentColor} group hover:border-brand-primary/30 transition-all`}
              >
                {/* Popular Ribbon overlay */}
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-primary to-rose-600 text-white font-mono text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-[0_0_15px_rgba(255,49,49,0.5)] flex items-center gap-1 animate-pulse">
                    <Star size={10} fill="currentColor" /> {language === 'am' ? 'በጣም የተመረጠው ጥቅል' : 'MOST POPULAR CHOICE'}
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <h3 className="text-xl md:text-2xl font-display font-black uppercase italic text-white flex items-center gap-2">
                      {plan.id === 'plan-vvip' && <Award size={18} className="text-amber-500" />}
                      {plan.name}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-2 min-h-[40px] leading-relaxed font-sans">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 flex items-baseline gap-1 bg-zinc-900/40 p-4 rounded-xl border border-white/5">
                    <span className="text-3xl md:text-5xl font-display font-black text-white tracking-tight">
                      {price}
                    </span>
                    <span className="text-xs text-zinc-500 font-mono font-semibold uppercase">
                      {language === 'am' ? 'ብር / በወር' : 'ETB / MONTH'}
                    </span>
                  </div>

                  {/* Savings display */}
                  {isYearly && (
                    <div className="mb-5 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                      <span>✓ {language === 'am' ? `በዓመት በድምሩ ${totalAnnualSavings} ብር ይቆጥባሉ` : `Saves you ${totalAnnualSavings} ETB annually compared to monthly.`}</span>
                    </div>
                  )}

                  {/* Features list */}
                  <div className="space-y-3.5 border-t border-white/5 pt-6">
                    <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-semibold mb-1">
                      {language === 'am' ? 'የጥቅሉ ጥቅሞችና ልዩ ዕድሎች፡' : 'Membership Privileges:'}
                    </p>
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs text-zinc-300 font-sans">
                        <Check size={14} className="text-brand-primary mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Select and Booking Trigger */}
                <div className="mt-8">
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-4 px-6 rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition-all cursor-pointer flex items-center justify-center gap-1 ${
                      plan.isPopular
                        ? 'bg-brand-primary hover:bg-white text-white hover:text-black hover:shadow-[0_0_20px_rgba(255,49,49,0.4)]'
                        : 'bg-zinc-900 hover:bg-zinc-850 text-white border border-white/10 hover:border-brand-primary'
                    }`}
                  >
                    <span>{language === 'am' ? `${plan.name.toUpperCase()} አሁን ይቀላቀሉ` : `JOIN ${plan.name.toUpperCase()} NOW`}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature comparison guarantee matrix banner */}
        <div className="glass-panel p-5 rounded-2xl max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-4 border border-zinc-800 bg-zinc-900/30">
          <div className="h-10 w-10 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary shrink-0">
            <AlertCircle size={18} />
          </div>
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              {language === 'am' ? '100% ግልጽ የሆነ የውል ስምምነት ፖሊሲ' : '100% TRANSPARENT LOCK-IN POLICY'}
            </h4>
            <p className="text-[11px] text-zinc-400 leading-relaxed mt-0.5 font-sans">
              {language === 'am' 
                ? 'የኢትዮጵያ ብር የክፍያ ደረጃዎች ምንም ዓይነት ግዴታ ያለበት ድብቅ ውል የላቸውም። በማንኛውም ጊዜ የመገናኛ ጂም ሪሴፕሽን በመምጣት ሰሌዳዎን ማቀዝቀዝ፣ ማስተላለፍ ወይም ማቋረጥ ይችላሉ።' 
                : 'Ethiopian Birr monthly tiers do not carry recurring automatic contract renewals. Members hold full sovereignty can freeze, transfer, or terminate memberships at the reception anytime.'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
