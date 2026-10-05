import type { Statute, StandardFramework } from '../types';

export const statutesData: Statute[] = [
  {
    id: 'companies-act-2013',
    name: 'The Companies Act, 2013 (with Companies Amendment Acts & Rules)',
    hindiName: 'कंपनी अधिनियम, 2013 (कंपनी संशोधन अधिनियम एवं नियमों सहित)',
    authority: 'Ministry of Corporate Affairs (MCA), Government of India',
    year: 2013,
    currentStatus: 'CURRENT LAW',
    keyAmendments: [
      'Decriminalization of procedural and technical defaults (Companies Amendment Act 2020)',
      'Mandatory Audit Trail (edit log) feature in accounting software from April 1, 2023',
      'Stricter Significant Beneficial Ownership (SBO) reporting under Section 90 and Dematerialization of securities for private companies',
      'CSR Rules amendments requiring impact assessment and unspent CSR account transfers (Section 135)'
    ],
    effectiveDate: 'Phased from September 12, 2013 to Present',
    applicableCertifications: ['CA', 'CS', 'CMA', 'SEBI Grade A', 'RBI Grade B', 'CPA'],
    officialSourceUrl: 'https://www.mca.gov.in/content/mca/global/en/acts-rules/companies-act/companies-act-2013.html',
    lastVerifiedDate: '2026-06-01',
    summary: 'The primary corporate legislation governing the incorporation, responsibilities of directors, financial reporting, corporate governance, CSR, audit, and winding-up of commercial companies in India.',
    hindiSummary: 'भारत में कंपनियों के गठन, निदेशकों के दायित्व, वित्तीय रिपोर्टिंग, कॉर्पोरेट प्रशासन, सीएसआर और ऑडिट को नियंत्रित करने वाला प्रमुख कॉर्पोरेट विधान।',
    highYieldPoints: [
      'Section 135: Mandatory CSR spending (2% of average net profits of preceding 3 financial years) if Net Worth ≥ ₹500 Cr, Turnover ≥ ₹1000 Cr, or Net Profit ≥ ₹5 Cr.',
      'Section 139-148: Mandatory statutory auditor rotation for listed and prescribed companies (5 consecutive years for individual, 10 consecutive years for audit firm followed by 5-year cooling period).',
      'Section 148: Mandatory Cost Records maintenance and statutory Cost Audit for regulated and non-regulated sectors exceeding prescribed turnover thresholds.',
      'Section 204: Mandatory Secretarial Audit by a practicing Company Secretary for listed companies and public companies with paid-up capital ≥ ₹50 Cr or turnover ≥ ₹250 Cr.',
      'Section 149(4): Minimum one-third of total directors must be Independent Directors for listed public companies.'
    ]
  },
  {
    id: 'income-tax-act-1961',
    name: 'The Income-tax Act, 1961 (Amended by Finance Acts 2024, 2025 & 2026)',
    hindiName: 'आयकर अधिनियम, 1961 (वित्त अधिनियमों द्वारा संशोधित)',
    authority: 'Central Board of Direct Taxes (CBDT), Ministry of Finance, Govt of India',
    year: 1961,
    currentStatus: 'CURRENT LAW',
    keyAmendments: [
      'Section 115BAC: New Tax Regime made default tax regime with slab rates up to ₹15 Lakhs and enhanced standard deduction of ₹75,000 for salaried employees.',
      'Section 87A rebate enhanced up to ₹7,00,000 taxable income (tax payable is Nil under default regime).',
      'Rationalized Capital Gains Taxation: Short-term capital gains on listed equity increased to 20% (Sec 111A); Long-term capital gains increased to 12.5% with exemption limit of ₹1.25 Lakh (Sec 112A).',
      'Equalisation levy phase-out & Transfer Pricing safe harbour expansions under Section 92CB.'
    ],
    effectiveDate: 'April 1, 1962 (Updated annually via Union Finance Acts)',
    applicableCertifications: ['CA', 'CMA', 'CS', 'Tax Practitioner', 'RBI Grade B', 'Banking Exams'],
    officialSourceUrl: 'https://incometaxindia.gov.in/pages/acts/income-tax-act.aspx',
    lastVerifiedDate: '2026-06-01',
    summary: 'Comprehensive law governing direct taxation of total income of individuals, HUFs, firms, LLPs, companies, and non-residents in India.',
    hindiSummary: 'भारत में व्यक्तियों, फर्मों, एलएलपी और कंपनियों की कुल आय पर प्रत्यक्ष कराधान को नियंत्रित करने वाला व्यापक कानून।',
    highYieldPoints: [
      'Section 115BAC default slab rates: 0-3L: Nil, 3-7L: 5%, 7-10L: 10%, 10-12L: 15%, 12-15L: 20%, Above 15L: 30%.',
      'Section 44AB: Tax Audit mandatory if business turnover exceeds ₹1 Crore (or ₹10 Crores if cash transactions ≤ 5% of total turnover).',
      'Section 92C: Arm’s Length Price calculation methods (CUP, Resale Price, Cost Plus, Profit Split, TNMM).',
      'Section 194C / 194J / 194Q: TDS on contractor payments, professional fees, and purchase of goods.'
    ]
  },
  {
    id: 'cgst-act-2017',
    name: 'The Central Goods and Services Tax (CGST) Act, 2017 & IGST Act, 2017',
    hindiName: 'केंद्रीय माल एवं सेवा कर (सीजीएसटी) अधिनियम, 2017 एवं आईजीएसटी अधिनियम',
    authority: 'GST Council / Central Board of Indirect Taxes and Customs (CBIC)',
    year: 2017,
    currentStatus: 'CURRENT LAW',
    keyAmendments: [
      'Mandatory E-Invoicing implemented for all B2B transactions with aggregate turnover exceeding ₹5 Crores.',
      'Section 16(2)(aa): Mandatory matching of Input Tax Credit with GSTR-2B; no provisional ITC permissible.',
      'Constitution of GST Appellate Tribunal (GSTAT) principal and state benches.',
      'Stricter biometric-based Aadhaar authentication for high-risk new GST registrations.'
    ],
    effectiveDate: 'July 1, 2017 to Present',
    applicableCertifications: ['CA', 'CMA', 'CS', 'GST Practitioner', 'Tax Professionals'],
    officialSourceUrl: 'https://cbic-gst.gov.in/gst-acts.html',
    lastVerifiedDate: '2026-06-01',
    summary: 'The unified indirect tax statute levying tax on supply of goods or services or both in India, establishing seamless Input Tax Credit across the value chain.',
    hindiSummary: 'भारत में माल या सेवाओं की आपूर्ति पर एक समान अप्रत्यक्ष कर लगाने वाला कानून, जो मूल्य श्रृंखला में इनपुट टैक्स क्रेडिट प्रदान करता है।',
    highYieldPoints: [
      'Section 7: Scope of Supply (all forms of supply made or agreed to be made for consideration in course or furtherance of business).',
      'Section 16: Conditions for claiming ITC (possession of tax invoice, receipt of goods/services, tax actually paid to government, return filed under Sec 39).',
      'Section 17(5): Blocked Credits (Motor vehicles for transport of persons with seating capacity ≤ 13 with exceptions; food, beverages, outdoor catering; membership of clubs).',
      'IGST Act Section 10 & 12: Place of Supply provisions for goods and services determining intra-state vs inter-state classification.'
    ]
  },
  {
    id: 'sebi-lodr-regulations',
    name: 'SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015',
    hindiName: 'सेबी (सूचीबद्धता दायित्व एवं प्रकटीकरण आवश्यकताएं) विनियम, 2015 (एलओडीआर)',
    authority: 'Securities and Exchange Board of India (SEBI)',
    year: 2015,
    currentStatus: 'CURRENT LAW',
    keyAmendments: [
      'Mandatory Business Responsibility and Sustainability Reporting (BRSR) Core framework with reasonable assurance for top 1000 listed entities.',
      'Regulation 30: Materiality thresholds quantified (lower of 2% turnover, 2% net worth, or 5% of 3-year avg PAT). Strict disclosure within 30 minutes of board meeting conclusion.',
      'Mandatory approval by majority of minority shareholders for royalty/brand-usage payments exceeding 5% of consolidated turnover.'
    ],
    effectiveDate: 'December 1, 2015 to Present',
    applicableCertifications: ['CS', 'CA', 'SEBI Grade A', 'CFA', 'CMA'],
    officialSourceUrl: 'https://www.sebi.gov.in/legal/regulations/sep-2015/sebi-listing-obligations-and-disclosure-requirements-regulations-2015-last-amended-on-may-17-2024-_83424.html',
    lastVerifiedDate: '2026-06-01',
    summary: 'Establishes continuous disclosure, corporate governance norms, board composition requirements, and shareholder protections for all entities listed on recognized stock exchanges in India.',
    hindiSummary: 'मान्यता प्राप्त स्टॉक एक्सचेंजों पर सूचीबद्ध सभी संस्थाओं के लिए कॉर्पोरेट प्रशासन और प्रकटीकरण आवश्यकताओं को नियंत्रित करता है।',
    highYieldPoints: [
      'Regulation 17: Board Composition (At least 50% non-executive directors; at least 1 independent woman director for top 1000 entities; at least 1/3rd or 50% independent directors depending on whether Chairperson is non-executive or executive).',
      'Regulation 18: Audit Committee must have at least 3 directors, two-thirds being independent, all financially literate, with at least one having accounting expertise.',
      'Regulation 23: Related Party Transactions (RPT) definition expanded to include parties forming part of promoter/promoter group holding ≥ 10% equity.'
    ]
  },
  {
    id: 'ibc-2016',
    name: 'The Insolvency and Bankruptcy Code, 2016 (IBC)',
    hindiName: 'दिवाला एवं दिवालियापन संहिता, 2016 (आईबीसी)',
    authority: 'Insolvency and Bankruptcy Board of India (IBBI) & Ministry of Corporate Affairs',
    year: 2016,
    currentStatus: 'CURRENT LAW',
    keyAmendments: [
      'Mandatory time-bound resolution (330 days maximum including litigation time).',
      'Section 29A: Disqualification of wilful defaulters and undischarged ineligibles from submitting resolution plans.',
      'Pre-packaged Insolvency Resolution Process (PIRP) under Chapter III-A for MSMEs with minimum default threshold of ₹10 Lakhs.',
      'Section 53: Waterfall mechanism affirmed by Supreme Court prioritizing CIRP costs, secured financial creditors, workmen dues, and statutory government dues.'
    ],
    effectiveDate: 'December 1, 2016 to Present',
    applicableCertifications: ['CA', 'CS', 'CMA', 'IBBI Valuation Exam', 'Banking (JAIIB/CAIIB)', 'RBI Grade B'],
    officialSourceUrl: 'https://www.ibbi.gov.in/legal-framework/act',
    lastVerifiedDate: '2026-06-01',
    summary: 'Consolidated statutory code governing corporate insolvency, liquidation, individual bankruptcy, and debt resolution in a time-bound creditor-in-control framework.',
    hindiSummary: 'समयबद्ध समाधान रूपरेखा में कॉर्पोरेट दिवाला और परिसमापन को नियंत्रित करने वाली समेकित सांविधिक संहिता।',
    highYieldPoints: [
      'Section 4: Minimum threshold for initiating CIRP is ₹1 Crore default.',
      'Section 7 (Financial Creditors) & Section 9 (Operational Creditors): CIRP initiation application before National Company Law Tribunal (NCLT).',
      'Section 14: Moratorium prohibition against institution of suits, recovery actions, and alienation of corporate debtor assets during CIRP.',
      'Section 21 & 28: Committee of Creditors (CoC) voting threshold is 66% for resolution plan approval or liquidator appointment.'
    ]
  }
];

