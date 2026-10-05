import React, { useState } from 'react';
import { 
  FileText, 
  TrendingUp, 
  ExternalLink, 
  Calendar, 
  Sparkles, 
  Filter, 
  ArrowRight,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { regulatoryAndCurrentAffairsData } from '../data/updatesAndNotifications';

export const UpdatesAndCurrentAffairs: React.FC = () => {
  const { isHindi } = useLanguage();
  const [selectedType, setSelectedType] = useState<string>('ALL');

  const filteredUpdates = selectedType === 'ALL'
    ? regulatoryAndCurrentAffairsData
    : regulatoryAndCurrentAffairsData.filter(u => u.type === selectedType);

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
          <Sparkles className="w-4 h-4" />
          <span>{isHindi ? 'विनियामक एवं कर परिवर्तन ट्रैकर' : 'Regulatory & Tax Change Center'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
          {isHindi ? 'नवीनतम वैधानिक परिपत्र, कर संशोधन एवं परीक्षा अधिसूचनाएं' : 'Current Regulatory Changes, Tax Updates & Circulars'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed">
          {isHindi
            ? 'पुराना नियम बनाम परिवर्तन बनाम नया नियम, प्रभावी तिथि, प्रभावित परीक्षाएं एवं आधिकारिक स्रोतों का तुलनात्मक विवरण।'
            : 'Track statutory amendments with explicit Old Rule vs Change vs New Rule comparisons, effective dates, and certification impact.'}
        </p>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pt-3 border-t border-slate-100 dark:border-slate-800 scrollbar-thin">
          {[
            { id: 'ALL', label: 'All Updates', hindi: 'सभी अपडेट' },
            { id: 'REGULATORY_CHANGE', label: 'Regulatory Changes', hindi: 'नियामक बदलाव' },
            { id: 'BUDGET_TAX', label: 'Finance Act & Tax Updates', hindi: 'कर एवं बजट संशोधन' },
            { id: 'CIRCULAR', label: 'RBI & Banking Circulars', hindi: 'आरबीआई परिपत्र' },
            { id: 'NOTIFICATION', label: 'MCA & Corporate Rules', hindi: 'एमसीए अधिसूचनाएं' },
            { id: 'EXAM_DATE', label: 'Exam Dates & Schedules', hindi: 'परीक्षा तिथियां' },
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setSelectedType(f.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedType === f.id
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {isHindi ? f.hindi : f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Updates Cards List */}
      <div className="space-y-6">
        {filteredUpdates.map(upd => (
          <div
            key={upd.id}
            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-5 shadow-xs"
          >
            {/* Card Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 uppercase">
                    {upd.type}
                  </span>
                  <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{upd.date}</span>
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 mt-1">
                  {isHindi ? upd.hindiTitle : upd.title}
                </h3>
              </div>

              <div className="text-xs text-slate-400 sm:text-right shrink-0">
                <span>Verified: {upd.lastVerifiedDate}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {isHindi ? upd.hindiSummary : upd.summary}
            </p>

            {/* Old Rule vs Change vs New Rule Box (Section 43 Architecture) */}
            {upd.oldRule && upd.newRule && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-xs">
                <div className="space-y-1">
                  <span className="font-bold text-rose-600 dark:text-rose-400 uppercase text-[10px] block">
                    {isHindi ? '1. पुराना नियम (Old Rule)' : '1. Old Rule / Threshold'}
                  </span>
                  <p className="text-slate-600 dark:text-slate-400">{upd.oldRule}</p>
                </div>

                <div className="space-y-1">
                  <span className="font-bold text-amber-600 dark:text-amber-400 uppercase text-[10px] block">
                    {isHindi ? '2. संशोधन (Change Enacted)' : '2. Key Change'}
                  </span>
                  <p className="text-slate-700 dark:text-slate-300 font-medium">{upd.change}</p>
                </div>

                <div className="space-y-1">
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 uppercase text-[10px] block">
                    {isHindi ? '3. नया नियम (New Operative Rule)' : '3. New Operative Rule'}
                  </span>
                  <p className="text-slate-900 dark:text-slate-100 font-bold">{upd.newRule}</p>
                </div>
              </div>
            )}

            {/* Footer with Affected Exams & Link */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-slate-400 font-semibold">{isHindi ? 'प्रभावित परीक्षाएं' : 'Certifications Affected'}:</span>
                {upd.certificationRelevance.map((c, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-semibold text-[11px]">
                    {c}
                  </span>
                ))}
              </div>

              <a
                href={upd.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                <span>Source: {upd.source}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
