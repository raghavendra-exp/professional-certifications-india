export type CategoryType = 
  | 'ACCOUNTING_FINANCE'
  | 'COMPANY_SECRETARIAL'
  | 'COST_MANAGEMENT_ACCOUNTING'
  | 'AUDIT'
  | 'TAXATION'
  | 'INVESTMENT'
  | 'RISK_MANAGEMENT'
  | 'BANKING'
  | 'INSURANCE'
  | 'SECURITIES_CAPITAL_MARKETS'
  | 'ACTUARIAL'
  | 'INFORMATION_TECHNOLOGY'
  | 'CYBERSECURITY'
  | 'DATA_AI'
  | 'PROJECT_MANAGEMENT'
  | 'HUMAN_RESOURCES'
  | 'PROCUREMENT'
  | 'QUALITY'
  | 'COMPLIANCE'
  | 'LEGAL_CORPORATE_LAW'
  | 'STATUTORY_REGULATORY'
  | 'HEALTHCARE'
  | 'OTHER_PROFESSIONAL';

export interface BreadcrumbItem {
  label: string;
  hindiLabel?: string;
  path: string;
  active?: boolean;
}

export interface EligibilityRule {
  minimumEducation: string;
  hindiMinimumEducation?: string;
  minimumAge?: number | string;
  streamRequirements?: string;
  hindiStreamRequirements?: string;
  provisionalRegistrationPermitted?: boolean;
  exemptionsAvailable?: string;
  hindiExemptionsAvailable?: string;
}

export interface FeeStructure {
  registrationFee: string;
  examinationFee: string;
  trainingFee?: string;
  membershipFee?: string;
  estimatedPreparationCost: string;
  currency: string;
  officialFeeNote: string;
  hindiOfficialFeeNote?: string;
}

export interface PracticalTraining {
  required: boolean;
  duration: string;
  hindiDuration?: string;
  name: string;
  hindiName?: string;
  timing: string; // e.g. "After Inter, Before Final"
  details: string;
  hindiDetails?: string;
  stipendGuidelines?: string;
}

export interface RenewalCpeRequirements {
  cpeHoursPerYear: number | string;
  validityYears?: number | string;
  renewalFee?: string;
  details: string;
  hindiDetails?: string;
}

export interface LatestNotification {
  title: string;
  hindiTitle?: string;
  date: string;
  link: string;
  summary: string;
  hindiSummary?: string;
  schemeVersion: string;
}

export interface Topic {
  id: string;
  name: string;
  hindiName?: string;
  weightage?: string;
  keyConcepts: string[];
  hindiKeyConcepts?: string[];
  officialModuleRef?: string;
}

export interface Domain {
  id: string;
  name: string;
  hindiName?: string;
  weightagePercent?: string;
  topics: Topic[];
}

export interface Paper {
  id: string;
  paperNumber: number | string;
  code: string;
  name: string;
  hindiName?: string;
  marks: number;
  examDurationHours: number;
  examMode: 'Pen & Paper' | 'Pen & Paper (OMR)' | 'Pen & Paper (Open Book)' | 'CBT (Computer Based)' | 'Hybrid' | 'Online Proctored';
  questionPattern: 'Descriptive' | 'Objective (MCQ)' | 'Mixed (70% Descriptive + 30% MCQ)' | 'Case Study Based';
  negativeMarking: boolean;
  negativeMarkingValue?: number; // e.g. 0.25
  domains: Domain[];
}

export interface Level {
  id: string;
  name: string;
  hindiName?: string;
  examFrequency: string; // e.g. "Thrice a year: Jan, May, Sep" or "Quarterly"
  totalPapers: number;
  passingRules: string;
  hindiPassingRules?: string;
  papers: Paper[];
}

export interface Certification {
  id: string;
  acronym: string;
  name: string;
  hindiName: string;
  category: CategoryType;
  categoryLabel: string;
  hindiCategoryLabel: string;
  institute: string;
  hindiInstitute: string;
  country: 'India' | 'International' | 'Global / USA' | 'Global / UK';
  establishedYear: number;
  officialUrl: string;
  badgeColor: string;
  tagline: string;
  hindiTagline: string;
  description: string;
  hindiDescription: string;
  latestNotification: LatestNotification;
  currentSchemeYear: string;
  levels: Level[];
  eligibility: EligibilityRule;
  attemptsLimit: string;
  hindiAttemptsLimit?: string;
  exemptions: string[];
  hindiExemptions?: string[];
  feeStructure: FeeStructure;
  passingCriteria: string;
  hindiPassingCriteria?: string;
  practicalTraining: PracticalTraining;
  membershipRequirements: string[];
  hindiMembershipRequirements?: string[];
  renewalCpeRequirements: RenewalCpeRequirements;
  careerOutcomes: string[];
  hindiCareerOutcomes?: string[];
  averageCompletionTime: string;
  globalRecognition: string;
  syllabusVersions: string[]; // ["latest.json", "2026.json", "2025.json"]
  tags: string[];
}

