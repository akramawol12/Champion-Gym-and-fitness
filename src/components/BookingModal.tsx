import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, User, Phone, Dumbbell, Award, Share2, Sparkles, CheckCircle2, FileDown } from 'lucide-react';
import { FitnessClass, PricingPlan } from '../types';
import { useLanguage } from '../LanguageContext';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: PricingPlan | null;
  selectedClass?: FitnessClass | null;
}

export default function BookingModal({ isOpen, onClose, selectedPlan, selectedClass }: BookingModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { language } = useLanguage();
  
  const classListEN = ['TaeBo', 'Aerobics', 'Strength Training', 'HIIT', 'Cardio', 'Weight Loss Programs'];
  const classListAM = ['ታይቦ (TaeBo)', 'ኤሮቢክስ (Aerobics)', 'ክብደት ማንሳት', 'ፈጣን ሂት (HIIT)', 'ካርዲዮ (Cardio)', 'ውፍረት መቀነሻ'];
  const classList = language === 'am' ? classListAM : classListEN;

  const [preferredClass, setPreferredClass] = useState(selectedClass?.name || (language === 'am' ? 'ታይቦ (TaeBo)' : 'TaeBo'));
  const [preferredBranch, setPreferredBranch] = useState(language === 'am' ? 'መገናኛ ሾላ (ሱመያ መስጂድ አጠገብ)' : 'Megenagna Shola (near Sumeya Mosque)');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const uniqueId = 'CHM-' + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(uniqueId);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const sharePass = () => {
    const text = language === 'am'
      ? `እኔ አሁን ለሻምፒዮን ጂም እና ፊትነስ የክብር የVIP መግቢያ ቲኬት ያዝኩ (ባርኮድ ቁጥር፡ ${bookingRef})! መገናኛ ሾላ ቅርንጫፍ (ሱመያ መስጂድ አጠገብ) አብረን እንለማመድ!`
      : `I just booked my VIP Pass at Champion Gym & Fitness (Ref: ${bookingRef})! Join me at Megenagna Shola branch (near Sumeya Mosque)!`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  const downloadPass = () => {
    const timestamp = new Date().toLocaleDateString();
    const divider = "==================================================\n";
    
    let ticketContent = "";
    ticketContent += divider;
    ticketContent += language === 'am'
      ? "    ሻምፒዮን ጂም እና ፊትነስ - የልዩ የክብር መግቢያ ካርድ     \n"
      : "    CHAMPION GYM & FITNESS - ADDIS ABABA VIP PASS \n";
    ticketContent += divider;
    ticketContent += `${language === 'am' ? 'የካርድ መለያ ቁጥር' : 'Pass Reference'}:  ${bookingRef}\n`;
    ticketContent += `${language === 'am' ? 'የተሰጠበት ቀን' : 'Generated On'}:    ${timestamp}\n`;
    ticketContent += divider + "\n";
    ticketContent += `${language === 'am' ? 'የእንግዳ አትሌት ስም' : 'Guest Athlete'}:   ${name}\n`;
    ticketContent += `${language === 'am' ? 'ስልክ ቁጥር' : 'Phone Number'}:    ${phone}\n`;
    ticketContent += `${language === 'am' ? 'የተመዘገቡበት ስፖርት' : 'Target Program'}:  ${preferredClass}\n`;
    ticketContent += `${language === 'am' ? 'የመረጡት ጥቅል' : 'Selected Plan'}:   ${selectedPlan ? selectedPlan.name : (language === 'am' ? 'የVIP 1-ቀን ነጻ ሙከራ' : 'VVIP Day Trial')}\n`;
    ticketContent += `${language === 'am' ? 'ቅርንጫፍ አድራሻ' : 'Branch Location'}: ${preferredBranch}\n`;
    ticketContent += "\n" + divider;
    ticketContent += language === 'am' ? "መገናኛ ሾላ ሪሴፕሽን በመምጣት ይህንን ቲኬት ወይም ባርኮድ ያሳዩ።\n" : "Show this ticket or barcode on arrival at Megenagna Shola.\n";
    ticketContent += "Hotline contacts: 0929485202 / 0953556666\n";
    ticketContent += divider;
    
    const blob = new Blob([ticketContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `champion_vip_ticket_${bookingRef}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 md:p-8 shadow-2xl z-10 noise-overlay"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            {!isSuccess ? (
              <div>
                <div className="mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider bg-brand-primary/10 text-brand-primary border border-brand-primary/20 uppercase">
                    <Sparkles size={12} /> {language === 'am' ? 'የክብር ግብዣ' : 'Elite Invitation'}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-semibold text-white mt-2">
                    {selectedPlan 
                      ? (language === 'am' ? `${selectedPlan.name} ይቀላቀሉ` : `JOIN ${selectedPlan.name.toUpperCase()}`) 
                      : (language === 'am' ? 'የነጻ VIP መግቢያ ካርድ ያግኙ' : 'CLAIM YOUR VIP PASS')}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-2 font-sans">
                    {language === 'am' 
                      ? 'የእርስዎን ዲጂታል መግቢያ ካርድ ወዲያውኑ ለማመንጨት ከታች ያለውን ቅጽ ይሙሉ።' 
                      : 'Fill the form below to receive your immediate high-priority digital access pass.'}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1.5">
                      {language === 'am' ? 'ሙሉ ስም' : 'Full Name'}
                    </label>
                    <div className="relative">
                      <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                      <input
                        required
                        type="text"
                        placeholder={language === 'am' ? 'ለምሳሌ ያሬድ ከበደ' : 'e.g. Akram Awol'}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-zinc-900 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white text-sm placeholder:text-zinc-650 focus:outline-none focus:border-brand-primary/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1.5">
                      {language === 'am' ? 'ስልክ ቁጥር (የሚሠራ)' : 'Phone Number (Active)'}
                    </label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                      <input
                        required
                        type="tel"
                        placeholder={language === 'am' ? 'ለምሳሌ 0929485202' : 'e.g. 0929485202'}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-zinc-900 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white text-sm placeholder:text-zinc-650 focus:outline-none focus:border-brand-primary/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1.5">
                        {language === 'am' ? 'የተመርጠው ስፖርት' : 'Selected Program'}
                      </label>
                      <div className="relative">
                        <Dumbbell size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                        <select
                          value={preferredClass}
                          onChange={(e) => setPreferredClass(e.target.value)}
                          className="w-full bg-zinc-900 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-brand-primary/50 transition-colors appearance-none"
                        >
                          {classList.map((cls) => (
                            <option key={cls} value={cls} className="bg-zinc-950">
                              {cls}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1.5">
                        {language === 'am' ? 'የጂም ቅርንጫፍ' : 'Gym Location'}
                      </label>
                      <select
                        value={preferredBranch}
                        onChange={(e) => setPreferredBranch(e.target.value)}
                        className="w-full bg-zinc-900 border border-white/10 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-brand-primary/50 transition-colors appearance-none"
                      >
                        <option value={language === 'am' ? 'መገናኛ ሾላ (ሱመያ መስጂድ አጠገብ)' : 'Megenagna Shola (near Sumeya Mosque)'}>
                          {language === 'am' ? 'መገናኛ ሾላ (ሱመያ መስጂድ አጠገብ)' : 'Megenagna Shola (near Sumeya Mosque)'}
                        </option>
                      </select>
                    </div>
                  </div>

                  {selectedPlan && (
                    <div className="p-3.5 rounded-xl bg-brand-primary/5 border border-brand-primary/10 flex items-center justify-between text-xs font-sans">
                      <span className="text-zinc-400">{language === 'am' ? 'የተመረጠ ደረጃ፡' : 'Selected Tier:'} <b className="text-white font-semibold">{selectedPlan.name}</b></span>
                      <span className="font-mono text-brand-primary font-bold">{selectedPlan.priceMonthly} {language === 'am' ? 'ብር / በወር' : 'ETB / Month'}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 relative group overflow-hidden bg-gradient-to-r from-brand-primary to-brand-accent text-white py-3.5 px-6 rounded-xl font-mono text-sm uppercase tracking-wider font-semibold hover:shadow-[0_0_20px_rgba(255,49,49,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>{language === 'am' ? 'የመግቢያ ካርዱን አሁን አግኝ ⚡' : 'RECEIVE ACCESS PASS NOW'}</span>
                        <Award size={16} />
                      </>
                    )}
                  </button>
                </form>

                <p className="text-[11px] text-zinc-500 text-center mt-4 uppercase tracking-widest font-mono">
                  ★ {language === 'am' ? 'እንግዳ ካርዱ ወዲያውኑ የሚሰራ ነው። ምንም ክፍያ አይጠየቅም።' : 'Private Pass is instantly redeemable. No Credit Card required.'}
                </p>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-4"
              >
                <div className="mx-auto h-12 w-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
                  <CheckCircle2 size={24} />
                </div>

                <h3 className="text-2xl font-display font-black tracking-tight text-white mb-2 uppercase">
                  {language === 'am' ? 'ልዩ የክብር መግቢያ ተፈቅዷል! 🎉' : 'VIP ACCESS GRANTED!'}
                </h3>
                <p className="text-sm text-zinc-400 max-w-sm mx-auto mb-6 font-sans">
                  {language === 'am' 
                    ? <>እንኳን ደስ አሎት <span className="text-white font-bold">{name}</span>! የሻምፒዮን ጂም የእንግዳ መግቢያ ካርድዎ ዝግጁ ነው።</>
                    : <>Congratulations <span className="text-white font-bold">{name}</span>! Your premium membership pass for Champion Gym is active.</>}
                </p>

                {/* Digital Ticket / Pass Card */}
                <div className="relative mx-auto max-w-sm rounded-2xl border border-brand-primary/30 bg-gradient-to-b from-zinc-900 to-black p-5 text-left shadow-[0_0_35px_rgba(255,49,49,0.1)] overflow-hidden">
                  {/* Decorative glowing gradient orb */}
                  <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-brand-primary/20 blur-2xl" />

                  <div className="flex justify-between items-start border-b border-white/5 pb-3.5 mb-3.5">
                    <div>
                      <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{language === 'am' ? 'ዲጂታል ቲኬት' : 'Digital Ticket'}</h4>
                      <p className="text-base font-display font-bold text-white tracking-wider">{language === 'am' ? 'የሻምፒዮን እንግዳ አባል' : 'CHAMPION VIP MEMBER'}</p>
                    </div>
                    <span className="text-lg font-display text-brand-primary font-bold italic">CHAMPION.</span>
                  </div>

                  <div className="space-y-2.5 text-xs text-zinc-400 font-sans">
                    <div className="flex justify-between">
                      <span className="uppercase tracking-wider">{language === 'am' ? 'እንግዳ አትሌት (ስም)' : 'Guest Athlete'}</span>
                      <span className="text-white font-medium font-mono">{name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="uppercase tracking-wider">{language === 'am' ? 'ስልክ ቁጥር' : 'Phone Link'}</span>
                      <span className="text-white font-medium font-mono">{phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="uppercase tracking-wider">{language === 'am' ? 'የስፖርት አይነት' : 'Workout Category'}</span>
                      <span className="text-white font-medium font-mono">{preferredClass}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="uppercase tracking-wider">{language === 'am' ? 'የተመረጠ ጥቅል' : 'Selected Tier'}</span>
                      <span className="text-white font-medium font-mono">{selectedPlan ? selectedPlan.name : (language === 'am' ? 'የVIP 1-ቀን ነጻ ሙከራ' : 'VVIP 1-Day Trial')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="uppercase tracking-wider">{language === 'am' ? 'ቅርንጫፍ ቅርንጫፍ' : 'Branch Gate'}</span>
                      <span className="text-white font-medium font-mono">{preferredBranch}</span>
                    </div>
                  </div>

                  {/* Simulated barcode */}
                  <div className="mt-5 pt-4 border-t border-white/5 flex flex-col items-center justify-center gap-1.5 bg-black/40 p-2.5 rounded-lg">
                    <div className="h-8 w-full select-none opacity-85 flex items-stretch gap-[1.5px] justify-center">
                      {[1, 3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 4, 2, 1, 3, 2, 1].map((width, idx) => (
                        <div
                          key={idx}
                          className="bg-white"
                          style={{ width: `${width}px` }}
                        />
                      ))}
                    </div>
                    <span className="font-mono text-[10px] tracking-[6px] text-zinc-300 font-bold uppercase">{bookingRef}</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={downloadPass}
                    className="flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-brand-primary text-white font-mono text-xs uppercase hover:bg-brand-accent transition-all font-bold shadow-[0_0_15px_rgba(255,49,49,0.2)] cursor-pointer"
                  >
                    <FileDown size={13} /> {language === 'am' ? 'ቲኬቱን አውርድ' : 'Download Pass'}
                  </button>
                  <button
                    onClick={sharePass}
                    className={`flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl border border-white/10 text-white font-mono text-xs uppercase hover:bg-white/5 transition-all cursor-pointer ${copied ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : ''}`}
                  >
                    <Share2 size={13} /> {copied ? (language === 'am' ? 'ቲኬቱ ተገልብጧል' : 'Details Copied!') : (language === 'am' ? 'ቲኬቱን አጋራ' : 'Share Details')}
                  </button>
                  <button
                    onClick={onClose}
                    className="flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-xl bg-zinc-800 text-white font-mono text-xs uppercase hover:bg-zinc-700 transition-all font-semibold cursor-pointer"
                  >
                    {language === 'am' ? 'ተጠናቀቀ' : 'Done'}
                  </button>
                </div>

                <p className="text-[10px] text-zinc-500 mt-4 max-w-xs mx-auto font-sans leading-relaxed">
                  {language === 'am'
                    ? 'ወደ መገናኛ ሾಲಾ የሻምፒዮን ቅርንጫፍ ሲመጡ ይህንን ባርኮድ ያሳዩ። የእንግዳ ካርድ አገልግሎቶ ይስተናገዳል (ስልክ፡ 0929485202)።'
                    : 'Show this barcode on arrival. Addis Ababa reception will process your pass immediately (Contact: 0929485202).'}
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
