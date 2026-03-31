import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'

import AnimatedCard from '../components/AnimatedCard.jsx'
import Button from '../components/Button.jsx'
import {
  BullseyeIcon,
  CloseIcon,
  FilterIcon,
  GearIcon,
  HandshakeIcon,
  LightbulbIcon,
  MapPinIcon,
} from '../components/LegacyIcons.jsx'
import { useContactModal } from '../components/contact/ContactModalContext.js'
import Footer from '../components/sections/Footer.jsx'
import FloatUpText from '../components/floatUpText.jsx'
import useAppRoute from '../components/routing/useAppRoute.jsx'
import { careersJobs } from './legacySiteContent.js'

const heroImage = '/legacy/contact/banpic1.webp'
const cultureImage = '/legacy/contact/hydpic2.webp'

const whyJoinUs = [
  {
    title: 'Impactful work',
    icon: BullseyeIcon,
    description:
      'Build solutions that move real businesses forward, from product strategy to delivery.',
  },
  {
    title: 'Growth culture',
    icon: LightbulbIcon,
    description:
      'Learn from senior builders, take ownership early, and keep sharpening your craft.',
  },
  {
    title: 'Cutting-edge tech',
    icon: GearIcon,
    description:
      'Work with modern stacks, practical AI, and engineering practices that scale cleanly.',
  },
  {
    title: 'Global exposure',
    icon: HandshakeIcon,
    description:
      'Collaborate with teams and clients across markets while keeping a premium delivery standard.',
  },
]

const hiringSteps = [
  {
    number: '01',
    title: 'Apply',
    description:
      'Share your profile and tell us what excites you about the role and the team.',
  },
  {
    number: '02',
    title: 'Interview',
    description:
      'Meet the team, discuss your experience, and explore how we like to work together.',
  },
  {
    number: '03',
    title: 'Assessment',
    description:
      'Complete a focused exercise that reflects the kind of work you would do here.',
  },
  {
    number: '04',
    title: 'Offer',
    description:
      'If it is a strong match, we move quickly with a clear offer and next steps.',
  },
]

const MotionArticle = motion.article

function SectionLabel({ children }) {
  return <p className="text-sm font-semibold uppercase tracking-[0.16em] text-makonis-blue">{children}</p>
}

function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <FloatUpText className={`max-w-3xl ${alignClass}`}>
      <SectionLabel>{eyebrow}</SectionLabel>
      <h2 className="mt-4">{title}</h2>
      {description ? <p className="mt-5 text-inherit/75">{description}</p> : null}
    </FloatUpText>
  )
}

function JoinCard({ title, description, icon: Icon }) {
  return (
    <div className="group h-full rounded-md border border-white/10 bg-white/10 p-7 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/12 hover:shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
      <div className="flex size-12 items-center justify-center rounded-md bg-white/10 text-white transition duration-300 group-hover:bg-makonis-blue">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-6 text-white">{title}</h3>
      <p className="mt-4 text-white/70">{description}</p>
    </div>
  )
}

