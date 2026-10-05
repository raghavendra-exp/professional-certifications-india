import React, { useState } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  ShieldCheck, 
  DollarSign, 
  Scale, 
  CheckCircle, 
  AlertTriangle, 
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const PracticalSimulators: React.FC = () => {
  const { isHindi } = useLanguage();
  const [activeSimulator, setActiveSimulator] = useState<'tax' | 'dupont' | 'var' | 'governance'>('tax');

  // --- 1. TAX CALCULATOR STATE ---
  const [taxableSalary, setTaxableSalary] = useState<number>(1200000);
  const [otherIncome, setOtherIncome] = useState<number>(100000);
  const [sec80c, setSec80c] = useState<number>(150000);
  const [sec80d, setSec80d] = useState<number>(25000);
  const [homeLoanInterest, setHomeLoanInterest] = useState<number>(200000);

  // Compute New Regime (Section 115BAC)
  const grossTotal = taxableSalary + otherIncome;
  const newRegimeStdDeduction = 75000;
  const newNetTaxable = Math.max(0, grossTotal - newRegimeStdDeduction);

  let newRegimeTax = 0;
  if (newNetTaxable > 1500000) {
    newRegimeTax = (newNetTaxable - 1500000) * 0.30 + 140000;
  } else if (newNetTaxable > 1200000) {
    newRegimeTax = (newNetTaxable - 1200000) * 0.20 + 80000;
  } else if (newNetTaxable > 1000000) {
    newRegimeTax = (newNetTaxable - 1000000) * 0.15 + 50000;
  } else if (newNetTaxable > 700000) {
    newRegimeTax = (newNetTaxable - 700000) * 0.10 + 20000;
  } else if (newNetTaxable > 300000) {
    newRegimeTax = (newNetTaxable - 300000) * 0.05;
  }

  // Section 87A rebate for new regime (if taxable income <= 7,00,000, tax is Nil)
  if (newNetTaxable <= 700000) {
    newRegimeTax = 0;
  }
  const newRegimeCess = newRegimeTax * 0.04;
  const newRegimeTotal = Math.round(newRegimeTax + newRegimeCess);

  // Compute Old Regime
  const oldRegimeStdDeduction = 50000;
  const oldNetTaxable = Math.max(
    0,
    grossTotal - oldRegimeStdDeduction - sec80c - sec80d - homeLoanInterest
  );

  let oldRegimeTax = 0;
  if (oldNetTaxable > 1000000) {
    oldRegimeTax = (oldNetTaxable - 1000000) * 0.30 + 112500;
  } else if (oldNetTaxable > 500000) {
    oldRegimeTax = (oldNetTaxable - 500000) * 0.20 + 12500;
  } else if (oldNetTaxable > 250000) {
    oldRegimeTax = (oldNetTaxable - 250000) * 0.05;
  }

  if (oldNetTaxable <= 500000) {
    oldRegimeTax = 0;
  }
  const oldRegimeCess = oldRegimeTax * 0.04;
  const oldRegimeTotal = Math.round(oldRegimeTax + oldRegimeCess);

  // --- 2. DUPONT ANALYSIS STATE ---
  const [netIncome, setNetIncome] = useState<number>(15000000); // 1.5 Cr
  const [revenue, setRevenue] = useState<number>(100000000); // 10 Cr
  const [totalAssets, setTotalAssets] = useState<number>(80000000); // 8 Cr
  const [equity, setEquity] = useState<number>(50000000); // 5 Cr

  const netProfitMargin = revenue > 0 ? (netIncome / revenue) * 100 : 0;
  const assetTurnover = totalAssets > 0 ? revenue / totalAssets : 0;
  const equityMultiplier = equity > 0 ? totalAssets / equity : 0;
  const dupontRoe = (netProfitMargin / 100) * assetTurnover * equityMultiplier * 100;

  // --- 3. VAR CALCULATOR STATE ---
  const [portfolioValue, setPortfolioValue] = useState<number>(10000000); // 1 Cr
  const [dailyVolPercent, setDailyVolPercent] = useState<number>(1.5); // 1.5%
  const [confLevel, setConfLevel] = useState<number>(99); // 95 or 99
  const [holdingPeriodDays, setHoldingPeriodDays] = useState<number>(10);

  const zScore = confLevel === 99 ? 2.326 : 1.645;
  const oneDayVar = portfolioValue * (dailyVolPercent / 100) * zScore;
  const tDayVar = oneDayVar * Math.sqrt(holdingPeriodDays);

  // --- 4. CORPORATE GOVERNANCE CHECKER ---
  const [totalDirectors, setTotalDirectors] = useState<number>(9);
  const [independentDirectors, setIndependentDirectors] = useState<number>(4);
  const [hasIndependentWomanDirector, setHasIndependentWomanDirector] = useState<boolean>(true);
  const [isChairmanExecutive, setIsChairmanExecutive] = useState<boolean>(false);
  const [auditCommitteeMembers, setAuditCommitteeMembers] = useState<number>(4);
  const [auditCommitteeIndependents, setAuditCommitteeIndependents] = useState<number>(3);

  const reqIndPct = isChairmanExecutive ? 0.5 : 0.333;
  const minRequiredInd = Math.ceil(totalDirectors * reqIndPct);
  const isBoardCompliant = independentDirectors >= minRequiredInd && hasIndependentWomanDirector;
  const isAuditCompliant =
    auditCommitteeMembers >= 3 &&
    auditCommitteeIndependents >= Math.ceil(auditCommitteeMembers * (2 / 3));

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <Calculator className="w-4 h-4" />
          <span>{isHindi ? 'व्यावहारिक सिमुलेशन लैब' : 'Professional Practical Lab'}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
          {isHindi ? 'इंटरएक्टिव वित्तीय, कर एवं जोखिम सिमुलेटर' : 'Interactive Tax, Financial & Governance Simulators'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed">
          {isHindi
            ? 'सीए, सीएफए, एफआरएम और सीएस परीक्षाओं में पूछे जाने वाले जटिल संख्यात्मक एवं कानूनी परिदृश्यों का तुरंत परीक्षण करें।'
            : 'Test real-world statutory tax calculations, DuPont financial levers, VaR risk metrics, and Board governance thresholds with instant reactive formulas.'}
        </p>

        {/* Tab Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pt-3 border-t border-slate-100 dark:border-slate-800 scrollbar-thin">
          <button
            onClick={() => setActiveSimulator('tax')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
              activeSimulator === 'tax'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {isHindi ? '1. आयकर धारा 115BAC सिमुलेटर' : '1. Section 115BAC Income Tax'}
          </button>
          <button
            onClick={() => setActiveSimulator('dupont')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
              activeSimulator === 'dupont'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {isHindi ? '2. ड्यूपॉन्ट 3-स्टेप ROE विश्लेषण' : '2. DuPont ROE Analyzer'}
          </button>
          <button
            onClick={() => setActiveSimulator('var')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
              activeSimulator === 'var'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {isHindi ? '3. वैल्यू एट रिस्क (VaR) जोखिम' : '3. Value at Risk (VaR)'}
          </button>
          <button
            onClick={() => setActiveSimulator('governance')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
              activeSimulator === 'governance'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {isHindi ? '4. बोर्ड शासन अनुपालन परीक्षक' : '4. Board Governance Auditor'}
          </button>
        </div>
      </div>

      {/* 1. TAX CALCULATOR */}
      {activeSimulator === 'tax' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
            <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-emerald-500" />
              <span>{isHindi ? 'आय एवं कटौती इनपुट (AY 2025-26 एवं 2026-27)' : 'Income & Deductions Inputs (AY 2025-26 & 2026-27)'}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  {isHindi ? 'सकल वेतन (Gross Salary)' : 'Gross Annual Salary'} (₹)
                </label>
                <input
                  type="number"
                  value={taxableSalary}
                  onChange={e => setTaxableSalary(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  {isHindi ? 'अन्य स्रोतों से आय (Other Income)' : 'Other Income (Interest, etc.)'} (₹)
                </label>
                <input
                  type="number"
                  value={otherIncome}
                  onChange={e => setOtherIncome(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  {isHindi ? 'धारा 80C (केवल पुरानी व्यवस्था)' : 'Section 80C (Old Regime Only)'} (₹)
                </label>
                <input
                  type="number"
                  max={150000}
                  value={sec80c}
                  onChange={e => setSec80c(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  {isHindi ? 'धारा 80D स्वास्थ्य बीमा' : 'Section 80D Mediclaim'} (₹)
                </label>
                <input
                  type="number"
                  value={sec80d}
                  onChange={e => setSec80d(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  {isHindi ? 'गृह ऋण ब्याज धारा 24(b)' : 'Home Loan Interest Sec 24(b)'} (₹)
                </label>
                <input
                  type="number"
                  max={200000}
                  value={homeLoanInterest}
                  onChange={e => setHomeLoanInterest(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono"
                />
              </div>
            </div>

            <div className="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl text-[11px] text-blue-900 dark:text-blue-300 space-y-1">
              <p className="font-bold">{isHindi ? 'वैधानिक नियम नोट:' : 'Statutory Rule Note:'}</p>
              <p>
                {isHindi
                  ? 'धारा 115BAC डिफ़ॉल्ट व्यवस्था में ₹75,000 की मानक कटौती स्वतः लागू होती है, और ₹7,00,000 तक धारा 87A के तहत पूर्ण छूट (Rebate) उपलब्ध है।'
                  : 'Section 115BAC Default Regime automatically grants ₹75,000 standard deduction for salaried staff, and full Section 87A rebate up to ₹7,00,000 net taxable income.'}
              </p>
            </div>
          </div>

          {/* Tax Result Card */}
          <div className="bg-slate-900 text-white rounded-2xl border border-slate-800 p-6 space-y-5">
            <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400">
              {isHindi ? 'कर तुलना परिणाम' : 'Tax Regime Comparison'}
            </h4>

            {/* New Regime */}
            <div className="p-4 rounded-xl bg-blue-950/60 border border-blue-800/80 space-y-1">
              <span className="text-xs text-blue-300 font-semibold block">
                {isHindi ? 'डिफ़ॉल्ट नई व्यवस्था (धारा 115BAC)' : 'Default New Regime (Sec 115BAC)'}
              </span>
              <span className="text-2xl font-black text-white font-mono block">
                ₹{newRegimeTotal.toLocaleString('en-IN')}
              </span>
              <span className="text-[11px] text-slate-400">
                Net Taxable: ₹{newNetTaxable.toLocaleString('en-IN')} (Std Ded ₹75,000)
              </span>
            </div>

            {/* Old Regime */}
            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/80 space-y-1">
              <span className="text-xs text-slate-300 font-semibold block">
                {isHindi ? 'पुरानी व्यवस्था (कटौतियों सहित)' : 'Old Regime (With All Deductions)'}
              </span>
              <span className="text-2xl font-black text-white font-mono block">
                ₹{oldRegimeTotal.toLocaleString('en-IN')}
              </span>
              <span className="text-[11px] text-slate-400">
                Net Taxable: ₹{oldNetTaxable.toLocaleString('en-IN')}
              </span>
            </div>

            {/* Recommendation */}
            <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800 text-xs text-emerald-200">
              <span className="font-bold block">{isHindi ? 'सिफारिश' : 'Recommendation'}:</span>
              {newRegimeTotal < oldRegimeTotal ? (
                <span>
                  {isHindi
                    ? `नई व्यवस्था बेहतर है! आप ₹${(oldRegimeTotal - newRegimeTotal).toLocaleString('en-IN')} की बचत करेंगे।`
                    : `Default New Regime is more beneficial! You save ₹${(oldRegimeTotal - newRegimeTotal).toLocaleString('en-IN')}.`}
                </span>
              ) : newRegimeTotal === oldRegimeTotal ? (
                <span>{isHindi ? 'दोनों व्यवस्थाओं में कर देयता समान है।' : 'Both regimes yield identical tax liability.'}</span>
              ) : (
                <span>
                  {isHindi
                    ? `पुरानी व्यवस्था बेहतर है! आप ₹${(newRegimeTotal - oldRegimeTotal).toLocaleString('en-IN')} की बचत करेंगे।`
                    : `Old Regime is more beneficial! You save ₹${(newRegimeTotal - oldRegimeTotal).toLocaleString('en-IN')}.`}
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 2. DUPONT CALCULATOR */}
      {activeSimulator === 'dupont' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
            <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span>{isHindi ? 'वित्तीय विवरण इनपुट (DuPont 3-Step)' : 'Financial Statement Metrics'}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  {isHindi ? 'शुद्ध आय (Net Income)' : 'Net Income (PAT)'} (₹)
                </label>
                <input
                  type="number"
                  value={netIncome}
                  onChange={e => setNetIncome(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  {isHindi ? 'कुल राजस्व (Revenue)' : 'Total Revenue (Sales)'} (₹)
                </label>
                <input
                  type="number"
                  value={revenue}
                  onChange={e => setRevenue(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  {isHindi ? 'कुल संपत्तियां (Total Assets)' : 'Total Assets'} (₹)
                </label>
                <input
                  type="number"
                  value={totalAssets}
                  onChange={e => setTotalAssets(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  {isHindi ? 'शेयरधारक इक्विटी (Shareholders’ Equity)' : 'Shareholders’ Equity'} (₹)
                </label>
                <input
                  type="number"
                  value={equity}
                  onChange={e => setEquity(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono"
                />
              </div>
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl text-xs space-y-1">
              <span className="font-mono font-bold text-blue-600 block">DuPont Formula:</span>
              <p className="font-mono text-[11px] text-slate-600 dark:text-slate-300">
                ROE = (Net Income / Revenue) × (Revenue / Total Assets) × (Total Assets / Equity)
              </p>
            </div>
          </div>

          {/* DuPont Results Card */}
          <div className="bg-slate-900 text-white rounded-2xl border border-slate-800 p-6 space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400">
              {isHindi ? 'ड्यूपॉन्ट विश्लेषण परिणाम' : 'DuPont Decomposition'}
            </h4>

            <div className="space-y-3">
              <div className="p-3 bg-slate-800/60 rounded-xl">
                <span className="text-xs text-slate-400 block">{isHindi ? '1. शुद्ध लाभ मार्जिन' : '1. Net Profit Margin'}</span>
                <span className="text-lg font-bold text-white font-mono">{netProfitMargin.toFixed(2)}%</span>
              </div>

              <div className="p-3 bg-slate-800/60 rounded-xl">
                <span className="text-xs text-slate-400 block">{isHindi ? '2. परिसंपत्ति टर्नओवर' : '2. Asset Turnover'}</span>
                <span className="text-lg font-bold text-white font-mono">{assetTurnover.toFixed(3)}x</span>
              </div>

              <div className="p-3 bg-slate-800/60 rounded-xl">
                <span className="text-xs text-slate-400 block">{isHindi ? '3. इक्विटी मल्टीप्लायर (लीवरेज)' : '3. Financial Leverage (Equity Multiplier)'}</span>
                <span className="text-lg font-bold text-white font-mono">{equityMultiplier.toFixed(2)}x</span>
              </div>

              <div className="p-4 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl border border-blue-500/40">
                <span className="text-xs text-blue-200 block uppercase font-bold">{isHindi ? 'इक्विटी पर प्रतिफल (ROE)' : 'Overall DuPont ROE'}</span>
                <span className="text-3xl font-black text-amber-400 font-mono block mt-1">
                  {dupontRoe.toFixed(2)}%
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. VALUE AT RISK (VAR) CALCULATOR */}
      {activeSimulator === 'var' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
            <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-rose-500" />
              <span>{isHindi ? 'पोर्टफोलियो एवं जोखिम पैरामीटर' : 'Parametric VaR Parameters'}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  {isHindi ? 'पोर्टफोलियो मूल्य' : 'Portfolio Value'} (₹)
                </label>
                <input
                  type="number"
                  value={portfolioValue}
                  onChange={e => setPortfolioValue(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  {isHindi ? 'दैनिक अस्थिरता (Daily Volatility)' : 'Daily Volatility (σ)'} (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={dailyVolPercent}
                  onChange={e => setDailyVolPercent(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  {isHindi ? 'विश्वास स्तर (Confidence Level)' : 'Confidence Level'}
                </label>
                <select
                  value={confLevel}
                  onChange={e => setConfLevel(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                >
                  <option value={95}>95% (Z = 1.645)</option>
                  <option value={99}>99% (Z = 2.326)</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  {isHindi ? 'होल्डिंग अवधि (दिन)' : 'Holding Period (Days)'}
                </label>
                <input
                  type="number"
                  value={holdingPeriodDays}
                  onChange={e => setHoldingPeriodDays(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono"
                />
              </div>
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl text-xs text-slate-600 dark:text-slate-300 space-y-1">
              <span className="font-bold text-rose-600 block">Square-Root of Time Rule:</span>
              <p className="font-mono text-[11px]">
                VaR(T days) = VaR(1-Day) × √T
              </p>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl border border-slate-800 p-6 space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400">
              {isHindi ? 'वैल्यू एट रिस्क (VaR) परिणाम' : 'Value at Risk (VaR) Results'}
            </h4>

            <div className="p-4 bg-slate-800/60 rounded-xl space-y-1">
              <span className="text-xs text-slate-400 block">{isHindi ? '1-दिवसीय VaR' : '1-Day VaR'} ({confLevel}%)</span>
              <span className="text-2xl font-black text-rose-400 font-mono block">
                ₹{Math.round(oneDayVar).toLocaleString('en-IN')}
              </span>
              <span className="text-[11px] text-slate-400">
                ({((oneDayVar / portfolioValue) * 100).toFixed(2)}% of Portfolio)
              </span>
            </div>

            <div className="p-4 bg-gradient-to-br from-rose-950/60 to-purple-950/60 rounded-xl border border-rose-800/60 space-y-1">
              <span className="text-xs text-rose-300 block font-bold">
                {holdingPeriodDays}-{isHindi ? 'दिवसीय VaR' : 'Day VaR'} (Square-Root Rule)
              </span>
              <span className="text-3xl font-black text-amber-300 font-mono block">
                ₹{Math.round(tDayVar).toLocaleString('en-IN')}
              </span>
              <span className="text-[11px] text-slate-300">
                There is a {100 - confLevel}% probability that loss exceeds this amount over {holdingPeriodDays} days.
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 4. BOARD GOVERNANCE CHECKER */}
      {activeSimulator === 'governance' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
            <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Scale className="w-5 h-5 text-purple-600" />
              <span>{isHindi ? 'बोर्ड संरचना इनपुट (कंपनी अधिनियम 2013 एवं सेबी LODR)' : 'Board Composition Inputs'}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  {isHindi ? 'कुल निदेशकों की संख्या' : 'Total Number of Directors'}
                </label>
                <input
                  type="number"
                  value={totalDirectors}
                  onChange={e => setTotalDirectors(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  {isHindi ? 'स्वतंत्र निदेशकों की संख्या' : 'Independent Directors'}
                </label>
                <input
                  type="number"
                  value={independentDirectors}
                  onChange={e => setIndependentDirectors(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-mono"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  {isHindi ? 'क्या चेयरमैन कार्यकारी (Executive) या प्रमोटर हैं?' : 'Is Chairperson Executive or Promoter?'}
                </label>
                <select
                  value={isChairmanExecutive ? 'YES' : 'NO'}
                  onChange={e => setIsChairmanExecutive(e.target.value === 'YES')}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                >
                  <option value="NO">Non-Executive / Independent (Requires 1/3rd Independents)</option>
                  <option value="YES">Executive / Promoter (Requires 50% Independents)</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                  {isHindi ? 'स्वतंत्र महिला निदेशक मौजूद है?' : 'Independent Woman Director Present?'}
                </label>
                <select
                  value={hasIndependentWomanDirector ? 'YES' : 'NO'}
                  onChange={e => setHasIndependentWomanDirector(e.target.value === 'YES')}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                >
                  <option value="YES">Yes</option>
                  <option value="NO">No</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl border border-slate-800 p-6 space-y-4">
            <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400">
              {isHindi ? 'अनुपालन स्थिति' : 'Compliance Audit Result'}
            </h4>

            <div className={`p-4 rounded-xl border ${
              isBoardCompliant ? 'bg-emerald-950/60 border-emerald-800 text-emerald-200' : 'bg-rose-950/60 border-rose-800 text-rose-200'
            }`}>
              <div className="flex items-center gap-2">
                {isBoardCompliant ? <CheckCircle className="w-5 h-5 text-emerald-400" /> : <AlertTriangle className="w-5 h-5 text-rose-400" />}
                <span className="font-bold text-sm">
                  {isBoardCompliant ? 'BOARD FULLY COMPLIANT' : 'BOARD NON-COMPLIANT'}
                </span>
              </div>
              <p className="text-xs mt-2">
                Required Independent Directors: <strong>{minRequiredInd}</strong> (Provided: {independentDirectors})
              </p>
              {!hasIndependentWomanDirector && (
                <p className="text-xs text-rose-300 mt-1">
                  Violation: Top listed entities mandate at least 1 independent woman director under SEBI LODR Reg 17(1)(a).
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
