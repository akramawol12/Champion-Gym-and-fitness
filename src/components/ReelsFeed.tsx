import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Instagram, X, Flame } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface ReelItem {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  trainer: string;
  thumbnail: string;
  videoUrl: string;
  instagramUrl: string;
}

export default function ReelsFeed() {
  const [activeReel, setActiveReel] = useState<ReelItem | null>(null);
  const [hoveredReelId, setHoveredReelId] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const { language } = useLanguage();

  const reels: ReelItem[] = language === 'am' ? [
    {
      id: 'DYj2ml-ox_b',
      title: 'የባርቤል ከባድ ውፍረት ስልጠና',
      category: 'ክብደት ማንሳት',
      description: 'ከፍተኛ የዴድሊፍት (Deadlift) ጡንቻ ማጎልበቻ ስልጠና በኮከብ አሰልጣኛችን።',
      duration: '0:45',
      trainer: 'አሰልጣኝ ቀነኒሳ',
      thumbnail: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-athletic-man-lifting-barbell-in-gym-44102-large.mp4',
      instagramUrl: 'https://www.instagram.com/reel/DYj2ml-ox_b/',
    },
    {
      id: 'DX3RitNoK1t',
      title: 'የታይቦ (TaeBo) ቦክስና እርግጫ',
      category: 'የታይቦ ፍልሚያ',
      description: 'የእጅና የእግር ፍልሚያ ስልጠና በደማቅ ሙዚቃ የታገዘ።',
      duration: '0:55',
      trainer: 'አሰልጣኝ ሰላም',
      thumbnail: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=600&q=80',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-boxer-hitting-a-punching-bag-44113-large.mp4',
      instagramUrl: 'https://www.instagram.com/reel/DX3RitNoK1t/',
    },
    {
      id: 'DXgRfhTiDUL',
      title: 'የስብ ማቅለጫ ፈጣን ሂት (HIIT)',
      category: 'ፈጣን ሂት (HIIT)',
      description: 'ፈጣን ሜታቦሊዝምን የሚያፋጥንና ሳንባን የሚያጠነክር ከፍተኛ የልብ ምት ስፖርት።',
      duration: '0:35',
      trainer: 'አሰልጣኝ ያሬድ',
      thumbnail: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-exercising-on-cross-trainer-in-gym-44122-large.mp4',
      instagramUrl: 'https://www.instagram.com/reel/DXgRfhTiDUL/',
    },
    {
      id: 'DXQ2hV6iMgR',
      title: 'የልብ ጽናት ሩጫ በካርዲዮ',
      category: 'ካርዲዮ (Cardio)',
      description: 'የልብ ጽናት VO2 Max ደረጃን የሚያሳድጉ የሩጫና የዝላይ ስፖርት እንቅስቃሴዎች።',
      duration: '0:40',
      trainer: 'አሰልጣኝ ዮሐንስ',
      thumbnail: 'https://images.unsplash.com/photo-1502904585520-fa371444e914?auto=format&fit=crop&w=600&q=80',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-doing-squats-with-barbell-in-gym-44105-large.mp4',
      instagramUrl: 'https://www.instagram.com/reel/DXQ2hV6iMgR/',
    },
    {
      id: 'DWrrMoQDgu7',
      title: 'ኤሮቢክስ የዳንስ ሙዚቃ',
      category: 'ኤሮቢክስ (Aerobics)',
      description: 'በከፍተኛ የቤዝ ሙዚቃ የታገዘ፣ ህብረ-ቀለማት ያሉት ምቹ የኤሮቢክስ መዝናኛ ስፖርት።',
      duration: '0:50',
      trainer: 'አሰልጣኝ ማህሌት',
      thumbnail: 'https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?auto=format&fit=crop&w=600&q=80',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-gym-member-training-with-dumbbells-44111-large.mp4',
      instagramUrl: 'https://www.instagram.com/reel/DWrrMoQDgu7/',
    },
    {
      id: 'DWMGIGqiMdz',
      title: 'ክብደት መቀነሻ ሜታቦሊክ ፎርሙላ',
      category: 'ውፍረት መቀነሻ',
      description: 'አስደናቂ ክብደት መቀነስ ለውጥ የሚያመጣ ጥቅል የመልመጃ ስልት።',
      duration: '0:45',
      trainer: 'አሰልጣኝ አክራም',
      thumbnail: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-doing-stretching-exercises-on-a-mat-44125-large.mp4',
      instagramUrl: 'https://www.instagram.com/reel/DWMGIGqiMdz/',
    },
  ] : [
    {
      id: 'DYj2ml-ox_b',
      title: 'Heavy Barbell Hypertrophy',
      category: 'Strength Training',
      description: 'Massive deadlift execution and barbell rows loading premium physical attributes.',
      duration: '0:45',
      trainer: 'Coach Kenenisa',
      thumbnail: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-athletic-man-lifting-barbell-in-gym-44102-large.mp4',
      instagramUrl: 'https://www.instagram.com/reel/DYj2ml-ox_b/',
    },
    {
      id: 'DX3RitNoK1t',
      title: 'TaeBo Explosive Kick drills',
      category: 'TaeBo Combat Fit',
      description: 'Fighter reflex conditioning. High-volume target impact speed combinations.',
      duration: '0:55',
      trainer: 'Master Selam',
      thumbnail: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=600&q=80',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-boxer-hitting-a-punching-bag-44113-large.mp4',
      instagramUrl: 'https://www.instagram.com/reel/DX3RitNoK1t/',
    },
    {
      id: 'DXgRfhTiDUL',
      title: 'Thermogenic Burn Intervals',
      category: 'HIIT Cardio',
      description: 'Metabolic zone conditioning. Active sweat intervals that trigger continuous biological afterburn.',
      duration: '0:35',
      trainer: 'Coach Yared',
      thumbnail: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-exercising-on-cross-trainer-in-gym-44122-large.mp4',
      instagramUrl: 'https://www.instagram.com/reel/DXgRfhTiDUL/',
    },
    {
      id: 'DXQ2hV6iMgR',
      title: 'Oxygen Threshold Cardio Runs',
      category: 'Cardio Zones',
      description: 'Sprinting intervals optimizing athletic heart-rate target zones and VO2 capacity.',
      duration: '0:40',
      trainer: 'Coach Yohanis',
      thumbnail: 'https://images.unsplash.com/photo-1502904585520-fa371444e914?auto=format&fit=crop&w=600&q=80',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-doing-squats-with-barbell-in-gym-44105-large.mp4',
      instagramUrl: 'https://www.instagram.com/reel/DXQ2hV6iMgR/',
    },
    {
      id: 'DWrrMoQDgu7',
      title: 'Choreographed Aerobic Stamina',
      category: 'Aerobics Lab',
      description: 'Endorphin-boosting kinetic choreography mapped over heavy bass rhythm.',
      duration: '0:50',
      trainer: 'Coach Mahlet',
      thumbnail: 'https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?auto=format&fit=crop&w=600&q=80',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-gym-member-training-with-dumbbells-44111-large.mp4',
      instagramUrl: 'https://www.instagram.com/reel/DWrrMoQDgu7/',
    },
    {
      id: 'DWMGIGqiMdz',
      title: 'Dynamic Weight Loss Formula',
      category: 'Metabolic Reducer',
      description: 'Elite hybrid weights and active rest combinations designed for rapid transformation.',
      duration: '0:45',
      trainer: 'Coach Akram',
      thumbnail: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-man-doing-stretching-exercises-on-a-mat-44125-large.mp4',
      instagramUrl: 'https://www.instagram.com/reel/DWMGIGqiMdz/',
    },
  ];

  const handleMouseEnter = (id: string) => {
    setHoveredReelId(id);
    const video = videoRefs.current[id];
    if (video) {
      video.play().catch(() => {});
    }
  };

  const handleMouseLeave = (id: string) => {
    setHoveredReelId(null);
    const video = videoRefs.current[id];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section id="reels" className="relative py-20 md:py-32 bg-[#0a0a0a] border-t border-white/5 px-4 overflow-hidden">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 rounded-full bg-brand-accent/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header Title Grid */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-16">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider bg-brand-primary/10 text-brand-primary border border-brand-primary/20 uppercase">
              <Instagram size={12} className="text-brand-primary" /> {language === 'am' ? 'የቀጥታ ስርጭት ስልጠናዎች' : 'INSTAGRAM LIVE FEED'}
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter text-white uppercase italic leading-none">
              {language === 'am' ? (
                <>
                  የሻምፒዮን <span className="stroke-text">ሪልስ፡</span> <span className="text-brand-primary">የቀጥታ ልምምድ</span>
                </>
              ) : (
                <>
                  CHAMPION <span className="stroke-text">REELS:</span> <span className="text-brand-primary">LIVE DRILLS</span>
                </>
              )}
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl font-sans leading-relaxed">
              {language === 'am'
                ? 'በማንኛውም ብሎክ ላይ በማሳለፍ ፈጣን የስልጠና ቪዲዮዎችን ይመልከቱ። ለማስፋት እና የቀጥታ ኢንስታግራም ማጫወቻ ለመክፈት ይጫኑ።'
                : 'Hover over any block to watch workouts stream smoothly. Tap to expand into a crisp high-impact cinematic native automated player.'}
            </p>
          </div>

          <a
            href="https://www.instagram.com/champion_gym_and_fitness_hub/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 font-mono text-xs uppercase text-zinc-400 hover:text-brand-primary border border-white/10 hover:border-brand-primary px-4 py-2.5 rounded-xl transition-all font-bold tracking-widest cursor-pointer"
          >
            <Instagram size={14} /> {language === 'am' ? 'ማህበራዊ ገፃችንን ይከታተሉ' : 'Follow Our Legacy'}
          </a>
        </div>

        {/* Dynamic 9:16 Video Block Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reels.map((reel) => (
            <div
              key={reel.id}
              onClick={() => setActiveReel(reel)}
              onMouseEnter={() => handleMouseEnter(reel.id)}
              onMouseLeave={() => handleMouseLeave(reel.id)}
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/5 bg-zinc-950/40 glass-panel shadow-[0_0_25px_rgba(0,0,0,0.5)] hover:border-brand-primary/45 transition-all cursor-pointer flex flex-col justify-end p-6 select-none"
            >
              {/* Cover Thumbnail / Cinematic Seamless Loop Video */}
              <div className="absolute inset-0 z-0 bg-black">
                {/* Fallback Static Image if video is not hovered */}
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  className={`w-full h-full object-cover grayscale transition-all duration-500 absolute inset-0 ${
                    hoveredReelId === reel.id ? 'opacity-0 scale-105' : 'opacity-40 scale-100 group-hover:grayscale-0'
                  }`}
                />

                {/* Autoplay preview stream on hover */}
                <video
                  ref={(el) => {
                    videoRefs.current[reel.id] = el;
                  }}
                  src={reel.videoUrl}
                  className={`w-full h-full object-cover transition-opacity duration-300 absolute inset-0 ${
                    hoveredReelId === reel.id ? 'opacity-65 scale-105' : 'opacity-0 pointer-events-none'
                  }`}
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />
              </div>

              {/* Play symbol hover overlay block */}
              <div className="absolute inset-0 flex items-center justify-center z-15">
                <div className="h-16 w-16 rounded-full bg-brand-primary/10 border border-brand-primary/40 text-white flex items-center justify-center group-hover:bg-brand-primary group-hover:scale-110 shadow-[0_0_20px_rgba(255,49,49,0.2)] group-hover:shadow-[0_0_35px_rgba(255,49,49,0.5)] transition-all duration-300">
                  <Play size={24} fill="currentColor" className="ml-1 text-white" />
                </div>
              </div>

              {/* Premium Card Text */}
              <div className="relative z-20 space-y-2">
                <span className="inline-flex items-center gap-1.5 text-[9px] font-mono font-bold text-brand-primary uppercase tracking-widest bg-brand-primary/10 px-2.5 py-1 rounded border border-brand-primary/20">
                  <Flame size={10} /> {reel.category}
                </span>

                <h3 className="text-xl font-display font-black tracking-wide uppercase italic text-white group-hover:text-brand-primary transition-colors">
                  {reel.title}
                </h3>

                <p className="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed font-sans">
                  {reel.description}
                </p>

                {/* Trainer card block */}
                <div className="pt-2 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                  <span>{language === 'am' ? 'ቆይታ ሰዓት' : 'Run Time'}: {reel.duration}</span>
                  <span className="text-white font-semibold">{reel.trainer}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Immersive Mobile-Perfect Autoplay HTML5 Native Cinema Player Overlay Modal */}
      <AnimatePresence>
        {activeReel && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveReel(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-sm aspect-[9/16] max-h-[85vh] overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl z-20 flex flex-col justify-end p-1 pt-12"
            >
              {/* Interactive Native Instagram Reel Embedded Player */}
              <div className="absolute inset-0 z-0 bg-black flex items-center justify-center">
                <iframe
                  src={`https://www.instagram.com/reel/${activeReel.id}/embed/`}
                  className="w-full h-full border-none rounded-2xl select-none"
                  allowFullScreen
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  style={{ minHeight: '100%' }}
                />
              </div>

              {/* Action Buttons Header Block */}
              <div className="absolute top-4 right-4 flex items-center justify-between z-30">
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setActiveReel(null)}
                  className="p-2.5 rounded-full bg-black/80 border border-white/10 text-white hover:text-brand-primary hover:border-brand-primary/50 transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
