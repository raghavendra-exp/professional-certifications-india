import React, { useState } from 'react';
import { 
  UserCheck, 
  Plus, 
  Trash2, 
  Award, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Download, 
  FileText 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useUserProgress } from '../context/UserProgressContext';
import { certificationsData } from '../data/certifications';

export const RenewalAndCpeTracker: React.FC = () => {
  const { isHindi } = useLanguage();
  const { cpeRecords, addCpeRecord, deleteCpeRecord } = useUserProgress();

  const [showAddForm, setShowAddForm] = useState<boolean>(false);
  const [selectedCertId, setSelectedCertId] = useState<string>('ca');
  const [activityTitle, setActivityTitle] = useState<string>('');
  const [provider, setProvider] = useState<string>('');
  const [hoursEarned, setHoursEarned] = useState<number>(4);
  const [dateCompleted, setDateCompleted] = useState<string>(new Date().toISOString().split('T')[0]);
  const [certificateNumber, setCertificateNumber] = useState<string>('');
  const [cycleYear, setCycleYear] = useState<string>('2026-2027');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activityTitle || !provider) return;

    addCpeRecord({
      certificationId: selectedCertId,
      activityTitle,
      provider,
      hoursEarned,
      dateCompleted,
      certificateNumber,
      cycleYear,
    });

    setActivityTitle('');
    setProvider('');
    setCertificateNumber('');
    setShowAddForm(false);
  };

  const totalCpeHours = cpeRecords.reduce((acc, curr) => acc + curr.hoursEarned, 0);

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <UserCheck className="w-4 h-4" />
          <span>{isHindi ? 'क्रेडेंशियल रखरखाव एवं निरंतर शिक्षा' : 'Credential Maintenance & Continuing Education'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
          {isHindi ? 'नवीनीकरण एवं CPE / CPD क्रेडिट ट्रैकर' : 'Renewal & CPE / CPD / PDU Ledger'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed">
          {isHindi
            ? 'सीए, सीएस, सीएमए, सीएफए, सिसा और पीएमपी सदस्यों के लिए वार्षिक आवश्यक सतत व्यावसायिक शिक्षा (CPE/CPD) क्रेडिट्स का आधिकारिक खाता।'
            : 'Track statutory mandatory CPE, CPD, and PDU credits required annually to keep your professional memberships and licenses in active legal standing.'}
        </p>

        {/* Action Button */}
        <div className="pt-2 flex items-center gap-3">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-xs"
          >
            <Plus className="w-4 h-4" />
            <span>{isHindi ? 'नया CPE क्रेडिट दर्ज करें' : 'Log New CPE Activity'}</span>
          </button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">
            {isHindi ? 'कुल अर्जित CPE घंटे' : 'Total CPE Hours Logged'}
          </span>
          <span className="text-3xl font-black text-blue-600 dark:text-blue-400 font-mono">
            {totalCpeHours} hrs
          </span>
          <p className="text-xs text-slate-500 mt-1">Across all registered credentials</p>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">
            {isHindi ? 'दर्ज की गई गतिविधियां' : 'Activities Completed'}
          </span>
          <span className="text-3xl font-black text-slate-900 dark:text-slate-100 font-mono">
            {cpeRecords.length}
          </span>
          <p className="text-xs text-slate-500 mt-1">Conferences, webinars, workshops</p>
        </div>

        <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40 space-y-1">
          <span className="text-xs text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider block">
            {isHindi ? 'वर्तमान अनुपालन स्थिति' : 'Active Compliance Standing'}
          </span>
          <span className="text-xl font-black text-emerald-800 dark:text-emerald-200 block mt-1">
            IN COMPLIANCE
          </span>
          <p className="text-xs text-emerald-700/80 dark:text-emerald-400">Current triennium requirements on track</p>
        </div>
      </div>

      {/* Log Form Modal / Inline Box */}
      {showAddForm && (
        <form onSubmit={handleAdd} className="bg-white dark:bg-slate-900 rounded-2xl border border-blue-300 dark:border-blue-900 p-6 space-y-4 shadow-md animate-fadeIn">
          <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">
            {isHindi ? 'व्यावसायिक शिक्षा गतिविधि विवरण दर्ज करें' : 'Record Continuing Education Activity'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                {isHindi ? 'प्रमाणपत्र' : 'Associated Credential'}
              </label>
              <select
                value={selectedCertId}
                onChange={e => setSelectedCertId(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
              >
                {certificationsData.map(c => (
                  <option key={c.id} value={c.id}>
                    {c.acronym} — {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                {isHindi ? 'गतिविधि का शीर्षक' : 'Seminar / Workshop Title'}
              </label>
              <input
                type="text"
                required
                placeholder="e.g. National Conference on Ind AS & ESG"
                value={activityTitle}
                onChange={e => setActivityTitle(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                {isHindi ? 'आयोजक / संस्थान' : 'Accredited Provider'}
              </label>
              <input
                type="text"
                required
                placeholder="e.g. ICAI Regional Council / ISACA Chapter"
                value={provider}
                onChange={e => setProvider(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                {isHindi ? 'अर्जित घंटे' : 'Hours Earned'}
              </label>
              <input
                type="number"
                min={1}
                max={40}
                value={hoursEarned}
                onChange={e => setHoursEarned(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                {isHindi ? 'पूर्णता तिथि' : 'Completion Date'}
              </label>
              <input
                type="date"
                value={dateCompleted}
                onChange={e => setDateCompleted(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                {isHindi ? 'सर्टिफिकेट नंबर (यदि कोई हो)' : 'Certificate Number'}
              </label>
              <input
                type="text"
                placeholder="e.g. CERT-2026-098"
                value={certificateNumber}
                onChange={e => setCertificateNumber(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="px-4 py-2 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold rounded-xl"
            >
              {isHindi ? 'रद्द करें' : 'Cancel'}
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-xs"
            >
              {isHindi ? 'दर्ज करें' : 'Save Record'}
            </button>
          </div>
        </form>
      )}

      {/* Logged Records Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 font-bold text-sm text-slate-800 dark:text-slate-200">
          {isHindi ? 'दर्ज की गई गतिविधियों का लेजर' : 'Continuing Education Activity Ledger'}
        </div>

        <div className="overflow-x-auto scrollbar-thin">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-[11px] font-bold text-slate-400 uppercase">
                <th className="p-4 min-w-[100px]">Credential</th>
                <th className="p-4 min-w-[200px]">Activity Title</th>
                <th className="p-4 min-w-[140px]">Provider</th>
                <th className="p-4 min-w-[100px]">Date</th>
                <th className="p-4 text-center min-w-[80px]">Hours</th>
                <th className="p-4 text-right min-w-[70px]">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {cpeRecords.map(rec => (
                <tr key={rec.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                  <td className="p-4 font-mono font-bold text-blue-600 dark:text-blue-400 uppercase">
                    {rec.certificationId}
                  </td>
                  <td className="p-4 font-semibold text-slate-800 dark:text-slate-200">
                    {rec.activityTitle}
                    {rec.certificateNumber && (
                      <span className="block text-[10px] text-slate-400 font-mono">
                        Ref: {rec.certificateNumber}
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-slate-600 dark:text-slate-400">{rec.provider}</td>
                  <td className="p-4 font-mono text-slate-500">{rec.dateCompleted}</td>
                  <td className="p-4 text-center font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    +{rec.hoursEarned} hrs
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => deleteCpeRecord(rec.id)}
                      className="p-1 text-slate-400 hover:text-rose-600"
                      title="Delete record"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
