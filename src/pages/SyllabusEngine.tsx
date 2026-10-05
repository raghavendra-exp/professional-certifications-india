import React, { useState } from 'react';
import { Layers, ChevronDown, ChevronRight, HelpCircle, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { certificationsData } from '../data/certifications';

interface SyllabusEngineProps {
  initialCertId?: string;
  onNavigate: (view: string, id?: string) => void;
}

export const SyllabusEngine: React.FC<SyllabusEngineProps> = ({ initialCertId, onNavigate }) => {
  const { isHindi } = useLanguage();
  const [selectedCertId, setSelectedCertId] = useState<string>(initialCertId || 'ca');
  const [selectedVersion, setSelectedVersion] = useState<string>('latest.json');
  const [expandedLevels, setExpandedLevels] = useState<Record<string, boolean>>({
    'ca-foundation': true,
    'ca-intermediate': true,
    'ca-final': true,
  });

  const cert = certificationsData.find(c => c.id === selectedCertId) || certificationsData[0];

  const toggleLevel = (id: string) => {
    setExpandedLevels(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <Layers className="w-4 h-4" />
          <span>{isHindi ? 'विस्तृत पाठ्यक्रम इंजन' : 'Hierarchical Syllabus Engine'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
          {isHindi ? 'प्रमाणपत्र स्तर, प्रश्नपत्र एवं विषय-वार पाठ्यक्रम' : 'Multi-Level Syllabus, Domain & Topic Tree'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed">
          {isHindi
            ? 'प्रमाणपत्र → स्तर → प्रश्नपत्र → डोमेन → विषय → मुख्य अवधारणाएं। ऐतिहासिक संस्करणों का चयन करें और किसी भी विषय पर सीधे अभ्यास शुरू करें।'
            : 'Explore granular syllabus mappings with version control (latest, 2026, historical). Click directly from any concept into practice questions.'}
        </p>

        {/* Certification & Version Selectors */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="font-bold text-slate-500 shrink-0">{isHindi ? 'प्रमाणपत्र' : 'Certification'}:</span>
            <select
              value={selectedCertId}
              onChange={e => setSelectedCertId(e.target.value)}
              className="w-full sm:w-auto px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-semibold text-slate-800 dark:text-slate-200"
            >
              {certificationsData.map(c => (
                <option key={c.id} value={c.id}>
                  {c.acronym} — {c.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="font-bold text-slate-500 shrink-0">{isHindi ? 'संस्करण फ़ाइल' : 'Syllabus Version'}:</span>
            <select
              value={selectedVersion}
              onChange={e => setSelectedVersion(e.target.value)}
              className="w-full sm:w-auto px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono text-blue-600 dark:text-blue-400 font-bold"
            >
              {cert.syllabusVersions.map(v => (
                <option key={v} value={v}>
                  {v} (Active Gazette)
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Levels Tree */}
      <div className="space-y-6">
        {cert.levels.map((level, lIdx) => {
          const isExpanded = expandedLevels[level.id] ?? true;

          return (
            <div
              key={level.id}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs"
            >
              {/* Level Header */}
              <button
                onClick={() => toggleLevel(level.id)}
                className="w-full p-5 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-left hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center">
                    L{lIdx + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">
                      {isHindi && level.hindiName ? level.hindiName : level.name}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {level.totalPapers} Papers • Passing: {level.passingRules}
                    </p>
                  </div>
                </div>

                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
              </button>

              {/* Papers & Domains */}
              {isExpanded && (
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  {level.papers.map(paper => (
                    <div key={paper.id} className="p-6 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                              Paper {paper.paperNumber}: {paper.code}
                            </span>
                            <span className="text-xs text-slate-400">
                              {paper.marks} Marks • {paper.examDurationHours} Hours • {paper.questionPattern}
                            </span>
                          </div>
                          <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mt-1">
                            {paper.name}
                          </h4>
                        </div>

                        <button
                          onClick={() => onNavigate('practice_hub', cert.id)}
                          className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 self-start sm:self-auto shadow-xs"
                        >
                          <HelpCircle className="w-3.5 h-3.5" />
                          <span>{isHindi ? 'अभ्यास प्रश्न' : 'Practice Paper'}</span>
                        </button>
                      </div>

                      {/* Domains & Concept Tree */}
                      {paper.domains && paper.domains.length > 0 ? (
                        <div className="space-y-3 pl-2.5 sm:pl-4 border-l-2 border-slate-200 dark:border-slate-800">
                          {paper.domains.map(dom => (
                            <div key={dom.id} className="space-y-2">
                              <h5 className="font-bold text-xs uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                                <Sparkles className="w-3 h-3 text-blue-500" />
                                <span>{dom.name}</span>
                              </h5>

                              <div className="space-y-2 pl-2 sm:pl-4">
                                {dom.topics.map(tItem => (
                                  <div
                                    key={tItem.id}
                                    className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-100 dark:border-slate-800 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                                  >
                                    <div>
                                      <span className="font-semibold text-slate-900 dark:text-slate-100 block">
                                        {tItem.name}
                                      </span>
                                      <div className="flex flex-wrap items-center gap-1 mt-1 text-[11px] text-slate-500">
                                        <span className="font-mono text-slate-400">Concepts:</span>
                                        {tItem.keyConcepts.map((c, i) => (
                                          <span key={i} className="bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 rounded text-slate-700 dark:text-slate-300">
                                            {c}
                                          </span>
                                        ))}
                                      </div>
                                    </div>

                                    <button
                                      onClick={() => onNavigate('practice_hub', cert.id)}
                                      className="text-xs text-blue-600 dark:text-blue-400 font-bold hover:underline flex items-center gap-1 shrink-0"
                                    >
                                      <span>{isHindi ? 'अभ्यास' : 'Drill'}</span>
                                      <ArrowRight className="w-3.5 h-3.5" />
                                    </button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-xs text-slate-400 italic">
                          Official modules mapped according to the statutory curriculum framework.
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
