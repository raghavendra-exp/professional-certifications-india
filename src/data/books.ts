import type { Book } from '../types';

export const booksData: Book[] = [
  // CA Official & Standard Texts
  {
    id: 'book-ca-1',
    title: 'ICAI Study Material: Financial Reporting (Ind AS) Vol 1, 2, 3 & 4',
    author: 'Board of Studies (Operations), ICAI',
    publisher: 'The Institute of Chartered Accountants of India',
    edition: 'New Scheme 2024–2026 Edition',
    year: 2026,
    certificationId: 'ca',
    paperCode: 'FIN-P1',
    topic: 'Indian Accounting Standards (Ind AS) & Business Combinations',
    syllabusCoverage: '100% of CA Final Paper 1 Official Syllabus with illustration questions, practical cases & educational material.',
    hindiSyllabusCoverage: 'सीए फाइनल पेपर 1 का 100% आधिकारिक पाठ्यक्रम।',
    isOfficialMaterial: true,
    officialLink: 'https://www.icai.org/post/bos-knowledge-portal',
    purchaseLink: 'https://icai-cds.org/'
  },
  {
    id: 'book-ca-2',
    title: 'Taxmann’s Direct Tax Laws & International Taxation (Professional Edition)',
    author: 'Dr. Vinod K. Singhania & Dr. Kapil Singhania',
    publisher: 'Taxmann Publications',
    edition: '71st Edition (AY 2025-26 & 2026-27)',
    year: 2026,
    certificationId: 'ca',
    paperCode: 'FIN-P4',
    topic: 'Corporate Taxation, Transfer Pricing & International Tax Treaties',
    syllabusCoverage: 'Exhaustive coverage of Section 115BAC, Corporate Tax, Transfer Pricing regulations, and DTAA case laws.',
    isOfficialMaterial: false,
    officialLink: 'https://www.taxmann.com',
    purchaseLink: 'https://www.taxmann.com/bookstore'
  },
  {
    id: 'book-ca-3',
    title: 'Corporate and Other Laws (Comprehensive Guide)',
    author: 'Munish Bhandari',
    publisher: 'Bestword Publications',
    edition: '32nd Edition',
    year: 2026,
    certificationId: 'ca',
    paperCode: 'INT-P2',
    topic: 'Companies Act, 2013 & Other Allied Commercial Laws',
    syllabusCoverage: 'Full coverage of CA Intermediate Paper 2 with section-wise analysis, flowcharts, and past exam questions.',
    isOfficialMaterial: false,
    officialLink: 'https://bestword.co.in',
    purchaseLink: 'https://bestword.co.in'
  },

  // CS Books
  {
    id: 'book-cs-1',
    title: 'ICSI Official Study Material: Company Law & Practice',
    author: 'Directorate of Academics, ICSI',
    publisher: 'The Institute of Company Secretaries of India',
    edition: 'Syllabus 2022 Latest Edition',
    year: 2026,
    certificationId: 'cs',
    paperCode: 'EXEC-P2',
    topic: 'Companies Act 2013, Secretarial Standards (SS-1, SS-2) & Governance',
    syllabusCoverage: 'Prescribed master module for CS Executive Group 1 covering all statutory sections and board practices.',
    isOfficialMaterial: true,
    officialLink: 'https://www.icsi.edu/academic-portal/study-material/',
    purchaseLink: 'https://www.icsi.edu'
  },

  // CMA Books
  {
    id: 'book-cma-1',
    title: 'Cost and Management Audit (CAS & Section 148)',
    author: 'Directorate of Studies, ICMAI',
    publisher: 'The Institute of Cost Accountants of India',
    edition: '2022 Syllabus Edition',
    year: 2026,
    certificationId: 'cma',
    paperCode: 'CMA-P17',
    topic: 'Cost Accounting Standards (CAS 1 to CAS 24) & Cost Audit Rules',
    syllabusCoverage: 'Complete official text for CMA Final Paper 17 with statutory filing forms CRA-1 to CRA-4.',
    isOfficialMaterial: true,
    officialLink: 'https://icmai.in/studentswebsite/bos_syllabus.php',
    purchaseLink: 'https://icmai.in'
  },

  // CFA Books
  {
    id: 'book-cfa-1',
    title: 'CFA Program Curriculum Level I Box Set (Volumes 1-6)',
    author: 'CFA Institute Curriculum Authors',
    publisher: 'Wiley / CFA Institute',
    edition: '2025–2026 Edition',
    year: 2026,
    certificationId: 'cfa',
    paperCode: 'CFA-L1',
    topic: 'Ethical Standards, FSA, Corporate Issuers, Equity, Fixed Income, Derivatives',
    syllabusCoverage: 'Official primary source curriculum tested on the CFA Level I computer-based examination.',
    isOfficialMaterial: true,
    officialLink: 'https://www.cfainstitute.org/programs/cfa/curriculum',
    purchaseLink: 'https://www.wiley.com'
  },

  // FRM Books
  {
    id: 'book-frm-1',
    title: 'GARP FRM Part I Books (Foundations, Quant, Markets, Valuation)',
    author: 'GARP Risk Advisory Council',
    publisher: 'Global Association of Risk Professionals (GARP) / Pearson',
    edition: '2026 Official Edition',
    year: 2026,
    certificationId: 'frm',
    paperCode: 'FRM-P1',
    topic: 'Risk Foundations, Quantitative Analysis, Financial Products & Valuation Models',
    syllabusCoverage: 'Official GARP Part I four-volume set containing all core readings and end-of-chapter questions.',
    isOfficialMaterial: true,
    officialLink: 'https://www.garp.org/frm/curriculum',
    purchaseLink: 'https://www.garp.org/frm/fees-payments'
  },

  // CISA Books
  {
    id: 'book-cisa-1',
    title: 'CISA Review Manual (CRM) & QAE Database (30th Edition)',
    author: 'ISACA Knowledge Board',
    publisher: 'ISACA',
    edition: '30th Edition',
    year: 2026,
    certificationId: 'cisa',
    paperCode: 'CISA-EXAM',
    topic: 'Information Systems Audit, Governance, Acquisition, Operations & Asset Protection',
    syllabusCoverage: 'Official authoritative guide mapped to the 5 CISA job practice domains.',
    isOfficialMaterial: true,
    officialLink: 'https://www.isaca.org/bookstore/cisa-exam-resources',
    purchaseLink: 'https://www.isaca.org/bookstore'
  },

  // Banking Books
  {
    id: 'book-jaiib-1',
    title: 'IIBF Official Courseware: Indian Economy & Indian Financial System',
    author: 'Indian Institute of Banking & Finance (IIBF)',
    publisher: 'Macmillan Education India',
    edition: 'Revised Edition 2025–2026',
    year: 2026,
    certificationId: 'jaiib',
    paperCode: 'JAIIB-IEIFS',
    topic: 'Macroeconomics, Financial Architecture, RBI Monetary Policy & Reforms',
    syllabusCoverage: 'Official textbook for JAIIB Paper 1 directly prescribed by IIBF.',
    isOfficialMaterial: true,
    officialLink: 'https://www.iibf.org.in',
    purchaseLink: 'https://www.macmillaneducation.in'
  },
  {
    id: 'book-jaiib-2',
    title: 'IIBF Official Courseware: Principles & Practices of Banking (PPB)',
    author: 'Indian Institute of Banking & Finance (IIBF)',
    publisher: 'Macmillan Education India',
    edition: 'Revised Edition 2025–2026',
    year: 2026,
    certificationId: 'jaiib',
    paperCode: 'JAIIB-PPB',
    topic: 'Bank Operations, Lending Norms, Priority Sector, KYC/AML & Digital Channels',
    syllabusCoverage: 'Official master text for JAIIB Paper 2 covering all banking operations and regulations.',
    isOfficialMaterial: true,
    officialLink: 'https://www.iibf.org.in',
    purchaseLink: 'https://www.macmillaneducation.in'
  }
];
