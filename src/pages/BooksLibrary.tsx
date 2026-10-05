import React, { useState } from 'react';
import { BookOpen, ExternalLink, Search, Filter, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { booksData } from '../data/books';
import { certificationsData } from '../data/certifications';

export const BooksLibrary: React.FC = () => {
  const { isHindi } = useLanguage();
  const [selectedCert, setSelectedCert] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const q = searchQuery.toLowerCase().trim();

  const filteredBooks = booksData.filter(b => {
    if (selectedCert !== 'ALL' && b.certificationId !== selectedCert) return false;
    if (q) {
      return (
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        b.publisher.toLowerCase().includes(q) ||
        b.topic.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <BookOpen className="w-4 h-4" />
          <span>{isHindi ? 'आधिकारिक अध्ययन सामग्री एवं पुस्तक भंडार' : 'Official Courseware & Reference Library'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
          {isHindi ? 'व्यावसायिक अध्ययन सामग्री एवं मानक पुस्तकें' : 'Official Institute Material & Authoritative Books'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed">
          {isHindi
            ? 'आईसीएआई, आईसीएसआई, आईसीएमएआई, सीएफए इंस्टीट्यूट, गारप एवं आईआईबीएफ की आधिकारिक अध्ययन सामग्री एवं अधिकृत संदर्भ ग्रंथों के सीधे लिंक।'
            : 'Explore official institute Board of Studies (BOS) curriculum modules, statutory study guides, and authoritative reference textbooks mapped to papers and domains.'}
        </p>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-xs font-bold text-slate-500 shrink-0">{isHindi ? 'प्रमाणपत्र' : 'Exam'}:</span>
            <select
              value={selectedCert}
              onChange={e => setSelectedCert(e.target.value)}
              className="w-full sm:w-auto px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-200 font-semibold"
            >
              <option value="ALL">{isHindi ? 'सभी परीक्षाएं' : 'All Certifications'}</option>
              {certificationsData.map(c => (
                <option key={c.id} value={c.id}>
                  {c.acronym} — {c.name}
                </option>
              ))}
            </select>
          </div>

          <div className="relative w-full sm:max-w-xs">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={isHindi ? 'पुस्तक, लेखक या प्रकाशक खोजें...' : 'Search title, author, publisher...'}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-800 dark:text-slate-200"
            />
          </div>
        </div>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredBooks.map(book => (
          <div
            key={book.id}
            className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-4 hover:border-slate-300 transition-all"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                  book.isOfficialMaterial
                    ? 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}>
                  {book.isOfficialMaterial ? 'OFFICIAL INSTITUTE COURSEWARE' : 'STANDARD REFERENCE TEXT'}
                </span>
                <span className="text-[11px] font-mono text-slate-400 font-semibold">
                  {book.edition}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 leading-snug">
                  {book.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  <strong>Author:</strong> {book.author} • <strong>Publisher:</strong> {book.publisher} ({book.year})
                </p>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl text-xs space-y-1">
                <span className="text-slate-400 block font-semibold text-[10px] uppercase">
                  {isHindi ? 'पाठ्यक्रम कवरेज' : 'Syllabus Coverage'}:
                </span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {book.syllabusCoverage}
                </p>
              </div>
            </div>

            {/* Official / Publisher Links */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold">
              <a
                href={book.officialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 shrink-0"
              >
                <span>{isHindi ? 'आधिकारिक संस्थान पोर्टल' : 'Official Portal'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {book.purchaseLink && (
                <a
                  href={book.purchaseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:underline flex items-center gap-1 shrink-0"
                >
                  <span>{isHindi ? 'अधिकृत क्रय लिंक' : 'Official Bookstore'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
