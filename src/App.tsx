/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { ProgramStructure } from './components/ProgramStructure';
import { PracticalLearning } from './components/PracticalLearning';
import { WhoIsItFor } from './components/WhoIsItFor';
import { Outcomes } from './components/Outcomes';
import { FinalProject } from './components/FinalProject';
import { LeadFormSection } from './components/LeadFormSection';
import { Footer } from './components/Footer';
import { BottomStickyCTA } from './components/BottomStickyCTA';
import { CounselingModal } from './components/CounselingModal';
import { CurriculumPdfModal } from './components/CurriculumPdfModal';
import { LeadSubmissionsDrawer } from './components/LeadSubmissionsDrawer';
import { LeadSubmission } from './types';
import { initMetaPixelFormListener, trackMetaPixelLead } from './utils/metaPixel';

export default function App() {
  const [leads, setLeads] = useState<LeadSubmission[]>(() => {
    try {
      const saved = localStorage.getItem('stock_market_mastery_leads');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [counselingModalOpen, setCounselingModalOpen] = useState(false);
  const [pdfModalOpen, setPdfModalOpen] = useState(false);
  const [modalLevelTarget, setModalLevelTarget] = useState<string | undefined>(undefined);
  const [adminDrawerOpen, setAdminDrawerOpen] = useState(false);

  // Initialize Meta Pixel cross-origin listener for successful form submissions
  useEffect(() => {
    const cleanup = initMetaPixelFormListener();
    return () => {
      cleanup();
    };
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('stock_market_mastery_leads', JSON.stringify(leads));
    } catch (e) {
      console.error('Failed to save leads to localStorage', e);
    }
  }, [leads]);

  const handleLeadSubmitted = (newLead: LeadSubmission) => {
    setLeads((prev) => [newLead, ...prev]);
    trackMetaPixelLead('app_lead_submission');
  };

  const handleOpenCounselingModal = (level?: string) => {
    setModalLevelTarget(level);
    setCounselingModalOpen(true);
  };

  const handleCloseCounselingModal = () => {
    setCounselingModalOpen(false);
    setModalLevelTarget(undefined);
  };

  const handleClearLeads = () => {
    setLeads([]);
    localStorage.removeItem('stock_market_mastery_leads');
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Header */}
      <Header
        onOpenCounselingModal={() => handleOpenCounselingModal()}
        onOpenAdminDrawer={() => setAdminDrawerOpen(true)}
        onOpenPdfModal={() => setPdfModalOpen(true)}
        leadCount={leads.length}
      />

      {/* Hero Section */}
      <Hero
        onOpenCounselingModal={() => handleOpenCounselingModal()}
        onScrollToCurriculum={() => scrollToSection('curriculum')}
        onScrollToLeadForm={() => scrollToSection('get-details')}
      />

      {/* Problem Section (Beginner Mistakes) */}
      <ProblemSection
        onOpenCounselingModal={() => handleOpenCounselingModal()}
      />

      {/* Solution Section (Key Benefits) */}
      <SolutionSection
        onOpenCounselingModal={() => handleOpenCounselingModal()}
      />

      {/* Program Structure (3 Levels) */}
      <ProgramStructure
        onOpenCounselingModal={(levelTarget) => handleOpenCounselingModal(levelTarget)}
        onOpenPdfModal={() => setPdfModalOpen(true)}
      />

      {/* Practical Learning & Interactive Tools */}
      <PracticalLearning
        onOpenCounselingModal={() => handleOpenCounselingModal()}
      />

      {/* Who Is It For */}
      <WhoIsItFor
        onOpenCounselingModal={(persona) => handleOpenCounselingModal(persona)}
      />

      {/* Outcomes & Deliverables */}
      <Outcomes
        onOpenCounselingModal={() => handleOpenCounselingModal()}
      />

      {/* Final Capstone Project Showcase */}
      <FinalProject
        onOpenCounselingModal={() => handleOpenCounselingModal()}
      />

      {/* Lead Capture Form & Counseling Banner */}
      <LeadFormSection
        onOpenCounselingModal={() => handleOpenCounselingModal()}
      />

      {/* Footer & Disclaimer */}
      <Footer
        onOpenCounselingModal={() => handleOpenCounselingModal()}
        onOpenPdfModal={() => setPdfModalOpen(true)}
      />

      {/* Floating Call to Action Bar at bottom */}
      <BottomStickyCTA
        onOpenCounselingModal={() => handleOpenCounselingModal()}
        onScrollToForm={() => scrollToSection('get-details')}
        onOpenPdfModal={() => setPdfModalOpen(true)}
      />

      {/* Counseling Call Booking Modal */}
      <CounselingModal
        isOpen={counselingModalOpen}
        onClose={handleCloseCounselingModal}
        preselectedLevel={modalLevelTarget}
      />

      {/* Full 8-Page Curriculum PDF Modal & Viewer */}
      <CurriculumPdfModal
        isOpen={pdfModalOpen}
        onClose={() => setPdfModalOpen(false)}
        onOpenCounselingModal={(level) => {
          setPdfModalOpen(false);
          handleOpenCounselingModal(level);
        }}
      />

      {/* Admin / Reviewer Lead Submissions Drawer */}
      <LeadSubmissionsDrawer
        isOpen={adminDrawerOpen}
        onClose={() => setAdminDrawerOpen(false)}
        leads={leads}
        onClearLeads={handleClearLeads}
      />

    </div>
  );
}
