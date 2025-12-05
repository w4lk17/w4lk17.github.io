import AboutSection from './components/About'
import ContactSection from './components/Contact'
import ExperienceSection from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import HomeSection from './components/Home'
import ProjectsSection from './components/Projects'
import SkillsSection from './components/Skills'

function App() {

  return (
    <div className='min-h-screen bg-background text-foreground'>
      {/* Header */}
      <Header />
      <div className="main">
        {/* Hero */}
        <HomeSection />
        {/* About */}
        <AboutSection />
        {/* Experience */}
        <ExperienceSection />
        {/* Skills */}
        <SkillsSection />
        {/* Projects */}
        <ProjectsSection />
        {/* Contact */}
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
