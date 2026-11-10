import React, { useState } from 'react';
import { Target, Server, Database, TrendingUp, CheckCircle2, ShieldCheck, ArrowRight, Copy, Check } from 'lucide-react';
import { Language } from '../types';

interface DesignLabProps {
  lang: Language;
}

interface ConsultingScenario {
  id: string;
  name: { id: string; en: string };
  sector: string;
  problem: { id: string; en: string };
  systemSolution: { id: string; en: string };
  architecture: string[];
  businessImpact: string;
  efficiencyGain: string;
}

export const DesignLab: React.FC<DesignLabProps> = ({ lang }) => {
  const scenarios: ConsultingScenario[] = [
    {
      id: 'erp',
      name: {
        id: 'Sistem Informasi Manajemen Bisnis Terintegrasi (ERP)',
        en: 'Integrated Enterprise Resource Planning (ERP)',
      },
      sector: 'Manufaktur & Distribusi',
      problem: {
        id: 'Pencatatan inventaris dan penjualan masih terpisah, menyebabkan ketidaksinkronan data dan keterlambatan laporan hingga 4 hari.',
        en: 'Siloed inventory and sales records caused data discrepancies and multi-day financial reporting delays.',
      },
      systemSolution: {
        id: 'Membangun arsitektur basis data relasional terpusat dengan sinkronisasi stok otomatis dan dasbor eksekutif real-time.',
        en: 'Architected a centralized relational database with automatic inventory sync and real-time executive analytics.',
      },
      architecture: ['PostgreSQL Database Relasional', 'RESTful API Services', 'Dasbor Analitik Real-Time', 'Manajemen Hak Akses (RBAC)'],
      businessImpact: 'Efisiensi waktu laporan 92%, akurasi stok 99.8%',
      efficiencyGain: '+38% Efisiensi Operasional',
    },
    {
      id: 'crm',
      name: {
        id: 'Portal Layanan Nasabah & Otomasi Tiket Dukungan',
        en: 'Customer Relationship Portal & Automated Ticketing',
      },
      sector: 'Layanan Finansial & Jasa',
      problem: {
        id: 'Volume keluhan nasabah tinggi tanpa pelacakan status penanganan yang transparan, menurunkan kepuasan klien.',
        en: 'High customer inquiry volume lacked transparent resolution tracking, leading to poor satisfaction.',
      },
      systemSolution: {
        id: 'Merancang sistem tiket terdistribusi dengan notifikasi otomatis dan pemantauan SLA secara ketat.',
        en: 'Designed a distributed ticketing workflow with automated notifications and strict SLA governance.',
      },
      architecture: ['Arsitektur Antrean Terdistribusi', 'Otomasi Workflow', 'Enkripsi Data End-to-End', 'Audit Trail Kepatuhan'],
      businessImpact: 'Waktu respon turun dari 12 jam menjadi 15 menit',
      efficiencyGain: '+64% Kecepatan Respon',
    },
    {
      id: 'supply',
      name: {
        id: 'Digitalisasi Rantai Pasok & Integrasi Pembayaran',
        en: 'Supply Chain Digitalization & Payment Gateway Integration',
      },
      sector: 'Ritel & E-Commerce',
      problem: {
        id: 'Pembayaran manual sering memicu selisih kas dan keterlambatan pengiriman pesanan ke pelanggan.',
        en: 'Manual verification created settlement discrepancies and delayed outbound delivery fulfillment.',
      },
      systemSolution: {
        id: 'Integrasi sistem pembayaran otomatis berbasis API dan pelacakan kurir terpadu berbasis GPS.',
        en: 'Integrated automated API payment verification and end-to-end delivery telemetry tracking.',
      },
      architecture: ['API Gateway Terenkripsi', 'Sistem Rekonsiliasi Otomatis', 'Logging & Monitoring Terpadu', 'Webhooks Real-time'],
      businessImpact: 'Nol kesalahan verifikasi manual, pengiriman hari yang sama naik 45%',
      efficiencyGain: '+52% Throughput Pesanan',
    },
  ];

  const [activeScenario, setActiveScenario] = useState<ConsultingScenario>(scenarios[0]);
  const [copiedSummary, setCopiedSummary] = useState(false);

  const handleCopySummary = () => {
    const text = `STUDI RANCANGAN KONSULTAN TI - KANZORA LAUDYA
Solusi: ${activeScenario.name[lang]}
Sektor: ${activeScenario.sector}
Pendekatan: ${activeScenario.systemSolution[lang]}
Arsitektur: ${activeScenario.architecture.join(', ')}
Dampak Bisnis: ${activeScenario.businessImpact}`;
    navigator.clipboard.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  return (
    <section id="cita-cita" className="py-20 lg:py-28 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="pb-10 border-b border-neutral-200 dark:border-neutral-800 space-y-3 max-w-4xl">
          <div className="text-xs uppercase font-mono tracking-wider text-neutral-500 dark:text-neutral-400">
            02. {lang === 'id' ? 'Cita-Cita' : 'Career Aspiration'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white [text-wrap:balance] leading-[1.2]">
            {lang === 'id'
              ? 'Menjadi seorang IT Consultant yang profesional, mampu memberikan solusi teknologi informasi, membantu perusahaan mengembangkan sistem, serta mendukung kemajuan bisnis melalui pemanfaatan teknologi.'
              : 'To become a professional IT Consultant, delivering enterprise technology solutions, empowering businesses to build resilient systems, and advancing growth through digital innovation.'}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed pt-1">
            {lang === 'id'
              ? 'Sebagai mahasiswa Program Studi Sistem Informasi di Universitas Komputama Cilacap, saya berfokus menggabungkan ketajaman analisis kebutuhan bisnis dengan perancangan arsitektur teknologi informasi yang berkelanjutan.'
              : 'As an Information Systems student at Universitas Komputama Cilacap, my focus is bridging business workflow analysis with resilient enterprise software engineering.'}
          </p>
        </div>

        {/* 3 Core Pillars of IT Consultant Vision */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-neutral-950 dark:text-white">
              {lang === 'id' ? '1. Memberikan Solusi TI' : '1. IT Solutions Advisory'}
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {lang === 'id'
                ? 'Menganalisis permasalahan riil di lapangan, mengevaluasi infrastruktur yang ada, dan merekomendasikan solusi teknologi yang paling efisien dan tepat sasaran.'
                : 'Diagnosing operational bottlenecks, assessing legacy tech infrastructure, and architecting targeted digital solutions.'}
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-neutral-950 dark:text-white">
              {lang === 'id' ? '2. Mengembangkan Sistem Perusahaan' : '2. Enterprise Systems Development'}
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {lang === 'id'
                ? 'Membantu organisasi merancang dan membangun sistem informasi yang terintegrasi, manajemen database yang aman, serta antarmuka kerja yang intuitif.'
                : 'Designing unified software architectures, secure database schemas, and ergonomic digital interfaces tailored to business users.'}
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-neutral-950 dark:text-white">
              {lang === 'id' ? '3. Mendukung Kemajuan Bisnis' : '3. Business Growth & Value'}
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {lang === 'id'
                ? 'Memastikan pemanfaatan teknologi secara strategis demi memangkas biaya operasional, mempercepat pengambilan keputusan, dan meningkatkan skala bisnis.'
                : 'Harnessing digital capabilities to reduce operating costs, accelerate executive decision-making, and unlock scalable enterprise growth.'}
            </p>
          </div>
        </div>

        {/* Interactive IT Consulting Simulator Card */}
        <div className="mt-12 p-6 sm:p-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-100 dark:border-neutral-800">
            <div>
              <span className="text-xs font-mono uppercase text-neutral-400 block mb-1">
                {lang === 'id' ? 'Simulasi Interaktif Perancangan Solusi' : 'Interactive IT Consulting Case Study'}
              </span>
              <h4 className="text-lg font-bold text-neutral-950 dark:text-white">
                {lang === 'id' ? 'Pilih Skenario Kebutuhan Sistem Perusahaan:' : 'Select Enterprise Consulting Scenario:'}
              </h4>
            </div>

            {/* Scenario buttons */}
            <div className="flex flex-wrap gap-2">
              {scenarios.map((sc) => (
                <button
                  key={sc.id}
                  onClick={() => setActiveScenario(sc)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                    activeScenario.id === sc.id
                      ? 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 shadow-xs'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white'
                  }`}
                >
                  {sc.sector}
                </button>
              ))}
            </div>
          </div>

          {/* Scenario Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-mono text-neutral-400">
                  {lang === 'id' ? 'Nama Solusi Rekomendasi Konsultan' : 'Recommended Solution Architecture'}
                </span>
                <h5 className="text-base sm:text-lg font-bold text-neutral-950 dark:text-white">
                  {activeScenario.name[lang]}
                </h5>
              </div>

              {/* Problem Statement */}
              <div className="p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-xl space-y-1">
                <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200 block">
                  {lang === 'id' ? 'Tantangan Bisnis Saat Ini:' : 'Current Business Problem:'}
                </span>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {activeScenario.problem[lang]}
                </p>
              </div>

              {/* Proposed Solution */}
              <div className="p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-xl space-y-1">
                <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200 block">
                  {lang === 'id' ? 'Rancangan Solusi Sistem Informasi:' : 'System Architecture Solution:'}
                </span>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {activeScenario.systemSolution[lang]}
                </p>
              </div>

              {/* Architecture stack checklist */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-semibold text-neutral-900 dark:text-white block">
                  {lang === 'id' ? 'Komponen Arsitektur Utama:' : 'Core Architectural Deliverables:'}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeScenario.architecture.map((item, iIdx) => (
                    <div key={iIdx} className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-neutral-900 dark:text-white shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Impact Metric & Action */}
            <div className="lg:col-span-5 p-6 bg-neutral-950 text-white dark:bg-neutral-800/70 rounded-xl space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-neutral-400">
                  {lang === 'id' ? 'Proyeksi Dampak Bisnis' : 'Projected Business ROI'}
                </span>
                <div className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-white">
                  {activeScenario.efficiencyGain}
                </div>
                <p className="text-xs text-neutral-300 pt-1 leading-relaxed">
                  {activeScenario.businessImpact}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex flex-col gap-2">
                <button
                  onClick={handleCopySummary}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-neutral-950 bg-white hover:bg-neutral-200 rounded-lg transition-colors"
                >
                  {copiedSummary ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{lang === 'id' ? 'Ringkasan Tersalin!' : 'Brief Copied!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{lang === 'id' ? 'Salin Ringkasan Solusi TI' : 'Copy Solution Architecture'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