export type QuestionSourceType = 
  | 'OFFICIAL SAMPLE QUESTION' 
  | 'VERIFIED PYQ' 
  | 'ORIGINAL PRACTICE' 
  | 'PYQ-STYLE';

export interface Question {
  id: string;
  certificationId: string;
  levelId: string;
  paperId: string;
  domainId: string;
  topicId: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  question: string;
  hindiQuestion?: string;
  options: string[];
  hindiOptions?: string[];
  answer: number; // 0-indexed option
  explanation: string;
  hindiExplanation?: string;
  sourceType: QuestionSourceType;
  source: string;
  tags: string[];
  negativeMarkingValue?: number;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  publisher: string;
  edition: string;
  year: number;
  certificationId: string;
  paperCode: string;
  topic: string;
  syllabusCoverage: string;
  hindiSyllabusCoverage?: string;
  isOfficialMaterial: boolean;
  officialLink: string;
  purchaseLink: string;
}

export interface Statute {
  id: string;
  name: string;
  hindiName: string;
  authority: string;
  year: number;
  currentStatus: 'CURRENT LAW' | 'AMENDED RECENTLY' | 'UNDER TRANSITION';
  keyAmendments: string[];
  effectiveDate: string;
  applicableCertifications: string[];
  officialSourceUrl: string;
  lastVerifiedDate: string;
  summary: string;
  hindiSummary: string;
  highYieldPoints: string[];
}

export interface StandardFramework {
  id: string;
  code: string;
  name: string;
  hindiName: string;
  authority: string;
  category: 'Accounting' | 'Auditing' | 'IT & Security' | 'Governance & Risk' | 'Banking & Prudential';
  summary: string;
  hindiSummary: string;
  officialSourceUrl: string;
  examRelevance: string[];
  practicalApplication: string;
  hindiPracticalApplication?: string;
}

export interface CurrentAffairUpdate {
  id: string;
  date: string;
  title: string;
  hindiTitle: string;
  type: 'CIRCULAR' | 'NOTIFICATION' | 'BUDGET_TAX' | 'SYLLABUS_CHANGE' | 'EXAM_DATE' | 'REGULATORY_CHANGE';
  categories: string[];
  certificationRelevance: string[];
  oldRule?: string;
  change?: string;
  newRule?: string;
  effectiveDate?: string;
  source: string;
  sourceUrl: string;
  lastVerifiedDate: string;
  summary: string;
  hindiSummary: string;
}

export interface CaseStudy {
  id: string;
  certificationId: string;
  level: string;
  paper: string;
  title: string;
  hindiTitle: string;
  facts: string[];
  hindiFacts: string[];
  question: string;
  hindiQuestion: string;
  analysis: string;
  hindiAnalysis: string;
  applicableRuleOrStandard: string;
  modelAnswer: string;
  hindiModelAnswer: string;
}

export interface Flashcard {
  id: string;
  category: string;
  title: string;
  hindiTitle: string;
  front: string;
  hindiFront: string;
  back: string;
  hindiBack: string;
  tags: string[];
}

export interface CareerPath {
  id: string;
  field: string;
  hindiField: string;
  description: string;
  stages: {
    level: string;
    certifications: string[];
    roles: string[];
    indicativeSalaryRange: string;
    focusAreas: string[];
  }[];
}

export type MistakeType = 
  | 'Conceptual' 
  | 'Calculation' 
  | 'Memory' 
  | 'Misread' 
  | 'Guess' 
  | 'Careless' 
  | 'Time management';

export interface ErrorLogItem {
  id: string;
  questionId: string;
  certificationId: string;
  paperId: string;
  domainId: string;
  userSelectedOption: number;
  correctOption: number;
  mistakeType: MistakeType;
  timestamp: string;
  notes?: string;
  resolved: boolean;
}

export interface MockTestResult {
  id: string;
  certificationId: string;
  levelId: string;
  paperId: string;
  testTitle: string;
  totalQuestions: number;
  attemptedQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  marksObtained: number;
  totalMarks: number;
  accuracyPercentage: number;
  timeSpentSeconds: number;
  timestamp: string;
  domainBreakdown: {
    domainId: string;
    domainName: string;
    total: number;
    correct: number;
    score: number;
  }[];
}

export interface CpeRecord {
  id: string;
  certificationId: string;
  activityTitle: string;
  provider: string;
  dateCompleted: string;
  hoursEarned: number;
  certificateNumber?: string;
  cycleYear: string;
}

export interface UserCertificationProfile {
  name: string;
  email: string;
  targetCertifications: string[];
  enrolledCertifications: {
    certificationId: string;
    currentLevel: string;
    registrationNumber?: string;
    examTargetDate?: string;
    status: 'Preparing' | 'Registered' | 'Passed' | 'Member';
  }[];
}
