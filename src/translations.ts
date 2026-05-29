export interface LanguageTranslations {
  nav: {
    home: string;
    results: string;
    programs: string;
    formula: string;
    reels: string;
    stories: string;
    pricing: string;
    branches: string;
    faq: string;
    reception: string;
    joinElite: string;
    passCTA: string;
  };
  hero: {
    neonOn: string;
    neonOff: string;
    brandSlogan: string;
    badge: string;
    headingPart1: string;
    headingPart2: string;
    headingPart3: string;
    headingPart4: string;
    subheading: string;
    ctaPrimary: string;
    ctaSecondary: string;
    luxuryBadge: string;
    liveCoachTipTitle: string;
    stats: {
      eliteMembers: string;
      certifiedCoaches: string;
      yearsExp: string;
      successRatio: string;
      suffixMembers: string;
      suffixCoaches: string;
      suffixExp: string;
      suffixSuccess: string;
    };
  };
  socialProof: {
    calculatorTitle: string;
    calculatorSubtitle: string;
    calculatorDesc: string;
    platesTitle: string;
    platesDesc: string;
    barWeight: string;
    oneRepMax: string;
    systemForce: string;
    estimatedCal: string;
    plateStack: string;
    clearPlate: string;
    addPlate: string;
    add20kg: string;
    add15kg: string;
    add10kg: string;
    add5kg: string; 
    add2_5kg: string;
    systemicIntensity: string;
    totalBarbellWeight: string;
    statsLabel1: string;
    statsSub1: string;
    statsLabel2: string;
    statsSub2: string;
    statsLabel3: string;
    statsSub3: string;
  };
  classes: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    catAll: string;
    catStrength: string;
    catCardio: string;
    catCombat: string;
    catAerobics: string;
    catWeightLoss: string;
    intensity: {
      all: string;
      beginner: string;
      intermediate: string;
      elite: string;
    };
    caloriesText: string;
    selectBtn: string;
  };
  coach: {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
    levelLabel: string;
    levels: {
      beginner: string;
      intermediate: string;
      elite: string;
    };
    goalLabel: string;
    freqLabel: string;
    daysLabel: string;
    blueprintTitle: string;
    targetFocus: string;
    classRec: string;
    duration: string;
    estBurn: string;
    downloadBtn: string;
    printBtn: string;
    generateSuccess: string;
  };
  pricing: {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
    monthly: string;
    yearly: string;
    saveBtn: string;
    monthlySuffix: string;
    yearlySuffix: string;
    popularBadge: string;
    actionBtn: string;
  };
  locations: {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
    openNow: string;
    closedNow: string;
    hqLabel: string;
    weekdays: string;
    saturday: string;
    sunday: string;
    amenitiesLabel: string;
    phoneLabel: string;
    ownerLabel: string;
    hotlineLabel: string;
    routeMaps: string;
  };
  testimonials: {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
  };
  faq: {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
  };
  finalCta: {
    title: string;
    desc: string;
    joinBtn: string;
    callUs: string;
    hourBadge: string;
  };
  booking: {
    title: string;
    subtitle: string;
    nameLabel: string;
    phoneLabel: string;
    phonePlace: string;
    branchLabel: string;
    classLabel: string;
    planLabel: string;
    termsText: string;
    submitBtn: string;
    processing: string;
    successTitle: string;
    successDesc: string;
    refLabel: string;
    targetProgram: string;
    selectedTier: string;
    branchLoc: string;
    downloadPass: string;
    shareDetails: string;
    doneBtn: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    schedule: string;
    copyright: string;
    createdLove: string;
  };
}

