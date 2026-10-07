import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import  About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Project/Projects'
import Experience from '../components/Expreince'
import Education from '../components/Education'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
const Home = () => {

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">

        <Navbar />

        <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact /> 
        </main>
        
        <Footer />
    </div>
  )
}

export default Home