import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Download, 
  BookOpen, 
  AlertCircle 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { certificationsData } from '../data/certifications';

export const StudyPlanner: React.FC = () => {
  const { isHindi } = useLanguage();

  const [selectedCertId, setSelectedCertId] = useState<string>('ca');
  const [targetExamDate, setTargetExamDate] = useState<string>('2027-05-15');
  const [dailyHours, setDailyHours] = useState<number>(4);
  const [weakArea, setWeakArea] = useState<string>('Taxation & Law');

  const selectedCert = certificationsData.find(c => c.id === selectedCertId) || certificationsData[0];

  // Calculate days left
  const today = new Date();
  const target = new Date(targetExamDate);
  const diffTime = Math.max(0, target.getTime() - today.getTime());
  const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const totalStudyHoursPlanned = daysLeft * dailyHours;

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <Calendar className="w-4 h-4" />
          <span>{isHindi ? 'अध्ययन रणनीति योजनाकार' : 'Intelligent Study Timetable Generator'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
          {isHindi ? 'व्यक्तिगत दैनिक एवं साप्ताहिक अध्ययन योजना' : 'Personalized Daily & Weekly Study Planner'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed">
          {isHindi
            ? 'अपनी लक्षित परीक्षा तिथि और उपलब्ध दैनिक घंटों के अनुसार दैनिक अध्याय आवंटन, सप्ताहांत रिवीजन एवं पूर्ण मॉक टेस्ट का समय चक्र तैयार करें।'
            : 'Configure your target examination date and daily time commitment to automatically synthesize daily chapter allocations, weekly revision sprints, and timed mock test checkpoints.'}
        </p>

        {/* Inputs Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs">
          <div>
            <label className="font-bold text-slate-500 block mb-1">
              {isHindi ? 'लक्षित प्रमाणपत्र' : 'Target Certification'}
            </label>
            <select
              value={selectedCertId}
              onChange={e => setSelectedCertId(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-semibold text-slate-800 dark:text-slate-200"
            >
              {certificationsData.map(c => (
                <option key={c.id} value={c.id}>
                  {c.acronym} — {c.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-bold text-slate-500 block mb-1">
              {isHindi ? 'लक्षित परीक्षा तिथि' : 'Target Exam Date'}
            </label>
            <input
              type="date"
              value={targetExamDate}
              onChange={e => setTargetExamDate(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-semibold text-slate-800 dark:text-slate-200 font-mono"
            />
          </div>

          <div>
            <label className="font-bold text-slate-500 block mb-1">
              {isHindi ? 'दैनिक अध्ययन के घंटे' : 'Daily Available Hours'}
            </label>
            <input
              type="number"
              min={1}
              max={16}
              value={dailyHours}
              onChange={e => setDailyHours(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-semibold text-slate-800 dark:text-slate-200 font-mono"
            />
          </div>

          <div>
            <label className="font-bold text-slate-500 block mb-1">
              {isHindi ? 'कमजोर विषय क्षेत्र' : 'Primary Focus Area / Weakness'}
            </label>
            <input
              type="text"
              value={weakArea}
              onChange={e => setWeakArea(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-semibold text-slate-800 dark:text-slate-200"
            />
          </div>
        </div>
      </div>

      {/* Plan Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 space-y-1">
          <span className="text-xs text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider block">
            {isHindi ? 'परीक्षा में शेष दिन' : 'Days Until Exam'}
          </span>
          <span className="text-3xl font-black text-slate-900 dark:text-slate-100 font-mono">
            {daysLeft} {isHindi ? 'दिन' : 'Days'}
          </span>
          <p className="text-xs text-slate-500 mt-1">Based on target date {targetExamDate}</p>
        </div>

        <div className="p-5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60 space-y-1">
          <span className="text-xs text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider block">
            {isHindi ? 'कुल नियोजित अध्ययन घंटे' : 'Total Planned Study Hours'}
          </span>
          <span className="text-3xl font-black text-indigo-900 dark:text-indigo-200 font-mono">
            {totalStudyHoursPlanned} {isHindi ? 'घंटे' : 'Hours'}
          </span>
          <p className="text-xs text-slate-500 mt-1">{dailyHours} hours/day continuous cadence</p>
        </div>

        <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 space-y-1">
          <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider block">
            {isHindi ? 'अनुशंसित मॉक टेस्ट' : 'Recommended Mock Tests'}
          </span>
          <span className="text-3xl font-black text-emerald-900 dark:text-emerald-200 font-mono">
            {Math.max(3, Math.floor(daysLeft / 15))} {isHindi ? 'मॉक' : 'Mocks'}
          </span>
          <p className="text-xs text-slate-500 mt-1">1 official mock exam every 14–15 days</p>
        </div>
      </div>

      {/* Generated Study Routine & Milestones */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Routine Schedule */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-xs">
          <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-600" />
            <span>{isHindi ? 'दैनिक समय सारणी खाका' : 'Daily Time Allocation Blueprint'}</span>
          </h3>

          <div className="space-y-3 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <strong className="block text-slate-800 dark:text-slate-200">
                  {isHindi ? 'सत्र 1: अवधारणा एवं कोर थ्योरी' : 'Session 1: Concept & Core Theory'}
                </strong>
                <span className="text-slate-500">Official BOS Study Material readings & statutory text</span>
              </div>
              <span className="font-mono font-bold text-blue-600">
                {Math.round(dailyHours * 0.45 * 10) / 10} hrs
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <strong className="block text-slate-800 dark:text-slate-200">
                  {isHindi ? 'सत्र 2: संख्यात्मक एवं प्रश्न अभ्यास' : 'Session 2: Problem Solving & PYQ Drills'}
                </strong>
                <span className="text-slate-500">Practice Hub questions, illustrations, and problem sets</span>
              </div>
              <span className="font-mono font-bold text-indigo-600">
                {Math.round(dailyHours * 0.35 * 10) / 10} hrs
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <strong className="block text-slate-800 dark:text-slate-200">
                  {isHindi ? 'सत्र 3: फ्लैशकार्ड पुनरीक्षण एवं त्रुटि समीक्षा' : 'Session 3: Flashcards & Error Notebook'}
                </strong>
                <span className="text-slate-500">Daily spaced repetition flashcards & reviewing error logs</span>
              </div>
              <span className="font-mono font-bold text-emerald-600">
                {Math.round(dailyHours * 0.20 * 10) / 10} hrs
              </span>
            </div>
          </div>
        </div>

        {/* Weekly Countdown Sprints */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-xs">
          <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-emerald-600" />
            <span>{isHindi ? 'साप्ताहिक पुनरीक्षण एवं मॉक माइलस्टोन' : 'Preparation Milestone Sprints'}</span>
          </h3>

          <div className="space-y-3 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-1">
              <div className="flex items-center justify-between font-bold">
                <span className="text-slate-800 dark:text-slate-200">Phase 1: Comprehensive Syllabus Coverage</span>
                <span className="text-blue-600 font-mono">Days 1 – {Math.round(daysLeft * 0.6)}</span>
              </div>
              <p className="text-slate-500">Complete all chapters, illustrations, and primary institute modules.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-1">
              <div className="flex items-center justify-between font-bold">
                <span className="text-slate-800 dark:text-slate-200">Phase 2: First Consolidated Revision + Sectional Tests</span>
                <span className="text-indigo-600 font-mono">Days {Math.round(daysLeft * 0.6) + 1} – {Math.round(daysLeft * 0.85)}</span>
              </div>
              <p className="text-slate-500">High-yield summary notes, formula revision, and past 5 years PYQs.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 space-y-1 text-amber-900 dark:text-amber-200">
              <div className="flex items-center justify-between font-bold">
                <span>Phase 3: Full Exam Condition Mocks & Error Elimination</span>
                <span className="font-mono text-amber-800 dark:text-amber-300">Final {daysLeft - Math.round(daysLeft * 0.85)} Days</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300">Minimum 3 to 5 full length timed mock exams with strict negative marking.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
