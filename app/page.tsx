import { Hero } from "@/components/hero"
import { CompaniesCarousel } from "@/components/companies-carousel"
import { HowItWorks } from "@/components/how-it-works"
import { AboutUs } from "@/components/about-us"
import { PainPoints } from "@/components/pain-points"
import { FeaturesShowcase } from "@/components/features-showcase"
import { Pricing } from "@/components/pricing"
import { SecurityBenefits } from "@/components/security-benefits"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollRevealWrapper } from "@/components/scroll-reveal-wrapper"

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <PainPoints />
        <CompaniesCarousel />
        <HowItWorks />
        <ScrollRevealWrapper>
          <FeaturesShowcase />
        </ScrollRevealWrapper>
        <ScrollRevealWrapper>
          <Pricing />
        </ScrollRevealWrapper>
        <SecurityBenefits />
        <ScrollRevealWrapper>
          <Testimonials />
        </ScrollRevealWrapper>
        <ScrollRevealWrapper>
          <FAQ />
        </ScrollRevealWrapper>
        <ScrollRevealWrapper>
          <AboutUs />
        </ScrollRevealWrapper>
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

