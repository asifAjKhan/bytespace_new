import Header from '@/components/Header'
import Hero from '@/components/Hero'
import LogoStrip from '@/components/LogoStrip'
import CourseSection from '@/components/CourseSection'
import LearningPaths from '@/components/LearningPaths'
import PathSection from '@/components/PathSection'
import CreatorSection from '@/components/CreatorSection'
import CreatorCTA from '@/components/CreatorCTA'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <LogoStrip />
      <CourseSection />
      <LearningPaths />
      <PathSection />
      <CreatorSection />
      <CreatorCTA />
      <Testimonials />
      <Footer />
    </main>
  )
}
