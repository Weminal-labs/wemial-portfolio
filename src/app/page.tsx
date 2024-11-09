import About from '@/components/About'
import Awards from '@/components/Awards'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Members from '@/components/Members'
import Projects from '@/components/Projects'
import ScrollToTop from '@/components/ScrollToTop'
import Vision from '@/components/Vision'

export default function Home() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Hero />
      <About />
      <Vision />
      <Members />
      <Awards />
      <Projects />
      <Footer />
    </div>
  )
}
