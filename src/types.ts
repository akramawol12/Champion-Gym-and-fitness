export interface FitnessClass {
  id: string;
  name: string;
  category: 'strength' | 'cardio' | 'combat' | 'aerobics' | 'weight-loss';
  duration: string;
  intensity: 'Beginner' | 'Intermediate' | 'Elite' | 'All Levels';
  caloriesBurned: number;
  description: string;
  icon: string;
  bgGradient: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceMonthly: number;
  priceYearly: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  accentColor: string;
}

export interface BranchLocation {
  id: string;
  name: string;
  address: string;
  mapUrl: string;
  phoneReception1: string;
  phoneReception2: string;
  phoneOwner: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  amenities: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  achievement: string;
  comment: string;
  image: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
