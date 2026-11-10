import React, { useState } from 'react';
import { Search, Flame, BookOpen, TrendingUp, Trophy } from 'lucide-react';
import { Language } from '../types';

interface SkillsMatrixProps {
  lang: Language;
}

export const SkillsMatrix: React.FC<SkillsMatrixProps> = ({ lang }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const motivationPillars = [
    {
      title: {
        id: '1. Belajar Hari Ini',
        en: '1. Learn Today',
      },
      tagline: {
        id: 'Membangun Fondasi Akademik & Logika Komputasi',
        en: 'Building Solid Academic & Computational Foundations',
      },
      description: {
        id: 'Menekuni materi perkuliahan Program Studi Sistem Informasi di Universitas Komputama Cilacap dengan sungguh-sungguh, berbekal ketajaman logika praktikum dari jurusan IPA SMA Negeri 01 Salem.',
        en: 'Diligently mastering Information Systems coursework at Universitas Komputama Cilacap, backed by the analytical rigor gained in the Natural Sciences track at SMA Negeri 01 Salem.',
      },
      competencies: [
        { name: 'Konsep Sistem Informasi Manajemen', note: 'Analisis Alur Data & Organisasi' },
        { name: 'Basis Data & SQL Relasional', note: 'Desain ERD & Normalisasi' },
        { name: 'Logika & Berpikir Kritis (IPA)', note: 'Analisis Deduktif & Problem Solving' },
        { name: 'Dasar Pemrograman Web & Algoritma', note: 'Struktur Data & Logika Kode' },
      ],
    },
    {
      title: {
        id: '2. Berkembang Esok Hari',
        en: '2. Grow Tomorrow',
      },
      tagline: {
        id: 'Mengasah Praktik Rekayasa & Kerja Sama Tim',
        en: 'Honing Engineering Practice & Team Synergy',
      },
      description: {
        id: 'Mengembangkan keterampilan melalui eksplorasi mandiri, proyek kolaboratif, serta adaptasi cepat terhadap perkembangan perangkat lunak dan ekosistem digital modern.',
        en: 'Expanding practical capabilities through collaborative projects, self-directed tech exploration, and rapid adaptation to modern software paradigms.',
      },
      competencies: [
        { name: 'Analisis Kebutuhan Bisnis (Requirements)', note: 'Menerjemahkan Masalah ke Solusi TI' },
        { name: 'Kolaborasi Kelompok & Komunikasi', note: 'Manajemen Tugas & Koordinasi Tim' },
        { name: 'Eksplorasi Teknologi & API', note: 'Integrasi Sistem & Otomasi Alur' },
        { name: 'Pengujian Sistem & Kualitas Data', note: 'Verifikasi Akurasi & Efisiensi' },
      ],
    },
    {
      title: {
        id: '3. Sukses di Masa Depan',
        en: '3. Succeed in the Future',
      },
      tagline: {
        id: 'Menjadi IT Consultant Profesional Berdampak Nyata',
        en: 'Becoming an Authoritative Professional IT Consultant',
      },
      description: {
        id: 'Mewujudkan cita-cita memberikan solusi teknologi informasi yang andal bagi perusahaan, mengoptimalkan proses bisnis, dan membawa manfaat nyata bagi masyarakat luas.',
        en: 'Realizing the vision of delivering reliable IT solutions for enterprise clients, streamlining business processes, and contributing meaningfully to digital advancement.',
      },
      competencies: [
        { name: 'Konsultasi Solusi Sistem Informasi', note: 'Perencanaan Strategi Arsitektur TI' },
        { name: 'Digitalisasi Operasional Bisnis', note: 'Otomasi Efisiensi Biaya Perusahaan' },
        { name: 'Etika Profesional & Integritas', note: 'Komitmen Kualitas & Kepercayaan Klien' },
        { name: 'Inovasi Berkelanjutan', note: 'Adaptasi Teknologi Masa Depan' },
      ],
    },
  ];

  const filteredPillars = motivationPillars.map((pillar) => {
    const matching = pillar.competencies.filter(
      (c) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.note.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      ...pillar,
      competencies: matching,
    };
  });

  return (
    <section id="motivasi" className="py-20 lg:py-28 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-neutral-200 dark:border-neutral-800">
          <div className="space-y-3 max-w-4xl">
            <div className="text-xs uppercase font-mono tracking-wider text-neutral-500 dark:text-neutral-400">
              03. {lang === 'id' ? 'Motivasi' : 'Core Motivation'}
            </div>
            {/* Exact headline requested by user */}
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white [text-wrap:balance] leading-[1.2]">
              {lang === 'id'
                ? 'Belajar hari ini, berkembang esok hari, dan sukses di masa depan.'
                : 'Learn today, grow tomorrow, and succeed in the future.'}
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed pt-1">
              {lang === 'id'
                ? 'Prinsip panduan saya dalam menempuh pendidikan Sistem Informasi di Universitas Komputama Cilacap demi mewujudkan cita-cita sebagai IT Consultant yang profesional.'
                : 'My guiding philosophy as an Information Systems student at Universitas Komputama Cilacap, striving toward excellence as a professional IT Consultant.'}
            </p>
          </div>

          {/* Quick Competency Search */}
          <div className="relative w-full md:w-72 shrink-0">
            <input
              type="text"
              placeholder={lang === 'id' ? 'Cari fokus kompetensi...' : 'Filter competency...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-md focus:outline-hidden focus:ring-1 focus:ring-neutral-950 dark:focus:ring-white transition-all text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400"
            />
            <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-3" />
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPillars.map((pillar, pIdx) => (
            <div
              key={pIdx}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 space-y-6 shadow-xs"
            >
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <span className="text-xs font-mono text-neutral-400 block">
                    Tahap 0{pIdx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-neutral-950 dark:text-white">
                    {pillar.title[lang]}
                  </h3>
                  <p className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                    {pillar.tagline[lang]}
                  </p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed pt-1">
                    {pillar.description[lang]}
                  </p>
                </div>

                {/* Competencies list */}
                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 space-y-3">
                  {pillar.competencies.length === 0 ? (
                    <p className="text-xs text-neutral-400 py-2">
                      {lang === 'id' ? 'Tidak ada kompetensi yang cocok.' : 'No matching competencies.'}
                    </p>
                  ) : (
                    pillar.competencies.map((comp, cIdx) => (
                      <div key={cIdx} className="space-y-0.5">
                        <div className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                          {comp.name}
                        </div>
                        <div className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                          {comp.note}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 text-[11px] font-mono text-neutral-400 flex items-center justify-between">
                <span>{pillar.competencies.length} Area Fokus</span>
                <span>Komputama · SI</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
