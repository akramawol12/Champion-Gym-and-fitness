import { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Navigation, CheckCircle, Shield, AlertCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Locations() {
  const [isOpenNow, setIsOpenNow] = useState(true);
  const { language } = useLanguage();

  useEffect(() => {
    // Determine dynamic open close status based on Ethiopian / East Africa Time (EAT = UTC + 3)
    const checkOpenStatus = () => {
      const etDate = new Date();
      const hours = etDate.getUTCHours() + 3; // Est EAT
      const currentEATHour = hours >= 24 ? hours - 24 : hours;

      if (currentEATHour >= 5 && currentEATHour < 22) {
        setIsOpenNow(true);
      } else {
        setIsOpenNow(false);
      }
    };
    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const amenitiesAM = [
    'የኦሊምፒክ ክብደት ማንሻ መድረክ 🏋️',
    'ታይቦ (TaeBo) እና ካምባት ፍልሚያ አዳራሽ 🥊',
    'የፊንላንድ ሳውና (Sauna) እና የእንፋሎት (Steam) ክፍሎች 🧖',
    'ዘመናዊ የኬብልና የመቋቋሚያ ማሽኖች 💪',
    'በይነመረብ (ዋይፋይ) የተገናኙ የካርዲዮ መሮጫዎች 🏃',
    'InBody የሰውነት ስብና ጡንቻ መመዘኛ ምርመራ 📊',
  ];

  const amenitiesEN = [
    'Olympic Weight Lifting Platform 🏋️',
    'Choreographed TaeBo Arena 🥊',
    'Finnish Sauna & Cold Plunge Pool 🧖',
    'Aerobic Resistance & Cable Arrays 💪',
    'Elite Cardio Machines (With Internet Link) 🏃',
    'InBody Biomarker Diagnostic Pod 📊',
  ];

  const amenities = language === 'am' ? amenitiesAM : amenitiesEN;

  return (
    <section id="locations" className="relative py-20 md:py-32 bg-[#0a0a0a] border-t border-white/5 px-4 overflow-hidden">
      {/* Glow shapes */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-[5%] w-80 h-80 rounded-full bg-amber-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section title */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider bg-brand-primary/10 text-brand-primary border border-brand-primary/20 uppercase">
            <MapPin size={12} /> {language === 'am' ? 'የአዲስ አበባ ዋና መለያ' : 'Addis Ababa Flagship'}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter text-white mt-3 uppercase italic leading-none">
            {language === 'am' ? (
              <>
                የሻምፒዮን <span className="stroke-text block sm:inline">ቅርንጫፍ</span> <span className="text-brand-primary">እና ዋና መስሪያ ቤት</span>
              </>
            ) : (
              <>
                CHAMPION <span className="stroke-text block sm:inline">LOCATIONS</span> <span className="text-brand-primary">& HQ</span>
              </>
            )}
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto mt-4 font-sans leading-relaxed">
            {language === 'am' 
              ? 'በአዲስ አበባ መገናኛ ዲዛይኑ በአምባ ገፅታ የተሰራ፣ ሰፊና ዘመናዊ አየር ማናፈሻ ያለው ልዩ ስፖርት ማዕከል።'
              : 'Located at the cultural and transit heart of Addis Ababa with spacious, highly ventilated zones and high-end security.'}
          </p>
        </div>

        {/* Console layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Location details card */}
          <div className="lg:col-span-6 bg-zinc-900/40 border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col justify-between glass-panel">
            <div>
              {/* Status Header */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                  {language === 'am' ? 'የአዲስ አበባ ዋና መስሪያ ቤት' : 'ADDIS ABABA HEADQUARTERS'}
                </span>
                
                {isOpenNow ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 animate-pulse">
                    ● {language === 'am' ? 'በአሁኑ ሰዓት ክፍት ነው' : 'CURRENTLY OPEN'}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-red-500/10 text-red-400 border border-red-500/20">
                    ● {language === 'am' ? 'ተዘግቷል' : 'CLOSED'}
                  </span>
                )}
              </div>

              {/* Address details */}
              <h3 className="text-2xl font-display font-black italic uppercase text-white tracking-wide">
                {language === 'am' ? 'መገናኛ ሾላ ቅርንጫፍ' : 'Megenagna Shola Club'}
              </h3>
              <p className="text-xs text-zinc-405 font-mono mt-2 flex items-center gap-1.5">
                <MapPin size={14} className="text-brand-primary shrink-0" /> {language === 'am' ? 'መገናኛ ሾላ ገበያ፣ ከሱመያ መስጂድ ጎን፣ አዲስ አበባ' : 'Megenagna square Shola gebeya, near sumeya mosque'}
              </p>

              {/* Operating hours */}
              <div className="my-6 space-y-3.5 border-y border-white/5 py-4">
                <div className="flex items-center gap-3 text-xs">
                  <Clock size={16} className="text-zinc-500 shrink-0" />
                  <div className="space-y-0.5">
                    <span className="block text-zinc-400 uppercase font-mono text-[10px] tracking-wider">{language === 'am' ? 'የስራ ቀናት፡ ሰኞ - አርብ' : 'Weekdays: Mon - Fri'}</span>
                    <span className="text-white font-semibold font-mono">{language === 'am' ? 'ከጠዋቱ 11:00 – ምሽት 4:00 ' : '5:00 AM – 10:00 PM'} (EAT)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <Clock size={16} className="text-zinc-500 shrink-0" />
                  <div className="space-y-0.5">
                    <span className="block text-zinc-400 uppercase font-mono text-[10px] tracking-wider">{language === 'am' ? 'ቅዳሜ' : 'Saturday'}</span>
                    <span className="text-white font-semibold font-mono">{language === 'am' ? 'ከጠዋቱ 12:00 – ምሽት 2:00 ' : '6:00 AM – 8:00 PM'} (EAT)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <Clock size={16} className="text-zinc-500 shrink-0" />
                  <div className="space-y-0.5">
                    <span className="block text-zinc-400 uppercase font-mono text-[10px] tracking-wider">{language === 'am' ? 'እሁድ' : 'Sunday'}</span>
                    <span className="text-white font-semibold font-mono">{language === 'am' ? 'ከጠዋቱ 2:00 – ከሰዓት 12:00 ' : '8:00 AM – 6:00 PM'} (EAT)</span>
                  </div>
                </div>
              </div>

              {/* Verified Amenity List */}
              <div className="space-y-2 mt-4 text-xs font-mono text-zinc-400">
                <p className="font-semibold uppercase tracking-widest text-[10px] text-zinc-500 mb-2">{language === 'am' ? 'በክለቡ ውስጥ የሚገኙ ነገሮች፡' : 'Club Inclusions:'}</p>
                {amenities.map((item) => (
                  <div key={item} className="flex items-center gap-2 font-sans">
                    <CheckCircle size={12} className="text-brand-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direction Navigation */}
            <div className="mt-8">
              <a
                href="https://maps.app.goo.gl/2QSutjTME9rpwvz67"
                target="_blank"
                rel="noreferrer"
                className="w-full text-center bg-brand-primary hover:bg-white hover:text-black py-4 rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(255,49,49,0.15)] text-white hover:shadow-[0_0_25px_rgba(255,49,49,0.35)]"
              >
                <Navigation size={14} />
                <span>{language === 'am' ? 'በጉግል ካርታ ክፈት' : 'OPEN IN GOOGLE MAPS'}</span>
              </a>
            </div>
          </div>

          {/* Interactive contact card */}
          <div className="lg:col-span-6 bg-zinc-950 border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
            {/* Dark abstract map grid layout */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#e51d1d_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-primary block mb-1">
                {language === 'am' ? 'የቀጥታ ስልክ መስመሮች' : 'INSTANT LINE CONNECTIONS'}
              </span>
              <h3 className="text-xl md:text-2xl font-display font-black text-white uppercase italic">
                {language === 'am' ? 'የሪሴፕሽን እና አስተዳዳሪ ስልክ' : 'CONTACT RECEPTION & MGMT'}
              </h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed font-sans">
                {language === 'am' 
                  ? 'ለአባልነት ምዝገባ፣ የእንግዳ ፓስ ማረጋገጫ ወይም ማንኛውም ጥያቄ በቀጥታ ስልክ ይደውሉ።'
                  : 'Connect directly with our desk for fast bookings, guest pass verification, or queries related to pricing. Call or click below:'}
              </p>

              <div className="mt-6 space-y-4">
                {/* Reception 1 */}
                <a
                  href="tel:0929485202"
                  className="p-4 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-between hover:border-brand-primary/40 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                      <Phone size={16} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider leading-none">{language === 'am' ? 'ሪሴፕሽን ዞን 1' : 'RECEPTION ZONE 1'}</span>
                      <span className="text-sm font-semibold text-white font-mono mt-1 block group-hover:text-brand-primary transition-colors">0929485202</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase group-hover:text-white transition-colors">{language === 'am' ? 'ደውል →' : 'CALL NOW →'}</span>
                </a>

                {/* Reception 2 */}
                <a
                  href="tel:0953556666"
                  className="p-4 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-between hover:border-brand-primary/40 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                      <Phone size={16} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider leading-none">{language === 'am' ? 'ሪሴፕሽን ዞን 2' : 'RECEPTION ZONE 2'}</span>
                      <span className="text-sm font-semibold text-white font-mono mt-1 block group-hover:text-brand-primary transition-colors">0953556666</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase group-hover:text-white transition-colors">{language === 'am' ? 'ደውል →' : 'CALL NOW →'}</span>
                </a>

                {/* Owner Direct line */}
                <a
                  href="tel:0911259024"
                  className="p-4 rounded-xl bg-zinc-900 border border-amber-500/10 flex items-center justify-between hover:border-amber-500/30 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-500">
                      <Shield size={16} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono text-amber-500 font-bold uppercase tracking-wider leading-none">{language === 'am' ? 'ስራ አስኪያጅ በቀጥታ' : 'OWNER DIRECT GATEWAY'}</span>
                      <span className="text-sm font-semibold text-white font-mono mt-1 block group-hover:text-amber-500 transition-colors">0911259024</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase group-hover:text-amber-500 transition-colors">{language === 'am' ? 'አነጋግር →' : 'MANAGEMENT DIRECT →'}</span>
                </a>
              </div>
            </div>

            {/* Quick warning */}
            <div className="mt-8 text-[11px] text-zinc-500 flex items-center gap-2 uppercase tracking-wide font-sans">
              <AlertCircle size={14} className="text-amber-500 shrink-0" />
              <span>{language === 'am' ? 'እባክዎ ከመለማመድዎ በፊት በሪሴፕሽን ላይ የመግቢያ ኮድዎን ያረጋግጡ።' : 'Verify pass on arrival before accessing locker keys.'}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
