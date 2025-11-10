import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Load translations statically with explicit typing
const enCommon = {
  "brand": "BUETian Science",
  "tagline": "Learning Made Simple",
  "coachingCenter": "Coaching Center",
  "nav": {
    "home": "Home",
    "about": "About Us",
    "courses": "Courses & Programs",
    "testimonials": "Testimonials",
    "contact": "Contact Us",
    "faq": "FAQ",
    "blog": "Blog & Resources"
  },
  "cta": {
    "enrollNow": "Enroll Now",
    "joinNow": "Join Now",
    "seeCourses": "See Courses",
    "callNow": "Call Now",
    "whatsapp": "Chat on WhatsApp",
    "getDirections": "Get Directions"
  },
  "hero": {
    "headline": "For students aiming for strong conceptual mastery and who prefer understanding deeply instead of just memorizing.",
    "chips": ["#Personal Care", "#Mock Tests", "#Increase Analytical Skills"]
  },
  "home": {
    "valueTiles": {
      "buetianTeachers": {
        "title": "BUETian Teachers",
        "description": "Learn from experienced BUET graduates"
      },
      "conceptFirst": {
        "title": "Concept First",
        "description": "Deep understanding over rote memorization"
      },
      "mockTests": {
        "title": "Regular Mock Tests",
        "description": "Frequent assessments and feedback"
      },
      "smallBatches": {
        "title": "Small Batches",
        "description": "Personal attention for every student"
      }
    }
  },
  "about": {
    "heading": "About Us",
    "lead": "Expert coaching by BUETian teachers for higher-class science students.",
    "description": "BUETian Science is a specialized coaching center run by BUET teachers, designed exclusively for science students. We focus on building strong concepts, improving problem-solving abilities, and developing analytical thinking—from basics to advanced problems.",
    "benefits": [
      "Build strong concepts",
      "Improve problem-solving skills",
      "Develop analytical thinking",
      "From basics to advanced problems"
    ]
  },
  "courses": {
    "heading": "Courses & Programs",
    "subjects": ["Physics", "Chemistry", "Mathematics"],
    "levels": "Class 8 to Intermediate First Year",
    "track": ["Concept → Practice", "Mock Exams → Feedback"],
    "info": "Regular tests & mock exams with feedback",
    "foundation": {
      "title": "Foundation",
      "description": "Building strong fundamentals and basic concepts"
    },
    "advanced": {
      "title": "Advanced",
      "description": "Complex problems and higher-level understanding"
    },
    "examPrep": {
      "title": "Exam Prep",
      "description": "Mock tests and exam-focused practice"
    }
  },
  "testimonials": {
    "heading": "What Students Say",
    "subheading": "Success Stories from Our Students",
    "studentsMentored": "Students Mentored"
  },
  "contact": {
    "heading": "Get in Touch",
    "subheading": "Ready to start your journey? Contact us today!",
    "addressLabel": "Address",
    "addressValue": "48/48/2, Moneshwar Road, Hazaribagh (Beside Bitobi Furniture)",
    "phoneLabel": "Phone",
    "phoneValue": "+8801790394788",
    "whatsappMessage": "I want to be admitted in Buetian Science"
  },
  "faq": {
    "heading": "Frequently Asked Questions",
    "questions": {
      "whoTeaches": {
        "q": "Who teaches the classes?",
        "a": "All classes are taught by BUETian teachers with strong subject expertise and experience in coaching science students."
      },
      "mockTests": {
        "q": "Do you run mock tests?",
        "a": "Yes—we conduct regular tests, mock exams, and provide detailed feedback to track progress."
      },
      "batchSize": {
        "q": "What is the batch size?",
        "a": "We maintain small batch sizes to ensure personal attention for every student."
      },
      "levelsCovered": {
        "q": "What levels do you cover?",
        "a": "We teach students from Class 8 through Intermediate First Year (HSC First Year)."
      },
      "subjects": {
        "q": "Which subjects are taught?",
        "a": "We specialize in Physics, Chemistry, and Mathematics for science students."
      }
    }
  },
  "blog": {
    "heading": "Blog & Resources",
    "subheading": "Study Tips, Insights, and Educational Content",
    "readTime": "min read",
    "studyTip": "Study Tip"
  },
  "footer": {
    "description": "Expert science coaching by BUETian teachers. Building strong concepts and analytical skills.",
    "quickLinks": "Quick Links",
    "contactInfo": "Contact Information",
    "followUs": "Follow Us",
    "copyright": "© 2025 BUETian Science. All rights reserved."
  }
};

