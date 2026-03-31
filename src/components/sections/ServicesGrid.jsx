/* 
  Path Taken: framer-motion (YES)
  Fix: Explicit col-start/row-start on all cards so new cards land in 
  right columns (5-6) instead of wrapping to a new row below.
*/

import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedCard from '../AnimatedCard.jsx'
import FloatUpText from '../floatUpText.jsx'
import usePageTransition from '../transition/usePageTransition.jsx'
import { serviceCards, whatWeBuild } from '../../config/homeContent.js'

function ServiceIcon({ label }) {
  return <div className="mb-4 text-black/80 text-sm">{label}</div>
}

function ServiceCardLink({ href, title, disabled, children }) {
  const cardRef = useRef(null)
  const { beginPageTransition, isTransitioning } = usePageTransition()

  const handleClick = (event) => {
    event.preventDefault()
    if (disabled || isTransitioning) return

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

function NewServiceCard({ label, title, description }) {
  return (
    <div className="rounded-lg border border-black/10 bg-white p-8 flex flex-col h-full">
      <div className="mb-4 text-black/80 text-sm">{label}</div>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-4 text-black/70 flex-1">{description}</p>
      <p className="mt-6 font-medium">Learn →</p>
    </div>
  )
}

function ServicesGrid() {
  const { ai, testing, integration, iot, data, cloud, cyber } = serviceCards
  const [gridMode, setGridMode] = useState('collapsed')
  const containerRef = useRef(null)

  const handleExpand = () => {
    setGridMode('expanding')
    setTimeout(() => setGridMode('expanded'), 500)
  }

  const handleCollapse = () => {
    setGridMode('collapsing')
    setTimeout(() => setGridMode('collapsed'), 500)
  }

  const isAnimating = gridMode === 'expanding' || gridMode === 'collapsing'
  const isExpanded = gridMode === 'expanded' || gridMode === 'expanding'

  return (
    <section className="bg-white py-24 overflow-hidden">
      <motion.div
        ref={containerRef}
        className="mx-auto px-6"
        animate={{
          maxWidth: isExpanded ? '80rem' : '64rem'
        }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* HEADER */}
        <FloatUpText className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm text-black/60 mb-3">{whatWeBuild.eyebrow}</p>
          <h1>{whatWeBuild.title}</h1>
          <p className="mt-4 text-black/60">{whatWeBuild.description}</p>
        </FloatUpText>

        {/* GRID — explicit col/row placement on every card to prevent wrapping */}
        <div className={`grid grid-cols-1 grid-rows-10 gap-6 ${isExpanded ? 'md:grid-cols-6' : 'md:grid-cols-4'}`}>

          {/* AI — cols 1-2, rows 1-7 (both modes) */}
          <motion.div
            layout
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="col-span-1 md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-7 h-full"
          >
            <ServiceCardLink href={ai.href} title={ai.title} disabled={isAnimating}>
              <AnimatedCard delay={0} className="w-full h-full rounded-lg border border-black/10 overflow-hidden flex flex-col bg-white">
                <div className="p-8">
                  <ServiceIcon label="AI" />
                  <h2>{ai.title}</h2>
                  <p className="mt-4 text-black/70">{ai.description}</p>
                  <p className="mt-6 font-medium">Learn →</p>
                </div>
                <div className="mt-auto hidden md:block w-full overflow-hidden">
                  <img src={ai.image} alt={ai.title} className="w-full h-full object-cover" />
                </div>
              </AnimatedCard>
            </ServiceCardLink>
          </motion.div>

          {/* TESTING — cols 3-4, rows 1-4 (both modes) */}
          <motion.div
            layout
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="col-span-1 md:col-start-3 md:col-span-2 md:row-start-1 md:row-span-4 h-full"
          >
            <ServiceCardLink href={testing.href} title={testing.title} disabled={isAnimating}>
              <AnimatedCard delay={120} className="w-full h-full rounded-lg border border-black/10 overflow-hidden grid grid-cols-1 md:grid-cols-2 bg-white">
                <img src={testing.image} alt={testing.title} className="hidden md:block w-full h-full object-cover" />
                <div className="p-6 flex flex-col justify-center">
                  <ServiceIcon label="Testing" />
                  <h3 className="mt-2 text-2xl font-semibold">{testing.title}</h3>
                  <p className="mt-3 text-black/70">{testing.description}</p>
                  <p className="mt-4 font-medium">Learn →</p>
                </div>
              </AnimatedCard>
            </ServiceCardLink>
          </motion.div>

          {/* INTEGRATION — cols 3-4, rows 5-10 (both modes) */}
          <motion.div
            layout
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="col-span-1 md:col-start-3 md:col-span-2 md:row-start-5 md:row-span-6 h-full"
          >
            <ServiceCardLink href={integration.href} title={integration.title} disabled={isAnimating}>
              <AnimatedCard delay={240} className="w-full h-full rounded-lg border border-black/10 overflow-hidden flex flex-col bg-white">
                <div className="p-8">
                  <ServiceIcon label="Integration" />
                  <h2 className="text-2xl font-semibold">{integration.title}</h2>
                  <p className="mt-4 text-black/70">{integration.description}</p>
                  <p className="mt-6 font-medium">Explore →</p>
                </div>
                <div className="mt-auto hidden md:block w-full overflow-hidden">
                  <img src={integration.image} alt={integration.title} className="w-full h-full object-cover" />
                </div>
              </AnimatedCard>
            </ServiceCardLink>
          </motion.div>

          {/* IoT — col 1, rows 8-10 (both modes) */}
          <motion.div
            layout
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="col-span-1 md:col-start-1 md:col-span-1 md:row-start-8 md:row-span-3 h-full"
          >
            <ServiceCardLink href={iot.href} title={iot.title} disabled={isAnimating}>
              <AnimatedCard delay={360} className="w-full h-full rounded-lg border border-black/10 p-6 bg-white">
                <ServiceIcon label="IoT" />
                <h3 className="text-2xl font-semibold">{iot.title}</h3>
                <p className="mt-3 text-black/70">{iot.description}</p>
                <p className="mt-4 font-medium">Learn →</p>
              </AnimatedCard>
            </ServiceCardLink>
          </motion.div>

          {/* DATA — col 2, rows 8-10 (both modes) */}
          <motion.div
            layout
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="col-span-1 md:col-start-2 md:col-span-1 md:row-start-8 md:row-span-3 h-full"
          >
            <ServiceCardLink href={data.href} title={data.title} disabled={isAnimating}>
              <AnimatedCard delay={480} className="w-full h-full rounded-lg border border-black/10 p-6 bg-white">
                <ServiceIcon label="Data" />
                <h3 className="text-2xl font-semibold">{data.title}</h3>
                <p className="mt-3 text-black/70">{data.description}</p>
                <p className="mt-4 font-medium">Learn →</p>
              </AnimatedCard>
            </ServiceCardLink>
          </motion.div>

          {/* NEW CARDS — pinned to cols 5-6 so they NEVER wrap below */}
          <AnimatePresence>
            {isExpanded && (
              <>
                {/* CLOUD — cols 5-6, rows 1-5 */}
                <motion.div
                  key="cloud"
                  initial={{ opacity: 0, x: 200 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 200 }}
                  transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
                  className="hidden md:block md:col-start-5 md:col-span-2 md:row-start-1 md:row-span-5 h-full"
                >
                  <ServiceCardLink href={cloud.href} title={cloud.title} disabled={isAnimating}>
                    <NewServiceCard label="Cloud" {...cloud} />
                  </ServiceCardLink>
                </motion.div>

                {/* CYBER — cols 5-6, rows 6-10 */}
                <motion.div
                  key="cyber"
                  initial={{ opacity: 0, x: 200 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 200 }}
                  transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1], delay: 0.25 }}
                  className="hidden md:block md:col-start-5 md:col-span-2 md:row-start-6 md:row-span-5 h-full"
                >
                  <ServiceCardLink href={cyber.href} title={cyber.title} disabled={isAnimating}>
                    <NewServiceCard label="Cybersecurity" {...cyber} />
                  </ServiceCardLink>
                </motion.div>
              </>
            )}
          </AnimatePresence>

        </div>

        {/* EXPLORE / SHOW LESS BUTTON */}
        <div className="mt-12 text-center">
          {!isExpanded ? (
            <button
              onClick={handleExpand}
              disabled={gridMode === 'collapsing'}
              className="inline-flex items-center gap-2 px-6 py-3 border border-black
                         rounded-full hover:bg-black hover:text-white transition-colors
                         disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Explore all services →
            </button>
          ) : (
            <button
              onClick={handleCollapse}
              disabled={gridMode === 'expanding'}
              className="inline-flex items-center gap-2 px-6 py-3 border border-black
                         rounded-full hover:bg-black hover:text-white transition-colors
                         disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ← Show less
            </button>
          )}
        </div>

      </motion.div>
    </section>
  )
}

export default ServicesGrid