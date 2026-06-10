import { LandingNav } from "@/components/landing/nav"
import { LandingHero } from "@/components/landing/hero"
import { LogosMarquee } from "@/components/landing/logos-marquee"
import { BentoGrid } from "@/components/landing/bento"
import { FeaturesSection } from "@/components/landing/features"
import { ChartsHighlight } from "@/components/landing/charts-highlight"
import { LandingPricing } from "@/components/landing/pricing"
import { TestimonialsCards } from "@/components/landing/testimonials"
import { LandingFAQ } from "@/components/landing/faq"
import { FinalCtaSection } from "@/components/landing/final-cta"
import { LandingFooter } from "@/components/landing/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <>
      <main className="bg-[#05060B]">
        <LandingNav />
        <LandingHero />
        <LogosMarquee />
        <BentoGrid />
        <FeaturesSection />
        <ChartsHighlight />
        <LandingPricing />
        <TestimonialsCards />
        <LandingFAQ />
        <FinalCtaSection />
      </main>
      <LandingFooter />
      <WhatsAppButton />
    </>
  )
}
