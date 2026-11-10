import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { experiencesData } from '../data/portfolioData';

interface ExperienceTimelineProps {
  lang: Language;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ lang }) => {
  return (
    <section id="pendidikan" className="py-20 lg:py-28 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-neutral-200 dark:border-neutral-800">
          <div className="space-y-2">
            <div className="text-xs uppercase font-mono tracking-wider text-neutral-500 dark:text-neutral-400">
              04. {lang === 'id' ? 'Riwayat Pendidikan & Jejak Akademik' : 'Academic & Educational Journey'}
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white [text-wrap:balance]">
              {lang === 'id'
                ? 'Riwayat pendidikan lengkap dari TK hingga Universitas Komputama Cilacap.'
                : 'Comprehensive educational foundation from early schooling to higher education.'}
            </h2>
          </div>
          <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
            {lang === 'id' ? '5 Tahapan Jenjang Pendidikan' : '5 Educational Milestones'}
          </div>
        </div>

        {/* Editorial Timeline Rows */}
        <div className="mt-12 divide-y divide-neutral-200 dark:divide-neutral-800">
          {experiencesData.map((exp, idx) => (
            <div
              key={idx}
              className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start group"
            >
              {/* Timeline Column 1: Period & Company */}
              <div className="lg:col-span-4 space-y-1">
                <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 block tabular-nums">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold text-neutral-950 dark:text-white group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                  {exp.company}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {exp.location}
                </p>
              </div>

              {/* Timeline Column 2: Role & Narrative */}
              <div className="lg:col-span-8 space-y-4">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    {exp.role[lang]}
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                    {exp.description[lang]}
                  </p>
                </div>

                {/* Quantitative Achievements */}
                <div className="space-y-2 pt-2">
                  {exp.achievements.map((item, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                      <span className="text-neutral-400 dark:text-neutral-600 font-mono mt-0.5">―</span>
                      <span>{item[lang]}</span>
                    </div>
                  ))}
                </div>

                {/* Tech tags without pill boxes */}
                <div className="pt-3 flex flex-wrap items-center gap-x-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
                  {exp.technologies.map((tech, tIdx) => (
                    <span key={tIdx}>
                      {tech}
                      {tIdx < exp.technologies.length - 1 && <span className="ml-2 text-neutral-300 dark:text-neutral-700">·</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
