import { useState } from 'react';
import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Classes from './components/Classes';
import InteractiveCoach from './components/InteractiveCoach';
import ReelsFeed from './components/ReelsFeed';
import Pricing from './components/Pricing';
import Locations from './components/Locations';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import LanguageGate from './components/LanguageGate';
import { FitnessClass, PricingPlan } from './types';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [selectedClass, setSelectedClass] = useState<FitnessClass | null>(null);

  const openBookingWithPlan = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    setSelectedClass(null);
    setIsBookingOpen(true);
  };

  const openBookingWithClass = (cls: FitnessClass) => {
    setSelectedClass(cls);
    setSelectedPlan(null);
    setIsBookingOpen(true);
  };

  const openBookingDefault = () => {
    setSelectedPlan(null);
    setSelectedClass(null);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedPlan(null);
    setSelectedClass(null);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-brand-primary selection:text-white overflow-x-hidden antialiased font-sans noise-overlay">
      {/* Language Selection Gate for first-time visitors */}
      <LanguageGate />

      {/* Premium Navbar */}
      <Navbar onOpenBooking={openBookingDefault} />

      {/* Futuristic Floating Side Navigation (Up/Down Quick Scroller) */}
      <SideNav />

      {/* Cinematic Hero header folds */}
      <Hero onOpenBooking={openBookingDefault} />

      {/* Social proof numerical stats & transformation comparative sliders */}
      <SocialProof />

      {/* Specialized classes filtering cards & dynamic calorie burn estimator calculators */}
      <Classes onSelectClass={openBookingWithClass} />

      {/* Structured workout formula routine customizer */}
      <InteractiveCoach />

      {/* Extreme High-intensity Instagram Reels direct feed section */}
      <ReelsFeed />

      {/* Modern sliding testimonials stories panels */}
      <Testimonials />

      {/* Simple package price items column panels with year save toggle handles */}
      <Pricing onSelectPlan={openBookingWithPlan} />

      {/* Kenenisa avenue locations contacts hotlines console drawer */}
      <Locations />

      {/* Staggered dynamic accordion FAQ blocks */}
      <FAQ />

      {/* High impact final action calling overlay panels */}
      <FinalCTA onOpenBooking={openBookingDefault} />

      {/* Extended comprehensive multi column footer */}
      <Footer />

      {/* Interactive membership onboarding modal ticket overlay */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        selectedPlan={selectedPlan}
        selectedClass={selectedClass}
      />
    </div>
  );
}
