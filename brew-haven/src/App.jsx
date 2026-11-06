import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-cream text-espresso antialiased">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Menu />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