function RoleTile({ job, index, onDetails, onApply }) {
  return (
    <MotionArticle
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <AnimatedCard
        delay={index * 80}
        className="h-full rounded-md border border-black/10 bg-white p-5 md:p-6 shadow-[0_12px_36px_rgba(0,0,0,0.04)]"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-black/60">{job.client || 'Makonis Team'}</p>
            <h3 className="mt-2 text-[28px] leading-[1.15] text-makonis-navy md:text-[30px]">
              {job.jobtitle}
            </h3>
            <p className="mt-3 text-sm text-black/65">
              {job.responsibilities?.[0] || 'Work on scalable systems and real-world challenges.'}
            </p>
          </div>

          <span
            className={`rounded-md border px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${
              job.mode === 'Remote'
                ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                : job.mode === 'Hybrid'
                  ? 'border-violet-200 bg-violet-50 text-violet-700'
                  : 'border-sky-200 bg-sky-50 text-sky-700'
            }`}
          >
            {job.mode}
          </span>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="rounded-md bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Actively hiring
          </span>
        </div>

        <div className="mt-5 grid gap-3 text-black/70 sm:grid-cols-2">
          <div className="flex items-center gap-3 rounded-md border border-black/10 bg-white px-4 py-3">
            <div className="flex size-10 items-center justify-center rounded-md bg-white text-makonis-blue">
              <MapPinIcon className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/35">
                Location
              </p>
              <p className="mt-1 text-[15px] text-black/75">
                {job.loc}, {job.country}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-md border border-black/10 bg-white px-4 py-3">
            <div className="flex size-10 items-center justify-center rounded-md bg-white text-makonis-blue">
              <span className="text-[11px] font-black tracking-[0.2em]">XP</span>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/35">
                Experience
              </p>
              <p className="mt-1 text-[15px] text-black/75">
                {job.min} - {job.max} Years
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {job.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-black/10 bg-[#f7f9fc] px-3 py-1.5 text-[13px] font-medium text-black/70"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-3 border-t border-black/10 pt-4 sm:flex-row">
          <Button variant="light" className="w-full sm:w-auto" onClick={onDetails}>
            Details &gt;
          </Button>
          <Button variant="dark" className="w-full sm:w-auto" onClick={onApply}>
            Apply Now
          </Button>
        </div>
      </AnimatedCard>
    </MotionArticle>
  )
}

function StepCard({ number, title, description, isLast }) {
  return (
    <div className="relative rounded-md border border-black/10 bg-white p-6 shadow-[0_10px_32px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-4">
        <div className="flex size-12 items-center justify-center rounded-md bg-makonis-navy text-sm font-semibold text-white">
          {number}
        </div>
        <div className="h-px flex-1 bg-black/10 md:hidden" />
      </div>
      <h3 className="mt-6 text-makonis-navy">{title}</h3>
      <p className="mt-3 text-black/65">{description}</p>
      {!isLast ? (
        <div className="absolute right-0 top-1/2 hidden h-px w-8 -translate-y-1/2 translate-x-full bg-black/10 xl:block" />
      ) : null}
    </div>
  )
}

function Career2Page() {
  const { openContactForm } = useContactModal()
  const { navigate } = useAppRoute()
  const [searchTerm, setSearchTerm] = useState('')
  const [country, setCountry] = useState('')
  const [role, setRole] = useState('')
  const [mode, setMode] = useState('')

  const totalRoles = careersJobs.length
  const availableModes = useMemo(() => [...new Set(careersJobs.map((job) => job.mode))], [])
  const locationCount = useMemo(() => new Set(careersJobs.map((job) => job.loc)).size, [])

  const filteredJobs = useMemo(() => {
    const query = searchTerm.trim().toLowerCase()

    return careersJobs.filter((job) => {
      const matchesQuery =
        !query ||
        job.jobtitle.toLowerCase().includes(query) ||
        job.client.toLowerCase().includes(query) ||
        job.skills.some((skill) => skill.toLowerCase().includes(query))

      const matchesCountry = !country || job.country === country
      const matchesRole = !role || job.jobtitle === role
      const matchesMode = !mode || job.mode === mode

      return matchesQuery && matchesCountry && matchesRole && matchesMode
    })
  }, [country, mode, role, searchTerm])

  const hasActiveFilters = Boolean(searchTerm || country || role || mode)

  const clearFilters = () => {
    setSearchTerm('')
    setCountry('')
    setRole('')
    setMode('')
  }

  const scrollToSection = (id) => {
    if (typeof document === 'undefined') return

    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <section className="relative overflow-hidden bg-makonis-navy text-white">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Makonis team working together in a modern office"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,16,34,0.25),rgba(0,41,86,0.88))]" />
        </div>

        <div className="relative z-10 flex min-h-[calc(100vh-var(--navbar-height))] items-end">
          <div className="container-default w-full py-24 md:py-28 lg:py-32">
            <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
              <div className="max-w-4xl">
                <FloatUpText>
                  <SectionLabel>Careers</SectionLabel>
                  <h1 className="mt-4 max-w-[14ch] text-white">Find your next role at Makonis</h1>
                  <p className="mt-5 text-sm uppercase tracking-[0.18em] text-makonis-blue">
                    {totalRoles}+ open roles · {availableModes.join(' / ')} · {locationCount} locations
                  </p>
                  <p className="mt-6 max-w-2xl text-white/82">
                    Browse live positions across product, engineering, operations, and growth. Apply to roles that match your skills, location, and preferred work mode.
                  </p>

                  <div className="mt-10 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-md bg-white/10 px-4 py-3">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-white/60">Total roles</p>
                      <p className="mt-2 text-lg font-semibold text-white">{totalRoles}</p>
                    </div>
                    <div className="rounded-md bg-white/10 px-4 py-3">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-white/60">Work modes</p>
                      <p className="mt-2 text-lg font-semibold text-white">{availableModes.join(' / ')}</p>
                    </div>
                    <div className="rounded-md bg-white/10 px-4 py-3">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-white/60">Locations</p>
                      <p className="mt-2 text-lg font-semibold text-white">{locationCount}</p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Button
                      variant="light"
                      className="min-w-[180px]"
                      onClick={() => scrollToSection('careers-openings')}
                    >
                      View Open Roles
                    </Button>
                    <Button
                      variant="outline"
                      className="min-w-[150px]"
                      onClick={() => navigate('/contact')}
                    >
                      Talk to Us
                    </Button>
                  </div>
                </FloatUpText>
              </div>

             
            </div>
          </div>
        </div>
      </section>

      <section id="careers-openings" className="bg-white py-16 md:py-20">
        <div className="container-default">
          <SectionHeading
            eyebrow="Open roles"
            title="Open roles"
            description="Browse and apply to positions that match your skills."
            align="center"
          />

          <AnimatedCard
            delay={60}
            className="mt-10 rounded-md border border-black/10 bg-white p-5 md:p-6"
          >
            <div className="grid gap-4 lg:grid-cols-[1.6fr_repeat(3,minmax(0,1fr))_auto]">
              <label className="flex items-center gap-3 rounded-md border border-black/10 bg-white px-4 py-3.5 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
                <FilterIcon className="h-4 w-4 text-makonis-blue" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search skills (e.g. Java, React)..."
                  className="w-full bg-transparent text-[15px] text-black outline-none placeholder:text-black/35"
                />
              </label>

              <select
                value={country}
                onChange={(event) => setCountry(event.target.value)}
                className="rounded-md border border-black/10 bg-white px-4 py-3.5 text-[15px] text-black outline-none"
              >
                <option value="">All Locations</option>
                {[...new Set(careersJobs.map((job) => job.country))].map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <select
                value={role}
                onChange={(event) => setRole(event.target.value)}
                className="rounded-md border border-black/10 bg-white px-4 py-3.5 text-[15px] text-black outline-none"
              >
                <option value="">All Roles</option>
                {[...new Set(careersJobs.map((job) => job.jobtitle))].map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <select
                value={mode}
                onChange={(event) => setMode(event.target.value)}
                className="rounded-md border border-black/10 bg-white px-4 py-3.5 text-[15px] text-black outline-none"
              >
                <option value="">All Work Modes</option>
                {[...new Set(careersJobs.map((job) => job.mode))].map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={clearFilters}
                className={`inline-flex items-center justify-center rounded-md border px-4 py-3.5 text-[15px] font-semibold transition ${
                  hasActiveFilters
                    ? 'border-red-200 bg-red-50 text-red-600 hover:bg-red-100'
                    : 'border-black/10 bg-black/5 text-black/35'
                }`}
              >
                <CloseIcon className="mr-2 h-4 w-4" />
                Clear
              </button>
            </div>

            {hasActiveFilters ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {searchTerm ? (
                  <span className="inline-flex items-center gap-2 rounded-md bg-makonis-blue/10 px-3 py-1.5 text-sm text-makonis-navy">
                    Search: {searchTerm}
                    <button type="button" onClick={() => setSearchTerm('')}>
                      <CloseIcon className="h-3 w-3" />
                    </button>
                  </span>
                ) : null}
                {country ? (
                  <span className="inline-flex items-center gap-2 rounded-md bg-makonis-blue/10 px-3 py-1.5 text-sm text-makonis-navy">
                    {country}
                    <button type="button" onClick={() => setCountry('')}>
                      <CloseIcon className="h-3 w-3" />
                    </button>
                  </span>
                ) : null}
                {role ? (
                  <span className="inline-flex items-center gap-2 rounded-md bg-makonis-blue/10 px-3 py-1.5 text-sm text-makonis-navy">
                    {role}
                    <button type="button" onClick={() => setRole('')}>
                      <CloseIcon className="h-3 w-3" />
                    </button>
                  </span>
                ) : null}
                {mode ? (
                  <span className="inline-flex items-center gap-2 rounded-md bg-makonis-blue/10 px-3 py-1.5 text-sm text-makonis-navy">
                    {mode}
                    <button type="button" onClick={() => setMode('')}>
                      <CloseIcon className="h-3 w-3" />
                    </button>
                  </span>
                ) : null}
              </div>
            ) : null}
          </AnimatedCard>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map((job, index) => (
              <RoleTile
                key={job.jobid}
                job={job}
                index={index}
                onDetails={() => navigate(`/career2/${job.jobid}`)}
                onApply={openContactForm}
              />
            ))}

            {!filteredJobs.length ? (
              <AnimatedCard className="rounded-md border border-black/10 bg-[#f7f9fc] p-8 text-center md:col-span-2 lg:col-span-3">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-makonis-blue">
                  No matches
                </p>
                <h3 className="mt-4 text-makonis-navy">No current openings found</h3>
                <p className="mt-3 text-black/60">Try adjusting your filters to see more results.</p>
                <Button variant="light" className="mt-6" onClick={clearFilters}>
                  Reset filters
                </Button>
              </AnimatedCard>
            ) : null}
          </div>
        </div>
      </section>

      <section id="why-join-us" className="bg-makonis-navy py-24 text-white md:py-28">
        <div className="container-default">
          <SectionHeading
            eyebrow="Why join us"
            title="A place for people who want meaningful work and lasting growth."
            description="We keep the environment focused and practical so the team can spend more time building and less time navigating noise."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whyJoinUs.map((item) => (
              <JoinCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section id="culture" className="bg-makonis-navy py-24 text-white md:py-28">
        <div className="container-default">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <FloatUpText className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-md border border-white/10 shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
                <div className="absolute inset-0 rounded-md bg-makonis-purple/10 blur-3xl" />
                <img
                  src={cultureImage}
                  alt="Makonis team culture and collaboration"
                  className="relative h-[320px] w-full object-cover object-center md:h-[520px]"
                />
              </div>
            </FloatUpText>

            <div className="order-1 lg:order-2">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-makonis-blue/90">
                  Work culture
                </p>
                <h2 className="mt-4 text-white">Life at Makonis</h2>
                <p className="mt-5 text-white/70">
                  We work with calm focus, direct communication, and a shared bias toward shipping
                  good work. The culture is collaborative, open, and designed for people who like to
                  build with intent.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-md border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-makonis-blue">
                    Collaboration
                  </p>
                  <p className="mt-3 text-white/70">
                    Small teams, clear ownership, and thoughtful reviews that keep quality high.
                  </p>
                </div>
                <div className="rounded-md border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-makonis-blue">
                    Rhythm
                  </p>
                  <p className="mt-3 text-white/70">
                    Consistent delivery, enough space to think, and a pace that rewards consistency.
                  </p>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>

      <section id="hiring-process" className="bg-[#f7f9fc] py-24 md:py-28">
        <div className="container-default">
          <SectionHeading
            eyebrow="Hiring process"
            title="A clear process that respects your time."
            description="We keep each step focused so you always know what comes next."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {hiringSteps.map((step, index) => (
              <StepCard key={step.title} {...step} isLast={index === hiringSteps.length - 1} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact-cta" className="bg-makonis-navy text-white">
        <FloatUpText className="container-default py-24 text-center md:py-28">
          <div className="mx-auto max-w-3xl">
            <SectionLabel>Next step</SectionLabel>
            <h2 className="mt-4 text-white">Ready to build something great?</h2>
            <p className="mt-5 text-white/70">
              If the team and the work feel like a fit, we would love to hear from you.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                variant="light"
                className="min-w-[180px]"
                onClick={() => scrollToSection('careers-openings')}
              >
                View Open Roles
              </Button>
              <Button
                variant="outline"
                className="min-w-[150px]"
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </FloatUpText>
      </section>

      <Footer />
    </>
  )
}

export default Career2Page