const bnCommon = {
  "brand": "বুয়েটিয়ান সায়েন্স",
  "tagline": "লার্নিং মেড সিম্পল",
  "coachingCenter": "কোচিং সেন্টার",
  "nav": {
    "home": "হোম",
    "about": "আমাদের সম্পর্কে",
    "courses": "কোর্স ও প্রোগ্রাম",
    "testimonials": "রিভিউ",
    "contact": "যোগাযোগ",
    "faq": "প্রশ্নোত্তর",
    "blog": "ব্লগ ও রিসোর্স"
  },
  "cta": {
    "enrollNow": "ভর্তি হোন",
    "joinNow": "যোগ দিন",
    "seeCourses": "কোর্স দেখুন",
    "callNow": "কল করুন",
    "whatsapp": "হোয়াটসঅ্যাপে চ্যাট করুন",
    "getDirections": "দিকনির্দেশনা পান"
  },
  "hero": {
    "headline": "যারা মুখস্থ নয়, গভীরভাবে বুঝে শক্ত ধারণা গড়তে চায়—তাদের জন্য।",
    "chips": ["#ব্যক্তিগত যত্ন", "#মক টেস্ট", "#বিশ্লেষণী দক্ষতা বৃদ্ধি"]
  },
  "home": {
    "valueTiles": {
      "buetianTeachers": {
        "title": "বুয়েটিয়ান শিক্ষক",
        "description": "অভিজ্ঞ বুয়েট গ্র্যাজুয়েটদের কাছে শিখুন"
      },
      "conceptFirst": {
        "title": "ধারণা প্রথম",
        "description": "মুখস্থের পরিবর্তে গভীর বোঝাপড়া"
      },
      "mockTests": {
        "title": "নিয়মিত মক টেস্ট",
        "description": "ঘন ঘন মূল্যায়ন এবং ফিডব্যাক"
      },
      "smallBatches": {
        "title": "ছোট ব্যাচ",
        "description": "প্রতিটি শিক্ষার্থীর জন্য ব্যক্তিগত মনোযোগ"
      }
    }
  },
  "about": {
    "heading": "আমাদের সম্পর্কে",
    "lead": "বুয়েটিয়ান শিক্ষকদের দ্বারা উচ্চশ্রেণীর বিজ্ঞান শিক্ষার্থীদের জন্য বিশেষ কোচিং।",
    "description": "বুয়েটিয়ান সায়েন্স একটি বিশেষায়িত কোচিং সেন্টার যা বুয়েট শিক্ষকদের দ্বারা পরিচালিত, বিশেষভাবে বিজ্ঞান শিক্ষার্থীদের জন্য ডিজাইন করা। আমরা শক্তিশালী ধারণা তৈরি, সমস্যা সমাধান দক্ষতা উন্নত করা এবং বিশ্লেষণী চিন্তাধারা বিকাশের উপর ফোকাস করি—বেসিক থেকে অ্যাডভান্সড সমস্যা পর্যন্ত।",
    "benefits": [
      "শক্তিশালী ধারণা তৈরি",
      "সমস্যা সমাধান দক্ষতা বৃদ্ধি",
      "বিশ্লেষণী চিন্তাধারা উন্নয়ন",
      "বেসিক থেকে অ্যাডভান্সড পর্যন্ত"
    ]
  },
  "courses": {
    "heading": "কোর্স ও প্রোগ্রাম",
    "subjects": ["ফিজিক্স", "কেমিস্ট্রি", "ম্যাথমেটিক্স"],
    "levels": "ক্লাস ৮ থেকে ইন্টারমিডিয়েট প্রথম বর্ষ",
    "track": ["ধারণা → অনুশীলন", "মক পরীক্ষা → ফিডব্যাক"],
    "info": "নিয়মিত পরীক্ষা ও মক পরীক্ষা সহ ফিডব্যাক",
    "foundation": {
      "title": "ফাউন্ডেশন",
      "description": "শক্তিশালী মূলনীতি এবং মৌলিক ধারণা তৈরি"
    },
    "advanced": {
      "title": "অ্যাডভান্সড",
      "description": "জটিল সমস্যা এবং উচ্চতর স্তরের বোঝাপড়া"
    },
    "examPrep": {
      "title": "পরীক্ষা প্রস্তুতি",
      "description": "মক টেস্ট এবং পরীক্ষা-ভিত্তিক অনুশীলন"
    }
  },
  "testimonials": {
    "heading": "শিক্ষার্থীরা কী বলে",
    "subheading": "আমাদের শিক্ষার্থীদের সফলতার গল্প",
    "studentsMentored": "শিক্ষার্থীদের পরামর্শ দেওয়া হয়েছে"
  },
  "contact": {
    "heading": "যোগাযোগ করুন",
    "subheading": "আপনার যাত্রা শুরু করতে প্রস্তুত? আজই যোগাযোগ করুন!",
    "addressLabel": "ঠিকানা",
    "addressValue": "৪৮/৪৮/২, মনেশ্বর রোড, হাজারীবাগ (বিটোবি ফার্নিচারের পাশে)",
    "phoneLabel": "ফোন",
    "phoneValue": "+৮৮০১৭৯০৩৯৪৭৮৮",
    "whatsappMessage": "আমি বুয়েটিয়ান সায়েন্সে ভর্তি হতে চাই"
  },
  "faq": {
    "heading": "সাধারণ প্রশ্নাবলী",
    "questions": {
      "whoTeaches": {
        "q": "ক্লাস কারা নেয়?",
        "a": "সকল ক্লাস বুয়েটিয়ান শিক্ষকদের দ্বারা পরিচালিত হয় যাদের বিষয় দক্ষতা এবং বিজ্ঞান শিক্ষার্থী কোচিংয়ে অভিজ্ঞতা রয়েছে।"
      },
      "mockTests": {
        "q": "আপনারা কি মক টেস্ট নেন?",
        "a": "হ্যাঁ—আমরা নিয়মিত পরীক্ষা, মক পরীক্ষা পরিচালনা করি এবং অগ্রগতি ট্র্যাক করতে বিস্তারিত ফিডব্যাক প্রদান করি।"
      },
      "batchSize": {
        "q": "ব্যাচ সাইজ কত?",
        "a": "আমরা প্রতিটি শিক্ষার্থীর জন্য ব্যক্তিগত মনোযোগ নিশ্চিত করতে ছোট ব্যাচ সাইজ বজায় রাখি।"
      },
      "levelsCovered": {
        "q": "আপনারা কোন লেভেল কভার করেন?",
        "a": "আমরা ক্লাস ৮ থেকে ইন্টারমিডিয়েট প্রথম বর্ষ (এইচএসসি প্রথম বর্ষ) পর্যন্ত শিক্ষার্থীদের পড়াই।"
      },
      "subjects": {
        "q": "কোন বিষয়গুলো পড়ানো হয়?",
        "a": "আমরা বিজ্ঞান শিক্ষার্থীদের জন্য ফিজিক্স, কেমিস্ট্রি এবং ম্যাথমেটিক্সে বিশেষজ্ঞ।"
      }
    }
  },
  "blog": {
    "heading": "ব্লগ ও রিসোর্স",
    "subheading": "পড়াশোনার টিপস, অন্তর্দৃষ্টি এবং শিক্ষামূলক কন্টেন্ট",
    "readTime": "মিনিট পড়ুন",
    "studyTip": "স্টাডি টিপ"
  },
  "footer": {
    "description": "বুয়েটিয়ান শিক্ষকদের দ্বারা বিশেষজ্ঞ বিজ্ঞান কোচিং। শক্তিশালী ধারণা এবং বিশ্লেষণী দক্ষতা তৈরি।",
    "quickLinks": "দ্রুত লিংক",
    "contactInfo": "যোগাযোগের তথ্য",
    "followUs": "আমাদের অনুসরণ করুন",
    "copyright": "© ২০২৫ বুয়েটিয়ান সায়েন্স। সর্বস্বত্ব সংরক্ষিত।"
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: { common: enCommon },
      bn: { common: bnCommon }
    },
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupQuerystring: 'lang'
    }
  });

export default i18n;

