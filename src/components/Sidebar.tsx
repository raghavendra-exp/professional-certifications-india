import React from 'react';
import { 
  LayoutDashboard, 
  Award, 
  BookOpen, 
  FileText, 
  HelpCircle, 
  Clock, 
  Cpu, 
  Briefcase, 
  Scale, 
  ShieldAlert, 
  Calculator, 
  TrendingUp, 
  RotateCcw, 
  UserCheck, 
  Bookmark, 
  Calendar, 
  Layers, 
  Compass, 
  Sparkles,
  ChevronDown,
  Sun,
  Moon
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { certificationsData } from '../data/certifications';

interface SidebarProps {
  currentView: string;
  selectedCertId?: string;
  onNavigate: (view: string, id?: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  currentView, 
  selectedCertId, 
  onNavigate, 
  isOpen, 
  onClose 
}) => {
  const { isHindi } = useLanguage();
  const { isDark, setTheme } = useTheme();
  const [certsExpanded, setCertsExpanded] = React.useState(true);

  const mainNavItems = [
    { id: 'dashboard', label: 'Dashboard', hindiLabel: 'डैशबोर्ड', icon: LayoutDashboard },
    { id: 'practice_hub', label: 'Practice Hub (1000+ Qs)', hindiLabel: 'अभ्यास केंद्र (1000+ प्रश्न)', icon: HelpCircle, badge: 'Active' },
    { id: 'mock_test_hub', label: 'Official Mock Tests', hindiLabel: 'आधिकारिक मॉक टेस्ट', icon: Clock, badge: 'Live Timer' },
    { id: 'syllabus_engine', label: 'Syllabus Engine', hindiLabel: 'पाठ्यक्रम इंजन', icon: Layers },
    { id: 'case_study_lab', label: 'Case Study Lab', hindiLabel: 'केस स्टडी लैब', icon: Briefcase },
    { id: 'practical_simulators', label: 'Practical Simulators', hindiLabel: 'व्यावहारिक सिमुलेटर', icon: Calculator, badge: 'Tax & Ratios' },
    { id: 'statutes_library', label: 'Law & Regulation Library', hindiLabel: 'कानून एवं संविधि लाइब्रेरी', icon: Scale },
    { id: 'books_library', label: 'Book & Material Library', hindiLabel: 'पुस्तक एवं सामग्री लाइब्रेरी', icon: BookOpen },
    { id: 'regulatory_updates', label: 'Regulatory Change Tracker', hindiLabel: 'नियामक बदलाव ट्रैकर', icon: FileText, badge: 'New' },
    { id: 'tax_updates', label: 'Tax & GST Update Center', hindiLabel: 'कर एवं जीएसटी अपडेट', icon: TrendingUp },
    { id: 'current_affairs', label: 'Professional Current Affairs', hindiLabel: 'व्यावसायिक समसामयिकी', icon: Sparkles },
    { id: 'revision_flashcards', label: 'Revision & Flashcards', hindiLabel: 'पुनरीक्षण एवं फ्लैशकार्ड', icon: RotateCcw },
    { id: 'error_notebook', label: 'Error Notebook', hindiLabel: 'त्रुटि नोटबुक', icon: ShieldAlert },
    { id: 'study_planner', label: 'Study Planner', hindiLabel: 'अध्ययन योजनाकार', icon: Calendar },
    { id: 'which_certification', label: 'Which Cert Should I Take?', hindiLabel: 'मुझे कौन सा प्रमाणपत्र लेना चाहिए?', icon: Compass },
    { id: 'career_explorer', label: 'Career Path Finder', hindiLabel: 'करियर मार्ग खोजक', icon: Briefcase },
    { id: 'certification_comparison', label: 'Certification Comparison', hindiLabel: 'प्रमाणपत्र तुलना मैट्रिक्स', icon: Bookmark },
    { id: 'renewal_tracker', label: 'Renewal & CPE / CPD Tracker', hindiLabel: 'नवीनीकरण एवं सीपीई ट्रैकर', icon: UserCheck },
    { id: 'my_profile', label: 'My Certification Portfolio', hindiLabel: 'मेरा सर्टिफिकेशन पोर्टफोलियो', icon: Award },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-xs lg:hidden transition-opacity"
        />
      )}

      {/* Sidebar Panel */}
      <aside
        className={`fixed lg:sticky top-16 bottom-0 left-0 z-40 w-72 lg:h-[calc(100vh-4rem)] lg:shrink-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } flex flex-col`}
      >
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-6 scrollbar-thin">
          {/* Main Navigation Tools */}
          <div>
            <div className="px-3 pb-2 text-[11px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase">
              {isHindi ? 'मुख्य नेविगेशन' : 'Platform Modules'}
            </div>
            <div className="space-y-1">
              {mainNavItems.map(item => {
                const Icon = item.icon;
                const isActive = currentView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      onClose();
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-xl transition-all ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-400 dark:text-slate-500'}`} />
                      <span className="truncate">{isHindi ? item.hindiLabel : item.label}</span>
                    </div>
                    {item.badge && (
                      <span
                        className={`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-tight shrink-0 ${
                          isActive
                            ? 'bg-white/20 text-white'
                            : 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Master Certifications List */}
          <div>
            <button
              onClick={() => setCertsExpanded(!certsExpanded)}
              className="w-full flex items-center justify-between px-3 pb-2 text-[11px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase hover:text-slate-600 dark:hover:text-slate-300"
            >
              <span>{isHindi ? 'सभी प्रमाणपत्र' : 'All Certifications'}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${certsExpanded ? 'rotate-180' : ''}`} />
            </button>

            {certsExpanded && (
              <div className="space-y-0.5 mt-1">
                {certificationsData.map(cert => {
                  const isSelected = currentView === 'certification_detail' && selectedCertId === cert.id;
                  return (
                    <button
                      key={cert.id}
                      onClick={() => {
                        onNavigate('certification_detail', cert.id);
                        onClose();
                      }}
                      className={`w-full flex items-center justify-between px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                        isSelected
                          ? 'bg-slate-200/80 dark:bg-slate-800 text-blue-700 dark:text-blue-400 font-semibold'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{ backgroundColor: cert.badgeColor }}
                        />
                        <span className="truncate">{cert.acronym} — {cert.name}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono shrink-0 ml-1">
                        {cert.country === 'India' ? 'IN' : 'GLB'}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Footer Info */}
        <div className="p-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-[11px] text-slate-500 dark:text-slate-400 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-slate-700 dark:text-slate-300">PWA & Offline Ready</span>
            <span className="px-1.5 py-0.5 rounded text-[9px] bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">
              v2026.1
            </span>
          </div>

          {/* Theme Quick Switcher in Sidebar */}
          <button
            type="button"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/80 transition-colors text-xs font-medium cursor-pointer"
            aria-label="Toggle dark/light theme"
          >
            <span className="flex items-center gap-1.5">
              {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-600 dark:text-slate-300" />}
              <span>{isDark ? (isHindi ? 'डार्क मोड' : 'Dark Mode') : (isHindi ? 'लाइट मोड' : 'Light Mode')}</span>
            </span>
            <span className="text-[10px] text-blue-600 dark:text-blue-400 font-bold">
              {isDark ? (isHindi ? 'लाइट में बदलें' : 'Switch to Light') : (isHindi ? 'डार्क में बदलें' : 'Switch to Dark')}
            </span>
          </button>

          <p className="text-[10px] text-slate-400">
            {isHindi ? 'कॉपीराइट-सुरक्षित आधिकारिक अध्ययन सामग्री' : 'Copyright-Safe Official Resources'}
          </p>
        </div>
      </aside>
    </>
  );
};
