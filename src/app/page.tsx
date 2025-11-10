"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/animated-background";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import AboutSection from "@/components/sections/about";
import EducationSection from "@/components/sections/education";
import ExperienceSection from "@/components/sections/experience";
import HeroSection from "@/components/sections/hero";
import LearningJourneySection from "@/components/sections/learning-journey";

function MainPage() {
  return (
    <>
      <SmoothScroll>
        <main className={cn("bg-slate-100 dark:bg-transparent")}>
          <div className="top-0 z-0 fixed w-full h-screen">
            <AnimatedBackground />
          </div>
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
          <AboutSection />
          <EducationSection />
          <ExperienceSection />
          <LearningJourneySection />
        </main>
      </SmoothScroll>
    </>
  );
}

export default MainPage;
