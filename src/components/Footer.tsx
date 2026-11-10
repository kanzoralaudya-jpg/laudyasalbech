import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
  profileName?: string;
}

export const Footer: React.FC<FooterProps> = ({ lang, profileName = 'Kanzora Laudya' }) => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Asia/Jakarta timezone
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setCurrentTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-neutral-500 dark:text-neutral-400">
          {/* Brand & Copyright */}
          <div className="flex items-center gap-3">
            <span className="font-bold text-neutral-950 dark:text-white">
              {profileName}
            </span>
            <span aria-hidden="true">·</span>
            <span>© {new Date().getFullYear()}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'id' ? 'Hak Cipta Dilindungi' : 'All Rights Reserved'}</span>
          </div>

          {/* Real Live Time in Jakarta */}
          <div className="flex items-center gap-2 font-mono">
            <span>Jakarta (WIB):</span>
            <span className="tabular-nums font-semibold text-neutral-800 dark:text-neutral-200">
              {currentTime || '02:46:24'}
            </span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            <span>{lang === 'id' ? 'Kembali ke Atas' : 'Back to top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
