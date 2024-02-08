'use client'
import { HeroSection } from "./components/HeroSection";
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import { ProjectsSection } from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import SkillSection from "./components/SkillSection";
import InterestSection from "./components/InterestSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FFE9D1]">
      <Navbar />
      <div className='container mt-24 mx-auto py-4}'>
      <HeroSection />
      <AboutSection/>
      <SkillSection/>
      <InterestSection/>
      <ProjectsSection/>
      <EmailSection/>
      </div>
      <Footer/>
    </main>
  );
}
