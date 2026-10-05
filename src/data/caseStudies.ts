import type { CaseStudy } from '../types';

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'case-ca-audit-1',
    certificationId: 'ca',
    level: 'CA Final',
    paper: 'Paper 3: Advanced Auditing, Assurance & Professional Ethics',
    title: 'Revenue Recognition Overstatement & Key Audit Matter (KAM) in SaaS Enterprise',
    hindiTitle: 'सास (SaaS) कंपनी में राजस्व पहचान का अतिशयोक्ति एवं मुख्य लेखापरीक्षा मामला (KAM)',
    facts: [
      'TechNova India Ltd., a listed enterprise SaaS provider, entered into 3-year cloud subscription contracts worth ₹150 Crores with upfront implementation support.',
      'The company recognised the entire contract value as revenue upon signing the master agreement and issuing the first invoice in March 2026.',
      'Cost incurred for customer onboarding was immediately capitalised without testing against Ind AS 115 capitalization criteria.',
      'The audit partner discovers that customer acceptance tests for 40% of the contracts are scheduled for Q2 and Q3 of the subsequent financial year.'
    ],
    hindiFacts: [
      'टेक्नोवा इंडिया लिमिटेड ने 3 साल के क्लाउड सब्सक्रिप्शन अनुबंधों पर हस्ताक्षर किए।',
      'कंपनी ने अनुबंध हस्ताक्षर और मार्च 2026 में पहला चालान जारी करते ही संपूर्ण अनुबंध मूल्य को राजस्व के रूप में मान्यता दे दी।',
      'ग्राहकों के लिए ऑनबोर्डिंग लागत को बिना इंड एएस 115 परीक्षण के सीधे पूंजीकृत कर दिया गया।',
      'ऑडिट पार्टनर ने पाया कि 40% अनुबंधों के लिए ग्राहक स्वीकृति परीक्षण अगले वित्तीय वर्ष में निर्धारित हैं।'
    ],
    question: 'As the engagement partner under Standards on Auditing (SA 700, SA 701, SA 240) and Ind AS 115, evaluate the accounting treatment, explain the reporting responsibilities regarding Key Audit Matters (KAM), and determine the appropriate audit opinion if management refuses to adjust the revenue.',
    hindiQuestion: 'मानक लेखापरीक्षा (SA 700, 701, 240) और इंड एएस 115 के तहत, लेखांकन उपचार का मूल्यांकन करें, KAM रिपोर्टिंग दायित्व बताएं, और यदि प्रबंधन सुधार से इनकार करता है तो उचित ऑडिट राय निर्धारित करें।',
    analysis: 'Under Ind AS 115, revenue can only be recognized when (or as) the entity satisfies a performance obligation by transferring promised control of goods/services to the customer. SaaS access is satisfied over time (ratably over 36 months), not at a point in time upon contract execution. Furthermore, customer acceptance criteria indicate that control has not passed. Recognizing upfront ₹150 Cr creates a material misstatement of revenue and net profit. Because TechNova is a listed entity, revenue recognition in multi-element contracts constitutes a Key Audit Matter (KAM) under SA 701 due to significant management judgment.',
    hindiAnalysis: 'इंड एएस 115 के तहत राजस्व को केवल तभी मान्यता दी जा सकती है जब वादे किए गए नियंत्रण का हस्तांतरण हो। सास सब्सक्रिप्शन का नियंत्रण 36 महीनों की अवधि में धीरे-धीरे हस्तांतरित होता है, अनुबंध हस्ताक्षर पर नहीं। अतः संपूर्ण ₹150 करोड़ तुरंत दर्ज करना सामग्री गलत बयानी (Material Misstatement) है।',
    applicableRuleOrStandard: 'Ind AS 115 (Revenue from Contracts with Customers), SA 700 (Forming an Opinion), SA 701 (Communicating Key Audit Matters), SA 705 (Modifications to the Opinion in the Independent Auditor’s Report).',
    modelAnswer: '1. Accounting Violation: TechNova violated Ind AS 115 Step 5 by recognizing revenue upfront instead of amortizing over the 36-month subscription term.\n2. Auditor Action: The auditor must quantify the overstatement and propose audit adjustments reversing the unearned revenue to "Contract Liabilities / Deferred Revenue".\n3. Reporting: If management refuses to adjust the material misstatement, the auditor must issue a Qualified or Adverse Opinion under SA 705 (depending on whether the effect is pervasive to the financial statements). Even if adjusted, the complexity of multi-element software revenue recognition must be highlighted as a Key Audit Matter (KAM) under SA 701 describing how the audit addressed the risk.',
    hindiModelAnswer: '1. उल्लंघन: कंपनी ने 36 महीने की अवधि के बजाय शुरुआत में ही राजस्व दर्ज करके इंड एएस 115 का उल्लंघन किया।\n2. ऑडिटर की कार्रवाई: अनुचित राजस्व को उलटना होगा और इसे "अनुबंध देयताएं / आस्थगित राजस्व" के रूप में दिखाना होगा।\n3. राय: यदि प्रबंधन मना करता है, तो एसए 705 के तहत योग्य (Qualified) या प्रतिकूल (Adverse) राय जारी करनी होगी।'
  },
  {
    id: 'case-cs-governance-1',
    certificationId: 'cs',
    level: 'CS Professional',
    paper: 'Paper 3: Compliance Management, Audit & Due Diligence',
    title: 'Unpublished Price Sensitive Information (UPSI) Leakage & Board Committee Compliance',
    hindiTitle: 'अप्रकाशित मूल्य संवेदनशील जानकारी (UPSI) रिसाव एवं बोर्ड समिति अनुपालन',
    facts: [
      'Zenith Infotech Ltd., a NSE & BSE listed entity, held a confidential Board Meeting on Saturday to finalize a 100% overseas subsidiary acquisition.',
      'The Company Secretary failed to close the Trading Window prior to the commencement of negotiations.',
      'On Monday morning, before any disclosure to the Stock Exchanges, the share price surged 18% with anomalous trading volumes from accounts belonging to the Executive Director’s spouse.',
      'The Structured Digital Database (SDD) maintained by the compliance team lacked time-stamps and PAN details of the external legal advisors who reviewed the draft term sheet.'
    ],
    hindiFacts: [
      'जेनिथ इन्फोटेक लिमिटेड के बोर्ड ने विदेशी सहायक कंपनी के 100% अधिग्रहण को अंतिम रूप देने के लिए एक गुप्त बैठक की।',
      'कंपनी सचिव बातचीत शुरू होने से पहले ट्रेडिंग विंडो को बंद करने में विफल रहे।',
      'सोमवार को स्टॉक एक्सचेंज को खुलासा करने से पहले ही शेयर मूल्य में 18% की वृद्धि हुई और निदेशक के जीवनसाथी के खाते से असामान्य ट्रेडिंग देखी गई।',
      'स्ट्रक्चर्ड डिजिटल डेटाबेस (SDD) में बाहरी कानूनी सलाहकारों के टाइम-स्टैम्प और पैन विवरण दर्ज नहीं थे।'
    ],
    question: 'Identify the statutory violations under SEBI (Prohibition of Insider Trading) Regulations, 2015 and SEBI LODR Regulations, 2015. Detail the penal consequences and corrective compliance actions required.',
    hindiQuestion: 'सेबी पीआईटी विनियम 2015 और सेबी एलओडीआर विनियम 2015 के तहत वैधानिक उल्लंघनों की पहचान करें। दंडात्मक परिणामों और सुधारात्मक अनुपालन कार्रवाइयों का विवरण दें।',
    analysis: '1. Violation of Regulation 9 read with Clause 4 of Schedule B of SEBI PIT Regulations: Trading window was not closed when UPSI was generated.\n2. Violation of Regulation 3(5): Incomplete Structured Digital Database (SDD) missing PAN and time-stamps of advisors. SDD non-compliance is deemed a standalone continuous violation.\n3. Violation of Regulation 4: Insider trading by connected person (spouse of director presumed to have access to UPSI under Section 2(1)(d)).\n4. Delay in stock exchange disclosure under SEBI LODR Regulation 30.',
    hindiAnalysis: '1. सेबी पीआईटी नियमों के तहत ट्रेडिंग विंडो समय पर बंद न करने का उल्लंघन।\n2. गैर-अनुपालक एसडीडी (SDD) बनाए रखना, जिसमें सलाहकारों के पैन और समय का विवरण गायब है।\n3. कनेक्टेड पर्सन द्वारा अवैध इनसाइडर ट्रेडिंग।',
    applicableRuleOrStandard: 'SEBI (Prohibition of Insider Trading) Regulations, 2015 (Reg 3, 4, 9, Schedule B) and SEBI (LODR) Regulations, 2015 (Regulation 30).',
    modelAnswer: '1. Immediate Enquiry: Internal committee headed by Audit Committee Chair must initiate an inquiry into the UPSI leakage under the Whistleblower / Leakage Policy.\n2. Stock Exchange Intimation: Immediate disclosure of the acquisition under Reg 30.\n3. Regulatory Action: SEBI can initiate adjudication under Section 15G of the SEBI Act, 1992 (penalty up to ₹25 Crores or three times the profit made), impound unlawful gains, and bar the directors from capital markets.\n4. Remediation: Fix the SDD with automated API-based logging and immutable audit logs preserved for 8 years.',
    hindiModelAnswer: '1. तत्काल जांच: ऑडिट कमेटी को रिसाव नीति के तहत जांच शुरू करनी चाहिए।\n2. स्टॉक एक्सचेंज को तत्काल खुलासा करना होगा।\n3. सेबी अधिनियम की धारा 15G के तहत ₹25 करोड़ या मुनाफे के 3 गुना तक का जुर्माना लगाया जा सकता है।\n4. एसडीडी डेटाबेस को पूरी तरह अपडेट और सुरक्षित करना होगा।'
  },
  {
    id: 'case-cisa-audit-1',
    certificationId: 'cisa',
    level: 'CISA Exam',
    paper: 'Domain 5: Protection of Information Assets',
    title: 'Ransomware Attack Through Compromised Third-Party Vendor Remote Access',
    hindiTitle: 'तृतीय-पक्ष विक्रेता रिमोट एक्सेस के माध्यम से रैंसमवेयर हमला',
    facts: [
      'A regional commercial bank experienced a ransomware incident that encrypted 12 virtualization hosts across its production banking cluster.',
      'The attacker gained initial access using an active remote desktop (RDP) account assigned to an external HVAC maintenance contractor 14 months earlier.',
      'The contractor account lacked Multi-Factor Authentication (MFA) and possessed local administrator rights on servers outside its maintenance purview.',
      'The bank’s Security Information and Event Management (SIEM) tool had generated repeated brute-force alerts over 3 weeks, but the SOC team ignored them due to alert fatigue.'
    ],
    hindiFacts: [
      'एक बैंक के प्रोडक्शन क्लस्टर पर 12 वर्चुअल सर्वरों को रैंसमवेयर द्वारा एन्क्रिप्ट कर दिया गया।',
      'हमलावर ने 14 महीने पहले एक बाहरी एसी रखरखाव ठेकेदार को दिए गए आरडीपी (RDP) खाते का उपयोग किया।',
      'ठेकेदार खाते में मल्टी-फैक्टर ऑथेंटिकेशन (MFA) नहीं था और उसके पास अनावश्यक व्यवस्थापक अधिकार थे।',
      'बैंक के एसआईईएम (SIEM) टूल ने 3 सप्ताह में कई अलर्ट दिए थे, लेकिन एसओसी टीम ने उन्हें नजरअंदाज कर दिया।'
    ],
    question: 'As a CISA Lead Auditor, identify the 4 fundamental internal control failures in this incident and formulate a risk-prioritized remediation roadmap based on NIST CSF 2.0 and ISACA guidelines.',
    hindiQuestion: 'सीसा (CISA) मुख्य ऑडिटर के रूप में, 4 मूलभूत आंतरिक नियंत्रण विफलताओं की पहचान करें और एनआईएसटी सीएसएफ 2.0 के आधार पर सुधारात्मक रोडमैप तैयार करें।',
    analysis: 'Control Breakdown 1: Lack of Privileged Identity & Access Management (PAM) lifecycle (failure to deprovision contractor accounts upon contract expiry).\nControl Breakdown 2: Lack of Multi-Factor Authentication (MFA) on external perimeter remote access (violating NIST CSF Protect function & RBI Cyber Security Framework).\nControl Breakdown 3: Principle of Least Privilege violated by granting local admin rights to third-party maintenance contractors.\nControl Breakdown 4: Operational breakdown in SOC alert triage (Detect function failure due to lack of alert tuning and threshold automation).',
    hindiAnalysis: 'नियंत्रण विफलता 1: प्रिविलेज्ड एक्सेस लाइफसाइकिल की कमी (ठेकेदार के काम खत्म होने पर खाता बंद न करना)।\nनियंत्रण विफलता 2: बाहरी रिमोट एक्सेस पर MFA का न होना।\nनियंत्रण विफलता 3: न्यूनतम विशेषाधिकार (Least Privilege) सिद्धांत का उल्लंघन।\nनियंत्रण विफलता 4: एसओसी टीम द्वारा सुरक्षा अलर्ट को नजरअंदाज करना।',
    applicableRuleOrStandard: 'ISACA CISA Domain 5, NIST Cybersecurity Framework 2.0 (PR.AC-1, PR.AC-7, DE.CM-1), RBI Cyber Security Framework for Banks.',
    modelAnswer: 'Remediation Roadmap:\n1. Immediate: Enforce mandatory MFA on all external remote access connections without exception.\n2. Identity Governance: Implement Automated Just-In-Time (JIT) access for third parties with session recording via Privileged Access Management (PAM).\n3. Network Segmentation: Quarantine IoT / facility maintenance networks away from Core Banking clusters.\n4. SOC Alert Tuning: Implement SOAR (Security Orchestration, Automation, and Response) to automatically block IP addresses generating repeated brute force failures.',
    hindiModelAnswer: 'सुधारात्मक रोडमैप:\n1. तत्काल: सभी रिमोट एक्सेस पर अनिवार्य MFA लागू करें।\n2. पहचान प्रशासन: तीसरे पक्ष के लिए टाइम-बाउंड एक्सेस और PAM सेशन रिकॉर्डिंग लागू करें।\n3. नेटवर्क पृथक्करण: कोर बैंकिंग क्लस्टर को अलग रखें।\n4. एसओसी ट्यूनिंग: ऑटोमेटेड रिस्पांस टूल (SOAR) लागू करें।'
  }
];
