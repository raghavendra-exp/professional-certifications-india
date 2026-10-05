import React, { useState } from 'react';
import { 
  Award, 
  HelpCircle, 
  Clock, 
  Layers, 
  ArrowRight, 
  CheckCircle, 
  Sparkles, 
  FileText, 
  TrendingUp, 
  ShieldCheck, 
  Compass, 
  Scale, 
  BookOpen, 
  Calculator,
  ChevronRight,
  Search
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { certificationsData } from '../data/certifications';
import { regulatoryAndCurrentAffairsData } from '../data/updatesAndNotifications';
import type { CategoryType } from '../types';

interface DashboardProps {
  onNavigate: (view: string, id?: string) => void;
  onOpenSearch: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate, onOpenSearch }) => {
  const { isHindi } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories: { id: string; label: string; hindiLabel: string }[] = [
    { id: 'ALL', label: 'All Certifications', hindiLabel: 'सभी प्रमाणपत्र' },
    { id: 'ACCOUNTING_FINANCE', label: 'Accounting & Finance', hindiLabel: 'लेखांकन एवं वित्त' },
    { id: 'COMPANY_SECRETARIAL', label: 'Company Secretarial', hindiLabel: 'कंपनी सेक्रेटरी' },
    { id: 'COST_MANAGEMENT_ACCOUNTING', label: 'Cost & Management Accounting', hindiLabel: 'लागत लेखांकन' },
    { id: 'INVESTMENT', label: 'Investment & Equity', hindiLabel: 'निवेश एवं इक्विटी' },
    { id: 'RISK_MANAGEMENT', label: 'Risk Management', hindiLabel: 'जोखिम प्रबंधन' },
    { id: 'BANKING', label: 'Banking (IIBF)', hindiLabel: 'बैंकिंग (आईआईबीएफ)' },
    { id: 'SECURITIES_CAPITAL_MARKETS', label: 'Securities (NISM)', hindiLabel: 'प्रतिभूतियां (एनआईएसएम)' },
    { id: 'CYBERSECURITY', label: 'IS Audit & Cyber', hindiLabel: 'साइबर सुरक्षा एवं ऑडिट' },
    { id: 'INFORMATION_TECHNOLOGY', label: 'Cloud & Architecture', hindiLabel: 'क्लाउड एवं आईटी' },
    { id: 'PROJECT_MANAGEMENT', label: 'Project Management', hindiLabel: 'परियोजना प्रबंधन' },
    { id: 'STATUTORY_REGULATORY', label: 'Statutory Regulatory Exams', hindiLabel: 'सांविधिक विनियामक' },
  ];

  const filteredCerts = selectedCategory === 'ALL'
    ? certificationsData
    : certificationsData.filter(c => c.category === selectedCategory);

  return (
    <div className="space-y-10 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white p-6 sm:p-10 lg:p-12 shadow-2xl border border-blue-900/40">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-20 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>
              {isHindi
                ? 'भारत का एकीकृत व्यावसायिक प्रमाणन एवं सांविधिक परीक्षा मंच'
                : 'India’s Master Professional Certification & Statutory Exam Ecosystem'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            {isHindi ? (
              <>
                सीए • सीएस • सीएमए • सीएफए • एफआरएम • सिसा • बैंकिंग{' '}
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">
                  मास्टर तैयारी मंच
                </span>
              </>
            ) : (
              <>
                Master Every Professional Certification & Statutory Exam with{' '}
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">
                  Official Precision
                </span>
              </>
            )}
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-3xl leading-relaxed">
            {isHindi
              ? 'आधिकारिक आईसीएआई, आईसीएसआई, आईसीएमएआई, सीएफए, गारप, इसाका, आईआईबीएफ, सेबी एवं आरबीआई नियमों, 1,000+ सत्यापित बहुविकल्पीय प्रश्नों, वास्तविक परीक्षा टाइमर मॉक टेस्ट, केस स्टडी लैब और व्यावहारिक कर व अनुपात सिमुलेटर के साथ पूर्ण तैयारी।'
              : 'Complete preparation powered by verified ICAI, ICSI, ICMAI, CFA Institute, GARP, ISACA, IIBF, SEBI & RBI statutory frameworks. Explore authentic syllabi, official study modules, 1,000+ practice questions, real exam mock tests, and practical tax & risk simulators.'}
          </p>

          {/* Quick Hero Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('practice_hub')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all hover:scale-102"
            >
              <HelpCircle className="w-4 h-4" />
              <span>{isHindi ? '1,000+ अभ्यास प्रश्न शुरू करें' : 'Start 1,000+ Question Practice'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('mock_test_hub')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-800/80 hover:bg-slate-700/80 text-white text-sm font-bold border border-slate-700 hover:border-slate-600 transition-all"
            >
              <Clock className="w-4 h-4 text-amber-400" />
              <span>{isHindi ? 'लाइव मॉक टेस्ट' : 'Full Official Mock Tests'}</span>
            </button>

            <button
              onClick={() => onNavigate('which_certification')}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-indigo-950/60 hover:bg-indigo-900/60 text-indigo-200 text-sm font-semibold border border-indigo-700/50 transition-all"
            >
              <Compass className="w-4 h-4 text-indigo-400" />
              <span>{isHindi ? 'मुझे कौन सा एग्जाम देना चाहिए?' : 'Which Certification Should I Take?'}</span>
            </button>
          </div>

          {/* Value Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/80 text-xs">
            <div>
              <span className="block font-bold text-lg text-white font-mono">1,000+</span>
              <span className="text-slate-400">{isHindi ? 'अभ्यास प्रश्न' : 'Practice Questions'}</span>
            </div>
            <div>
              <span className="block font-bold text-lg text-amber-400 font-mono">23+</span>
              <span className="text-slate-400">{isHindi ? 'व्यावसायिक श्रेणियां' : 'Master Categories'}</span>
            </div>
            <div>
              <span className="block font-bold text-lg text-emerald-400 font-mono">100%</span>
              <span className="text-slate-400">{isHindi ? 'कॉपीराइट-सुरक्षित डेटा' : 'Copyright-Safe Material'}</span>
            </div>
            <div>
              <span className="block font-bold text-lg text-blue-400 font-mono">2026/27</span>
              <span className="text-slate-400">{isHindi ? 'अद्यतन विनियामक नियम' : 'Current Active Rules'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory & Circulars Live Marquee Strip */}
      <section className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 shrink-0">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-200">
            {isHindi ? 'नवीनतम वैधानिक अपडेट:' : 'Latest Regulatory Updates:'}
          </span>
        </div>
        <div className="flex-1 text-xs text-slate-700 dark:text-slate-300 truncate">
          <span className="font-semibold text-slate-900 dark:text-slate-100">
            {regulatoryAndCurrentAffairsData[0].title}
          </span>
          <span className="mx-2 text-slate-400">•</span>
          <span>{regulatoryAndCurrentAffairsData[0].summary}</span>
        </div>
        <button
          onClick={() => onNavigate('regulatory_updates')}
          className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline shrink-0 flex items-center gap-1"
        >
          <span>{isHindi ? 'सभी अपडेट देखें' : 'View Tracker'}</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </section>

      {/* Interactive Tool Launchpads (Case Study Lab, Simulators, Statutes, Career) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
              {isHindi ? 'विशेषज्ञ तैयारी मॉड्यूल' : 'Specialized Preparation Engines'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {isHindi
                ? 'केस स्टडीज, व्यावहारिक वित्तीय व कर गणना, कानून संदर्भ और करियर मार्गदर्शक'
                : 'Case studies, financial calculators, statute libraries, and career roadmaps'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Practical Simulators */}
          <button
            onClick={() => onNavigate('practical_simulators')}
            className="flex flex-col p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all text-left group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
              <Calculator className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base group-hover:text-blue-600 transition-colors">
              {isHindi ? 'व्यावहारिक सिमुलेटर' : 'Practical Simulators'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex-1">
              {isHindi
                ? 'आयकर (115BAC), ड्यूपॉन्ट अनुपात, वैल्यू एट रिस्क (VaR) और कॉर्पोरेट प्रशासन कैलकुलेटर।'
                : 'Income Tax (Sec 115BAC), DuPont ROE ratios, Value at Risk (VaR), and Board Governance checkers.'}
            </p>
            <div className="mt-4 flex items-center text-xs font-semibold text-blue-600 dark:text-blue-400 gap-1">
              <span>{isHindi ? 'कैलकुलेटर खोलें' : 'Launch Simulators'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </button>

          {/* Card 2: Case Study Lab */}
          <button
            onClick={() => onNavigate('case_study_lab')}
            className="flex flex-col p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-lg transition-all text-left group"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base group-hover:text-indigo-600 transition-colors">
              {isHindi ? 'केस स्टडी लैब' : 'Case Study Lab'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex-1">
              {isHindi
                ? 'सीए फाइनल, सीएस, सीएमए और सिसा हेतु तथ्य, कानूनी विश्लेषण और आदर्श समाधान।'
                : 'Multi-disciplinary cases with facts, statutory analysis, applicable rules, and model answers.'}
            </p>
            <div className="mt-4 flex items-center text-xs font-semibold text-indigo-600 dark:text-indigo-400 gap-1">
              <span>{isHindi ? 'केस देखें' : 'Explore Cases'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </button>

          {/* Card 3: Law & Regulation Library */}
          <button
            onClick={() => onNavigate('statutes_library')}
            className="flex flex-col p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-purple-500 dark:hover:border-purple-500 hover:shadow-lg transition-all text-left group"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base group-hover:text-purple-600 transition-colors">
              {isHindi ? 'कानून एवं मानक पुस्तकालय' : 'Statute & Standards Library'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex-1">
              {isHindi
                ? 'कंपनी अधिनियम, आयकर, जीएसटी, सेबी एलओडीआर, आईबीसी और इंड एएस मानक।'
                : 'Companies Act, Income Tax, GST, SEBI LODR, IBC, Ind AS, and Standards on Auditing.'}
            </p>
            <div className="mt-4 flex items-center text-xs font-semibold text-purple-600 dark:text-purple-400 gap-1">
              <span>{isHindi ? 'संविधि देखें' : 'View Statutes'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </button>

          {/* Card 4: Career Explorer */}
          <button
            onClick={() => onNavigate('career_explorer')}
            className="flex flex-col p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-lg transition-all text-left group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base group-hover:text-emerald-600 transition-colors">
              {isHindi ? 'करियर मार्ग खोजक' : 'Career Progression Path'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex-1">
              {isHindi
                ? 'शुरुआती पदों से सीएफओ, सीआरओ, पार्टनर एवं सीआईएसओ बनने का संपूर्ण चरणबद्ध रोडमैप।'
                : 'Step-by-step roadmaps from trainee roles to CFO, CRO, Partner, and CISO leadership.'}
            </p>
            <div className="mt-4 flex items-center text-xs font-semibold text-emerald-600 dark:text-emerald-400 gap-1">
              <span>{isHindi ? 'रोडमैप देखें' : 'View Career Roadmaps'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </section>

      {/* Main Certifications Catalog Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
              {isHindi ? 'प्रमुख व्यावसायिक प्रमाणपत्र एवं परीक्षाएं' : 'Major Professional Certifications & Statutory Exams'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {isHindi
                ? 'प्रत्येक प्रमाणपत्र के आधिकारिक स्तर, पेपर, पात्रता, शुल्क और व्यावहारिक प्रशिक्षण का विवरण'
                : 'Authentic syllabus, eligibility, attempt limits, fee structures, and practical training'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('certification_comparison')}
              className="text-xs font-semibold px-3 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
            >
              {isHindi ? 'तुलना मैट्रिक्स देखें' : 'Compare Certifications'}
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {isHindi ? cat.hindiLabel : cat.label}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCerts.map(cert => (
            <div
              key={cert.id}
              className="flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs hover:shadow-md transition-all overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-5 pb-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-sm font-black text-white shrink-0 shadow-sm"
                      style={{ backgroundColor: cert.badgeColor }}
                    >
                      {cert.acronym}
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base leading-snug">
                        {isHindi ? cert.hindiName : cert.name}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                        {isHindi ? cert.hindiInstitute : cert.institute}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 shrink-0">
                    {cert.country}
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 line-clamp-2 leading-relaxed">
                  {isHindi ? cert.hindiTagline : cert.tagline}
                </p>
              </div>

              {/* Levels & Papers Summary */}
              <div className="px-5 py-2.5 bg-slate-50/60 dark:bg-slate-800/40 border-y border-slate-100 dark:border-slate-800/80 text-[11px] grid grid-cols-2 gap-2 text-slate-600 dark:text-slate-300">
                <div>
                  <span className="text-slate-400 block">{isHindi ? 'स्तर / चरण' : 'Levels / Stages'}:</span>
                  <span className="font-semibold">{cert.levels.length} {isHindi ? 'स्तर' : 'Levels'}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">{isHindi ? 'प्रैक्टिकल ट्रेनिंग' : 'Practical Training'}:</span>
                  <span className="font-semibold truncate block">
                    {cert.practicalTraining.required ? cert.practicalTraining.duration : 'Not required'}
                  </span>
                </div>
              </div>

              {/* Quick Tags */}
              <div className="p-5 pt-3 flex-1 flex flex-col justify-between space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {cert.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => onNavigate('certification_detail', cert.id)}
                    className="flex-1 py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold text-center transition-colors"
                  >
                    {isHindi ? 'विवरण देखें' : 'View Full Details'}
                  </button>
                  <button
                    onClick={() => onNavigate('practice_hub', cert.id)}
                    className="py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
                    title={isHindi ? 'अभ्यास शुरू करें' : 'Start Practice'}
                  >
                    <span>{isHindi ? 'अभ्यास' : 'Practice'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Zero-to-Certified Visual Roadmap (Section 53) */}
      <section className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold mb-2">
            <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
            <span>{isHindi ? 'व्यावसायिक यात्रा' : 'Master Preparation Journey'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold">
            {isHindi ? 'शून्य से प्रमाणित होने तक का संपूर्ण रोडमैप' : 'The Zero-to-Certified 14-Level Mastery Roadmap'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {isHindi
              ? 'करियर लक्ष्य से लेकर योग्यता, पंजीकरण, आधिकारिक सामग्री, मॉक टेस्ट, प्रशिक्षण एवं सदस्यता तक'
              : 'Every milestone from career discovery to exam pass, articleship/training, membership, and CPE maintenance'}
          </p>
        </div>

        {/* 14 Levels Flowchart Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 text-xs">
          {[
            { step: '0', title: 'Career Goal', hindi: 'करियर लक्ष्य' },
            { step: '1', title: 'Certification', hindi: 'प्रमाणपत्र चयन' },
            { step: '2', title: 'Eligibility', hindi: 'पात्रता सत्यापन' },
            { step: '3', title: 'Registration', hindi: 'पंजीकरण' },
            { step: '4', title: 'Syllabus Engine', hindi: 'पाठ्यक्रम' },
            { step: '5', title: 'Official BOS Books', hindi: 'आधिकारिक पुस्तकें' },
            { step: '6', title: 'Concepts & Laws', hindi: 'कानून एवं मानक' },
            { step: '7', title: 'Original Practice', hindi: 'मौलिक अभ्यास' },
            { step: '8', title: 'PYQ Validation', hindi: 'विगत वर्ष प्रश्न' },
            { step: '9', title: 'Mock Tests', hindi: 'मॉक टेस्ट' },
            { step: '10', title: 'Final Revision', hindi: 'अंतिम पुनरीक्षण' },
            { step: '11', title: 'Official Exam', hindi: 'मुख्य परीक्षा' },
            { step: '12', title: 'Practical Training', hindi: 'आर्टिकलशिप/प्रशिक्षण' },
            { step: '13', title: 'Membership / CPE', hindi: 'सदस्यता एवं नवीनीकरण' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 flex flex-col justify-between hover:border-blue-500/60 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-bold text-amber-400">L{item.step}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              </div>
              <p className="font-semibold text-slate-200 line-clamp-1">
                {isHindi ? item.hindi : item.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
