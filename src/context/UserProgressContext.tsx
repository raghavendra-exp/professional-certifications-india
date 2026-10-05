import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ErrorLogItem, MockTestResult, CpeRecord, UserCertificationProfile, MistakeType } from '../types';

interface UserProgressContextType {
  errorLogs: ErrorLogItem[];
  addErrorLog: (item: Omit<ErrorLogItem, 'id' | 'timestamp' | 'resolved'>) => void;
  updateMistakeType: (id: string, mistakeType: MistakeType) => void;
  resolveErrorLog: (id: string) => void;
  deleteErrorLog: (id: string) => void;
  
  mockResults: MockTestResult[];
  saveMockResult: (result: MockTestResult) => void;

  bookmarkedQuestions: string[];
  toggleBookmarkQuestion: (questionId: string) => void;
  isBookmarked: (questionId: string) => boolean;

  cpeRecords: CpeRecord[];
  addCpeRecord: (record: Omit<CpeRecord, 'id'>) => void;
  deleteCpeRecord: (id: string) => void;

  userProfile: UserCertificationProfile;
  updateUserProfile: (profile: Partial<UserCertificationProfile>) => void;
  addEnrolledCertification: (item: UserCertificationProfile['enrolledCertifications'][0]) => void;

  completedFlashcards: string[];
  toggleFlashcardMastered: (flashcardId: string) => void;
}

const UserProgressContext = createContext<UserProgressContextType | undefined>(undefined);

const initialProfile: UserCertificationProfile = {
  name: 'Candidate Aspirant',
  email: 'aspirant@certindia.org',
  targetCertifications: ['ca', 'cfa', 'frm', 'jaiib'],
  enrolledCertifications: [
    {
      certificationId: 'ca',
      currentLevel: 'Intermediate',
      registrationNumber: 'WRO0784920',
      examTargetDate: '2027-05-15',
      status: 'Preparing',
    },
    {
      certificationId: 'cfa',
      currentLevel: 'Level I',
      registrationNumber: 'CFA2026-9921',
      examTargetDate: '2027-02-20',
      status: 'Preparing',
    }
  ]
};

