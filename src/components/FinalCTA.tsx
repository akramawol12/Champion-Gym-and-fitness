import { Award, ChevronRight, Phone, Zap } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export default function FinalCTA({ onOpenBooking }: FinalCTAProps) {
  const { language } = useLanguage();

  return (
    <section className="relative py-24 md:py-36 bg-[#0a0a0a] overflow-hidden border-t border-white/5">
      {/* Immersive radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,49,49,0.1)_0%,transparent_70%)] opacity-80" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-brand-primary/5 blur-[160px] pointer-events-none" />

      {/* Futuristic technical lines */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider bg-brand-primary/15 text-brand-primary border border-brand-primary/25 uppercase">
          <Zap size={11} /> {language === 'am' ? 'ምንም ሰበብ አልቀረም 🏋️' : 'NO EXCUSES LEFT'}
        </span>

        <h2 className="text-4xl sm:text-6xl md:text-8xl font-display font-black tracking-tighter leading-[0.85] text-white uppercase italic">
          {language === 'am' ? (
            <>
              የጤና ጉዞዎ<br />
              <span className="stroke-text block sm:inline uppercase font-black italic">ዛሬውኑ</span> <span className="text-brand-primary">ይጀምራል።</span>
            </>
          ) : (
            <>
              YOUR JOURNEY<br />
              <span className="stroke-text block sm:inline uppercase font-black italic">BEGINS</span> <span className="text-brand-primary">TODAY.</span>
            </>
          )}
        </h2>

        <p className="text-sm md:text-lg text-zinc-400 max-w-2xl mx-auto font-sans leading-relaxed">
          {language === 'am' 
            ? 'ከባድ ክብደቶች ተስተካክለዋል። አሰልጣኞች ተዘጋጅተዋል። የፊንላንድ ሳውናችንም ሃይል አግኝቷል። በአዲስ አበባ መገናኛ የሚገኘውን ቁንጮ ክለባችንን ይቀላቀሉ።'
            : 'The heavy barbells are loaded. The TaeBo coaches are prepped. The premium locker rooms are chilled. Experience Ethiopia’s most elite health ecosystem.'}
        </p>

        {/* Action Button Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto relative group overflow-hidden bg-white text-black hover:bg-brand-primary hover:text-white font-mono text-sm uppercase font-bold tracking-widest py-4.5 px-10 rounded-xl hover:shadow-[0_0_35px_rgba(255,49,49,0.4)] transition-all cursor-pointer flex items-center justify-center gap-1.5"
          >
            <span>{language === 'am' ? 'የነጻ የሙከራ እድል ያግኙ ' : 'CLAIM FREE GUEST ACCESS'}</span>
            <ChevronRight size={16} />
          </button>

          <a
            href="tel:0929485202"
            className="w-full sm:w-auto flex items-center justify-center gap-2 py-4.5 px-8 rounded-xl border border-white/10 hover:border-brand-primary text-white font-mono text-sm uppercase tracking-widest hover:bg-white/5 transition-all font-semibold"
          >
            <Phone size={14} className="text-brand-primary" />
            <span>{language === 'am' ? 'ለሪሴፕሽን በቀጥታ ይደውሉ' : 'TALK TO DESK DIRECT'}</span>
          </a>
        </div>

        {/* Hotlines */}
        <div className="pt-8 border-t border-white/5 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
          <span>{language === 'am' ? 'ሪሴፕሽን' : 'RECEPTION'} 1: <b className="text-white hover:text-brand-primary transition-colors">0929485202</b></span>
          <span>{language === 'am' ? 'ሪሴፕሽን' : 'RECEPTION'} 2: <b className="text-white hover:text-brand-primary transition-colors">0953556666</b></span>
          <span>{language === 'am' ? 'ክለብ ስራ አስኪያጅ' : 'ADMIN HQ'}: <b className="text-white hover:text-brand-primary transition-colors">0911259024</b></span>
        </div>
      </div>
    </section>
  );
}
