import AboutSection from './components/About'
import ExperienceSection from './components/Experience'
import Header from './components/Header'
import HomeSection from './components/Home'
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
        {/* Contact */}
      </div>

      {/* Footer */}
    </div>
  )
}

export default App
