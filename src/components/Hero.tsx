import React from 'react';
import { ArrowDown, ArrowUpRight, GraduationCap, Target, Compass, Edit3 } from 'lucide-react';
import { Language, EditableProfileData } from '../types';

interface HeroProps {
  lang: Language;
  profile: EditableProfileData;
  onOpenConsultation: () => void;
  onEditClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  profile,
  onOpenConsultation,
  onEditClick,
}) => {
  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Split-Screen Hero Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Typographic Hierarchy & Aspirations */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Clean unboxed editorial kicker */}
              <div className="flex flex-wrap items-center gap-3 text-xs tracking-wider uppercase font-mono text-neutral-500 dark:text-neutral-400">
                <span>{profile.heroKicker[lang]}</span>
                <span aria-hidden="true">·</span>
                <span>Universitas Komputama Cilacap</span>
              </div>

              {/* Display Headline with balanced text wrap */}
              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-bold text-neutral-950 dark:text-white leading-[1.15] tracking-tight [text-wrap:balance]">
                {profile.headline[lang]}
              </h1>

              {/* Alasan Memilih Program Studi Sistem Informasi */}
              <div className="p-5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl space-y-2 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-neutral-900 dark:text-white uppercase tracking-wider">
                  <Compass className="w-4 h-4 text-neutral-950 dark:text-white" />
                  <span>{lang === 'id' ? 'Alasan Memilih Program Studi Sistem Informasi' : 'Reason for Choosing Information Systems'}</span>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {profile.studyReason[lang]}
                </p>
              </div>
            </div>

            {/* CTAs and quick availability notice */}
            <div className="pt-2 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#pengalaman-sma"
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-neutral-950 hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 rounded-md transition-colors whitespace-nowrap shadow-xs"
                >
                  <span>{lang === 'id' ? 'Pengalaman Selama SMA' : 'High School Journey'}</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-md transition-colors whitespace-nowrap"
                >
                  <span>{lang === 'id' ? 'Hubungi Kanzora' : 'Get in Touch'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onEditClick}
                  className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>{lang === 'id' ? 'Edit Teks & Gambar' : 'Edit Content'}</span>
                </button>
              </div>

              {/* Quiet unboxed status note */}
              <div className="text-xs text-neutral-500 dark:text-neutral-400 flex items-center gap-2 font-mono">
                <span>{profile.location}</span>
                <span aria-hidden="true">·</span>
                <span>{profile.availability[lang]}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Riwayat Pendidikan Track & Studio Portrait */}
          <div className="lg:col-span-5 space-y-6">
            {/* Visual Photo Container */}
            <div className="relative group rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-sm aspect-[16/10]">
              <img
                src={profile.heroImage}
                alt={`${profile.name} - Portrait`}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent pointer-events-none" />

              <button
                onClick={onEditClick}
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-neutral-950/80 backdrop-blur-md rounded-md shadow-md hover:bg-neutral-900"
              >
                <Edit3 className="w-3 h-3" />
                <span>{lang === 'id' ? 'Ganti Foto' : 'Change Photo'}</span>
              </button>

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <p className="font-bold text-base">{profile.name}</p>
                <p className="text-neutral-300 text-xs mt-0.5">{profile.title[lang]}</p>
              </div>
            </div>

            {/* Riwayat Pendidikan Card */}
            <div className="p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-950 dark:text-white">
                  <GraduationCap className="w-4 h-4 text-neutral-900 dark:text-white" />
                  <span>{lang === 'id' ? 'Riwayat Pendidikan' : 'Education History'}</span>
                </div>
                <span className="text-[11px] font-mono text-neutral-400">5 Tahapan</span>
              </div>

              {/* Education Stage Timeline */}
              <div className="space-y-3 pt-1">
                {profile.educationHistory.map((edu, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs">
                    <span className="font-mono text-neutral-400 dark:text-neutral-500 w-16 shrink-0 font-medium">
                      {edu.stage}
                    </span>
                    <div className="space-y-0.5">
                      <p className="font-semibold text-neutral-950 dark:text-white">
                        {edu.institution}
                      </p>
                      {edu.note && (
                        <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                          {edu.note}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Full-width KPI strip placed below the split */}
        <div className="mt-16 pt-10 border-t border-neutral-200/80 dark:border-neutral-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {profile.kpis.map((kpi, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white font-mono tabular-nums">
                {kpi.value}
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">
                {kpi.label[lang]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
