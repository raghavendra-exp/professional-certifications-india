import React, { useState } from 'react';
import { 
  HelpCircle, 
  CheckCircle, 
  XCircle, 
  Bookmark, 
  BookmarkCheck, 
  ShieldAlert, 
  RotateCcw, 
  Filter, 
  Sparkles, 
  ChevronRight, 
  Award,
  ChevronLeft
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useUserProgress } from '../context/UserProgressContext';
import { questionsData } from '../data/questions';
import { certificationsData } from '../data/certifications';
import type { Question, MistakeType } from '../types';

interface PracticeHubProps {
  initialCertId?: string;
  onNavigate: (view: string, id?: string) => void;
}

export const PracticeHub: React.FC<PracticeHubProps> = ({ initialCertId, onNavigate }) => {
  const { isHindi } = useLanguage();
  const { 
    addErrorLog, 
    toggleBookmarkQuestion, 
    isBookmarked 
  } = useUserProgress();

  const [selectedCert, setSelectedCert] = useState<string>(initialCertId || 'ALL');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('ALL');
  const [selectedSourceType, setSelectedSourceType] = useState<string>('ALL');
  const [practiceMode, setPracticeMode] = useState<'drill' | 'card'>('drill');
  
  // Single question card view index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // User selections map: { [questionId]: selectedOptionIndex }
  const [userSelections, setUserSelections] = useState<Record<string, number>>({});
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});

  const filteredQuestions = questionsData.filter(q => {
    if (selectedCert !== 'ALL' && q.certificationId !== selectedCert) return false;
    if (selectedDifficulty !== 'ALL' && q.difficulty !== selectedDifficulty) return false;
    if (selectedSourceType !== 'ALL' && q.sourceType !== selectedSourceType) return false;
    return true;
  });

  const handleSelectOption = (question: Question, optionIndex: number) => {
    if (userSelections[question.id] !== undefined) return; // already answered

    setUserSelections(prev => ({ ...prev, [question.id]: optionIndex }));
    setRevealedSolutions(prev => ({ ...prev, [question.id]: true }));

    // If incorrect, automatically add to Error Notebook
    if (optionIndex !== question.answer) {
      addErrorLog({
        questionId: question.id,
        certificationId: question.certificationId,
        paperId: question.paperId,
        domainId: question.domainId,
        userSelectedOption: optionIndex,
        correctOption: question.answer,
        mistakeType: 'Conceptual' as MistakeType,
        notes: 'Automatically added to Error Notebook on incorrect response in Practice Hub'
      });
    }
  };

  const handleReset = () => {
    setUserSelections({});
    setRevealedSolutions({});
    setCurrentIndex(0);
  };

  const activeQuestion = filteredQuestions[currentIndex] || filteredQuestions[0];

  return (
    <div className="space-y-6 pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <HelpCircle className="w-4 h-4" />
            <span>{isHindi ? 'व्यावसायिक प्रश्न बैंक' : 'Master Practice Hub'}</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">
            {isHindi ? '1,000+ सत्यापित एवं मौलिक अभ्यास प्रश्न' : '1,000+ Verified & Original Practice Questions'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            {isHindi
              ? 'आधिकारिक नमूना प्रश्न, सत्यापित विगत वर्ष प्रश्न, विस्तृत कानूनी व्याख्याएं एवं स्वचालित त्रुटि नोटबुक'
              : 'Official sample questions, verified PYQs, detailed statutory explanations, and instant error notebook logging'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate('mock_test_hub', selectedCert !== 'ALL' ? selectedCert : undefined)}
            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shadow-xs transition-all"
          >
            {isHindi ? 'पूर्ण आधिकारिक मॉक टेस्ट' : 'Full Official Mock'}
          </button>
          <button
            onClick={handleReset}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            title="Reset answers"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Filters Strip */}
      <div className="flex flex-col sm:flex-row flex-wrap sm:items-center gap-2.5 sm:gap-3 p-3.5 sm:p-4 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs">
        <div className="flex items-center justify-between w-full sm:w-auto font-bold text-slate-700 dark:text-slate-300">
          <div className="flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-blue-600" />
            <span>{isHindi ? 'फ़िल्टर' : 'Filters'}:</span>
          </div>
          <span className="sm:hidden font-mono font-bold text-slate-500 dark:text-slate-400">
            {filteredQuestions.length} {isHindi ? 'प्रश्न' : 'Qs'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:flex sm:flex-wrap items-center gap-2.5 w-full sm:w-auto flex-1">
          {/* Certification Filter */}
          <select
            value={selectedCert}
            onChange={e => {
              setSelectedCert(e.target.value);
              setCurrentIndex(0);
            }}
            className="w-full sm:w-auto px-3 py-2 sm:py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium outline-hidden"
          >
            <option value="ALL">{isHindi ? 'सभी प्रमाणपत्र' : 'All Certifications'}</option>
            {certificationsData.map(c => (
              <option key={c.id} value={c.id}>
                {c.acronym} — {c.name}
              </option>
            ))}
          </select>

          {/* Difficulty Filter */}
          <select
            value={selectedDifficulty}
            onChange={e => setSelectedDifficulty(e.target.value)}
            className="w-full sm:w-auto px-3 py-2 sm:py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium outline-hidden"
          >
            <option value="ALL">{isHindi ? 'सभी कठिनाई स्तर' : 'All Difficulties'}</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard / Case Scenario</option>
          </select>

          {/* Source Type Filter */}
          <select
            value={selectedSourceType}
            onChange={e => setSelectedSourceType(e.target.value)}
            className="w-full sm:w-auto px-3 py-2 sm:py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium outline-hidden"
          >
            <option value="ALL">{isHindi ? 'सभी प्रश्न स्रोत' : 'All Question Sources'}</option>
            <option value="VERIFIED PYQ">VERIFIED PYQ</option>
            <option value="OFFICIAL SAMPLE QUESTION">OFFICIAL SAMPLE QUESTION</option>
            <option value="ORIGINAL PRACTICE">ORIGINAL PRACTICE</option>
            <option value="PYQ-STYLE">PYQ-STYLE</option>
          </select>
        </div>

        <span className="hidden sm:inline-block ml-auto font-mono font-bold text-slate-500 dark:text-slate-400 shrink-0">
          {filteredQuestions.length} {isHindi ? 'प्रश्न उपलब्ध' : 'Questions Matched'}
        </span>
      </div>

      {/* Questions Display */}
      {filteredQuestions.length === 0 ? (
        <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
          <HelpCircle className="w-12 h-12 text-slate-400 mx-auto" />
          <h3 className="font-bold text-slate-700 dark:text-slate-300">
            {isHindi ? 'कोई प्रश्न नहीं मिला' : 'No questions matched the selected filters.'}
          </h3>
          <button
            onClick={() => {
              setSelectedCert('ALL');
              setSelectedDifficulty('ALL');
              setSelectedSourceType('ALL');
            }}
            className="text-xs text-blue-600 font-semibold underline"
          >
            {isHindi ? 'फ़िल्टर रीसेट करें' : 'Reset filters'}
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredQuestions.map((q, qIndex) => {
            const isAnswered = userSelections[q.id] !== undefined;
            const selectedOpt = userSelections[q.id];
            const isCorrect = selectedOpt === q.answer;
            const bookmarked = isBookmarked(q.id);

            return (
              <div
                key={q.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all p-5 sm:p-6 space-y-4"
              >
                {/* Question Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono">
                      Q{qIndex + 1}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                      q.sourceType === 'OFFICIAL SAMPLE QUESTION'
                        ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300'
                        : q.sourceType === 'VERIFIED PYQ'
                        ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                        : 'bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300'
                    }`}>
                      {q.sourceType}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                      {q.difficulty}
                    </span>
                    {q.negativeMarkingValue !== undefined && q.negativeMarkingValue > 0 && (
                      <span className="text-[10px] text-rose-500 font-semibold">
                        (-{q.negativeMarkingValue} mark for wrong)
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => toggleBookmarkQuestion(q.id)}
                      className={`p-1.5 rounded-lg border transition-colors ${
                        bookmarked
                          ? 'border-amber-400 text-amber-500 bg-amber-50 dark:bg-amber-950/40'
                          : 'border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-600'
                      }`}
                      title="Bookmark Question"
                    >
                      {bookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Question Body */}
                <div className="space-y-1">
                  <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
                    {isHindi && q.hindiQuestion ? q.hindiQuestion : q.question}
                  </p>
                  {isHindi && q.hindiQuestion && (
                    <p className="text-xs text-slate-400 font-normal">
                      [Eng: {q.question}]
                    </p>
                  )}
                </div>

                {/* Options List */}
                <div className="space-y-2 pt-1">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = selectedOpt === optIdx;
                    const isOptionCorrect = optIdx === q.answer;

                    let optStyle = 'border-slate-200 dark:border-slate-800 hover:border-blue-400 hover:bg-blue-50/20 dark:hover:bg-blue-950/20 text-slate-700 dark:text-slate-300';

                    if (isAnswered) {
                      if (isOptionCorrect) {
                        optStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200 font-semibold';
                      } else if (isSelected) {
                        optStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950/30 text-rose-900 dark:text-rose-200 font-semibold';
                      } else {
                        optStyle = 'opacity-60 border-slate-200 dark:border-slate-800';
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectOption(q, optIdx)}
                        disabled={isAnswered}
                        className={`w-full flex items-start text-left p-3 sm:p-3.5 rounded-xl border text-xs sm:text-sm transition-all ${optStyle}`}
                      >
                        <span className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center justify-center shrink-0 mr-3 font-mono">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <div className="flex-1">
                          <span>
                            {isHindi && q.hindiOptions && q.hindiOptions[optIdx]
                              ? q.hindiOptions[optIdx]
                              : opt}
                          </span>
                        </div>
                        {isAnswered && isOptionCorrect && (
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 ml-2 mt-0.5" />
                        )}
                        {isAnswered && isSelected && !isCorrect && (
                          <XCircle className="w-4 h-4 text-rose-600 shrink-0 ml-2 mt-0.5" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Section */}
                {revealedSolutions[q.id] && (
                  <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-blue-700 dark:text-blue-300 flex items-center gap-1.5 uppercase text-[11px]">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{isHindi ? 'विस्तृत समाधान एवं कानूनी संदर्भ' : 'Authoritative Solution & Statutory Rationale'}</span>
                      </span>
                      <span className="text-slate-400 font-mono text-[10px]">
                        Source: {q.source}
                      </span>
                    </div>

                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {isHindi && q.hindiExplanation ? q.hindiExplanation : q.explanation}
                    </p>

                    <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[10px] text-slate-400">
                      <span className="font-semibold text-slate-500">Tags:</span>
                      {q.tags.map((t, idx) => (
                        <span key={idx} className="bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
