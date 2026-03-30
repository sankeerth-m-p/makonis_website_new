import CTASection from '../components/sections/CTASection.jsx'
import ExpertiseSection from '../components/sections/ExpertiseSection.jsx'
import HeroSection from '../components/sections/HeroSection.jsx'
import PlatformsSection from '../components/sections/PlatformsSection.jsx'
import ServicesGrid from '../components/sections/ServicesGrid.jsx'
import TalentBannerSection from '../components/sections/TalentBannerSection.jsx'
import TrustedClientsSection from '../components/sections/TrustedClientsSection.jsx'
import WhatWeBuild from '../components/sections/WhatWeBuild.jsx'
import WhyUsSection from '../components/sections/WhyUsSection.jsx'

function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedClientsSection />
      <ServicesGrid />
      <TalentBannerSection />
      <PlatformsSection />
      <ExpertiseSection />
      <WhyUsSection />
      <CTASection />
     
    </>
  )
}

export default HomePage
