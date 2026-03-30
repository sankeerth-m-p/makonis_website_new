import CTASection from '../components/sections/CTASection.jsx'
import ExpertiseSection from '../components/sections/ExpertiseSection.jsx'
import Footer from '../components/sections/Footer.jsx'
import HeroSection from '../components/sections/HeroSection.jsx'
import PlatformsSection from '../components/sections/PlatformsSection.jsx'
import ServicesGrid from '../components/sections/ServicesGrid.jsx'
import TalentBannerSection from '../components/sections/TalentBannerSection.jsx'
import TrustedClientsSection from '../components/sections/TrustedClientsSection.jsx'
import WhatWeBuild from '../components/sections/WhatWeBuild.jsx'
import WhyUsScrollSection from '../components/sections/WhyUsScrollSection.jsx'

function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedClientsSection />
      <ServicesGrid />
      <TalentBannerSection />
      <PlatformsSection />
      <ExpertiseSection />
      <WhyUsScrollSection />
      <CTASection />
      <Footer />
    </>
  )
}

export default HomePage
