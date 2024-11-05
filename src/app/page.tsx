import About from '@/components/About'
import Awards from '@/components/Awards'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import MemberPortfolio from '@/components/MemberPortfolio'
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
      <Awards />
      <Projects />
      <Members />
      <Footer />
    </div>
  )
}