export const standardsFrameworksData: StandardFramework[] = [
  {
    id: 'ind-as-115',
    code: 'Ind AS 115',
    name: 'Revenue from Contracts with Customers',
    hindiName: 'इंड एएस 115: ग्राहकों के साथ अनुबंधों से राजस्व',
    authority: 'ICAI / Ministry of Corporate Affairs (MCA) / NFRA',
    category: 'Accounting',
    summary: 'Establishes the core principle that an entity recognises revenue to depict the transfer of promised goods or services to customers in an amount that reflects the consideration to which the entity expects to be entitled.',
    hindiSummary: '5-चरणीय मॉडल के आधार पर ग्राहकों को हस्तांतरित वस्तुओं या सेवाओं से राजस्व को मान्यता देने का लेखांकन मानक।',
    officialSourceUrl: 'https://www.icai.org/post/ind-as-115',
    examRelevance: ['CA Final (FR)', 'CMA Final (CFR)', 'ACCA (SBR)', 'CPA (FAR)'],
    practicalApplication: 'Mandatory 5-Step Model: 1. Identify Contract; 2. Identify Performance Obligations; 3. Determine Transaction Price; 4. Allocate Transaction Price to Performance Obligations; 5. Recognise Revenue when (or as) the entity satisfies a performance obligation.'
  },
  {
    id: 'ind-as-116',
    code: 'Ind AS 116',
    name: 'Leases',
    hindiName: 'इंड एएस 116: पट्टे (लीज़)',
    authority: 'ICAI / MCA / NFRA',
    category: 'Accounting',
    summary: 'Eliminates off-balance sheet operating leases for lessees. Requires lessees to recognise a Right-of-Use (ROU) asset and a corresponding lease liability for almost all lease contracts on the Balance Sheet.',
    hindiSummary: 'पट्टाधारकों के लिए बैलेंस शीट पर राइट-ऑफ-यूज (ROU) परिसंपत्ति और लीज देयता दर्ज करना अनिवार्य करता है।',
    officialSourceUrl: 'https://www.icai.org/post/ind-as-116',
    examRelevance: ['CA Final (FR)', 'CA Inter (Adv Accounts)', 'CMA Final', 'ACCA', 'CFA Level I & II'],
    practicalApplication: 'Initial measurement of lease liability at present value of lease payments discounted at incremental borrowing rate. ROU asset amortised over lease term; lease liability unwound with finance cost.'
  },
  {
    id: 'sa-700-series',
    code: 'SA 700 / 701 / 705',
    name: 'Standards on Auditing: The Auditor’s Report on Financial Statements & Key Audit Matters (KAM)',
    hindiName: 'लेखापरीक्षा मानक: वित्तीय विवरणों पर लेखापरीक्षक की रिपोर्ट एवं मुख्य लेखापरीक्षा मामले',
    authority: 'Auditing and Assurance Standards Board (AASB), ICAI',
    category: 'Auditing',
    summary: 'Governs forming an opinion and reporting on financial statements (SA 700), communicating Key Audit Matters in independent auditor’s reports for listed entities (SA 701), and issuing modifications (qualified, adverse, disclaimer under SA 705).',
    hindiSummary: 'वित्तीय विवरणों पर निष्पक्ष राय देने और सूचीबद्ध संस्थाओं में मुख्य ऑडिट मामलों (KAM) को प्रस्तुत करने का मानक।',
    officialSourceUrl: 'https://www.icai.org/post/standards-on-auditing',
    examRelevance: ['CA Final (Advanced Auditing)', 'CA Inter (Auditing & Ethics)', 'CMA Final', 'CISA (Domain 1)', 'CPA (AUD)'],
    practicalApplication: 'KAMs represent those matters that, in the auditor’s professional judgment, were of most significance in the audit of the financial statements of the current period, selected from matters communicated with Those Charged with Governance (TCWG).'
  },
  {
    id: 'nist-csf-2',
    code: 'NIST CSF 2.0',
    name: 'NIST Cybersecurity Framework 2.0',
    hindiName: 'एनआईएसटी साइबर सुरक्षा रूपरेखा 2.0',
    authority: 'National Institute of Standards and Technology (USA) / Adopted globally & by CERT-In',
    category: 'IT & Security',
    summary: 'Comprehensive global cybersecurity framework expanding beyond critical infrastructure to all organizations, organized into 6 core functions: GOVERN (GV), IDENTIFY (ID), PROTECT (PR), DETECT (DE), RESPOND (RS), and RECOVER (RC).',
    hindiSummary: '6 प्रमुख कार्यों (गवर्न, आइडेंटिफाई, प्रोटेक्ट, डिटेक्ट, रेस्पॉन्ड, रिकवर) पर आधारित वैश्विक साइबर सुरक्षा रूपरेखा।',
    officialSourceUrl: 'https://www.nist.gov/cyberframework',
    examRelevance: ['CISA (Domain 2 & 5)', 'Security+ (SY0-701)', 'CISSP', 'CISM', 'RBI IT Examination'],
    practicalApplication: 'The newly introduced GOVERN function emphasizes that cybersecurity risk is an enterprise-wide business risk requiring continuous board oversight, organizational context, and supply chain risk management.'
  },
  {
    id: 'cobit-2019',
    code: 'COBIT 2019',
    name: 'Control Objectives for Information and Related Technologies',
    hindiName: 'कोबिट 2019: सूचना एवं संबंधित प्रौद्योगिकियों हेतु नियंत्रण उद्देश्य',
    authority: 'ISACA',
    category: 'IT & Security',
    summary: 'The leading enterprise IT governance and management framework establishing 40 governance and management objectives across 5 domains (Evaluate, Direct and Monitor - EDM; Align, Plan and Organize - APO; Build, Acquire and Implement - BAI; Deliver, Service and Support - DSS; Monitor, Evaluate and Assess - MEA).',
    hindiSummary: 'आईटी प्रशासन और प्रबंधन हेतु 40 उद्देश्यों पर आधारित इसाका की प्रमुख रूपरेखा।',
    officialSourceUrl: 'https://www.isaca.org/resources/cobit',
    examRelevance: ['CISA (Domain 2)', 'CISM', 'RBI System Audit Guidelines'],
    practicalApplication: 'Used by banks, insurance companies, and audit firms to design tailored IT governance systems aligned with business enterprise goals.'
  },
  {
    id: 'basel-3-norms',
    code: 'Basel III',
    name: 'Basel III Capital & Liquidity Accord (RBI Master Direction on Capital Adequacy)',
    hindiName: 'बेसल III पूंजी एवं तरलता समझौता (आरबीआई मास्टर निर्देश)',
    authority: 'Basel Committee on Banking Supervision (BCBS) / Reserve Bank of India (RBI)',
    category: 'Banking & Prudential',
    summary: 'International regulatory accord strengthening capital requirements, introducing capital conservation buffer (CCB), countercyclical buffer (CCyB), and liquidity metrics (Liquidity Coverage Ratio - LCR and Net Stable Funding Ratio - NSFR).',
    hindiSummary: 'बैंकों में पूंजी पर्याप्तता (सीआरएआर), पूंजी संरक्षण बफर और तरलता अनुपात (एलसीआर/एनएसएफआर) के विनियामक मानक।',
    officialSourceUrl: 'https://www.rbi.org.in/scripts/BS_ViewMasDirections.aspx?id=10000',
    examRelevance: ['CAIIB (BFM/ABM)', 'JAIIB (PPB)', 'FRM (Part II)', 'RBI Grade B', 'CFA Level II'],
    practicalApplication: 'In India, RBI mandates minimum Capital to Risk-Weighted Assets Ratio (CRAR) of 9% (plus 2.5% CCB = 11.5% for scheduled commercial banks), higher than the BCBS 8% baseline.'
  }
];
