import React, { useState } from 'react';
import { 
  Award, 
  User, 
  Mail, 
  CheckCircle2, 
  Printer, 
  Download, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Plus, 
  ExternalLink 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useUserProgress } from '../context/UserProgressContext';
import { certificationsData } from '../data/certifications';

export const MyProfile: React.FC = () => {
  const { isHindi } = useLanguage();
  const { userProfile, mockResults, cpeRecords, completedFlashcards, errorLogs } = useUserProgress();

  const handlePrint = () => {
    window.print();
  };

  const totalMocksTaken = mockResults.length;
  const avgMockScore = totalMocksTaken > 0
    ? Math.round(mockResults.reduce((acc, m) => acc + m.accuracyPercentage, 0) / totalMocksTaken)
    : 0;

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <Award className="w-4 h-4" />
            <span>{isHindi ? 'पेशेवर क्रेडेंशियल पोर्टफोलियो' : 'Verified Professional Portfolio'}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
            {isHindi ? 'मेरा सर्टिफिकेशन प्रोफाइल' : 'My Certification Profile & Standing'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {isHindi
              ? 'आपके पंजीकृत प्रमाणपत्र, परीक्षा परिणाम, सतत व्यावसायिक शिक्षा (CPE) एवं तैयारी की समग्र रिपोर्ट।'
              : 'Consolidated record of active professional qualifications, mock exam scores, and statutory CPE compliance.'}
          </p>
        </div>

        <button
          onClick={handlePrint}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 font-bold text-xs rounded-xl shadow-xs transition-all shrink-0"
        >
          <Printer className="w-4 h-4" />
          <span>{isHindi ? 'पोर्टफोलियो प्रिंट / PDF' : 'Print / Export PDF'}</span>
        </button>
      </div>

      {/* Profile Overview Card */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xl sm:text-2xl font-black shadow-md">
              CA
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                {userProfile.name}
              </h2>
              <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{userProfile.email}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
              Active Candidate / Practitioner
            </span>
          </div>
        </div>

        {/* Global Progress Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800 text-center text-xs">
          <div className="p-4 bg-slate-800/60 rounded-2xl border border-slate-700/60">
            <span className="text-slate-400 block">{isHindi ? 'सक्रिय नामांकन' : 'Enrolled Credentials'}</span>
            <span className="text-2xl font-black text-white font-mono mt-1 block">
              {userProfile.enrolledCertifications.length}
            </span>
          </div>

          <div className="p-4 bg-slate-800/60 rounded-2xl border border-slate-700/60">
            <span className="text-slate-400 block">{isHindi ? 'मॉक टेस्ट संपन्न' : 'Mocks Completed'}</span>
            <span className="text-2xl font-black text-amber-400 font-mono mt-1 block">
              {totalMocksTaken}
            </span>
          </div>

          <div className="p-4 bg-slate-800/60 rounded-2xl border border-slate-700/60">
            <span className="text-slate-400 block">{isHindi ? 'औसत मॉक सटीकता' : 'Avg Accuracy'}</span>
            <span className="text-2xl font-black text-emerald-400 font-mono mt-1 block">
              {avgMockScore}%
            </span>
          </div>

          <div className="p-4 bg-slate-800/60 rounded-2xl border border-slate-700/60">
            <span className="text-slate-400 block">{isHindi ? 'कंठस्थ फ्लैशकार्ड' : 'Mastered Cards'}</span>
            <span className="text-2xl font-black text-blue-400 font-mono mt-1 block">
              {completedFlashcards.length}
            </span>
          </div>
        </div>
      </div>

      {/* Enrolled Certifications List */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
          {isHindi ? 'पंजीकृत एवं लक्षित प्रमाणपत्र' : 'Active Credential Registrations'}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {userProfile.enrolledCertifications.map(item => {
            const cert = certificationsData.find(c => c.id === item.certificationId);
            if (!cert) return null;

            return (
              <div
                key={item.certificationId}
                className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold text-white shrink-0"
                      style={{ backgroundColor: cert.badgeColor }}
                    >
                      {cert.acronym}
                    </span>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-slate-500">{cert.institute}</p>
                    </div>
                  </div>

                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                    {item.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 dark:bg-slate-800/40 p-3 rounded-xl">
                  <div>
                    <span className="text-slate-400 block">{isHindi ? 'वर्तमान स्तर' : 'Current Level'}:</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">{item.currentLevel}</span>
                  </div>
                  {item.registrationNumber && (
                    <div>
                      <span className="text-slate-400 block">{isHindi ? 'पंजीकरण संख्या' : 'Registration No'}:</span>
                      <span className="font-mono font-bold text-slate-800 dark:text-slate-200">{item.registrationNumber}</span>
                    </div>
                  )}
                  {item.examTargetDate && (
                    <div className="col-span-2">
                      <span className="text-slate-400 block">{isHindi ? 'लक्षित परीक्षा' : 'Target Exam Date'}:</span>
                      <span className="font-mono text-slate-700 dark:text-slate-300">{item.examTargetDate}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mock Tests History */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-xs">
        <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
          {isHindi ? 'मॉक टेस्ट इतिहास' : 'Official Mock Test History'}
        </h3>

        {mockResults.length === 0 ? (
          <p className="text-xs text-slate-500">
            {isHindi ? 'अभी तक कोई मॉक टेस्ट नहीं लिया गया।' : 'No mock tests completed yet.'}
          </p>
        ) : (
          <div className="overflow-x-auto scrollbar-thin">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-[11px] font-bold text-slate-400 uppercase">
                  <th className="py-2.5">Date</th>
                  <th className="py-2.5">Test Title</th>
                  <th className="py-2.5">Score</th>
                  <th className="py-2.5">Accuracy</th>
                  <th className="py-2.5">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
                {mockResults.map(m => (
                  <tr key={m.id}>
                    <td className="py-2.5 font-mono text-slate-500">
                      {new Date(m.timestamp).toLocaleDateString()}
                    </td>
                    <td className="py-2.5 font-bold text-slate-900 dark:text-slate-100">
                      {m.testTitle}
                    </td>
                    <td className="py-2.5 font-mono font-bold text-blue-600">
                      {m.marksObtained} / {m.totalMarks}
                    </td>
                    <td className="py-2.5 font-mono font-bold text-emerald-600">
                      {m.accuracyPercentage}%
                    </td>
                    <td className="py-2.5 font-mono text-slate-500">
                      {Math.floor(m.timeSpentSeconds / 60)}m {m.timeSpentSeconds % 60}s
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
