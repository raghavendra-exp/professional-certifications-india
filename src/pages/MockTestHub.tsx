import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Award, 
  RotateCcw, 
  Bookmark, 
  ChevronRight, 
  ChevronLeft, 
  AlertTriangle,
  BarChart3,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useUserProgress } from '../context/UserProgressContext';
import { questionsData } from '../data/questions';
import { certificationsData } from '../data/certifications';
import type { Question, MockTestResult, MistakeType } from '../types';

interface MockTestHubProps {
  initialCertId?: string;
  onNavigate: (view: string, id?: string) => void;
}

export const MockTestHub: React.FC<MockTestHubProps> = ({ initialCertId, onNavigate }) => {
  const { isHindi } = useLanguage();
  const { saveMockResult, addErrorLog } = useUserProgress();

  const [selectedCertId, setSelectedCertId] = useState<string>(initialCertId || 'ca');
  const [testState, setTestState] = useState<'IDLE' | 'RUNNING' | 'SUBMITTED'>('IDLE');

  // Test setup
  const [testQuestions, setTestQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [reviewMarks, setReviewMarks] = useState<Record<string, boolean>>({});
  const [visited, setVisited] = useState<Record<string, boolean>>({});
  
  // Timer (seconds)
  const [timeRemaining, setTimeRemaining] = useState<number>(1800); // 30 minutes default
  const [timeSpent, setTimeSpent] = useState<number>(0);

  // Result
  const [result, setResult] = useState<MockTestResult | null>(null);

  const startTest = (certId: string) => {
    const certQs = questionsData.filter(q => q.certificationId === certId);
    const pool = certQs.length >= 5 ? certQs : questionsData.slice(0, 10);
    
    setTestQuestions(pool);
    setCurrentIndex(0);
    setAnswers({});
    setReviewMarks({});
    setVisited({ [pool[0]?.id]: true });
    setTimeRemaining(pool.length * 90); // 90 seconds per question
    setTimeSpent(0);
    setTestState('RUNNING');
  };

  // Timer effect
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (testState === 'RUNNING' && timeRemaining > 0) {

      timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            handleSubmit();
            return 0;
          }
          return prev - 1;
        });
        setTimeSpent(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [testState, timeRemaining]);

  const handleSelectAnswer = (optionIdx: number) => {
    const currentQ = testQuestions[currentIndex];
    if (!currentQ) return;
    setAnswers(prev => ({ ...prev, [currentQ.id]: optionIdx }));
  };

  const handleClearAnswer = () => {
    const currentQ = testQuestions[currentIndex];
    if (!currentQ) return;
    setAnswers(prev => {
      const copy = { ...prev };
      delete copy[currentQ.id];
      return copy;
    });
  };

  const handleToggleReview = () => {
    const currentQ = testQuestions[currentIndex];
    if (!currentQ) return;
    setReviewMarks(prev => ({ ...prev, [currentQ.id]: !prev[currentQ.id] }));
  };

  const handleNavigateQuestion = (index: number) => {
    setCurrentIndex(index);
    const targetQ = testQuestions[index];
    if (targetQ) {
      setVisited(prev => ({ ...prev, [targetQ.id]: true }));
    }
  };

  const handleSubmit = () => {
    let correct = 0;
    let wrong = 0;
    let score = 0;

    const certObj = certificationsData.find(c => c.id === selectedCertId);

    testQuestions.forEach(q => {
      const userAns = answers[q.id];
      if (userAns !== undefined) {
        if (userAns === q.answer) {
          correct++;
          score += 1; // 1 mark per question
        } else {
          wrong++;
          const negVal = q.negativeMarkingValue !== undefined ? q.negativeMarkingValue : 0;
          score -= negVal;

          // Auto-log to Error Notebook
          addErrorLog({
            questionId: q.id,
            certificationId: q.certificationId,
            paperId: q.paperId,
            domainId: q.domainId,
            userSelectedOption: userAns,
            correctOption: q.answer,
            mistakeType: 'Conceptual' as MistakeType,
            notes: `Mistake recorded during ${certObj?.acronym || ''} Mock Test`
          });
        }
      }
    });

    const accuracy = correct + wrong > 0 ? (correct / (correct + wrong)) * 100 : 0;

    const finalResult: MockTestResult = {
      id: 'mock_' + Date.now(),
      certificationId: selectedCertId,
      levelId: testQuestions[0]?.levelId || 'level-1',
      paperId: testQuestions[0]?.paperId || 'paper-1',
      testTitle: `${certObj?.acronym || 'Professional'} Official Pattern Mock Test`,
      totalQuestions: testQuestions.length,
      attemptedQuestions: correct + wrong,
      correctAnswers: correct,
      wrongAnswers: wrong,
      marksObtained: Math.max(0, Number(score.toFixed(2))),
      totalMarks: testQuestions.length,
      accuracyPercentage: Math.round(accuracy),
      timeSpentSeconds: timeSpent,
      timestamp: new Date().toISOString(),
      domainBreakdown: [
        {
          domainId: 'domain-all',
          domainName: 'Overall Paper Assessment',
          total: testQuestions.length,
          correct,
          score: Math.max(0, Number(score.toFixed(2)))
        }
      ]
    };

    setResult(finalResult);
    saveMockResult(finalResult);
    setTestState('SUBMITTED');
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQ = testQuestions[currentIndex];

  // 1. IDLE STATE: Launch Screen
  if (testState === 'IDLE') {
    return (
      <div className="space-y-8 pb-16">
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            <Clock className="w-4 h-4" />
            <span>{isHindi ? 'आधिकारिक परीक्षा अनुकरण' : 'Official Exam Simulation Engine'}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
            {isHindi ? 'पूर्ण आधिकारिक पैटर्न मॉक टेस्ट' : 'Official Timed Mock Test Series'}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            {isHindi
              ? 'आधिकारिक नेगेटिव मार्किंग (0.25), वास्तविक समय उलटी गिनती टाइमर, प्रश्न स्थिति पटल (उत्तर दिया, समीक्षा हेतु, अनसुलझा) एवं त्वरित प्रदर्शन विश्लेषण।'
              : 'Experience official test conditions with real-time countdown timer, official negative marking rules, question palette navigation, and instant scorecards.'}
          </p>

          {/* Select Target Certification */}
          <div className="space-y-3 pt-2">
            <label className="block text-xs font-bold uppercase text-slate-500">
              {isHindi ? 'लक्षित परीक्षा / प्रमाणपत्र चुनें' : 'Select Target Certification'}:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {certificationsData.slice(0, 8).map(cert => (
                <button
                  key={cert.id}
                  onClick={() => setSelectedCertId(cert.id)}
                  className={`p-3.5 rounded-2xl border text-left flex items-center gap-2.5 transition-all ${
                    selectedCertId === cert.id
                      ? 'border-blue-600 bg-blue-50/60 dark:bg-blue-950/40 shadow-xs'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300'
                  }`}
                >
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white shrink-0"
                    style={{ backgroundColor: cert.badgeColor }}
                  >
                    {cert.acronym}
                  </span>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                    {cert.acronym}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Instructions Box */}
          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200 space-y-2">
            <h4 className="font-bold uppercase tracking-wide flex items-center gap-1.5 text-amber-800 dark:text-amber-300">
              <AlertTriangle className="w-4 h-4" />
              <span>{isHindi ? 'परीक्षा निर्देश' : 'Official Examination Guidelines'}</span>
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>{isHindi ? 'प्रत्येक सही उत्तर के लिए 1 अंक दिया जाएगा।' : '1 mark awarded for each correct answer.'}</li>
              <li>{isHindi ? 'लागू होने पर आधिकारिक नियमों के अनुसार 0.25 नकारात्मक अंकन काटा जाएगा।' : '0.25 negative marks deducted for wrong answers where applicable.'}</li>
              <li>{isHindi ? 'गलत प्रश्नों को स्वतः आपकी व्यक्तिगत त्रुटि नोटबुक में जोड़ दिया जाएगा।' : 'Incorrect questions are automatically logged to your private Error Notebook.'}</li>
              <li>{isHindi ? 'टाइमर शून्य होने पर टेस्ट स्वतः सबमिट हो जाएगा।' : 'The exam will automatically submit when the countdown timer hits 00:00.'}</li>
            </ul>
          </div>

          <button
            onClick={() => startTest(selectedCertId)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl shadow-lg shadow-blue-600/30 text-sm transition-all hover:scale-102"
          >
            <span>{isHindi ? 'मॉक टेस्ट शुरू करें' : 'Start Timed Mock Exam'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // 2. RUNNING STATE: Live Exam Interface
  if (testState === 'RUNNING' && currentQ) {
    const isAnswered = answers[currentQ.id] !== undefined;
    const isReviewed = reviewMarks[currentQ.id];

    return (
      <div className="space-y-4 pb-20">
        {/* Top Control Bar with Timer & Status */}
        <div className="sticky top-16 z-30 flex items-center justify-between p-3.5 sm:p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md">
          <div className="flex items-center gap-3">
            <span className="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-100">
              {isHindi ? 'प्रश्न' : 'Question'} {currentIndex + 1} / {testQuestions.length}
            </span>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 uppercase">
              {currentQ.sourceType}
            </span>
          </div>

          {/* Countdown Clock */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-mono text-sm sm:text-base font-bold shadow-xs">
            <Clock className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>{formatTimer(timeRemaining)}</span>
          </div>

          {/* Submit Button */}
          <button
            onClick={() => {
              if (window.confirm(isHindi ? 'क्या आप टेस्ट सबमिट करना चाहते हैं?' : 'Are you sure you want to submit the exam?')) {
                handleSubmit();
              }
            }}
            className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
          >
            {isHindi ? 'सबमिट करें' : 'Submit Exam'}
          </button>
        </div>

        {/* Main Testing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Question & Options Area */}
          <div className="lg:col-span-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 space-y-6 shadow-xs">
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
                {isHindi && currentQ.hindiQuestion ? currentQ.hindiQuestion : currentQ.question}
              </p>
              {isHindi && currentQ.hindiQuestion && (
                <p className="text-xs text-slate-400 font-normal">
                  [Eng: {currentQ.question}]
                </p>
              )}
            </div>

            {/* Options */}
            <div className="space-y-2.5">
              {currentQ.options.map((opt, oIdx) => {
                const isSelected = answers[currentQ.id] === oIdx;
                return (
                  <button
                    key={oIdx}
                    onClick={() => handleSelectAnswer(oIdx)}
                    className={`w-full flex items-start text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all ${
                      isSelected
                        ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-950 dark:text-blue-100 font-semibold'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-lg font-bold text-xs flex items-center justify-center shrink-0 mr-3 font-mono ${
                      isSelected
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }`}>
                      {String.fromCharCode(65 + oIdx)}
                    </span>
                    <span className="flex-1 mt-0.5">
                      {isHindi && currentQ.hindiOptions && currentQ.hindiOptions[oIdx]
                        ? currentQ.hindiOptions[oIdx]
                        : opt}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleToggleReview}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-semibold transition-colors ${
                    isReviewed
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300'
                      : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {isReviewed ? (isHindi ? 'समीक्षा चिह्न हटाएं' : 'Unmark Review') : (isHindi ? 'समीक्षा हेतु चिह्नित करें' : 'Mark for Review')}
                </button>
                <button
                  onClick={handleClearAnswer}
                  disabled={!isAnswered}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-xs font-semibold hover:bg-slate-100 disabled:opacity-40"
                >
                  {isHindi ? 'उत्तर हटाएं' : 'Clear Response'}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => currentIndex > 0 && handleNavigateQuestion(currentIndex - 1)}
                  disabled={currentIndex === 0}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center gap-1 disabled:opacity-40"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>{isHindi ? 'पिछला' : 'Previous'}</span>
                </button>
                <button
                  onClick={() => currentIndex < testQuestions.length - 1 && handleNavigateQuestion(currentIndex + 1)}
                  disabled={currentIndex === testQuestions.length - 1}
                  className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl flex items-center gap-1 disabled:opacity-40"
                >
                  <span>{isHindi ? 'अगला' : 'Next'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Question Palette Grid (Answered, Not Answered, Review, Not Visited) */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 space-y-4 shadow-xs">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {isHindi ? 'प्रश्न पटल' : 'Question Palette'}
            </h4>

            {/* Legend */}
            <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-600 dark:text-slate-400 pb-2 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                <span>{isHindi ? 'उत्तर दिया' : 'Answered'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-purple-500" />
                <span>{isHindi ? 'समीक्षा हेतु' : 'Review'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500" />
                <span>{isHindi ? 'अनसुलझा' : 'Not Answered'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span>{isHindi ? 'नहीं देखा' : 'Not Visited'}</span>
              </div>
            </div>

            {/* Questions Number Grid */}
            <div className="grid grid-cols-5 gap-2">
              {testQuestions.map((q, idx) => {
                const ans = answers[q.id] !== undefined;
                const rev = reviewMarks[q.id];
                const vis = visited[q.id];
                const isCurrent = idx === currentIndex;

                let colorStyle = 'bg-slate-100 dark:bg-slate-800 text-slate-500';
                if (rev) {
                  colorStyle = 'bg-purple-600 text-white';
                } else if (ans) {
                  colorStyle = 'bg-emerald-600 text-white';
                } else if (vis) {
                  colorStyle = 'bg-rose-500 text-white';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => handleNavigateQuestion(idx)}
                    className={`h-8 rounded-lg font-bold text-xs flex items-center justify-center transition-all ${colorStyle} ${
                      isCurrent ? 'ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-slate-900 scale-105' : ''
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. SUBMITTED STATE: Comprehensive Scorecard & Review
  if (testState === 'SUBMITTED' && result) {
    return (
      <div className="space-y-8 pb-16">
        {/* Scorecard Hero */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                {isHindi ? 'मॉक टेस्ट संपन्न' : 'Mock Test Completed'}
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-white mt-2">
                {result.testTitle}
              </h1>
              <p className="text-xs text-slate-400 mt-1">
                Completed on {new Date(result.timestamp).toLocaleDateString()} • Time spent: {Math.floor(result.timeSpentSeconds / 60)}m {result.timeSpentSeconds % 60}s
              </p>
            </div>

            <button
              onClick={() => setTestState('IDLE')}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 shrink-0"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{isHindi ? 'दूसरा टेस्ट लें' : 'Take Another Test'}</span>
            </button>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800 text-center">
            <div className="p-4 bg-slate-800/60 rounded-2xl border border-slate-700/60">
              <span className="text-xs text-slate-400 block">{isHindi ? 'अंक प्राप्त' : 'Score Obtained'}</span>
              <span className="text-2xl sm:text-3xl font-black text-amber-400 font-mono mt-1 block">
                {result.marksObtained} / {result.totalMarks}
              </span>
            </div>

            <div className="p-4 bg-slate-800/60 rounded-2xl border border-slate-700/60">
              <span className="text-xs text-slate-400 block">{isHindi ? 'सटीकता' : 'Accuracy'}</span>
              <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono mt-1 block">
                {result.accuracyPercentage}%
              </span>
            </div>

            <div className="p-4 bg-slate-800/60 rounded-2xl border border-slate-700/60">
              <span className="text-xs text-slate-400 block">{isHindi ? 'सही उत्तर' : 'Correct'}</span>
              <span className="text-2xl sm:text-3xl font-black text-emerald-500 font-mono mt-1 block">
                {result.correctAnswers}
              </span>
            </div>

            <div className="p-4 bg-slate-800/60 rounded-2xl border border-slate-700/60">
              <span className="text-xs text-slate-400 block">{isHindi ? 'गलत उत्तर' : 'Incorrect'}</span>
              <span className="text-2xl sm:text-3xl font-black text-rose-400 font-mono mt-1 block">
                {result.wrongAnswers}
              </span>
            </div>
          </div>
        </div>

        {/* Detailed Solutions & Question-by-Question Review */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            {isHindi ? 'विस्तृत प्रश्न समीक्षा एवं समाधान' : 'Question-by-Question Solution Review'}
          </h2>

          <div className="space-y-4">
            {testQuestions.map((q, idx) => {
              const userAns = answers[q.id];
              const isCorrect = userAns === q.answer;
              const isUnattempted = userAns === undefined;

              return (
                <div
                  key={q.id}
                  className={`p-5 rounded-2xl border space-y-3 bg-white dark:bg-slate-900 ${
                    isCorrect
                      ? 'border-emerald-200 dark:border-emerald-900/50'
                      : isUnattempted
                      ? 'border-slate-200 dark:border-slate-800'
                      : 'border-rose-200 dark:border-rose-900/50'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-slate-500">Q{idx + 1}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      isCorrect
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        : isUnattempted
                        ? 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
                        : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                    }`}>
                      {isCorrect ? 'CORRECT (+1)' : isUnattempted ? 'UNATTEMPTED (0)' : `WRONG (-${q.negativeMarkingValue || 0})`}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {isHindi && q.hindiQuestion ? q.hindiQuestion : q.question}
                  </p>

                  {/* Options with Status */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {q.options.map((opt, oIdx) => {
                      const isCorrectOpt = oIdx === q.answer;
                      const isUserChoice = oIdx === userAns;

                      let style = 'bg-slate-50 dark:bg-slate-800/40 text-slate-600 dark:text-slate-400';
                      if (isCorrectOpt) {
                        style = 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 font-bold border border-emerald-400';
                      } else if (isUserChoice) {
                        style = 'bg-rose-100 dark:bg-rose-950/60 text-rose-900 dark:text-rose-200 font-bold border border-rose-400';
                      }

                      return (
                        <div key={oIdx} className={`p-2.5 rounded-xl ${style}`}>
                          <span className="font-mono mr-2">{String.fromCharCode(65 + oIdx)}.</span>
                          <span>{isHindi && q.hindiOptions && q.hindiOptions[oIdx] ? q.hindiOptions[oIdx] : opt}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Rationale */}
                  <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl text-xs text-slate-700 dark:text-slate-300">
                    <strong className="text-blue-600 dark:text-blue-400 block mb-1">
                      {isHindi ? 'आधिकारिक व्याख्या' : 'Official Rationale & Statute'}:
                    </strong>
                    {isHindi && q.hindiExplanation ? q.hindiExplanation : q.explanation}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return null;
};
