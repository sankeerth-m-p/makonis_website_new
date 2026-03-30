import Button from '../Button.jsx'
import { talentBanner } from '../../config/homeContent.js'

function TalentBannerSection() {
  return (
    <section className="py-16 md:py-0">
      <div className="relative min-h-[520px] overflow-hidden bg-makonis-navy text-white">
        
        {/* IMAGE */}
        <img
          src={talentBanner.image}
          alt={talentBanner.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-makonis-navy/45" />

        {/* CONTENT */}
        <div className="container-default relative z-10 flex min-h-[520px] items-center py-16">
          <div className="grid w-full gap-10 lg:grid-cols-2">

            {/* LEFT */}
            <div className="max-w-xl">
              <p className="text-makonis-white/80">
                {talentBanner.eyebrow}
              </p>

              {/* ✅ USE h1 SYSTEM */}
              <h1 className="mt-6 text-white">
                {talentBanner.title}
              </h1>
            </div>

            {/* RIGHT */}
            <div className="flex items-end lg:justify-end">
              <div className="max-w-xl">
                <p className="text-makonis-white/90">
                  {talentBanner.description}
                </p>

                <Button variant="light" className="mt-6">
                  {talentBanner.ctaLabel}
                </Button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default TalentBannerSection