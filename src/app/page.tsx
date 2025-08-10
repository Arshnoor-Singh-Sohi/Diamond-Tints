import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Gallery from '@/components/sections/Gallery'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import InstagramSection from '@/components/sections/InstagramSection'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <InstagramSection />
      <Contact />
    </>
  )
}
