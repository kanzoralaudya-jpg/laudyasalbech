import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Calendar, ArrowUpRight, FileText, CheckCircle2, Edit3 } from 'lucide-react';
import { Language, EditableProfileData } from '../types';

interface ContactSectionProps {
  lang: Language;
  profile: EditableProfileData;
  onEditClick?: () => void;
  prefilledEstimate?: {
    service: string;
    scope: string;
    timeline: string;
    estimateText: string;
  } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  lang,
  profile,
  onEditClick,
  prefilledEstimate,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: prefilledEstimate?.service || 'Product Design',
    message: prefilledEstimate
      ? `${lang === 'id' ? 'Estimasi Proyek' : 'Project Estimate'}: ${prefilledEstimate.service} (${prefilledEstimate.timeline}, ${prefilledEstimate.estimateText})\n`
      : '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  const handleDownloadCV = () => {
    const resumeText = `CURRICULUM VITAE - ${profile.name.toUpperCase()}
${profile.title.en}
Email: ${profile.email} | Location: ${profile.location}
Phone: ${profile.phone || 'Available on request'}
Portfolio: https://kanzora.dev

PROFESSIONAL SUMMARY
Senior digital product architect with 8+ years experience marrying high-craft visual design with robust TypeScript and React frontend systems.

SELECTED ACHIEVEMENTS
- Astra Financial Suite: +54% onboarding conversion, 1.2M active users
- Architectra Component Lab: Adopted by 18,500+ engineers globally
- GoTo Financial: +21.6% merchant checkout completion rate
- Traveloka Design System: Unified booking components across 6 SEA countries
`;
    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `CV-${profile.name.replace(/\s+/g, '-')}-2026.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="kontak" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-neutral-200 dark:border-neutral-800">
          <div className="space-y-2">
            <div className="text-xs uppercase font-mono tracking-wider text-neutral-500 dark:text-neutral-400">
              07. {lang === 'id' ? 'Mulai Kolaborasi' : 'Initiate Engagement'}
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white [text-wrap:balance]">
              {lang === 'id'
                ? 'Mari diskusikan produk digital atau sistem desain Anda berikutnya.'
                : 'Let us build something thoughtful, rigorous, and enduring.'}
            </h2>
          </div>
          <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
            {lang === 'id' ? 'Respons dalam 24 jam' : 'Replies guaranteed < 24 hrs'}
          </div>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-neutral-950 dark:text-white">
                {lang === 'id' ? 'Hubungi Langsung' : 'Direct Communication'}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {lang === 'id'
                  ? 'Saya terbuka untuk proyek kepemimpinan desain lepas, audit sistem desain, dan rekayasa frontend terpilih untuk paruh kedua 2026.'
                  : 'Currently open to strategic design advisory, design system architecture contracts, and select full-stack frontend engagements for 2026.'}
              </p>
            </div>

            {/* Email Box with 1-click Copy */}
            <div className="p-5 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl space-y-3">
              <span className="text-xs text-neutral-500 dark:text-neutral-400 block font-mono">
                {lang === 'id' ? 'Surel Resmi:' : 'Direct Inquiries:'}
              </span>
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-semibold font-mono text-neutral-950 dark:text-white truncate">
                  {profile.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-md border border-neutral-300 dark:border-neutral-700 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{lang === 'id' ? 'Tersalin' : 'Copied'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{lang === 'id' ? 'Salin' : 'Copy'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Calendar Booking & CV Actions */}
            <div className="space-y-3">
              <button
                onClick={handleDownloadCV}
                className="w-full flex items-center justify-between p-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 rounded-xl transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                  <div>
                    <span className="text-xs font-semibold text-neutral-900 dark:text-white block">
                      {lang === 'id' ? 'Unduh Resume / CV Lengkap' : 'Download Complete CV / Resume'}
                    </span>
                    <span className="text-[11px] text-neutral-500 font-mono">
                      {lang === 'id' ? 'Format Teks Bersih (Update 2026)' : 'Plaintext Format (2026 Edition)'}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400" />
              </button>

              <div className="p-4 bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 rounded-xl flex items-center gap-3">
                <Calendar className="w-4 h-4 text-neutral-600 dark:text-neutral-400 shrink-0" />
                <div className="text-xs text-neutral-600 dark:text-neutral-400">
                  <span className="font-semibold text-neutral-900 dark:text-white block">
                    {lang === 'id' ? 'Sesi Perkenalan 20 Menit' : '20-Minute Intro Discovery'}
                  </span>
                  <span>{lang === 'id' ? 'Tersedia melalui Google Meet setiap Selasa & Kamis.' : 'Open via Google Meet on Tuesdays & Thursdays.'}</span>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-3">
                {lang === 'id' ? 'Kanal Profesional' : 'Professional Presence'}
              </span>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono">
                <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors">
                  GitHub ↗
                </a>
                <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors">
                  LinkedIn ↗
                </a>
                <a href={profile.figmaUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors">
                  Figma ↗
                </a>
                {profile.phone && (
                  <span className="text-neutral-500">WA: {profile.phone}</span>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-xs">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center mx-auto text-neutral-900 dark:text-white">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-neutral-950 dark:text-white">
                    {lang === 'id' ? 'Pesan Berhasil Terkirim!' : 'Inquiry Received Successfully!'}
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 max-w-sm mx-auto leading-relaxed">
                    {lang === 'id'
                      ? 'Terima kasih telah menghubungi. Kanzora akan meninjau kebutuhan proyek Anda dan membalas melalui surel dalam kurun waktu 24 jam.'
                      : 'Thank you for reaching out. Kanzora will review your brief and reply directly via email within 24 business hours.'}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', company: '', projectType: 'Product Design', message: '' });
                    }}
                    className="mt-4 px-4 py-2 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white border border-neutral-200 dark:border-neutral-700 rounded-md"
                  >
                    {lang === 'id' ? 'Kirim Pesan Lainnya' : 'Send Another Inquiry'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                        {lang === 'id' ? 'Nama Lengkap *' : 'Your Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={lang === 'id' ? 'contoh: Budi Santoso' : 'e.g. Alex Henderson'}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md focus:outline-hidden focus:ring-1 focus:ring-neutral-950 dark:focus:ring-white text-neutral-900 dark:text-neutral-100"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                        {lang === 'id' ? 'Alamat Surel *' : 'Email Address *'}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md focus:outline-hidden focus:ring-1 focus:ring-neutral-950 dark:focus:ring-white text-neutral-900 dark:text-neutral-100"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                        {lang === 'id' ? 'Perusahaan / Organisasi' : 'Company / Organization'}
                      </label>
                      <input
                        type="text"
                        placeholder={lang === 'id' ? 'contoh: PT Solusi Finansial' : 'e.g. Acme Ventures'}
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md focus:outline-hidden focus:ring-1 focus:ring-neutral-950 dark:focus:ring-white text-neutral-900 dark:text-neutral-100"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                        {lang === 'id' ? 'Fokus Proyek' : 'Project Focus'}
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md focus:outline-hidden focus:ring-1 focus:ring-neutral-950 dark:focus:ring-white text-neutral-900 dark:text-neutral-100"
                      >
                        <option value="Product Design">Product Design (UX/UI)</option>
                        <option value="Design System">Design System & Token Library</option>
                        <option value="Frontend Development">Frontend Architecture (React 19)</option>
                        <option value="Turnkey MVP">Turnkey MVP (Design + Code)</option>
                        <option value="Advisory">Design Advisory / Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                      {lang === 'id' ? 'Deskripsi Ringkas Kebutuhan Proyek *' : 'Brief Project Details *'}
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder={
                        lang === 'id'
                          ? 'Jelaskan tujuan produk, target rilis, atau tantangan desain yang ingin Anda pecahkan...'
                          : 'Share your timeline goals, target user problems, or specific challenges...'
                      }
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md focus:outline-hidden focus:ring-1 focus:ring-neutral-950 dark:focus:ring-white text-neutral-900 dark:text-neutral-100 leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-5 text-xs font-semibold text-white bg-neutral-950 hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 rounded-lg transition-colors shadow-xs"
                  >
                    <span>{lang === 'id' ? 'Kirim Pesan Inisiasi Proyek' : 'Transmit Project Brief'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
