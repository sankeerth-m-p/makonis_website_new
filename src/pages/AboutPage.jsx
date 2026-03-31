import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import AnimatedCard from '../components/AnimatedCard.jsx'
import Button from '../components/Button.jsx'
import {
  BullseyeIcon,
  GearIcon,
  GemIcon,
  HandshakeIcon,
  LightbulbIcon,
  QuoteIcon,
  RocketIcon,
  ShieldIcon,
} from '../components/LegacyIcons.jsx'
import FloatUpText from '../components/floatUpText.jsx'
import Footer from '../components/sections/Footer.jsx'
import { useContactModal } from '../components/contact/ContactModalContext.js'
import {
  aboutHero,
  aboutPhilosophy,
  aboutPrinciples,
  leadershipTeam,
  testimonials,
} from './legacySiteContent.js'

const MotionDiv = motion.div

const philosophyIcons = {
  mission: BullseyeIcon,
  vision: GearIcon,
  'core-values': ShieldIcon,
}

const principleIcons = [LightbulbIcon, HandshakeIcon, RocketIcon, GemIcon]

function AboutPage() {
  const { openContactOptions } = useContactModal()
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <>
      <section className="relative overflow-hidden bg-makonis-navy text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,160,233,0.22),transparent_34%),linear-gradient(180deg,rgba(0,41,86,0.95),rgba(0,24,54,0.98))]" />
        <div className="container-default relative flex min-h-[calc(100vh-var(--navbar-height))] items-center py-24 md:py-28">
          <FloatUpText className="mx-auto max-w-5xl text-center">
            <h1 className="whitespace-pre-line text-white drop-shadow-2xl">
              {aboutHero.title}
            </h1>
            <div className="mx-auto mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-makonis-blue to-white/70" />
            <p className="mx-auto mt-6 max-w-4xl text-white/85">
              {aboutHero.description}
            </p>
          </FloatUpText>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-default">
          <FloatUpText className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-makonis-blue">
              Our foundation
            </p>
            <h2 className="mt-4">
              Our growth is rooted in a strong vision, purposeful mission, and enduring values.
            </h2>
          </FloatUpText>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {aboutPhilosophy.map((point, index) => {
              const Icon = philosophyIcons[point.id]

              return (
                <AnimatedCard
                  key={point.id}
                  delay={index * 120}
                  className="rounded-2xl border border-black/10 bg-white p-7 text-center"
                >
                  <div className="mx-auto flex size-20 items-center justify-center rounded-3xl bg-gradient-to-br from-makonis-navy to-makonis-blue text-3xl text-white shadow-[0_18px_40px_rgba(0,41,86,0.22)]">
                    <Icon />
                  </div>
                  <h3 className="mt-7 text-makonis-navy">
                    {point.title}
                  </h3>
                  <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-makonis-blue/40" />
                  <p className="mt-4 text-black/60">
                    {point.description}
                  </p>
                </AnimatedCard>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fc] py-16 md:py-20">
        <div className="container-default">
          <FloatUpText className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-makonis-blue">
              Our core principles
            </p>
            <h2 className="mt-4">
              The principles that guide our approach to technology and business transformation.
            </h2>
          </FloatUpText>

          <div className="mt-12 space-y-14 md:space-y-20">
            {aboutPrinciples.map((principle, index) => {
              const Icon = principleIcons[index]
              const isReversed = index % 2 === 1

              return (
                <div
                  key={principle.id}
                  className={`flex flex-col items-center gap-8 lg:flex-row ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <AnimatedCard
                    delay={index * 100}
                    className="w-full overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_18px_40px_rgba(0,0,0,0.06)] lg:w-1/2"
                  >
                    <img
                      src={principle.image}
                      alt={principle.title}
                      className="h-full w-full object-cover"
                    />
                  </AnimatedCard>

                  <div className="w-full lg:w-1/2">
                    <div className="mb-5 flex items-center gap-4">
                      <div className="flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-makonis-navy to-makonis-blue text-2xl text-white shadow-lg">
                        <Icon />
                      </div>
                      <h3 className="text-makonis-navy md:text-[44px]">
                        {principle.title}
                      </h3>
                    </div>
                    <p className="max-w-2xl text-black/65">
                      {principle.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="leadership" className="bg-white py-16 md:py-20">
        <div className="container-default">
          <FloatUpText className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-makonis-blue">
              Leadership team
            </p>
            <h3 className="mt-4">
              Makonis is led by a team of passionate professionals bringing together over 80+ years of combined experience across diverse technologies, modern software architectures, and global outsourcing solutions.
            </h3>
          </FloatUpText>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {leadershipTeam.map((member, index) => (
              <AnimatedCard
                key={member.id}
                delay={index * 120}
                className="group flex h-full flex-col items-center gap-5 rounded-2xl border border-black/10 bg-white p-6 text-center"
              >
                <div className="relative mx-auto aspect-square w-full max-w-[280px]">
                  <div
                    className="absolute rounded-full border-[2px] border-dashed border-makonis-blue/35 transition duration-[1200ms] group-hover:rotate-90 group-hover:opacity-100"
                    style={{ inset: '-3%' }}
                  />
                  <div
                    className="absolute rounded-full border-[3px] border-makonis-navy transition duration-700 group-hover:scale-105 group-hover:opacity-60"
                    style={{ inset: '-1.5%', opacity: 0 }}
                  />
                  <div className="relative h-full w-full overflow-hidden rounded-full shadow-[0_8px_30px_rgba(0,41,86,0.15)]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 hidden items-center justify-center rounded-full bg-gradient-to-t from-makonis-navy/90 via-makonis-navy/35 to-transparent p-6 opacity-0 transition duration-500 group-hover:opacity-100 md:flex">
                      <p className="text-center text-xs leading-relaxed text-white">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-makonis-navy md:text-[28px]">
                    {member.name}
                  </h3>
                  <div className="mx-auto my-2 h-[3px] w-8 rounded-full bg-makonis-blue transition-all duration-300 group-hover:w-16" />
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-makonis-blue">
                    {member.title}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-black/60 md:hidden">
                    {member.bio}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#e9f6ff] py-16 md:py-20">
        <div className="container-default">
          <FloatUpText className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-makonis-blue">
              What our clients say
            </p>
            <h2 className="mt-4">The partnerships and outcomes behind our work</h2>
          </FloatUpText>

          <div className="mx-auto mt-10 max-w-5xl">
            <AnimatedCard className="rounded-3xl border border-black/10 bg-white p-8 md:p-10">
              <AnimatePresence mode="wait">
                <MotionDiv
                  key={testimonials[activeTestimonial].id}
                  initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -16, filter: 'blur(8px)' }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="mx-auto max-w-4xl text-center"
                >
                  <QuoteIcon className="mx-auto mb-5 h-6 w-6 text-makonis-blue/65" />
                  <p className="mx-auto max-w-3xl text-[18px] leading-[1.65] text-makonis-navy md:text-[20px]">
                    {testimonials[activeTestimonial].review}
                  </p>

                  <div className="mx-auto mt-8 flex w-fit items-center gap-4 text-left">
                    <div className="flex size-14 items-center justify-center rounded-full bg-gradient-to-r from-makonis-navy to-makonis-blue text-lg font-bold uppercase text-white shadow-md">
                      {testimonials[activeTestimonial].name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-[24px] text-makonis-navy">
                        {testimonials[activeTestimonial].name}
                      </h3>
                      <p className="mt-1 text-[16px] text-makonis-navy/70">
                        {testimonials[activeTestimonial].role}
                      </p>
                    </div>
                  </div>
                </MotionDiv>
              </AnimatePresence>

              <div className="mt-8 flex items-center justify-center gap-3">
                {testimonials.map((item, index) => {
                  const isActive = index === activeTestimonial

                  return (
                    <button
                      key={item.id}
                      type="button"
                      aria-label={`Go to testimonial ${index + 1}`}
                      aria-current={isActive ? 'true' : 'false'}
                      onClick={() => setActiveTestimonial(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        isActive ? 'w-5 bg-makonis-blue/60' : 'w-2 bg-makonis-blue/20'
                      }`}
                    />
                  )
                })}
              </div>
            </AnimatedCard>
          </div>

          <div className="mt-10 flex justify-center">
            <Button variant="dark" onClick={openContactOptions}>
              Talk to an Expert
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default AboutPage
