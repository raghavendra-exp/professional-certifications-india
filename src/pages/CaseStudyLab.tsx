import React, { useState } from 'react';
import { Briefcase, CheckCircle2, ChevronRight, Scale, BookOpen, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { caseStudiesData } from '../data/caseStudies';

interface CaseStudyLabProps {
  onNavigate: (view: string, id?: string) => void;
}

export const CaseStudyLab: React.FC<CaseStudyLabProps> = ({ onNavigate }) => {
  const { isHindi } = useLanguage();
  const [selectedCaseId, setSelectedCaseId] = useState<string>(caseStudiesData[0].id);
  const [showModelAnswer, setShowModelAnswer] = useState<boolean>(false);

  const activeCase = caseStudiesData.find(c => c.id === selectedCaseId) || caseStudiesData[0];

  return (
    <div className="space-y-8 pb-16">
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          <Briefcase className="w-4 h-4" />
          <span>{isHindi ? 'व्यावहारिक विश्लेषण मंच' : 'Case Study Simulation Lab'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
          {isHindi ? 'वास्तविक कॉर्पोरेट केस स्टडी अभ्यास' : 'Real-World Case Study Practicum'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed">
          {isHindi
            ? 'सीए फाइनल, सीएस प्रोफेशनल, सीएमए, सीएफए और सिसा परीक्षाओं के लिए तथ्य, विधिक विश्लेषण, लागू कानून/मानक एवं मॉडल उत्तर।'
            : 'Master descriptive and case-vignette examinations with comprehensive fact patterns, statutory issue spotting, applicable standards, and model answers.'}
        </p>

        {/* Case Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pt-3 border-t border-slate-100 dark:border-slate-800 scrollbar-thin">
          {caseStudiesData.map(c => (
            <button
              key={c.id}
              onClick={() => {
                setSelectedCaseId(c.id);
                setShowModelAnswer(false);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                selectedCaseId === c.id
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {c.level}: {c.certificationId.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Case Details Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-5 shadow-xs">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase text-indigo-600 dark:text-indigo-400 font-mono">
                {activeCase.level} • {activeCase.paper}
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
                {isHindi ? activeCase.hindiTitle : activeCase.title}
              </h2>
            </div>

            {/* Facts Pattern */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {isHindi ? 'केस के तथ्य (Facts of the Case)' : 'Facts of the Case'}
              </h3>
              <div className="space-y-2 bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {(isHindi && activeCase.hindiFacts ? activeCase.hindiFacts : activeCase.facts).map((fact, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="font-bold text-indigo-500">•</span>
                    <span>{fact}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Question */}
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-xs sm:text-sm text-amber-900 dark:text-amber-200 space-y-1">
              <strong className="block text-amber-800 dark:text-amber-300 font-bold uppercase tracking-wide text-[11px]">
                {isHindi ? 'केस प्रश्न' : 'Examination Question'}:
              </strong>
              <p className="leading-relaxed">
                {isHindi && activeCase.hindiQuestion ? activeCase.hindiQuestion : activeCase.question}
              </p>
            </div>

            {/* Model Answer Toggle */}
            <div className="pt-2">
              <button
                onClick={() => setShowModelAnswer(!showModelAnswer)}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
              >
                {showModelAnswer ? (isHindi ? 'मॉडल उत्तर छिपाएं' : 'Hide Model Answer') : (isHindi ? 'मॉडल उत्तर एवं विश्लेषण देखें' : 'Reveal Model Answer & Analysis')}
              </button>
            </div>

            {/* Revealed Answer */}
            {showModelAnswer && (
              <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800 animate-fadeIn">
                <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl space-y-2 text-xs sm:text-sm">
                  <h4 className="font-bold text-indigo-600 dark:text-indigo-400 uppercase text-xs">
                    {isHindi ? 'विधिक एवं मानक विश्लेषण' : 'Statutory & Conceptual Analysis'}
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                    {isHindi && activeCase.hindiAnalysis ? activeCase.hindiAnalysis : activeCase.analysis}
                  </p>
                </div>

                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40 rounded-xl space-y-2 text-xs sm:text-sm">
                  <h4 className="font-bold text-emerald-800 dark:text-emerald-300 uppercase text-xs flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{isHindi ? 'आधिकारिक मॉडल उत्तर' : 'Authoritative Model Answer'}</span>
                  </h4>
                  <p className="text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-line">
                    {isHindi && activeCase.hindiModelAnswer ? activeCase.hindiModelAnswer : activeCase.modelAnswer}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Applicable Standards */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-3">
            <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Scale className="w-4 h-4 text-purple-600" />
              <span>{isHindi ? 'लागू कानून एवं मानक' : 'Applicable Standards & Laws'}</span>
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 bg-purple-50 dark:bg-purple-950/30 p-3 rounded-xl border border-purple-200 dark:border-purple-900/40 font-mono">
              {activeCase.applicableRuleOrStandard}
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-3">
            <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">
              {isHindi ? 'केस स्टडी लेखन रणनीति' : 'Exam Presentation Tips'}
            </h4>
            <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2 list-disc pl-4">
              <li>{isHindi ? 'सर्वप्रथम लागू कानून/मानक का नाम और धारा स्पष्ट उद्धृत करें।' : 'Explicitly cite the relevant section of the statute or standard (e.g. Ind AS 115 Step 5).'}</li>
              <li>{isHindi ? 'कानूनी प्रावधानों के साथ केस के तथ्यों का बिंदुवार मिलान करें।' : 'Correlate given facts step-by-step with the statutory requirements.'}</li>
              <li>{isHindi ? 'अंतिम पैराग्राफ में सुस्पष्ट निष्कर्ष या सिफारिश लिखें।' : 'Formulate a crisp conclusion or professional recommendation in the final paragraph.'}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
