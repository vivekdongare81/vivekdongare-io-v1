import './App.css';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import AwardsSection from './components/AwardsSection';
import ContactSection from './components/ContactSection';
import CookieBanner from './components/CookieBanner';

function App() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <AboutSection />
      <ProjectsSection />
      <AwardsSection />
      <ContactSection />
      <CookieBanner />
    </>
  );
}

export default App;
