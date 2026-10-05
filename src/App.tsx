import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { UserProgressProvider } from './context/UserProgressContext';

import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { MobileNav } from './components/MobileNav';
import { Breadcrumbs } from './components/Breadcrumbs';
import { SearchModal } from './components/SearchModal';

import { Dashboard } from './pages/Dashboard';
import { CertificationDetail } from './pages/CertificationDetail';
import { PracticeHub } from './pages/PracticeHub';
import { MockTestHub } from './pages/MockTestHub';
import { SyllabusEngine } from './pages/SyllabusEngine';
import { CaseStudyLab } from './pages/CaseStudyLab';
import { PracticalSimulators } from './pages/PracticalSimulators';
import { StatutesLibrary } from './pages/StatutesLibrary';
import { BooksLibrary } from './pages/BooksLibrary';
import { UpdatesAndCurrentAffairs } from './pages/UpdatesAndCurrentAffairs';
import { RevisionAndFlashcards } from './pages/RevisionAndFlashcards';
import { ErrorNotebook } from './pages/ErrorNotebook';
import { StudyPlanner } from './pages/StudyPlanner';
import { WhichCertificationWizard } from './pages/WhichCertificationWizard';
import { CareerPathExplorer } from './pages/CareerPathExplorer';
import { CertificationComparison } from './pages/CertificationComparison';
import { RenewalAndCpeTracker } from './pages/RenewalAndCpeTracker';
import { MyProfile } from './pages/MyProfile';

import { certificationsData } from './data/certifications';
import type { BreadcrumbItem } from './types';

