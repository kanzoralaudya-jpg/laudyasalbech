import React from 'react';
import { Quote } from 'lucide-react';
import { Language } from '../types';
import { testimonialsData } from '../data/portfolioData';

interface TestimonialsSectionProps {
  lang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ lang }) => {
  return (
    <section className="py-20 lg:py-24 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100/30 dark:bg-neutral-900/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-neutral-200 dark:border-neutral-800">
          <div className="space-y-2">
            <div className="text-xs uppercase font-mono tracking-wider text-neutral-500 dark:text-neutral-400">
              05. {lang === 'id' ? 'Kesaksian Kolaborator' : 'Partner Endorsements'}
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white [text-wrap:balance]">
              {lang === 'id'
                ? 'Pengalaman bekerja bersama para pemimpin teknik & produk.'
                : 'Direct collaboration feedback from engineering & product executives.'}
            </h2>
          </div>
          <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
            {lang === 'id' ? '100% Terverifikasi' : '100% Verified Outcomes'}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <Quote className="w-6 h-6 text-neutral-400 dark:text-neutral-600" />
                <p className="text-base text-neutral-800 dark:text-neutral-200 leading-relaxed italic">
                  "{item.quote[lang]}"
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-neutral-950 dark:text-white">
                    {item.author}
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {item.title} · {item.organization}
                  </p>
                </div>

                <div className="text-xs font-mono font-semibold text-neutral-900 dark:text-neutral-100 tabular-nums">
                  {item.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
