import Button from '../Button.jsx'
import { heroContent } from '../../config/homeContent.js'

function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-var(--navbar-height))] overflow-hidden bg-makonis-navy text-white">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover object-top grayscale"
        >
          <source src={heroContent.videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 min-h-[calc(100vh-var(--navbar-height))]">
        <div className="container-default min-h-[calc(100vh-var(--navbar-height))] py-16 md:py-20 lg:py-24">
          <div className="grid min-h-[calc(100vh-var(--navbar-height)-8rem)] grid-cols-1 gap-12 lg:grid-cols-2 lg:min-h-[calc(100vh-var(--navbar-height)-10rem)]">
            <div className="flex items-start">
              <h1 className="hero-title max-w-[10ch]">{heroContent.title}</h1>
            </div>

            <div className="flex max-w-md flex-col items-start justify-end lg:ml-auto">
              <p className="leading-relaxed text-makonis-white/90">
                {heroContent.description}
              </p>
              <Button variant="light" className="mt-6">
                {heroContent.ctaLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default HeroSection
