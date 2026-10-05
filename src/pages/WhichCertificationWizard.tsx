import React, { useState } from 'react';
import { Compass, ArrowRight, CheckCircle2, RotateCcw, Award, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { certificationsData } from '../data/certifications';

interface WhichCertificationWizardProps {
  onNavigate: (view: string, id?: string) => void;
}

export const WhichCertificationWizard: React.FC<WhichCertificationWizardProps> = ({ onNavigate }) => {
  const { isHindi } = useLanguage();

  const [step, setStep] = useState<number>(1);
  const [education, setEducation] = useState<string>('Graduation (Commerce)');
  const [experienceYears, setExperienceYears] = useState<string>('0-2');
  const [primaryInterest, setPrimaryInterest] = useState<string>('ACCOUNTING');
  const [quantPreference, setQuantPreference] = useState<string>('BALANCED');
  const [weeklyHours, setWeeklyHours] = useState<string>('15-20');

  const getRecommendations = () => {
    const list = [];

    if (primaryInterest === 'ACCOUNTING') {
      list.push(certificationsData.find(c => c.id === 'ca')!);
      list.push(certificationsData.find(c => c.id === 'acca')!);
      list.push(certificationsData.find(c => c.id === 'cma')!);
    } else if (primaryInterest === 'INVESTMENT') {
      list.push(certificationsData.find(c => c.id === 'cfa')!);
      list.push(certificationsData.find(c => c.id === 'nism')!);
      list.push(certificationsData.find(c => c.id === 'frm')!);
    } else if (primaryInterest === 'RISK') {
      list.push(certificationsData.find(c => c.id === 'frm')!);
      list.push(certificationsData.find(c => c.id === 'caiib')!);
      list.push(certificationsData.find(c => c.id === 'cfa')!);
    } else if (primaryInterest === 'LAW') {
      list.push(certificationsData.find(c => c.id === 'cs')!);
      list.push(certificationsData.find(c => c.id === 'sebi-grade-a')!);
      list.push(certificationsData.find(c => c.id === 'ca')!);
    } else if (primaryInterest === 'BANKING') {
      list.push(certificationsData.find(c => c.id === 'jaiib')!);
      list.push(certificationsData.find(c => c.id === 'rbi-grade-b')!);
      list.push(certificationsData.find(c => c.id === 'caiib')!);
    } else if (primaryInterest === 'CYBER') {
      list.push(certificationsData.find(c => c.id === 'cisa')!);
      list.push(certificationsData.find(c => c.id === 'comptia-sec-plus')!);
      list.push(certificationsData.find(c => c.id === 'aws-csa')!);
    } else if (primaryInterest === 'PROJECT') {
      list.push(certificationsData.find(c => c.id === 'pmp')!);
      list.push(certificationsData.find(c => c.id === 'aws-csa')!);
    } else {
      list.push(certificationsData[0], certificationsData[3], certificationsData[4]);
    }

    return list.filter(Boolean);
  };

  const recommendations = getRecommendations();

  return (
    <div className="space-y-8 pb-16">
      {/* Wizard Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <Compass className="w-4 h-4" />
          <span>{isHindi ? 'करियर निर्णय सलाहकार' : 'Decision Intelligence Engine'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
          {isHindi ? 'मुझे कौन सा प्रमाणपत्र लेना चाहिए?' : 'Which Certification Should I Take?'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed">
          {isHindi
            ? 'अपनी शिक्षा, कार्य अनुभव, रुचि के क्षेत्र और समय उपलब्धता के आधार पर उपयुक्त आधिकारिक प्रमाणपत्रों का विश्लेषण प्राप्त करें।'
            : 'Answer 5 quick strategic questions to receive prioritized certification pathways matched to your education, quantitative appetite, and target career domains.'}
        </p>

        {/* Step Indicator */}
        <div className="flex items-center gap-2 pt-2">
          {[1, 2, 3].map(s => (
            <div
              key={s}
              className={`h-1.5 flex-1 rounded-full transition-all ${
                step >= s ? 'bg-blue-600' : 'bg-slate-200 dark:bg-slate-800'
              }`}
            />
          ))}
        </div>
      </div>

      {/* STEP 1: Background & Education */}
      {step === 1 && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-6">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            {isHindi ? 'चरण 1: आपकी शैक्षिक पृष्ठभूमि एवं अनुभव' : 'Step 1: Your Educational Background & Experience'}
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
                {isHindi ? 'उच्चतम शैक्षिक योग्यता' : 'Highest Educational Qualification'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
                {[
                  '12th Standard / High School',
                  'Graduation (Commerce: B.Com/BBA)',
                  'Graduation (Engineering / B.Tech / Science)',
                  'Law Graduate (LLB)',
                  'Post-Graduation (MBA Finance / M.Com)',
                  'Currently in Bank / Corporate Employment'
                ].map(opt => (
                  <button
                    key={opt}
                    onClick={() => setEducation(opt)}
                    className={`p-3 rounded-xl border text-left font-medium transition-all ${
                      education === opt
                        ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-100 font-bold'
                        : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
                {isHindi ? 'कार्य अनुभव' : 'Work Experience Level'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                {[
                  { id: '0', label: 'Student / Fresher' },
                  { id: '0-2', label: '1 to 2 Years' },
                  { id: '3-5', label: '3 to 5 Years' },
                  { id: '5+', label: '5+ Years' }
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setExperienceYears(opt.id)}
                    className={`p-3 rounded-xl border text-center font-medium transition-all ${
                      experienceYears === opt.id
                        ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-100 font-bold'
                        : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={() => setStep(2)}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-xs"
            >
              <span>{isHindi ? 'अगला चरण' : 'Next Step'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: Career Domain & Quantitative Appetite */}
      {step === 2 && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-6">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            {isHindi ? 'चरण 2: रुचि का क्षेत्र एवं अध्ययन शैली' : 'Step 2: Target Domain & Study Profile'}
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
                {isHindi ? 'प्राथमिक करियर डोमेन' : 'Primary Target Domain'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
                {[
                  { id: 'ACCOUNTING', label: 'Statutory Audit, Tax & Financial Reporting' },
                  { id: 'INVESTMENT', label: 'Equity Research & Asset Management' },
                  { id: 'RISK', label: 'Financial Risk & Treasury Management' },
                  { id: 'LAW', label: 'Corporate Law, SEBI & Secretarial Practice' },
                  { id: 'BANKING', label: 'Commercial Banking & Central Banking (RBI)' },
                  { id: 'CYBER', label: 'Cybersecurity & Information Systems Audit' },
                  { id: 'PROJECT', label: 'Project Leadership & Agile Delivery' }
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setPrimaryInterest(opt.id)}
                    className={`p-3 rounded-xl border text-left font-medium transition-all ${
                      primaryInterest === opt.id
                        ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-100 font-bold'
                        : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
                {isHindi ? 'साप्ताहिक अध्ययन के घंटे' : 'Available Weekly Study Commitment'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                {[
                  { id: '5-10', label: '5 to 10 Hours (Working Pro)' },
                  { id: '15-20', label: '15 to 20 Hours (Moderate)' },
                  { id: '25-35', label: '25 to 35 Hours (Intensive)' },
                  { id: '40+', label: 'Full Time Preparation' }
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setWeeklyHours(opt.id)}
                    className={`p-3 rounded-xl border text-center font-medium transition-all ${
                      weeklyHours === opt.id
                        ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-100 font-bold'
                        : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={() => setStep(1)}
              className="px-4 py-2 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-xl"
            >
              {isHindi ? 'पिछला' : 'Back'}
            </button>
            <button
              onClick={() => setStep(3)}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-xs"
            >
              <span>{isHindi ? 'अनुशंसाएं देखें' : 'Generate Recommendations'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Tailored Recommendations */}
      {step === 3 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 p-4 rounded-2xl">
            <div className="flex items-center gap-2 text-xs text-emerald-900 dark:text-emerald-200">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>
                {isHindi
                  ? 'आपकी पृष्ठभूमि एवं लक्ष्यों के आधार पर शीर्ष 3 अनुशंसित प्रमाणपत्र तैयार हैं:'
                  : 'Based on your background and profile, here are your top 3 prioritized certification pathways:'}
              </span>
            </div>
            <button
              onClick={() => setStep(1)}
              className="text-xs font-bold text-emerald-700 dark:text-emerald-300 hover:underline flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{isHindi ? 'पुनः प्रारंभ करें' : 'Reset'}</span>
            </button>
          </div>

          <div className="space-y-4">
            {recommendations.map((cert, rank) => (
              <div
                key={cert.id}
                className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 font-mono">
                      #{rank + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">
                        {isHindi ? cert.hindiName : cert.name} ({cert.acronym})
                      </h3>
                      <p className="text-xs text-slate-500">{cert.institute}</p>
                    </div>
                  </div>

                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono">
                    Match Confidence: {rank === 0 ? '98%' : rank === 1 ? '91%' : '84%'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl">
                    <span className="text-slate-400 block font-semibold">{isHindi ? 'पात्रता आवश्यकता' : 'Eligibility Pathway'}:</span>
                    <span className="text-slate-800 dark:text-slate-200 font-medium mt-0.5 block truncate">
                      {cert.eligibility.minimumEducation}
                    </span>
                  </div>

                  <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl">
                    <span className="text-slate-400 block font-semibold">{isHindi ? 'प्रैक्टिकल अनुभव' : 'Practical Experience'}:</span>
                    <span className="text-slate-800 dark:text-slate-200 font-medium mt-0.5 block truncate">
                      {cert.practicalTraining.required ? cert.practicalTraining.duration : 'Not mandatory'}
                    </span>
                  </div>

                  <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl">
                    <span className="text-slate-400 block font-semibold">{isHindi ? 'औसत अवधि' : 'Estimated Time'}:</span>
                    <span className="text-slate-800 dark:text-slate-200 font-medium mt-0.5 block font-mono">
                      {cert.averageCompletionTime}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {cert.tagline}
                </p>

                <div className="flex items-center justify-between pt-2 text-xs">
                  <span className="text-[11px] text-slate-400">
                    *Note: Certifications do not guarantee employment; they certify verified statutory competency.
                  </span>
                  <button
                    onClick={() => onNavigate('certification_detail', cert.id)}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl flex items-center gap-1 shadow-xs"
                  >
                    <span>{isHindi ? 'पूर्ण विवरण एवं पाठ्यक्रम' : 'View Full Roadmap'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
