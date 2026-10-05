import React, { useState } from 'react';
import { Briefcase, ArrowRight, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { careerPathsData } from '../data/careerPaths';

export const CareerPathExplorer: React.FC = () => {
  const { isHindi } = useLanguage();
  const [selectedPathId, setSelectedPathId] = useState<string>(careerPathsData[0].id);

  const activePath = careerPathsData.find(p => p.id === selectedPathId) || careerPathsData[0];

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          <TrendingUp className="w-4 h-4" />
          <span>{isHindi ? 'पेशेवर प्रगति मंच' : 'Professional Career Path Explorer'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
          {isHindi ? 'शुरुआती स्तर से शीर्ष नेतृत्व तक करियर प्रगति' : 'From Entry Associate to Executive Leadership'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed">
          {isHindi
            ? 'ऑडिट, इक्विटी रिसर्च, रिस्क और साइबर सुरक्षा में चरणबद्ध पदोन्नति, आवश्यक प्रमाणपत्र, मुख्य कौशल और सांकेतिक वेतन सीमा।'
            : 'Detailed progression paths linking statutory certifications to job titles, core skill domains, and indicative industry compensation bands.'}
        </p>

        {/* Path Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pt-3 border-t border-slate-100 dark:border-slate-800 scrollbar-thin">
          {careerPathsData.map(p => (
            <button
              key={p.id}
              onClick={() => setSelectedPathId(p.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                selectedPathId === p.id
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {isHindi ? p.hindiField : p.field}
            </button>
          ))}
        </div>
      </div>

      {/* Path Roadmap Overview */}
      <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-lg space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
          CAREER TRAJECTORY
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-white">
          {isHindi ? activePath.hindiField : activePath.field}
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-3xl">
          {activePath.description}
        </p>
      </div>

      {/* Stages Progression Flowchart */}
      <div className="space-y-6">
        {activePath.stages.map((stage, idx) => (
          <div
            key={idx}
            className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-4 relative overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-xs flex items-center justify-center font-mono">
                  {idx + 1}
                </span>
                <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">
                  {stage.level}
                </h3>
              </div>

              <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                Indicative: {stage.indicativeSalaryRange}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              {/* Certifications Needed */}
              <div className="p-3.5 bg-slate-50 dark:bg-slate-800/40 rounded-xl space-y-1.5 border border-slate-100 dark:border-slate-800">
                <span className="font-bold uppercase tracking-wider text-slate-400 block text-[10px]">
                  {isHindi ? 'आवश्यक प्रमाणपत्र' : 'Target Certifications'}:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {stage.certifications.map((c, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Roles */}
              <div className="p-3.5 bg-slate-50 dark:bg-slate-800/40 rounded-xl space-y-1.5 border border-slate-100 dark:border-slate-800">
                <span className="font-bold uppercase tracking-wider text-slate-400 block text-[10px]">
                  {isHindi ? 'विशिष्ट पदनाम' : 'Typical Roles / Designations'}:
                </span>
                <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                  {stage.roles.map((r, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Core Skill Focus */}
              <div className="p-3.5 bg-slate-50 dark:bg-slate-800/40 rounded-xl space-y-1.5 border border-slate-100 dark:border-slate-800">
                <span className="font-bold uppercase tracking-wider text-slate-400 block text-[10px]">
                  {isHindi ? 'कार्यक्षेत्र एवं कौशल' : 'Core Focus & Deliverables'}:
                </span>
                <div className="flex flex-wrap gap-1">
                  {stage.focusAreas.map((f, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-[11px]">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
