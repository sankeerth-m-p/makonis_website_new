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
    if (isTransitioning) return

    const cardElement = cardRef.current?.querySelector('[data-animated-card-root="true"]')
    if (!cardElement) return

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
  const { ai, testing, integration, iot, data, deviceEngineering, globalCapabilityCenter } = serviceCards
  const containerRef = useRef(null)

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div ref={containerRef} className="mx-auto max-w-7xl px-6">
        <FloatUpText className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm text-black/60 mb-3">
            {whatWeBuild.eyebrow}
          </p>
          <h1>{whatWeBuild.title}</h1>
          <p className="mt-4 text-black/60">
            {whatWeBuild.description}
          </p>
        </FloatUpText>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-6 md:grid-rows-10">
          <div className="col-span-1 md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-7 h-full">
            <ServiceCardLink href={ai.href} title={ai.title}>
              <AnimatedCard entry={false} hover={false} className="w-full h-full rounded-lg border border-black/10 overflow-hidden flex flex-col bg-white">
                <div className="p-8">
                  <ServiceIcon label="AI" />
                  <h2>{ai.title}</h2>
                  <p className="mt-4 text-black/70">{ai.description}</p>
                  <p className="mt-6 font-medium">Explore</p>
                </div>
                <div className="mt-auto hidden md:block w-full overflow-hidden">
                  <img src={ai.image} alt={ai.title} className="w-full h-full object-cover" />
                </div>
              </AnimatedCard>
            </ServiceCardLink>
          </div>

          <div className="col-span-1 md:col-start-3 md:col-span-2 md:row-start-1 md:row-span-4 h-full">
            <ServiceCardLink href={testing.href} title={testing.title}>
              <AnimatedCard entry={false} hover={false} className="w-full h-full rounded-lg border border-black/10 overflow-hidden grid grid-cols-1 md:grid-cols-2 bg-white">
                <img
                  src={testing.image}
                  alt={testing.title}
                  className="w-full h-full object-cover"
                />
                <div className="p-6 flex flex-col justify-center">
                  <ServiceIcon label="Testing" />
                  <h3 className="mt-2 text-2xl font-semibold">{testing.title}</h3>
                  <p className="mt-3 text-black/70">{testing.description}</p>
                  <p className="mt-4 font-medium">Explore</p>
                </div>
              </AnimatedCard>
            </ServiceCardLink>
          </div>

          <div className="col-span-1 md:col-start-3 md:col-span-2 md:row-start-5 md:row-span-6 h-full">
            <ServiceCardLink href={integration.href} title={integration.title}>
              <AnimatedCard entry={false} hover={false} className="w-full h-full rounded-lg border border-black/10 overflow-hidden flex flex-col bg-white">
                <div className="p-8">
                  <ServiceIcon label="Integration" />
                  <h2 className="text-2xl font-semibold">{integration.title}</h2>
                  <p className="mt-4 text-black/70">{integration.description}</p>
                  <p className="mt-6 font-medium">Explore</p>
                </div>
                <div className="mt-auto hidden md:block w-full overflow-hidden">
                  <img src={integration.image} alt={integration.title} className="w-full h-full object-cover" />
                </div>
              </AnimatedCard>
            </ServiceCardLink>
          </div>

          <div className="col-span-1 md:col-start-1 md:col-span-1 md:row-start-8 md:row-span-3 h-full">
            <ServiceCardLink href={iot.href} title={iot.title}>
              <AnimatedCard entry={false} hover={false} className="w-full h-full rounded-lg border border-black/10 p-6 bg-white">
                <ServiceIcon label="IoT" />
                <h3 className="text-2xl font-semibold">{iot.title}</h3>
                <p className="mt-3 text-black/70">{iot.description}</p>
                <p className="mt-4 font-medium">Explore</p>
              </AnimatedCard>
            </ServiceCardLink>
          </div>

          <div className="col-span-1 md:col-start-2 md:col-span-1 md:row-start-8 md:row-span-3 h-full">
            <ServiceCardLink href={data.href} title={data.title}>
              <AnimatedCard entry={false} hover={false} className="w-full h-full rounded-lg border border-black/10 p-6 bg-white">
                <ServiceIcon label="Data" />
                <h3 className="text-2xl font-semibold">{data.title}</h3>
                <p className="mt-3 text-black/70">{data.description}</p>
                <p className="mt-4 font-medium">Explore</p>
              </AnimatedCard>
            </ServiceCardLink>
          </div>

          <div className="hidden md:block md:col-start-5 md:col-span-2 md:row-start-1 md:row-span-5 h-full">
            <ServiceCardLink href={deviceEngineering.href} title={deviceEngineering.title}>
              <AnimatedCard entry={false} hover={false} className="w-full h-full rounded-lg border border-black/10 overflow-hidden flex flex-col bg-white">
                <div className="p-6">
                  <ServiceIcon label="Device Engineering" />
                  <h2 className="text-2xl font-semibold">{deviceEngineering.title}</h2>
                  <p className="mt-4 text-black/70">{deviceEngineering.description}</p>
                  <p className="mt-6 font-medium">Explore</p>
                </div>
                <div className="mt-auto hidden md:block w-full overflow-hidden">
                  <img src={deviceEngineering.image} alt={deviceEngineering.title} className="w-full h-full object-cover" />
                </div>
              </AnimatedCard>
            </ServiceCardLink>
          </div>

          <div className="hidden md:block md:col-start-5 md:col-span-2 md:row-start-6 md:row-span-5 h-full">
            <ServiceCardLink href={globalCapabilityCenter.href} title={globalCapabilityCenter.title}>
              <AnimatedCard entry={false} hover={false} className="w-full h-full rounded-lg border border-black/10 overflow-hidden flex flex-col bg-white">
                <div className="p-6">
                  <ServiceIcon label="Global Capability Center" />
                  <h2 className="text-2xl font-semibold">{globalCapabilityCenter.title}</h2>
                  <p className="mt-4 text-black/70">{globalCapabilityCenter.description}</p>
                  <p className="mt-6 font-medium">Explore</p>
                </div>
                <div className="mt-auto hidden md:block w-full overflow-hidden">
                  <img src={globalCapabilityCenter.image} alt={globalCapabilityCenter.title} className="w-full h-full object-cover" />
                </div>
              </AnimatedCard>
            </ServiceCardLink>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ServicesGrid
