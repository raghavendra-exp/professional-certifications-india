import React, { useState } from 'react';
import { 
  Award, 
  BookOpen, 
  HelpCircle, 
  Clock, 
  Calendar, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  ChevronRight, 
  ShieldCheck, 
  DollarSign, 
  GraduationCap, 
  Briefcase, 
  Layers, 
  Building2, 
  Sparkles 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { certificationsData } from '../data/certifications';
import { booksData } from '../data/books';
import { questionsData } from '../data/questions';

interface CertificationDetailProps {
  certificationId: string;
  onNavigate: (view: string, id?: string) => void;
}

export const CertificationDetail: React.FC<CertificationDetailProps> = ({ 
  certificationId, 
  onNavigate 
}) => {
  const { isHindi, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('overview');

  const cert = certificationsData.find(c => c.id === certificationId) || certificationsData[0];
  const relatedBooks = booksData.filter(b => b.certificationId === cert.id);
  const relatedQuestions = questionsData.filter(q => q.certificationId === cert.id);

  const tabs = [
    { id: 'overview', label: 'Overview', hindiLabel: 'अवलोकन' },
    { id: 'levels', label: 'Levels & Papers', hindiLabel: 'स्तर एवं प्रश्नपत्र' },
    { id: 'eligibility', label: 'Eligibility & Registration', hindiLabel: 'पात्रता एवं पंजीकरण' },
    { id: 'fees', label: 'Fees & Cost Structure', hindiLabel: 'शुल्क एवं लागत' },
    { id: 'practical', label: 'Practical Training / Articleship', hindiLabel: 'प्रैक्टिकल ट्रेनिंग / आर्टिकलशिप' },
    { id: 'membership', label: 'Membership & CPE Renewal', hindiLabel: 'सदस्यता एवं नवीनीकरण (CPE)' },
    { id: 'materials', label: 'Study Material & Books', hindiLabel: 'अध्ययन सामग्री एवं पुस्तकें' },
  ];

  return (
    <div className="space-y-8 pb-16">
      {/* Top Banner Header */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 text-white p-6 sm:p-8 shadow-xl">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-3 sm:gap-4">
            <span
              className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center text-base sm:text-2xl font-black text-white shrink-0 shadow-lg"
              style={{ backgroundColor: cert.badgeColor }}
            >
              {cert.acronym}
            </span>
            <div className="space-y-1 min-w-0">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="text-[10px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  {cert.categoryLabel}
                </span>
                <span className="text-[10px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  Est. {cert.establishedYear} • {cert.country}
                </span>
                <span className="text-[10px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  {cert.currentSchemeYear}
                </span>
              </div>
              <h1 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
                {isHindi ? cert.hindiName : cert.name}
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 flex items-center gap-1.5 font-medium">
                <Building2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{isHindi ? cert.hindiInstitute : cert.institute}</span>
              </p>
            </div>
          </div>

          {/* Quick Action Hub for Practice & Mocks */}
          <div className="flex flex-col sm:flex-col gap-2 w-full sm:w-auto shrink-0">
            <button
              onClick={() => onNavigate('practice_hub', cert.id)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-600/30 transition-all hover:scale-102"
            >
              <HelpCircle className="w-4 h-4" />
              <span>{isHindi ? 'अभ्यास शुरू करें' : 'Start Practice'}</span>
            </button>
            <button
              onClick={() => onNavigate('mock_test_hub', cert.id)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-bold border border-slate-700 transition-all"
            >
              <Clock className="w-4 h-4 text-amber-400" />
              <span>{isHindi ? 'मॉक टेस्ट लें' : 'Official Mock Test'}</span>
            </button>
          </div>
        </div>

        {/* Latest Formal Notification Banner */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs bg-slate-800/40 p-3.5 rounded-xl">
          <div className="flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-amber-300 mr-2 uppercase tracking-wider text-[10px]">
                {isHindi ? 'नवीनतम अधिसूचना' : 'Latest Official Notice'}:
              </span>
              <span className="font-semibold text-slate-200">
                {isHindi ? cert.latestNotification.hindiTitle : cert.latestNotification.title}
              </span>
              <p className="text-slate-400 text-[11px] mt-0.5">
                {isHindi ? cert.latestNotification.hindiSummary : cert.latestNotification.summary}
              </p>
            </div>
          </div>
          <a
            href={cert.latestNotification.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1 shrink-0 ml-6 sm:ml-0"
          >
            <span>{isHindi ? 'आधिकारिक स्रोत देखें' : 'View Source'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Navigation Tab Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto border-b border-slate-200 dark:border-slate-800 pb-2 scrollbar-thin">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {isHindi ? tab.hindiLabel : tab.label}
          </button>
        ))}
      </div>

      {/* Tab 1: Overview */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <span>{isHindi ? 'प्रमाणपत्र विवरण एवं विनियामक प्राधिकार' : 'Official Description & Statutory Scope'}</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {isHindi ? cert.hindiDescription : cert.description}
              </p>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                  <span className="text-slate-400 block font-semibold">{isHindi ? 'वैश्विक मान्यता' : 'Global Recognition'}</span>
                  <span className="text-slate-800 dark:text-slate-200 font-medium mt-1 block">
                    {cert.globalRecognition}
                  </span>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                  <span className="text-slate-400 block font-semibold">{isHindi ? 'औसत पूर्णता समय' : 'Average Completion Time'}</span>
                  <span className="text-slate-800 dark:text-slate-200 font-medium mt-1 block font-mono">
                    {cert.averageCompletionTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Career Outcomes Card */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-emerald-600" />
                <span>{isHindi ? 'करियर परिणाम एवं व्यावसायिक भूमिकाएं' : 'Key Career Outcomes & Strategic Roles'}</span>
              </h3>
              <div className="space-y-2">
                {cert.careerOutcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Facts Widget */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                {isHindi ? 'त्वरित परीक्षा तथ्य' : 'Key Examination Facts'}
              </h3>
              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-400 block">{isHindi ? 'उत्तीर्णता मानदंड' : 'Passing Criteria'}</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {isHindi && cert.hindiPassingCriteria ? cert.hindiPassingCriteria : cert.passingCriteria}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block">{isHindi ? 'प्रयास सीमा' : 'Attempts Limit'}</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {isHindi && cert.hindiAttemptsLimit ? cert.hindiAttemptsLimit : cert.attemptsLimit}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block">{isHindi ? 'आधिकारिक पोर्टल' : 'Official Portal'}</span>
                  <a
                    href={cert.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 mt-0.5"
                  >
                    <span>{cert.officialUrl}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Practice Stats */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 rounded-2xl border border-blue-200 dark:border-blue-900/60 p-5 space-y-3">
              <h4 className="font-bold text-blue-900 dark:text-blue-200 text-sm">
                {isHindi ? 'तैयारी संसाधन तैयार हैं' : 'Preparation Material Available'}
              </h4>
              <p className="text-xs text-blue-800/80 dark:text-blue-300">
                {relatedQuestions.length} {isHindi ? 'अभ्यास प्रश्न' : 'practice questions'} • {relatedBooks.length} {isHindi ? 'आधिकारिक अध्ययन मॉड्यूल' : 'official books'}
              </p>
              <button
                onClick={() => onNavigate('practice_hub', cert.id)}
                className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs shadow-xs"
              >
                {isHindi ? 'अभ्यास मॉड्यूल खोलें' : 'Open Question Bank'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Levels & Papers */}
      {activeTab === 'levels' && (
        <div className="space-y-6">
          {cert.levels.map((level, lIdx) => (
            <div
              key={level.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs"
            >
              <div className="p-5 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-600 text-white font-mono">
                      STAGE {lIdx + 1}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                      {isHindi && level.hindiName ? level.hindiName : level.name}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {level.examFrequency} • {level.totalPapers} {isHindi ? 'प्रश्नपत्र' : 'Papers'}
                  </p>
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 sm:text-right">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{level.passingRules}</span>
                </div>
              </div>

              {/* Papers List */}
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {level.papers.map(paper => (
                  <div key={paper.id} className="p-5 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-start gap-3">
                        <span className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold text-xs flex items-center justify-center shrink-0 border border-blue-200 dark:border-blue-900 font-mono">
                          P{paper.paperNumber}
                        </span>
                        <div>
                          <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100">
                            {paper.name}
                          </h4>
                          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-1">
                            <span className="font-mono text-blue-600 dark:text-blue-400 font-semibold">{paper.code}</span>
                            <span>•</span>
                            <span>{paper.marks} {isHindi ? 'अंक' : 'Marks'}</span>
                            <span>•</span>
                            <span>{paper.examDurationHours} {isHindi ? 'घंटे' : 'Hours'}</span>
                            <span>•</span>
                            <span>{paper.examMode}</span>
                            <span>•</span>
                            <span className="font-semibold text-slate-700 dark:text-slate-300">{paper.questionPattern}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => onNavigate('practice_hub', cert.id)}
                          className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 text-slate-700 dark:text-slate-300 hover:text-blue-600 text-xs font-semibold transition-colors"
                        >
                          {isHindi ? 'पेपर प्रश्न अभ्यास' : 'Practice Paper'}
                        </button>
                      </div>
                    </div>

                    {/* Domains & Topics */}
                    {paper.domains && paper.domains.length > 0 && (
                      <div className="pl-3 sm:pl-11 pt-2 space-y-2">
                        {paper.domains.map(dom => (
                          <div key={dom.id} className="text-xs p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                            <p className="font-bold text-slate-800 dark:text-slate-200">
                              {dom.name}
                            </p>
                            <div className="mt-1.5 space-y-1">
                              {dom.topics.map(tItem => (
                                <div key={tItem.id} className="text-slate-600 dark:text-slate-400 flex flex-wrap items-start gap-1.5">
                                  <span className="text-blue-500 font-bold shrink-0">•</span>
                                  <span className="font-medium">{tItem.name}:</span>
                                  <span className="text-slate-500 font-mono break-all sm:break-words">[{tItem.keyConcepts.join(', ')}]</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Eligibility & Registration */}
      {activeTab === 'eligibility' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <span>{isHindi ? 'न्यूनतम शैक्षिक पात्रता' : 'Minimum Eligibility Criteria'}</span>
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <p>
                <strong>{isHindi ? 'आवश्यक योग्यता' : 'Required Qualification'}:</strong>{' '}
                {isHindi && cert.eligibility.hindiMinimumEducation
                  ? cert.eligibility.hindiMinimumEducation
                  : cert.eligibility.minimumEducation}
              </p>
              {cert.eligibility.streamRequirements && (
                <p>
                  <strong>{isHindi ? 'स्ट्रीम आवश्यकताएं' : 'Stream Requirements'}:</strong>{' '}
                  {cert.eligibility.streamRequirements}
                </p>
              )}
              {cert.eligibility.exemptionsAvailable && (
                <p>
                  <strong>{isHindi ? 'डायरेक्ट एंट्री / छूट' : 'Direct Entry Pathway'}:</strong>{' '}
                  {cert.eligibility.exemptionsAvailable}
                </p>
              )}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>{isHindi ? 'आधिकारिक छूट नियम' : 'Exemption Policies'}</span>
            </h3>
            <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {cert.exemptions.map((ex, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  <span>{ex}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Fees & Cost Structure */}
      {activeTab === 'fees' && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-amber-500" />
              <span>{isHindi ? 'आधिकारिक विनियामक शुल्क बनाम अनुमानित तैयारी लागत' : 'Official Statutory Fees vs Estimated Preparation Cost'}</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {isHindi ? cert.feeStructure.hindiOfficialFeeNote : cert.feeStructure.officialFeeNote}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
              <span className="text-xs text-slate-400 block font-semibold">{isHindi ? 'पंजीकरण शुल्क' : 'Registration Fee'}</span>
              <span className="text-base font-bold text-slate-900 dark:text-slate-100 mt-1 block">
                {cert.feeStructure.registrationFee}
              </span>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
              <span className="text-xs text-slate-400 block font-semibold">{isHindi ? 'परीक्षा शुल्क' : 'Examination Fee'}</span>
              <span className="text-base font-bold text-slate-900 dark:text-slate-100 mt-1 block">
                {cert.feeStructure.examinationFee}
              </span>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
              <span className="text-xs text-slate-400 block font-semibold">{isHindi ? 'अनुमानित कुल तैयारी लागत' : 'Estimated Preparation Cost'}</span>
              <span className="text-base font-bold text-amber-600 dark:text-amber-400 mt-1 block font-mono">
                {cert.feeStructure.estimatedPreparationCost}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: Practical Training / Articleship */}
      {activeTab === 'practical' && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {isHindi ? cert.practicalTraining.hindiName || cert.practicalTraining.name : cert.practicalTraining.name}
              </h3>
              <p className="text-xs text-slate-500">
                {isHindi ? 'अवधि' : 'Duration'}: <strong className="text-blue-600 dark:text-blue-400">{cert.practicalTraining.duration}</strong>
              </p>
            </div>
          </div>

          <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
            {isHindi && cert.practicalTraining.hindiDetails ? cert.practicalTraining.hindiDetails : cert.practicalTraining.details}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
              <span className="font-semibold text-slate-400 block">{isHindi ? 'शुरुआत का समय' : 'Timing & Commencement'}</span>
              <span className="text-slate-800 dark:text-slate-200 font-medium mt-1 block">
                {cert.practicalTraining.timing}
              </span>
            </div>
            {cert.practicalTraining.stipendGuidelines && (
              <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                <span className="font-semibold text-slate-400 block">{isHindi ? 'अनिवार्य स्टाइपेंड' : 'Mandatory Stipend Guidelines'}</span>
                <span className="text-slate-800 dark:text-slate-200 font-medium mt-1 block">
                  {cert.practicalTraining.stipendGuidelines}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 6: Membership & CPE Renewal */}
      {activeTab === 'membership' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600" />
              <span>{isHindi ? 'सदस्यता पात्रता' : 'Membership Requirements'}</span>
            </h3>
            <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {cert.membershipRequirements.map((req, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-500" />
              <span>{isHindi ? 'सतत व्यावसायिक शिक्षा (CPE / CPD)' : 'Continuing Professional Education (CPE/CPD)'}</span>
            </h3>
            <div className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <p>
                <strong>{isHindi ? 'वार्षिक आवश्यकता' : 'Annual Requirement'}:</strong>{' '}
                <span className="font-mono text-blue-600 dark:text-blue-400 font-bold">
                  {cert.renewalCpeRequirements.cpeHoursPerYear}
                </span>
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                {isHindi && cert.renewalCpeRequirements.hindiDetails
                  ? cert.renewalCpeRequirements.hindiDetails
                  : cert.renewalCpeRequirements.details}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 7: Books & Study Materials */}
      {activeTab === 'materials' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              {isHindi ? 'आधिकारिक संस्थान सामग्री एवं अनुशंसित पुस्तकें' : 'Official Institute Courseware & Authoritative Reference Texts'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedBooks.map(book => (
              <div
                key={book.id}
                className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      book.isOfficialMaterial ? 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }`}>
                      {book.isOfficialMaterial ? 'OFFICIAL COURSEWARE' : 'RECOMMENDED TEXT'}
                    </span>
                    <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100 mt-1">
                      {book.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">{book.author} • {book.publisher}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {book.syllabusCoverage}
                </p>

                <div className="flex items-center gap-3 pt-2 text-xs font-semibold">
                  <a
                    href={book.officialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                  >
                    <span>{isHindi ? 'संस्थान पोर्टल' : 'Official Source'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  {book.purchaseLink && (
                    <a
                      href={book.purchaseLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 dark:text-slate-400 hover:underline flex items-center gap-1"
                    >
                      <span>{isHindi ? 'प्रकाशक लिंक' : 'Publisher Store'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
