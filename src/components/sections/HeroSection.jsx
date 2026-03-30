import { useEffect, useRef } from 'react'
import Button from '../Button.jsx'
import { heroContent } from '../../config/homeContent.js'

function HeroSection() {
  const videoRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      // video zoom
      if (videoRef.current) {
        const scale = 1 + scrollY * 0.0005
        videoRef.current.style.transform = `scale(${Math.min(scale, 1.05)})`
      }

      // text parallax — moves up at 40% of scroll speed, so it "lags" behind
      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(${scrollY * 0.1}px)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-[calc(100vh-var(--navbar-height))] pt-[var(--navbar-height)] h-screen overflow-hidden bg-makonis-navy text-white">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover object-top grayscale transition-transform duration-100 ease-out origin-center"
        >
          <source src={heroContent.videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 min-h-[calc(100vh-var(--navbar-height))] will-change-transform"
        style={{ transition: 'transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
      >
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