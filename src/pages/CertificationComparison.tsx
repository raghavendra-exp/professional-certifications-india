import React, { useState } from 'react';
import { Bookmark, Check, X, Building2, Scale, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { certificationsData } from '../data/certifications';

export const CertificationComparison: React.FC = () => {
  const { isHindi } = useLanguage();

  const [selectedCerts, setSelectedCerts] = useState<string[]>(['ca', 'cfa', 'frm', 'cs']);

  const toggleSelectCert = (id: string) => {
    if (selectedCerts.includes(id)) {
      if (selectedCerts.length > 2) {
        setSelectedCerts(prev => prev.filter(c => c !== id));
      }
    } else {
      if (selectedCerts.length < 5) {
        setSelectedCerts(prev => [...prev, id]);
      }
    }
  };

  const activeCerts = certificationsData.filter(c => selectedCerts.includes(c.id));

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <Bookmark className="w-4 h-4" />
          <span>{isHindi ? 'तुलनात्मक मूल्यांकन' : 'Multi-Criteria Comparison Matrix'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
          {isHindi ? 'प्रमाणपत्रों की विस्तृत तुलना मैट्रिक्स' : 'Comprehensive Certification Comparison Matrix'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed">
          {isHindi
            ? 'संस्थान, स्तर, अनुभव आवश्यकता, वैधानिक अधिकार, उत्तीर्णता मानदंड और नवीनीकरण नियमों की निष्पक्ष तुलना।'
            : 'Unbiased side-by-side evaluation of major accounting, legal, investment, risk, and banking qualifications based on current statutory rules.'}
        </p>

        {/* Multi-Select Pills */}
        <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
          <span className="text-xs font-bold text-slate-500 block">
            {isHindi ? 'तुलना हेतु 2 से 4 प्रमाणपत्र चुनें' : 'Select 2 to 4 Certifications to Compare'}:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {certificationsData.map(c => {
              const isSelected = selectedCerts.includes(c.id);
              return (
                <button
                  key={c.id}
                  onClick={() => toggleSelectCert(c.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  {c.acronym}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
        <div className="overflow-x-auto scrollbar-thin">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800">
                <th className="p-4 sm:p-5 font-bold text-slate-500 uppercase tracking-wider text-[11px] w-48 min-w-[180px]">
                  Feature / Parameter
                </th>
                {activeCerts.map(c => (
                  <th key={c.id} className="p-4 sm:p-5 min-w-[220px]">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-7 h-7 rounded-lg text-white font-bold text-xs flex items-center justify-center font-mono shrink-0"
                        style={{ backgroundColor: c.badgeColor }}
                      >
                        {c.acronym}
                      </span>
                      <div>
                        <span className="font-bold text-slate-900 dark:text-slate-100 block">
                          {c.acronym}
                        </span>
                        <span className="text-[10px] text-slate-400 font-normal truncate block max-w-[160px]">
                          {c.institute}
                        </span>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {/* Primary Area */}
              <tr>
                <td className="p-4 font-bold text-slate-700 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-800/30">
                  Primary Domain
                </td>
                {activeCerts.map(c => (
                  <td key={c.id} className="p-4 text-slate-800 dark:text-slate-200 font-semibold">
                    {c.categoryLabel}
                  </td>
                ))}
              </tr>

              {/* Governing Institute */}
              <tr>
                <td className="p-4 font-bold text-slate-700 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-800/30">
                  Governing Institute
                </td>
                {activeCerts.map(c => (
                  <td key={c.id} className="p-4 text-slate-700 dark:text-slate-300">
                    {c.institute} ({c.country})
                  </td>
                ))}
              </tr>

              {/* Levels / Stages */}
              <tr>
                <td className="p-4 font-bold text-slate-700 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-800/30">
                  Levels / Exam Stages
                </td>
                {activeCerts.map(c => (
                  <td key={c.id} className="p-4 text-slate-700 dark:text-slate-300">
                    {c.levels.map(l => l.name).join(' → ')}
                  </td>
                ))}
              </tr>

              {/* Practical Training */}
              <tr>
                <td className="p-4 font-bold text-slate-700 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-800/30">
                  Practical Experience
                </td>
                {activeCerts.map(c => (
                  <td key={c.id} className="p-4 text-slate-700 dark:text-slate-300">
                    <span className="font-semibold text-slate-900 dark:text-slate-100 block">
                      {c.practicalTraining.duration}
                    </span>
                    <span className="text-[11px] text-slate-500 mt-0.5 block">
                      {c.practicalTraining.timing}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Passing Criteria */}
              <tr>
                <td className="p-4 font-bold text-slate-700 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-800/30">
                  Passing Criteria
                </td>
                {activeCerts.map(c => (
                  <td key={c.id} className="p-4 text-slate-700 dark:text-slate-300 text-xs">
                    {c.passingCriteria}
                  </td>
                ))}
              </tr>

              {/* Statutory Authority in India */}
              <tr>
                <td className="p-4 font-bold text-slate-700 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-800/30">
                  Statutory Power in India
                </td>
                {activeCerts.map(c => (
                  <td key={c.id} className="p-4 text-slate-700 dark:text-slate-300 text-xs">
                    {c.id === 'ca'
                      ? 'Exclusive legal power to sign statutory company financial statements and tax audit reports.'
                      : c.id === 'cs'
                      ? 'Exclusive legal authority to conduct Secretarial Audit (Sec 204 Companies Act) & SEBI governance.'
                      : c.id === 'cma'
                      ? 'Exclusive legal authority to conduct Cost Audit under Section 148 of Companies Act.'
                      : c.id === 'jaiib' || c.id === 'caiib'
                      ? 'Statutory advance increment in commercial banks and official officer cadre promotions.'
                      : 'Internationally recognized credential; respected benchmark across MNCs and global investment houses.'}
                  </td>
                ))}
              </tr>

              {/* Estimated Total Cost */}
              <tr>
                <td className="p-4 font-bold text-slate-700 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-800/30">
                  Total Estimated Cost
                </td>
                {activeCerts.map(c => (
                  <td key={c.id} className="p-4 font-mono font-bold text-amber-600 dark:text-amber-400">
                    {c.feeStructure.estimatedPreparationCost}
                  </td>
                ))}
              </tr>

              {/* Renewal / CPE Maintenance */}
              <tr>
                <td className="p-4 font-bold text-slate-700 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-800/30">
                  Renewal / CPE Mandate
                </td>
                {activeCerts.map(c => (
                  <td key={c.id} className="p-4 text-slate-700 dark:text-slate-300 text-xs">
                    <span className="font-semibold block">{c.renewalCpeRequirements.cpeHoursPerYear}</span>
                    <span className="text-[11px] text-slate-500">{c.renewalCpeRequirements.details}</span>
                  </td>
                ))}
              </tr>

              {/* Global Recognition */}
              <tr>
                <td className="p-4 font-bold text-slate-700 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-800/30">
                  Global Mobility
                </td>
                {activeCerts.map(c => (
                  <td key={c.id} className="p-4 text-slate-700 dark:text-slate-300 text-xs">
                    {c.globalRecognition}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
