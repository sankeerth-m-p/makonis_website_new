import { useEffect, useState } from 'react'

import AnimatedCard from '../components/AnimatedCard.jsx'
import Button from '../components/Button.jsx'
import { useContactModal } from '../components/contact/ContactModalContext.js'
import FloatUpText from '../components/floatUpText.jsx'
import CTASection from '../components/sections/CTASection.jsx'
import Footer from '../components/sections/Footer.jsx'
import { leadershipTeam } from './legacySiteContent.js'

const heroBackground =
  'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=2000&q=80'

const foundationCards = [
  {
    title: 'Mission',
    description:
      'Build dependable technology teams and products that help organizations ship with more clarity, stronger execution, and less operational drag.',
  },
  {
    title: 'Vision',
    description:
      'Be the partner companies trust when they need product thinking, platform discipline, and talent support that can scale with real business pressure.',
  },
  {
    title: 'Core Values',
    description:
      'Stay direct, stay accountable, and keep the work practical. We value craftsmanship, ownership, and clear communication over unnecessary complexity.',
  },
]

const principles = [
  {
    id: 'discover',
    title: 'Start with context',
    description:
      'We begin by understanding the business problem, the operating environment, and the constraints that shape success. That keeps decisions grounded in reality instead of assumptions.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80',
    badge: '01',
  },
  {
    id: 'build',
    title: 'Design for momentum',
    description:
      'Delivery is structured to create forward movement early. We break work into clear milestones, keep dependencies visible, and make room for steady feedback without slowing the team down.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80',
    badge: '02',
  },
  {
    id: 'scale',
    title: 'Leave a durable system behind',
    description:
      'We aim to hand over something maintainable, not just something that works today. That means resilient patterns, clean documentation, and a delivery rhythm your team can keep using.',
    image:
      'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1400&q=80',
    badge: '03',
  },
]

const testimonials = [
  {
    review:
      'Makonis brought structure without making the process feel heavy. The team clarified priorities fast and helped us ship a cleaner platform release than we expected.',
    name: 'Jordan Ellis',
    role: 'VP of Operations, Northline Systems',
  },
  {
    review:
      'We needed a partner who could think beyond code. Their mix of product judgment and delivery discipline helped our internal team stay focused on what mattered most.',
    name: 'Priya Nair',
    role: 'Director of Digital Products, Solvex Health',
  },
  {
    review:
      'The collaboration was easy from day one. Communication was consistent, risks were surfaced early, and the final result felt built for the long term.',
    name: 'Michael Tan',
    role: 'Founder, Axis Commerce',
  },
]

function SectionLabel({ children }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-makonis-blue">
      {children}
    </p>
  )
}

function SectionHeading({ label, title, description, align = 'center' }) {
  const alignment = align === 'left' ? 'text-left' : 'text-center'

  return (
    <div className={`mx-auto max-w-3xl ${alignment}`}>
      {label ? <SectionLabel>{label}</SectionLabel> : null}
      <h2 className="mt-4">{title}</h2>
      {description ? <p className="mt-5 text-black/65">{description}</p> : null}
    </div>
  )
}

