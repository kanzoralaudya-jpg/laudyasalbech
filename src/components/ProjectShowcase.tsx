import React, { useState } from 'react';
import { ArrowUpRight, Eye, Edit3, Beaker, Users, Brain, Laptop, BookOpen } from 'lucide-react';
import { Language, Project, ProjectCategory, EditableProfileData } from '../types';

interface ProjectShowcaseProps {
  lang: Language;
  projects: Project[];
  profile?: EditableProfileData;
  onSelectProject: (project: Project) => void;
  onEditClick?: () => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  lang,
  projects,
  profile,
  onSelectProject,
  onEditClick,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const categories: { id: ProjectCategory; label: { id: string; en: string } }[] = [
    { id: 'all', label: { id: 'Semua Proyek', en: 'All Works' } },
    { id: 'product', label: { id: 'Desain Produk & Sistem', en: 'Product & Systems' } },
    { id: 'engineering', label: { id: 'Rekayasa Frontend', en: 'Frontend Engineering' } },
    { id: 'mobile', label: { id: 'Aplikasi Mobile', en: 'Mobile Applications' } },
    { id: 'system', label: { id: 'Web Editorial & Brand', en: 'Editorial & Brand' } },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'all') return true;
    return project.category === activeCategory;
  });

  const highSchoolText =
    profile?.highSchoolExperience?.[lang] ||
    (lang === 'id'
      ? 'Selama SMA, saya menempuh pendidikan di jurusan IPA yang memberikan banyak pengalaman dan pengetahuan baru. Saya belajar berbagai materi, melakukan kegiatan praktikum, serta melatih kemampuan berpikir kritis dan bekerja sama. Walaupun berasal dari jurusan IPA, saya memiliki keinginan untuk mencoba hal baru dan memperluas wawasan di bidang teknologi.'
      : 'During high school, I studied Natural Sciences (IPA), which provided me with diverse learning experiences and new insights. I studied science curricula, conducted laboratory practicums, and honed my critical thinking and collaborative abilities. Despite my background in natural sciences, I harbor a strong drive to explore new fields and expand my horizon in information technology.');

  return (
    <section id="pengalaman-sma" className="py-20 lg:py-28 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-neutral-200 dark:border-neutral-800">
          <div className="space-y-3 max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase font-mono tracking-wider text-neutral-500 dark:text-neutral-400">
                01. {lang === 'id' ? 'Pengalaman Selama SMA' : 'High School Experience & Foundation'}
              </span>
              {onEditClick && (
                <button
                  onClick={onEditClick}
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors"
                >
                  <Edit3 className="w-3 h-3" />
                  <span>{lang === 'id' ? 'Edit Tulisan' : 'Edit Text'}</span>
                </button>
              )}
            </div>

            {/* Title requested by user */}
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white [text-wrap:balance]">
              {lang === 'id' ? 'Pengalaman Selama SMA' : 'High School Foundation & Experience'}
            </h2>

            {/* Exact paragraph requested by user */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed pt-1">
              {highSchoolText}
            </p>
          </div>

          {/* Interactive filter controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
                }`}
              >
                {cat.label[lang]}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Pillars of SMA Experience Card */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl space-y-2 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white">
              <Beaker className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-neutral-950 dark:text-white">
              {lang === 'id' ? 'Praktikum & Sains' : 'Laboratory Practicum'}
            </h4>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {lang === 'id'
                ? 'Melakukan berbagai kegiatan eksperimen dan praktikum ilmiah jurusan IPA di SMA Negeri 01 Salem.'
                : 'Conducted rigorous scientific experiments and laboratory practicums at SMA Negeri 01 Salem.'}
            </p>
          </div>

          <div className="p-5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl space-y-2 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white">
              <Brain className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-neutral-950 dark:text-white">
              {lang === 'id' ? 'Berpikir Kritis' : 'Critical Thinking'}
            </h4>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {lang === 'id'
                ? 'Melatih ketajaman analisis matematis, pemecahan masalah kompleks, dan logika deduktif.'
                : 'Honed mathematical analysis, complex problem solving, and structured deductive logic.'}
            </p>
          </div>

          <div className="p-5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl space-y-2 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white">
              <Users className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-neutral-950 dark:text-white">
              {lang === 'id' ? 'Kerja Sama Tim' : 'Team Collaboration'}
            </h4>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {lang === 'id'
                ? 'Terbiasa bekerja dalam kelompok, berdiskusi memecahkan studi kasus, dan presentasi bersama.'
                : 'Proven ability to collaborate in groups, resolve academic challenges, and deliver presentations.'}
            </p>
          </div>

          <div className="p-5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl space-y-2 shadow-xs">
            <div className="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white">
              <Laptop className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-neutral-950 dark:text-white">
              {lang === 'id' ? 'Eksplorasi Teknologi' : 'Tech Curiosity'}
            </h4>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {lang === 'id'
                ? 'Dorongan kuat mencoba hal baru dan memperluas wawasan ke bidang sistem informasi & konsultasi TI.'
                : 'Strong motivation to explore new frontiers and expand horizons into Information Systems.'}
            </p>
          </div>
        </div>

        {/* Bento Grid Layout for Works and Projects */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project, index) => {
            const isWide = index === 0 || index === 2;
            const colSpan = isWide ? 'lg:col-span-7' : 'lg:col-span-5';

            return (
              <article
                key={project.id}
                className={`${colSpan} group flex flex-col justify-between rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 overflow-hidden transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-600`}
              >
                {/* Media Container */}
                <div
                  className="relative aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-800 cursor-pointer"
                  onClick={() => onSelectProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-neutral-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-neutral-950/80 backdrop-blur-xs rounded-md shadow-lg">
                      <Eye className="w-3.5 h-3.5" />
                      <span>{lang === 'id' ? 'Buka Detail Kasus' : 'Open Case Study'}</span>
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    {/* Zero-Pill unboxed metadata with typographic separators */}
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
                      <span>{project.client}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.role}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 dark:text-white group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Subtitle / Summary */}
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {project.summary[lang]}
                    </p>
                  </div>

                  {/* Impact Highlights & Action */}
                  <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 space-y-4">
                    {/* Unboxed tabular metrics */}
                    <div className="grid grid-cols-3 gap-2">
                      {project.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="space-y-0.5">
                          <div className="text-sm sm:text-base font-bold font-mono tabular-nums text-neutral-900 dark:text-neutral-100">
                            {metric.value}
                          </div>
                          <div className="text-[11px] text-neutral-500 dark:text-neutral-400 line-clamp-1">
                            {metric.label[lang]}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Unboxed tags and button */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="text-xs text-neutral-500 dark:text-neutral-400 flex flex-wrap gap-x-2">
                        {project.tags.slice(0, 3).map((tag, tIdx) => (
                          <span key={tIdx}>
                            {tag}
                            {tIdx < 2 && <span className="ml-2 text-neutral-300 dark:text-neutral-700">/</span>}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-950 dark:text-white hover:opacity-75 transition-opacity"
                      >
                        <span>{lang === 'id' ? 'Pelajari' : 'Read More'}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