export const translations: Record<'am' | 'en', LanguageTranslations> = {
  am: {
    nav: {
      home: 'መነሻ',
      results: 'ውጤቶች',
      programs: 'መርሃ-ግብሮች',
      formula: 'የልምምድ እቅድ',
      reels: 'ቪዲዮዎች',
      stories: 'ታሪኮች',
      pricing: 'ክፍያዎች',
      branches: 'ቅርንጫፎች',
      faq: 'ጥያቄዎች',
      reception: 'መቀበያ/ስልክ',
      joinElite: 'ሻምፒዮን ይሁኑ!',
      passCTA: 'የነጻ ቪአይፒ መግቢያ',
    },
    hero: {
      neonOn: 'ኔዮን አብራ',
      neonOff: 'ኔዮን አጥፋ',
      brandSlogan: 'ሻምፒዮን ጂምና ፊልነስ',
      badge: '🔥 የአዲስ አበባ ቁጥር #1 ምርጥ ጂም',
      headingPart1: 'ተፈጥሮአዊ ጥንካሬዎን',
      headingPart2: 'እዚህ',
      headingPart3: 'ያግኙ',
      headingPart4: 'ይገንቡ',
      subheading: 'በመገናኛ ሾላ የሚገኘው ግዙፍ እና ዘመናዊ ጂማችን ምርጥ ብቃት ያላቸውን አሰልጣኞች እና አለም-አቀፍ ደረጃቸውን የጠበቁ መሳሪያዎችን አጣምሮ ይዞዎታል። ዛሬውኑ ይቀላቀሉን እና እውነተኛ ለውጥ ያምጡ!',
      ctaPrimary: 'ባለሙያዎችን ይቀላቀሉ ⚡',
      ctaSecondary: 'ቪአይፒ ትኬት ያግኙ 🎟️',
      luxuryBadge: '• ደረጃው የጠበቀ የቪአይፒ ጂም በአዲስ አበባ',
      liveCoachTipTitle: '💡 ዕለታዊ የሻምፒዮን ምክር፡',
      stats: {
        eliteMembers: 'Elite አባላት',
        certifiedCoaches: 'ምርጥ አሰልጣኞች',
        yearsExp: 'የዘመናት ልምድ',
        successRatio: 'የውጤታማነት መጠን',
        suffixMembers: 'አዲስ አበባ ውስጥ',
        suffixCoaches: 'IFBB ባለሙያዎች',
        suffixExp: 'ታማኝ አገልግሎት',
        suffixSuccess: 'ለውጥ የተረጋገጠ!',
      }
    },
    socialProof: {
      calculatorTitle: 'ዜሮ ግምት። ሙሉ ሳይንስ።',
      calculatorSubtitle: 'እውነተኛ ውጤቶች በሚዛኑ ላይ ይመዘገባሉ',
      calculatorDesc: 'በሻምፒዮን ጂም በደመነፍስ አንሰራም። ከዚህ በታች ያለውን የፓወር ሊፍት ማስያ በመጠቀም በሰውነትዎ ላይ ሊያሳርፉት ያሰቡትን ሸክም አስቀድመው ያቅዱ! አከርካሪዎን ይጠብቁ፣ በቲኪቶክ የጂም መሳቂያነት ከመሆን ይዳኑ፣ እና ትክክለኛውን የጡንቻ ጉልበትዎን በሂሳብ ያውጡ!',
      platesTitle: 'ዲጂታል የብረት ክብደት ማስያ 🏋️‍♂️',
      platesDesc: 'እዚህ ጂም ውስጥ የብረት ሳህኖችን ከመጫንዎ በፊት በዚህ ማስያ ላይ በመጫን ምን ያህል የጡንቻ ጉልበት እንደሚጠቀሙ ይመልከቱ።',
      barWeight: 'የባርቤል ክብደት',
      oneRepMax: 'ግምታዊ 1-Rep Max ብቃት',
      systemForce: 'የተለቀቀው ሜካኒካል ኃይል',
      estimatedCal: 'የሚቃጠል ካሎሪ (በደቂቃ)',
      plateStack: 'የተጫኑ የክብደት ሳህኖች',
      clearPlate: 'ሁሉንም አስወግድ 🧹',
      addPlate: 'ክብደት ጨምር',
      add20kg: 'ጨምር 20kg 🔴',
      add15kg: 'ጨምር 15kg 🔵',
      add10kg: 'ጨምር 10kg 🟢',
      add5kg: 'ጨምር 5kg 🟡',
      add2_5kg: 'ጨምር 2.5kg ⚫',
      systemicIntensity: '🔥 የስልጠናው ጥንካሬ ደረጃ፡',
      totalBarbellWeight: 'ጠቅላላ የባርቤል ክብደት',
      statsLabel1: '12,400+',
      statsSub1: 'አጠቃላይ የተቃጠሉ ካሎሪዎች (በኩባንያችን አባላት)',
      statsLabel2: '98%',
      statsSub2: 'ከስብ ወደ ጡንቻ የተቀየሩ ስኬታማ ታሪኮች',
      statsLabel3: 'ዜሮ',
      statsSub3: 'ሰበቦች እና ሰነፍ ቀናቶች!',
    },
    classes: {
      badge: '🏋️‍♀️ ልዩ ስልጠናዎቻችን',
      title1: 'ለእርስዎ የሚሆን',
      title2: 'ሙያዊ መርሃ-ግብር',
      subtitle: 'ምንም አይነት የሰውነት ቅርጽ ይኑርዎት፣ እኛ ጋር የሚስማማዎት እና በጥንቃቄ የተዘጋጀ የስፖርት አይነት አለ።',
      catAll: 'ሁሉንም አሳይ',
      catStrength: 'የጡንቻ ማጎልበቻ',
      catCardio: 'የልብ ምት (Cardio)',
      catCombat: 'ታይቦ (TaeBo)',
      catAerobics: 'ኤሮቢክስ (Aerobics)',
      catWeightLoss: 'ውፍረት መቀነሻ',
      intensity: {
        all: 'ለሁሉም',
        beginner: 'ጀማሪ',
        intermediate: 'መካከለኛ',
        elite: 'ሻምፒዮን',
      },
      caloriesText: 'ካሎሪ/በሰዓት',
      selectBtn: 'የነጻ ሙከራ ይያዙ 🎫',
    },
    coach: {
      badge: '🧠 ዘመናዊው የልምምድ እቅድ አውጭ',
      title1: 'የራስዎን የልምምድ',
      title2: 'እቅድ እዚህ ይንደፉ',
      desc: 'የስፖርት ደረጃዎን፣ የሚፈልጉትን ግብ እና በሳምንት መስራት የሚፈልጉትን ቀናት ይምረጡ። ሮቦቱ ለሰውነትዎ የሚመጥን ሳይንሳዊ የስፖርት ረቂቅ ያዘጋጅልዎታል!',
      levelLabel: 'የስፖርት ደረጃዎ፡',
      levels: {
        beginner: 'ጀማሪ (አዲስ ሰው)',
        intermediate: 'ለመካከለኛ ስፖርተኛ',
        elite: 'ለከባድ ስፖርተኛ (Beast)',
      },
      goalLabel: 'ዋናው ግብዎ፡',
      freqLabel: 'በሳምንት ስንት ቀን ይሰሩታል?፡',
      daysLabel: 'ቀናት በሳምንት',
      blueprintTitle: 'የሻምፒዮን የግል ስፖርት እቅድ ሰነድ 📜',
      targetFocus: 'የትኩረት አቅጣጫ',
      classRec: 'የሚመከር የስልጠና አይነት',
      duration: 'የጊዜ ርዝማኔ',
      estBurn: 'የሚቃጠል ካሎሪ',
      downloadBtn: 'ሰነዱን አውርድ 💾',
      printBtn: 'ቅጂውን አትም 🖨️',
      generateSuccess: '✅ የግል ስፖርት እቅድዎ በሚገባ ተዘጋጅቷል! ከታች ማውረድ ይችላሉ።',
    },
    pricing: {
      badge: '💎 ግልጽ ክፍያዎች (ምንም የተደበቀ ነገር የለም)',
      title1: 'ዋጋችን እና',
      title2: 'የአባልነት ፓኬጆች',
      desc: 'የፋይናንስ ደረጃዎን የሚመጥን እና ወደ ስኬት የሚወስድዎትን መርጠው ዛሬውኑ መስራት ይጀምሩ።',
      monthly: 'የወር ክፍያ',
      yearly: 'የዓመት ክፍያ (ቅናሽ ያለው)',
      saveBtn: 'ለዓመት ክፍያ 20% ይቆጥቡ 💰',
      monthlySuffix: 'ብር / በወር',
      yearlySuffix: 'ብር / በዓመት',
      popularBadge: '🔥 ተወዳጅ ምርጫ',
      actionBtn: 'የቪአይፒ መግቢያ ይያዙ 🚀',
    },
    locations: {
      badge: '📍 አድራሻችን እና ዋናው ቅርንጫፍ',
      title1: 'ሻምፒዮን የት ነው ያለው?',
      title2: 'መገናኛ ሾላ',
      desc: 'በአዲስ አበባ አስደሳችና ምቹ በሆነው መገናኛ ሾላ ገበያ፣ ከሱመያ መስጂድ አጠገብ እንገኛለን። ግዙፍ፣ ንጹህ አየር በደንብ የሚዘዋወርበት ሰፊ ቦታ አዘጋጅተንልዎታል።',
      openNow: '● በአሁኑ ሰዓት ክፍት ነው',
      closedNow: '● በአሁኑ ሰዓት ዝግ ነው',
      hqLabel: 'ዋናው የአዲስ አበባ ዋና መሥሪያ ቤት',
      weekdays: 'ሰኞ - አርብ (Weekdays)',
      saturday: 'ቅዳሜ (Saturday)',
      sunday: 'እሁድ (Sunday)',
      amenitiesLabel: 'በጂማችን ውስጥ የሚገኙ ተጨማሪ ነገሮች፡',
      phoneLabel: 'የመቀበያ ስልክ ቁጥር 1፡',
      ownerLabel: 'ማኔጅመንት ስልክ፡',
      hotlineLabel: '24/7 የክለቡ የእርዳታ መስመር',
      routeMaps: 'በቀጥታ ካርታውን ክፈት 🗺️',
    },
    testimonials: {
      badge: '👑 እውነተኛ የሰውነት ለውጥ ታሪኮች',
      title1: 'የሻምፒዮኖቻችን ምስክርነት',
      title2: 'ለውጥ በምክንያት',
      desc: 'እኛ ጋር ሰበብን ትተው በትጋት የሰሩ እና ዛሬ አስደናቂ የሰውነት አቋም ላይ የደረሱ ውድ ወገኖቻችን ምስክርነት።',
    },
    faq: {
      badge: '🤔 ተደጋጋሚ ጥያቄዎች (ተለዋዋጭ)',
      title1: 'ብዙ ጊዜ የሚጠየቁ',
      title2: 'ጥያቄዎች እና መልሶቻቸው',
      desc: 'ስለ ጂማችን፣ ስለ ቅርንጫፎች እና ስለ ክፍያ ስርዓታችን ማወቅ የሚፈልጉትን ዝርዝር ጉዳይ እዚህ ያገኛሉ።',
    },
    finalCta: {
      title: 'ዛሬ የመጨረሻው ሰበብዎ የሚያበቃበት ቀን ነው!',
      desc: 'የነጻ ቪአይፒ መግቢያዎን ዛሬውኑ በመውሰድ ነገ ጠዋት 5:00 ሰዓት ላይ እራስዎን በመገናኛ ሾላ ቅርንጫፋችን ያግኙ። ከባድ ክብደቶች እየጠበቁዎት ነው!',
      joinBtn: 'አሁኑኑ መግቢያ Ticket ያግኙ 🎟️',
      callUs: 'በስልክ ለማነጋገር፡ 0929485202 / 0953556666',
      hourBadge: '🔥 የነጻ ግብዣው በተወሰነ ሰዓት ብቻ የሚያበቃ ነው',
    },
    booking: {
      title: 'የነጻ ቪአይፒ ፓስፖርት መመዝገቢያ',
      subtitle: 'ሻምፒዮን ጂም መገናኛ ቅርንጫፍ - አዲስ አበባ',
      nameLabel: 'ሙሉ ስምዎ',
      phoneLabel: 'የስልክ ቁጥርዎ',
      phonePlace: 'ለምሳሌ፡ 0912345678',
      branchLabel: 'የሚመርጡት ቅርንጫፍ',
      classLabel: 'የስፖርት ፍላጎትዎ (ባለሙያ አማካሪ)',
      planLabel: 'የመረጡት የአባልነት ፓኬጅ',
      termsText: 'ይህን መመዝገቢያ ሲልኩ በመገናኛ ሾላ ሻምፒዮን ጂም የሚገኙትን ሁሉንም ደንቦች ለማክበር ተስማምተዋል። እንዲሁም ዳምቤሎችን ቦታቸው ላይ ለመመለስ ቃል ገብተዋል።',
      submitBtn: 'ወርቃማውን መግቢያ ፍጠር 🎫',
      processing: 'የእርስዎን የቪአይፒ ትኬት በማዘጋጀት ላይ...',
      successTitle: '🎉 እንኳን ደስ አለዎት! ቪአይፒ ትኬትዎ ተዘጋጅቷል!',
      successDesc: 'የእርዳታ ሰራተኞቻችን በ24 ሰዓት ውስጥ ደውለው ቀጠሮዎን ያረጋግጣሉ። እስከዛው ትኬቱን ወደ ስልክዎ አውርደው ያስቀምጡ።',
      refLabel: 'የቲኬት ቁጥር (Pass Ref)',
      targetProgram: 'የታለመው ፕሮግራም',
      selectedTier: 'ተመራጭ አባልነት',
      branchLoc: 'የጂም አድራሻ',
      downloadPass: 'ትኬቱን አውርድ 💾',
      shareDetails: 'ለጓደኛ ያጋሩ 🔗',
      doneBtn: 'ተጠናቀቀ 👋',
    },
    footer: {
      tagline: 'ሻምፒዮን ጂምና ፊልነስ - በአዲስ አበባ እምብርት የሚገኝ የጉልበት እና የውበት ማዕከል!',
      quickLinks: 'ጠቃሚ ሊንኮች',
      schedule: 'የስራ ሰዓት፡ ሰኞ - አርብ (5:00 AM - 10:00 PM) | ቅዳሜ (6:00 AM - 8:00 PM) | እሁድ (8:00 AM - 6:00 PM)',
      copyright: '© 2026 ሻምፒዮን ጂም መገናኛ። መብቱ በህግ የተጠበቀ ነው።',
      createdLove: 'በአዲስ አበባ ምርጥ ዲዛይነሮች በፍቅር ተዘጋጀ 🇪🇹✊',
    },
  },
  en: {
    nav: {
      home: 'Home Base',
      results: 'Elite Results',
      programs: 'Programs',
      formula: 'Routine Builder',
      reels: 'Reels Feed',
      stories: 'Stories',
      pricing: 'Pricing',
      branches: 'Addis Branches',
      faq: 'FAQ',
      reception: 'Reception/Line',
      joinElite: 'Join the Elite',
      passCTA: 'CLAIM VIP DAY PASS',
    },
    hero: {
      neonOn: 'Neon On',
      neonOff: 'Neon Off',
      brandSlogan: 'CHAMPION GYM & FITNESS',
      badge: '🔥 Addis Ababa\'s No.1 Premium Heavy Iron Gym',
      headingPart1: 'UNLEASH YOUR',
      headingPart2: 'ULTIMATE',
      headingPart3: 'ATHLETIC',
      headingPart4: 'CHAMPION',
      subheading: 'Located right at Megenagna square Shola gebeya, we combine top IFBB certified coaches, heavy-duty commercial lifting gears, and energetic group classes to build absolute human elite performers. No excuses!',
      ctaPrimary: 'Join the Elite ⚡',
      ctaSecondary: 'Get VIP Pass 🎟️',
      luxuryBadge: '• Ranked #1 Luxury Gym in Ethiopia',
      liveCoachTipTitle: '💡 Daily Champion Advice:',
      stats: {
        eliteMembers: 'Elite Members',
        certifiedCoaches: 'Certified Coaches',
        yearsExp: 'Years Experience',
        successRatio: 'Success Ratio',
        suffixMembers: 'Active in Addis',
        suffixCoaches: 'IFBB Pros on Duty',
        suffixExp: 'Gold Standard Gym',
        suffixSuccess: 'Results Guaranteed',
      }
    },
    socialProof: {
      calculatorTitle: 'ZERO GUESSWORK. FULL SCIENCE.',
      calculatorSubtitle: 'True physical transformations are calculated',
      calculatorDesc: 'At Champion, we do not believe in blind weight-loading. Use our interactive physics system to stack digital plates before attempting them in real life. Save your spine, avoid becoming a viral gym-fail compilation video, and measure your peak mechanical force with mathematical precision!',
      platesTitle: 'Digital Barbells Stack Calculator 🏋️‍♂️',
      platesDesc: 'Stack original weights onto our interactive barbell simulation to calculate target mechanical force output and systemic burn levels.',
      barWeight: 'Olympic Bar Weight',
      oneRepMax: 'Est. 1-Rep Max threshold',
      systemForce: 'Peak mechanical force',
      estimatedCal: 'Est. metabolic burn (per min)',
      plateStack: 'Loaded Weight Plates',
      clearPlate: 'Clear All Plates 🧹',
      addPlate: 'Add Target Plate',
      add20kg: 'Add 20kg 🔴',
      add15kg: 'Add 15kg 🔵',
      add10kg: 'Add 10kg 🟢',
      add5kg: 'Add 5kg 🟡',
      add2_5kg: 'Add 2.5kg ⚫',
      systemicIntensity: '🔥 Training intensity level:',
      totalBarbellWeight: 'Total barbell weight',
      statsLabel1: '12,400+',
      statsSub1: 'Kcal burned total by our active Addis members',
      statsLabel2: '98%',
      statsSub2: 'Body transformation and fat-to-muscle success story metrics',
      statsLabel3: 'ZERO',
      statsSub3: 'Lazy workout sessions and excuses tolerated!',
    },
    classes: {
      badge: '🏋️‍♀️ Our Premium Core Splits',
      title1: 'DISCOVER YOUR',
      title2: 'ELITE PROGRAM',
      subtitle: 'No matter what your current physical shape is, we host meticulously structured group training to push your biology to the limit.',
      catAll: 'Show All',
      catStrength: 'Hypertrophy Power',
      catCardio: 'Cardio Intervals',
      catCombat: 'Combat TaeBo',
      catAerobics: 'Group Aerobics',
      catWeightLoss: 'Power Weight Reducer',
      intensity: {
        all: 'All Levels',
        beginner: 'Beginner',
        intermediate: 'Intermediate',
        elite: 'Championship Level',
      },
      caloriesText: 'Kcal/Hour Burn',
      selectBtn: 'Claim Free Pass 🎫',
    },
    coach: {
      badge: '🧠 Dynamic Routine Planner',
      title1: 'BUILD YOUR',
      title2: 'FITNESS BLUEPRINT',
      desc: 'Pick your expertise level, primary fitness goal, and schedule frequency. Our custom matrix will formulate a personalized weekly routine.',
      levelLabel: 'Your current experience level:',
      levels: {
        beginner: 'Beginner (First month)',
        intermediate: 'Intermediate Gym Goer',
        elite: 'Hardcore Athlete (Beast Mode)',
      },
      goalLabel: 'Your primary physical goal:',
      freqLabel: 'Target frequency:',
      daysLabel: 'Days per Week',
      blueprintTitle: 'Official Champion Weightlifting Protocol 📜',
      targetFocus: 'Target Focus Zone',
      classRec: 'Recommended Class Session',
      duration: 'Duration',
      estBurn: 'Est. Calories Burned',
      downloadBtn: 'Download Blueprint 💾',
      printBtn: 'Print Hardcopy 🖨️',
      generateSuccess: '✅ Personal blueprint formulated successfully! Ready for checkout below.',
    },
    pricing: {
      badge: '💎 Honest Pricing (No Hidden Fees)',
      title1: 'MEMBERSHIP &',
      title2: 'ELITE COMMITTED PACKAGES',
      desc: 'Pick a plan that fits your physical ambition and budget. Start your epic transformation journey today.',
      monthly: 'Monthly Deal',
      yearly: 'Yearly Plan (Discounted)',
      saveBtn: 'Save 20% on Yearly Commitments 💰',
      monthlySuffix: 'ETB / Month',
      yearlySuffix: 'ETB / Year',
      popularBadge: '🔥 Popular Choice',
      actionBtn: 'Get VIP Pass 🚀',
    },
    locations: {
      badge: '📍 Our Addis Ababa Flagship',
      title1: 'WHERE TO FIND',
      title2: 'THE MEGENAGNA CLUB',
      desc: 'Located at Megenagna square Shola gebeya, near Sumeya Mosque (Addis Ababa). We offer extremely spacious, highly ventilated lifting floors, private parking, and luxury amenities.',
      openNow: '● CURRENTLY OPEN NOW',
      closedNow: '● CLOSED NOW',
      hqLabel: 'ADDIS ABABA MAIN COMMAND HQ',
      weekdays: 'Mon - Fri (Weekdays)',
      saturday: 'Saturday',
      sunday: 'Sunday',
      amenitiesLabel: 'Premium Club Inclusions:',
      phoneLabel: 'HQ Reception Line 1:',
      ownerLabel: 'Administration Desk Direct:',
      hotlineLabel: '24/7 Member Emergency Help Desk',
      routeMaps: 'Open Map Navigation 🗺️',
    },
    testimonials: {
      badge: '👑 True Success Stories',
      title1: 'Our Members\' Real',
      title2: 'TRANSFORMATION RECORDS',
      desc: 'Real testimonies from dedicated athletes who traded excuses for pure heavy iron and built admirable physical records.',
    },
    faq: {
      badge: '🤔 Dynamic FAQ Center',
      title1: 'Have Questions? Find',
      title2: 'YOUR ANSWERS HERE',
      desc: 'Got questions about coaches, timing, classes, and facilities? Read our witty, honest answers below.',
    },
    finalCta: {
      title: 'TODAY IS THE DAY YOU END THE SNOOZE LOOP!',
      desc: 'Claim your complimentary guest pass right now and meet us tomorrow morning at 5:00 AM at Megenagna. Your heavy dumbbells and high-beat Phonk tracks are prepped!',
      joinBtn: 'Generate Free Entry Pass 🎟️',
      callUs: 'Hotline: 0929485202 / 0953556666',
      hourBadge: '🔥 Free pass valid for this week only',
    },
    booking: {
      title: 'Free VIP Entry Registration',
      subtitle: 'Champion Gym Megenagna Branch - Addis Ababa',
      nameLabel: 'Your full name',
      phoneLabel: 'Your phone number',
      phonePlace: 'e.g. 0912345678',
      branchLabel: 'Preferred Branch',
      classLabel: 'Primary physical focus',
      planLabel: 'Associated package membership',
      termsText: 'By submitting this request, you agree to respect our club rules, re-rack your weights properly after use, and treat fellow athletes with professional dignity.',
      submitBtn: 'Fulfill My VIP Day Pass 🎫',
      processing: 'Assembling your high-access ticket...',
      successTitle: '🎉 Perfect! Your VIP Day Pass is Secured!',
      successDesc: 'An official gym counselor will contact you via phone within 24 hours to book your physical trial. Download your digital ticket below.',
      refLabel: 'Ticket ID (Pass Ref)',
      targetProgram: 'Target Program',
      selectedTier: 'Assigned Tier',
      branchLoc: 'Gym Location',
      downloadPass: 'Download Ticket 💾',
      shareDetails: 'Share via Link 🔗',
      doneBtn: 'Sweet, thanks! 👋',
    },
    footer: {
      tagline: 'Champion Gym & Fitness - Addis Ababa\'s absolute cultural hub of core strength, high speed energy, and pure physical beauty.',
      quickLinks: 'Useful Navigation',
      schedule: 'Operating Hours: Weekdays (5:00 AM - 10:00 PM) | Saturdays (6:00 AM - 8:00 PM) | Sundays (8:00 AM - 6:00 PM)',
      copyright: '© 2026 Champion Gym Megenagna. All rights reserved.',
      createdLove: 'Crafted with premium energy in Addis Ababa 🇪🇹✊',
    },
  },
};
