import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowUpRight, Calendar, User, Building, ExternalLink } from 'lucide-react';
import { Language, Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  lang: Language;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  lang,
  onClose,
  onOpenConsultation,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-neutral-950/75 backdrop-blur-sm animate-in fade-in duration-200"
    >
      {/* Click outside to dismiss backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Surface */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl overflow-y-auto z-10 flex flex-col">
        {/* Sticky Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
            <span>{project.client}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 space-y-10">
          {/* Header Title & Subtitle */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white [text-wrap:balance]">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300">
              {project.subtitle[lang]}
            </p>

            {/* Quick Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-neutral-200 dark:border-neutral-800 text-xs">
              <div>
                <span className="text-neutral-500 dark:text-neutral-400 block mb-0.5">
                  {lang === 'id' ? 'Klien' : 'Client'}
                </span>
                <span className="font-medium text-neutral-900 dark:text-neutral-100">
                  {project.client}
                </span>
              </div>
              <div>
                <span className="text-neutral-500 dark:text-neutral-400 block mb-0.5">
                  {lang === 'id' ? 'Peran' : 'Role'}
                </span>
                <span className="font-medium text-neutral-900 dark:text-neutral-100">
                  {project.role}
                </span>
              </div>
              <div>
                <span className="text-neutral-500 dark:text-neutral-400 block mb-0.5">
                  {lang === 'id' ? 'Tahun' : 'Timeline'}
                </span>
                <span className="font-medium text-neutral-900 dark:text-neutral-100">
                  {project.year}
                </span>
              </div>
              <div>
                <span className="text-neutral-500 dark:text-neutral-400 block mb-0.5">
                  {lang === 'id' ? 'Kategori' : 'Discipline'}
                </span>
                <span className="font-medium text-neutral-900 dark:text-neutral-100">
                  {project.categoryLabel[lang]}
                </span>
              </div>
            </div>
          </div>

          {/* Full-bleed Photo Container with styled fallback */}
          <div className="rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 aspect-[16/9]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Quantified Impact Numbers Banner */}
          <div className="p-6 bg-neutral-50 dark:bg-neutral-800/40 border border-neutral-200 dark:border-neutral-800 rounded-xl">
            <div className="text-xs font-mono uppercase text-neutral-500 dark:text-neutral-400 mb-4">
              {lang === 'id' ? 'Hasil & Metrik Terukur' : 'Quantified Business Impact'}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-neutral-950 dark:text-white">
                    {metric.value}
                  </div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400">
                    {metric.label[lang]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deep Narrative: Challenge vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-neutral-950 dark:text-white">
                {lang === 'id' ? 'Tantangan Utama' : 'The Core Challenge'}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {project.challenge[lang]}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-neutral-950 dark:text-white">
                {lang === 'id' ? 'Pendekatan & Solusi' : 'Architectural Solution'}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {project.solution[lang]}
              </p>
            </div>
          </div>

          {/* Impact Narrative */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-neutral-950 dark:text-white">
              {lang === 'id' ? 'Dampak Jangka Panjang' : 'Long-Term Impact'}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {project.impact[lang]}
            </p>
          </div>

          {/* Deliverables Checklist */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-neutral-950 dark:text-white">
              {lang === 'id' ? 'Artefak & Deliverables' : 'Key Artifacts Delivered'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.deliverables.map((item, dIdx) => (
                <div
                  key={dIdx}
                  className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-neutral-950 dark:text-white shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Arsenal */}
          <div className="space-y-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
            <div className="text-xs text-neutral-500 dark:text-neutral-400">
              {lang === 'id' ? 'Stack & Perangkat Kerja' : 'Stack & Tools'}:
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="sticky bottom-0 z-20 flex items-center justify-between px-6 py-4 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
          <div className="text-xs text-neutral-500 dark:text-neutral-400">
            {lang === 'id' ? 'Ingin arsitektur serupa untuk produk Anda?' : 'Need a similar architecture for your product?'}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white"
            >
              {lang === 'id' ? 'Tutup' : 'Close'}
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-neutral-950 hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 rounded-md transition-colors"
            >
              <span>{lang === 'id' ? 'Diskusikan Solusi Serupa' : 'Discuss Similar Solution'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
