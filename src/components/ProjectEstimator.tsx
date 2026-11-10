import React, { useState } from 'react';
import { Calculator, ArrowRight, Check, Clock, Coins } from 'lucide-react';
import { Language } from '../types';

interface ProjectEstimatorProps {
  lang: Language;
  onApplyEstimate: (details: {
    service: string;
    scope: string;
    timeline: string;
    estimateText: string;
  }) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({
  lang,
  onApplyEstimate,
}) => {
  const [currency, setCurrency] = useState<'IDR' | 'USD'>('IDR');
  const [selectedService, setSelectedService] = useState<'system' | 'product' | 'frontend' | 'mvp'>('product');
  const [selectedTimeline, setSelectedTimeline] = useState<'standard' | 'express' | 'retainer'>('standard');
  const [includeAccessibility, setIncludeAccessibility] = useState(true);
  const [includeTokens, setIncludeTokens] = useState(true);

  // Pricing Model
  const servicesConfig = {
    system: {
      name: { id: 'Design System & Component Library', en: 'Design System & Token Library' },
      baseWeeks: 5,
      baseIDR: 45, // Juta IDR
      baseUSD: 3200,
      desc: {
        id: 'Pustaka Figma lengkap + 150+ komponen tokenized React/Tailwind.',
        en: 'Figma multi-tier variable library + 150+ synced React/Tailwind components.',
      },
    },
    product: {
      name: { id: 'Desain Produk End-to-End (Web/Mobile)', en: 'End-to-End Product Design (Web/App)' },
      baseWeeks: 6,
      baseIDR: 55,
      baseUSD: 4000,
      desc: {
        id: 'Riset pengguna, arsitektur alur, wireframe, hingga antarmuka visual presisi tinggi.',
        en: 'User research synthesis, UX wireframes, high-fidelity UI, and clickable prototypes.',
      },
    },
    frontend: {
      name: { id: 'Rekayasa Frontend Performa Tinggi', en: 'High-Performance Frontend Engineering' },
      baseWeeks: 6,
      baseIDR: 60,
      baseUSD: 4400,
      desc: {
        id: 'Implementasi React 19, TypeScript, animasi mikro halus, dan skor Lighthouse 100/100.',
        en: 'React 19, TypeScript architecture, fluid micro-interactions, and 100/100 Lighthouse.',
      },
    },
    mvp: {
      name: { id: 'Paket Komprehensif MVP (Desain + Kode)', en: 'Turnkey MVP (Design + Code Delivery)' },
      baseWeeks: 8,
      baseIDR: 95,
      baseUSD: 6800,
      desc: {
        id: 'Solusi lengkap dari kanvas kosong hingga aplikasi web siap produksi siap luncur.',
        en: 'Complete zero-to-one delivery: UX strategy, design system, and full production frontend.',
      },
    },
  };

  const timelineMultiplier = {
    standard: { factor: 1.0, weeksOffset: 0, label: { id: 'Standar (Ritme Terstruktur)', en: 'Standard Pace' } },
    express: { factor: 1.25, weeksOffset: -2, label: { id: 'Prioritas Cepat (Akselerasi)', en: 'Fast-Track Accelerated' } },
    retainer: { factor: 0.9, weeksOffset: 0, label: { id: 'Retainer Bulanan Berkelanjutan', en: 'Quarterly Retainer' } },
  };

  const currentService = servicesConfig[selectedService];
  const currentTimeline = timelineMultiplier[selectedTimeline];

  let rawCostIDR = currentService.baseIDR * currentTimeline.factor;
  let rawCostUSD = currentService.baseUSD * currentTimeline.factor;
  let weeksEst = Math.max(3, currentService.baseWeeks + currentTimeline.weeksOffset);

  if (includeAccessibility) {
    rawCostIDR += 5;
    rawCostUSD += 400;
  }
  if (includeTokens) {
    rawCostIDR += 6;
    rawCostUSD += 500;
  }

  const formattedEstimate =
    currency === 'IDR'
      ? `Rp ${Math.round(rawCostIDR)} - ${Math.round(rawCostIDR * 1.15)} Juta`
      : `$${Math.round(rawCostUSD).toLocaleString()} - $${Math.round(rawCostUSD * 1.15).toLocaleString()} USD`;

  const handleApply = () => {
    onApplyEstimate({
      service: currentService.name[lang],
      scope: `${includeAccessibility ? 'WCAG AA Audit, ' : ''}${includeTokens ? 'Token Pipeline, ' : ''}${currentTimeline.label[lang]}`,
      timeline: `~${weeksEst} ${lang === 'id' ? 'Minggu' : 'Weeks'}`,
      estimateText: formattedEstimate,
    });
  };

  return (
    <section id="estimasi" className="py-20 lg:py-28 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-neutral-200 dark:border-neutral-800">
          <div className="space-y-2">
            <div className="text-xs uppercase font-mono tracking-wider text-neutral-500 dark:text-neutral-400">
              06. {lang === 'id' ? 'Kalkulator Investasi Proyek' : 'Interactive Scope & Pricing Estimator'}
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white [text-wrap:balance]">
              {lang === 'id'
                ? 'Estimasi terukur untuk waktu dan anggaran proyek Anda.'
                : 'Transparent, data-backed projection for scope, timeline, and investment.'}
            </h2>
          </div>

          {/* Currency Toggle */}
          <div className="flex items-center gap-1 p-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-md text-xs font-mono">
            <button
              onClick={() => setCurrency('IDR')}
              className={`px-3 py-1 rounded transition-colors ${
                currency === 'IDR'
                  ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white font-semibold shadow-xs'
                  : 'text-neutral-500'
              }`}
            >
              IDR (Rp)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1 rounded transition-colors ${
                currency === 'USD'
                  ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white font-semibold shadow-xs'
                  : 'text-neutral-500'
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>

        {/* Estimator Form Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inputs Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Service Selection */}
            <div className="space-y-3">
              <label className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 block">
                {lang === 'id' ? '1. Pilih Kategori Layanan' : '1. Select Engagement Service'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(Object.keys(servicesConfig) as (keyof typeof servicesConfig)[]).map((key) => {
                  const s = servicesConfig[key];
                  const isSelected = selectedService === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedService(key)}
                      className={`p-4 text-left border rounded-xl transition-all ${
                        isSelected
                          ? 'border-neutral-950 dark:border-white bg-white dark:bg-neutral-800 shadow-xs'
                          : 'border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/40 hover:border-neutral-400'
                      }`}
                    >
                      <div className="text-xs font-bold text-neutral-950 dark:text-white">
                        {s.name[lang]}
                      </div>
                      <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1 line-clamp-2">
                        {s.desc[lang]}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Timeline Speed Selection */}
            <div className="space-y-3">
              <label className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 block">
                {lang === 'id' ? '2. Preferensi Waktu & Ritme' : '2. Timeline Urgency & Pace'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(Object.keys(timelineMultiplier) as (keyof typeof timelineMultiplier)[]).map((key) => {
                  const t = timelineMultiplier[key];
                  const isSelected = selectedTimeline === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedTimeline(key)}
                      className={`p-3 text-left border rounded-xl transition-all ${
                        isSelected
                          ? 'border-neutral-950 dark:border-white bg-white dark:bg-neutral-800 shadow-xs'
                          : 'border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/40 hover:border-neutral-400'
                      }`}
                    >
                      <div className="text-xs font-semibold text-neutral-900 dark:text-white">
                        {t.label[lang]}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Additional Add-on Toggles */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 block">
                {lang === 'id' ? '3. Modul Kualitas Tambahan' : '3. Quality Standards Add-ons'}
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-lg cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeAccessibility}
                    onChange={(e) => setIncludeAccessibility(e.target.checked)}
                    className="accent-neutral-950 dark:accent-white w-4 h-4 rounded"
                  />
                  <span className="text-xs text-neutral-700 dark:text-neutral-300">
                    {lang === 'id'
                      ? 'Audit Aksesibilitas WCAG 2.2 Level AA & Pengujian Screen Reader'
                      : 'WCAG 2.2 Level AA Accessibility Verification & Screen Reader Audit'}
                  </span>
                </label>

                <label className="flex items-center gap-3 p-3 bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-lg cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeTokens}
                    onChange={(e) => setIncludeTokens(e.target.checked)}
                    className="accent-neutral-950 dark:accent-white w-4 h-4 rounded"
                  />
                  <span className="text-xs text-neutral-700 dark:text-neutral-300">
                    {lang === 'id'
                      ? 'Integrasi Pipeline Sinkronisasi Token (Figma Variables ke Tailwind AST)'
                      : 'Automated Token Sync Pipeline (Figma Variables to Tailwind AST)'}
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Projection Card Column */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-950 text-white dark:bg-neutral-900 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                  {lang === 'id' ? 'Ringkasan Estimasi' : 'Estimated Investment'}
                </span>
                <span className="text-xs font-mono text-neutral-400">Fixed-Fee Guarantee</span>
              </div>

              {/* Price Display */}
              <div className="space-y-2">
                <div className="text-xs text-neutral-400">
                  {lang === 'id' ? 'Perkiraan Rentang Anggaran:' : 'Projected Investment Range:'}
                </div>
                <div className="text-3xl sm:text-4xl font-bold font-mono tabular-nums text-white tracking-tight">
                  {formattedEstimate}
                </div>
              </div>

              {/* Estimated Delivery Time */}
              <div className="flex items-center gap-3 p-4 bg-neutral-900 dark:bg-neutral-800 rounded-xl">
                <Clock className="w-5 h-5 text-neutral-300 shrink-0" />
                <div className="text-xs">
                  <span className="text-neutral-400 block">
                    {lang === 'id' ? 'Estimasi Waktu Pengerjaan' : 'Estimated Delivery Window'}
                  </span>
                  <span className="font-semibold text-white font-mono tabular-nums">
                    ~{weeksEst} {lang === 'id' ? 'Minggu Kalender' : 'Calendar Weeks'}
                  </span>
                </div>
              </div>

              {/* Included Artifacts List */}
              <div className="space-y-2 text-xs text-neutral-300 pt-2">
                <div className="font-semibold text-white mb-2">
                  {lang === 'id' ? 'Termasuk Dalam Paket:' : 'Included In Package:'}
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-neutral-300" />
                  <span>{currentService.name[lang]}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-neutral-300" />
                  <span>{lang === 'id' ? 'Review Desain Sprint Mingguan & Akses Langsung' : 'Weekly Milestone Sprints & Direct Slack Channel'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-neutral-300" />
                  <span>{lang === 'id' ? 'Jaminan Bug-Free & Dukungan 30 Hari Pasca-Rilis' : '30-Day Post-Launch QA & Bug Warranty'}</span>
                </div>
              </div>

              {/* Apply to Contact CTA */}
              <button
                onClick={handleApply}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-neutral-950 bg-white hover:bg-neutral-100 rounded-lg transition-colors shadow-xs"
              >
                <span>{lang === 'id' ? 'Terapkan ke Formulir Kontak' : 'Apply to Contact Inquiry'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-[11px] text-center text-neutral-400">
                {lang === 'id'
                  ? 'Proposal resmi terperinci dikirimkan dalam 24 jam kerja.'
                  : 'Detailed tailored statement of work issued within 24 business hours.'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
