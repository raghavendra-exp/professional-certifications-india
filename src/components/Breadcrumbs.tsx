import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import type { BreadcrumbItem } from '../types';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (path: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  const { isHindi } = useLanguage();

  return (
    <nav className="flex items-center space-x-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 py-2.5 px-4 bg-slate-50/80 dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-slate-800/80 overflow-x-auto whitespace-nowrap scrollbar-thin">
      <button
        onClick={() => onNavigate('dashboard')}
        className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shrink-0 font-medium"
      >
        <Home className="w-3.5 h-3.5" />
        <span>{isHindi ? 'होम' : 'Home'}</span>
      </button>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 shrink-0" />
            {isLast ? (
              <span className="font-semibold text-slate-900 dark:text-slate-100 truncate max-w-[200px] sm:max-w-xs">
                {isHindi && item.hindiLabel ? item.hindiLabel : item.label}
              </span>
            ) : (
              <button
                onClick={() => onNavigate(item.path)}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors shrink-0"
              >
                {isHindi && item.hindiLabel ? item.hindiLabel : item.label}
              </button>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
