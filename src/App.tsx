/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, Project, EditableProfileData } from './types';
import { initialProfileData, initialProjectsData } from './data/portfolioData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { DesignLab } from './components/DesignLab';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ProjectEstimator } from './components/ProjectEstimator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { EditProfileModal } from './components/EditProfileModal';

const PROFILE_STORAGE_KEY = 'kanzora_portfolio_profile_v5';
const PROJECTS_STORAGE_KEY = 'kanzora_portfolio_projects_v5';

export default function App() {
  const [lang, setLang] = useState<Language>('id');
  const [isDark, setIsDark] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);

  // Persistent customizable profile and projects
  const [profile, setProfile] = useState<EditableProfileData>(() => {
    try {
      const saved = localStorage.getItem(PROFILE_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to parse saved profile', e);
    }
    return initialProfileData;
  });

  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem(PROJECTS_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to parse saved projects', e);
    }
    return initialProjectsData;
  });

  const [prefilledEstimate, setPrefilledEstimate] = useState<{
    service: string;
    scope: string;
    timeline: string;
    estimateText: string;
  } | null>(null);

  // Initialize theme based on preference
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return next;
    });
  };

  const toggleLang = () => {
    setLang((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  const handleOpenConsultation = () => {
    const contactElem = document.getElementById('kontak');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyEstimate = (details: {
    service: string;
    scope: string;
    timeline: string;
    estimateText: string;
  }) => {
    setPrefilledEstimate(details);
    const contactElem = document.getElementById('kontak');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSaveProfile = (newProfile: EditableProfileData) => {
    setProfile(newProfile);
    try {
      localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(newProfile));
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  };

  const handleSaveProjects = (newProjects: Project[]) => {
    setProjects(newProjects);
    try {
      localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(newProjects));
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  };

  const handleResetDefaults = () => {
    setProfile(initialProfileData);
    setProjects(initialProjectsData);
    try {
      localStorage.removeItem(PROFILE_STORAGE_KEY);
      localStorage.removeItem(PROJECTS_STORAGE_KEY);
    } catch (e) {
      console.warn('Could not clear localStorage', e);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 flex flex-col font-sans selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-neutral-950 transition-colors duration-200">
      {/* Top Navigation */}
      <Header
        lang={lang}
        profileName={profile.name}
        onToggleLang={toggleLang}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenConsultation={handleOpenConsultation}
        onOpenEditor={() => setIsEditorOpen(true)}
      />

      <main className="flex-1">
        {/* Split Hero with oversized typography and KPI strip */}
        <Hero
          lang={lang}
          profile={profile}
          onOpenConsultation={handleOpenConsultation}
          onEditClick={() => setIsEditorOpen(true)}
        />

        {/* Selected Works Bento Grid */}
        <ProjectShowcase
          lang={lang}
          profile={profile}
          projects={projects}
          onSelectProject={(project) => setSelectedProject(project)}
          onEditClick={() => setIsEditorOpen(true)}
        />

        {/* Interactive Living Design Token & Micro-Interactions Lab */}
        <DesignLab lang={lang} />

        {/* Technical & Design Arsenal Matrix */}
        <SkillsMatrix lang={lang} />

        {/* Career Timeline */}
        <ExperienceTimeline lang={lang} />

        {/* Partner Endorsements & Proof */}
        <TestimonialsSection lang={lang} />

        {/* Interactive Scope & Pricing Estimator */}
        <ProjectEstimator
          lang={lang}
          onApplyEstimate={handleApplyEstimate}
        />

        {/* Inquiry Form & Direct Contact */}
        <ContactSection
          lang={lang}
          profile={profile}
          onEditClick={() => setIsEditorOpen(true)}
          prefilledEstimate={prefilledEstimate}
        />
      </main>

      {/* Quiet Footer */}
      <Footer lang={lang} profileName={profile.name} />

      {/* Case Study Deep-Dive Lightbox / Modal */}
      <CaseStudyModal
        project={selectedProject}
        lang={lang}
        onClose={() => setSelectedProject(null)}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Live Customizer / Editor Modal */}
      <EditProfileModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        lang={lang}
        profile={profile}
        projects={projects}
        onSaveProfile={handleSaveProfile}
        onSaveProjects={handleSaveProjects}
        onResetDefaults={handleResetDefaults}
      />
    </div>
  );
}