function MainAppContent() {
  const { isHindi } = useLanguage();
  const [currentView, setCurrentView] = useState<string>('dashboard');
  const [selectedCertId, setSelectedCertId] = useState<string>('ca');
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, selectedCertId]);

  const handleNavigate = (view: string, id?: string) => {
    if (view === 'search_open') {
      setIsSearchOpen(true);
      return;
    }
    if (id) {
      setSelectedCertId(id);
    }
    setCurrentView(view);
  };

  // Generate dynamic breadcrumbs (Section 54)
  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const certObj = certificationsData.find(c => c.id === selectedCertId);

    if (currentView === 'dashboard') {
      return [];
    }

    if (currentView === 'certification_detail' && certObj) {
      return [
        { label: 'Certifications', hindiLabel: 'प्रमाणपत्र', path: 'dashboard' },
        { label: certObj.categoryLabel, hindiLabel: certObj.hindiCategoryLabel, path: 'dashboard' },
        { label: `${certObj.acronym} — ${certObj.name}`, hindiLabel: certObj.hindiName, path: 'certification_detail', active: true },
      ];
    }

    if (currentView === 'practice_hub') {
      return [
        { label: 'Certifications', hindiLabel: 'प्रमाणपत्र', path: 'dashboard' },
        { label: certObj?.acronym || 'CA', hindiLabel: certObj?.hindiName || 'सीए', path: 'certification_detail' },
        { label: 'Practice Hub (1,000+ Questions)', hindiLabel: 'अभ्यास केंद्र (1000+ प्रश्न)', path: 'practice_hub', active: true },
      ];
    }

    if (currentView === 'mock_test_hub') {
      return [
        { label: 'Certifications', hindiLabel: 'प्रमाणपत्र', path: 'dashboard' },
        { label: certObj?.acronym || 'CA', hindiLabel: certObj?.hindiName || 'सीए', path: 'certification_detail' },
        { label: 'Official Mock Tests', hindiLabel: 'आधिकारिक मॉक टेस्ट', path: 'mock_test_hub', active: true },
      ];
    }

    if (currentView === 'syllabus_engine') {
      return [
        { label: 'Certifications', hindiLabel: 'प्रमाणपत्र', path: 'dashboard' },
        { label: certObj?.acronym || 'CA', path: 'certification_detail' },
        { label: 'Syllabus Engine', hindiLabel: 'पाठ्यक्रम इंजन', path: 'syllabus_engine', active: true },
      ];
    }

    if (currentView === 'practical_simulators') {
      return [
        { label: 'Interactive Labs', hindiLabel: 'इंटरएक्टिव लैब', path: 'dashboard' },
        { label: 'Practical Simulators (Tax, DuPont, VaR, Governance)', hindiLabel: 'व्यावहारिक सिमुलेटर', path: 'practical_simulators', active: true },
      ];
    }

    if (currentView === 'case_study_lab') {
      return [
        { label: 'Interactive Labs', hindiLabel: 'इंटरएक्टिव लैब', path: 'dashboard' },
        { label: 'Case Study Lab', hindiLabel: 'केस स्टडी लैब', path: 'case_study_lab', active: true },
      ];
    }

    if (currentView === 'statutes_library') {
      return [
        { label: 'Libraries', hindiLabel: 'लाइब्रेरी', path: 'dashboard' },
        { label: 'Law & Regulations Library', hindiLabel: 'कानून एवं संविधि लाइब्रेरी', path: 'statutes_library', active: true },
      ];
    }

    if (currentView === 'books_library') {
      return [
        { label: 'Libraries', hindiLabel: 'लाइब्रेरी', path: 'dashboard' },
        { label: 'Books & Official BOS Courseware', hindiLabel: 'पुस्तक एवं अध्ययन सामग्री', path: 'books_library', active: true },
      ];
    }

    if (currentView === 'regulatory_updates' || currentView === 'tax_updates' || currentView === 'current_affairs') {
      return [
        { label: 'Regulatory & News', hindiLabel: 'नियामक एवं समाचार', path: 'dashboard' },
        { label: 'Regulatory & Tax Change Tracker', hindiLabel: 'नियामक एवं कर बदलाव', path: 'regulatory_updates', active: true },
      ];
    }

    if (currentView === 'revision_flashcards') {
      return [
        { label: 'Revision', hindiLabel: 'पुनरीक्षण', path: 'dashboard' },
        { label: 'Spaced Repetition Flashcards', hindiLabel: 'फ्लैशकार्ड इंजन', path: 'revision_flashcards', active: true },
      ];
    }

    if (currentView === 'error_notebook') {
      return [
        { label: 'Diagnostics', hindiLabel: 'डायग्नोस्टिक्स', path: 'dashboard' },
        { label: 'Error Notebook & Mistake Taxonomy', hindiLabel: 'त्रुटि नोटबुक', path: 'error_notebook', active: true },
      ];
    }

    if (currentView === 'study_planner') {
      return [
        { label: 'Planning', hindiLabel: 'योजना', path: 'dashboard' },
        { label: 'Study Timetable Generator', hindiLabel: 'अध्ययन योजनाकार', path: 'study_planner', active: true },
      ];
    }

    if (currentView === 'which_certification') {
      return [
        { label: 'Discovery', hindiLabel: 'मार्गदर्शन', path: 'dashboard' },
        { label: 'Which Certification Should I Take?', hindiLabel: 'मुझे कौन सा प्रमाणपत्र लेना चाहिए?', path: 'which_certification', active: true },
      ];
    }

    if (currentView === 'career_explorer') {
      return [
        { label: 'Discovery', hindiLabel: 'मार्गदर्शन', path: 'dashboard' },
        { label: 'Career Progression Path Finder', hindiLabel: 'करियर मार्ग खोजक', path: 'career_explorer', active: true },
      ];
    }

    if (currentView === 'certification_comparison') {
      return [
        { label: 'Discovery', hindiLabel: 'मार्गदर्शन', path: 'dashboard' },
        { label: 'Multi-Criteria Comparison Matrix', hindiLabel: 'प्रमाणपत्र तुलना मैट्रिक्स', path: 'certification_comparison', active: true },
      ];
    }

    if (currentView === 'renewal_tracker') {
      return [
        { label: 'Membership', hindiLabel: 'सदस्यता', path: 'dashboard' },
        { label: 'Renewal & CPE / CPD Tracker', hindiLabel: 'नवीनीकरण एवं सीपीई ट्रैकर', path: 'renewal_tracker', active: true },
      ];
    }

    if (currentView === 'my_profile') {
      return [
        { label: 'Portfolio', hindiLabel: 'पोर्टफोलियो', path: 'dashboard' },
        { label: 'My Certification Profile & Standing', hindiLabel: 'मेरा प्रोफाइल', path: 'my_profile', active: true },
      ];
    }

    return [{ label: currentView, path: currentView, active: true }];
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors">
      {/* Top Navbar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        onNavigate={handleNavigate}
        currentView={currentView}
      />

      {/* Main Content Layout with Desktop Sidebar */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {/* Desktop Sidebar */}
        <Sidebar
          currentView={currentView}
          selectedCertId={selectedCertId}
          onNavigate={handleNavigate}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Content Container (padded left on lg to accommodate 18rem sidebar) */}
        <main className="flex-1 min-w-0 lg:pl-72 flex flex-col">
          {/* Reactive Clickable Breadcrumbs on Every Page */}
          {breadcrumbs.length > 0 && (
            <Breadcrumbs items={breadcrumbs} onNavigate={handleNavigate} />
          )}

          {/* Active View Router */}
          <div className="p-3 sm:p-6 lg:p-8 flex-1">
            {currentView === 'dashboard' && (
              <Dashboard
                onNavigate={handleNavigate}
                onOpenSearch={() => setIsSearchOpen(true)}
              />
            )}

            {currentView === 'certification_detail' && (
              <CertificationDetail
                certificationId={selectedCertId}
                onNavigate={handleNavigate}
              />
            )}

            {currentView === 'practice_hub' && (
              <PracticeHub
                initialCertId={selectedCertId}
                onNavigate={handleNavigate}
              />
            )}

            {currentView === 'mock_test_hub' && (
              <MockTestHub
                initialCertId={selectedCertId}
                onNavigate={handleNavigate}
              />
            )}

            {currentView === 'syllabus_engine' && (
              <SyllabusEngine
                initialCertId={selectedCertId}
                onNavigate={handleNavigate}
              />
            )}

            {currentView === 'practical_simulators' && (
              <PracticalSimulators />
            )}

            {currentView === 'case_study_lab' && (
              <CaseStudyLab onNavigate={handleNavigate} />
            )}

            {currentView === 'statutes_library' && (
              <StatutesLibrary />
            )}

            {currentView === 'books_library' && (
              <BooksLibrary />
            )}

            {(currentView === 'regulatory_updates' || currentView === 'tax_updates' || currentView === 'current_affairs') && (
              <UpdatesAndCurrentAffairs />
            )}

            {currentView === 'revision_flashcards' && (
              <RevisionAndFlashcards />
            )}

            {currentView === 'error_notebook' && (
              <ErrorNotebook />
            )}

            {currentView === 'study_planner' && (
              <StudyPlanner />
            )}

            {currentView === 'which_certification' && (
              <WhichCertificationWizard onNavigate={handleNavigate} />
            )}

            {currentView === 'career_explorer' && (
              <CareerPathExplorer />
            )}

            {currentView === 'certification_comparison' && (
              <CertificationComparison />
            )}

            {currentView === 'renewal_tracker' && (
              <RenewalAndCpeTracker />
            )}

            {currentView === 'my_profile' && (
              <MyProfile />
            )}
          </div>

          {/* Footer */}
          <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-8 px-4 sm:px-8 text-xs text-slate-500 space-y-4">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-800 dark:text-slate-200">
                  {isHindi ? 'व्यावसायिक प्रमाणपत्र भारत' : 'PROFESSIONAL CERTIFICATIONS INDIA'}
                </span>
                <span>•</span>
                <span>Master Preparation Ecosystem</span>
              </div>
              <div className="text-center sm:text-right">
                <p>
                  Official Curricula: ICAI • ICSI • ICMAI • CFA Institute • GARP • ACCA • ISACA • IIBF • SEBI • RBI
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Copyright-Safe Educational Platform • Statutory Information Grounded in Gazette Notifications
                </p>
              </div>
            </div>
          </footer>
        </main>
      </div>

      {/* Mobile Bottom Fixed Nav */}
      <MobileNav currentView={currentView} onNavigate={handleNavigate} />

      {/* Global Quick Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <UserProgressProvider>
          <MainAppContent />
        </UserProgressProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
