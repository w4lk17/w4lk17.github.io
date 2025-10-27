import AboutSection from './components/About'
import Header from './components/Header'
import HomeSection from './components/Home'

function App() {

  return (
    <div className='min-h-screen bg-background text-foreground'>
      {/* Header */}
      <Header />
      <div className="main">
        {/* Hero */}
        <HomeSection />
        {/* About */}
        <AboutSection/>
        {/* Experience */}
        {/* Projects */}
        {/* Skills */}
        {/* Contact */}
      </div>

      {/* Footer */}
    </div>
  )
}

export default App
