import React from 'react';
import { Home, Award, HelpCircle, Clock, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface MobileNavProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ currentView, onNavigate }) => {
  const { isHindi } = useLanguage();

  const navItems = [
    { id: 'dashboard', label: 'Home', hindiLabel: 'होम', icon: Home },
    { id: 'certifications_list', label: 'Certs', hindiLabel: 'प्रमाणपत्र', icon: Award },
    { id: 'practice_hub', label: 'Practice', hindiLabel: 'अभ्यास', icon: HelpCircle },
    { id: 'mock_test_hub', label: 'Mocks', hindiLabel: 'मॉक', icon: Clock },
    { id: 'my_profile', label: 'Profile', hindiLabel: 'प्रोफाइल', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 lg:hidden shadow-lg safe-bottom">
      <div className="grid grid-cols-5 h-14">
        {navItems.map(item => {
          const Icon = item.icon;
          const isActive = currentView === item.id || (item.id === 'certifications_list' && currentView === 'certification_detail');
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center gap-0.5 transition-colors ${
                isActive
                  ? 'text-blue-600 dark:text-blue-400 font-bold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-medium'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-[10px] truncate max-w-[58px]">
                {isHindi ? item.hindiLabel : item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
