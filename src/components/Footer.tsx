import { Dumbbell, Phone, MapPin, Mail, ArrowUp, Star } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Footer() {
  const { language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020202] text-zinc-500 border-t border-white/5 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-[20%] w-72 h-72 rounded-full bg-brand-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-white/5">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-5">
            <a
              href="#home"
              className="flex items-center gap-3.5 group text-white animate-fade-in"
            >
              <div className="w-5 h-5 bg-gradient-to-tr from-[#ff3131] to-[#ff6b6b] rounded-xs rotate-45 group-hover:rotate-180 transition-transform duration-500" />
              <span className="text-xl font-black tracking-tighter uppercase italic">
                {language === 'am' ? 'ሻምፒዮን ' : 'Champion '}<span className="text-brand-primary">{language === 'am' ? 'ጂም' : 'Gym'}</span>
              </span>
            </a>

            <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-sans max-w-sm">
              {language === 'am'
                ? 'ሻምፒዮን ጂም እና ፊትነስ በአዲስ አበባ ውስጥ የሚገኝ እጅግ ዘመናዊና ምቹ የስፖርት ማዕከል ነው። አለምአቀፍ ደረጃቸውን የጠበቁ የክብደት ማንሻ ማሽኖች፣ የፊንላንድ ሳውና፣ እንፋሎት (steam) እንዲሁም የክብደት መቀነሻ ክፍሎች አሉት።'
                : "Champion Gym & Fitness is Ethiopia's absolute elite-tier sports club. Fusing international-standard weight training machines with structured clinical classes, we offer the ultimate physical blueprint."}
            </p>

            {/* Quick rating score badge */}
            <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono tracking-wider bg-zinc-900/50 p-2.5 rounded-lg border border-white/5 w-fit">
              <span className="text-amber-500 font-bold flex gap-0.5 animate-pulse">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} fill="currentColor" />
                ))}
              </span>
              <span>• {language === 'am' ? 'ደረጃ #1 ዘመናዊ ጂም' : 'Ranked #1 Athlete HQ'}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase text-white tracking-widest">
              {language === 'am' ? 'ዋና የክፍል አውታሮች' : 'Core Navigation'}
            </h4>
            <div className="grid grid-cols-1 gap-2.5 text-xs font-semibold font-sans">
              <a href="#home" className="hover:text-white transition-colors">{language === 'am' ? 'የመጀመሪያ ገፅ' : 'Home Landing'}</a>
              <a href="#social-proof" className="hover:text-white transition-colors">{language === 'am' ? 'የአባላት ለውጦች' : 'Member Transformations'}</a>
              <a href="#classes" className="hover:text-white transition-colors">{language === 'am' ? 'ክፍሎች እና ማስሊያ' : 'Classes & Routines'}</a>
              <a href="#pricing" className="hover:text-white transition-colors">{language === 'am' ? 'የጥቅል ዋጋዎች' : 'Membership Pricing'}</a>
              <a href="#locations" className="hover:text-white transition-colors">{language === 'am' ? 'ቅርንጫፍ አድራሻዎች' : 'Addis Ababa Branches'}</a>
              <a href="#testimonials" className="hover:text-white transition-colors">{language === 'am' ? 'የአባላት ምስክርነት' : 'Testimonial Stories'}</a>
              <a href="#faq" className="hover:text-white transition-colors">{language === 'am' ? 'ተደጋጋሚ ጥያቄዎች (FAQ)' : 'FAQ Support'}</a>
            </div>
          </div>

          {/* Column 3: Contact details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase text-white tracking-widest">
              {language === 'am' ? 'የመገናኛ ሾላ ክለብ' : 'Megenagna Shola Hub'}
            </h4>
            <div className="space-y-3.5 text-xs text-zinc-400 font-sans">
              <div className="flex items-start gap-2.5 leading-relaxed">
                <MapPin size={16} className="text-brand-primary shrink-0 mt-0.5" />
                <span>{language === 'am' ? 'መገናኛ ሾላ ገበያ፣ ከሱመያ መስጂድ ጎን፣ አዲስ አበባ' : 'Megenagna square Shola gebeya, near sumeya mosque'}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-brand-primary" />
                <div>
                  <span className="block text-[10px] text-zinc-500 font-mono">{language === 'am' ? 'ሪሴፕሽን (ክፍት መስመር)፡' : 'RECEPTION:'}</span>
                  <a href="tel:0929485202" className="text-white font-mono hover:text-brand-primary font-bold">0929485202 / 0953556666</a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-brand-primary" />
                <div>
                  <span className="block text-[10px] text-zinc-500 font-mono">{language === 'am' ? 'ለአስተዳደር ወይም ቅሬታ፡' : 'MANAGEMENT:'}</span>
                  <a href="tel:0911259024" className="text-white font-mono hover:text-brand-primary font-bold">0911259024 {language === 'am' ? '(ስራ አስኪያጅ በቀጥታ)' : '(Owner Direct)'}</a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright and Scroll top */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-[11px] font-mono tracking-wider uppercase text-zinc-600">
          <div>
            <span>© {currentYear} {language === 'am' ? 'የሻምፒዮን ጂም እና ፊትነስ መብቱ በህግ የተጠበቀ ነው።' : 'CHAMPION GYM & FITNESS. ALL RIGHTS RESERVED.'}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white border border-white/5 hover:border-brand-primary p-2.5 rounded-lg bg-zinc-950 transition-all cursor-pointer group uppercase font-mono"
          >
            <span>{language === 'am' ? 'ወደ ላይ ይመለሱ' : 'Back to Summit'}</span>
            <ArrowUp size={12} className="group-hover:translate-y-[-2px] transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