function AboutHero() {
  const { openContactOptions } = useContactModal()

  return (
    <section className="relative min-h-[calc(100vh-var(--navbar-height))] overflow-hidden bg-makonis-navy text-white">
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="A collaborative team working together in a modern workspace"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,160,233,0.22),transparent_34%),linear-gradient(180deg,rgba(0,19,40,0.4),rgba(0,19,40,0.88))]" />
      </div>

      <div className="container-default relative flex min-h-[calc(100vh-var(--navbar-height))] items-center py-24 md:py-28 lg:py-32">
        <div className="grid w-full gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Who we are
            </p>
            <h1 className="hero-title mt-4 max-w-[10ch]">About Makonis</h1>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="text-white/82 md:text-[19px]">
              We help ambitious teams turn strategy into reliable products, resilient platforms,
              and trusted delivery partnerships that can support growth at enterprise scale.
            </p>
            <div className="mt-7">
              <Button variant="light" onClick={openContactOptions}>
                Talk to an Expert
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FoundationCards() {
  return (
    <section className="bg-white py-24 md:py-28 lg:py-32">
      <div className="container-default">
        <SectionHeading
          label="Foundation"
          title="The principles that keep every engagement focused"
          description="Our approach stays simple on purpose. We define a clear direction, align around outcomes, and keep delivery readable for everyone involved."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {foundationCards.map((card, index) => (
            <AnimatedCard
              key={card.title}
              delay={index * 80}
              className="w-full h-full rounded-lg border border-black/10 bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
            >
              <div className="h-1.5 w-14 rounded-full bg-makonis-blue/50" />
              <h3 className="mt-6">{card.title}</h3>
              <p className="mt-4 text-black/65">{card.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}

function PrinciplesBlocks() {
  return (
    <section className="bg-[#f7f9fc] py-24 md:py-28 lg:py-32">
      <div className="container-default">
        <SectionHeading
          label="Approach"
          title="How We Work"
          description="Every project gets a rhythm that is visible, practical, and easy to keep moving. We keep the process clean so the work can stay sharp."
        />

        <div className="mt-16 space-y-16 lg:space-y-20">
          {principles.map((block, index) => {
            const isReversed = index % 2 === 1

            return (
              <div key={block.id} className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
                <div
                  className={`overflow-hidden rounded-md 32px] bg-white shadow-[0_16px_42px_rgba(0,41,86,0.08)] ${
                    isReversed ? 'lg:order-2' : ''
                  }`}
                >
                  <img
                    src={block.image}
                    alt={block.title}
                    className="h-full w-full object-cover object-center transition duration-700 hover:scale-105"
                  />
                </div>

                <div className={isReversed ? 'lg:order-1 lg:pr-10' : 'lg:pl-10'}>
                  <div className="inline-flex items-center gap-3 rounded-md bg-makonis-blue/10 px-4 py-2 text-sm font-semibold text-makonis-navy">
                    <span className="flex size-8 items-center justify-center rounded-md bg-makonis-navy text-white">
                      {block.badge}
                    </span>
                    <span>{block.title}</span>
                  </div>
                  <p className="mt-6 max-w-2xl text-black/65">{block.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
function LeadershipGrid() {
  return (
    <section id="leadership" className="bg-white py-16 md:py-20">
      <div className="container-default">
        <FloatUpText className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-makonis-blue">
            Leadership team
          </p>
          <h4 className="mt-4">
            Makonis is led by a team of passionate professionals bringing together over 80+ years of combined experience across diverse technologies, modern software architectures, and global outsourcing solutions.
          </h4>
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
                <h3 className="text-makonis-navy md:text-[28px]">{member.name}</h3>
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
  )
}

function TestimonialSlider() {
  const { openContactOptions } = useContactModal()
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 6000)

    return () => window.clearInterval(intervalId)
  }, [])

  const activeTestimonial = testimonials[activeIndex]

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  return (
    <section className="bg-[#f7f9fc] py-24 md:py-28 lg:py-32">
      <div className="container-default">
        <SectionHeading
          label="Feedback"
          title="What Our Clients Say"
          description="A few notes from the partners we have supported across product, platform, and delivery work."
        />

        <div className="mx-auto mt-14 max-w-4xl">
          <div
            className="rounded-md 32px] bg-white p-8 text-center shadow-[0_16px_42px_rgba(0,41,86,0.08)] md:p-10 lg:p-12"
            aria-live="polite"
          >
            <div className="mx-auto flex size-14 items-center justify-center rounded-md  bg-makonis-blue/10 text-[28px] text-makonis-blue">
              "
            </div>

            <p className="mx-auto mt-6 max-w-3xl text-[18px] leading-[1.75] text-makonis-navy md:text-[20px]">
              {activeTestimonial.review}
            </p>

            <div className="mt-8">
              <h3 className="text-[26px] leading-[1.2] text-makonis-navy">
                {activeTestimonial.name}
              </h3>
              <p className="mt-2 text-[16px] text-makonis-navy/70">{activeTestimonial.role}</p>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Previous testimonial"
                className="inline-flex size-11 items-center justify-center rounded-md  bg-[#f2f6fb] text-makonis-navy transition hover:bg-makonis-blue hover:text-white"
              >
                <span className="text-xl leading-none">&lt;</span>
              </button>

              <div className="flex items-center justify-center gap-2">
                {testimonials.map((item, index) => {
                  const isActive = index === activeIndex

                  return (
                    <button
                      key={item.name}
                      type="button"
                      aria-label={`Go to testimonial ${index + 1}`}
                      aria-current={isActive ? 'true' : 'false'}
                      onClick={() => setActiveIndex(index)}
                      className={`h-2 rounded-md  transition-all duration-300 ${
                        isActive ? 'w-8 bg-makonis-blue' : 'w-2 bg-makonis-blue/20'
                      }`}
                    />
                  )
                })}
              </div>

              <button
                type="button"
                onClick={goToNext}
                aria-label="Next testimonial"
                className="inline-flex size-11 items-center justify-center rounded-md  bg-[#f2f6fb] text-makonis-navy transition hover:bg-makonis-blue hover:text-white"
              >
                <span className="text-xl leading-none">&gt;</span>
              </button>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Button variant="dark" onClick={openContactOptions}>
              Talk to an Expert
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function About2Page() {
  return (
    <>
      <AboutHero />
      <FoundationCards />
      <PrinciplesBlocks />
      <LeadershipGrid />
      <TestimonialSlider />
      <CTASection />
      <Footer />
    </>
  )
}

export default About2Page
