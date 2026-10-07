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
    <div className='bg-slate-950'>

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