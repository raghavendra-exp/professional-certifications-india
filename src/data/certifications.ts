import type { Certification } from '../types';

export const certificationsData: Certification[] = [
  // 1. CA - ICAI
  {
    id: 'ca',
    acronym: 'CA',
    name: 'Chartered Accountancy',
    hindiName: 'चार्टर्ड एकाउंटेंसी (सीए)',
    category: 'ACCOUNTING_FINANCE',
    categoryLabel: 'Accounting & Finance',
    hindiCategoryLabel: 'लेखांकन एवं वित्त',
    institute: 'The Institute of Chartered Accountants of India (ICAI)',
    hindiInstitute: 'द इंस्टीट्यूट ऑफ चार्टर्ड अकाउंटेंट्स ऑफ इंडिया (आईसीएआई)',
    country: 'India',
    establishedYear: 1949,
    officialUrl: 'https://www.icai.org',
    badgeColor: '#1d4ed8',
    tagline: 'Premier Accounting, Audit & Financial Leadership Qualification in India',
    hindiTagline: 'भारत में प्रमुख लेखांकन, लेखापरीक्षा एवं वित्तीय नेतृत्व योग्यता',
    description: 'Statutory qualification established under Chartered Accountants Act, 1949. Grants exclusive legal statutory audit authority in India and prepares leaders in financial reporting, corporate taxation, forensic audit, strategic financial management, and business advisory.',
    hindiDescription: 'चार्टर्ड एकाउंटेंट्स अधिनियम, 1949 के तहत स्थापित सांविधिक योग्यता। भारत में विशेष वैधानिक लेखापरीक्षा अधिकार प्रदान करती है और वित्तीय रिपोर्टिंग, कराधान, फोरेंसिक ऑडिट और वित्तीय प्रबंधन में नेतृत्व के लिए तैयार करती है।',
    latestNotification: {
      title: 'Implementation of ICAI New Scheme of Education and Training',
      hindiTitle: 'आईसीएआई की नई शिक्षा एवं प्रशिक्षण योजना का क्रियान्वयन',
      date: '2026-06-15',
      link: 'https://www.icai.org/post/new-scheme-of-education-and-training',
      summary: 'New Scheme incorporates 2-year practical training (articleship), Self-Paced Online Modules (SPOM Sets A, B, C, D), reduced papers (6 in Inter, 6 in Final), and 30% case-scenario MCQs across all papers.',
      hindiSummary: 'नई योजना में 2 वर्ष की व्यावहारिक प्रशिक्षण (आर्टिकलशिप), सेल्फ-पेस्ड ऑनलाइन मॉड्यूल (SPOM), इंटर और फाइनल में 6-6 प्रश्नपत्र तथा सभी प्रश्नपत्रों में 30% केस-आधारित बहुविकल्पीय प्रश्न शामिल हैं।',
      schemeVersion: 'New Scheme (Gazette Notified / Active)',
    },
    currentSchemeYear: '2024–Present (New Scheme)',
    eligibility: {
      minimumEducation: '10+2 (Class 12) from recognized Board for Foundation; Graduation/Post-Graduation (55% Commerce, 60% Others) for Direct Entry to Intermediate.',
      hindiMinimumEducation: 'फाउंडेशन के लिए 10+2 (12वीं); इंटरमीडिएट में सीधे प्रवेश के लिए स्नातक/स्नातकोत्तर (वाणिज्य 55%, अन्य 60%)।',
      streamRequirements: 'Any stream (Commerce, Science, Arts) permitted for Foundation. Fine Arts excluded for Direct Entry.',
      hindiStreamRequirements: 'फाउंडेशन हेतु किसी भी स्ट्रीम की अनुमति।',
      provisionalRegistrationPermitted: true,
      exemptionsAvailable: 'CS Executive or CMA Intermediate passed candidates qualify for Direct Entry to CA Intermediate without Foundation.',
      hindiExemptionsAvailable: 'सीएस एग्जीक्यूटिव या सीएमए इंटरमीडिएट उत्तीर्ण छात्र सीधे इंटरमीडिएट में प्रवेश ले सकते हैं।'
    },
    attemptsLimit: 'Foundation: 3 years (6 attempts); Intermediate: 5 years (10 attempts); Final: 10 years (20 attempts). Re-validation permitted.',
    hindiAttemptsLimit: 'फाउंडेशन: 3 वर्ष (6 प्रयास); इंटरमीडिएट: 5 वर्ष (10 प्रयास); फाइनल: 10 वर्ष (20 प्रयास)। पुनर्वैधीकरण की अनुमति है।',
    exemptions: [
      'Graduates/Post-Graduates (Commerce with ≥55% or Others with ≥60%) eligible for Direct Entry into Intermediate without Foundation.',
      'Candidates who passed Intermediate level of ICSI (CS) or ICMAI (CMA) are eligible for Direct Entry to CA Intermediate.',
      'Paper-wise exemption: 60%+ marks in any paper exempts that paper for subsequent attempts as per ICAI New Scheme regulations.'
    ],
    hindiExemptions: [
      'वाणिज्य में न्यूनतम 55% या अन्य विषयों में 60% अंक वाले स्नातक/स्नातकोत्तर बिना फाउंडेशन के इंटरमीडिएट में सीधे प्रवेश के पात्र हैं।',
      'सीएस (CS) या सीएमए (CMA) इंटर पास उम्मीदवार सीए इंटरमीडिएट में डायरेक्ट एंट्री ले सकते हैं।',
      'किसी भी पेपर में 60% या अधिक अंक प्राप्त करने पर आगामी प्रयासों हेतु वह पेपर छूट प्राप्त होता है।'
    ],
    feeStructure: {
      registrationFee: '₹9,800 (Foundation) / ₹18,000 (Inter) / ₹22,000 (Final)',
      examinationFee: '₹1,500 (Foundation) / ₹2,700 (Inter both groups) / ₹3,300 (Final both groups)',
      trainingFee: '₹14,500 (ICITSS: ITT + Orientation) + ₹14,500 (AICITSS: Adv ITT + MCS)',
      membershipFee: '₹3,000 + GST (Annual Associate Membership)',
      estimatedPreparationCost: '₹80,000 – ₹2,50,000 (Coaching/Study materials throughout 3.5 years)',
      currency: 'INR (₹)',
      officialFeeNote: 'Fees listed are statutory fees payable to ICAI directly. Preparation coaching costs are optional estimates.',
      hindiOfficialFeeNote: 'सूचीबद्ध शुल्क सीधे आईसीएआई को देय वैधानिक शुल्क हैं। कोचिंग लागत वैकल्पिक अनुमान है।'
    },
    passingCriteria: 'Minimum 40% marks in each individual paper and a minimum 50% aggregate marks in all papers of a group.',
    hindiPassingCriteria: 'प्रत्येक व्यक्तिगत पेपर में न्यूनतम 40% अंक और एक समूह के सभी पेपरों में कुल मिलाकर न्यूनतम 50% अंक।',
    practicalTraining: {
      required: true,
      duration: '2 Years Uninterrupted Articleship',
      hindiDuration: '2 वर्ष निर्बाध आर्टिकलशिप प्रशिक्षण',
      name: 'Practical Training under a practicing Chartered Accountant',
      hindiName: 'प्रैक्टिसिंग चार्टर्ड अकाउंटेंट के अधीन व्यावहारिक प्रशिक्षण',
      timing: 'Begins after passing both groups of CA Intermediate and completing ICITSS (ITT + Orientation).',
      details: 'Full-time industrial/firm training for 24 months with permissible leave of 12 days per year of actual training. Includes statutory audit, tax audits, Ind AS compliance, and management advisory.',
      hindiDetails: '24 महीने का पूर्णकालिक प्रशिक्षण जिसमें प्रति वर्ष 12 दिन का अवकाश अनुमत है। इसमें वैधानिक ऑडिट, कर ऑडिट, इंड एएस अनुपालन आदि शामिल हैं।',
      stipendGuidelines: 'Mandatory monthly stipend ranging from ₹2,000 to ₹7,000+ depending on population classification of the city and year of training.'
    },
    membershipRequirements: [
      'Pass CA Final Examination (Group 1, Group 2, and SPOM Sets A & B).',
      'Satisfactorily complete 2-year uninterrupted practical training and AICITSS (Adv ITT + Management & Communication Skills).',
      'Submit Form 2 to ICAI Council for enrollment as Associate Chartered Accountant (ACA).',
      'After 5 years of continuous active practice or employment, eligible for advancement to Fellow Chartered Accountant (FCA).'
    ],
    hindiMembershipRequirements: [
      'सीए फाइनल परीक्षा (ग्रुप 1, ग्रुप 2 और एसपीओएम सेट ए और बी) उत्तीर्ण करें।',
      '2 वर्ष का व्यावहारिक प्रशिक्षण और एआईसीआईटीएसएस (AICITSS) सफलतापूर्वक पूरा करें।',
      'एसोसिएट चार्टर्ड अकाउंटेंट (ACA) के रूप में नामांकन हेतु फॉर्म 2 जमा करें।',
      '5 वर्ष के निरंतर सक्रिय अभ्यास या अनुभव के बाद फेलो चार्टर्ड अकाउंटेंट (FCA) के लिए पात्र।'
    ],
    renewalCpeRequirements: {
      cpeHoursPerYear: '40 CPE Hours annually (minimum 20 structured hours)',
      validityYears: 'Annual renewal via Membership fee',
      renewalFee: '₹3,000 + GST / year',
      details: 'Members holding Certificate of Practice (COP) must complete at least 120 CPE credit hours in a rolling 3-year block, of which at least 60 hours must be structured learning.',
      hindiDetails: 'सर्टिफिकेट ऑफ प्रैक्टिस (COP) धारक सदस्यों को 3 वर्ष के ब्लॉक में कम से कम 120 सीपीई घंटे पूरे करने होते हैं, जिनमें से कम से कम 60 घंटे संरचित (स्ट्रक्चर्ड) होने चाहिए।'
    },
    careerOutcomes: [
      'Statutory & Tax Auditor (Signing power for Indian corporate financial statements)',
      'Chief Financial Officer (CFO) / Financial Controller',
      'Investment Banker / M&A Advisor / Due Diligence Specialist',
      'Direct & Indirect Tax Consultant / Transfer Pricing Expert',
      'Forensic Auditor & Fraud Investigator'
    ],
    hindiCareerOutcomes: [
      'वैधानिक एवं कर लेखापरीक्षक (भारतीय वित्तीय विवरणों पर हस्ताक्षर का अधिकार)',
      'मुख्य वित्तीय अधिकारी (सीएफओ) / वित्तीय नियंत्रक',
      'इन्वेस्टमेंट बैंकर / विलय एवं अधिग्रहण (M&A) सलाहकार',
      'प्रत्यक्ष एवं अप्रत्यक्ष कर सलाहकार / ट्रांसफर प्राइसिंग विशेषज्ञ',
      'फोरेंसिक ऑडिटर एवं वित्तीय धोखाधड़ी अन्वेषक'
    ],
    averageCompletionTime: '3.5 to 5 Years',
    globalRecognition: 'Mutual Recognition Agreements (MRAs) and MoUs with ICAEW (UK), CPA Australia, Chartered Accountants Australia and New Zealand (CA ANZ), CPA Canada, and South Africa (SAICA).',
    syllabusVersions: ['latest.json', '2026.json', '2024.json'],
    tags: ['Accounting', 'Audit', 'Taxation', 'Corporate Law', 'Ind AS', 'ICAI', 'Premier Qualification'],
    levels: [
      {
        id: 'ca-foundation',
        name: 'Foundation Level',
        hindiName: 'फाउंडेशन स्तर',
        examFrequency: 'Thrice a year: January, May/June, September',
        totalPapers: 4,
        passingRules: '40% in each paper, 50% aggregate across all 4 papers.',
        papers: [
          {
            id: 'ca-f-p1',
            paperNumber: 1,
            code: 'FND-P1',
            name: 'Accounting',
            hindiName: 'लेखांकन',
            marks: 100,
            examDurationHours: 3,
            examMode: 'Pen & Paper',
            questionPattern: 'Descriptive',
            negativeMarking: false,
            domains: [
              {
                id: 'ca-f-p1-d1',
                name: 'Theoretical Framework of Accounting & Standards',
                topics: [
                  { id: 'ca-f-p1-t1', name: 'Meaning and Scope of Accounting, Accounting Concepts & Principles', keyConcepts: ['Accrual vs Cash', 'Conservatism', 'Going Concern'] },
                  { id: 'ca-f-p1-t2', name: 'Capital and Revenue Expenditures and Receipts', keyConcepts: ['Deferred revenue', 'Capitalization criteria'] }
                ]
              },
              {
                id: 'ca-f-p1-d2',
                name: 'Accounting Process & Special Transactions',
                topics: [
                  { id: 'ca-f-p1-t3', name: 'Bank Reconciliation Statement & Rectification of Errors', keyConcepts: ['BRS timing differences', 'Suspense account rectification'] },
                  { id: 'ca-f-p1-t4', name: 'Bills of Exchange & Promissory Notes', keyConcepts: ['Accommodation bills', 'Dishonour & noting'] }
                ]
              },
              {
                id: 'ca-f-p1-d3',
                name: 'Financial Statements of Sole Proprietors & Partnership Firms',
                topics: [
                  { id: 'ca-f-p1-t5', name: 'Final Accounts of Commercial Entities', keyConcepts: ['Trading and P&L account', 'Balance Sheet adjustments'] },
                  { id: 'ca-f-p1-t6', name: 'Partnership Accounts', keyConcepts: ['Admission', 'Retirement', 'Death', 'Dissolution basics'] }
                ]
              }
            ]
          },
          {
            id: 'ca-f-p2',
            paperNumber: 2,
            code: 'FND-P2',
            name: 'Business Laws',
            hindiName: 'व्यापारिक कानून',
            marks: 100,
            examDurationHours: 3,
            examMode: 'Pen & Paper',
            questionPattern: 'Descriptive',
            negativeMarking: false,
            domains: [
              {
                id: 'ca-f-p2-d1',
                name: 'Indian Regulatory Framework',
                topics: [
                  { id: 'ca-f-p2-t1', name: 'Indian Regulatory Framework & Judiciary System', keyConcepts: ['Sources of Law', 'Court Hierarchy', 'Tribunals'] }
                ]
              },
              {
                id: 'ca-f-p2-d2',
                name: 'The Indian Contract Act, 1872',
                topics: [
                  { id: 'ca-f-p2-t2', name: 'General Nature of Contract, Offer and Acceptance, Consideration', keyConcepts: ['Free consent', 'Void vs Voidable', 'Doctrine of privity'] },
                  { id: 'ca-f-p2-t3', name: 'Contingent Contracts, Performance, Discharge and Remedies for Breach', keyConcepts: ['Liquidated damages', 'Anticipatory breach'] }
                ]
              },
              {
                id: 'ca-f-p2-d3',
                name: 'Sale of Goods Act, 1930 & Companies Act, 2013',
                topics: [
                  { id: 'ca-f-p2-t4', name: 'Sale of Goods Act, 1930', keyConcepts: ['Condition vs Warranty', 'Caveat Emptor', 'Transfer of property'] },
                  { id: 'ca-f-p2-t5', name: 'Companies Act, 2013 Overview', keyConcepts: ['Corporate veil', 'OPC, Private, Public companies', 'MOA & AOA'] }
                ]
              }
            ]
          },
          {
            id: 'ca-f-p3',
            paperNumber: 3,
            code: 'FND-P3',
            name: 'Quantitative Aptitude',
            hindiName: 'मात्रात्मक योग्यता',
            marks: 100,
            examDurationHours: 2,
            examMode: 'Pen & Paper (OMR)',
            questionPattern: 'Objective (MCQ)',
            negativeMarking: true,
            negativeMarkingValue: 0.25,
            domains: [
              {
                id: 'ca-f-p3-d1',
                name: 'Business Mathematics',
                topics: [
                  { id: 'ca-f-p3-t1', name: 'Ratio, Proportion, Indices and Logarithms', keyConcepts: ['Log rules', 'Indices manipulation'] },
                  { id: 'ca-f-p3-t2', name: 'Mathematics of Finance', keyConcepts: ['Time value of money', 'Compounding', 'Annuity regular and due', 'Perpetuity', 'CAGR'] }
                ]
              },
              {
                id: 'ca-f-p3-d2',
                name: 'Logical Reasoning & Statistics',
                topics: [
                  { id: 'ca-f-p3-t3', name: 'Logical Reasoning: Number Series, Coding, Blood Relations, Seating', keyConcepts: ['Direction tests', 'Syllogism basics'] },
                  { id: 'ca-f-p3-t4', name: 'Statistical Description of Data, Central Tendency & Dispersion', keyConcepts: ['Mean, Median, Mode', 'Standard Deviation', 'Quartile deviation'] }
                ]
              }
            ]
          },
          {
            id: 'ca-f-p4',
            paperNumber: 4,
            code: 'FND-P4',
            name: 'Business Economics',
            hindiName: 'व्यापारिक अर्थशास्त्र',
            marks: 100,
            examDurationHours: 2,
            examMode: 'Pen & Paper (OMR)',
            questionPattern: 'Objective (MCQ)',
            negativeMarking: true,
            negativeMarkingValue: 0.25,
            domains: [
              {
                id: 'ca-f-p4-d1',
                name: 'Microeconomics & Theory of Market',
                topics: [
                  { id: 'ca-f-p4-t1', name: 'Theory of Demand and Supply & Elasticity', keyConcepts: ['Price elasticity', 'Cross elasticity', 'Consumer surplus'] },
                  { id: 'ca-f-p4-t2', name: 'Theory of Production and Cost & Market Forms', keyConcepts: ['Law of variable proportions', 'Perfect competition', 'Monopoly', 'Oligopoly'] }
                ]
              },
              {
                id: 'ca-f-p4-d2',
                name: 'Macroeconomics & Indian Economy',
                topics: [
                  { id: 'ca-f-p4-t3', name: 'National Income Accounting & Keynesian Multiplier', keyConcepts: ['GDP, GNP, NNP at factor cost', 'Consumption function'] },
                  { id: 'ca-f-p4-t4', name: 'Fiscal and Monetary Policy, Money Market & International Trade', keyConcepts: ['Repo rate, Reverse repo, CRR, SLR', 'Foreign exchange rates', 'Balance of Payments'] }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'ca-intermediate',
        name: 'Intermediate Level',
        hindiName: 'इंटरमीडिएट स्तर',
        examFrequency: 'Thrice a year: January, May, September',
        totalPapers: 6,
        passingRules: '40% in each paper, 50% aggregate per group (Group 1: Papers 1-3; Group 2: Papers 4-6).',
        papers: [
          {
            id: 'ca-i-p1',
            paperNumber: 1,
            code: 'INT-P1',
            name: 'Advanced Accounting',
            hindiName: 'उन्नत लेखांकन',
            marks: 100,
            examDurationHours: 3,
            examMode: 'Pen & Paper',
            questionPattern: 'Mixed (70% Descriptive + 30% MCQ)',
            negativeMarking: false,
            domains: [
              {
                id: 'ca-i-p1-d1',
                name: 'Accounting Standards (AS / Ind AS Convergence)',
                topics: [
                  { id: 'ca-i-p1-t1', name: 'Applicability of Accounting Standards and Framework', keyConcepts: ['AS 1, 2, 3, 10, 11, 12, 13, 16', 'Revenue recognition', 'PPE valuation'] }
                ]
              },
              {
                id: 'ca-i-p1-d2',
                name: 'Company Accounts & Special Entities',
                topics: [
                  { id: 'ca-i-p1-t2', name: 'Financial Statements of Companies (Schedule III Companies Act)', keyConcepts: ['Balance Sheet & Statement of P&L format', 'Cash Flow Statement AS 3'] },
                  { id: 'ca-i-p1-t3', name: 'Buyback of Securities & Accounting for Reconstruction', keyConcepts: ['Internal reconstruction', 'Amalgamation AS 14'] }
                ]
              }
            ]
          },
          {
            id: 'ca-i-p2',
            paperNumber: 2,
            code: 'INT-P2',
            name: 'Corporate and Other Laws',
            hindiName: 'कॉर्पोरेट एवं अन्य कानून',
            marks: 100,
            examDurationHours: 3,
            examMode: 'Pen & Paper',
            questionPattern: 'Mixed (70% Descriptive + 30% MCQ)',
            negativeMarking: false,
            domains: [
              {
                id: 'ca-i-p2-d1',
                name: 'The Companies Act, 2013',
                topics: [
                  { id: 'ca-i-p2-t1', name: 'Management and Administration (Sections 88 to 122)', keyConcepts: ['Register of members', 'AGM, EGM', 'Ordinary and special resolutions'] },
                  { id: 'ca-i-p2-t2', name: 'Declaration and Payment of Dividend & Accounts of Companies', keyConcepts: ['Sec 123-127', 'Books of account Sec 128', 'CSR Section 135', 'Audit committee'] }
                ]
              },
              {
                id: 'ca-i-p2-d2',
                name: 'Other Laws',
                topics: [
                  { id: 'ca-i-p2-t3', name: 'The Foreign Exchange Management Act (FEMA), 1999', keyConcepts: ['Current account vs Capital account transactions', 'Authorized persons'] },
                  { id: 'ca-i-p2-t4', name: 'The General Clauses Act, 1897 & Interpretation of Statutes', keyConcepts: ['Rules of statutory interpretation', 'Mischief rule', 'Harmonious construction'] }
                ]
              }
            ]
          },
          {
            id: 'ca-i-p3',
            paperNumber: 3,
            code: 'INT-P3',
            name: 'Taxation',
            hindiName: 'कराधान',
            marks: 100,
            examDurationHours: 3,
            examMode: 'Pen & Paper',
            questionPattern: 'Mixed (70% Descriptive + 30% MCQ)',
            negativeMarking: false,
            domains: [
              {
                id: 'ca-i-p3-d1',
                name: 'Direct Tax Laws: Income Tax Act, 1961 (50 Marks)',
                topics: [
                  { id: 'ca-i-p3-t1', name: 'Residential Status & Heads of Income', keyConcepts: ['Salaries', 'House Property', 'PGBP', 'Capital Gains', 'Other Sources'] },
                  { id: 'ca-i-p3-t2', name: 'Total Income Computation, Default Tax Regime Sec 115BAC & TDS/TCS', keyConcepts: ['Deductions Chapter VI-A', 'Sec 115BAC rates', 'Advance tax and TDS rates'] }
                ]
              },
              {
                id: 'ca-i-p3-d2',
                name: 'Indirect Tax Laws: GST Law (50 Marks)',
                topics: [
                  { id: 'ca-i-p3-t3', name: 'Supply Concept, Charge of GST & Exemptions', keyConcepts: ['Schedule I, II, III', 'Reverse Charge Mechanism (RCM)'] },
                  { id: 'ca-i-p3-t4', name: 'Input Tax Credit (ITC), Invoicing & Returns', keyConcepts: ['Section 16 eligibility', 'Section 17(5) blocked credit', 'E-way bill', 'GSTR-1, 3B'] }
                ]
              }
            ]
          },
          {
            id: 'ca-i-p4',
            paperNumber: 4,
            code: 'INT-P4',
            name: 'Cost and Management Accounting',
            hindiName: 'लागत एवं प्रबंधन लेखांकन',
            marks: 100,
            examDurationHours: 3,
            examMode: 'Pen & Paper',
            questionPattern: 'Mixed (70% Descriptive + 30% MCQ)',
            negativeMarking: false,
            domains: [
              {
                id: 'ca-i-p4-d1',
                name: 'Material, Labour and Overheads',
                topics: [
                  { id: 'ca-i-p4-t1', name: 'Material Cost & Control', keyConcepts: ['EOQ', 'Stock levels', 'FIFO, Weighted Average', 'ABC analysis'] },
                  { id: 'ca-i-p4-t2', name: 'Overhead Absorption & Activity Based Costing (ABC)', keyConcepts: ['Cost drivers', 'Primary and secondary distribution', 'Under/over absorption'] }
                ]
              },
              {
                id: 'ca-i-p4-d2',
                name: 'Methods & Techniques of Costing',
                topics: [
                  { id: 'ca-i-p4-t3', name: 'Standard Costing & Variance Analysis', keyConcepts: ['Material, Labour, Overhead variances'] },
                  { id: 'ca-i-p4-t4', name: 'Marginal Costing & CVP Decision Making', keyConcepts: ['Break-even point', 'P/V ratio', 'Margin of safety', 'Make or buy'] }
                ]
              }
            ]
          },
          {
            id: 'ca-i-p5',
            paperNumber: 5,
            code: 'INT-P5',
            name: 'Auditing and Ethics',
            hindiName: 'लेखापरीक्षा एवं नैतिकता',
            marks: 100,
            examDurationHours: 3,
            examMode: 'Pen & Paper',
            questionPattern: 'Mixed (70% Descriptive + 30% MCQ)',
            negativeMarking: false,
            domains: [
              {
                id: 'ca-i-p5-d1',
                name: 'Nature, Objective and Scope of Audit & Standards on Auditing',
                topics: [
                  { id: 'ca-i-p5-t1', name: 'Basic Principles & SA 200, 210, 220, 230', keyConcepts: ['Professional skepticism', 'Inherent risk', 'Audit documentation'] },
                  { id: 'ca-i-p5-t2', name: 'Audit Strategy, Audit Planning and Audit Programme', keyConcepts: ['SA 300 planning', 'Materiality in audit SA 320'] }
                ]
              },
              {
                id: 'ca-i-p5-d2',
                name: 'Internal Control, Audit Sampling & Company Audit',
                topics: [
                  { id: 'ca-i-p5-t3', name: 'Risk Assessment and Internal Control (SA 315, 330)', keyConcepts: ['Walkthrough tests', 'Control deficiencies', 'IT general controls'] },
                  { id: 'ca-i-p5-t4', name: 'Company Audit: Sec 139 to 148 of Companies Act, 2013 & CARO 2020', keyConcepts: ['Appointment, removal, disqualifications', 'CARO reporting clauses'] }
                ]
              }
            ]
          },
          {
            id: 'ca-i-p6',
            paperNumber: 6,
            code: 'INT-P6',
            name: 'Financial Management and Strategic Management',
            hindiName: 'वित्तीय प्रबंधन एवं रणनीतिक प्रबंधन',
            marks: 100,
            examDurationHours: 3,
            examMode: 'Pen & Paper',
            questionPattern: 'Mixed (70% Descriptive + 30% MCQ)',
            negativeMarking: false,
            domains: [
              {
                id: 'ca-i-p6-d1',
                name: 'Financial Management (50 Marks)',
                topics: [
                  { id: 'ca-i-p6-t1', name: 'Financing Decisions & Cost of Capital', keyConcepts: ['WACC', 'Leverage: DOL, DFL, DCL', 'Capital structure theories'] },
                  { id: 'ca-i-p6-t2', name: 'Investment Decisions: Capital Budgeting & Working Capital', keyConcepts: ['NPV, IRR, Payback', 'Working capital operating cycle'] }
                ]
              },
              {
                id: 'ca-i-p6-d2',
                name: 'Strategic Management (50 Marks)',
                topics: [
                  { id: 'ca-i-p6-t3', name: 'Strategic Analysis & Business Policy', keyConcepts: ['SWOT, Porter’s 5 Forces, BCG Matrix, Ansoff Grid'] },
                  { id: 'ca-i-p6-t4', name: 'Strategic Implementation & Control', keyConcepts: ['Organization structure', 'Strategic leadership', 'Value chain analysis'] }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'ca-final',
        name: 'Final Level',
        hindiName: 'फाइनल स्तर',
        examFrequency: 'Thrice a year: May, November (or January/September cycle transitions)',
        totalPapers: 6,
        passingRules: '40% in each paper, 50% aggregate per group. Must also pass SPOM Sets A & B before Final exams.',
        papers: [
          {
            id: 'ca-fin-p1',
            paperNumber: 1,
            code: 'FIN-P1',
            name: 'Financial Reporting (Ind AS)',
            hindiName: 'वित्तीय रिपोर्टिंग (इंड एएस)',
            marks: 100,
            examDurationHours: 3,
            examMode: 'Pen & Paper',
            questionPattern: 'Mixed (70% Descriptive + 30% MCQ)',
            negativeMarking: false,
            domains: [
              {
                id: 'ca-fin-p1-d1',
                name: 'Indian Accounting Standards (Ind AS Framework)',
                topics: [
                  { id: 'ca-fin-p1-t1', name: 'Ind AS 1, 16, 23, 36, 38, 40 (Assets & Impairment)', keyConcepts: ['Fair value measurement Ind AS 113', 'Borrowing costs', 'Impairment testing'] },
                  { id: 'ca-fin-p1-t2', name: 'Ind AS 115 (Revenue from Contracts with Customers)', keyConcepts: ['5-step revenue model', 'Performance obligations', 'Variable consideration'] },
                  { id: 'ca-fin-p1-t3', name: 'Ind AS 116 (Leases)', keyConcepts: ['Right-of-use asset', 'Lease liability amortisation', 'Short-term and low-value exemptions'] }
                ]
              },
              {
                id: 'ca-fin-p1-d2',
                name: 'Business Combinations & Consolidated Financial Statements',
                topics: [
                  { id: 'ca-fin-p1-t4', name: 'Ind AS 103 (Business Combinations) & Ind AS 110 (Consolidated FS)', keyConcepts: ['Acquisition method', 'Purchase price allocation', 'Goodwill vs Bargain purchase', 'NCI measurement'] },
                  { id: 'ca-fin-p1-t5', name: 'Ind AS 109, 32, 107 (Financial Instruments)', keyConcepts: ['Amortised cost, FVTOCI, FVTPL', 'Expected Credit Loss (ECL)', 'Hedge accounting'] }
                ]
              }
            ]
          },
          {
            id: 'ca-fin-p2',
            paperNumber: 2,
            code: 'FIN-P2',
            name: 'Advanced Financial Management (AFM)',
            hindiName: 'उन्नत वित्तीय प्रबंधन (एएफएम)',
            marks: 100,
            examDurationHours: 3,
            examMode: 'Pen & Paper',
            questionPattern: 'Mixed (70% Descriptive + 30% MCQ)',
            negativeMarking: false,
            domains: [
              {
                id: 'ca-fin-p2-d1',
                name: 'Derivatives, Risk Management & Foreign Exchange',
                topics: [
                  { id: 'ca-fin-p2-t1', name: 'Foreign Exchange Exposure and Risk Management', keyConcepts: ['Forward hedge, Money market hedge', 'Currency options and futures', 'Purchasing Power Parity, Interest Rate Parity'] },
                  { id: 'ca-fin-p2-t2', name: 'Interest Rate Risk Management', keyConcepts: ['Forward Rate Agreements (FRA)', 'Interest rate swaps', 'Caps, Floors, Collars'] }
                ]
              },
              {
                id: 'ca-fin-p2-d2',
                name: 'Portfolio Management & Corporate Valuation',
                topics: [
                  { id: 'ca-fin-p2-t3', name: 'Security Valuation & Mergers, Acquisitions & Corporate Restructuring', keyConcepts: ['DCF valuation', 'Relative multiples (P/E, EV/EBITDA)', 'Exchange ratio and post-merger EPS'] },
                  { id: 'ca-fin-p2-t4', name: 'Portfolio Theory and Markowitz / CAPM / Sharpe Ratio', keyConcepts: ['Efficient frontier', 'Beta calculation', 'Treynor and Jensen alpha'] }
                ]
              }
            ]
          },
          {
            id: 'ca-fin-p3',
            paperNumber: 3,
            code: 'FIN-P3',
            name: 'Advanced Auditing, Assurance and Professional Ethics',
            hindiName: 'उन्नत लेखापरीक्षा, आश्वासन एवं व्यावसायिक नैतिकता',
            marks: 100,
            examDurationHours: 3,
            examMode: 'Pen & Paper',
            questionPattern: 'Mixed (70% Descriptive + 30% MCQ)',
            negativeMarking: false,
            domains: [
              {
                id: 'ca-fin-p3-d1',
                name: 'Quality Management & Standards on Auditing (SA 200 - 810)',
                topics: [
                  { id: 'ca-fin-p3-t1', name: 'SQC 1 & Quality Management in Audit Firms', keyConcepts: ['Leadership responsibilities', 'Independence policies', 'EQCR review'] },
                  { id: 'ca-fin-p3-t2', name: 'Audit Reports (SA 700, 701 Key Audit Matters, 705, 706)', keyConcepts: ['KAM determination', 'Qualified vs Adverse vs Disclaimer', 'Emphasis of Matter'] }
                ]
              },
              {
                id: 'ca-fin-p3-d2',
                name: 'Specialised Audits, Digital Audit & Professional Ethics',
                topics: [
                  { id: 'ca-fin-p3-t3', name: 'Audit of Banks, NBFCs & Forensic Accounting', keyConcepts: ['NPA provisioning norms', 'Early warning signals', 'Forensic data analytics'] },
                  { id: 'ca-fin-p3-t4', name: 'ICAI Code of Ethics & Chartered Accountants Act, 1949', keyConcepts: ['First & Second Schedule misconduct clauses', 'Solicitation, advertising, fee sharing'] }
                ]
              }
            ]
          },
          {
            id: 'ca-fin-p4',
            paperNumber: 4,
            code: 'FIN-P4',
            name: 'Direct Tax Laws & International Taxation',
            hindiName: 'प्रत्यक्ष कर कानून एवं अंतर्राष्ट्रीय कराधान',
            marks: 100,
            examDurationHours: 3,
            examMode: 'Pen & Paper',
            questionPattern: 'Mixed (70% Descriptive + 30% MCQ)',
            negativeMarking: false,
            domains: [
              {
                id: 'ca-fin-p4-d1',
                name: 'Corporate Taxation, Assessment Procedures & Appeals',
                topics: [
                  { id: 'ca-fin-p4-t1', name: 'Assessment of Companies, MAT (Sec 115JB) & Concessional Rates (Sec 115BAA/BAB)', keyConcepts: ['Book profit adjustments', 'Corporate tax regimes'] },
                  { id: 'ca-fin-p4-t2', name: 'Search, Seizure, Reassessment (Sec 147-151), Penalties & Settlement', keyConcepts: ['Time limits for reopening', 'Faceless appeals', 'Sec 270A under-reporting'] }
                ]
              },
              {
                id: 'ca-fin-p4-d2',
                name: 'International Taxation & Transfer Pricing',
                topics: [
                  { id: 'ca-fin-p4-t3', name: 'Transfer Pricing Provisions (Sections 92 to 92F)', keyConcepts: ['Arm’s Length Price (ALP) methods', 'Secondary adjustment Sec 92CE', 'Safe harbour rules', 'APA'] },
                  { id: 'ca-fin-p4-t4', name: 'Non-Resident Taxation & Double Taxation Avoidance Agreements (DTAA)', keyConcepts: ['Section 90/91 relief', 'Permanent Establishment (PE) tests', 'Equalisation levy', 'BEPS Actions'] }
                ]
              }
            ]
          },
          {
            id: 'ca-fin-p5',
            paperNumber: 5,
            code: 'FIN-P5',
            name: 'Indirect Tax Laws (GST & Customs)',
            hindiName: 'अप्रत्यक्ष कर कानून (जीएसटी एवं सीमा शुल्क)',
            marks: 100,
            examDurationHours: 3,
            examMode: 'Pen & Paper',
            questionPattern: 'Mixed (70% Descriptive + 30% MCQ)',
            negativeMarking: false,
            domains: [
              {
                id: 'ca-fin-p5-d1',
                name: 'Goods and Services Tax (GST) Law & Compliance (80 Marks)',
                topics: [
                  { id: 'ca-fin-p5-t1', name: 'Place of Supply (IGST Act) & Valuation under GST (Sec 15)', keyConcepts: ['Inter-state vs Intra-state', 'Export & Import of services', 'Related party valuation'] },
                  { id: 'ca-fin-p5-t2', name: 'Refunds under GST (Sec 54) & Inspection, Search, Arrest & Prosecution', keyConcepts: ['Inverted duty structure refund', 'Zero rated supplies refund', 'Section 67-74 adjudication'] }
                ]
              },
              {
                id: 'ca-fin-p5-d2',
                name: 'Customs Law & Foreign Trade Policy (20 Marks)',
                topics: [
                  { id: 'ca-fin-p5-t3', name: 'Customs Duty Valuation & Classification Rules', keyConcepts: ['Transaction value rule', 'Anti-dumping duty', 'Safeguard duty', 'Customs baggage'] },
                  { id: 'ca-fin-p5-t4', name: 'Warehousing, Duty Drawback & Foreign Trade Policy (FTP)', keyConcepts: ['Bonded warehouse', 'RoDTEP scheme', 'EPCG authorizations'] }
                ]
              }
            ]
          },
          {
            id: 'ca-fin-p6',
            paperNumber: 6,
            code: 'FIN-P6',
            name: 'Integrated Business Solutions (Multi-Disciplinary Case Study)',
            hindiName: 'एकीकृत व्यापार समाधान (बहु-विषयक केस स्टडी)',
            marks: 100,
            examDurationHours: 4,
            examMode: 'Pen & Paper (Open Book)',
            questionPattern: 'Case Study Based',
            negativeMarking: false,
            domains: [
              {
                id: 'ca-fin-p6-d1',
                name: 'Comprehensive Multi-Disciplinary Case Studies',
                topics: [
                  { id: 'ca-fin-p6-t1', name: 'Corporate Restructuring, Ind AS, Tax Planning & Audit Implications', keyConcepts: ['Holistic analysis across Company Law, Tax, Ind AS, and Strategic Finance'] },
                  { id: 'ca-fin-p6-t2', name: 'Insolvency, Forensic Analysis & Corporate Governance Failure Scenarios', keyConcepts: ['IBC provisions', 'SEBI LODR violations', 'Whistleblower allegations evaluation'] }
                ]
              }
            ]
          }
        ]
      }
    ]
  },

  // 2. CS - ICSI
  {
    id: 'cs',
    acronym: 'CS',
    name: 'Company Secretary',
    hindiName: 'कंपनी सेक्रेटरी (सीएस)',
    category: 'COMPANY_SECRETARIAL',
    categoryLabel: 'Company Secretarial & Corporate Law',
    hindiCategoryLabel: 'कंपनी सेक्रेटरी एवं कॉर्पोरेट विधि',
    institute: 'The Institute of Company Secretaries of India (ICSI)',
    hindiInstitute: 'द इंस्टीट्यूट ऑफ कंपनी सेक्रेटरीज ऑफ इंडिया (आईसीएसआई)',
    country: 'India',
    establishedYear: 1968,
    officialUrl: 'https://www.icsi.edu',
    badgeColor: '#059669',
    tagline: 'Leading Governance Professionals, Corporate Law Advisors & Board Compliance Officers',
    hindiTagline: 'शीर्ष कॉर्पोरेट प्रशासन पेशेवर, कंपनी कानून सलाहकार एवं बोर्ड अनुपालन अधिकारी',
    description: 'Statutory qualification under the Company Secretaries Act, 1980. Grants exclusive statutory authority for Secretarial Audit (Section 204 Companies Act, 2013), SEBI compliance certification, NCLT representation, and key managerial personnel (KMP) governance roles.',
    hindiDescription: 'कंपनी सेक्रेटरीज अधिनियम, 1980 के तहत सांविधिक योग्यता। धारा 204 कंपनी अधिनियम 2013 के तहत सेक्रेटेरियल ऑडिट, सेबी अनुपालन और एनसीएलटी प्रतिनिधित्व का विशेष अधिकार।',
    latestNotification: {
      title: 'ICSI New Syllabus 2022 Implementation & Exam Guidelines',
      hindiTitle: 'आईसीएसआई नया पाठ्यक्रम 2022 क्रियान्वयन एवं परीक्षा दिशा-निर्देश',
      date: '2026-05-10',
      link: 'https://www.icsi.edu/academic-portal/syllabus-2022/',
      summary: 'Executive and Professional examinations are administered under the New Syllabus 2022 featuring 20% case-based objective questions and 80% descriptive questions in select papers, alongside mandatory EDP and CLDP training.',
      hindiSummary: 'एग्जीक्यूटिव और प्रोफेशनल परीक्षाएं नए सिलेबस 2022 के तहत आयोजित की जा रही हैं, जिसमें केस-आधारित प्रश्न और अनिवार्य ईडीपी/सीएलडीपी प्रशिक्षण शामिल हैं।',
      schemeVersion: 'Syllabus 2022 / Active',
    },
    currentSchemeYear: '2022–Present',
    eligibility: {
      minimumEducation: '10+2 (Class 12) passed or appearing for CSEET; Bachelor\'s / Master\'s degree for Direct Entry to CS Executive.',
      hindiMinimumEducation: 'सीएसईईटी (CSEET) के लिए 10+2 उत्तीर्ण या अध्ययनरत; सीएस एग्जीक्यूटिव में सीधे प्रवेश के लिए स्नातक/स्नातकोत्तर।',
      streamRequirements: 'All academic streams eligible except Fine Arts.',
      hindiStreamRequirements: 'ललित कला (Fine Arts) को छोड़कर सभी शैक्षणिक शाखाएं पात्र हैं।',
      provisionalRegistrationPermitted: true,
      exemptionsAvailable: 'Graduates, Post-Graduates, ICAI (CA Final) and ICMAI (CMA Final) passed students exempt from CSEET.',
      hindiExemptionsAvailable: 'स्नातक, स्नातकोत्तर, सीए फाइनल और सीएमए फाइनल उत्तीर्ण छात्र सीएसईईटी से मुक्त हैं।'
    },
    attemptsLimit: 'Registration valid for 5 years. Extension / re-registration permitted.',
    hindiAttemptsLimit: 'पंजीकरण 5 वर्ष के लिए वैध। विस्तार/पुनः पंजीकरण की अनुमति।',
    exemptions: [
      'Graduates and Post-Graduates exempt from CSEET directly eligible for CS Executive.',
      'ICAI (CA Final) and ICMAI (CMA Final) passed candidates exempt from CSEET.',
      'Paper-wise exemption granted on scoring 60%+ marks in any paper.'
    ],
    feeStructure: {
      registrationFee: '₹1,500 (CSEET) / ₹10,600 (Executive) / ₹13,000 (Professional)',
      examinationFee: '₹1,200 per module (Executive) / ₹1,200 per module (Professional)',
      trainingFee: '₹7,500 (15-day online EDP) + ₹10,000 (15-day classroom EDP)',
      membershipFee: '₹2,500 + GST (Annual ACS Membership)',
      estimatedPreparationCost: '₹50,000 – ₹1,50,000',
      currency: 'INR (₹)',
      officialFeeNote: 'Mandatory statutory fees payable directly to ICSI portal.',
      hindiOfficialFeeNote: 'सीधे आईसीएसआई पोर्टल पर देय अनिवार्य वैधानिक शुल्क।'
    },
    passingCriteria: '40% marks in each paper and 50% marks in the aggregate of all papers of each module/group.',
    practicalTraining: {
      required: true,
      duration: '21 Months Long Term Practical Training',
      name: 'Practical Training under a practicing CS or approved Corporate Body',
      timing: 'After passing CS Executive Programme and completing 1-month Executive Development Programme (EDP).',
      details: 'Includes Corporate Governance, Board secretarial practice, drafting petitions for NCLT, ROC filing, SEBI LODR compliance, and Corporate Restructuring.'
    },
    membershipRequirements: [
      'Pass CS Professional Programme.',
      'Complete 21-month practical training and Corporate Leadership Development Programme (CLDP).',
      'Enroll as Associate Company Secretary (ACS).',
      'After 5 years of continuous active professional practice or service, elevate to Fellow Company Secretary (FCS).'
    ],
    renewalCpeRequirements: {
      cpeHoursPerYear: '20 CPE credit hours annually (minimum 12 structured hours)',
      validityYears: 'Annual renewal via Membership fee',
      details: 'Mandatory continuing professional development compliance as per ICSI CPE guidelines.'
    },
    careerOutcomes: [
      'Company Secretary & Key Managerial Personnel (KMP) under Sec 203 Companies Act',
      'Practicing Company Secretary (Secretarial Auditor, Due Diligence Auditor)',
      'Chief Compliance Officer / Head of Legal & Regulatory Affairs',
      'NCLT, NCLAT & SAT Registered Representative',
      'Corporate Governance & ESG Compliance Director'
    ],
    averageCompletionTime: '3 to 4 Years',
    globalRecognition: 'MoUs with Chartered Governance Institute (CGI UK), CISI, and recognition across Commonwealth jurisdictions.',
    syllabusVersions: ['latest.json', '2026.json', '2022.json'],
    tags: ['Corporate Law', 'SEBI', 'Governance', 'Secretarial Audit', 'NCLT', 'ICSI'],
    levels: [
      {
        id: 'cs-cseet',
        name: 'CSEET (CS Executive Entrance Test)',
        hindiName: 'सीएसईईटी (सीएस एग्जीक्यूटिव प्रवेश परीक्षा)',
        examFrequency: 'Four times a year: January, May, July, November',
        totalPapers: 4,
        passingRules: '40% in each paper, 50% aggregate.',
        papers: [
          {
            id: 'cs-eet-p1',
            paperNumber: 1,
            code: 'CSEET-P1',
            name: 'Business Communication',
            marks: 50,
            examDurationHours: 2,
            examMode: 'CBT (Computer Based)',
            questionPattern: 'Objective (MCQ)',
            negativeMarking: false,
            domains: []
          },
          {
            id: 'cs-eet-p2',
            paperNumber: 2,
            code: 'CSEET-P2',
            name: 'Legal Aptitude and Logical Reasoning',
            marks: 50,
            examDurationHours: 2,
            examMode: 'CBT (Computer Based)',
            questionPattern: 'Objective (MCQ)',
            negativeMarking: false,
            domains: []
          },
          {
            id: 'cs-eet-p3',
            paperNumber: 3,
            code: 'CSEET-P3',
            name: 'Economic and Business Environment',
            marks: 50,
            examDurationHours: 2,
            examMode: 'CBT (Computer Based)',
            questionPattern: 'Objective (MCQ)',
            negativeMarking: false,
            domains: []
          },
          {
            id: 'cs-eet-p4',
            paperNumber: 4,
            code: 'CSEET-P4',
            name: 'Current Affairs & Quantitative Aptitude',
            marks: 50,
            examDurationHours: 2,
            examMode: 'CBT (Computer Based)',
            questionPattern: 'Objective (MCQ)',
            negativeMarking: false,
            domains: []
          }
        ]
      },
      {
        id: 'cs-executive',
        name: 'Executive Programme',
        hindiName: 'एग्जीक्यूटिव प्रोग्राम',
        examFrequency: 'Twice a year: June and December',
        totalPapers: 7,
        passingRules: '40% in each paper, 50% aggregate in each group.',
        papers: [
          {
            id: 'cs-exec-p1',
            paperNumber: 1,
            code: 'EXEC-P1',
            name: 'Jurisprudence, Interpretation & General Laws',
            marks: 100,
            examDurationHours: 3,
            examMode: 'Pen & Paper',
            questionPattern: 'Descriptive',
            negativeMarking: false,
            domains: []
          },
          {
            id: 'cs-exec-p2',
            paperNumber: 2,
            code: 'EXEC-P2',
            name: 'Company Law & Practice',
            marks: 100,
            examDurationHours: 3,
            examMode: 'Pen & Paper',
            questionPattern: 'Descriptive',
            negativeMarking: false,
            domains: []
          },
          {
            id: 'cs-exec-p3',
            paperNumber: 3,
            code: 'EXEC-P3',
            name: 'Setting Up of Business, Industrial & Labour Laws',
            marks: 100,
            examDurationHours: 3,
            examMode: 'Pen & Paper',
            questionPattern: 'Descriptive',
            negativeMarking: false,
            domains: []
          },
          {
            id: 'cs-exec-p4',
            paperNumber: 4,
            code: 'EXEC-P4',
            name: 'Corporate Accounting and Financial Management',
            marks: 100,
            examDurationHours: 3,
            examMode: 'Pen & Paper',
            questionPattern: 'Descriptive',
            negativeMarking: false,
            domains: []
          },
          {
            id: 'cs-exec-p5',
            paperNumber: 5,
            code: 'EXEC-P5',
            name: 'Capital Markets & Securities Laws',
            marks: 100,
            examDurationHours: 3,
            examMode: 'Pen & Paper',
            questionPattern: 'Descriptive',
            negativeMarking: false,
            domains: []
          },
          {
            id: 'cs-exec-p6',
            paperNumber: 6,
            code: 'EXEC-P6',
            name: 'Economic, Commercial and Intellectual Property Laws',
            marks: 100,
            examDurationHours: 3,
            examMode: 'Pen & Paper',
            questionPattern: 'Descriptive',
            negativeMarking: false,
            domains: []
          },
          {
            id: 'cs-exec-p7',
            paperNumber: 7,
            code: 'EXEC-P7',
            name: 'Tax Laws & Practice',
            marks: 100,
            examDurationHours: 3,
            examMode: 'Pen & Paper',
            questionPattern: 'Descriptive',
            negativeMarking: false,
            domains: []
          }
        ]
      },
      {
        id: 'cs-professional',
        name: 'Professional Programme',
        hindiName: 'प्रोफेशनल प्रोग्राम',
        examFrequency: 'Twice a year: June and December',
        totalPapers: 7,
        passingRules: '40% per paper, 50% aggregate per group.',
        papers: [
          {
            id: 'cs-prof-p1',
            paperNumber: 1,
            code: 'PROF-P1',
            name: 'Environmental, Social and Governance (ESG) - Principles & Practice',
            marks: 100,
            examDurationHours: 3,
            examMode: 'Pen & Paper',
            questionPattern: 'Descriptive',
            negativeMarking: false,
            domains: []
          },
          {
            id: 'cs-prof-p2',
            paperNumber: 2,
            code: 'PROF-P2',
            name: 'Drafting, Pleadings and Appearances',
            marks: 100,
            examDurationHours: 3,
            examMode: 'Pen & Paper',
            questionPattern: 'Descriptive',
            negativeMarking: false,
            domains: []
          },
          {
            id: 'cs-prof-p3',
            paperNumber: 3,
            code: 'PROF-P3',
            name: 'Compliance Management, Audit & Due Diligence',
            marks: 100,
            examDurationHours: 3,
            examMode: 'Pen & Paper',
            questionPattern: 'Descriptive',
            negativeMarking: false,
            domains: []
          },
          {
            id: 'cs-prof-p4',
            paperNumber: 4,
            code: 'PROF-P4',
            name: 'Strategic Management & Corporate Finance',
            marks: 100,
            examDurationHours: 3,
            examMode: 'Pen & Paper',
            questionPattern: 'Descriptive',
            negativeMarking: false,
            domains: []
          },
          {
            id: 'cs-prof-p5',
            paperNumber: 5,
            code: 'PROF-P5',
            name: 'Corporate Restructuring, Valuation and Insolvency',
            marks: 100,
            examDurationHours: 3,
            examMode: 'Pen & Paper',
            questionPattern: 'Descriptive',
            negativeMarking: false,
            domains: []
          },
          {
            id: 'cs-prof-p6',
            paperNumber: 6,
            code: 'PROF-P6',
            name: 'Elective 1 (Arbitration, Mediation or Insolvency or Labour Laws)',
            marks: 100,
            examDurationHours: 3,
            examMode: 'Pen & Paper (Open Book)',
            questionPattern: 'Case Study Based',
            negativeMarking: false,
            domains: []
          },
          {
            id: 'cs-prof-p7',
            paperNumber: 7,
            code: 'PROF-P7',
            name: 'Elective 2 (Banking Law or Cyber Laws or Forensic Audit)',
            marks: 100,
            examDurationHours: 3,
            examMode: 'Pen & Paper (Open Book)',
            questionPattern: 'Case Study Based',
            negativeMarking: false,
            domains: []
          }
        ]
      }
    ]
  },

  // 3. CMA - ICMAI
  {
    id: 'cma',
    acronym: 'CMA',
    name: 'Cost and Management Accountant',
    hindiName: 'लागत एवं प्रबंधन लेखाकार (सीएमए)',
    category: 'COST_MANAGEMENT_ACCOUNTING',
    categoryLabel: 'Cost & Management Accounting',
    hindiCategoryLabel: 'लागत एवं प्रबंधन लेखांकन',
    institute: 'The Institute of Cost Accountants of India (ICMAI)',
    hindiInstitute: 'द इंस्टीट्यूट ऑफ कॉस्ट अकाउंटेंट्स ऑफ इंडिया (आईसीएमएआई)',
    country: 'India',
    establishedYear: 1959,
    officialUrl: 'https://icmai.in',
    badgeColor: '#b45309',
    tagline: 'Statutory Cost Auditors, Strategic Management Accountants & Pricing Economists',
    hindiTagline: 'सांविधिक लागत लेखापरीक्षक, रणनीतिक प्रबंधन लेखाकार एवं मूल्य निर्धारण अर्थशास्त्री',
    description: 'Statutory qualification under the Cost and Works Accountants Act, 1959. Grants exclusive statutory powers for Cost Audit under Section 148 of Companies Act 2013, Cost Accounting Standards (CAS) formulation, excise/customs valuation, and operational profitability management.',
    hindiDescription: 'लागत एवं कार्य लेखाकार अधिनियम, 1959 के तहत सांविधिक योग्यता। धारा 148 के तहत लागत लेखापरीक्षा (कॉस्ट ऑडिट) का अनन्य सांविधिक अधिकार।',
    latestNotification: {
      title: 'ICMAI Syllabus 2022 Implementation & Exam Guidelines',
      hindiTitle: 'आईसीएमएआई सिलेबस 2022 कार्यान्वयन एवं परीक्षा दिशा-निर्देश',
      date: '2026-04-20',
      link: 'https://icmai.in/studentswebsite/Syllabus-2022.php',
      summary: 'Syllabus 2022 incorporates modern data analytics, SAP power-user training, mandatory 15-month practical training, and restructured cost accounting papers.',
      hindiSummary: 'सिलेबस 2022 में आधुनिक डेटा एनालिटिक्स, एसएपी पावर-यूजर प्रशिक्षण और 15 महीने का अनिवार्य व्यावहारिक प्रशिक्षण शामिल है।',
      schemeVersion: 'Syllabus 2022 / Active',
    },
    currentSchemeYear: '2022–Present',
    eligibility: {
      minimumEducation: '10+2 (Class 12) for Foundation; Graduate in any discipline (except Fine Arts) for Direct Entry to Intermediate.',
      hindiMinimumEducation: 'फाउंडेशन के लिए 10+2; इंटरमीडिएट में सीधे प्रवेश के लिए किसी भी विषय में स्नातक (ललित कला को छोड़कर)।',
      streamRequirements: 'Any recognized stream for Foundation; any degree except Fine Arts for Intermediate.',
      provisionalRegistrationPermitted: true,
      exemptionsAvailable: 'Graduates exempt from CMA Foundation; ICAI/ICSI intermediate pass students get direct entry.',
      hindiExemptionsAvailable: 'स्नातक छात्र सीएमए फाउंडेशन से मुक्त हैं; सीए/सीएस इंटरमीडिएट उत्तीर्ण छात्र सीधे प्रवेश प्राप्त कर सकते हैं।'
    },
    attemptsLimit: 'Registration valid for 7 years for Intermediate/Final levels.',
    exemptions: [
      'Graduates with Commerce/any stream exempt from CMA Foundation and eligible for Direct Entry into CMA Intermediate.',
      'Qualified Engineers and MBA Finance holders eligible for subject-wise exemptions in select papers.'
    ],
    feeStructure: {
      registrationFee: '₹6,000 (Foundation) / ₹23,100 (Inter both groups) / ₹25,000 (Final)',
      examinationFee: '₹1,500 (Foundation) / ₹2,800 (Inter both groups) / ₹2,800 (Final both groups)',
      estimatedPreparationCost: '₹60,000 – ₹1,80,000',
      currency: 'INR (₹)',
      officialFeeNote: 'Fees listed are statutory dues to ICMAI portal.',
      hindiOfficialFeeNote: 'आईसीएमएआई पोर्टल पर देय वैधानिक शुल्क।'
    },
    passingCriteria: '40% marks in each individual paper and a minimum 50% aggregate marks in all papers of a group.',
    practicalTraining: {
      required: true,
      duration: '15 Months Practical Training',
      name: 'Practical Training in Cost & Management Accounting',
      timing: 'Before appearing for CMA Final Examination.',
      details: 'Focus on Cost Records (CARO & CRA Rules), Budgeting, Variance Reporting, Standard Costing, and Supply Chain Finance.'
    },
    membershipRequirements: [
      'Pass CMA Final Examination.',
      'Complete 3 years of qualifying cost and management accounting experience (including 15-month training).',
      'Admitted as Associate Cost and Management Accountant (ACMA). Advance to FCMA after 5 years.'
    ],
    renewalCpeRequirements: {
      cpeHoursPerYear: '20 CEP credit hours per year',
      validityYears: 'Annual renewal',
      details: 'Continuing Education Programme credits monitored annually by ICMAI.'
    },
    careerOutcomes: [
      'Statutory Cost Auditor under Section 148 of Companies Act 2013',
      'Vice President / Head of Management Accounting & FP&A',
      'Pricing Strategist & Supply Chain Finance Controller',
      'Valuation Professional (Registered Valuer under IBBI)'
    ],
    averageCompletionTime: '3 to 4.5 Years',
    globalRecognition: 'MoUs with IMA (US CMA), CIMA (UK), CPA Australia, and CISI.',
    syllabusVersions: ['latest.json', '2026.json', '2022.json'],
    tags: ['Cost Audit', 'Costing', 'Management Accounting', 'ICMAI', 'Valuation'],
    levels: [
      {
        id: 'cma-foundation',
        name: 'Foundation Course',
        hindiName: 'फाउंडेशन पाठ्यक्रम',
        examFrequency: 'Twice a year: June and December',
        totalPapers: 4,
        passingRules: '40% in each paper, 50% aggregate.',
        papers: [
          { id: 'cma-f-p1', paperNumber: 1, code: 'CMA-F1', name: 'Fundamentals of Business Laws & Business Communication', marks: 100, examDurationHours: 3, examMode: 'CBT (Computer Based)', questionPattern: 'Objective (MCQ)', negativeMarking: false, domains: [] },
          { id: 'cma-f-p2', paperNumber: 2, code: 'CMA-F2', name: 'Fundamentals of Financial & Cost Accounting', marks: 100, examDurationHours: 3, examMode: 'CBT (Computer Based)', questionPattern: 'Objective (MCQ)', negativeMarking: false, domains: [] },
          { id: 'cma-f-p3', paperNumber: 3, code: 'CMA-F3', name: 'Fundamentals of Business Mathematics & Statistics', marks: 100, examDurationHours: 3, examMode: 'CBT (Computer Based)', questionPattern: 'Objective (MCQ)', negativeMarking: false, domains: [] },
          { id: 'cma-f-p4', paperNumber: 4, code: 'CMA-F4', name: 'Fundamentals of Business Economics & Management', marks: 100, examDurationHours: 3, examMode: 'CBT (Computer Based)', questionPattern: 'Objective (MCQ)', negativeMarking: false, domains: [] }
        ]
      },
      {
        id: 'cma-intermediate',
        name: 'Intermediate Course',
        hindiName: 'इंटरमीडिएट पाठ्यक्रम',
        examFrequency: 'Twice a year: June and December',
        totalPapers: 8,
        passingRules: '40% per paper, 50% aggregate per group.',
        papers: [
          { id: 'cma-i-p5', paperNumber: 5, code: 'CMA-P5', name: 'Business Laws and Ethics', marks: 100, examDurationHours: 3, examMode: 'Pen & Paper', questionPattern: 'Descriptive', negativeMarking: false, domains: [] },
          { id: 'cma-i-p6', paperNumber: 6, code: 'CMA-P6', name: 'Financial Accounting', marks: 100, examDurationHours: 3, examMode: 'Pen & Paper', questionPattern: 'Descriptive', negativeMarking: false, domains: [] },
          { id: 'cma-i-p7', paperNumber: 7, code: 'CMA-P7', name: 'Direct and Indirect Taxation', marks: 100, examDurationHours: 3, examMode: 'Pen & Paper', questionPattern: 'Descriptive', negativeMarking: false, domains: [] },
          { id: 'cma-i-p8', paperNumber: 8, code: 'CMA-P8', name: 'Cost Accounting', marks: 100, examDurationHours: 3, examMode: 'Pen & Paper', questionPattern: 'Descriptive', negativeMarking: false, domains: [] },
          { id: 'cma-i-p9', paperNumber: 9, code: 'CMA-P9', name: 'Operations Management and Strategic Management', marks: 100, examDurationHours: 3, examMode: 'Pen & Paper', questionPattern: 'Descriptive', negativeMarking: false, domains: [] },
          { id: 'cma-i-p10', paperNumber: 10, code: 'CMA-P10', name: 'Corporate Accounting and Auditing', marks: 100, examDurationHours: 3, examMode: 'Pen & Paper', questionPattern: 'Descriptive', negativeMarking: false, domains: [] },
          { id: 'cma-i-p11', paperNumber: 11, code: 'CMA-P11', name: 'Financial Management and Business Data Analytics', marks: 100, examDurationHours: 3, examMode: 'Pen & Paper', questionPattern: 'Descriptive', negativeMarking: false, domains: [] },
          { id: 'cma-i-p12', paperNumber: 12, code: 'CMA-P12', name: 'Management Accounting', marks: 100, examDurationHours: 3, examMode: 'Pen & Paper', questionPattern: 'Descriptive', negativeMarking: false, domains: [] }
        ]
      },
      {
        id: 'cma-final',
        name: 'Final Course',
        hindiName: 'फाइनल पाठ्यक्रम',
        examFrequency: 'Twice a year: June and December',
        totalPapers: 8,
        passingRules: '40% per paper, 50% aggregate per group.',
        papers: [
          { id: 'cma-fin-p13', paperNumber: 13, code: 'CMA-P13', name: 'Corporate and Economic Laws', marks: 100, examDurationHours: 3, examMode: 'Pen & Paper', questionPattern: 'Descriptive', negativeMarking: false, domains: [] },
          { id: 'cma-fin-p14', paperNumber: 14, code: 'CMA-P14', name: 'Strategic Financial Management (SFM)', marks: 100, examDurationHours: 3, examMode: 'Pen & Paper', questionPattern: 'Descriptive', negativeMarking: false, domains: [] },
          { id: 'cma-fin-p15', paperNumber: 15, code: 'CMA-P15', name: 'Direct Tax Laws and International Taxation', marks: 100, examDurationHours: 3, examMode: 'Pen & Paper', questionPattern: 'Descriptive', negativeMarking: false, domains: [] },
          { id: 'cma-fin-p16', paperNumber: 16, code: 'CMA-P16', name: 'Strategic Cost Management (SCM)', marks: 100, examDurationHours: 3, examMode: 'Pen & Paper', questionPattern: 'Descriptive', negativeMarking: false, domains: [] },
          { id: 'cma-fin-p17', paperNumber: 17, code: 'CMA-P17', name: 'Cost and Management Audit (CAS & Sec 148)', marks: 100, examDurationHours: 3, examMode: 'Pen & Paper', questionPattern: 'Descriptive', negativeMarking: false, domains: [] },
          { id: 'cma-fin-p18', paperNumber: 18, code: 'CMA-P18', name: 'Corporate Financial Reporting (Ind AS)', marks: 100, examDurationHours: 3, examMode: 'Pen & Paper', questionPattern: 'Descriptive', negativeMarking: false, domains: [] },
          { id: 'cma-fin-p19', paperNumber: 19, code: 'CMA-P19', name: 'Indirect Tax Laws and Practice', marks: 100, examDurationHours: 3, examMode: 'Pen & Paper', questionPattern: 'Descriptive', negativeMarking: false, domains: [] },
          { id: 'cma-fin-p20', paperNumber: 20, code: 'CMA-P20', name: 'Strategic Performance Management and Business Valuation', marks: 100, examDurationHours: 3, examMode: 'Pen & Paper', questionPattern: 'Descriptive', negativeMarking: false, domains: [] }
        ]
      }
    ]
  },

  // 4. CFA - CFA Institute
  {
    id: 'cfa',
    acronym: 'CFA',
    name: 'Chartered Financial Analyst',
    hindiName: 'चार्टर्ड फाइनेंशियल एनालिस्ट (सीएफए)',
    category: 'INVESTMENT',
    categoryLabel: 'Investment & Asset Management',
    hindiCategoryLabel: 'निवेश एवं परिसंपत्ति प्रबंधन',
    institute: 'CFA Institute (USA)',
    hindiInstitute: 'सीएफए इंस्टीट्यूट (यूएसए)',
    country: 'Global / USA',
    establishedYear: 1962,
    officialUrl: 'https://www.cfainstitute.org',
    badgeColor: '#7c3aed',
    tagline: 'The Gold Standard in Global Investment Management, Equity Research & Portfolio Strategy',
    hindiTagline: 'वैश्विक निवेश प्रबंधन, इक्विटी रिसर्च और पोर्टफोलियो रणनीति में स्वर्ण मानक',
    description: 'Globally recognized investment credential covering Ethical & Professional Standards, Quantitative Methods, Economics, Financial Statement Analysis, Corporate Issuers, Equity Investments, Fixed Income, Derivatives, Alternative Investments, and Portfolio Management.',
    hindiDescription: 'नैतिक और व्यावसायिक मानकों, वित्तीय विवरण विश्लेषण, इक्विटी, फिक्स्ड इनकम, डेरिवेटिव्स और पोर्टफोलियो प्रबंधन को कवर करने वाला वैश्विक स्तर पर मान्यता प्राप्त निवेश क्रेडेंशियल।',
    latestNotification: {
      title: 'CFA Program Evolution Updates: Practical Skills Modules & Level III Pathways',
      hindiTitle: 'सीएफए प्रोग्राम इवोल्यूशन: प्रैक्टिकल स्किल्स मॉड्यूल एवं लेवल 3 स्पेशलाइजेशन',
      date: '2026-05-01',
      link: 'https://www.cfainstitute.org/programs/cfa/curriculum/evolution',
      summary: 'Mandatory completion of Practical Skills Modules (PSMs in Python, Financial Modeling, Analyst Skills) before score release, plus specialized Level III pathways in Portfolio Management, Private Wealth, and Private Markets.',
      hindiSummary: 'स्कोर रिलीज से पहले प्रैक्टिकल स्किल्स मॉड्यूल (पायथन, फाइनेंशियल मॉडलिंग) अनिवार्य, साथ ही लेवल 3 में पोर्टफोलियो मैनेजमेंट, प्राइवेट वेल्थ और प्राइवेट मार्केट्स में स्पेशलाइजेशन पाथवे।',
      schemeVersion: 'CFA Evolution 2024–2026 / Active',
    },
    currentSchemeYear: '2025–2026 Curriculum',
    eligibility: {
      minimumEducation: 'Bachelor\'s degree (or equivalent), or undergraduate student within 23 months of graduation for Level I.',
      hindiMinimumEducation: 'स्नातक डिग्री (या समकक्ष), या लेवल 1 हेतु स्नातक पूरा होने में 23 महीने शेष रहने वाले छात्र।',
      streamRequirements: 'Any academic discipline (Finance, Engineering, Economics, Arts, Science).',
      provisionalRegistrationPermitted: true,
      exemptionsAvailable: 'No direct exemptions in CFA levels. Indian Charterholders receive waiver under SEBI RA/IA norms.',
      hindiExemptionsAvailable: 'सीएफए स्तरों में कोई सीधी छूट नहीं। भारतीय चार्टरधारकों को सेबी नियमों के तहत छूट मिलती है।'
    },
    attemptsLimit: 'Maximum 6 attempts per level.',
    exemptions: [
      'Select regulatory waiver in India: SEBI Research Analyst (RA) and Investment Adviser (IA) regulations grant certain paper exemptions to CFA Charterholders.',
      'No level exemptions within the CFA Program.'
    ],
    feeStructure: {
      registrationFee: '$350 (One-time Enrollment Fee)',
      examinationFee: '$990 (Early Bird) / $1,290 (Standard) per Level',
      estimatedPreparationCost: '$3,500 – $5,000 (Total program fees + prep material)',
      currency: 'USD ($)',
      officialFeeNote: 'All fees are in US Dollars payable via credit card or international wire to CFA Institute.',
      hindiOfficialFeeNote: 'सभी शुल्क अमेरिकी डॉलर में सीधे सीएफए इंस्टीट्यूट को देय हैं।'
    },
    passingCriteria: 'Determined by the Board of Governors via the Minimum Passing Score (MPS) methodology after each exam window (typically ~65%-72%).',
    practicalTraining: {
      required: true,
      duration: '4,000 Hours of Qualified Work Experience',
      name: 'Investment Decision-Making Work Experience',
      timing: 'Can be accrued before, during, or after passing CFA exams.',
      details: 'Work must directly involve the investment decision-making process or producing work product that informs decisions (equity research, valuation, risk analysis, portfolio allocation).'
    },
    membershipRequirements: [
      'Pass Level I, Level II, and Level III examinations.',
      'Complete 4,000 hours of qualifying professional investment work experience completed over a minimum of 36 months.',
      'Provide 2-3 professional reference letters.',
      'Sign the annual Professional Conduct Statement and pay regular member dues.'
    ],
    renewalCpeRequirements: {
      cpeHoursPerYear: '20 Continuing Education (CE) credits recommended annually (including 2 Ethics credits)',
      validityYears: 'Annual renewal via Member dues',
      renewalFee: '$299 / year',
      details: 'Voluntary reporting of CE credits actively encouraged; compliance with Code of Ethics is mandatory.'
    },
    careerOutcomes: [
      'Portfolio Manager / Hedge Fund & Mutual Fund Asset Allocator',
      'Buy-side / Sell-side Equity Research Analyst',
      'Investment Banker (M&A, ECM, DCM valuation)',
      'Chief Investment Officer (CIO) / Chief Risk Officer',
      'Private Equity & Venture Capital Investment Associate'
    ],
    averageCompletionTime: '2.5 to 4 Years',
    globalRecognition: 'Recognized in 165+ countries; statutory waivers with UK FCA, US SEC / FINRA (Series 86/87 waiver), Canada CSA, HK SFC, and SEBI (India).',
    syllabusVersions: ['latest.json', '2026.json', '2025.json'],
    tags: ['Investment', 'Equity Research', 'Portfolio Management', 'Valuation', 'Fixed Income', 'Ethics', 'CFA Institute'],
    levels: [
      {
        id: 'cfa-level-1',
        name: 'CFA Level I',
        hindiName: 'सीएफए लेवल I',
        examFrequency: 'Four times a year: February, May, August, November',
        totalPapers: 1, // Single 180-question exam in two 135-minute sessions
        passingRules: 'Score above MPS across 10 curriculum topics.',
        papers: [
          {
            id: 'cfa-l1-exam',
            paperNumber: 1,
            code: 'CFA-L1',
            name: 'CFA Level I Computer-Based Examination',
            marks: 180, // 180 independent multiple choice questions
            examDurationHours: 4.5,
            examMode: 'CBT (Computer Based)',
            questionPattern: 'Objective (MCQ)',
            negativeMarking: false,
            domains: [
              {
                id: 'cfa-l1-d1',
                name: 'Ethical and Professional Standards (15-20%)',
                topics: [
                  { id: 'cfa-l1-t1', name: 'Code of Ethics and Standards of Professional Conduct', keyConcepts: ['Professionalism', 'Integrity of Capital Markets (Material Nonpublic Information)', 'Duties to Clients', 'Duties to Employers', 'Investment Analysis & Recommendations', 'Conflicts of Interest'] },
                  { id: 'cfa-l1-t2', name: 'Global Investment Performance Standards (GIPS)', keyConcepts: ['Composites', 'Input data', 'Calculation methodology', 'Disclosures'] }
                ]
              },
              {
                id: 'cfa-l1-d2',
                name: 'Financial Statement Analysis (11-14%)',
                topics: [
                  { id: 'cfa-l1-t3', name: 'Financial Reporting Framework & Standards', keyConcepts: ['IFRS vs US GAAP', 'Financial Statement mechanics'] },
                  { id: 'cfa-l1-t4', name: 'Income Statement, Balance Sheet, Cash Flow & Non-Current Assets', keyConcepts: ['Revenue recognition', 'Inventory valuation (FIFO, LIFO)', 'Capitalizing vs Expensing', 'Deferred Tax Assets/Liabilities (DTA/DTL)', 'Leases'] }
                ]
              },
              {
                id: 'cfa-l1-d3',
                name: 'Equity Investments & Fixed Income (21-26%)',
                topics: [
                  { id: 'cfa-l1-t5', name: 'Equity Investments: Market Organization, Structure & Valuation', keyConcepts: ['Dividend Discount Model (DDM)', 'Gordon Growth', 'P/E, P/B, EV/EBITDA multiples'] },
                  { id: 'cfa-l1-t6', name: 'Fixed Income: Valuation, Yield Measures, Duration & Convexity', keyConcepts: ['Macaulay & Modified Duration', 'Convexity adjustment', 'Yield curve structures', 'Credit risk & spreads'] }
                ]
              },
              {
                id: 'cfa-l1-d4',
                name: 'Quantitative Methods & Economics (14-18%)',
                topics: [
                  { id: 'cfa-l1-t7', name: 'Time Value of Money, Probability & Hypothesis Testing', keyConcepts: ['Present value, Future value', 'Normal & Student t distributions', 'Type I and Type II errors', 'Central Limit Theorem'] },
                  { id: 'cfa-l1-t8', name: 'Microeconomics, Macroeconomics & Monetary / Fiscal Policy', keyConcepts: ['Aggregate demand/supply', 'Business cycles', 'Exchange rate quotations & cross rates'] }
                ]
              },
              {
                id: 'cfa-l1-d5',
                name: 'Corporate Issuers, Derivatives, Alternatives & Portfolio Management (20-25%)',
                topics: [
                  { id: 'cfa-l1-t9', name: 'Corporate Issuers: Working Capital & Capital Structure', keyConcepts: ['Cost of capital', 'Capital investment decisions', 'ESG considerations'] },
                  { id: 'cfa-l1-t10', name: 'Derivatives & Alternative Investments Basics', keyConcepts: ['Forwards, Futures, Options (Call/Put payoff), Swaps', 'Real Estate, Private Equity, Commodities, Hedge Funds'] },
                  { id: 'cfa-l1-t11', name: 'Portfolio Management Fundamentals', keyConcepts: ['Investment Policy Statement (IPS)', 'Risk and return of multi-asset portfolios', 'CAPM & Security Market Line (SML)'] }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'cfa-level-2',
        name: 'CFA Level II',
        hindiName: 'सीएफए लेवल II',
        examFrequency: 'Three times a year: May, August, November',
        totalPapers: 1,
        passingRules: 'Item-set case vignette exam. Score above MPS.',
        papers: [
          {
            id: 'cfa-l2-exam',
            paperNumber: 1,
            code: 'CFA-L2',
            name: 'CFA Level II Vignette Item-Set Examination',
            marks: 88, // 88 questions organized in 22 vignettes of 4 questions each
            examDurationHours: 4.5,
            examMode: 'CBT (Computer Based)',
            questionPattern: 'Case Study Based',
            negativeMarking: false,
            domains: []
          }
        ]
      },
      {
        id: 'cfa-level-3',
        name: 'CFA Level III',
        hindiName: 'सीएफए लेवल III',
        examFrequency: 'Twice a year: February and August',
        totalPapers: 1,
        passingRules: 'Structured constructed response (essay) + item sets. Score above MPS.',
        papers: [
          {
            id: 'cfa-l3-exam',
            paperNumber: 1,
            code: 'CFA-L3',
            name: 'CFA Level III Constructed Response & Item-Set Examination',
            marks: 100,
            examDurationHours: 4.5,
            examMode: 'CBT (Computer Based)',
            questionPattern: 'Mixed (70% Descriptive + 30% MCQ)',
            negativeMarking: false,
            domains: []
          }
        ]
      }
    ]
  },

  // 5. FRM - GARP
  {
    id: 'frm',
    acronym: 'FRM',
    name: 'Financial Risk Manager',
    hindiName: 'फाइनेंशियल रिस्क मैनेजर (एफआरएम)',
    category: 'RISK_MANAGEMENT',
    categoryLabel: 'Financial Risk Management',
    hindiCategoryLabel: 'वित्तीय जोखिम प्रबंधन',
    institute: 'Global Association of Risk Professionals (GARP, USA)',
    hindiInstitute: 'ग्लोबल एसोसिएशन ऑफ रिस्क प्रोफेशनल्स (गारप, यूएसए)',
    country: 'Global / USA',
    establishedYear: 1997,
    officialUrl: 'https://www.garp.org',
    badgeColor: '#dc2626',
    tagline: 'The Definitive Global Certification for Market, Credit, Operational & Treasury Risk',
    hindiTagline: 'मार्केट, क्रेडिट, ऑपरेशनल और ट्रेजरी रिस्क में दुनिया का अग्रणी सर्टिफिकेशन',
    description: 'Specialized credential validating comprehensive mastery over Quantitative Analysis, Financial Markets, Valuation Models, Market Risk, Credit Risk Measurement, Operational Resilience, Liquidity Risk, and Basel regulatory capital frameworks.',
    hindiDescription: 'क्वांटिटेटिव एनालिसिस, मार्केट रिस्क, क्रेडिट रिस्क, ऑपरेशनल रेजिलिएंस और बेसल रेगुलेटरी कैपिटल फ्रेमवर्क में विशेषज्ञता प्रमाणित करने वाला अंतरराष्ट्रीय क्रेडेंशियल।',
    latestNotification: {
      title: 'GARP 2026 FRM Curriculum Updates: Climate Risk & Machine Learning in Risk Models',
      hindiTitle: 'गारप 2026 एफआरएम पाठ्यक्रम अपडेट: क्लाइमेट रिस्क एवं रिस्क मॉडलिंग में मशीन लर्निंग',
      date: '2026-06-01',
      link: 'https://www.garp.org/frm/curriculum',
      summary: 'Enhanced modules on Liquidity Risk stress testing, Counterparty Credit Risk (CCR / XVA), Machine Learning in Credit Scoring, and Basel III Endgame regulatory requirements.',
      hindiSummary: 'लिक्विडिटी रिस्क स्ट्रेस टेस्टिंग, काउंटरपार्टी क्रेडिट रिस्क (एक्सवीए), मशीन लर्निंग क्रेडिट स्कोरिंग और बेसल III एंडगेम नियमों पर उन्नत मॉड्यूल।',
      schemeVersion: '2026 Official Curriculum',
    },
    currentSchemeYear: '2026 Curriculum',
    eligibility: {
      minimumEducation: 'No formal educational prerequisite to sit for Part I or Part II. Open to all students and working professionals.',
      hindiMinimumEducation: 'पार्ट 1 या पार्ट 2 में बैठने के लिए कोई औपचारिक शैक्षणिक पूर्व-शर्त नहीं है।',
      streamRequirements: 'Open to all backgrounds (Quantitative, Mathematics, Engineering, Commerce, Economics preferred).',
      provisionalRegistrationPermitted: true,
      exemptionsAvailable: 'None. Both Part I and Part II must be passed sequentially or concurrently.',
      hindiExemptionsAvailable: 'कोई छूट नहीं। पार्ट 1 और पार्ट 2 दोनों पास करना अनिवार्य है।'
    },
    attemptsLimit: 'Candidates must pass Part II within 4 years of passing Part I; experience must be submitted within 5 years of passing Part II.',
    exemptions: ['No exemptions granted.'],
    feeStructure: {
      registrationFee: '$400 (One-time Enrollment Fee)',
      examinationFee: '$600 (Early Bird) / $800 (Standard) per Part',
      estimatedPreparationCost: '$1,600 – $2,500',
      currency: 'USD ($)',
      officialFeeNote: 'Directly payable to GARP via international payment gateway.',
      hindiOfficialFeeNote: 'सीधे गारप पोर्टल पर देय।'
    },
    passingCriteria: 'GARP determines pass/fail status based on a composite percentile scoring model across all tested domains.',
    practicalTraining: {
      required: true,
      duration: '2 Years Full-Time Professional Work Experience',
      name: 'Financial Risk Management Experience',
      timing: 'Accrued within 5 years after passing Part II.',
      details: 'Risk analysis, credit risk underwriting, treasury operations, market risk monitoring, portfolio risk management, or regulatory audit.'
    },
    membershipRequirements: [
      'Pass FRM Part I Examination (100 MCQs in 4 hours).',
      'Pass FRM Part II Examination (80 MCQs in 4 hours).',
      'Demonstrate 2 years of professional full-time financial risk management experience.',
      'Sign GARP Code of Conduct and maintain Certified FRM designation.'
    ],
    renewalCpeRequirements: {
      cpeHoursPerYear: '40 Continuing Professional Development (CPD) hours every 2 years',
      validityYears: 'Biennial cycle (free to participate, voluntary reporting certified)',
      details: 'Demonstrates active ongoing commitment to risk management best practices.'
    },
    careerOutcomes: [
      'Chief Risk Officer (CRO) / Head of Enterprise Risk Management',
      'Market Risk Analyst / Quantitative Risk Modeler (VaR, Stresstesting)',
      'Credit Risk Underwriter / Basel Capital Computation Specialist',
      'Treasury & Liquidity Risk Manager (LCR, NSFR oversight)',
      'Model Risk Validation Specialist'
    ],
    averageCompletionTime: '1 to 2 Years',
    globalRecognition: 'Officially recognized by top global investment banks, central banks (including RBI, US Federal Reserve, ECB), and sovereign wealth funds in 190+ countries.',
    syllabusVersions: ['latest.json', '2026.json', '2025.json'],
    tags: ['Risk Management', 'Credit Risk', 'Market Risk', 'Basel III', 'VaR', 'GARP'],
    levels: [
      {
        id: 'frm-part-1',
        name: 'FRM Part I',
        hindiName: 'एफआरएम पार्ट I',
        examFrequency: 'Three exam windows per year: May, August, November',
        totalPapers: 1,
        passingRules: '100 multiple choice questions in 4 hours.',
        papers: [
          {
            id: 'frm-p1-exam',
            paperNumber: 1,
            code: 'FRM-P1',
            name: 'FRM Part I Examination',
            marks: 100,
            examDurationHours: 4,
            examMode: 'CBT (Computer Based)',
            questionPattern: 'Objective (MCQ)',
            negativeMarking: false,
            domains: [
              {
                id: 'frm-p1-d1',
                name: 'Foundations of Risk Management (20%)',
                topics: [
                  { id: 'frm-p1-t1', name: 'Basic Risk Types, Enterprise Risk Management (ERM) & Risk Governance', keyConcepts: ['Credit, Market, Operational, Liquidity, Sovereign Risk', 'Risk appetite statements', 'Board risk oversight'] },
                  { id: 'frm-p1-t2', name: 'Modern Portfolio Theory, CAPM & Multifactor Models', keyConcepts: ['Markowitz efficient frontier', 'Arbitrage Pricing Theory (APT)', 'Fama-French 3-factor model'] },
                  { id: 'frm-p1-t3', name: 'GARP Code of Conduct & Historical Financial Disasters', keyConcepts: ['Barings, Long-Term Capital Management (LTCM), 2008 Lehman collapse, Silicon Valley Bank 2023'] }
                ]
              },
              {
                id: 'frm-p1-d2',
                name: 'Quantitative Analysis (20%)',
                topics: [
                  { id: 'frm-p1-t4', name: 'Probability, Distributions, Hypothesis Testing & Regression', keyConcepts: ['Normal, Lognormal, Poisson, Student t', 'Skewness, Kurtosis', 'OLS assumptions, Heteroskedasticity, Multicollinearity'] },
                  { id: 'frm-p1-t5', name: 'Time Series Analysis & Volatility Modeling', keyConcepts: ['AR, MA, ARMA, ARIMA processes', 'EWMA (RiskMetrics)', 'GARCH(1,1) volatility models'] }
                ]
              },
              {
                id: 'frm-p1-d3',
                name: 'Financial Markets and Products (30%)',
                topics: [
                  { id: 'frm-p1-t6', name: 'Futures, Forwards, Options & Swaps Mechanics and Pricing', keyConcepts: ['Cost of carry model', 'Contango vs Backwardation', 'Put-Call Parity', 'Interest rate swap pricing'] },
                  { id: 'frm-p1-t7', name: 'Fixed Income Instruments, Bond Valuation & Interest Rate Drivers', keyConcepts: ['Term structure of interest rates', 'DV01, Duration, Convexity'] },
                  { id: 'frm-p1-t8', name: 'Central Counterparties (CCPs), Exchanges & OTC Derivatives Cleared Margins', keyConcepts: ['Initial Margin (IM), Variation Margin (VM)', 'Bilateral netting'] }
                ]
              },
              {
                id: 'frm-p1-d4',
                name: 'Valuation and Risk Models (30%)',
                topics: [
                  { id: 'frm-p1-t9', name: 'Value at Risk (VaR) & Expected Shortfall (ES)', keyConcepts: ['Historical simulation, Parametric (Delta-Normal), Monte Carlo simulation', 'Subadditivity of Expected Shortfall'] },
                  { id: 'frm-p1-t10', name: 'Option Valuation: Binomial Trees & Black-Scholes-Merton (BSM) Model', keyConcepts: ['BSM formula assumptions', 'Option Greeks: Delta, Gamma, Theta, Vega, Rho', 'Delta-Gamma hedging'] },
                  { id: 'frm-p1-t11', name: 'Credit Risk Models & Operational Risk Frameworks', keyConcepts: ['Probability of Default (PD), Loss Given Default (LGD), Exposure at Default (EAD)', 'Credit ratings migration matrices'] }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'frm-part-2',
        name: 'FRM Part II',
        hindiName: 'एफआरएम पार्ट II',
        examFrequency: 'Three exam windows per year: May, August, November',
        totalPapers: 1,
        passingRules: '80 multiple choice questions in 4 hours.',
        papers: [
          {
            id: 'frm-p2-exam',
            paperNumber: 1,
            code: 'FRM-P2',
            name: 'FRM Part II Examination',
            marks: 80,
            examDurationHours: 4,
            examMode: 'CBT (Computer Based)',
            questionPattern: 'Objective (MCQ)',
            negativeMarking: false,
            domains: [
              {
                id: 'frm-p2-d1',
                name: 'Market Risk Measurement & Management (20%)',
                topics: [
                  { id: 'frm-p2-t1', name: 'Advanced VaR, Backtesting VaR & Extreme Value Theory (EVT)', keyConcepts: ['Kupiec test, Christoffersen independence test', 'Peaks over Threshold (POT)'] }
                ]
              },
              {
                id: 'frm-p2-d2',
                name: 'Credit Risk Measurement & Management (20%)',
                topics: [
                  { id: 'frm-p2-t2', name: 'Credit Scoring, Structural Models (Merton) & Reduced Form Models', keyConcepts: ['Distance to default', 'Credit Default Swaps (CDS) pricing', 'Counterparty Risk (CVA, DVA, FVA)'] }
                ]
              },
              {
                id: 'frm-p2-d3',
                name: 'Operational Risk & Resiliency (20%)',
                topics: [
                  { id: 'frm-p2-t3', name: 'Basel Operational Risk Framework & Cyber Risk Modeling', keyConcepts: ['Standardized Measurement Approach (SMA)', 'Loss Distribution Approach (LDA)', 'Cybersecurity risk assessment'] }
                ]
              },
              {
                id: 'frm-p2-d4',
                name: 'Liquidity & Treasury Risk Measurement (15%)',
                topics: [
                  { id: 'frm-p2-t4', name: 'Liquidity Coverage Ratio (LCR), Net Stable Funding Ratio (NSFR) & Intraday Liquidity', keyConcepts: ['High-Quality Liquid Assets (HQLA)', 'Asset-liability matching (ALM)'] }
                ]
              },
              {
                id: 'frm-p2-d5',
                name: 'Risk Management in Investment Management (15%) & Current Issues in Financial Markets (10%)',
                topics: [
                  { id: 'frm-p2-t5', name: 'Portfolio Risk Budgeting & Current Regulatory / Tech Issues', keyConcepts: ['Marginal and Component VaR', 'Climate stress testing', 'Central Bank Digital Currencies (CBDC)'] }
                ]
              }
            ]
          }
        ]
      }
    ]
  },

  // 6. ACCA - Global
  {
    id: 'acca',
    acronym: 'ACCA',
    name: 'Association of Chartered Certified Accountants',
    hindiName: 'एसोसिएशन ऑफ चार्टर्ड सर्टिफाइड अकाउंटेंट्स (एसीसीए)',
    category: 'ACCOUNTING_FINANCE',
    categoryLabel: 'Global Chartered Accounting',
    hindiCategoryLabel: 'वैश्विक चार्टर्ड लेखांकन',
    institute: 'ACCA (United Kingdom)',
    hindiInstitute: 'एसीसीए (यूनाइटेड किंगडम)',
    country: 'Global / UK',
    establishedYear: 1904,
    officialUrl: 'https://www.accaglobal.com',
    badgeColor: '#e11d48',
    tagline: 'The Global Body for Professional Accountants Across 180+ Countries',
    hindiTagline: '180 से अधिक देशों में पेशेवर लेखाकारों के लिए वैश्विक निकाय',
    description: 'Premier global accounting credential covering IFRS, international tax, strategic business reporting, corporate governance, and advanced financial management. Highly recognized in MNCs, Big 4 global capability centers (GCCs), and international firms in India.',
    hindiDescription: 'आईएफआरएस, अंतरराष्ट्रीय कर, रणनीतिक बिजनेस रिपोर्टिंग और वित्तीय प्रबंधन को कवर करने वाला प्रमुख अंतरराष्ट्रीय लेखांकन क्रेडेंशियल।',
    latestNotification: {
      title: 'ACCA Exam Updates: Digital Transformation & Sustainability Reporting Integration',
      hindiTitle: 'एसीसीए परीक्षा अपडेट: डिजिटल परिवर्तन एवं सस्टेनेबिलिटी रिपोर्टिंग एकीकरण',
      date: '2026-05-15',
      link: 'https://www.accaglobal.com/students/exam-support-resources.html',
      summary: 'Deep integration of ISSB (IFRS S1 & S2) sustainability disclosure standards across Strategic Business Reporting (SBR) and Strategic Business Leader (SBL) case study exams.',
      hindiSummary: 'स्ट्रैटेजिक बिजनेस रिपोर्टिंग (एसबीआर) और एसबीएल में आईएसएसबी सस्टेनेबिलिटी मानकों का एकीकरण।',
      schemeVersion: 'Current ACCA Qualification Structure',
    },
    currentSchemeYear: '2025–2026',
    eligibility: {
      minimumEducation: '10+2 with 65% in Mathematics/Accounts and English, plus 50% in other subjects; or Foundation in Accountancy (FIA) route for others.',
      hindiMinimumEducation: 'गणित/अकाउंट्स और अंग्रेजी में 65% और अन्य विषयों में 50% के साथ 10+2; या एफआईए रूट।',
      streamRequirements: 'Commerce/Science/Arts all eligible. FIA available if 12th marks criteria not met.',
      provisionalRegistrationPermitted: true,
      exemptionsAvailable: 'Up to 9 papers exempt for Indian CAs; up to 4-5 papers for B.Com graduates; up to 6 papers for CA Inter.',
      hindiExemptionsAvailable: 'भारतीय सीए के लिए अधिकतम 9 पेपर तक की छूट; बी.कॉम के लिए 4 पेपर तक की छूट।'
    },
    attemptsLimit: 'No attempt limits on Applied Knowledge and Applied Skills; Strategic Professional exams subject to 7-year rule.',
    exemptions: [
      'CA Inter passed: Up to 5-6 exemptions (BT, MA, FA, LW, TX, PM).',
      'Qualified CA: Maximum 9 exemptions (all Applied Knowledge & Applied Skills papers, directly eligible for Strategic Professional).',
      'B.Com / M.Com: Exemptions in BT, MA, FA, and LW.'
    ],
    feeStructure: {
      registrationFee: '£89 (One-time Initial Registration)',
      examinationFee: '£120 to £160 per Applied Skills paper; £240 to £340 per Strategic Professional paper',
      estimatedPreparationCost: '₹1,80,000 – ₹3,50,000 (including exam fees, books, tuition)',
      currency: 'GBP (£)',
      officialFeeNote: 'Fees listed in British Pounds payable directly to ACCA portal.',
      hindiOfficialFeeNote: 'ब्रिटिश पाउंड में सीधे एसीसीए पोर्टल पर देय।'
    },
    passingCriteria: '50% marks in each individual paper.',
    practicalTraining: {
      required: true,
      duration: '36 Months Practical Experience Requirement (PER)',
      name: 'Practical Experience Requirement (PER)',
      timing: 'Can be gained before, during, or after exam completion.',
      details: 'Supervised experience under an approved employer or IFAC-qualified accountant verifying 9 performance objectives.'
    },
    membershipRequirements: [
      'Pass all required exams (Applied Knowledge, Applied Skills, Strategic Professional: Essentials + 2 Options).',
      'Complete the online Ethics and Professional Skills Module (EPSM).',
      'Record 36 months of relevant work experience and achieve 9 performance objectives under PER.',
      'Admitted as an ACCA Member. After 5 years, advanced to Fellow (FCCA).'
    ],
    renewalCpeRequirements: {
      cpeHoursPerYear: '40 Continuing Professional Development (CPD) units annually (at least 21 verifiable units)',
      validityYears: 'Annual membership renewal',
      renewalFee: '£295 / year',
      details: 'Members must declare CPD compliance annually via their myACCA portal.'
    },
    careerOutcomes: [
      'International Financial Reporting Specialist (IFRS Consolidation Lead)',
      'Financial Controller in Global In-House Centers (GICs) / MNCs',
      'Big 4 Audit & Assurance Senior Manager / Director',
      'FP&A Lead / Commercial Finance Business Partner'
    ],
    averageCompletionTime: '2 to 3.5 Years',
    globalRecognition: 'Statutory audit recognition in UK / EU; recognized in over 180 countries worldwide; exemptions with global universities and CPA bodies.',
    syllabusVersions: ['latest.json', '2026.json'],
    tags: ['IFRS', 'International Accounting', 'ACCA', 'Audit', 'Strategic Finance'],
    levels: [
      {
        id: 'acca-applied-knowledge',
        name: 'Applied Knowledge Level',
        hindiName: 'अप्लाइड नॉलेज स्तर',
        examFrequency: 'On-demand on computer-based testing throughout the year',
        totalPapers: 3,
        passingRules: '50% in each paper.',
        papers: [
          { id: 'acca-bt', paperNumber: 1, code: 'BT/FBT', name: 'Business and Technology', marks: 100, examDurationHours: 2, examMode: 'CBT (Computer Based)', questionPattern: 'Objective (MCQ)', negativeMarking: false, domains: [] },
          { id: 'acca-ma', paperNumber: 2, code: 'MA/FMA', name: 'Management Accounting', marks: 100, examDurationHours: 2, examMode: 'CBT (Computer Based)', questionPattern: 'Objective (MCQ)', negativeMarking: false, domains: [] },
          { id: 'acca-fa', paperNumber: 3, code: 'FA/FFA', name: 'Financial Accounting', marks: 100, examDurationHours: 2, examMode: 'CBT (Computer Based)', questionPattern: 'Objective (MCQ)', negativeMarking: false, domains: [] }
        ]
      },
      {
        id: 'acca-applied-skills',
        name: 'Applied Skills Level',
        hindiName: 'अप्लाइड स्किल्स स्तर',
        examFrequency: 'Four exam sessions: March, June, September, December',
        totalPapers: 6,
        passingRules: '50% in each paper.',
        papers: [
          { id: 'acca-lw', paperNumber: 4, code: 'LW', name: 'Corporate and Business Law', marks: 100, examDurationHours: 2, examMode: 'CBT (Computer Based)', questionPattern: 'Objective (MCQ)', negativeMarking: false, domains: [] },
          { id: 'acca-pm', paperNumber: 5, code: 'PM', name: 'Performance Management', marks: 100, examDurationHours: 3, examMode: 'CBT (Computer Based)', questionPattern: 'Mixed (70% Descriptive + 30% MCQ)', negativeMarking: false, domains: [] },
          { id: 'acca-tx', paperNumber: 6, code: 'TX', name: 'Taxation (UK / Variant)', marks: 100, examDurationHours: 3, examMode: 'CBT (Computer Based)', questionPattern: 'Mixed (70% Descriptive + 30% MCQ)', negativeMarking: false, domains: [] },
          { id: 'acca-fr', paperNumber: 7, code: 'FR', name: 'Financial Reporting (IFRS)', marks: 100, examDurationHours: 3, examMode: 'CBT (Computer Based)', questionPattern: 'Mixed (70% Descriptive + 30% MCQ)', negativeMarking: false, domains: [] },
          { id: 'acca-aa', paperNumber: 8, code: 'AA', name: 'Audit and Assurance (ISAs)', marks: 100, examDurationHours: 3, examMode: 'CBT (Computer Based)', questionPattern: 'Mixed (70% Descriptive + 30% MCQ)', negativeMarking: false, domains: [] },
          { id: 'acca-fm', paperNumber: 9, code: 'FM', name: 'Financial Management', marks: 100, examDurationHours: 3, examMode: 'CBT (Computer Based)', questionPattern: 'Mixed (70% Descriptive + 30% MCQ)', negativeMarking: false, domains: [] }
        ]
      },
      {
        id: 'acca-strategic-professional',
        name: 'Strategic Professional Level',
        hindiName: 'स्ट्रैटेजिक प्रोफेशनल स्तर',
        examFrequency: 'Four sessions per year: March, June, September, December',
        totalPapers: 4, // 2 Essentials + 2 Options
        passingRules: '50% in each paper.',
        papers: [
          { id: 'acca-sbr', paperNumber: 10, code: 'SBR', name: 'Strategic Business Reporting', marks: 100, examDurationHours: 3.25, examMode: 'CBT (Computer Based)', questionPattern: 'Case Study Based', negativeMarking: false, domains: [] },
          { id: 'acca-sbl', paperNumber: 11, code: 'SBL', name: 'Strategic Business Leader', marks: 100, examDurationHours: 3.25, examMode: 'CBT (Computer Based)', questionPattern: 'Case Study Based', negativeMarking: false, domains: [] },
          { id: 'acca-afm', paperNumber: 12, code: 'AFM', name: 'Advanced Financial Management (Option 1)', marks: 100, examDurationHours: 3.25, examMode: 'CBT (Computer Based)', questionPattern: 'Case Study Based', negativeMarking: false, domains: [] },
          { id: 'acca-aaa', paperNumber: 13, code: 'AAA', name: 'Advanced Audit and Assurance (Option 2)', marks: 100, examDurationHours: 3.25, examMode: 'CBT (Computer Based)', questionPattern: 'Case Study Based', negativeMarking: false, domains: [] }
        ]
      }
    ]
  },

  // 7. CISA - ISACA
  {
    id: 'cisa',
    acronym: 'CISA',
    name: 'Certified Information Systems Auditor',
    hindiName: 'सर्टिफाइड इंफॉर्मेशन सिस्टम्स ऑडिटर (सिसा)',
    category: 'CYBERSECURITY',
    categoryLabel: 'IS Audit & Cybersecurity',
    hindiCategoryLabel: 'सूचना प्रणाली लेखापरीक्षा एवं साइबर सुरक्षा',
    institute: 'ISACA (USA)',
    hindiInstitute: 'इसाका (यूएसए)',
    country: 'Global / USA',
    establishedYear: 1978,
    officialUrl: 'https://www.isaca.org/credentialing/cisa',
    badgeColor: '#0284c7',
    tagline: 'The Globally Recognized Standard of Achievement for Information Systems Audit, Control & Security',
    hindiTagline: 'सूचना प्रणाली लेखापरीक्षा, नियंत्रण और सुरक्षा के लिए विश्व स्तर पर मान्यता प्राप्त मानक',
    description: 'Gold standard qualification for auditing, controlling, and securing information technology and business systems. Mandatory or preferred by RBI, SEBI, IRDAI, and major banking & financial institutions for conducting System Audits and IT Governance reviews in India.',
    hindiDescription: 'सूचना प्रौद्योगिकी और व्यावसायिक प्रणालियों के ऑडिट, नियंत्रण और सुरक्षा के लिए स्वर्ण मानक योग्यता। भारतीय बैंकों में सिस्टम ऑडिट हेतु आरबीआई द्वारा अनुशंसित।',
    latestNotification: {
      title: 'ISACA CISA Exam Content Outline (Current 5-Domain Architecture)',
      hindiTitle: 'इसाका सिसा परीक्षा रूपरेखा (वर्तमान 5-डोमेन आर्किटेक्चर)',
      date: '2026-04-15',
      link: 'https://www.isaca.org/credentialing/cisa/cisa-exam-content-outline',
      summary: 'Updated domain weightage highlighting Artificial Intelligence governance, cloud infrastructure audit (AWS, Azure), zero-trust architecture, and resilient supply chain cybersecurity.',
      hindiSummary: 'आर्टिफिशियल इंटेलिजेंस गवर्नेंस, क्लाउड इंफ्रास्ट्रक्चर ऑडिट, जीरो-ट्रस्ट आर्किटेक्चर और साइबर सुरक्षा लचीलेपन पर विशेष जोर।',
      schemeVersion: 'Current ISACA CISA Job Practice',
    },
    currentSchemeYear: 'Current Exam Scheme',
    eligibility: {
      minimumEducation: 'No degree required to sit for the exam. 5 years of verified professional IS audit/control/security work experience required for certification.',
      hindiMinimumEducation: 'परीक्षा देने के लिए किसी डिग्री की आवश्यकता नहीं। प्रमाणन हेतु 5 वर्ष का पेशेवर अनुभव आवश्यक।',
      streamRequirements: 'Open to candidates from any educational background (IT, Engineering, Commerce, CA, CS).',
      provisionalRegistrationPermitted: true,
      exemptionsAvailable: 'Up to 3 years experience waiver available for degree in CS/accounting or certifications like CA/CPA.',
      hindiExemptionsAvailable: 'डिग्री या सीए जैसी योग्यताओं के बदले 3 वर्ष तक अनुभव में छूट उपलब्ध।'
    },
    attemptsLimit: 'Exam retakes allowed up to 4 times within a 365-day rolling window.',
    exemptions: ['No exam paper exemptions. Experience waivers up to 3 years permitted against degrees/certifications.'],
    feeStructure: {
      registrationFee: '$575 (ISACA Members) / $760 (Non-Members)',
      examinationFee: 'Included in registration fee',
      estimatedPreparationCost: '₹60,000 – ₹1,20,000 (including ISACA Review Manual & QAE Database)',
      currency: 'USD ($)',
      officialFeeNote: 'Directly payable on ISACA official website.',
      hindiOfficialFeeNote: 'सीधे इसाका वेबसाइट पर देय।'
    },
    passingCriteria: 'Scaled score of 450 or higher on a 200–800 scale.',
    practicalTraining: {
      required: true,
      duration: '5 Years of Professional IS Audit, Control or Security Experience',
      name: 'Information Systems Work Experience',
      timing: 'Accrued within 10 years preceding application or 5 years after exam pass date.',
      details: 'Substitutions permitted: 1 year for 1 year non-IS audit; 1-2 years for Bachelor’s/Master’s degree; 2 years for CA/CPA or CISM/CISSP.'
    },
    membershipRequirements: [
      'Pass the CISA Examination (150 MCQs in 4 hours).',
      'Submit verified proof of 5 years qualifying professional IS audit, control, assurance or security experience.',
      'Agree to adhere to the ISACA Code of Professional Ethics.',
      'Commit to adhere to the CISA Continuing Professional Education (CPE) Policy.'
    ],
    renewalCpeRequirements: {
      cpeHoursPerYear: 'Minimum 20 CPE hours per year; 120 CPE hours across 3-year cycle',
      validityYears: '3-Year Certification Cycle',
      renewalFee: '$45 (Members) / $85 (Non-Members) annually',
      details: 'Audit logs must be maintained for potential ISACA annual random audit.'
    },
    careerOutcomes: [
      'Lead IT & Information Systems Auditor',
      'Vice President / Director of IT Governance, Risk & Compliance (IT GRC)',
      'Cybersecurity & SOC Audit Consultant',
      'SOC 2 Type II / ISO 27001 Lead Auditor',
      'Cloud Security & Architecture Auditor'
    ],
    averageCompletionTime: '6 to 12 Months',
    globalRecognition: 'Recognized globally across 180+ countries; accepted under US DoD Directive 8140/8570; cited in RBI System Audit guidelines for Indian Banks and Payment Aggregators.',
    syllabusVersions: ['latest.json', '2026.json'],
    tags: ['IS Audit', 'Cybersecurity', 'IT Governance', 'ISACA', 'COBIT', 'NIST'],
    levels: [
      {
        id: 'cisa-exam-level',
        name: 'CISA Certification Examination',
        hindiName: 'सिसा प्रमाणन परीक्षा',
        examFrequency: 'Continuous testing throughout the year at Prometric testing centers or remote proctoring',
        totalPapers: 1,
        passingRules: 'Scaled score of 450 out of 800.',
        papers: [
          {
            id: 'cisa-exam',
            paperNumber: 1,
            code: 'CISA-EXAM',
            name: 'CISA 150-Question Examination',
            marks: 800,
            examDurationHours: 4,
            examMode: 'CBT (Computer Based)',
            questionPattern: 'Objective (MCQ)',
            negativeMarking: false,
            domains: [
              {
                id: 'cisa-d1',
                name: 'Domain 1: Information Systems Auditing Process (18%)',
                topics: [
                  { id: 'cisa-d1-t1', name: 'IS Audit Standards, Guidelines, and Codes of Ethics', keyConcepts: ['Audit charter', 'Independence & Objectivity', 'Due professional care'] },
                  { id: 'cisa-d1-t2', name: 'Business Processes & Risk-Based Audit Planning', keyConcepts: ['Risk assessment methodologies', 'Compliance testing vs Substantive testing', 'Audit evidence & sampling'] }
                ]
              },
              {
                id: 'cisa-d2',
                name: 'Domain 2: Governance and Management of IT (18%)',
                topics: [
                  { id: 'cisa-d2-t1', name: 'IT Strategy, Policies, Standards & Procedures', keyConcepts: ['IT steering committee', 'COBIT 2019 framework', 'IT balanced scorecard'] },
                  { id: 'cisa-d2-t2', name: 'IT Resource Management & Risk Management', keyConcepts: ['Vendor management & SLA audit', 'Enterprise risk management integration'] }
                ]
              },
              {
                id: 'cisa-d3',
                name: 'Domain 3: Information Systems Acquisition, Development & Implementation (12%)',
                topics: [
                  { id: 'cisa-d3-t1', name: 'Project Governance and Management', keyConcepts: ['SDLC phases', 'Agile vs Waterfall controls', 'Post-implementation review (PIR)'] },
                  { id: 'cisa-d3-t2', name: 'Business Application Systems & Data Migration Controls', keyConcepts: ['Unit, Integration, System, UAT testing', 'Separation of DEV/TEST/PROD environments'] }
                ]
              },
              {
                id: 'cisa-d4',
                name: 'Domain 4: Information Systems Operations and Business Resilience (26%)',
                topics: [
                  { id: 'cisa-d4-t1', name: 'IS Operations, Job Scheduling & Database Management', keyConcepts: ['Incident and problem management', 'ITSM / ITIL frameworks', 'Service level monitoring'] },
                  { id: 'cisa-d4-t2', name: 'Business Continuity Planning (BCP) & Disaster Recovery Planning (DRP)', keyConcepts: ['Business Impact Analysis (BIA)', 'RTO (Recovery Time Objective)', 'RPO (Recovery Point Objective)', 'Hot site vs Cold site vs Warm site', 'Backup testing'] }
                ]
              },
              {
                id: 'cisa-d5',
                name: 'Domain 5: Protection of Information Assets (26%)',
                topics: [
                  { id: 'cisa-d5-t1', name: 'Information Security Governance & Logical Access Controls', keyConcepts: ['Identification, Authentication, Authorization', 'Role-Based Access Control (RBAC)', 'MFA, PAM (Privileged Access Management)'] },
                  { id: 'cisa-d5-t2', name: 'Network and Endpoint Security, Encryption & Cyber Incident Response', keyConcepts: ['Firewalls, IDS/IPS, SIEM, Zero Trust', 'Symmetric vs Asymmetric encryption, PKI, TLS', 'Vulnerability assessment & Penetration testing (VAPT)', 'Security awareness training'] }
                ]
              }
            ]
          }
        ]
      }
    ]
  },

  // 8. JAIIB - IIBF
  {
    id: 'jaiib',
    acronym: 'JAIIB',
    name: 'Junior Associate of Indian Institute of Bankers',
    hindiName: 'जूनियर एसोसिएट ऑफ इंडियन इंस्टीट्यूट ऑफ बैंकर्स (जेएआईआईबी)',
    category: 'BANKING',
    categoryLabel: 'Banking & Financial Services',
    hindiCategoryLabel: 'बैंकिंग एवं वित्तीय सेवाएं',
    institute: 'Indian Institute of Banking & Finance (IIBF)',
    hindiInstitute: 'इंडियन इंस्टीट्यूट ऑफ बैंकिंग एंड फाइनेंस (आईआईबीएफ)',
    country: 'India',
    establishedYear: 1928,
    officialUrl: 'https://www.iibf.org.in',
    badgeColor: '#047857',
    tagline: 'Premier Statutory Banking Credential for Commercial & Central Bank Personnel in India',
    hindiTagline: 'भारत में वाणिज्यिक एवं केंद्रीय बैंक कर्मियों के लिए प्रमुख वैधानिक बैंकिंग क्रेडेंशियल',
    description: 'Mandatory professional certification recognized by Indian Banks’ Association (IBA) for nationalized and commercial bank officers, carrying immediate promotion points, monetary increments, and foundational competence in Indian Economy, Banking Regulations, Accountancy, and Retail Lending.',
    hindiDescription: 'भारतीय बैंक संघ (आईबीए) द्वारा मान्यता प्राप्त अनिवार्य व्यावसायिक प्रमाणन, जो पदोन्नति अंक, वेतन वृद्धि और बैंकिंग ज्ञान प्रदान करता है।',
    latestNotification: {
      title: 'IIBF Revised JAIIB Syllabus Structure (4 Compulsory Papers)',
      hindiTitle: 'आईआईबीएफ संशोधित जेएआईआईबी पाठ्यक्रम संरचना (4 अनिवार्य पेपर)',
      date: '2026-03-25',
      link: 'https://www.iibf.org.in/jaiib_syllabus.asp',
      summary: 'Revised scheme with 4 compulsory papers: Indian Economy & Indian Financial System (IE&IFS), Principles & Practices of Banking (PPB), Accounting & Financial Management for Bankers (AFM), and Retail Banking & Wealth Management (RBWM). Time limit: 3 years / 5 attempts.',
      hindiSummary: 'संशोधित योजना में 4 अनिवार्य पेपर: भारतीय अर्थव्यवस्था और भारतीय वित्तीय प्रणाली, बैंकिंग के सिद्धांत और व्यवहार, बैंकर्स हेतु लेखांकन, और रिटेल बैंकिंग। वैधता: 3 वर्ष / 5 प्रयास।',
      schemeVersion: 'Revised 4-Paper Scheme / Active',
    },
    currentSchemeYear: 'Current IIBF Scheme',
    eligibility: {
      minimumEducation: '10+2 or equivalent, exclusively open to ordinary members of IIBF currently employed in recognized banking/financial institutions.',
      hindiMinimumEducation: '10+2 या समकक्ष, विशेष रूप से आईआईबीएफ के साधारण सदस्यों (बैंक कर्मचारियों) के लिए खुला है।',
      streamRequirements: 'Must be an active employee of an institutional member bank/financial organization of IIBF.',
      provisionalRegistrationPermitted: false,
      exemptionsAvailable: 'Credit retention for passed papers within the 3-year/5-attempt cycle.',
      hindiExemptionsAvailable: '3 वर्ष/5 प्रयासों के भीतर उत्तीर्ण पेपरों के लिए क्रेडिट प्रतिधारण उपलब्ध।'
    },
    attemptsLimit: 'A candidate has 5 attempts within a maximum time-limit of 3 years from the date of registration.',
    exemptions: ['Credit retention for passed papers up to 5 attempts within the 3-year cycle.'],
    feeStructure: {
      registrationFee: '₹4,000 + GST (First attempt) / ₹1,300 + GST per subsequent attempt',
      examinationFee: 'Included in Registration',
      estimatedPreparationCost: '₹5,000 – ₹15,000 (Books and mock tests)',
      currency: 'INR (₹)',
      officialFeeNote: 'Payable directly on IIBF Membership Portal.',
      hindiOfficialFeeNote: 'आईआईबीएफ सदस्यता पोर्टल पर देय।'
    },
    passingCriteria: 'Minimum 50 marks out of 100 in each paper. Alternatively, 45 marks in each paper with an aggregate of 50% across all 4 papers in a single attempt.',
    practicalTraining: {
      required: false,
      duration: 'None (Practicing bank employees apply on-the-job)',
      name: 'In-Service Application',
      timing: 'Concurrent with banking employment',
      details: 'Hands-on operational banking in scheduled commercial banks, regional rural banks, or cooperative banks.'
    },
    membershipRequirements: [
      'Candidate must be an employee of an institutional member bank of IIBF.',
      'Must hold valid IIBF Ordinary Membership.',
      'Pass all 4 papers of JAIIB within the prescribed 3-year / 5-attempt window.'
    ],
    renewalCpeRequirements: {
      cpeHoursPerYear: 'Permanent credential; No renewal required',
      validityYears: 'Lifetime validity once conferred',
      details: 'Leads to qualification for CAIIB examination.'
    },
    careerOutcomes: [
      'Immediate 1 Advance Salary Increment in Public Sector Banks under IBA Bipartite Settlement',
      'Key Weightage in Scale I to Scale II / Scale III Officer Promotional Interviews',
      'Branch Manager / Operations Head eligibility',
      'Gateway to CAIIB and specialized Treasury & Risk Diplomas'
    ],
    averageCompletionTime: '6 Months to 1 Year',
    globalRecognition: 'Standard qualification recognized across public, private, foreign, and regional rural banks in India.',
    syllabusVersions: ['latest.json', '2026.json'],
    tags: ['Banking', 'IIBF', 'JAIIB', 'Economy', 'Retail Banking', 'Bank Increment'],
    levels: [
      {
        id: 'jaiib-main',
        name: 'JAIIB Examination',
        hindiName: 'जेएआईआईबी परीक्षा',
        examFrequency: 'Twice a year: May/June and October/November',
        totalPapers: 4,
        passingRules: '50% in each paper or 45% with 50% aggregate in first attempt.',
        papers: [
          {
            id: 'jaiib-p1',
            paperNumber: 1,
            code: 'JAIIB-IEIFS',
            name: 'Indian Economy & Indian Financial System (IE&IFS)',
            marks: 100,
            examDurationHours: 2,
            examMode: 'CBT (Computer Based)',
            questionPattern: 'Objective (MCQ)',
            negativeMarking: false,
            domains: [
              {
                id: 'jaiib-p1-d1',
                name: 'Indian Economic Architecture & Reforms',
                topics: [
                  { id: 'jaiib-p1-t1', name: 'Fundamentals of Indian Economy & Economic Reforms', keyConcepts: ['LPG reforms 1991', 'NITI Aayog', 'Five Year Plans overview', 'Structural sectors'] },
                  { id: 'jaiib-p1-t2', name: 'Monetary Policy and Fiscal Policy', keyConcepts: ['RBI Monetary Policy Committee (MPC)', 'Repo, Reverse repo, SDF, MSF, CRR, SLR', 'Union Budget & FRBM Act'] }
                ]
              },
              {
                id: 'jaiib-p1-d2',
                name: 'Financial Markets, Regulatory Framework & Infrastructure',
                topics: [
                  { id: 'jaiib-p1-t3', name: 'Money Market, Capital Market & Foreign Exchange Markets', keyConcepts: ['Call money, Commercial Paper (CP), Certificate of Deposit (CD)', 'T-Bills', 'Primary vs Secondary equity markets', 'FEMA basics'] },
                  { id: 'jaiib-p1-t4', name: 'Regulators & Banking Infrastructure', keyConcepts: ['RBI, SEBI, IRDAI, PFRDA, NABARD, SIDBI, EXIM Bank', 'NPCI, NEFT, RTGS, UPI, IMPS, NACH'] }
                ]
              }
            ]
          },
          {
            id: 'jaiib-p2',
            paperNumber: 2,
            code: 'JAIIB-PPB',
            name: 'Principles & Practices of Banking (PPB)',
            marks: 100,
            examDurationHours: 2,
            examMode: 'CBT (Computer Based)',
            questionPattern: 'Objective (MCQ)',
            negativeMarking: false,
            domains: [
              {
                id: 'jaiib-p2-d1',
                name: 'General Banking Operations & Banker-Customer Relationship',
                topics: [
                  { id: 'jaiib-p2-t1', name: 'Banker-Customer Relationship & KYC / AML Norms', keyConcepts: ['Debtor-creditor relationship', 'PMLA 2002', 'STR and CTR reporting to FIU-IND', 'Garnishee and Attachment orders'] },
                  { id: 'jaiib-p2-t2', name: 'Operational Banking: Accounts, Cash & Clearing', keyConcepts: ['Savings, Current, Fixed deposit, Recurring deposit accounts', 'Cheque Truncation System (CTS)', 'Negotiable Instruments Act, 1881 Sec 138'] }
                ]
              },
              {
                id: 'jaiib-p2-d2',
                name: 'Functions of Banks, Lending Norms & Ethics',
                topics: [
                  { id: 'jaiib-p2-t3', name: 'Credit Delivery, Priority Sector Lending (PSL) & NPA Management', keyConcepts: ['PSL targets for domestic & foreign banks', 'SMA 0, SMA 1, SMA 2, Sub-standard, Doubtful, Loss assets', 'SARFAESI Act 2002'] },
                  { id: 'jaiib-p2-t4', name: 'Banking Technology, Cyber Threats & Customer Grievances', keyConcepts: ['Core Banking Solution (CBS)', 'Reserve Bank - Integrated Ombudsman Scheme', 'BCBS operational risk principles'] }
                ]
              }
            ]
          },
          {
            id: 'jaiib-p3',
            paperNumber: 3,
            code: 'JAIIB-AFM',
            name: 'Accounting & Financial Management for Bankers (AFM)',
            marks: 100,
            examDurationHours: 2,
            examMode: 'CBT (Computer Based)',
            questionPattern: 'Objective (MCQ)',
            negativeMarking: false,
            domains: [
              {
                id: 'jaiib-p3-d1',
                name: 'Accounting Principles, Process & Standards',
                topics: [
                  { id: 'jaiib-p3-t1', name: 'Accounting Concepts, Conventions & Double Entry Bookkeeping', keyConcepts: ['Matching concept', 'Journal, Ledger, Trial Balance', 'Bank reconciliation'] },
                  { id: 'jaiib-p3-t2', name: 'Depreciation, Inventory Valuation & Capital / Revenue Expenditure', keyConcepts: ['SLM vs WDV', 'AS 2 inventory', 'Accounting for lease'] }
                ]
              },
              {
                id: 'jaiib-p3-d2',
                name: 'Financial Management, Ratio Analysis & Company Accounts',
                topics: [
                  { id: 'jaiib-p3-t3', name: 'Financial Mathematics: Time Value of Money & Bond Valuation', keyConcepts: ['Compounding, YTM, Bond duration', 'Annuity calculations'] },
                  { id: 'jaiib-p3-t4', name: 'Financial Statements of Banking Companies & Ratio Analysis', keyConcepts: ['Third Schedule Banking Regulation Act 1949 (Form A & Form B)', 'CRAR, NPA ratios, NIM (Net Interest Margin)'] }
                ]
              }
            ]
          },
          {
            id: 'jaiib-p4',
            paperNumber: 4,
            code: 'JAIIB-RBWM',
            name: 'Retail Banking & Wealth Management (RBWM)',
            marks: 100,
            examDurationHours: 2,
            examMode: 'CBT (Computer Based)',
            questionPattern: 'Objective (MCQ)',
            negativeMarking: false,
            domains: [
              {
                id: 'jaiib-p4-d1',
                name: 'Retail Banking Products, Mortgages & Credit Scoring',
                topics: [
                  { id: 'jaiib-p4-t1', name: 'Retail Lending: Home Loans, Auto Loans, Personal Loans', keyConcepts: ['LTV ratios', 'Equated Monthly Installment (EMI) amortisation', 'Credit bureau scores (CIBIL, Experian)'] },
                  { id: 'jaiib-p4-t2', name: 'Credit Cards, Debit Cards, Remittances & Delivery Channels', keyConcepts: ['ATM, Internet banking, Mobile banking security', 'Chargeback rules'] }
                ]
              },
              {
                id: 'jaiib-p4-d2',
                name: 'Wealth Management, Investment Products & Tax Planning',
                topics: [
                  { id: 'jaiib-p4-t3', name: 'Wealth Management Process, Mutual Funds & Bancassurance', keyConcepts: ['Risk profiling', 'NAV calculations', 'Life and general insurance distribution rules'] },
                  { id: 'jaiib-p4-t4', name: 'Tax Laws for Retail Investors & Estate Planning', keyConcepts: ['Capital gains on property, equity, debt', 'Sec 80C, 80D, 115BAC implications'] }
                ]
              }
            ]
          }
        ]
      }
    ]
  },

  // 9. CAIIB - IIBF
  {
    id: 'caiib',
    acronym: 'CAIIB',
    name: 'Certified Associate of Indian Institute of Bankers',
    hindiName: 'सर्टिफाइड एसोसिएट ऑफ इंडियन इंस्टीट्यूट ऑफ बैंकर्स (सीएआईआईबी)',
    category: 'BANKING',
    categoryLabel: 'Advanced Banking & Credit',
    hindiCategoryLabel: 'उन्नत बैंकिंग एवं क्रेडिट',
    institute: 'Indian Institute of Banking & Finance (IIBF)',
    hindiInstitute: 'इंडियन इंस्टीट्यूट ऑफ बैंकिंग एंड फाइनेंस (आईआईबीएफ)',
    country: 'India',
    establishedYear: 1928,
    officialUrl: 'https://www.iibf.org.in',
    badgeColor: '#0f766e',
    tagline: 'Advanced Professional Banking Credential with Direct Salary Increment & Senior Leadership Credit',
    hindiTagline: 'प्रत्यक्ष वेतन वृद्धि और वरिष्ठ नेतृत्व श्रेय के साथ उन्नत पेशेवर बैंकिंग क्रेडेंशियल',
    description: 'Advanced credential accessible after passing JAIIB. Covers Advanced Bank Management (ABM), Bank Financial Management (BFM), Advanced Business & Financial Management (ABFM), Banking Regulations & Business Laws (BRBL), and 1 specialized elective (Risk Management, Treasury, Central Banking, Credit, etc.). Provides an additional advance increment in banks.',
    hindiDescription: 'जेएआईआईबी पास करने के बाद प्राप्त होने वाला उन्नत क्रेडेंशियल। बैंक वित्तीय प्रबंधन, उन्नत व्यापार प्रबंधन, बेसल नियम और बैंकिंग कानूनों को कवर करता है। 1 अतिरिक्त वेतन वृद्धि प्रदान करता है।',
    latestNotification: {
      title: 'CAIIB Revised Scheme: 4 Compulsory Papers + 1 Elective',
      hindiTitle: 'सीएआईआईबी संशोधित योजना: 4 अनिवार्य पेपर + 1 ऐच्छिक पेपर',
      date: '2026-03-25',
      link: 'https://www.iibf.org.in/caiib_syllabus.asp',
      summary: 'Curriculum structured with ABM, BFM, ABFM, BRBL and elective subjects tested under CBT format with 5 attempts over 3 years.',
      hindiSummary: 'एबीएम, बीएफएम, एबीएफएम, बीआरबीएल और ऐच्छिक विषयों के साथ पाठ्यक्रम तैयार किया गया है।',
      schemeVersion: 'Current Scheme',
    },
    currentSchemeYear: 'Current IIBF Scheme',
    eligibility: {
      minimumEducation: 'Must have successfully passed JAIIB examination and maintain active ordinary membership with IIBF as an employed banking professional.',
      hindiMinimumEducation: 'जेएआईआईबी (JAIIB) परीक्षा सफलतापूर्वक उत्तीर्ण की होनी चाहिए तथा आईआईबीएफ का सक्रिय सदस्य होना चाहिए।',
      streamRequirements: 'Active bank/financial institution employment required.',
      provisionalRegistrationPermitted: false,
      exemptionsAvailable: 'Credit retention for passed papers within the 3-year/5-attempt cycle.',
      hindiExemptionsAvailable: '3 वर्ष/5 प्रयासों के भीतर उत्तीर्ण पेपरों के लिए क्रेडिट प्रतिधारण उपलब्ध।'
    },
    attemptsLimit: '5 attempts within 3 years.',
    exemptions: ['Paper-wise retention for 5 attempts.'],
    feeStructure: {
      registrationFee: '₹4,000 + GST (First attempt) / ₹1,300 + GST per subsequent attempt',
      examinationFee: 'Included in registration',
      estimatedPreparationCost: '₹5,000 – ₹15,000',
      currency: 'INR (₹)',
      officialFeeNote: 'Directly payable on IIBF portal.',
      hindiOfficialFeeNote: 'आईआईबीएफ पोर्टल पर देय।'
    },
    passingCriteria: '50% in each paper or 45% with 50% aggregate in first attempt.',
    practicalTraining: {
      required: false,
      duration: 'None',
      name: 'Practical Bank Service',
      timing: 'Active Banking Service',
      details: 'Credit underwriting, treasury management, foreign exchange dealing, and branch leadership.'
    },
    membershipRequirements: [
      'Candidate must have already passed JAIIB.',
      'Must maintain active IIBF Ordinary Membership.',
      'Pass all 5 papers (4 Compulsory + 1 Elective).'
    ],
    renewalCpeRequirements: {
      cpeHoursPerYear: 'Permanent credential; No renewal required',
      validityYears: 'Lifetime',
      details: 'Recognized for career promotion up to AGM / DGM / GM cadres in Indian Banking.'
    },
    careerOutcomes: [
      'Immediate 1 Additional Advance Increment (Officers get 1, Clerical cadres get 2)',
      'High Priority for Chief Manager, AGM, and Zonal Manager promotions',
      'Eligibility for Senior Treasury, Forex Desk, and Credit Risk Head positions'
    ],
    averageCompletionTime: '6 Months to 1.5 Years',
    globalRecognition: 'Standard qualification recognized across Indian Banking Industry.',
    syllabusVersions: ['latest.json', '2026.json'],
    tags: ['Banking', 'IIBF', 'CAIIB', 'Treasury', 'Credit Risk', 'Basel'],
    levels: [
      {
        id: 'caiib-main',
        name: 'CAIIB Examination',
        hindiName: 'सीएआईआईबी परीक्षा',
        examFrequency: 'Twice a year: June and December',
        totalPapers: 5,
        passingRules: '50% in each paper or 45% with 50% aggregate.',
        papers: [
          { id: 'caiib-p1', paperNumber: 1, code: 'CAIIB-ABM', name: 'Advanced Bank Management (ABM)', marks: 100, examDurationHours: 2, examMode: 'CBT (Computer Based)', questionPattern: 'Objective (MCQ)', negativeMarking: false, domains: [] },
          { id: 'caiib-p2', paperNumber: 2, code: 'CAIIB-BFM', name: 'Bank Financial Management (BFM)', marks: 100, examDurationHours: 2, examMode: 'CBT (Computer Based)', questionPattern: 'Objective (MCQ)', negativeMarking: false, domains: [] },
          { id: 'caiib-p3', paperNumber: 3, code: 'CAIIB-ABFM', name: 'Advanced Business & Financial Management (ABFM)', marks: 100, examDurationHours: 2, examMode: 'CBT (Computer Based)', questionPattern: 'Objective (MCQ)', negativeMarking: false, domains: [] },
          { id: 'caiib-p4', paperNumber: 4, code: 'CAIIB-BRBL', name: 'Banking Regulations and Business Laws (BRBL)', marks: 100, examDurationHours: 2, examMode: 'CBT (Computer Based)', questionPattern: 'Objective (MCQ)', negativeMarking: false, domains: [] },
          { id: 'caiib-p5', paperNumber: 5, code: 'CAIIB-ELEC', name: 'Elective (Risk Management / Treasury / Credit / Central Banking)', marks: 100, examDurationHours: 2, examMode: 'CBT (Computer Based)', questionPattern: 'Objective (MCQ)', negativeMarking: false, domains: [] }
        ]
      }
    ]
  },

  // 10. NISM - Securities Market
  {
    id: 'nism',
    acronym: 'NISM',
    name: 'National Institute of Securities Markets Certifications',
    hindiName: 'राष्ट्रीय प्रतिभूति बाजार संस्थान प्रमाणन (एनआईएसएम)',
    category: 'SECURITIES_CAPITAL_MARKETS',
    categoryLabel: 'Securities & Capital Markets',
    hindiCategoryLabel: 'प्रतिभूतियां एवं पूंजी बाजार',
    institute: 'National Institute of Securities Markets (SEBI established)',
    hindiInstitute: 'राष्ट्रीय प्रतिभूति बाजार संस्थान (सेबी द्वारा स्थापित)',
    country: 'India',
    establishedYear: 2006,
    officialUrl: 'https://www.nism.ac.in',
    badgeColor: '#0891b2',
    tagline: 'Mandatory Regulatory Certifications for Capital Markets, Mutual Funds, Investment Advisors & Research Analysts',
    hindiTagline: 'पूंजी बाजार, म्यूचुअल फंड, निवेश सलाहकारों और रिसर्च एनालिस्ट्स के लिए अनिवार्य विनियामक प्रमाणन',
    description: 'Statutory certifications mandated under SEBI regulations for professionals working in securities, mutual fund distribution (Series V-A), equity derivatives trading (Series VIII), investment advice (Series X-A/X-B), research analysis (Series XV), and portfolio management services (Series XXI-A).',
    hindiDescription: 'सेबी नियमों के तहत म्यूचुअल फंड वितरण, इक्विटी डेरिवेटिव्स, निवेश सलाहकार और रिसर्च एनालिस्ट के रूप में कार्य करने के लिए अनिवार्य वैधानिक प्रमाणन।',
    latestNotification: {
      title: 'SEBI Mandatory Certification Notification for Intermediaries & RA Regulations',
      hindiTitle: 'मध्यवर्तियों एवं रिसर्च एनालिस्ट्स हेतु सेबी अनिवार्य प्रमाणन अधिसूचना',
      date: '2026-05-18',
      link: 'https://certifications.nism.ac.in',
      summary: 'Mandatory certification modules under SEBI regulations; certificate valid for 3 years, renewable via CPE program or re-examination.',
      hindiSummary: 'सेबी नियमों के तहत अनिवार्य प्रमाणन मॉड्यूल; प्रमाणपत्र 3 वर्ष के लिए वैध, सीपीई कार्यक्रम या पुनः परीक्षा के माध्यम से नवीकरणीय।',
      schemeVersion: 'SEBI Mandated Active Modules',
    },
    currentSchemeYear: '2025–2026',
    eligibility: {
      minimumEducation: 'Open to all candidates (10+2 / graduates / working professionals). No specific minimum academic restriction for most series.',
      hindiMinimumEducation: 'सभी उम्मीदवारों के लिए खुला (10+2 / स्नातक / कार्यरत पेशेवर)। अधिकांश सीरीज के लिए कोई न्यूनतम शैक्षणिक प्रतिबंध नहीं।',
      streamRequirements: 'Any stream or discipline.',
      provisionalRegistrationPermitted: true,
      exemptionsAvailable: 'Grandfathering and CPE renewal route available for experienced market participants meeting SEBI criteria.',
      hindiExemptionsAvailable: 'सेबी मानदंडों को पूरा करने वाले अनुभवी प्रतिभागियों के लिए सीपीई नवीनीकरण मार्ग उपलब्ध।'
    },
    attemptsLimit: 'Unlimited attempts.',
    exemptions: ['Certain senior market professionals with ≥50 years of age and 10 years experience eligible for CPE route.'],
    feeStructure: {
      registrationFee: '₹1,500 – ₹3,000 + GST per examination module',
      examinationFee: 'Included in module registration',
      estimatedPreparationCost: '₹2,000 – ₹5,000',
      currency: 'INR (₹)',
      officialFeeNote: 'Online booking via NISM Certification Portal.',
      hindiOfficialFeeNote: 'एनआईएसएम प्रमाणन पोर्टल पर ऑनलाइन बुकिंग।'
    },
    passingCriteria: '60% marks in most modules (50% in Series V-A Mutual Fund). Negative marking of 25% applies in select series.',
    practicalTraining: {
      required: false,
      duration: 'None',
      name: 'Regulatory Licensing',
      timing: 'Prerequisite for SEBI Registration',
      details: 'Required for obtaining ARN (AMFI Registration Number) or SEBI RA / IA registration.'
    },
    membershipRequirements: [
      'Pass the specific NISM examination module.',
      'Submit certificate to AMFI (for ARN) or SEBI for intermediary registration.'
    ],
    renewalCpeRequirements: {
      cpeHoursPerYear: 'One-day (6-hour) CPE Program every 3 years before expiry',
      validityYears: '3 Years Certificate Validity',
      renewalFee: '₹2,500 + GST',
      details: 'Candidates can renew certification either by attending NISM CPE training or re-appearing for the exam.'
    },
    careerOutcomes: [
      'SEBI Registered Research Analyst (RA under SEBI RA Regulations, 2014)',
      'SEBI Registered Investment Adviser (IA under SEBI IA Regulations, 2013)',
      'AMFI Certified Mutual Fund Distributor (ARN Holder)',
      'Certified Equity, Currency & Commodity Derivatives Dealer / Broker Trader'
    ],
    averageCompletionTime: '1 to 3 Months per module',
    globalRecognition: 'Statutory mandate throughout Indian capital markets.',
    syllabusVersions: ['latest.json', '2026.json'],
    tags: ['NISM', 'SEBI', 'Mutual Funds', 'Stock Market', 'Research Analyst', 'Investment Adviser'],
    levels: [
      {
        id: 'nism-key-modules',
        name: 'Key Regulatory Modules',
        hindiName: 'प्रमुख विनियामक मॉड्यूल',
        examFrequency: 'Daily online testing slots across NISM test centers pan-India',
        totalPapers: 5,
        passingRules: '50% to 60% with negative marking where specified.',
        papers: [
          { id: 'nism-5a', paperNumber: 1, code: 'NISM-Series-V-A', name: 'Mutual Fund Distributors Certification Examination', marks: 100, examDurationHours: 2, examMode: 'CBT (Computer Based)', questionPattern: 'Objective (MCQ)', negativeMarking: false, domains: [] },
          { id: 'nism-8', paperNumber: 2, code: 'NISM-Series-VIII', name: 'Equity Derivatives Certification Examination', marks: 100, examDurationHours: 2, examMode: 'CBT (Computer Based)', questionPattern: 'Objective (MCQ)', negativeMarking: true, negativeMarkingValue: 0.25, domains: [] },
          { id: 'nism-15', paperNumber: 3, code: 'NISM-Series-XV', name: 'Research Analyst Certification Examination', marks: 100, examDurationHours: 2, examMode: 'CBT (Computer Based)', questionPattern: 'Objective (MCQ)', negativeMarking: true, negativeMarkingValue: 0.25, domains: [] },
          { id: 'nism-10a', paperNumber: 4, code: 'NISM-Series-X-A', name: 'Investment Adviser (Level 1) Certification', marks: 100, examDurationHours: 2, examMode: 'CBT (Computer Based)', questionPattern: 'Objective (MCQ)', negativeMarking: true, negativeMarkingValue: 0.25, domains: [] },
          { id: 'nism-21a', paperNumber: 5, code: 'NISM-Series-XXI-A', name: 'Portfolio Management Services (PMS) Distributors', marks: 100, examDurationHours: 2, examMode: 'CBT (Computer Based)', questionPattern: 'Objective (MCQ)', negativeMarking: true, negativeMarkingValue: 0.25, domains: [] }
        ]
      }
    ]
  },

  // 11. PMP - PMI
  {
    id: 'pmp',
    acronym: 'PMP',
    name: 'Project Management Professional',
    hindiName: 'प्रोजेक्ट मैनेजमेंट प्रोफेशनल (पीएमपी)',
    category: 'PROJECT_MANAGEMENT',
    categoryLabel: 'Project & Agile Management',
    hindiCategoryLabel: 'परियोजना एवं एजाइल प्रबंधन',
    institute: 'Project Management Institute (PMI, USA)',
    hindiInstitute: 'प्रोजेक्ट मैनेजमेंट इंस्टीट्यूट (पीएमआई, यूएसए)',
    country: 'Global / USA',
    establishedYear: 1984,
    officialUrl: 'https://www.pmi.org/certifications/project-management-pmp',
    badgeColor: '#16a34a',
    tagline: 'The Gold Standard of Project Management Excellence Across Predictive, Agile & Hybrid Environments',
    hindiTagline: 'प्रेडिक्टिव, एजाइल और हाइब्रिड वातावरण में प्रोजेक्ट प्रबंधन उत्कृष्टता का स्वर्ण मानक',
    description: 'Premier project management qualification demonstrating competence in leading project teams, delivering strategic business value, and orchestrating complex initiatives across People, Process, and Business Environment domains.',
    hindiDescription: 'पीपुल, प्रोसेस और बिजनेस एनवायरनमेंट में टीमों का नेतृत्व करने, मूल्य प्रदान करने और जटिल पहलों को पूरा करने की क्षमता प्रमाणित करने वाला वैश्विक क्रेडेंशियल।',
    latestNotification: {
      title: 'PMI Examination Content Outline (ECO) & PMBOK 7th / Process Groups Guide',
      hindiTitle: 'पीएमआई परीक्षा सामग्री रूपरेखा (ईसीओ) एवं पीएमबीओके 7वां संस्करण',
      date: '2026-04-10',
      link: 'https://www.pmi.org/certifications/project-management-pmp/exam-prep',
      summary: '50% predictive / waterfall project management and 50% agile / hybrid methodologies tested across 180 questions with situational questions.',
      hindiSummary: '180 प्रश्नों में 50% प्रेडिक्टिव/वॉटरफॉल और 50% एजाइल/हाइब्रिड पद्धतियां शामिल हैं।',
      schemeVersion: 'Current PMP ECO',
    },
    currentSchemeYear: 'Current ECO',
    eligibility: {
      minimumEducation: 'Four-year Degree (bachelor\'s or global equivalent) with 36 months of project leading experience + 35 contact hours of PM education; OR Secondary Degree (high school/diploma) with 60 months experience + 35 hours.',
      hindiMinimumEducation: '4 वर्षीय डिग्री के साथ 36 महीने का प्रोजेक्ट नेतृत्व अनुभव + 35 घंटे की शिक्षा; अथवा डिप्लोमा के साथ 60 महीने का अनुभव।',
      streamRequirements: 'Any academic discipline or industry domain.',
      provisionalRegistrationPermitted: false,
      exemptionsAvailable: 'CAPM certification holders are exempt from the 35 contact hours requirement.',
      hindiExemptionsAvailable: 'सीएपीएम (CAPM) धारक 35 संपर्क घंटों की आवश्यकता से मुक्त हैं।'
    },
    attemptsLimit: 'Candidates may take the exam up to 3 times within their 1-year eligibility period.',
    exemptions: ['GAC-accredited degree holders receive 1-year experience reduction.'],
    feeStructure: {
      registrationFee: '$405 (PMI Members) / $575 (Non-Members)',
      examinationFee: 'Included in registration',
      estimatedPreparationCost: '₹40,000 – ₹85,000 (including 35-hour mandatory contact training)',
      currency: 'USD ($)',
      officialFeeNote: 'Directly payable on PMI.org portal.',
      hindiOfficialFeeNote: 'सीधे पीएमआई पोर्टल पर देय।'
    },
    passingCriteria: 'Psychometrically graded based on psychometric difficulty scaling across all 3 domains.',
    practicalTraining: {
      required: true,
      duration: '36 Months (with 4-year degree) or 60 Months (with High School Diploma) leading projects',
      name: 'Project Leadership Experience',
      timing: 'Accrued within the past 8 consecutive years',
      details: 'Must document verifiable project leadership hours across initiating, planning, executing, monitoring, and closing.'
    },
    membershipRequirements: [
      'Document 36 or 60 months of project leadership experience.',
      'Complete 35 contact hours of formal project management education.',
      'Pass the 180-question PMP Examination (230 minutes).'
    ],
    renewalCpeRequirements: {
      cpeHoursPerYear: '60 Professional Development Units (PDUs) every 3-year cycle',
      validityYears: '3 Years Recertification Cycle',
      renewalFee: '$60 (Members) / $150 (Non-Members)',
      details: 'Earned through Education (Ways of Working, Power Skills, Business Acumen) and Giving Back to the profession.'
    },
    careerOutcomes: [
      'Project Director / Senior Program Manager',
      'Agile Transformation Lead / Scrum Master Coach',
      'Head of Project Management Office (PMO)',
      'Enterprise Delivery Lead / Global Delivery Manager'
    ],
    averageCompletionTime: '3 to 6 Months preparation',
    globalRecognition: 'Recognized by Fortune 500 companies and government agencies globally.',
    syllabusVersions: ['latest.json', '2026.json'],
    tags: ['PMP', 'PMI', 'Agile', 'Scrum', 'Project Management', 'PMBOK'],
    levels: [
      {
        id: 'pmp-exam-level',
        name: 'PMP Examination',
        hindiName: 'पीएमपी परीक्षा',
        examFrequency: 'Continuous testing at Pearson VUE centers or online proctoring',
        totalPapers: 1,
        passingRules: 'Above Target performance across People, Process, and Business Environment.',
        papers: [
          {
            id: 'pmp-exam',
            paperNumber: 1,
            code: 'PMP-180',
            name: 'PMP 180-Question Examination',
            marks: 180,
            examDurationHours: 3.83, // 230 minutes
            examMode: 'CBT (Computer Based)',
            questionPattern: 'Case Study Based',
            negativeMarking: false,
            domains: [
              {
                id: 'pmp-d1',
                name: 'Domain I: People (42%)',
                topics: [
                  { id: 'pmp-d1-t1', name: 'Manage Conflict, Lead a Team & Support Team Performance', keyConcepts: ['Servant leadership', 'Conflict resolution modes', 'Tuckman ladder of team development', 'Emotional intelligence'] },
                  { id: 'pmp-d1-t2', name: 'Empower Team Members, Collaborate with Stakeholders & Address Impediments', keyConcepts: ['RACI matrix', 'Stakeholder engagement plan', 'Servant coaching'] }
                ]
              },
              {
                id: 'pmp-d2',
                name: 'Domain II: Process (50%)',
                topics: [
                  { id: 'pmp-d2-t1', name: 'Execute Project with Urgency & Manage Communications', keyConcepts: ['Predictive Critical Path Method (CPM)', 'Earned Value Management (EVM: CV, SV, CPI, SPI, EAC)', 'Agile Sprint planning, Daily Standups, Retrospectives'] },
                  { id: 'pmp-d2-t2', name: 'Assess & Manage Risks, Engage Stakeholders & Manage Quality', keyConcepts: ['Risk register, Probability-impact matrix', 'Definition of Done (DoD) vs Definition of Ready (DoR)', 'Cost of Quality (CoQ)'] }
                ]
              },
              {
                id: 'pmp-d3',
                name: 'Domain III: Business Environment (8%)',
                topics: [
                  { id: 'pmp-d3-t1', name: 'Plan & Manage Project Compliance & Deliver Value', keyConcepts: ['Regulatory compliance audits', 'Benefits realization plan', 'Continuous value delivery (MVP)'] },
                  { id: 'pmp-d3-t2', name: 'Evaluate External Environmental Changes & Support Organizational Change', keyConcepts: ['PESTLE analysis', 'Kotter 8-step change model'] }
                ]
              }
            ]
          }
        ]
      }
    ]
  },

  // 12. STATUTORY EXAMS: RBI GRADE B
  {
    id: 'rbi-grade-b',
    acronym: 'RBI Grade B',
    name: 'Reserve Bank of India Officers in Grade ‘B’ (General / DEPR / DSIM)',
    hindiName: 'भारतीय रिज़र्व बैंक अधिकारी ग्रेड ‘बी’ (सामान्य)',
    category: 'STATUTORY_REGULATORY',
    categoryLabel: 'Statutory & Regulatory Recruitment',
    hindiCategoryLabel: 'सांविधिक एवं नियामक भर्ती',
    institute: 'Reserve Bank of India Services Board (RBI)',
    hindiInstitute: 'भारतीय रिज़र्व बैंक सेवा बोर्ड (आरबीआई)',
    country: 'India',
    establishedYear: 1935,
    officialUrl: 'https://opportunities.rbi.org.in',
    badgeColor: '#1e3a8a',
    tagline: 'The Apex Central Banking Statutory Career in India',
    hindiTagline: 'भारत में शीर्ष केंद्रीय बैंकिंग सांविधिक करियर',
    description: 'Premier regulatory officer cadre examination conducted directly by India’s central bank. Selected officers oversee monetary policy implementation, banking regulation, foreign exchange reserve management, payment system oversight, and financial stability.',
    hindiDescription: 'भारत के केंद्रीय बैंक द्वारा आयोजित प्रमुख नियामक अधिकारी संवर्ग परीक्षा। मौद्रिक नीति, बैंक नियमन, विदेशी मुद्रा और भुगतान प्रणालियों का प्रबंधन।',
    latestNotification: {
      title: 'RBI Grade ‘B’ (DR) Recruitment Examination Notice',
      hindiTitle: 'आरबीआई ग्रेड ‘बी’ सीधी भर्ती परीक्षा अधिसूचना',
      date: '2026-06-20',
      link: 'https://opportunities.rbi.org.in',
      summary: 'Phase I (General Awareness, Reasoning, English, Quant) and Phase II (Economic & Social Issues, Descriptive English, Finance & Management) with 1:1 descriptive typing.',
      hindiSummary: 'फेज I (वस्तुनिष्ठ) और फेज II (आर्थिक एवं सामाजिक मुद्दे, अंग्रेजी, वित्त एवं प्रबंधन) के साथ साक्षात्कार।',
      schemeVersion: 'Current Regulatory Scheme',
    },
    currentSchemeYear: '2026 Official Cycle',
    eligibility: {
      minimumEducation: 'Graduation in any discipline with minimum 60% marks (50% for SC/ST/PwBD) or equivalent technical/professional qualification (Post-Graduation: minimum 55%).',
      hindiMinimumEducation: 'न्यूनतम 60% अंकों के साथ किसी भी विषय में स्नातक (एससी/एसटी/दिव्यांग हेतु 50%) अथवा स्नातकोत्तर में न्यूनतम 55% अंक।',
      minimumAge: '21 to 30 years (relaxations for OBC/SC/ST/M.Phil/Ph.D as per RBI rules)',
      streamRequirements: 'Any recognized graduate degree (B.Com, B.Tech, B.Sc, BA, CA, etc.).',
      provisionalRegistrationPermitted: false,
      exemptionsAvailable: 'None. All candidates must qualify Phase I, Phase II, and Interview.',
      hindiExemptionsAvailable: 'कोई छूट नहीं। सभी उम्मीदवारों को फेज I, फेज II और साक्षात्कार पास करना होगा।'
    },
    attemptsLimit: 'General Category: Maximum 6 attempts for Phase I. SC/ST/OBC/PwBD: No restriction.',
    exemptions: ['No exemptions.'],
    feeStructure: {
      registrationFee: '₹850 + 18% GST (General/OBC/EWS) / ₹100 + GST (SC/ST/PwBD)',
      examinationFee: 'Included in application fee',
      estimatedPreparationCost: '₹15,000 – ₹45,000',
      currency: 'INR (₹)',
      officialFeeNote: 'Directly payable on RBI official recruitment portal.',
      hindiOfficialFeeNote: 'सीधे आरबीआई भर्ती पोर्टल पर देय।'
    },
    passingCriteria: 'Sectional and aggregate cutoffs decided by RBI Services Board for Phase I, Phase II, and Final Interview.',
    practicalTraining: {
      required: true,
      duration: '1 Year Probationary Training at Reserve Bank Staff College (RBSC), Chennai & Central Office Mumbai',
      name: 'Central Bank Induction Training',
      timing: 'Immediately upon appointment',
      details: 'Intensive immersion in macroeconomic surveillance, bank inspection, and monetary operations.'
    },
    membershipRequirements: [
      'Graduation in any discipline with minimum 60% marks (50% for SC/ST/PwBD) or Post-Graduation with 55% marks.',
      'Clear Phase I CBT, Phase II CBT (Descriptive + Objective), and Central Office Interview.'
    ],
    renewalCpeRequirements: {
      cpeHoursPerYear: 'Permanent Officer Cadre; Regular in-service training',
      validityYears: 'Permanent Government / Central Bank service',
      details: 'Career progression through Grade C, D, E, Chief General Manager (CGM), and Executive Director (ED).'
    },
    careerOutcomes: [
      'Manager (Grade B) in Department of Banking Supervision (DBS), Financial Markets, or Monetary Policy Department (MPD)',
      'Bank Examiner & Inspector of Scheduled Commercial Banks',
      'Chief General Manager (CGM) & Regional Director',
      'Potential elevation to Executive Director and Deputy Governor of RBI'
    ],
    averageCompletionTime: '6 to 12 Months selection process',
    globalRecognition: 'Regarded as one of the most prestigious central banking cadres internationally.',
    syllabusVersions: ['latest.json', '2026.json'],
    tags: ['RBI', 'Central Bank', 'Monetary Policy', 'Banking Regulation', 'Government Exam'],
    levels: [
      {
        id: 'rbi-phase-1',
        name: 'Phase I Online Examination',
        hindiName: 'फेज I ऑनलाइन परीक्षा',
        examFrequency: 'Annual',
        totalPapers: 1,
        passingRules: 'Sectional cut-offs in all 4 sections + overall cut-off.',
        papers: [
          {
            id: 'rbi-p1-exam',
            paperNumber: 1,
            code: 'RBI-P1',
            name: 'Phase I Composite Examination (200 Marks)',
            marks: 200,
            examDurationHours: 2,
            examMode: 'CBT (Computer Based)',
            questionPattern: 'Objective (MCQ)',
            negativeMarking: true,
            negativeMarkingValue: 0.25,
            domains: [
              { id: 'rbi-p1-ga', name: 'General Awareness (80 Marks)', topics: [{ id: 'rbi-ga-1', name: 'Banking, RBI Circulars, Economic Surveys & Current Affairs', keyConcepts: ['Repo rates', 'Monetary policy statements', 'Union Budget', 'Key national schemes'] }] },
              { id: 'rbi-p1-re', name: 'Reasoning (60 Marks)', topics: [{ id: 'rbi-re-1', name: 'Critical Reasoning, Puzzles, Machine Input-Output', keyConcepts: ['Syllogism', 'Seating arrangement', 'Logical deduction'] }] },
              { id: 'rbi-p1-en', name: 'English Language (30 Marks)', topics: [{ id: 'rbi-en-1', name: 'Reading Comprehension, Error Spotting, Cloze Test', keyConcepts: ['Vocabulary', 'Grammar', 'Paragraph jumbles'] }] },
              { id: 'rbi-p1-qa', name: 'Quantitative Aptitude (30 Marks)', topics: [{ id: 'rbi-qa-1', name: 'Data Interpretation, Arithmetic, Series, Approximations', keyConcepts: ['Caselet DI', 'Probability', 'Time & Work', 'Profit & Loss'] }] }
            ]
          }
        ]
      },
      {
        id: 'rbi-phase-2',
        name: 'Phase II Online Examination',
        hindiName: 'फेज II ऑनलाइन परीक्षा',
        examFrequency: 'Annual',
        totalPapers: 3,
        passingRules: 'Combined merit in Phase II determines interview call.',
        papers: [
          { id: 'rbi-p2-esi', paperNumber: 1, code: 'ESI', name: 'Economic and Social Issues (ESI) - 50% Obj + 50% Desc', marks: 100, examDurationHours: 2, examMode: 'CBT (Computer Based)', questionPattern: 'Mixed (70% Descriptive + 30% MCQ)', negativeMarking: true, negativeMarkingValue: 0.25, domains: [] },
          { id: 'rbi-p2-eng', paperNumber: 2, code: 'ENG', name: 'English (Writing Skills) - Descriptive Keyboard Typing', marks: 100, examDurationHours: 1.5, examMode: 'CBT (Computer Based)', questionPattern: 'Descriptive', negativeMarking: false, domains: [] },
          { id: 'rbi-p2-fm', paperNumber: 3, code: 'FM', name: 'Finance and Management (FM) - 50% Obj + 50% Desc', marks: 100, examDurationHours: 2, examMode: 'CBT (Computer Based)', questionPattern: 'Mixed (70% Descriptive + 30% MCQ)', negativeMarking: true, negativeMarkingValue: 0.25, domains: [] }
        ]
      }
    ]
  },

  // 13. SEBI GRADE A
  {
    id: 'sebi-grade-a',
    acronym: 'SEBI Grade A',
    name: 'Securities and Exchange Board of India Assistant Manager (Grade A)',
    hindiName: 'भारतीय प्रतिभूति एवं विनिमय बोर्ड सहायक प्रबंधक (ग्रेड ए)',
    category: 'STATUTORY_REGULATORY',
    categoryLabel: 'Securities Market Regulatory Officer',
    hindiCategoryLabel: 'प्रतिभूति बाजार नियामक अधिकारी',
    institute: 'Securities and Exchange Board of India (SEBI)',
    hindiInstitute: 'भारतीय प्रतिभूति एवं विनिमय बोर्ड (सेबी)',
    country: 'India',
    establishedYear: 1992,
    officialUrl: 'https://www.sebi.gov.in',
    badgeColor: '#1d4ed8',
    tagline: 'The Foremost Regulatory Career Safeguarding India’s Capital & Securities Markets',
    hindiTagline: 'भारत के पूंजी एवं प्रतिभूति बाजारों की सुरक्षा करने वाला प्रमुख नियामक करियर',
    description: 'Premier statutory officer examination for Assistant Managers across General, Legal, Information Technology, Research, and Official Language streams. Directly responsible for investigating insider trading, approving IPO prospectuses, supervising stock exchanges, and framing capital market regulations.',
    hindiDescription: 'जनरल, लीगल और आईटी स्ट्रीम में सेबी सहायक प्रबंधकों के लिए सांविधिक परीक्षा। इनसाइडर ट्रेडिंग की जांच, आईपीओ प्रॉस्पेक्टस की मंजूरी और स्टॉक एक्सचेंजों की निगरानी।',
    latestNotification: {
      title: 'SEBI Grade A (Assistant Manager) Recruitment Examination Notice',
      hindiTitle: 'सेबी ग्रेड ए (सहायक प्रबंधक) भर्ती परीक्षा सूचना',
      date: '2026-05-30',
      link: 'https://www.sebi.gov.in/sebiweb/other/career.jsp',
      summary: 'Two-phase CBT screening covering Commerce, Accountancy, Management, Finance, Costing, Companies Act, and Economics followed by Interview.',
      hindiSummary: 'दो चरणों की कंप्यूटर आधारित परीक्षा जिसमें वाणिज्य, लेखांकन, वित्त, कंपनी कानून और अर्थशास्त्र शामिल हैं।',
      schemeVersion: 'Current SEBI Scheme',
    },
    currentSchemeYear: '2026 Recruitment Cycle',
    eligibility: {
      minimumEducation: 'Master\'s Degree in any discipline OR Bachelor\'s Degree in Law OR Bachelor\'s Degree in Engineering OR Chartered Accountant (CA) / CFA / CS / Cost Accountant (CMA).',
      hindiMinimumEducation: 'किसी भी विषय में मास्टर डिग्री अथवा लॉ में स्नातक अथवा इंजीनियरिंग स्नातक अथवा सीए/सीएफए/सीएस/सीएमए।',
      minimumAge: 'Maximum 30 years (with applicable OBC/SC/ST/PwBD relaxations)',
      streamRequirements: 'Commerce/Finance/Management/Engineering/Law/CA/CS/CMA for General stream.',
      provisionalRegistrationPermitted: false,
      exemptionsAvailable: 'None. Selection through Phase 1, Phase 2, and Personal Interview.',
      hindiExemptionsAvailable: 'कोई छूट नहीं। चयन फेज 1, फेज 2 और व्यक्तिगत साक्षात्कार के माध्यम से।'
    },
    attemptsLimit: 'No attempt limits as long as age limit criteria (maximum 30 years with category relaxations) is satisfied.',
    exemptions: ['None.'],
    feeStructure: {
      registrationFee: '₹1,000 + 18% GST (General/OBC/EWS) / ₹100 + GST (SC/ST/PwBD)',
      examinationFee: 'Included in registration',
      estimatedPreparationCost: '₹12,000 – ₹35,000',
      currency: 'INR (₹)',
      officialFeeNote: 'Directly payable on SEBI recruitment portal.',
      hindiOfficialFeeNote: 'सेबी भर्ती पोर्टल पर देय।'
    },
    passingCriteria: 'Phase I: 30% in Paper 1, 40% in Paper 2, and aggregate 40%. Phase II: Sectional and aggregate cutoffs.',
    practicalTraining: {
      required: true,
      duration: '1 Year Probationary Training at SEBI Bhavan, BKC Mumbai',
      name: 'Securities Regulatory Induction',
      timing: 'Upon joining',
      details: 'Comprehensive postings across Corporation Finance Department (CFD), Market Regulation Department (MRD), and Enforcement Department.'
    },
    membershipRequirements: [
      'Master’s Degree in any discipline, Bachelor’s in Law, or Bachelor’s in Engineering, or CA/CFA/CS/CMA.',
      'Clear Phase I, Phase II, and Final Interview.'
    ],
    renewalCpeRequirements: {
      cpeHoursPerYear: 'Permanent Officer Cadre',
      validityYears: 'Permanent',
      details: 'Promotion to Grade B (Manager), Grade C (Assistant General Manager), Grade D (DGM), Grade E (GM), and Executive Director.'
    },
    careerOutcomes: [
      'Assistant Manager in SEBI Surveillance, Investigation, or CFD',
      'Prosecutor / Adjudicating Officer in SEBI Enforcement Matters',
      'Representative in SAT (Securities Appellate Tribunal) proceedings'
    ],
    averageCompletionTime: '6 to 9 Months selection process',
    globalRecognition: 'Signatory to IOSCO Multilateral Memorandum of Understanding (MMoU).',
    syllabusVersions: ['latest.json', '2026.json'],
    tags: ['SEBI', 'Securities Law', 'Capital Markets', 'Government Officer', 'Insider Trading'],
    levels: [
      {
        id: 'sebi-phase-1',
        name: 'Phase I Online Examination',
        hindiName: 'फेज I ऑनलाइन परीक्षा',
        examFrequency: 'Annual',
        totalPapers: 2,
        passingRules: 'Paper 1: 30% cut-off; Paper 2: 40% cut-off; Aggregate: 40%.',
        papers: [
          { id: 'sebi-p1-p1', paperNumber: 1, code: 'P1-QRE', name: 'Paper 1: GA, English, Quant & Reasoning', marks: 100, examDurationHours: 1, examMode: 'CBT (Computer Based)', questionPattern: 'Objective (MCQ)', negativeMarking: true, negativeMarkingValue: 0.25, domains: [] },
          { id: 'sebi-p1-p2', paperNumber: 2, code: 'P2-SPEC', name: 'Paper 2: Commerce, Accountancy, Finance, Costing, Companies Act, Economics', marks: 100, examDurationHours: 0.67, examMode: 'CBT (Computer Based)', questionPattern: 'Objective (MCQ)', negativeMarking: true, negativeMarkingValue: 0.25, domains: [] }
        ]
      },
      {
        id: 'sebi-phase-2',
        name: 'Phase II Online Examination',
        hindiName: 'फेज II ऑनलाइन परीक्षा',
        examFrequency: 'Annual',
        totalPapers: 2,
        passingRules: 'Aggregate merit determines interview shortlist.',
        papers: [
          { id: 'sebi-p2-p1', paperNumber: 1, code: 'P2-ENG', name: 'Paper 1: Descriptive English (Typing)', marks: 100, examDurationHours: 1, examMode: 'CBT (Computer Based)', questionPattern: 'Descriptive', negativeMarking: false, domains: [] },
          { id: 'sebi-p2-p2', paperNumber: 2, code: 'P2-CORE', name: 'Paper 2: Specialized Commerce, Law, Finance & Management (Objective)', marks: 100, examDurationHours: 0.67, examMode: 'CBT (Computer Based)', questionPattern: 'Objective (MCQ)', negativeMarking: true, negativeMarkingValue: 0.25, domains: [] }
        ]
      }
    ]
  },

  // 14. CLOUD: AWS CERTIFIED SOLUTIONS ARCHITECT
  {
    id: 'aws-csa',
    acronym: 'AWS SAA',
    name: 'AWS Certified Solutions Architect – Associate (SAA-C03)',
    hindiName: 'एडब्ल्यूएस सर्टिफाइड सॉल्यूशंस आर्किटेक्ट – एसोसिएट',
    category: 'INFORMATION_TECHNOLOGY',
    categoryLabel: 'Cloud Computing & Architecture',
    hindiCategoryLabel: 'क्लाउड कंप्यूटिंग एवं आर्किटेक्चर',
    institute: 'Amazon Web Services (AWS)',
    hindiInstitute: 'अमेज़ॅन वेब सर्विसेज (एडब्ल्यूएस)',
    country: 'Global / USA',
    establishedYear: 2013,
    officialUrl: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
    badgeColor: '#f59e0b',
    tagline: 'The Industry Standard for Designing Resilient, High-Performing, Secure & Cost-Optimized Cloud Architectures',
    hindiTagline: 'सुरक्षित, उच्च प्रदर्शन और लागत-अनुकूलित क्लाउड आर्किटेक्चर डिजाइन करने का उद्योग मानक',
    description: 'Demonstrates comprehensive knowledge of how to architect and deploy secure, resilient applications on AWS technologies using the AWS Well-Architected Framework (Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability).',
    hindiDescription: 'एडब्ल्यूएस वेल-आर्किटेक्टेड फ्रेमवर्क का उपयोग करके सुरक्षित और स्केलेबल क्लाउड एप्लिकेशन डिजाइन करने की क्षमता प्रमाणित करता है।',
    latestNotification: {
      title: 'Current AWS SAA-C03 Examination Specification',
      hindiTitle: 'वर्तमान एडब्ल्यूएस एसएए-सी03 परीक्षा विनिर्देश',
      date: '2026-05-01',
      link: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
      summary: '65 questions (multiple choice or multiple response) in 130 minutes across 4 domains.',
      hindiSummary: '4 डोमेन में 130 मिनट में 65 प्रश्न।',
      schemeVersion: 'SAA-C03 Active',
    },
    currentSchemeYear: 'Current Exam Scheme',
    eligibility: {
      minimumEducation: 'No formal educational or degree prerequisites. Open to all students and professionals.',
      hindiMinimumEducation: 'कोई औपचारिक शैक्षणिक या डिग्री पूर्व-आवश्यकता नहीं। सभी छात्रों और पेशेवरों के लिए खुला।',
      streamRequirements: 'Any background (IT, Engineering, Science, Commerce). Recommended 1+ year hands-on experience designing cloud solutions.',
      provisionalRegistrationPermitted: true,
      exemptionsAvailable: 'None.',
      hindiExemptionsAvailable: 'कोई नहीं।'
    },
    attemptsLimit: 'Retake permitted after a 14-day waiting period.',
    exemptions: ['None.'],
    feeStructure: {
      registrationFee: '$150 USD + applicable local taxes',
      examinationFee: 'Included in registration',
      estimatedPreparationCost: '₹8,000 – ₹20,000',
      currency: 'USD ($)',
      officialFeeNote: 'Directly payable on AWS Training and Certification portal.',
      hindiOfficialFeeNote: 'सीधे एडब्ल्यूएस पोर्टल पर देय।'
    },
    passingCriteria: 'Scaled score of 720 out of 1000.',
    practicalTraining: {
      required: false,
      duration: '1 Year hands-on AWS experience recommended',
      name: 'Hands-on Cloud Lab Implementation',
      timing: 'Pre-exam preparation',
      details: 'VPC design, IAM policies, EC2 auto-scaling, RDS multi-AZ, and S3 lifecycle rules.'
    },
    membershipRequirements: [
      'Pass the SAA-C03 examination.'
    ],
    renewalCpeRequirements: {
      cpeHoursPerYear: 'Recertification required every 3 years by passing current Associate or Solutions Architect Professional (SAP-C02) exam',
      validityYears: '3 Years Validity',
      details: '50% discount voucher provided by AWS for subsequent recertification exam.'
    },
    careerOutcomes: [
      'Cloud Solutions Architect / Enterprise Cloud Consultant',
      'DevOps Engineer / Infrastructure as Code (Terraform/CloudFormation) Specialist',
      'Site Reliability Engineer (SRE)'
    ],
    averageCompletionTime: '2 to 4 Months',
    globalRecognition: 'The most popular cloud architect credential worldwide.',
    syllabusVersions: ['latest.json', '2026.json'],
    tags: ['AWS', 'Cloud', 'Solutions Architect', 'S3', 'EC2', 'VPC', 'Well-Architected'],
    levels: [
      {
        id: 'aws-saa-exam-level',
        name: 'SAA-C03 Examination',
        hindiName: 'एसएए-सी03 परीक्षा',
        examFrequency: 'Continuous testing online or at Pearson VUE centers',
        totalPapers: 1,
        passingRules: 'Scaled score of 720 / 1000.',
        papers: [
          {
            id: 'aws-saa-exam',
            paperNumber: 1,
            code: 'SAA-C03',
            name: 'AWS Solutions Architect Associate Exam',
            marks: 1000,
            examDurationHours: 2.17, // 130 minutes
            examMode: 'CBT (Computer Based)',
            questionPattern: 'Objective (MCQ)',
            negativeMarking: false,
            domains: [
              { id: 'aws-d1', name: 'Design Secure Architectures (30%)', topics: [{ id: 'aws-t1', name: 'IAM, KMS, Security Groups, NACLs, AWS Secrets Manager', keyConcepts: ['Least privilege', 'Envelope encryption', 'VPC endpoint policies'] }] },
              { id: 'aws-d2', name: 'Design Resilient Architectures (26%)', topics: [{ id: 'aws-t2', name: 'Multi-AZ Deployments, Auto Scaling, Route 53, Disaster Recovery', keyConcepts: ['Pilot light, Warm standby, Multi-region active-active'] }] },
              { id: 'aws-d3', name: 'Design High-Performing Architectures (24%)', topics: [{ id: 'aws-t3', name: 'CloudFront, ElastiCache, SQS, SNS, Aurora Serverless', keyConcepts: ['Decoupled architectures', 'Read replicas', 'Edge caching'] }] },
              { id: 'aws-d4', name: 'Design Cost-Optimized Architectures (20%)', topics: [{ id: 'aws-t4', name: 'S3 Storage Classes, EC2 Spot / Savings Plans, Cost Explorer', keyConcepts: ['S3 Intelligent-Tiering', 'Compute Savings Plans'] }] }
            ]
          }
        ]
      }
    ]
  },

  // 15. CYBERSECURITY: COMPTIA SECURITY+
  {
    id: 'comptia-sec-plus',
    acronym: 'Security+',
    name: 'CompTIA Security+ (SY0-701)',
    hindiName: 'कॉमटीआईए सिक्योरिटी+ (एसवाई0-701)',
    category: 'CYBERSECURITY',
    categoryLabel: 'Cybersecurity Baseline',
    hindiCategoryLabel: 'साइबर सुरक्षा आधारभूत',
    institute: 'CompTIA (Computing Technology Industry Association, USA)',
    hindiInstitute: 'कॉमटीआईए (यूएसए)',
    country: 'Global / USA',
    establishedYear: 2002,
    officialUrl: 'https://www.comptia.org/certifications/security',
    badgeColor: '#e11d48',
    tagline: 'The First Security Credential IT Professionals Should Earn to Validate Core Cybersecurity Knowledge',
    hindiTagline: 'कोर साइबर सुरक्षा ज्ञान प्रमाणित करने वाला प्रमुख वैश्विक क्रेडेंशियल',
    description: 'Baseline global cybersecurity credential covering General Security Concepts, Threats, Vulnerabilities & Mitigations, Security Architecture, Security Operations, and Security Program Management & Oversight.',
    hindiDescription: 'खतरों, कमजोरियों, सुरक्षा आर्किटेक्चर, एसओसी संचालन और सुरक्षा नीतियों को कवर करने वाला बुनियादी साइबर सुरक्षा क्रेडेंशियल।',
    latestNotification: {
      title: 'CompTIA Security+ SY0-701 Active Examination Guidelines',
      hindiTitle: 'कॉमटीआईए सिक्योरिटी+ एसवाई0-701 सक्रिय परीक्षा दिशा-निर्देश',
      date: '2026-04-10',
      link: 'https://www.comptia.org/certifications/security',
      summary: 'Maximum 90 questions (performance-based questions PBQs + MCQs) in 90 minutes; passing score 750/900.',
      hindiSummary: '90 मिनट में अधिकतम 90 प्रश्न (परफॉर्मेंस-बेस्ड प्रश्न + बहुविकल्पीय); पासिंग स्कोर 750/900।',
      schemeVersion: 'SY0-701 Active',
    },
    currentSchemeYear: 'SY0-701',
    eligibility: {
      minimumEducation: 'No formal educational or degree prerequisites. Open to all students and professionals.',
      hindiMinimumEducation: 'कोई औपचारिक शैक्षणिक या डिग्री पूर्व-आवश्यकता नहीं। सभी के लिए खुला।',
      streamRequirements: 'Open to all backgrounds. Recommended CompTIA Network+ and 2 years hands-on IT admin experience with security focus.',
      provisionalRegistrationPermitted: true,
      exemptionsAvailable: 'None.',
      hindiExemptionsAvailable: 'कोई नहीं।'
    },
    attemptsLimit: 'Retake policy: 2nd attempt immediate, subsequent attempts after 14-day wait.',
    exemptions: ['None.'],
    feeStructure: {
      registrationFee: '$404 USD',
      examinationFee: 'Included in voucher',
      estimatedPreparationCost: '₹15,000 – ₹35,000',
      currency: 'USD ($)',
      officialFeeNote: 'Directly payable to CompTIA store.',
      hindiOfficialFeeNote: 'सीधे कॉमटीआईए स्टोर पर देय।'
    },
    passingCriteria: 'Scaled score of 750 on a scale of 100–900.',
    practicalTraining: {
      required: false,
      duration: '2 Years IT administration experience with security focus recommended',
      name: 'Hands-on Security Operations',
      timing: 'Pre-exam preparation',
      details: 'Configuring firewalls, analyzing packet captures with Wireshark, SIEM alert triage, and hardening OS.'
    },
    membershipRequirements: [
      'Pass the SY0-701 examination.'
    ],
    renewalCpeRequirements: {
      cpeHoursPerYear: '50 Continuing Education Units (CEUs) every 3 years',
      validityYears: '3 Years Validity',
      renewalFee: '$50 / year CE fee',
      details: 'Earned via webinar attendance, higher certifications (CySA+, CASP+, CISSP), or work experience.'
    },
    careerOutcomes: [
      'SOC Analyst (Tier 1 / Tier 2 Security Operations Center)',
      'Junior Penetration Tester / Vulnerability Assessment Analyst',
      'Cybersecurity Specialist / Network Security Administrator',
      'Security Compliance Associate'
    ],
    averageCompletionTime: '2 to 3 Months',
    globalRecognition: 'Compliant with ISO 17024 standards and approved by the US Department of Defense (DoD 8140/8570 directive).',
    syllabusVersions: ['latest.json', '2026.json'],
    tags: ['Cybersecurity', 'CompTIA', 'Security+', 'SOC', 'Network Security', 'Cryptography'],
    levels: [
      {
        id: 'sec-plus-exam-level',
        name: 'SY0-701 Examination',
        hindiName: 'एसवाई0-701 परीक्षा',
        examFrequency: 'Continuous testing online or at Pearson VUE test centers',
        totalPapers: 1,
        passingRules: 'Score 750 / 900.',
        papers: [
          {
            id: 'sec-plus-exam',
            paperNumber: 1,
            code: 'SY0-701',
            name: 'CompTIA Security+ Exam',
            marks: 900,
            examDurationHours: 1.5,
            examMode: 'CBT (Computer Based)',
            questionPattern: 'Mixed (70% Descriptive + 30% MCQ)',
            negativeMarking: false,
            domains: [
              { id: 'sec-d1', name: 'General Security Concepts (12%)', topics: [{ id: 'sec-t1', name: 'CIA Triad, Zero Trust, Cryptographic Concepts & AAA', keyConcepts: ['Confidentiality, Integrity, Availability', 'Hashing (SHA-256), Symmetric (AES), Asymmetric (RSA/ECC)'] }] },
              { id: 'sec-d2', name: 'Threats, Vulnerabilities, and Mitigations (22%)', topics: [{ id: 'sec-t2', name: 'Malware Types, Social Engineering, Attack Vectors & Vulnerability Management', keyConcepts: ['Ransomware, Phishing, SQL Injection, XSS, Zero-day', 'CVE scoring'] }] },
              { id: 'sec-d3', name: 'Security Architecture (18%)', topics: [{ id: 'sec-t3', name: 'Network Topologies, Cloud Security Models, Data Protection & Resilience', keyConcepts: ['Microsegmentation, SASE, CASB, RAID, Backups'] }] },
              { id: 'sec-d4', name: 'Security Operations (28%)', topics: [{ id: 'sec-t4', name: 'Monitoring, SIEM/SOAR, Incident Response, Forensics & Asset Management', keyConcepts: ['Log analysis, Memory dump analysis, Chain of custody'] }] },
              { id: 'sec-d5', name: 'Security Program Management and Oversight (20%)', topics: [{ id: 'sec-t5', name: 'Governance, Risk Management, Compliance Frameworks (NIST, ISO) & Audits', keyConcepts: ['Third-party risk, Business Impact Analysis, Privacy regulations'] }] }
            ]
          }
        ]
      }
    ]
  }
];
