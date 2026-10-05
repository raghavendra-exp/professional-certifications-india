import React, { useState } from 'react';
import { 
  RotateCcw, 
  CheckCircle, 
  HelpCircle, 
  Sparkles, 
  Calendar, 
  Layers, 
  ArrowRight,
  Eye
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useUserProgress } from '../context/UserProgressContext';
import { flashcardsData } from '../data/flashcards';

export const RevisionAndFlashcards: React.FC = () => {
  const { isHindi } = useLanguage();
  const { completedFlashcards, toggleFlashcardMastered } = useUserProgress();

  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  const [activeInterval, setActiveInterval] = useState<string>('7-day');

  const categories = ['ALL', 'Ind AS & Accounting', 'Taxation & GST', 'Company Law', 'Finance & Risk', 'Cybersecurity & IT'];

  const filteredCards = selectedCategory === 'ALL'
    ? flashcardsData
    : flashcardsData.filter(fc => fc.category === selectedCategory);

  const toggleFlip = (id: string) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const masteredCount = flashcardsData.filter(f => completedFlashcards.includes(f.id)).length;
  const progressPercent = Math.round((masteredCount / flashcardsData.length) * 100);

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <RotateCcw className="w-4 h-4" />
          <span>{isHindi ? 'स्मरण एवं पुनरीक्षण इंजन' : 'Spaced Repetition & Flashcards Engine'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
          {isHindi ? 'उच्च-प्राथमिकता सूत्र, धाराएं एवं मानक फ्लैशकार्ड' : 'High-Yield Formulae, Statutes & Standards Flashcards'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed">
          {isHindi
            ? 'वैज्ञानिक अंतराल दोहराव (1-दिन, 3-दिन, 7-दिन, 15-दिन, 30-दिन) के आधार पर महत्वपूर्ण कानूनी धाराओं, सूत्रों और लेखांकन अवधारणाओं को याद रखें।'
            : 'Master crucial definitions, sections, ratios, and standards using 1-day, 3-day, 7-day, 15-day, and 30-day spaced repetition schedules.'}
        </p>

        {/* Spaced Repetition Interval Buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
          <span className="text-xs font-bold text-slate-500 mr-2">
            {isHindi ? 'पुनरीक्षण चक्र' : 'Revision Cadence'}:
          </span>
          {[
            { id: '1-day', label: '1-Day Quick Recap', hindi: '1-दिवसीय त्वरित' },
            { id: '3-day', label: '3-Day Retention Sprint', hindi: '3-दिवसीय स्प्रिंट' },
            { id: '7-day', label: '7-Day Core Review', hindi: '7-दिवसीय मुख्य' },
            { id: '15-day', label: '15-Day Deep Retention', hindi: '15-दिवसीय गहरा' },
            { id: '30-day', label: '30-Day Master Sprint', hindi: '30-दिवसीय मास्टर' },
            { id: 'final', label: 'Final Exam Night', hindi: 'अंतिम परीक्षा पूर्व' },
          ].map(it => (
            <button
              key={it.id}
              onClick={() => setActiveInterval(it.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeInterval === it.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {isHindi ? it.hindi : it.label}
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="pt-2">
          <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 mb-1">
            <span>{isHindi ? 'कंठस्थ फ्लैशकार्ड प्रगति' : 'Mastered Flashcards Progress'}:</span>
            <span className="font-mono font-bold text-blue-600 dark:text-blue-400">
              {masteredCount} / {flashcardsData.length} ({progressPercent}%)
            </span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Flashcards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCards.map(card => {
          const isFlipped = flippedCards[card.id];
          const isMastered = completedFlashcards.includes(card.id);

          return (
            <div
              key={card.id}
              className={`rounded-3xl border transition-all p-6 flex flex-col justify-between shadow-xs min-h-[300px] ${
                isFlipped
                  ? 'bg-slate-900 text-white border-slate-800'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono">
                    {card.category}
                  </span>
                  <button
                    onClick={() => toggleFlashcardMastered(card.id)}
                    className={`flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-lg border transition-colors ${
                      isMastered
                        ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-300'
                        : 'border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>{isMastered ? (isHindi ? 'कंठस्थ' : 'Mastered') : (isHindi ? 'कंठस्थ चिह्नित करें' : 'Mark Mastered')}</span>
                  </button>
                </div>

                <h3 className="font-bold text-base leading-snug">
                  {isHindi ? card.hindiTitle : card.title}
                </h3>

                <div className="py-2">
                  {!isFlipped ? (
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        {isHindi ? 'प्रश्न / अवधारणा' : 'Question / Concept'}:
                      </span>
                      <p className="text-sm font-medium leading-relaxed">
                        {isHindi ? card.hindiFront : card.front}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2 animate-fadeIn">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                        {isHindi ? 'उत्तर / कानूनी प्रावधान' : 'Answer / Statutory Provision'}:
                      </span>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                        {isHindi ? card.hindiBack : card.back}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <div className="flex gap-1">
                  {card.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                      #{t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => toggleFlip(card.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                    isFlipped
                      ? 'bg-blue-600 hover:bg-blue-500 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{isFlipped ? (isHindi ? 'प्रश्न देखें' : 'Show Question') : (isHindi ? 'उत्तर पलटें' : 'Flip to Answer')}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
