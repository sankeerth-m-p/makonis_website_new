import { useRef } from 'react'
import AnimatedCard from '../AnimatedCard.jsx'
import FloatUpText from '../floatUpText.jsx'
import usePageTransition from '../transition/usePageTransition.jsx'
import { serviceCards, whatWeBuild } from '../../config/homeContent.js'

function ServiceIcon({ label }) {
  return <div className="mb-4 text-black/80 text-sm">{label}</div>
}

function ServiceCardLink({ href, title, children }) {
  const cardRef = useRef(null)
  const { beginPageTransition, isTransitioning } = usePageTransition()

  const handleClick = (event) => {
    event.preventDefault()

    if (isTransitioning) {
      return
    }

    const cardElement = cardRef.current?.querySelector('[data-animated-card-root="true"]')

    if (!cardElement) {
      return
    }

    const rect = cardElement.getBoundingClientRect()
    const styles = window.getComputedStyle(cardElement)

    beginPageTransition({
      href,
      rect: {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      },
      backgroundColor: styles.backgroundColor,
      borderRadius: styles.borderRadius,
    })
  }

  return (
    <a
      ref={cardRef}
      href={href}
      className="contents"
      aria-label={`Open ${title}`}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}

function ServicesGrid() {
  const { ai, testing, integration, iot, data } = serviceCards

  return (
    <section className="bg-white py-24">
      <div className="container-default">
        {/* HEADER */}
        <FloatUpText className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm text-black/60 mb-3">{whatWeBuild.eyebrow}</p>

          <h1>{whatWeBuild.title}</h1>

          <p className="mt-4 text-black/60">{whatWeBuild.description}</p>
        </FloatUpText>

        <div className="grid max-w-5xl mx-auto grid-cols-1 md:grid-cols-4 md:grid-rows-10 gap-6">
          {/* AI BIG */}
          <ServiceCardLink href={ai.href} title={ai.title}>
            <AnimatedCard delay={0} className="col-span-1 md:col-span-2 md:row-span-7 rounded-lg border border-black/10 overflow-hidden flex flex-col bg-white">
              <div className="p-8">
                <ServiceIcon label="AI" />
                <h2>{ai.title}</h2>
                <p className="mt-4 text-black/70">{ai.description}</p>
                <p className="mt-6 font-medium">Learn →</p>
              </div>

              {/* ↓ hidden on mobile */}
              <div className="mt-auto hidden md:block">
                <img src={ai.image} alt={ai.title} className="w-full h-full object-cover" />
              </div>
            </AnimatedCard>
          </ServiceCardLink>

          {/* TESTING */}
          <ServiceCardLink href={testing.href} title={testing.title}>
            <AnimatedCard delay={120} className="col-span-1 md:col-span-2 md:row-span-4 rounded-lg border border-black/10 overflow-hidden grid grid-cols-1 md:grid-cols-2 bg-white">
              {/* ↓ hidden on mobile */}
              <img src={testing.image} alt={testing.title} className="hidden md:block w-full h-full object-cover" />

              <div className="p-6 flex flex-col justify-center">
                <ServiceIcon label="Testing" />
                <h3 className="mt-2">{testing.title}</h3>
                <p className="mt-3 text-black/70">{testing.description}</p>
                <p className="mt-4 font-medium">Learn →</p>
              </div>
            </AnimatedCard>
          </ServiceCardLink>

          {/* INTEGRATION */}
          <ServiceCardLink href={integration.href} title={integration.title}>
            <AnimatedCard delay={240} className="col-span-1 md:col-span-2 md:row-span-6 rounded-lg border border-black/10 overflow-hidden flex flex-col bg-white">
              <div className="p-8">
                <ServiceIcon label="Integration" />
                <h2>{integration.title}</h2>
                <p className="mt-4 text-black/70">{integration.description}</p>
                <p className="mt-6 font-medium">Explore →</p>
              </div>

              {/* ↓ hidden on mobile */}
              <div className="mt-auto hidden md:block">
                <img src={integration.image} alt={integration.title} className="w-full h-full object-cover" />
              </div>
            </AnimatedCard>
          </ServiceCardLink>

          {/* IoT */}
          <ServiceCardLink href={iot.href} title={iot.title}>
            <AnimatedCard delay={360} className="col-span-1 md:row-span-3 rounded-lg border border-black/10 p-6 bg-white">
              <ServiceIcon label="IoT" />
              <h3>{iot.title}</h3>
              <p className="mt-3 text-black/70">{iot.description}</p>
              <p className="mt-4 font-medium">Learn →</p>
            </AnimatedCard>
          </ServiceCardLink>

          {/* Data */}
          <ServiceCardLink href={data.href} title={data.title}>
            <AnimatedCard delay={480} className="col-span-1 md:row-span-3 rounded-lg border border-black/10 p-6 bg-white">
              <ServiceIcon label="Data" />
              <h3>{data.title}</h3>
              <p className="mt-3 text-black/70">{data.description}</p>
              <p className="mt-4 font-medium">Learn →</p>
            </AnimatedCard>
          </ServiceCardLink>
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid
