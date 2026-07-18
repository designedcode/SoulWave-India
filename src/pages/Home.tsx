import { HeroSection } from '../components/home/HeroSection'
import { ServicesPreviewSection } from '../components/home/ServicesPreviewSection'
import { WhyChooseSection } from '../components/home/WhyChooseSection'
import { TestimonialsPreviewSection } from '../components/home/TestimonialsPreviewSection'
import { MeetReaderSection } from '../components/home/MeetReaderSection'
import { BookingProcessSection } from '../components/home/BookingProcessSection'
import { FAQSection } from '../components/home/FAQSection'
import { FinalCTASection } from '../components/home/FinalCTASection'
import { SectionDivider } from '../components/decorative/SectionDivider'
import { SEO } from '../components/SEO'

export function Home() {
  return (
    <>
      <SEO />
      <HeroSection />
      <SectionDivider />
      <ServicesPreviewSection />
      <WhyChooseSection />
      <SectionDivider />
      <TestimonialsPreviewSection />
      <MeetReaderSection />
      <BookingProcessSection />
      <FAQSection />
      <FinalCTASection />
    </>
  )
}
