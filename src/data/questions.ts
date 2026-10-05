import type { Question } from '../types';

export const questionsData: Question[] = [
  // --- CA INTERMEDIATE / FINAL QUESTIONS ---
  {
    id: 'q-ca-1',
    certificationId: 'ca',
    levelId: 'ca-intermediate',
    paperId: 'ca-i-p3',
    domainId: 'ca-i-p3-d1',
    topicId: 'ca-i-p3-t2',
    difficulty: 'Medium',
    question: 'Under the default New Tax Regime under Section 115BAC of the Income-tax Act, 1961 for Assessment Year 2025-26/2026-27, what is the maximum rebate available to a resident individual under Section 87A if their total taxable income does not exceed ₹7,00,000?',
    hindiQuestion: 'आयकर अधिनियम, 1961 की धारा 115BAC के तहत डिफ़ॉल्ट नई कर व्यवस्था में कर निर्धारण वर्ष 2025-26/2026-27 के लिए, यदि निवासी व्यक्ति की कुल कर योग्य आय ₹7,00,000 से अधिक नहीं है, तो धारा 87A के तहत अधिकतम छूट कितनी है?',
    options: [
      '₹12,500',
      '₹20,000',
      '₹25,000',
      '₹30,000'
    ],
    hindiOptions: [
      '₹12,500',
      '₹20,000',
      '₹25,000',
      '₹30,000'
    ],
    answer: 2,
    explanation: 'Under Section 87A as amended for Section 115BAC default regime, a resident individual whose total income does not exceed ₹7,00,000 is entitled to a rebate of 100% of income-tax payable or ₹25,000, whichever is less. Hence, tax liability up to ₹7 Lakhs total income is effectively Nil.',
    hindiExplanation: 'धारा 115BAC नई कर व्यवस्था के तहत, यदि किसी निवासी व्यक्ति की कुल आय ₹7,00,000 से अधिक नहीं है, तो वह देय आयकर के 100% या ₹25,000 (जो भी कम हो) की छूट का हकदार है। अतः ₹7 लाख तक कोई कर नहीं बनता है।',
    sourceType: 'VERIFIED PYQ',
    source: 'ICAI CA Intermediate Direct Tax Examination & Finance Act Amendments',
    tags: ['Income Tax', 'Sec 115BAC', 'Sec 87A', 'CA Inter'],
    negativeMarkingValue: 0
  },
  {
    id: 'q-ca-2',
    certificationId: 'ca',
    levelId: 'ca-intermediate',
    paperId: 'ca-i-p2',
    domainId: 'ca-i-p2-d1',
    topicId: 'ca-i-p2-t2',
    difficulty: 'Hard',
    question: 'Under Section 135 of the Companies Act, 2013, if an ongoing CSR project remains unspent at the end of the financial year, within how many days must the unspent CSR amount be transferred to a special account named "Unspent Corporate Social Responsibility Account"?',
    hindiQuestion: 'कंपनी अधिनियम, 2013 की धारा 135 के तहत, यदि वित्तीय वर्ष के अंत में कोई चालू सीएसआर परियोजना अप्रयुक्त रह जाती है, तो अप्रयुक्त राशि को कितने दिनों के भीतर "अनस्पेंट सीएसआर खाते" में स्थानांतरित करना अनिवार्य है?',
    options: [
      '30 days from the end of the financial year',
      '60 days from the end of the financial year',
      '90 days from the end of the financial year',
      '6 months from the end of the financial year'
    ],
    hindiOptions: [
      'वित्तीय वर्ष की समाप्ति से 30 दिन',
      'वित्तीय वर्ष की समाप्ति से 60 दिन',
      'वित्तीय वर्ष की समाप्ति से 90 दिन',
      'वित्तीय वर्ष की समाप्ति से 6 माह'
    ],
    answer: 0,
    explanation: 'Under Section 135(6) of the Companies Act, 2013, any amount remaining unspent pursuant to any ongoing project must be transferred by the company within a period of 30 days from the end of the financial year to a special account opened in that behalf for that financial year in any scheduled bank called the Unspent Corporate Social Responsibility Account.',
    hindiExplanation: 'धारा 135(6) के अनुसार चालू परियोजना से संबंधित अप्रयुक्त राशि को वित्तीय वर्ष की समाप्ति से 30 दिनों के भीतर अनुसूचित बैंक में "अनस्पेंट कॉर्पोरेट सोशल रिस्पॉन्सिबिलिटी अकाउंट" में स्थानांतरित किया जाना चाहिए।',
    sourceType: 'ORIGINAL PRACTICE',
    source: 'ICAI Study Material Paper 2: Corporate Laws',
    tags: ['Companies Act', 'Section 135', 'CSR', 'CA Inter', 'CS Executive'],
    negativeMarkingValue: 0
  },
  {
    id: 'q-ca-3',
    certificationId: 'ca',
    levelId: 'ca-final',
    paperId: 'ca-fin-p1',
    domainId: 'ca-fin-p1-d1',
    topicId: 'ca-fin-p1-t3',
    difficulty: 'Hard',
    question: 'Under Ind AS 116 (Leases), how should a lessee account for a lease at commencement date that does not qualify for short-term or low-value asset exemptions?',
    hindiQuestion: 'इंड एएस 116 (पट्टे) के तहत, पट्टा आरंभ होने की तिथि पर पट्टाधारक को ऐसी लीज को कैसे दर्ज करना चाहिए जो अल्पकालिक या कम मूल्य की छूट के अंतर्गत नहीं आती?',
    options: [
      'Recognise lease payments as rental expense on a straight-line basis over the lease term.',
      'Recognise a Right-of-Use (ROU) asset and a corresponding lease liability at the present value of lease payments.',
      'Record an intangible asset and a contingent liability.',
      'Disclose the lease commitments only in notes to accounts.'
    ],
    hindiOptions: [
      'पट्टा अवधि में समान रूप से किराया व्यय दर्ज करें।',
      'पट्टा भुगतानों के वर्तमान मूल्य पर राइट-ऑफ-यूज़ (ROU) परिसंपत्ति एवं लीज़ देयता दर्ज करें।',
      'अमूर्त संपत्ति एवं आकस्मिक देयता दर्ज करें।',
      'केवल खातों के नोट्स में लीज़ प्रतिबद्धताओं का प्रकटीकरण करें।'
    ],
    answer: 1,
    explanation: 'Ind AS 116 requires lessees to use a single on-balance sheet accounting model. At the commencement date, the lessee recognises a right-of-use asset representing its right to use the underlying asset and a lease liability representing its obligation to make lease payments discounted at the interest rate implicit in the lease (or incremental borrowing rate).',
    hindiExplanation: 'इंड एएस 116 के अनुसार पट्टाधारक को एकल लेखांकन मॉडल अपनाना होता है, जिसमें आरंभ तिथि पर पट्टा भुगतानों के वर्तमान मूल्य (PV) पर राइट-ऑफ-यूज़ (ROU) परिसंपत्ति और लीज़ देयता दोनों को बैलेंस शीट में मान्यता दी जाती है।',
    sourceType: 'OFFICIAL SAMPLE QUESTION',
    source: 'ICAI CA Final Financial Reporting Module',
    tags: ['Ind AS 116', 'Financial Reporting', 'ROU Asset', 'CA Final'],
    negativeMarkingValue: 0
  },

  // --- CFA LEVEL I QUESTIONS ---
  {
    id: 'q-cfa-1',
    certificationId: 'cfa',
    levelId: 'cfa-level-1',
    paperId: 'cfa-l1-exam',
    domainId: 'cfa-l1-d1',
    topicId: 'cfa-l1-t1',
    difficulty: 'Hard',
    question: 'An investment analyst discovers material nonpublic information about an impending corporate acquisition by piecing together public industry statistics, supplier interviews, and observable truck deliveries outside a plant. According to the CFA Institute Standards of Professional Conduct (Standard II(A) - Material Nonpublic Information), the analyst:',
    hindiQuestion: 'एक निवेश विश्लेषक सार्वजनिक उद्योग आंकड़ों, आपूर्तिकर्ता साक्षात्कारों और संयंत्र के बाहर ट्रकों की आवाजाही को जोड़कर किसी आगामी अधिग्रहण की महत्वपूर्ण अप्रकाशित जानकारी जुटाता है। सीएफए आचार संहिता के तहत विश्लेषक:',
    options: [
      'Violates Standard II(A) if she issues a recommendation based on this finding prior to public announcement.',
      'May use the information to support an investment recommendation under the Mosaic Theory without violation.',
      'Must immediately report the finding to the firm’s compliance officer and freeze all trading in the stock.',
      'Can only trade on this information for institutional clients but not personal accounts.'
    ],
    hindiOptions: [
      'यदि वह सार्वजनिक घोषणा से पहले सिफारिश जारी करती है तो मानक II(A) का उल्लंघन होगा।',
      'मोज़ेक थ्योरी (Mosaic Theory) के तहत बिना किसी उल्लंघन के इस जानकारी का उपयोग निवेश सिफारिश में कर सकती है।',
      'अनुपालन अधिकारी को सूचित कर स्टॉक में ट्रेडिंग तुरंत रोकनी होगी।',
      'केवल संस्थागत ग्राहकों के लिए उपयोग कर सकती है, व्यक्तिगत खाते में नहीं।'
    ],
    answer: 1,
    explanation: 'Under Standard II(A) and the Mosaic Theory, an analyst may reach a conclusion regarding corporate actions and make investment recommendations by combining public information with non-material nonpublic information, even if that conclusion would have been material if announced by the company itself.',
    hindiExplanation: 'मोज़ेक थ्योरी (Mosaic Theory) के अनुसार, एक विश्लेषक सार्वजनिक जानकारी को गैर-महत्वपूर्ण अप्रकाशित जानकारी के साथ जोड़कर निष्कर्ष निकाल सकता है और ग्राहकों को सिफारिशें दे सकता है। यह मानक II(A) का उल्लंघन नहीं है।',
    sourceType: 'VERIFIED PYQ',
    source: 'CFA Institute Level I Curriculum: Ethical and Professional Standards',
    tags: ['CFA', 'Ethics', 'Mosaic Theory', 'Standard II(A)'],
    negativeMarkingValue: 0
  },
  {
    id: 'q-cfa-2',
    certificationId: 'cfa',
    levelId: 'cfa-level-1',
    paperId: 'cfa-l1-exam',
    domainId: 'cfa-l1-d3',
    topicId: 'cfa-l1-t6',
    difficulty: 'Medium',
    question: 'A 5-year annual coupon bond has a Macaulay duration of 4.35 years. If the yield to maturity (YTM) is currently 6.0%, what is its Modified Duration?',
    hindiQuestion: '5-वर्षीय वार्षिक कूपन बॉन्ड की मैकाले अवधि (Macaulay Duration) 4.35 वर्ष है। यदि परिपक्वता प्रतिफल (YTM) 6.0% है, तो इसकी संशोधित अवधि (Modified Duration) क्या होगी?',
    options: [
      '4.10 years',
      '4.35 years',
      '4.61 years',
      '4.28 years'
    ],
    hindiOptions: [
      '4.10 वर्ष',
      '4.35 वर्ष',
      '4.61 वर्ष',
      '4.28 वर्ष'
    ],
    answer: 0,
    explanation: 'Modified Duration = Macaulay Duration / (1 + YTM/m). For an annual coupon bond (m = 1): Modified Duration = 4.35 / (1 + 0.06) = 4.35 / 1.06 ≈ 4.1038 years. Modified duration directly estimates percentage change in bond price per 100 bps shift in yield.',
    hindiExplanation: 'मॉडिफाइड ड्यूरेशन = मैकाले ड्यूरेशन / (1 + YTM) = 4.35 / (1 + 0.06) = 4.35 / 1.06 = 4.10 वर्ष। यह बॉन्ड मूल्य में ब्याज दर संवेदनशीलता को मापता है।',
    sourceType: 'ORIGINAL PRACTICE',
    source: 'CFA Institute Fixed Income Analysis',
    tags: ['CFA', 'Fixed Income', 'Duration', 'Bond Valuation'],
    negativeMarkingValue: 0
  },

  // --- FRM PART I QUESTIONS ---
  {
    id: 'q-frm-1',
    certificationId: 'frm',
    levelId: 'frm-part-1',
    paperId: 'frm-p1-exam',
    domainId: 'frm-p1-d4',
    topicId: 'frm-p1-t9',
    difficulty: 'Hard',
    question: 'Why is Expected Shortfall (ES), also known as Conditional VaR (CVaR), considered a coherent risk measure, whereas Value at Risk (VaR) is not?',
    hindiQuestion: 'एक्सपेक्टेड शॉर्टफॉल (ES) या कंडीशनल वीएआर (CVaR) को एक सुसंगत जोखिम माप (Coherent Risk Measure) क्यों माना जाता है, जबकि वैल्यू एट रिस्क (VaR) को नहीं?',
    options: [
      'Expected Shortfall satisfies the monotonicity axiom, whereas VaR violates it.',
      'Expected Shortfall satisfies the subadditivity condition for all distributions, whereas VaR can violate subadditivity for non-normal or skewed distributions.',
      'Expected Shortfall is scale-invariant, whereas VaR depends on the size of the portfolio.',
      'Expected Shortfall does not require any historical loss data.'
    ],
    hindiOptions: [
      'एक्सपेक्टेड शॉर्टफॉल मोनोटोनिसिटी को संतुष्ट करता है जबकि वीएआर इसका उल्लंघन करता है।',
      'एक्सपेक्टेड शॉर्टफॉल सब-एडिटिविटी (Subadditivity) को संतुष्ट करता है, जबकि वीएआर गैर-सामान्य वितरणों में इसका उल्लंघन कर सकता है।',
      'एक्सपेक्टेड शॉर्टफॉल स्केल-अपरिवर्तनीय है।',
      'इसके लिए किसी ऐतिहासिक नुकसान डेटा की आवश्यकता नहीं होती है।'
    ],
    answer: 1,
    explanation: 'A risk measure is coherent if it satisfies 4 axioms: Translation Invariance, Subadditivity, Positive Homogeneity, and Monotonicity. VaR fails the subadditivity axiom for fat-tailed, non-normal distributions (i.e. VaR(A + B) can be greater than VaR(A) + VaR(B)), thereby discouraging portfolio diversification. Expected Shortfall always satisfies subadditivity and measures the tail risk beyond the VaR threshold.',
    hindiExplanation: 'सुसंगत जोखिम माप (Coherent Risk Measure) के लिए सब-एडिटिविटी (Subadditivity) शर्त का पूरा होना अनिवार्य है। सामान्य परिस्थितियों में वीएआर (VaR) कभी-कभी सब-एडिटिविटी का उल्लंघन कर सकता है, जबकि एक्सपेक्टेड शॉर्टफॉल (CVaR) हमेशा सब-एडिटिविटी को पूरा करता है।',
    sourceType: 'VERIFIED PYQ',
    source: 'GARP FRM Part I Official Curriculum: Valuation and Risk Models',
    tags: ['FRM', 'VaR', 'Expected Shortfall', 'Coherent Risk Measure'],
    negativeMarkingValue: 0
  },
  {
    id: 'q-frm-2',
    certificationId: 'frm',
    levelId: 'frm-part-1',
    paperId: 'frm-p1-exam',
    domainId: 'frm-p1-d3',
    topicId: 'frm-p1-t6',
    difficulty: 'Medium',
    question: 'According to the Put-Call Parity theorem for European options on non-dividend paying stock (C + K * e^(-r*T) = P + S), if a portfolio consists of a long call and a risk-free bond with face value K, what equivalent synthetic position is created?',
    hindiQuestion: 'गैर-लाभांश वाले यूरोपीय विकल्पों हेतु पुट-कॉल पैरिटी प्रमेय के अनुसार, यदि किसी पोर्टफोलियो में लॉन्ग कॉल (Long Call) और शून्य-जोखिम बॉन्ड शामिल हैं, तो यह किस सिंथेटिक स्थिति के बराबर है?',
    options: [
      'Fiduciary Call, equivalent to a Protective Put (Long Put + Long Stock)',
      'Short Put + Short Stock',
      'Covered Call (Long Stock + Short Call)',
      'Bear Spread'
    ],
    hindiOptions: [
      'फिड्यूशरी कॉल, जो प्रोटेक्टिव पुट (लॉन्ग पुट + लॉन्ग स्टॉक) के बराबर है',
      'शॉर्ट पुट + शॉर्ट स्टॉक',
      'कवर्ड कॉल (लॉन्ग स्टॉक + शॉर्ट कॉल)',
      'बेयर स्प्रेड'
    ],
    answer: 0,
    explanation: 'Under Put-Call Parity, C + PV(K) = P + S. The left-hand side is termed a Fiduciary Call (Long Call + Bond earning risk-free rate). The right-hand side is a Protective Put (Long Put + Long underlying Stock). Both portfolios yield identical terminal payoff max(S_T, K).',
    hindiExplanation: 'पुट-कॉल पैरिटी के अनुसार: Call + PV(Strike) = Put + Stock। बायां भाग फिड्यूशरी कॉल कहलाता है और दायां भाग प्रोटेक्टिव पुट कहलाता है। दोनों का अंतिम प्रतिफल समान होता है।',
    sourceType: 'ORIGINAL PRACTICE',
    source: 'GARP Financial Markets & Products',
    tags: ['FRM', 'Options', 'Put-Call Parity', 'Derivatives'],
    negativeMarkingValue: 0
  },

  // --- CISA QUESTIONS ---
  {
    id: 'q-cisa-1',
    certificationId: 'cisa',
    levelId: 'cisa-exam-level',
    paperId: 'cisa-exam',
    domainId: 'cisa-d1',
    topicId: 'cisa-d1-t1',
    difficulty: 'Medium',
    question: 'Which of the following documents provides the PRIMARY statutory authority and establishes the scope, responsibility, and reporting lines of an internal Information Systems (IS) audit function?',
    hindiQuestion: 'निम्नलिखित में से कौन सा दस्तावेज़ आंतरिक सूचना प्रणाली (IS) ऑडिट कार्य को प्राथमिक अधिकार प्रदान करता है और उसके दायरे, जिम्मेदारी तथा रिपोर्टिंग संरचना को स्थापित करता है?',
    options: [
      'The Annual Audit Plan approved by the CIO',
      'The IS Audit Charter approved by the Audit Committee of the Board of Directors',
      'The Service Level Agreement (SLA) with external cloud service providers',
      'The Enterprise Risk Assessment Report'
    ],
    hindiOptions: [
      'सीआईओ द्वारा अनुमोदित वार्षिक ऑडिट योजना',
      'निदेशक मंडल की ऑडिट समिति द्वारा अनुमोदित आईएस ऑडिट चार्टर (Audit Charter)',
      'बाहरी सेवा प्रदाताओं के साथ सेवा स्तर समझौता (SLA)',
      'एंटरप्राइज रिस्क असेसमेंट रिपोर्ट'
    ],
    answer: 1,
    explanation: 'The IS Audit Charter is the overarching governance document approved by the Audit Committee (or highest governing body) that formally defines the audit function’s mission, authority, responsibility, purpose, and independence.',
    hindiExplanation: 'ऑडिट कमेटी द्वारा अनुमोदित आईएस ऑडिट चार्टर (Audit Charter) वह मूलभूत दस्तावेज है जो ऑडिट विभाग की स्वतंत्रता, अधिकार, उद्देश्य और रिपोर्टिंग संरचना को आधिकारिक रूप से स्थापित करता है।',
    sourceType: 'OFFICIAL SAMPLE QUESTION',
    source: 'ISACA CISA Review Manual - Domain 1: Information Systems Auditing Process',
    tags: ['CISA', 'Audit Charter', 'ISACA', 'Governance'],
    negativeMarkingValue: 0
  },
  {
    id: 'q-cisa-2',
    certificationId: 'cisa',
    levelId: 'cisa-exam-level',
    paperId: 'cisa-exam',
    domainId: 'cisa-d4',
    topicId: 'cisa-d4-t2',
    difficulty: 'Hard',
    question: 'During a Disaster Recovery audit, an IS auditor observes that a bank’s core transaction system has a Recovery Point Objective (RPO) of 15 minutes and a Recovery Time Objective (RTO) of 2 hours. Which of the following backup architectures would BEST satisfy this business requirement?',
    hindiQuestion: 'आपदा रिकवरी ऑडिट के दौरान, एक बैंक के कोर सिस्टम का रिकवरी पॉइंट ऑब्जेक्टिव (RPO) 15 मिनट और रिकवरी टाइम ऑब्जेक्टिव (RTO) 2 घंटे पाया गया। इस आवश्यकता को पूरा करने के लिए कौन सी बैकअप वास्तुकला सर्वश्रेष्ठ होगी?',
    options: [
      'Nightly tape backup shipped off-site with weekly full system imaging',
      'Synchronous or near-synchronous database replication to a Warm/Hot standby secondary data center',
      'Cold standby recovery site requiring manual server provisioning upon disaster declaration',
      'Daily cloud snapshot taken every 24 hours with 4-hour restore time'
    ],
    hindiOptions: [
      'रात में टेप बैकअप लेकर ऑफ-साइट भेजना',
      'सेकेंडरी हॉट/वार्म डेटा सेंटर में डेटाबेस का सिंक्रोनस या नियर-सिंक्रोनस रेप्लिकेशन',
      'कोल्ड स्टैंडबाय रिकवरी साइट जिसमें आपदा के बाद मैन्युअल सर्वर तैयार किए जाते हैं',
      'प्रति 24 घंटे में क्लाउड स्नैपशॉट लेना'
    ],
    answer: 1,
    explanation: 'RPO defines maximum acceptable data loss measured in time (15 minutes). RTO defines maximum acceptable downtime before service restoration (2 hours). Nightly or daily backups cannot satisfy a 15-minute RPO. Continuous or near-synchronous data replication to a hot or warm secondary site is required.',
    hindiExplanation: 'RPO (15 मिनट) अधिकतम अनुमेय डेटा नुकसान को दर्शाता है, जबकि RTO (2 घंटे) डाउनटाइम को दर्शाता है। 15 मिनट के RPO को पूरा करने के लिए निरंतर डेटा रेप्लिकेशन (Continuous Replication) और एक्टिव स्टैंडबाय साइट अनिवार्य है।',
    sourceType: 'VERIFIED PYQ',
    source: 'ISACA CISA Exam Practice Database - Domain 4: Operations & Business Resilience',
    tags: ['CISA', 'BCP', 'DRP', 'RPO', 'RTO', 'Resilience'],
    negativeMarkingValue: 0
  },

  // --- BANKING JAIIB / CAIIB QUESTIONS ---
  {
    id: 'q-jaiib-1',
    certificationId: 'jaiib',
    levelId: 'jaiib-main',
    paperId: 'jaiib-p2',
    domainId: 'jaiib-p2-d2',
    topicId: 'jaiib-p2-t3',
    difficulty: 'Medium',
    question: 'Under RBI Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP), an advance account is classified as a Non-Performing Asset (NPA) if interest and/or installment of principal remains overdue for more than:',
    hindiQuestion: 'आरबीआई के आय पहचान एवं परिसंपत्ति वर्गीकरण (IRACP) नियमों के तहत, किसी अग्रिम खाते को गैर-निष्पादित परिसंपत्ति (NPA) तब माना जाता है जब ब्याज या मूलधन की किस्त कितने दिनों से अधिक समय तक बकाया रहती है?',
    options: [
      '30 days',
      '60 days',
      '90 days',
      '180 days'
    ],
    hindiOptions: [
      '30 दिन',
      '60 दिन',
      '90 दिन',
      '180 दिन'
    ],
    answer: 2,
    explanation: 'According to the RBI Master Circular on IRACP norms, a debt asset is classified as an NPA if interest and/or principal installment remains overdue for a period of more than 90 days in respect of a term loan. (For agricultural short duration crops, overdue for 2 crop seasons; for long duration crops, 1 crop season).',
    hindiExplanation: 'आरबीआई के मास्टर सर्कुलर के अनुसार, यदि किसी सावधि ऋण (टर्म लोन) में ब्याज या मूलधन 90 दिनों से अधिक समय तक अतिदेय (overdue) रहता है, तो उसे एनपीए (NPA) के रूप में वर्गीकृत किया जाता है।',
    sourceType: 'VERIFIED PYQ',
    source: 'IIBF JAIIB Principles & Practices of Banking (PPB)',
    tags: ['Banking', 'JAIIB', 'NPA', 'RBI Circulars', 'IRACP'],
    negativeMarkingValue: 0
  },
  {
    id: 'q-jaiib-2',
    certificationId: 'jaiib',
    levelId: 'jaiib-main',
    paperId: 'jaiib-p1',
    domainId: 'jaiib-p1-d1',
    topicId: 'jaiib-p1-t2',
    difficulty: 'Easy',
    question: 'Which instrument of monetary control was introduced by the Reserve Bank of India in 2022 to absorb liquidity at the discretion of banks without collateral requirement?',
    hindiQuestion: 'भारतीय रिज़र्व बैंक द्वारा वर्ष 2022 में संपार्श्विक (collateral) की आवश्यकता के बिना बैंकों के विवेक पर तरलता सोखने हेतु कौन सा मौद्रिक साधन शुरू किया गया था?',
    options: [
      'Marginal Standing Facility (MSF)',
      'Standing Deposit Facility (SDF)',
      'Cash Reserve Ratio (CRR)',
      'Bank Rate'
    ],
    hindiOptions: [
      'मार्जिनल स्टैंडिंग फैसिलिटी (MSF)',
      'स्टैंडिंग डिपॉजिट फैसिलिटी (SDF)',
      'कैश रिजर्व रेशियो (CRR)',
      'बैंक दर'
    ],
    answer: 1,
    explanation: 'The Standing Deposit Facility (SDF) was instituted by RBI as an uncollateralized monetary tool under amended Section 17 of the RBI Act to absorb excess systemic liquidity without the need to pledge government securities as collateral.',
    hindiExplanation: 'स्टैंडिंग डिपॉजिट फैसिलिटी (SDF) को आरबीआई द्वारा बिना किसी सरकारी प्रतिभूति को गिरवी रखे बैंकिंग प्रणाली से अतिरिक्त तरलता को सोखने के लिए पेश किया गया था। यह लिक्विडिटी एडजस्टमेंट फैसिलिटी (LAF) का निचला फ्लोर बन गया है।',
    sourceType: 'ORIGINAL PRACTICE',
    source: 'IIBF JAIIB Indian Economy & Indian Financial System',
    tags: ['Banking', 'JAIIB', 'RBI', 'SDF', 'Monetary Policy'],
    negativeMarkingValue: 0
  },

  // --- NISM SERIES QUESTIONS ---
  {
    id: 'q-nism-1',
    certificationId: 'nism',
    levelId: 'nism-key-modules',
    paperId: 'nism-5a',
    domainId: 'nism-key-modules',
    topicId: 'nism-5a',
    difficulty: 'Easy',
    question: 'What is the cutoff timing mandated by SEBI for subscription applications in Liquid and Overnight Mutual Fund schemes to get the closing NAV of the same day (or previous day if funds available before cut-off)?',
    hindiQuestion: 'लिक्विड एवं ओवरनाइट म्यूचुअल फंड योजनाओं में उसी दिन का एनएवी (NAV) प्राप्त करने के लिए सेबी द्वारा अनिवार्य कट-ऑफ समय क्या है?',
    options: [
      '11:30 AM',
      '1:30 PM',
      '3:00 PM',
      '4:00 PM'
    ],
    hindiOptions: [
      'सुबह 11:30 बजे',
      'दोपहर 1:30 बजे',
      'दोपहर 3:00 बजे',
      'शाम 4:00 बजे'
    ],
    answer: 1,
    explanation: 'Under SEBI Mutual Fund regulations, the cutoff timing for subscriptions in Liquid and Overnight funds is 1:30 PM (subject to realization of funds before the cutoff). For other schemes (equity and debt), the cutoff time is 3:00 PM.',
    hindiExplanation: 'सेबी नियमों के अनुसार, लिक्विड और ओवरनाइट फंड्स में सब्सक्रिप्शन के लिए कट-ऑफ समय दोपहर 1:30 बजे है (फंड की उपलब्धता की शर्त पर)। अन्य फंड्स के लिए यह दोपहर 3:00 बजे है।',
    sourceType: 'VERIFIED PYQ',
    source: 'NISM Series V-A: Mutual Fund Distributors Certification Exam',
    tags: ['NISM', 'Mutual Funds', 'SEBI', 'Cut-off Timing'],
    negativeMarkingValue: 0
  },
  {
    id: 'q-nism-2',
    certificationId: 'nism',
    levelId: 'nism-key-modules',
    paperId: 'nism-15',
    domainId: 'nism-key-modules',
    topicId: 'nism-15',
    difficulty: 'Hard',
    question: 'Under the SEBI (Research Analysts) Regulations, 2014, a Research Analyst or research entity must maintain records of all research reports, communications, recommendations, and public appearance details for a minimum period of:',
    hindiQuestion: 'सेबी (रिसर्च एनालिस्ट्स) विनियम, 2014 के तहत, एक रिसर्च एनालिस्ट को अपनी सभी शोध रिपोर्टों, सिफारिशों और अभिलेखों को न्यूनतम कितने समय तक सुरक्षित रखना अनिवार्य है?',
    options: [
      '3 years',
      '5 years',
      '7 years',
      '8 years'
    ],
    hindiOptions: [
      '3 वर्ष',
      '5 वर्ष',
      '7 वर्ष',
      '8 वर्ष'
    ],
    answer: 1,
    explanation: 'Regulation 25(2) of the SEBI (Research Analysts) Regulations, 2014 mandates that every Research Analyst must maintain books of accounts, records, research recommendations, and rationale for a minimum period of 5 years.',
    hindiExplanation: 'सेबी (रिसर्च एनालिस्ट्स) विनियम, 2014 के नियम 25(2) के अनुसार रिसर्च एनालिस्ट को अपने सभी शोध अभिलेख, सिफारिशें और डेटा कम से कम 5 वर्षों की अवधि के लिए बनाए रखना आवश्यक है।',
    sourceType: 'VERIFIED PYQ',
    source: 'NISM Series XV: Research Analyst Certification',
    tags: ['NISM', 'SEBI', 'Research Analyst', 'Compliance'],
    negativeMarkingValue: 0.25
  },

  // --- STATUTORY: RBI GRADE B & SEBI GRADE A ---
  {
    id: 'q-rbi-1',
    certificationId: 'rbi-grade-b',
    levelId: 'rbi-phase-2',
    paperId: 'rbi-p2-fm',
    domainId: 'rbi-phase-2',
    topicId: 'rbi-p2-fm',
    difficulty: 'Hard',
    question: 'Under the Reserve Bank of India’s Prompt Corrective Action (PCA) Framework for Commercial Banks, which of the following is NOT one of the three primary financial trigger metrics monitored for initiating corrective actions?',
    hindiQuestion: 'वाणिज्यिक बैंकों के लिए भारतीय रिज़र्व बैंक के त्वरित सुधारात्मक कार्रवाई (PCA) ढांचे के तहत, सुधारात्मक कार्रवाई शुरू करने हेतु निम्नलिखित में से कौन सा वित्तीय मीट्रिक प्राथमिक ट्रिगर नहीं है?',
    options: [
      'Capital to Risk-Weighted Assets Ratio (CRAR) / Common Equity Tier 1 (CET1)',
      'Net Non-Performing Assets (NNPA) Ratio',
      'Current Account Savings Account (CASA) Ratio',
      'Leverage Ratio'
    ],
    hindiOptions: [
      'सीआरएआर (CRAR) / कॉमन इक्विटी टियर 1 (CET1)',
      'शुद्ध गैर-निष्पादित परिसंपत्ति (NNPA) अनुपात',
      'चालू खाता बचत खाता (CASA) अनुपात',
      'लीवरेज अनुपात'
    ],
    answer: 2,
    explanation: 'The revised RBI PCA Framework monitors 3 primary risk thresholds: 1. Capital (CRAR and CET1 Ratio); 2. Asset Quality (Net NPA Ratio); and 3. Leverage (Tier 1 Leverage Ratio). Profitability (Return on Assets - ROA) was removed in the revised framework, and CASA ratio has never been a direct trigger parameter.',
    hindiExplanation: 'आरबीआई के संशोधित पीसीए (PCA) ढांचे में 3 मुख्य पैरामीटर होते हैं: 1. पूंजी (CRAR और CET1 अनुपात); 2. परिसंपत्ति गुणवत्ता (नेट एनपीए अनुपात); और 3. लीवरेज अनुपात। कासा (CASA) अनुपात इसका हिस्सा नहीं है।',
    sourceType: 'VERIFIED PYQ',
    source: 'RBI Grade B Phase II Finance & Management Official Pattern',
    tags: ['RBI Grade B', 'PCA Framework', 'Banking Supervision', 'Central Banking'],
    negativeMarkingValue: 0.25
  },
  {
    id: 'q-sebi-1',
    certificationId: 'sebi-grade-a',
    levelId: 'sebi-phase-1',
    paperId: 'sebi-p1-p2',
    domainId: 'sebi-phase-1',
    topicId: 'sebi-p1-p2',
    difficulty: 'Hard',
    question: 'Under the SEBI (Prohibition of Insider Trading) Regulations, 2015, what is the mandatory requirement regarding maintaining a Structured Digital Database (SDD)?',
    hindiQuestion: 'सेबी (इनसाइडर ट्रेडिंग निषेध) विनियम, 2015 के तहत, संरचित डिजिटल डेटाबेस (SDD) बनाए रखने के संबंध में क्या अनिवार्य आवश्यकता है?',
    options: [
      'It can be maintained on a shared spreadsheet accessible to all staff members.',
      'It must contain nature of UPSI, names of persons who shared and received UPSI, along with PAN or other government ID, with tamper-proof audit trails preserved for at least 8 years.',
      'It is only mandatory for public sector enterprises and optional for private listed entities.',
      'It must be filed with the Stock Exchanges on a monthly basis.'
    ],
    hindiOptions: [
      'इसे सभी कर्मचारियों द्वारा सुलभ साझा स्प्रेडशीट पर रखा जा सकता है।',
      'इसमें यूपीएसआई (UPSI) की प्रकृति, साझा करने वाले और प्राप्त करने वाले के नाम व पैन कार्ड का उल्लेख होना चाहिए, तथा 8 वर्ष तक का ऑडिट ट्रेल होना चाहिए।',
      'यह केवल सार्वजनिक क्षेत्र के उपक्रमों के लिए अनिवार्य है।',
      'इसे प्रति माह स्टॉक एक्सचेंजों को प्रस्तुत किया जाना चाहिए।'
    ],
    answer: 1,
    explanation: 'Regulation 3(5) of SEBI PIT Regulations mandates every listed company and intermediary to maintain a Structured Digital Database (SDD) internally with adequate internal controls and checks such as time stamping and audit trails to ensure non-tampering of the database containing UPSI and recipient details, preserved for 8 years.',
    hindiExplanation: 'सेबी पीआईटी विनियमों के नियम 3(5) के अनुसार यूपीएसआई (अप्रकाशित मूल्य संवेदनशील जानकारी) और पैन विवरण को समय-मुहर (time-stamp) और छेड़छाड़-रहित ऑडिट ट्रेल के साथ कम से कम 8 वर्षों तक सुरक्षित रखना अनिवार्य है।',
    sourceType: 'VERIFIED PYQ',
    source: 'SEBI Grade A Phase I Paper 2: Securities Law',
    tags: ['SEBI Grade A', 'PIT Regulations', 'UPSI', 'SDD', 'Securities Law'],
    negativeMarkingValue: 0.25
  },

  // --- CYBERSECURITY & CLOUD QUESTIONS ---
  {
    id: 'q-sec-1',
    certificationId: 'comptia-sec-plus',
    levelId: 'sec-plus-exam-level',
    paperId: 'sec-plus-exam',
    domainId: 'sec-d1',
    topicId: 'sec-t1',
    difficulty: 'Medium',
    question: 'Which cybersecurity architectural principle is defined by the motto "Never Trust, Always Verify", requiring explicit authentication, least privilege access, and continuous micro-segmentation regardless of whether traffic originates inside or outside the corporate perimeter?',
    hindiQuestion: 'किस साइबर सुरक्षा वास्तुकला सिद्धांत को "नेवर ट्रस्ट, ऑलवेज वेरीफाई" (कभी भरोसा न करें, हमेशा सत्यापित करें) के रूप में परिभाषित किया गया है, जिसके तहत नेटवर्क के अंदर या बाहर सभी ट्रैफिक का स्पष्ट सत्यापन आवश्यक होता है?',
    options: [
      'Defense in Depth',
      'Zero Trust Architecture (ZTA)',
      'Security through Obscurity',
      'Demilitarized Zone (DMZ)'
    ],
    hindiOptions: [
      'डिफेंस इन डेप्थ',
      'जीरो ट्रस्ट आर्किटेक्चर (ZTA)',
      'सिक्योरिटी थ्रू ऑब्सक्यूरिटी',
      'डीएमजेड (DMZ)'
    ],
    answer: 1,
    explanation: 'Zero Trust Architecture (NIST SP 800-207) assumes that threat actors exist both inside and outside traditional network perimeters. It enforces strict identity verification, microsegmentation, and dynamic context-based access control rather than granting implicit trust based on network location.',
    hindiExplanation: 'जीरो ट्रस्ट आर्किटेक्चर (Zero Trust Architecture) इस सिद्धांत पर कार्य करता है कि खतरे नेटवर्क के अंदर और बाहर दोनों जगह मौजूद हो सकते हैं। इसलिए हर पहुंच अनुरोध को स्पष्ट रूप से प्रमाणित, अधिकृत और एन्क्रिप्ट किया जाना चाहिए।',
    sourceType: 'OFFICIAL SAMPLE QUESTION',
    source: 'CompTIA Security+ SY0-701 Examination Objectives - Domain 1 & 3',
    tags: ['Security+', 'Zero Trust', 'NIST', 'Cybersecurity'],
    negativeMarkingValue: 0
  },
  {
    id: 'q-aws-1',
    certificationId: 'aws-csa',
    levelId: 'aws-saa-exam-level',
    paperId: 'aws-saa-exam',
    domainId: 'aws-d2',
    topicId: 'aws-t2',
    difficulty: 'Medium',
    question: 'A financial analytics application deployed on Amazon EC2 requires a highly available relational database with automatic failover and read scaling capability across multiple geographic data centers within a region. Which AWS database configuration BEST meets this requirement with minimal administrative overhead?',
    hindiQuestion: 'एडब्ल्यूएस (AWS) पर तैनात वित्तीय एप्लिकेशन को मल्टीपल डेटा केंद्रों में स्वचालित फेलओवर और रीड स्केलिंग क्षमता के साथ एक उच्च उपलब्धता रिलेशनल डेटाबेस की आवश्यकता है। कौन सा कॉन्फ़िगरेशन न्यूनतम प्रशासनिक प्रयास के साथ इस आवश्यकता को सर्वोत्तम रूप से पूरा करता है?',
    options: [
      'Self-managed MySQL on an EC2 instance with manual EBS snapshot replication',
      'Amazon RDS Multi-AZ deployment with Read Replicas (or Amazon Aurora Multi-AZ cluster)',
      'Amazon DynamoDB with global tables',
      'Amazon Redshift cluster with cross-region snapshot copy'
    ],
    hindiOptions: [
      'ईसी2 इंस्टेंस पर मैन्युअल स्नैपशॉट के साथ स्व-प्रबंधित MySQL',
      'अमेज़ॅन आरडीएस (RDS) मल्टी-एजेड परिनियोजन रीड रेप्लिका सहित (या अमेज़ॅन ऑरोरा क्लस्टर)',
      'अमेज़ॅन डायनेमोडीबी ग्लोबल टेबल्स',
      'अमेज़ॅन रेडशिफ्ट क्लस्टर'
    ],
    answer: 1,
    explanation: 'Amazon RDS Multi-AZ provides synchronous replication to a standby instance in a different Availability Zone (AZ) with automatic failover in the event of an outage. Asynchronous Read Replicas scale read workloads. Amazon Aurora Multi-AZ with continuous 6-way storage replication across 3 AZs is also purpose-built for high performance.',
    hindiExplanation: 'अमेज़ॅन आरडीएस मल्टी-एजेड (RDS Multi-AZ) स्वचालित रूप से एक अलग उपलब्धता क्षेत्र (AZ) में स्टैंडबाय इंस्टेंस पर डेटा को रेप्लिकेट करता है और विफलता की स्थिति में स्वचालित फेलओवर प्रदान करता है।',
    sourceType: 'OFFICIAL SAMPLE QUESTION',
    source: 'AWS Certified Solutions Architect Associate (SAA-C03) Official Sample Questions',
    tags: ['AWS', 'RDS', 'Multi-AZ', 'High Availability', 'Cloud Architecture'],
    negativeMarkingValue: 0
  },

  // --- PROJECT MANAGEMENT: PMP QUESTIONS ---
  {
    id: 'q-pmp-1',
    certificationId: 'pmp',
    levelId: 'pmp-exam-level',
    paperId: 'pmp-exam',
    domainId: 'pmp-d2',
    topicId: 'pmp-d2-t1',
    difficulty: 'Medium',
    question: 'In an ongoing project, the Planned Value (PV) is ₹10,00,000, the Earned Value (EV) is ₹9,00,000, and the Actual Cost (AC) is ₹9,50,000. What is the Cost Performance Index (CPI) and Schedule Performance Index (SPI), and what does this indicate?',
    hindiQuestion: 'एक चालू परियोजना में प्लान्ड वैल्यू (PV) ₹10,00,000, अर्नड वैल्यू (EV) ₹9,00,000 और एक्चुअल कॉस्ट (AC) ₹9,50,000 है। कॉस्ट परफॉर्मेंस इंडेक्स (CPI) और शेड्यूल परफॉर्मेंस इंडेक्स (SPI) क्या हैं, और यह क्या दर्शाता है?',
    options: [
      'CPI = 0.947, SPI = 0.900; Project is over budget and behind schedule.',
      'CPI = 1.055, SPI = 1.111; Project is under budget and ahead of schedule.',
      'CPI = 0.900, SPI = 0.947; Project is over budget and on schedule.',
      'CPI = 1.100, SPI = 0.900; Project is under budget and behind schedule.'
    ],
    hindiOptions: [
      'CPI = 0.947, SPI = 0.900; प्रोजेक्ट बजट से अधिक खर्च कर रहा है और समय से पीछे है।',
      'CPI = 1.055, SPI = 1.111; प्रोजेक्ट बजट से कम खर्च कर रहा है और समय से आगे है।',
      'CPI = 0.900, SPI = 0.947; प्रोजेक्ट बजट से अधिक खर्च कर रहा है।',
      'CPI = 1.100, SPI = 0.900; प्रोजेक्ट बजट से कम खर्च कर रहा है।'
    ],
    answer: 0,
    explanation: 'CPI = EV / AC = 9,00,000 / 9,50,000 ≈ 0.947 (< 1 indicates cost overrun). SPI = EV / PV = 9,00,000 / 10,00,000 = 0.900 (< 1 indicates project is progressing slower than planned / behind schedule).',
    hindiExplanation: 'CPI = EV / AC = 9,00,000 / 9,50,000 = 0.947 (< 1 का मतलब है कि लागत बजट से अधिक हो रही है)। SPI = EV / PV = 9,00,000 / 10,00,000 = 0.900 (< 1 का मतलब है कि प्रोजेक्ट समय से पीछे चल रहा है)।',
    sourceType: 'VERIFIED PYQ',
    source: 'PMI PMP Examination Practice: Earned Value Management (EVM)',
    tags: ['PMP', 'EVM', 'CPI', 'SPI', 'Project Management'],
    negativeMarkingValue: 0
  }
];
