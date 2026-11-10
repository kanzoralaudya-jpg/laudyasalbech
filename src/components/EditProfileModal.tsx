import React, { useState } from 'react';
import { X, Check, RotateCcw, User, Type, Mail, Briefcase, Download, Upload, GraduationCap, Compass, Target } from 'lucide-react';
import { Language, Project, EditableProfileData, EducationItem } from '../types';
import { availablePortraits, availableProjectImages } from '../data/portfolioData';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  profile: EditableProfileData;
  projects: Project[];
  onSaveProfile: (profile: EditableProfileData) => void;
  onSaveProjects: (projects: Project[]) => void;
  onResetDefaults: () => void;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  lang,
  profile,
  projects,
  onSaveProfile,
  onSaveProjects,
  onResetDefaults,
}) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'education' | 'hero' | 'projects' | 'contact'>('profile');
  const [editedProfile, setEditedProfile] = useState<EditableProfileData>(profile);
  const [editedProjects, setEditedProjects] = useState<Project[]>(projects);
  const [selectedProjectId, setSelectedProjectId] = useState<string>(projects[0]?.id || '');
  const [saveToast, setSaveToast] = useState(false);

  React.useEffect(() => {
    setEditedProfile(profile);
    setEditedProjects(projects);
  }, [profile, projects]);

  if (!isOpen) return null;

  const currentProject = editedProjects.find((p) => p.id === selectedProjectId) || editedProjects[0];

  const handleSaveAll = () => {
    onSaveProfile(editedProfile);
    onSaveProjects(editedProjects);
    setSaveToast(true);
    setTimeout(() => {
      setSaveToast(false);
      onClose();
    }, 1200);
  };

  const handleUpdateCurrentProject = (field: keyof Project, value: any) => {
    setEditedProjects((prev) =>
      prev.map((p) => (p.id === selectedProjectId ? { ...p, [field]: value } : p))
    );
  };

  const handleUpdateProjectNested = (field: 'subtitle' | 'summary' | 'challenge' | 'solution' | 'impact', subLang: 'id' | 'en', text: string) => {
    setEditedProjects((prev) =>
      prev.map((p) => {
        if (p.id !== selectedProjectId) return p;
        return {
          ...p,
          [field]: {
            ...p[field],
            [subLang]: text,
          },
        };
      })
    );
  };

  const handleUpdateEducationItem = (index: number, field: keyof EducationItem, val: string) => {
    const updated = [...editedProfile.educationHistory];
    updated[index] = { ...updated[index], [field]: val };
    setEditedProfile({ ...editedProfile, educationHistory: updated });
  };

  const handleExportJson = () => {
    const dataToExport = {
      profile: editedProfile,
      projects: editedProjects,
      exportedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(dataToExport, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `portofolio-kanzora-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.profile) setEditedProfile(parsed.profile);
        if (parsed.projects) setEditedProjects(parsed.projects);
      } catch (err) {
        console.error('Failed to import JSON', err);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-950/75 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <h3 className="text-base font-bold text-neutral-950 dark:text-white">
              {lang === 'id' ? 'Kustomisasi Data Portofolio' : 'Portfolio Editor'}
            </h3>
            <span className="text-xs font-mono text-neutral-400">
              {lang === 'id' ? 'Tersimpan Otomatis' : 'Auto-sync'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExportJson}
              title={lang === 'id' ? 'Ekspor Konfigurasi JSON' : 'Export JSON Config'}
              className="p-1.5 text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <Download className="w-4 h-4" />
            </button>
            <label
              title={lang === 'id' ? 'Impor Konfigurasi JSON' : 'Import JSON Config'}
              className="p-1.5 text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer transition-colors"
            >
              <Upload className="w-4 h-4" />
              <input type="file" accept=".json" onChange={handleImportJson} className="hidden" />
            </label>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 px-6 pt-3 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 overflow-x-auto text-xs font-medium">
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex items-center gap-2 px-3 py-2 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'profile'
                ? 'border-neutral-950 dark:border-white text-neutral-950 dark:text-white font-semibold'
                : 'border-transparent text-neutral-500 hover:text-neutral-950 dark:hover:text-white'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Profil & Cita-Cita' : 'Profile & Goals'}</span>
          </button>

          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 px-3 py-2 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'education'
                ? 'border-neutral-950 dark:border-white text-neutral-950 dark:text-white font-semibold'
                : 'border-transparent text-neutral-500 hover:text-neutral-950 dark:hover:text-white'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Pendidikan & SMA' : 'Education & SMA'}</span>
          </button>

          <button
            onClick={() => setActiveTab('hero')}
            className={`flex items-center gap-2 px-3 py-2 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'hero'
                ? 'border-neutral-950 dark:border-white text-neutral-950 dark:text-white font-semibold'
                : 'border-transparent text-neutral-500 hover:text-neutral-950 dark:hover:text-white'
            }`}
          >
            <Type className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Headline & Motto' : 'Headline & Motto'}</span>
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`flex items-center gap-2 px-3 py-2 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'projects'
                ? 'border-neutral-950 dark:border-white text-neutral-950 dark:text-white font-semibold'
                : 'border-transparent text-neutral-500 hover:text-neutral-950 dark:hover:text-white'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Karya & Gambar' : 'Projects & Images'}</span>
          </button>

          <button
            onClick={() => setActiveTab('contact')}
            className={`flex items-center gap-2 px-3 py-2 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'contact'
                ? 'border-neutral-950 dark:border-white text-neutral-950 dark:text-white font-semibold'
                : 'border-transparent text-neutral-500 hover:text-neutral-950 dark:hover:text-white'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Kontak & Tautan' : 'Contact & Socials'}</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* TAB 1: Profil & Cita-Cita */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              {/* Photo Selector */}
              <div className="space-y-3">
                <label className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 block">
                  {lang === 'id' ? 'Pilih Foto Hero / Potret' : 'Select Hero Portrait Photo'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {availablePortraits.map((p) => {
                    const isSelected = editedProfile.heroImage === p.url;
                    return (
                      <div
                        key={p.id}
                        onClick={() => setEditedProfile({ ...editedProfile, heroImage: p.url })}
                        className={`relative rounded-xl overflow-hidden border-2 cursor-pointer transition-all aspect-[16/10] bg-neutral-100 dark:bg-neutral-800 ${
                          isSelected
                            ? 'border-neutral-950 dark:border-white shadow-md'
                            : 'border-transparent hover:border-neutral-300 dark:hover:border-neutral-700'
                        }`}
                      >
                        <img
                          src={p.url}
                          alt={p.label[lang]}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute bottom-0 inset-x-0 p-2 bg-neutral-950/70 text-white text-[11px] truncate">
                          {p.label[lang]}
                        </div>
                        {isSelected && (
                          <div className="absolute top-2 right-2 p-1 bg-white dark:bg-neutral-950 rounded-full text-neutral-950 dark:text-white shadow-xs">
                            <Check className="w-3 h-3" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="space-y-1 pt-1">
                  <span className="text-[11px] text-neutral-500 dark:text-neutral-400">
                    {lang === 'id' ? 'Atau masukkan tautan URL gambar khusus:' : 'Or specify custom image URL:'}
                  </span>
                  <input
                    type="text"
                    value={editedProfile.heroImage}
                    onChange={(e) => setEditedProfile({ ...editedProfile, heroImage: e.target.value })}
                    placeholder="https://..."
                    className="w-full px-3 py-2 text-xs bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md font-mono"
                  />
                </div>
              </div>

              {/* Name & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                    {lang === 'id' ? 'Nama Lengkap' : 'Full Name'}
                  </label>
                  <input
                    type="text"
                    value={editedProfile.name}
                    onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md text-neutral-900 dark:text-neutral-100 font-semibold"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                    {lang === 'id' ? 'Lokasi Asal & Kampus' : 'Location'}
                  </label>
                  <input
                    type="text"
                    value={editedProfile.location}
                    onChange={(e) => setEditedProfile({ ...editedProfile, location: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md text-neutral-900 dark:text-neutral-100"
                  />
                </div>
              </div>

              {/* Cita-Cita (Career Aspiration) */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-neutral-900 dark:text-white" />
                  <span>{lang === 'id' ? 'Cita-Cita (Aspirasi Karir)' : 'Career Aspiration'}</span>
                </label>
                <textarea
                  rows={2}
                  value={editedProfile.careerAspiration[lang]}
                  onChange={(e) =>
                    setEditedProfile({
                      ...editedProfile,
                      careerAspiration: {
                        ...editedProfile.careerAspiration,
                        [lang]: e.target.value,
                      },
                    })
                  }
                  className="w-full px-3.5 py-2 text-xs bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md text-neutral-900 dark:text-neutral-100 leading-relaxed font-medium"
                />
              </div>

              {/* Alasan Memilih Program Studi Sistem Informasi */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-neutral-900 dark:text-white" />
                  <span>{lang === 'id' ? 'Alasan Saya Memilih Program Studi Sistem Informasi' : 'Reason for Choosing Information Systems'}</span>
                </label>
                <textarea
                  rows={2}
                  value={editedProfile.studyReason[lang]}
                  onChange={(e) =>
                    setEditedProfile({
                      ...editedProfile,
                      studyReason: {
                        ...editedProfile.studyReason,
                        [lang]: e.target.value,
                      },
                    })
                  }
                  className="w-full px-3.5 py-2 text-xs bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md text-neutral-900 dark:text-neutral-100 leading-relaxed"
                />
              </div>
            </div>
          )}

          {/* TAB 2: Pendidikan & Pengalaman Selama SMA */}
          {activeTab === 'education' && (
            <div className="space-y-6">
              {/* Riwayat Pendidikan 5 Tahapan */}
              <div className="space-y-3">
                <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-neutral-900 dark:text-white" />
                  <span>{lang === 'id' ? 'Riwayat Pendidikan (5 Jenjang)' : 'Educational History'}</span>
                </label>
                <div className="space-y-2.5">
                  {editedProfile.educationHistory.map((edu, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-neutral-50 dark:bg-neutral-800/60 rounded-xl grid grid-cols-1 sm:grid-cols-12 gap-3 items-center border border-neutral-200 dark:border-neutral-700"
                    >
                      <div className="sm:col-span-3">
                        <input
                          type="text"
                          value={edu.stage}
                          onChange={(e) => handleUpdateEducationItem(idx, 'stage', e.target.value)}
                          className="w-full px-2 py-1 text-xs font-mono font-bold bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded"
                          placeholder="Jenjang (e.g. TK, SD)"
                        />
                      </div>
                      <div className="sm:col-span-6">
                        <input
                          type="text"
                          value={edu.institution}
                          onChange={(e) => handleUpdateEducationItem(idx, 'institution', e.target.value)}
                          className="w-full px-2 py-1 text-xs font-semibold bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded text-neutral-900 dark:text-white"
                          placeholder="Nama Sekolah / Institusi"
                        />
                      </div>
                      <div className="sm:col-span-3">
                        <input
                          type="text"
                          value={edu.note || ''}
                          onChange={(e) => handleUpdateEducationItem(idx, 'note', e.target.value)}
                          className="w-full px-2 py-1 text-[11px] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded text-neutral-600 dark:text-neutral-300"
                          placeholder="Keterangan / Jurusan"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pengalaman Selama SMA */}
              <div className="space-y-2 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 block">
                  {lang === 'id' ? 'Pengalaman Selama SMA (Narasi Utama)' : 'High School Experience Narrative'}
                </label>
                <textarea
                  rows={4}
                  value={editedProfile.highSchoolExperience[lang]}
                  onChange={(e) =>
                    setEditedProfile({
                      ...editedProfile,
                      highSchoolExperience: {
                        ...editedProfile.highSchoolExperience,
                        [lang]: e.target.value,
                      },
                    })
                  }
                  className="w-full px-3.5 py-2.5 text-xs bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md text-neutral-900 dark:text-neutral-100 leading-relaxed font-normal"
                />
              </div>
            </div>
          )}

          {/* TAB 3: Headline & Motto */}
          {activeTab === 'hero' && (
            <div className="space-y-6">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                  {lang === 'id' ? 'Motto Hidup / Status Ketersediaan' : 'Motto / Status'}
                </label>
                <input
                  type="text"
                  value={editedProfile.availability[lang]}
                  onChange={(e) =>
                    setEditedProfile({
                      ...editedProfile,
                      availability: { ...editedProfile.availability, [lang]: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2 text-xs bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md font-medium"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                  {lang === 'id' ? 'Judul Utama (Headline)' : 'Main Headline'}
                </label>
                <textarea
                  rows={2}
                  value={editedProfile.headline[lang]}
                  onChange={(e) =>
                    setEditedProfile({
                      ...editedProfile,
                      headline: { ...editedProfile.headline, [lang]: e.target.value },
                    })
                  }
                  className="w-full px-3.5 py-2 text-xs bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md leading-relaxed font-bold"
                />
              </div>

              {/* 4 KPIs Editor */}
              <div className="space-y-3 pt-2">
                <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 block">
                  {lang === 'id' ? '4 Strip Metrik Kuantitatif' : '4 Metric Badges'}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {editedProfile.kpis.map((kpi, idx) => (
                    <div key={idx} className="p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg space-y-1.5">
                      <input
                        type="text"
                        value={kpi.value}
                        onChange={(e) => {
                          const updated = [...editedProfile.kpis];
                          updated[idx] = { ...updated[idx], value: e.target.value };
                          setEditedProfile({ ...editedProfile, kpis: updated });
                        }}
                        className="w-full px-2 py-1 text-xs font-bold font-mono bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded"
                        placeholder="Nilai (e.g. 5 Jenjang)"
                      />
                      <input
                        type="text"
                        value={kpi.label[lang]}
                        onChange={(e) => {
                          const updated = [...editedProfile.kpis];
                          updated[idx] = {
                            ...updated[idx],
                            label: { ...updated[idx].label, [lang]: e.target.value },
                          };
                          setEditedProfile({ ...editedProfile, kpis: updated });
                        }}
                        className="w-full px-2 py-1 text-[11px] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded"
                        placeholder="Label"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Projects & Images */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                  {lang === 'id' ? 'Pilih Proyek yang Ingin Diedit:' : 'Select Project to Edit:'}
                </label>
                <select
                  value={selectedProjectId}
                  onChange={(e) => setSelectedProjectId(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md font-medium"
                >
                  {editedProjects.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.title} ({p.client})
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Image Selection */}
              <div className="space-y-3">
                <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 block">
                  {lang === 'id' ? 'Pilih Visual / Gambar Proyek' : 'Project Cover Asset'}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {availableProjectImages.map((img) => {
                    const isSelected = currentProject.image === img.url;
                    return (
                      <div
                        key={img.id}
                        onClick={() => handleUpdateCurrentProject('image', img.url)}
                        className={`relative rounded-lg overflow-hidden border-2 cursor-pointer aspect-[4/3] bg-neutral-100 dark:bg-neutral-800 ${
                          isSelected
                            ? 'border-neutral-950 dark:border-white shadow-xs'
                            : 'border-transparent hover:border-neutral-300 dark:hover:border-neutral-700'
                        }`}
                      >
                        <img
                          src={img.url}
                          alt={img.label}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        {isSelected && (
                          <div className="absolute top-1.5 right-1.5 p-0.5 bg-white dark:bg-neutral-950 rounded-full text-neutral-950 dark:text-white">
                            <Check className="w-3 h-3" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] text-neutral-500">
                    {lang === 'id' ? 'Atau masukkan tautan URL gambar kustom:' : 'Or custom image URL:'}
                  </span>
                  <input
                    type="text"
                    value={currentProject.image}
                    onChange={(e) => handleUpdateCurrentProject('image', e.target.value)}
                    className="w-full px-3 py-1.5 text-xs bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md font-mono"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                    {lang === 'id' ? 'Judul Proyek' : 'Project Title'}
                  </label>
                  <input
                    type="text"
                    value={currentProject.title}
                    onChange={(e) => handleUpdateCurrentProject('title', e.target.value)}
                    className="w-full px-3 py-1.5 text-xs bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                    {lang === 'id' ? 'Institusi / Klien' : 'Client'}
                  </label>
                  <input
                    type="text"
                    value={currentProject.client}
                    onChange={(e) => handleUpdateCurrentProject('client', e.target.value)}
                    className="w-full px-3 py-1.5 text-xs bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                    {lang === 'id' ? 'Tahun' : 'Year'}
                  </label>
                  <input
                    type="text"
                    value={currentProject.year}
                    onChange={(e) => handleUpdateCurrentProject('year', e.target.value)}
                    className="w-full px-3 py-1.5 text-xs bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                  {lang === 'id' ? 'Ringkasan Kasus Singkat' : 'Summary'}
                </label>
                <textarea
                  rows={2}
                  value={currentProject.summary[lang]}
                  onChange={(e) => handleUpdateProjectNested('summary', lang, e.target.value)}
                  className="w-full px-3 py-1.5 text-xs bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md"
                />
              </div>
            </div>
          )}

          {/* TAB 5: Contact & Socials */}
          {activeTab === 'contact' && (
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                  {lang === 'id' ? 'Alamat Surel Resmi' : 'Direct Email Address'}
                </label>
                <input
                  type="email"
                  value={editedProfile.email}
                  onChange={(e) => setEditedProfile({ ...editedProfile, email: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md font-mono"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                  {lang === 'id' ? 'Nomor Telepon / WhatsApp' : 'Phone / WhatsApp'}
                </label>
                <input
                  type="text"
                  value={editedProfile.phone || ''}
                  onChange={(e) => setEditedProfile({ ...editedProfile, phone: e.target.value })}
                  placeholder="+62 812-..."
                  className="w-full px-3.5 py-2 text-xs bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md font-mono"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">GitHub URL</label>
                  <input
                    type="text"
                    value={editedProfile.githubUrl}
                    onChange={(e) => setEditedProfile({ ...editedProfile, githubUrl: e.target.value })}
                    className="w-full px-3 py-1.5 text-xs bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md font-mono"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">LinkedIn URL</label>
                  <input
                    type="text"
                    value={editedProfile.linkedinUrl}
                    onChange={(e) => setEditedProfile({ ...editedProfile, linkedinUrl: e.target.value })}
                    className="w-full px-3 py-1.5 text-xs bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md font-mono"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Figma URL</label>
                  <input
                    type="text"
                    value={editedProfile.figmaUrl}
                    onChange={(e) => setEditedProfile({ ...editedProfile, figmaUrl: e.target.value })}
                    className="w-full px-3 py-1.5 text-xs bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md font-mono"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="flex items-center justify-between px-6 py-4 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
          <button
            onClick={() => {
              if (confirm(lang === 'id' ? 'Kembalikan seluruh data ke bawaan?' : 'Reset all data to defaults?')) {
                onResetDefaults();
                onClose();
              }
            }}
            className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-red-600 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Reset ke Standar' : 'Reset Defaults'}</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white"
            >
              {lang === 'id' ? 'Batal' : 'Cancel'}
            </button>

            <button
              onClick={handleSaveAll}
              className="flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-neutral-950 hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 rounded-lg transition-colors shadow-xs"
            >
              {saveToast ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{lang === 'id' ? 'Tersimpan!' : 'Saved!'}</span>
                </>
              ) : (
                <>
                  <span>{lang === 'id' ? 'Simpan Perubahan' : 'Save Changes'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
