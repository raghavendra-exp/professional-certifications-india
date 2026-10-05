import React, { useState } from 'react';
import { Scale, ExternalLink, Calendar, ShieldCheck, CheckCircle2, Search, Filter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { statutesData, standardsFrameworksData } from '../data/statutesAndStandards';

export const StatutesLibrary: React.FC = () => {
  const { isHindi } = useLanguage();
  const [activeTab, setActiveTab] = useState<'statutes' | 'standards'>('statutes');
  const [searchFilter, setSearchFilter] = useState('');

  const q = searchFilter.toLowerCase().trim();

  const filteredStatutes = statutesData.filter(
    s =>
      s.name.toLowerCase().includes(q) ||
      s.hindiName.includes(q) ||
      s.summary.toLowerCase().includes(q) ||
      s.applicableCertifications.some(c => c.toLowerCase().includes(q))
  );

  const filteredStandards = standardsFrameworksData.filter(
    st =>
      st.name.toLowerCase().includes(q) ||
      st.code.toLowerCase().includes(q) ||
      st.summary.toLowerCase().includes(q) ||
      st.examRelevance.some(c => c.toLowerCase().includes(q))
  );

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
          <Scale className="w-4 h-4" />
          <span>{isHindi ? 'सांविधिक एवं मानक भंडार' : 'Statute & Standards Library'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
          {isHindi ? 'कानून, विनियामक अधिनियम एवं लेखापरीक्षा मानक' : 'Acts, Regulations, Ind AS & Security Frameworks'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed">
          {isHindi
            ? 'कंपनी अधिनियम, प्रत्यक्ष कर, जीएसटी, सेबी एलओडीआर, आईबीसी एवं इंड एएस मानकों का प्रामाणिक संदर्भ एवं परीक्षा उपयोगी बिंदु।'
            : 'Authoritative, current statutory texts with verified amendment dates, high-yield examination takeaways, and official regulatory sources.'}
        </p>

        {/* Tab & Search Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('statutes')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'statutes'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {isHindi ? '1. सांविधिक कानून (Acts & Regulations)' : '1. Acts & Statutes'}
            </button>
            <button
              onClick={() => setActiveTab('standards')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'standards'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {isHindi ? '2. मानक एवं रूपरेखा (Standards & Ind AS)' : '2. Standards & Frameworks'}
            </button>
          </div>

          <div className="relative max-w-xs w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchFilter}
              onChange={e => setSearchFilter(e.target.value)}
              placeholder={isHindi ? 'कानून या मानक खोजें...' : 'Search statutes or standards...'}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-200"
            />
          </div>
        </div>
      </div>

      {/* 1. STATUTES VIEW */}
      {activeTab === 'statutes' && (
        <div className="space-y-6">
          {filteredStatutes.map(statute => (
            <div
              key={statute.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-5 shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 uppercase">
                      {statute.currentStatus}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">Year {statute.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mt-1">
                    {isHindi ? statute.hindiName : statute.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">Authority: {statute.authority}</p>
                </div>

                <div className="text-xs text-slate-400 sm:text-right shrink-0">
                  <span>Last verified: {statute.lastVerifiedDate}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {isHindi ? statute.hindiSummary : statute.summary}
              </p>

              {/* High Yield Exam Points */}
              <div className="space-y-2 bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400 block">
                  {isHindi ? 'उच्च-प्राथमिकता परीक्षा प्रावधान' : 'High-Yield Statutory Provisions & Thresholds'}:
                </span>
                <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  {statute.highYieldPoints.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-purple-500 font-bold">•</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-slate-400 font-semibold">{isHindi ? 'लागू परीक्षाएं' : 'Applicable Exams'}:</span>
                  {statute.applicableCertifications.map((c, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono text-[11px]"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                <a
                  href={statute.officialSourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  <span>{isHindi ? 'आधिकारिक गजट / अधिनियम देखें' : 'View Official Legislation'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 2. STANDARDS & FRAMEWORKS VIEW */}
      {activeTab === 'standards' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredStandards.map(std => (
            <div
              key={std.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono">
                      {std.code}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mt-1">
                      {isHindi ? std.hindiName : std.name}
                    </h3>
                    <p className="text-xs text-slate-500">{std.authority} • {std.category}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {isHindi ? std.hindiSummary : std.summary}
                </p>

                <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl text-xs space-y-1 border border-slate-100 dark:border-slate-800">
                  <span className="font-bold text-slate-700 dark:text-slate-300 block">
                    {isHindi ? 'व्यावहारिक अनुप्रयोग' : 'Practical Application'}:
                  </span>
                  <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                    {std.practicalApplication}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <div className="flex flex-wrap gap-1">
                  {std.examRelevance.map((ex, i) => (
                    <span key={i} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                      {ex}
                    </span>
                  ))}
                </div>

                <a
                  href={std.officialSourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 shrink-0 ml-2"
                >
                  <span>{isHindi ? 'मानक लिंक' : 'Official Portal'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
