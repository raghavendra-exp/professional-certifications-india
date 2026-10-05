import React, { useState } from 'react';
import { 
  ShieldAlert, 
  CheckCircle2, 
  Trash2, 
  RotateCcw, 
  HelpCircle, 
  Filter, 
  Tag, 
  Check, 
  Edit3 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useUserProgress } from '../context/UserProgressContext';
import { questionsData } from '../data/questions';
import type { MistakeType } from '../types';

export const ErrorNotebook: React.FC = () => {
  const { isHindi } = useLanguage();
  const { 
    errorLogs, 
    updateMistakeType, 
    resolveErrorLog, 
    deleteErrorLog 
  } = useUserProgress();

  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');

  const mistakeTypes: MistakeType[] = [
    'Conceptual',
    'Calculation',
    'Memory',
    'Misread',
    'Guess',
    'Careless',
    'Time management'
  ];

  const filteredLogs = selectedFilter === 'ALL'
    ? errorLogs
    : selectedFilter === 'UNRESOLVED'
    ? errorLogs.filter(e => !e.resolved)
    : errorLogs.filter(e => e.mistakeType === selectedFilter);

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
          <ShieldAlert className="w-4 h-4" />
          <span>{isHindi ? 'व्यक्तिगत कमजोरी निवारण' : 'Personal Weak Area Diagnostic'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
          {isHindi ? 'त्रुटि नोटबुक एवं गलतियों का विश्लेषण' : 'Error Notebook & Mistake Taxonomy'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed">
          {isHindi
            ? 'मॉक टेस्ट और अभ्यास में की गई गलतियों का स्वतः संकलन। गलतियों को वैचारिक, गणना, स्मृति, असावधानी या अनुमान के आधार पर वर्गीकृत करें और परीक्षा पूर्व सुधारें।'
            : 'Every mistake committed in Practice Hub or Mock Tests is logged automatically. Tag and diagnose mistakes across Conceptual, Calculation, Memory, Misread, Guess, or Careless buckets.'}
        </p>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
          <button
            onClick={() => setSelectedFilter('ALL')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
              selectedFilter === 'ALL'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
            }`}
          >
            {isHindi ? 'सभी त्रुटियां' : 'All Mistakes'} ({errorLogs.length})
          </button>
          <button
            onClick={() => setSelectedFilter('UNRESOLVED')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
              selectedFilter === 'UNRESOLVED'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
            }`}
          >
            {isHindi ? 'असुधरी गलतियां' : 'Unresolved'} ({errorLogs.filter(e => !e.resolved).length})
          </button>

          {mistakeTypes.map(m => (
            <button
              key={m}
              onClick={() => setSelectedFilter(m)}
              className={`px-3 py-1.5 rounded-xl font-semibold transition-all ${
                selectedFilter === m
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Error Items List */}
      {filteredLogs.length === 0 ? (
        <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
          <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
          <h3 className="font-bold text-slate-800 dark:text-slate-200 text-base">
            {isHindi ? 'कोई त्रुटि दर्ज नहीं है!' : 'No Errors in this category!'}
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            {isHindi
              ? 'जब आप अभ्यास या मॉक टेस्ट में गलत उत्तर देंगे, तो वे स्वतः यहां दिखाई देंगे।'
              : 'Mistakes made during Practice Hub and Mock Tests automatically get filed here for revision.'}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredLogs.map(item => {
            const question = questionsData.find(q => q.id === item.questionId);
            if (!question) return null;

            return (
              <div
                key={item.id}
                className={`p-6 bg-white dark:bg-slate-900 rounded-2xl border transition-all space-y-4 ${
                  item.resolved
                    ? 'border-emerald-200 dark:border-emerald-900/40 opacity-70'
                    : 'border-rose-200 dark:border-rose-900/40 shadow-xs'
                }`}
              >
                {/* Header Strip */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono">
                      {item.certificationId.toUpperCase()}
                    </span>

                    {/* Mistake Type Selector */}
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-slate-400">Mistake Type:</span>
                      <select
                        value={item.mistakeType}
                        onChange={e => updateMistakeType(item.id, e.target.value as MistakeType)}
                        className="text-xs font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 rounded-lg px-2 py-0.5 outline-hidden"
                      >
                        {mistakeTypes.map(m => (
                          <option key={m} value={m}>
                            {m}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-slate-400 text-[11px] font-mono">
                      {new Date(item.timestamp).toLocaleDateString()}
                    </span>
                    <button
                      onClick={() => resolveErrorLog(item.id)}
                      className={`px-2.5 py-1 rounded-lg font-bold flex items-center gap-1 ${
                        item.resolved
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-50'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>{item.resolved ? (isHindi ? 'सुधारा गया' : 'Resolved') : (isHindi ? 'सुधार चिह्नित करें' : 'Mark Resolved')}</span>
                    </button>
                    <button
                      onClick={() => deleteErrorLog(item.id)}
                      className="p-1 text-slate-400 hover:text-rose-600 transition-colors"
                      title="Delete record"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Question Text */}
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
                  {isHindi && question.hindiQuestion ? question.hindiQuestion : question.question}
                </p>

                {/* Options Comparison */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 text-rose-900 dark:text-rose-200">
                    <span className="font-bold block text-[10px] uppercase text-rose-700 dark:text-rose-400">
                      {isHindi ? 'आपका चुना हुआ उत्तर' : 'Your Answer'}:
                    </span>
                    <span className="mt-0.5 block">
                      {String.fromCharCode(65 + item.userSelectedOption)}.{' '}
                      {question.options[item.userSelectedOption]}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40 text-emerald-900 dark:text-emerald-200">
                    <span className="font-bold block text-[10px] uppercase text-emerald-700 dark:text-emerald-400">
                      {isHindi ? 'सही उत्तर' : 'Correct Answer'}:
                    </span>
                    <span className="mt-0.5 block">
                      {String.fromCharCode(65 + item.correctOption)}.{' '}
                      {question.options[item.correctOption]}
                    </span>
                  </div>
                </div>

                {/* Explanation */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-xs text-slate-600 dark:text-slate-300">
                  <strong className="text-blue-600 dark:text-blue-400 block mb-0.5">
                    {isHindi ? 'अवधारणा एवं विधिक आधार' : 'Statutory & Conceptual Explanation'}:
                  </strong>
                  {isHindi && question.hindiExplanation ? question.hindiExplanation : question.explanation}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
