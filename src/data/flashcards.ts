import type { Flashcard } from '../types';

export const flashcardsData: Flashcard[] = [
  // Accounting Standards & Ind AS
  {
    id: 'fc-1',
    category: 'Ind AS & Accounting',
    title: 'Ind AS 115 - 5 Step Revenue Recognition Model',
    hindiTitle: 'इंड एएस 115 - राजस्व पहचान का 5-चरणीय मॉडल',
    front: 'What are the 5 sequential steps of the Revenue Recognition Model under Ind AS 115?',
    hindiFront: 'इंड एएस 115 के तहत राजस्व पहचान मॉडल के 5 क्रमिक चरण क्या हैं?',
    back: 'Step 1: Identify the contract(s) with a customer.\nStep 2: Identify the performance obligations in the contract.\nStep 3: Determine the transaction price.\nStep 4: Allocate the transaction price to the performance obligations in the contract.\nStep 5: Recognise revenue when (or as) the entity satisfies a performance obligation.',
    hindiBack: 'चरण 1: ग्राहक के साथ अनुबंध की पहचान करें।\nचरण 2: अनुबंध में प्रदर्शन दायित्वों (Performance Obligations) की पहचान करें।\nचरण 3: लेनदेन मूल्य (Transaction Price) निर्धारित करें।\nचरण 4: लेनदेन मूल्य को प्रदर्शन दायित्वों में आवंटित करें।\nचरण 5: दायित्व पूरा होने पर राजस्व दर्ज करें।',
    tags: ['Ind AS 115', 'CA Final', 'CFA', 'CMA']
  },
  {
    id: 'fc-2',
    category: 'Ind AS & Accounting',
    title: 'Ind AS 116 - Short-Term & Low-Value Leases',
    hindiTitle: 'इंड एएस 116 - अल्पकालिक एवं कम मूल्य के पट्टे',
    front: 'What are the two recognition exemptions available to lessees under Ind AS 116, avoiding Right-of-Use (ROU) asset recognition?',
    hindiFront: 'इंड एएस 116 के तहत पट्टाधारकों के लिए कौन सी दो छूट उपलब्ध हैं, जिससे ROU परिसंपत्ति दर्ज करने से बचा जा सकता है?',
    back: '1. Short-Term Leases: Leases with a term of 12 months or less that do not contain a purchase option (election made by class of underlying asset).\n2. Leases of Low-Value Assets: Leases where the underlying asset, when new, has low value (typically ~USD 5,000 / INR ~4,00,000, e.g. laptops, office furniture; election made on lease-by-lease basis).\nIn both cases, lease payments are recognized as an expense on straight-line or other systematic basis.',
    hindiBack: '1. अल्पकालिक पट्टे (Short-term): 12 महीने या उससे कम अवधि के पट्टे (बिना खरीद विकल्प के)।\n2. कम मूल्य की संपत्तियां (Low-value): जब नई होने पर संपत्ति का मूल्य कम हो (जैसे लैपटॉप, ऑफिस फर्नीचर)।\nइन दोनों मामलों में खर्च को सीधे लाभ-हानि खाते में दर्ज किया जा सकता है।',
    tags: ['Ind AS 116', 'CA Final', 'Lease']
  },

  // Taxation & GST
  {
    id: 'fc-3',
    category: 'Taxation & GST',
    title: 'Section 115BAC Default Tax Slabs (AY 2025-26 & 2026-27)',
    hindiTitle: 'धारा 115BAC डिफ़ॉल्ट कर स्लैब (AY 2025-26 एवं 2026-27)',
    front: 'What are the income tax slab rates under the Default New Tax Regime under Section 115BAC?',
    hindiFront: 'धारा 115BAC के तहत डिफ़ॉल्ट नई कर व्यवस्था में आयकर स्लैब दरें क्या हैं?',
    back: '• Up to ₹3,00,000: Nil\n• ₹3,00,001 to ₹7,00,000: 5%\n• ₹7,00,001 to ₹10,00,000: 10%\n• ₹10,00,001 to ₹12,00,000: 15%\n• ₹12,00,001 to ₹15,00,000: 20%\n• Above ₹15,00,000: 30%\n\nNote: Standard deduction for salaried employees is ₹75,000. Full rebate under Sec 87A up to ₹7,00,000 taxable income.',
    hindiBack: '• ₹3,00,000 तक: शून्य (Nil)\n• ₹3,00,001 से ₹7,00,000: 5%\n• ₹7,00,001 से ₹10,00,000: 10%\n• ₹10,00,001 से ₹12,00,000: 15%\n• ₹12,00,001 से ₹15,00,000: 20%\n• ₹15,00,000 से अधिक: 30%\n\nवेतनभोगियों के लिए मानक कटौती ₹75,000 है। धारा 87A के तहत ₹7 लाख तक कोई कर नहीं।',
    tags: ['Income Tax', 'Sec 115BAC', 'CA Inter', 'Tax']
  },
  {
    id: 'fc-4',
    category: 'Taxation & GST',
    title: 'Section 17(5) CGST Act - Blocked Input Tax Credit',
    hindiTitle: 'धारा 17(5) सीजीएसटी अधिनियम - अवरुद्ध इनपुट टैक्स क्रेडिट (Blocked ITC)',
    front: 'Name the major supplies for which Input Tax Credit (ITC) is strictly blocked under Section 17(5) of the CGST Act, 2017.',
    hindiFront: 'उन प्रमुख आपूर्तियों के नाम बताएं जिनके लिए सीजीएसटी अधिनियम की धारा 17(5) के तहत आईटीसी अवरुद्ध है।',
    back: '1. Motor vehicles for transportation of persons having approved seating capacity ≤ 13 persons (except when used for taxable supply of vehicles, transportation of passengers, or driving training).\n2. Food and beverages, outdoor catering, beauty treatment, health services, cosmetic and plastic surgery (unless used as an inward supply for making taxable outward supply of same category).\n3. Membership of a club, health, and fitness centre.\n4. Works contract services supplied for construction of an immovable property (except plant and machinery or where it is an input service for further works contract service).\n5. Goods lost, stolen, destroyed, written off, or disposed of by way of gift or free samples.',
    hindiBack: '1. 13 या उससे कम बैठने की क्षमता वाले मोटर वाहन (व्यापारिक अपवादों को छोड़कर)।\n2. भोजन एवं पेय पदार्थ, आउटडोर कैटरिंग, सौंदर्य उपचार, क्लब की सदस्यता।\n3. अचल संपत्ति के निर्माण हेतु वर्क्स कॉन्ट्रैक्ट सेवाएं (प्लांट व मशीनरी को छोड़कर)।\n4. खोया हुआ, चोरी हुआ या मुफ्त नमूनों के रूप में दिया गया माल।',
    tags: ['GST', 'Section 17(5)', 'Blocked ITC', 'CA', 'CMA']
  },

  // Company Law & Governance
  {
    id: 'fc-5',
    category: 'Company Law',
    title: 'Section 135 - CSR Applicability Thresholds',
    hindiTitle: 'धारा 135 - सीएसआर प्रयोज्यता सीमाएं',
    front: 'What are the 3 statutory financial thresholds under Section 135(1) of the Companies Act, 2013 that trigger mandatory Corporate Social Responsibility (CSR)?',
    hindiFront: 'कंपनी अधिनियम 2013 की धारा 135(1) के तहत कौन सी 3 वित्तीय सीमाएं हैं जो अनिवार्य सीएसआर लागू करती हैं?',
    back: 'A company meeting ANY of the following in the immediately preceding financial year must constitute a CSR Committee and spend on CSR:\n1. Net Worth ≥ ₹500 Crores, OR\n2. Turnover ≥ ₹1,000 Crores, OR\n3. Net Profit ≥ ₹5 Crores.\n\nMandatory spend: At least 2% of the average net profits of the company made during the 3 immediately preceding financial years.',
    hindiBack: 'पूर्ववर्ती वित्तीय वर्ष में किसी भी एक शर्त के पूरा होने पर:\n1. कुल संपत्ति (Net Worth) ≥ ₹500 करोड़, या\n2. कुल कारोबार (Turnover) ≥ ₹1,000 करोड़, या\n3. शुद्ध लाभ (Net Profit) ≥ ₹5 करोड़।\n\nअनिवार्य खर्च: पिछले 3 वर्षों के औसत शुद्ध लाभ का कम से कम 2%।',
    tags: ['Companies Act', 'Section 135', 'CSR', 'CS', 'CA']
  },

  // Financial Formulas & Risk Metrics
  {
    id: 'fc-6',
    category: 'Finance & Risk',
    title: 'DuPont 3-Step & 5-Step Return on Equity (ROE)',
    hindiTitle: 'ड्यूपॉन्ट 3-चरणीय एवं 5-चरणीय इक्विटी पर प्रतिफल (ROE)',
    front: 'State the DuPont decomposition formula for Return on Equity (ROE).',
    hindiFront: 'इक्विटी पर प्रतिफल (ROE) के लिए ड्यूपॉन्ट फॉर्मूला बताएं।',
    back: '3-Step DuPont Formula:\nROE = Net Profit Margin × Asset Turnover × Financial Leverage\nROE = (Net Income / Revenue) × (Revenue / Total Assets) × (Total Assets / Shareholders’ Equity)\n\n5-Step DuPont Formula:\nROE = Tax Burden × Interest Burden × EBIT Margin × Asset Turnover × Financial Leverage\nROE = (Net Income / EBT) × (EBT / EBIT) × (EBIT / Revenue) × (Revenue / Total Assets) × (Total Assets / Equity)',
    hindiBack: '3-चरणीय ड्यूपॉन्ट:\nROE = शुद्ध लाभ मार्जिन × परिसंपत्ति टर्नओवर × वित्तीय उत्तोलन (लीवरेज)\n\n5-चरणीय ड्यूपॉन्ट:\nROE = टैक्स बर्डन × ब्याज बर्डन × ईबीआईटी मार्जिन × परिसंपत्ति टर्नओवर × इक्विटी मल्टीप्लायर',
    tags: ['DuPont', 'ROE', 'CFA Level I', 'Financial Analysis']
  },
  {
    id: 'fc-7',
    category: 'Finance & Risk',
    title: 'Value at Risk (VaR) Parametric Formula',
    hindiTitle: 'वैल्यू एट रिस्क (VaR) पैरामीट्रिक सूत्र',
    front: 'What is the formula for calculating 1-day Parametric (Delta-Normal) Value at Risk (VaR) at a confidence level c?',
    hindiFront: 'विश्वास स्तर c पर 1-दिवसीय पैरामीट्रिक वैल्यू एट रिस्क (VaR) की गणना का सूत्र क्या है?',
    back: '1-Day VaR = Portfolio Value × (Z_c × σ_p - μ_p)\n(Assuming daily expected return μ_p ≈ 0 for short horizons):\n1-Day VaR = Portfolio Value × Z_c × σ_p\n\nWhere:\n• Z_c = standard normal critical value (1.645 for 95%, 2.326 for 99% 1-tailed)\n• σ_p = daily portfolio volatility\n\nT-Day VaR under Square-Root-of-Time Rule:\nVaR(T days) = VaR(1 day) × √T (valid only for i.i.d. normally distributed returns).',
    hindiBack: '1-दिवसीय VaR = पोर्टफोलियो मूल्य × Z_c × σ_p\n\nजहाँ:\n• Z_c = क्रिटिकल वैल्यू (95% के लिए 1.645, 99% के लिए 2.326)\n• σ_p = दैनिक अस्थिरता\n• T-दिन का VaR = 1-दिन का VaR × √T (स्क्वायर-रूट ऑफ टाइम नियम)।',
    tags: ['FRM', 'VaR', 'Risk Management', 'Quantitative Finance']
  },

  // IT & Cybersecurity
  {
    id: 'fc-8',
    category: 'Cybersecurity & IT',
    title: 'RTO vs RPO in Business Continuity',
    hindiTitle: 'बिजनेस निरंतरता में RTO बनाम RPO',
    front: 'Distinguish clearly between Recovery Time Objective (RTO) and Recovery Point Objective (RPO).',
    hindiFront: 'रिकवरी टाइम ऑब्जेक्टिव (RTO) और रिकवरी पॉइंट ऑब्जेक्टिव (RPO) के बीच अंतर स्पष्ट करें।',
    back: '• Recovery Point Objective (RPO): The acceptable amount of data loss measured in time backward from disaster event to most recent valid backup. Answers: "How much data can we afford to lose?"\n\n• Recovery Time Objective (RTO): The acceptable duration of downtime between the disaster event and the restoration of business processing. Answers: "How long can we afford to be offline?"',
    hindiBack: '• रिकवरी पॉइंट ऑब्जेक्टिव (RPO): समय में मापा गया स्वीकार्य डेटा नुकसान (आपदा से पहले का बिंदु)। प्रश्न: "हम कितना डेटा खोना सहन कर सकते हैं?"\n\n• रिकवरी टाइम ऑब्जेक्टिव (RTO): आपदा के बाद सेवा बहाल होने तक का अधिकतम स्वीकार्य समय। प्रश्न: "हम कितने समय तक डाउनटाइम सहन कर सकते हैं?"',
    tags: ['CISA', 'Security+', 'DRP', 'BCP', 'Cybersecurity']
  }
];
