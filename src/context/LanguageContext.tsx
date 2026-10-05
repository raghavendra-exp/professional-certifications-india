import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isHindi: boolean;
}

const translations: Record<string, { en: string; hi: string }> = {
  // Brand & Nav
  platformTitle: {
    en: 'Professional Certifications & Statutory Exams India',
    hi: 'व्यावसायिक प्रमाणपत्र एवं सांविधिक परीक्षा भारत',
  },
  platformSubtitle: {
    en: 'Master Preparation Platform — CA • CS • CMA • CFA • ACCA • FRM • CISA • CPA • Actuarial • Banking • Insurance • NISM • Tax • Law • IT • Cyber • Statutory',
    hi: 'मास्टर तैयारी मंच — सीए • सीएस • सीएमए • सीएफए • एसीसीए • एफआरएम • सिसा • सीपीए • बीमांकिक • बैंकिंग • बीमा • सेबी • कर • विधि • आईटी • साइबर • सांविधिक',
  },
  home: { en: 'Home', hi: 'होम' },
  dashboard: { en: 'Dashboard', hi: 'डैशबोर्ड' },
  certifications: { en: 'Certifications', hi: 'प्रमाणपत्र' },
  practice: { en: 'Practice Hub', hi: 'अभ्यास केंद्र' },
  mockTests: { en: 'Mock Tests', hi: 'मॉक टेस्ट' },
  syllabus: { en: 'Syllabus Engine', hi: 'पाठ्यक्रम इंजन' },
  books: { en: 'Book Library', hi: 'पुस्तक पुस्तकालय' },
  officialMaterial: { en: 'Official Study Material', hi: 'आधिकारिक अध्ययन सामग्री' },
  statutes: { en: 'Law & Statutes', hi: 'कानून एवं संविधि' },
  standards: { en: 'Standards & Frameworks', hi: 'मानक एवं रूपरेखा' },
  caseStudies: { en: 'Case Study Lab', hi: 'केस स्टडी लैब' },
  simulators: { en: 'Practical Simulators', hi: 'व्यावहारिक सिमुलेटर' },
  currentAffairs: { en: 'Current Affairs', hi: 'समसामयिक मामले' },
  regulatoryUpdates: { en: 'Regulatory Updates', hi: 'नियामक अपडेट' },
  taxUpdates: { en: 'Tax Update Center', hi: 'कर अपडेट केंद्र' },
  whichCertification: { en: 'Which Certification Should I Take?', hi: 'मुझे कौन सा प्रमाणपत्र लेना चाहिए?' },
  careerPath: { en: 'Career Path Finder', hi: 'करियर मार्ग खोजक' },
  eligibilityChecker: { en: 'Eligibility Checker', hi: 'पात्रता जांचकर्ता' },
  comparison: { en: 'Certification Comparison', hi: 'प्रमाणपत्र तुलना' },
  studyPlanner: { en: 'Study Planner', hi: 'अध्ययन योजनाकार' },
  revisionFlashcards: { en: 'Revision & Flashcards', hi: 'पुनरीक्षण एवं फ्लैशकार्ड' },
  errorNotebook: { en: 'Error Notebook', hi: 'त्रुटि नोटबुक' },
  analytics: { en: 'Analytics', hi: 'विश्लेषण' },
  renewalCpe: { en: 'Renewal & CPE / CPD Tracker', hi: 'नवीनीकरण एवं सीपीई ट्रैकर' },
  profile: { en: 'My Portfolio', hi: 'मेरा पोर्टफोलियो' },
  searchPlaceholder: { en: 'Search certifications, papers, statutes, questions (Ctrl + K)...', hi: 'प्रमाणपत्र, प्रश्न, कानून, मानक खोजें (Ctrl + K)...' },
  darkMode: { en: 'Dark Mode', hi: 'डार्क मोड' },
  lightMode: { en: 'Light Mode', hi: 'लाइट मोड' },
  systemTheme: { en: 'System Theme', hi: 'सिस्टम थीम' },

  // Details Tabs
  overview: { en: 'Overview', hi: 'अवलोकन' },
  levelsAndPapers: { en: 'Levels & Papers', hi: 'स्तर एवं प्रश्नपत्र' },
  eligibilityAndRegistration: { en: 'Eligibility & Registration', hi: 'पात्रता एवं पंजीकरण' },
  feesAndCost: { en: 'Fees & Preparation Cost', hi: 'शुल्क एवं तैयारी लागत' },
  practicalTraining: { en: 'Practical Training / Articleship', hi: 'प्रैक्टिकल ट्रेनिंग / आर्टिकलशिप' },
  membershipRenewal: { en: 'Membership & Renewal (CPE)', hi: 'सदस्यता एवं नवीनीकरण (सीपीई)' },
  careerOutcomes: { en: 'Career Outcomes', hi: 'करियर परिणाम' },
  officialLinks: { en: 'Official Institute Links', hi: 'आधिकारिक संस्थान लिंक' },

  // Practice Modes
  quick10: { en: 'Quick 10 Questions', hi: 'त्वरित 10 प्रश्न' },
  standard25: { en: '25 Questions Drill', hi: '25 प्रश्न ड्रिल' },
  full50: { en: '50 Questions Practice', hi: '50 प्रश्न अभ्यास' },
  fullMock: { en: 'Full Official Pattern Mock', hi: 'पूर्ण आधिकारिक पैटर्न मॉक' },
  pyqMode: { en: 'PYQ & Sample Questions', hi: 'विगत वर्ष एवं नमूना प्रश्न' },
  adaptiveMode: { en: 'Adaptive Difficulty Test', hi: 'अनुकूली कठिनाई परीक्षा' },

  // Exam labels
  officialSample: { en: 'OFFICIAL SAMPLE QUESTION', hi: 'आधिकारिक नमूना प्रश्न' },
  verifiedPyq: { en: 'VERIFIED PYQ', hi: 'सत्यापित विगत वर्ष प्रश्न' },
  originalPractice: { en: 'ORIGINAL PRACTICE', hi: 'मौलिक अभ्यास प्रश्न' },
  pyqStyle: { en: 'PYQ-STYLE', hi: 'विगत वर्ष पैटर्न प्रश्न' },
  submitExam: { en: 'Submit Test', hi: 'टेस्ट सबमिट करें' },
  markForReview: { en: 'Mark for Review', hi: 'समीक्षा के लिए चिह्नित करें' },
  clearResponse: { en: 'Clear Response', hi: 'उत्तर साफ़ करें' },
  next: { en: 'Next', hi: 'अगला' },
  previous: { en: 'Previous', hi: 'पिछला' },
  timeRemaining: { en: 'Time Remaining', hi: 'शेष समय' },
  questionPalette: { en: 'Question Palette', hi: 'प्रश्न पटल' },
  answered: { en: 'Answered', hi: 'उत्तर दिया' },
  notAnswered: { en: 'Not Answered', hi: 'उत्तर नहीं दिया' },
  markedForReview: { en: 'Marked for Review', hi: 'समीक्षा हेतु' },
  notVisited: { en: 'Not Visited', hi: 'नहीं देखा' },
  negativeMarkingNotice: { en: 'Negative marking applies per question', hi: 'प्रति प्रश्न नकारात्मक अंकन लागू है' },
  noNegativeMarking: { en: 'No negative marking', hi: 'कोई नकारात्मक अंकन नहीं' },
  viewExplanation: { en: 'View Detailed Solution', hi: 'विस्तृत समाधान देखें' },
  addToErrorNotebook: { en: 'Saved to Error Notebook', hi: 'त्रुटि नोटबुक में सहेजा गया' },
  
  // Categories
  allCategories: { en: 'All Categories', hi: 'सभी श्रेणियां' },
  ACCOUNTING_FINANCE: { en: 'Accounting & Finance', hi: 'लेखांकन एवं वित्त' },
  COMPANY_SECRETARIAL: { en: 'Company Secretarial', hi: 'कंपनी सेक्रेटरी' },
  COST_MANAGEMENT_ACCOUNTING: { en: 'Cost & Management Accounting', hi: 'लागत एवं प्रबंधन लेखांकन' },
  AUDIT: { en: 'Audit & Assurance', hi: 'लेखापरीक्षा एवं आश्वासन' },
  TAXATION: { en: 'Taxation & GST', hi: 'कराधान एवं जीएसटी' },
  INVESTMENT: { en: 'Investment & Equity', hi: 'निवेश एवं इक्विटी' },
  RISK_MANAGEMENT: { en: 'Risk Management', hi: 'जोखिम प्रबंधन' },
  BANKING: { en: 'Banking Certifications', hi: 'बैंकिंग प्रमाणपत्र' },
  INSURANCE: { en: 'Insurance Qualifications', hi: 'बीमा योग्यताएं' },
  SECURITIES_CAPITAL_MARKETS: { en: 'Securities & Capital Markets', hi: 'प्रतिभूतियां एवं पूंजी बाजार' },
  ACTUARIAL: { en: 'Actuarial Science', hi: 'बीमांकिक विज्ञान' },
  INFORMATION_TECHNOLOGY: { en: 'Information Technology', hi: 'सूचना प्रौद्योगिकी' },
  CYBERSECURITY: { en: 'Cybersecurity', hi: 'साइबर सुरक्षा' },
  DATA_AI: { en: 'Data & Artificial Intelligence', hi: 'डेटा एवं कृत्रिम बुद्धिमत्ता' },
  PROJECT_MANAGEMENT: { en: 'Project Management', hi: 'परियोजना प्रबंधन' },
  HUMAN_RESOURCES: { en: 'Human Resources', hi: 'मानव संसाधन' },
  COMPLIANCE: { en: 'Compliance & Governance', hi: 'अनुपालन एवं कॉर्पोरेट प्रशासन' },
  LEGAL_CORPORATE_LAW: { en: 'Legal & Corporate Law', hi: 'विधि एवं कंपनी कानून' },
  STATUTORY_REGULATORY: { en: 'Statutory & Regulatory Exams', hi: 'सांविधिक एवं नियामक परीक्षाएं' },

  // Action Buttons
  startPractice: { en: 'Start Practice', hi: 'अभ्यास शुरू करें' },
  startMockTest: { en: 'Start Mock Test', hi: 'मॉक टेस्ट शुरू करें' },
  exploreSyllabus: { en: 'Explore Syllabus', hi: 'पाठ्यक्रम देखें' },
  viewNotification: { en: 'View Notification', hi: 'अधिसूचना देखें' },
  checkEligibility: { en: 'Check Eligibility', hi: 'पात्रता जांचें' },
  compareCertifications: { en: 'Compare Now', hi: 'तुलना करें' },
  downloadPlan: { en: 'Download Plan', hi: 'योजना डाउनलोड करें' },
  exportProfile: { en: 'Export Portfolio', hi: 'पोर्टफोलियो निर्यात करें' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('pca_lang');
    return (saved === 'hi' || saved === 'en') ? saved : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('pca_lang', lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][language] || translations[key].en || key;
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isHindi: language === 'hi' }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
