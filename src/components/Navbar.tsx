import React from 'react';
import { 
  Search, 
  Sun, 
  Moon, 
  Languages, 
  Menu, 
  ShieldCheck, 
  Compass, 
  CheckCircle2 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenSearch: () => void;
  onToggleSidebar: () => void;
  onNavigate: (view: string, id?: string) => void;
  currentView: string;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenSearch, 
  onToggleSidebar, 
  onNavigate 
}) => {
  const { language, setLanguage, isHindi } = useLanguage();
  const { theme, setTheme, isDark } = useTheme();

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Mobile Menu Toggle + Brand Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onToggleSidebar}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden focus:outline-hidden"
              aria-label="Toggle Navigation"
            >
              <Menu className="w-5 h-5" />
            </button>

            <button
              onClick={() => onNavigate('dashboard')}
              className="flex items-center gap-2.5 text-left group"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-amber-500 flex items-center justify-center shadow-md shadow-blue-500/20 text-white shrink-0 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-sm sm:text-base tracking-tight bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-300 bg-clip-text text-transparent">
                    {isHindi ? 'व्यावसायिक प्रमाणपत्र भारत' : 'PROFESSIONAL EXAMS INDIA'}
                  </span>
                  <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
                    MASTER
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-medium truncate max-w-[210px] sm:max-w-md">
                  CA • CS • CMA • CFA • FRM • ACCA • CISA • Banking • Statutory
                </span>
              </div>
            </button>
          </div>

          {/* Middle: Search Box Trigger */}
          <div className="hidden md:flex flex-1 max-w-md mx-4 lg:mx-8">
            <button
              onClick={onOpenSearch}
              className="w-full flex items-center justify-between px-3.5 py-2 text-xs text-slate-400 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-xl transition-all shadow-2xs hover:border-blue-400 dark:hover:border-blue-500"
            >
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-slate-400" />
                <span className="text-slate-500 dark:text-slate-400">
                  {isHindi ? 'खोजें (Ctrl + K)...' : 'Search certifications, questions, statutes (Ctrl + K)...'}
                </span>
              </div>
              <kbd className="hidden lg:inline-flex px-1.5 py-0.5 text-[10px] font-mono font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded shadow-xs">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* Right: Quick Action Tools */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Quick Mobile Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl md:hidden"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Which Certification Wizard Quick Button */}
            <button
              onClick={() => onNavigate('which_certification')}
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/60 rounded-xl border border-blue-200/80 dark:border-blue-800/80 transition-colors"
            >
              <Compass className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>{isHindi ? 'कैरियर गाइड' : 'Certification Finder'}</span>
            </button>

            {/* Bilingual Toggle (EN ↔ हिंदी) */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-blue-500 transition-all"
              title={isHindi ? 'Switch to English' : 'हिंदी में बदलें'}
            >
              <Languages className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>{language === 'en' ? 'हिंदी' : 'ENG'}</span>
            </button>

            {/* Dark / Light / System Mode Toggle */}
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Portfolio Status Badge */}
            <button
              onClick={() => onNavigate('my_profile')}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>{isHindi ? 'प्रोफाइल' : 'Portfolio'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
