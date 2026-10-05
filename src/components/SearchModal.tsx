import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Award, HelpCircle, BookOpen, Scale, Bell } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { certificationsData } from '../data/certifications';
import { questionsData } from '../data/questions';
import { statutesData } from '../data/statutesAndStandards';
import { booksData } from '../data/books';
import { regulatoryAndCurrentAffairsData } from '../data/updatesAndNotifications';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: string, id?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const { isHindi } = useLanguage();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onNavigate('search_open');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNavigate]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchedCerts = q
    ? certificationsData.filter(
        c =>
          c.name.toLowerCase().includes(q) ||
          c.acronym.toLowerCase().includes(q) ||
          c.hindiName.includes(q) ||
          c.tagline.toLowerCase().includes(q)
      )
    : certificationsData.slice(0, 4);

  const matchedQuestions = q
    ? questionsData.filter(
        item =>
          item.question.toLowerCase().includes(q) ||
          (item.hindiQuestion && item.hindiQuestion.includes(q)) ||
          item.tags.some(t => t.toLowerCase().includes(q))
      ).slice(0, 5)
    : [];

  const matchedStatutes = q
    ? statutesData.filter(
        s =>
          s.name.toLowerCase().includes(q) ||
          s.hindiName.includes(q) ||
          s.summary.toLowerCase().includes(q)
      ).slice(0, 3)
    : [];

  const matchedBooks = q
    ? booksData.filter(
        b =>
          b.title.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q) ||
          b.topic.toLowerCase().includes(q)
      ).slice(0, 3)
    : [];

  const matchedUpdates = q
    ? regulatoryAndCurrentAffairsData.filter(
        u =>
          u.title.toLowerCase().includes(q) ||
          u.hindiTitle.includes(q) ||
          u.summary.toLowerCase().includes(q)
      ).slice(0, 3)
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-3 sm:px-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[85vh]">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
          <Search className="w-5 h-5 text-slate-400 dark:text-slate-500 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={
              isHindi
                ? 'प्रमाणपत्र, प्रश्न, कानून, पुस्तकें, परिपत्र खोजें...'
                : 'Search certifications, questions, statutes, books, circulars...'
            }
            className="w-full bg-transparent border-none outline-none text-slate-800 dark:text-slate-100 placeholder-slate-400 text-sm sm:text-base"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 mr-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs px-2 py-1 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded font-mono"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="overflow-y-auto p-4 space-y-5 scrollbar-thin">
          {/* Certifications Section */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5 text-blue-500" />
              <span>{isHindi ? 'व्यावसायिक प्रमाणपत्र' : 'Certifications & Qualifications'}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {matchedCerts.map(cert => (
                <button
                  key={cert.id}
                  onClick={() => {
                    onNavigate('certification_detail', cert.id);
                    onClose();
                  }}
                  className="flex items-start p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-blue-500/40 hover:bg-blue-50/40 dark:hover:bg-blue-950/20 text-left transition-all group"
                >
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white shrink-0 mr-2.5 mt-0.5"
                    style={{ backgroundColor: cert.badgeColor }}
                  >
                    {cert.acronym}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 truncate">
                      {isHindi ? cert.hindiName : cert.name}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                      {cert.institute}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Questions Section */}
          {matchedQuestions.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                <HelpCircle className="w-3.5 h-3.5 text-emerald-500" />
                <span>{isHindi ? 'अभ्यास प्रश्न एवं विगत वर्ष' : 'Practice Questions & PYQs'}</span>
              </div>
              <div className="space-y-1.5">
                {matchedQuestions.map(qItem => (
                  <button
                    key={qItem.id}
                    onClick={() => {
                      onNavigate('practice_hub', qItem.certificationId);
                      onClose();
                    }}
                    className="w-full p-2.5 text-left rounded-xl border border-slate-100 dark:border-slate-800 hover:border-emerald-500/40 hover:bg-emerald-50/40 dark:hover:bg-emerald-950/20 transition-all text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                  >
                    <p className="line-clamp-2 font-medium">
                      {isHindi && qItem.hindiQuestion ? qItem.hindiQuestion : qItem.question}
                    </p>
                    <div className="flex items-center gap-2 mt-1.5 text-[11px] text-slate-400">
                      <span className="uppercase font-semibold text-emerald-600 dark:text-emerald-400">
                        {qItem.sourceType}
                      </span>
                      <span>•</span>
                      <span>{qItem.tags.join(', ')}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Statutes & Standards */}
          {matchedStatutes.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                <Scale className="w-3.5 h-3.5 text-purple-500" />
                <span>{isHindi ? 'कानून एवं मानक' : 'Statutes & Standards'}</span>
              </div>
              <div className="space-y-1.5">
                {matchedStatutes.map(statute => (
                  <button
                    key={statute.id}
                    onClick={() => {
                      onNavigate('statutes_library', statute.id);
                      onClose();
                    }}
                    className="w-full p-2.5 text-left rounded-xl border border-slate-100 dark:border-slate-800 hover:border-purple-500/40 hover:bg-purple-50/40 dark:hover:bg-purple-950/20 transition-all"
                  >
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {isHindi ? statute.hindiName : statute.name}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                      {isHindi ? statute.hindiSummary : statute.summary}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Updates & Circulars */}
          {matchedUpdates.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                <Bell className="w-3.5 h-3.5 text-amber-500" />
                <span>{isHindi ? 'नियामक अपडेट एवं परिपत्र' : 'Regulatory Updates'}</span>
              </div>
              <div className="space-y-1.5">
                {matchedUpdates.map(upd => (
                  <button
                    key={upd.id}
                    onClick={() => {
                      onNavigate('regulatory_updates', upd.id);
                      onClose();
                    }}
                    className="w-full p-2.5 text-left rounded-xl border border-slate-100 dark:border-slate-800 hover:border-amber-500/40 hover:bg-amber-50/40 dark:hover:bg-amber-950/20 transition-all"
                  >
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {isHindi ? upd.hindiTitle : upd.title}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">{upd.date} • {upd.source}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Books */}
          {matchedBooks.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                <span>{isHindi ? 'पुस्तकें एवं अध्ययन सामग्री' : 'Books & Study Material'}</span>
              </div>
              <div className="space-y-1.5">
                {matchedBooks.map(book => (
                  <button
                    key={book.id}
                    onClick={() => {
                      onNavigate('books_library', book.id);
                      onClose();
                    }}
                    className="w-full p-2.5 text-left rounded-xl border border-slate-100 dark:border-slate-800 hover:border-indigo-500/40 hover:bg-indigo-50/40 dark:hover:bg-indigo-950/20 transition-all"
                  >
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {book.title}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {book.author} • {book.publisher}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>{isHindi ? 'खोज परिणाम तत्काल लोड होते हैं' : 'Interactive Instant Search Engine'}</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};
