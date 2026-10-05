import type { CareerPath } from '../types';

export const careerPathsData: CareerPath[] = [
  {
    id: 'career-accounting-audit',
    field: 'Statutory Audit, Financial Controller & Corporate CFO',
    hindiField: 'वैधानिक लेखापरीक्षा, वित्तीय नियंत्रक एवं सीएफओ',
    description: 'The premier chartered pathway leading from statutory audit assurance and Ind AS reporting to corporate financial leadership as Chief Financial Officer.',
    stages: [
      {
        level: 'Entry Stage (Years 0-2)',
        certifications: ['CA Intermediate', 'ACCA Applied Skills'],
        roles: ['Audit Trainee / Articleship Assistant', 'Junior Financial Analyst', 'Tax Associate'],
        indicativeSalaryRange: '₹3,00,000 – ₹6,00,000 / Year',
        focusAreas: ['Vouching & Verification', 'TDS & GST Returns', 'Trial Balance Preparation']
      },
      {
        level: 'Professional Qualifier (Years 3-6)',
        certifications: ['Qualified CA (ICAI)', 'ACCA Affiliate / FCCA', 'US CPA'],
        roles: ['Statutory Audit Senior / Assistant Manager', 'Financial Reporting Lead', 'Corporate Tax Specialist'],
        indicativeSalaryRange: '₹9,00,000 – ₹18,00,000 / Year',
        focusAreas: ['Ind AS / IFRS Consolidation', 'CARO 2020 Reporting', 'Tax Audit Form 3CD', 'Transfer Pricing']
      },
      {
        level: 'Leadership & Strategic Cadre (Years 7-12+)',
        certifications: ['FCA', 'CPA', 'Diploma in IFRS', 'Executive MBA'],
        roles: ['Audit Partner in CA Firm', 'Financial Controller', 'Vice President - Finance', 'Chief Financial Officer (CFO)'],
        indicativeSalaryRange: '₹25,00,000 – ₹80,00,000+ / Year',
        focusAreas: ['M&A Due Diligence', 'Board Advisory', 'Capital Structuring', 'Investor Relations']
      }
    ]
  },
  {
    id: 'career-investment-equity',
    field: 'Equity Research, Investment Banking & Asset Management',
    hindiField: 'इक्विटी रिसर्च, इन्वेस्टमेंट बैंकिंग एवं परिसंपत्ति प्रबंधन',
    description: 'The global standard pathway for capital allocators, portfolio strategists, hedge fund managers, and investment bankers.',
    stages: [
      {
        level: 'Foundation Stage (Years 0-2)',
        certifications: ['CFA Level I / Level II', 'NISM Series XV (Research Analyst)'],
        roles: ['Research Associate', 'M&A Valuation Analyst', 'Junior Portfolio Analyst'],
        indicativeSalaryRange: '₹6,00,000 – ₹12,00,000 / Year',
        focusAreas: ['Financial Statement Modeling', 'DCF Valuation', 'Industry Competitor Benchmarking']
      },
      {
        level: 'Chartered Practitioner (Years 3-7)',
        certifications: ['CFA Charterholder', 'CA (Ranker / Core Finance)', 'FRM'],
        roles: ['Lead Equity Research Analyst (Sell-Side / Buy-Side)', 'Investment Banking Associate', 'Assistant Fund Manager'],
        indicativeSalaryRange: '₹16,00,000 – ₹35,00,000 / Year',
        focusAreas: ['Coverage of 10-15 listed stocks', 'IPO / QIP Underwriting', 'Pitch Book Creation', 'GIPS Compliance']
      },
      {
        level: 'Executive Allocator (Years 8-15+)',
        certifications: ['Senior CFA Charterholder', 'CA / MBA Finance'],
        roles: ['Portfolio Manager', 'Managing Director - Investment Banking', 'Chief Investment Officer (CIO)'],
        indicativeSalaryRange: '₹40,00,000 – ₹1,50,00,000+ / Year (Plus Carry / Bonus)',
        focusAreas: ['Macro Asset Allocation', 'Fund Raising', 'Board Seat Representation', 'Algorithmic Execution']
      }
    ]
  },
  {
    id: 'career-risk-management',
    field: 'Financial Risk, Basel Capital & Enterprise Risk Management',
    hindiField: 'वित्तीय जोखिम, बेसल कैपिटल एवं एंटरप्राइज रिस्क मैनेजमेंट',
    description: 'Specialized path safeguarding commercial banks, hedge funds, and fintechs against market, credit, operational, and liquidity shocks.',
    stages: [
      {
        level: 'Analyst Stage (Years 0-2)',
        certifications: ['FRM Part I', 'JAIIB / CAIIB Elective in Risk'],
        roles: ['Credit Risk Analyst', 'Market Risk Reporting Officer', 'Model Validation Analyst'],
        indicativeSalaryRange: '₹5,50,000 – ₹10,00,000 / Year',
        focusAreas: ['VaR Backtesting', 'Credit Scoring Models', 'NPA Monitoring', 'Stress Testing']
      },
      {
        level: 'Certified Risk Manager (Years 3-7)',
        certifications: ['Certified FRM', 'PRM', 'CA / CFA'],
        roles: ['AVP - Market Risk', 'Lead Credit Underwriter (Large Corporate)', 'Basel III Compliance Head'],
        indicativeSalaryRange: '₹14,00,000 – ₹28,00,000 / Year',
        focusAreas: ['Counterparty Credit Risk (XVA)', 'ALM & Liquidity Ratios (LCR, NSFR)', 'ECL Model Governance']
      },
      {
        level: 'Chief Risk Officer (Years 8-15+)',
        certifications: ['Certified FRM', 'Executive Leadership'],
        roles: ['Head of Enterprise Risk Management (ERM)', 'Chief Risk Officer (CRO)'],
        indicativeSalaryRange: '₹35,00,000 – ₹90,00,000+ / Year',
        focusAreas: ['Risk Appetite Statement', 'ICAAP Formulation to RBI', 'Board Risk Committee Governance']
      }
    ]
  },
  {
    id: 'career-cybersecurity-audit',
    field: 'Cybersecurity, Information Systems Audit & Cloud Architecture',
    hindiField: 'साइबर सुरक्षा, सूचना प्रणाली लेखापरीक्षा एवं क्लाउड आर्किटेक्चर',
    description: 'High-growth career securing enterprise infrastructure, conducting statutory IT audits, and architecting zero-trust cyber resilience.',
    stages: [
      {
        level: 'Entry & SOC Stage (Years 0-2)',
        certifications: ['CompTIA Security+', 'AWS Certified Cloud Practitioner', 'CEH'],
        roles: ['SOC Analyst (Tier 1)', 'Cybersecurity Junior Engineer', 'Junior IT Auditor'],
        indicativeSalaryRange: '₹4,50,000 – ₹8,50,000 / Year',
        focusAreas: ['SIEM Alert Triage', 'Firewall Rule Hardening', 'Vulnerability Scanning']
      },
      {
        level: 'Certified Auditor & Architect (Years 3-6)',
        certifications: ['CISA (ISACA)', 'AWS Solutions Architect Associate (SAA)', 'Azure Administrator'],
        roles: ['IS Audit Lead', 'SOC 2 & ISO 27001 Auditor', 'Cloud Security Architect'],
        indicativeSalaryRange: '₹12,00,000 – ₹24,00,000 / Year',
        focusAreas: ['RBI System Audits', 'Zero Trust Implementation', 'Cloud Governance & IAM Policy Design']
      },
      {
        level: 'Security Executive (Years 7-12+)',
        certifications: ['CISA', 'CISSP', 'CISM', 'AWS Solutions Architect Professional'],
        roles: ['Head of Information Security', 'Chief Information Security Officer (CISO)', 'Partner - Cyber Risk Advisory'],
        indicativeSalaryRange: '₹30,00,000 – ₹85,00,000+ / Year',
        focusAreas: ['Enterprise Cyber Governance', 'Board Risk Reporting', 'Incident Command & Ransomware Defense']
      }
    ]
  }
];