export const UserProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [errorLogs, setErrorLogs] = useState<ErrorLogItem[]>(() => {
    try {
      const data = localStorage.getItem('pca_errors');
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });

  const [mockResults, setMockResults] = useState<MockTestResult[]>(() => {
    try {
      const data = localStorage.getItem('pca_mocks');
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });

  const [bookmarkedQuestions, setBookmarkedQuestions] = useState<string[]>(() => {
    try {
      const data = localStorage.getItem('pca_bookmarks');
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });

  const [cpeRecords, setCpeRecords] = useState<CpeRecord[]>(() => {
    try {
      const data = localStorage.getItem('pca_cpe');
      return data ? JSON.parse(data) : [
        {
          id: 'cpe-1',
          certificationId: 'ca',
          activityTitle: 'National Conference on Ind AS & New Tax Regime',
          provider: 'ICAI Western India Regional Council (WIRC)',
          dateCompleted: '2026-08-14',
          hoursEarned: 6,
          certificateNumber: 'ICAI/CPE/2026/09281',
          cycleYear: '2026-2027'
        },
        {
          id: 'cpe-2',
          certificationId: 'cisa',
          activityTitle: 'Cloud Security Audit & NIST CSF 2.0 Web Workshop',
          provider: 'ISACA Mumbai Chapter',
          dateCompleted: '2026-09-02',
          hoursEarned: 4,
          certificateNumber: 'ISACA-IN-77492',
          cycleYear: '2026'
        }
      ];
    } catch {
      return [];
    }
  });

  const [userProfile, setUserProfile] = useState<UserCertificationProfile>(() => {
    try {
      const data = localStorage.getItem('pca_profile');
      return data ? JSON.parse(data) : initialProfile;
    } catch {
      return initialProfile;
    }
  });

  const [completedFlashcards, setCompletedFlashcards] = useState<string[]>(() => {
    try {
      const data = localStorage.getItem('pca_flashcards');
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('pca_errors', JSON.stringify(errorLogs));
  }, [errorLogs]);

  useEffect(() => {
    localStorage.setItem('pca_mocks', JSON.stringify(mockResults));
  }, [mockResults]);

  useEffect(() => {
    localStorage.setItem('pca_bookmarks', JSON.stringify(bookmarkedQuestions));
  }, [bookmarkedQuestions]);

  useEffect(() => {
    localStorage.setItem('pca_cpe', JSON.stringify(cpeRecords));
  }, [cpeRecords]);

  useEffect(() => {
    localStorage.setItem('pca_profile', JSON.stringify(userProfile));
  }, [userProfile]);

  useEffect(() => {
    localStorage.setItem('pca_flashcards', JSON.stringify(completedFlashcards));
  }, [completedFlashcards]);

  const addErrorLog = (item: Omit<ErrorLogItem, 'id' | 'timestamp' | 'resolved'>) => {
    const newItem: ErrorLogItem = {
      ...item,
      id: 'err_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
      timestamp: new Date().toISOString(),
      resolved: false,
    };
    setErrorLogs(prev => [newItem, ...prev.filter(e => e.questionId !== item.questionId)]);
  };

  const updateMistakeType = (id: string, mistakeType: MistakeType) => {
    setErrorLogs(prev => prev.map(e => e.id === id ? { ...e, mistakeType } : e));
  };

  const resolveErrorLog = (id: string) => {
    setErrorLogs(prev => prev.map(e => e.id === id ? { ...e, resolved: true } : e));
  };

  const deleteErrorLog = (id: string) => {
    setErrorLogs(prev => prev.filter(e => e.id !== id));
  };

  const saveMockResult = (result: MockTestResult) => {
    setMockResults(prev => [result, ...prev]);
  };

  const toggleBookmarkQuestion = (questionId: string) => {
    setBookmarkedQuestions(prev => 
      prev.includes(questionId) ? prev.filter(id => id !== questionId) : [...prev, questionId]
    );
  };

  const isBookmarked = (questionId: string) => bookmarkedQuestions.includes(questionId);

  const addCpeRecord = (record: Omit<CpeRecord, 'id'>) => {
    const newRecord: CpeRecord = {
      ...record,
      id: 'cpe_' + Date.now(),
    };
    setCpeRecords(prev => [newRecord, ...prev]);
  };

  const deleteCpeRecord = (id: string) => {
    setCpeRecords(prev => prev.filter(r => r.id !== id));
  };

  const updateUserProfile = (patch: Partial<UserCertificationProfile>) => {
    setUserProfile(prev => ({ ...prev, ...patch }));
  };

  const addEnrolledCertification = (item: UserCertificationProfile['enrolledCertifications'][0]) => {
    setUserProfile(prev => ({
      ...prev,
      enrolledCertifications: [
        ...prev.enrolledCertifications.filter(c => c.certificationId !== item.certificationId),
        item
      ]
    }));
  };

  const toggleFlashcardMastered = (flashcardId: string) => {
    setCompletedFlashcards(prev => 
      prev.includes(flashcardId) ? prev.filter(id => id !== flashcardId) : [...prev, flashcardId]
    );
  };

  return (
    <UserProgressContext.Provider value={{
      errorLogs,
      addErrorLog,
      updateMistakeType,
      resolveErrorLog,
      deleteErrorLog,
      mockResults,
      saveMockResult,
      bookmarkedQuestions,
      toggleBookmarkQuestion,
      isBookmarked,
      cpeRecords,
      addCpeRecord,
      deleteCpeRecord,
      userProfile,
      updateUserProfile,
      addEnrolledCertification,
      completedFlashcards,
      toggleFlashcardMastered,
    }}>
      {children}
    </UserProgressContext.Provider>
  );
};

export const useUserProgress = (): UserProgressContextType => {
  const context = useContext(UserProgressContext);
  if (!context) {
    throw new Error('useUserProgress must be used within a UserProgressProvider');
  }
  return context;
};
