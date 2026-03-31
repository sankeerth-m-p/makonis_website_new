import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import AnimatedCard from '../components/AnimatedCard.jsx'
import Button from '../components/Button.jsx'
import { FilterIcon, MapPinIcon, CloseIcon } from '../components/LegacyIcons.jsx'
import FloatUpText from '../components/floatUpText.jsx'
import Footer from '../components/sections/Footer.jsx'
import { useContactModal } from '../components/contact/ContactModalContext.js'
import { careersHero, careersJobs } from './legacySiteContent.js'

const MotionArticle = motion.article
const MotionDiv = motion.div

function CareersPage() {
  const { openContactForm } = useContactModal()
  const [searchTerm, setSearchTerm] = useState('')
  const [country, setCountry] = useState('')
  const [role, setRole] = useState('')
  const [mode, setMode] = useState('')
  const [expandedJobId, setExpandedJobId] = useState(null)

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

  return (
    <>
      <section className="relative overflow-hidden bg-makonis-navy text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,160,233,0.22),transparent_35%),radial-gradient(circle_at_left,rgba(255,255,255,0.08),transparent_32%)]" />
        <div className="container-default relative py-24 md:py-28 lg:py-32">
          <FloatUpText className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/75 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-makonis-blue opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-makonis-blue" />
              </span>
              {careersHero.eyebrow}
            </div>

            <h1 className="whitespace-pre-line text-white">
              {careersHero.title}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-white/80">
              {careersHero.description}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="light" onClick={openContactForm}>
                Talk to an Expert
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  document
                    .getElementById('careers-openings')
                    ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              >
                View open roles
              </Button>
            </div>
          </FloatUpText>
        </div>
      </section>

      <section id="careers-openings" className="bg-white py-16 md:py-20">
        <div className="container-default">
          <FloatUpText className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-makonis-blue">
              Open roles
            </p>
            <h2 className="mt-4">Search the team that fits your next move</h2>
            <p className="mt-4 text-black/60">
              Browse the same global hiring mix with a cleaner, simpler Makonis layout.
            </p>
          </FloatUpText>

          <AnimatedCard delay={60} className="mt-10 rounded-2xl border border-black/10 bg-white p-5 md:p-6">
            <div className="grid gap-4 lg:grid-cols-[1.6fr_repeat(3,minmax(0,1fr))_auto]">
              <label className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-4 py-3.5 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
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
                className="rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-[15px] text-black outline-none"
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
                className="rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-[15px] text-black outline-none"
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
                className="rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-[15px] text-black outline-none"
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
                className={`inline-flex items-center justify-center rounded-2xl border px-4 py-3.5 text-[15px] font-semibold transition ${
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
                  <span className="inline-flex items-center gap-2 rounded-full bg-makonis-blue/10 px-3 py-1.5 text-sm text-makonis-navy">
                    Search: {searchTerm}
                    <button type="button" onClick={() => setSearchTerm('')}>
                      <CloseIcon className="h-3 w-3" />
                    </button>
                  </span>
                ) : null}
                {country ? (
                  <span className="inline-flex items-center gap-2 rounded-full bg-makonis-blue/10 px-3 py-1.5 text-sm text-makonis-navy">
                    {country}
                    <button type="button" onClick={() => setCountry('')}>
                      <CloseIcon className="h-3 w-3" />
                    </button>
                  </span>
                ) : null}
                {role ? (
                  <span className="inline-flex items-center gap-2 rounded-full bg-makonis-blue/10 px-3 py-1.5 text-sm text-makonis-navy">
                    {role}
                    <button type="button" onClick={() => setRole('')}>
                      <CloseIcon className="h-3 w-3" />
                    </button>
                  </span>
                ) : null}
                {mode ? (
                  <span className="inline-flex items-center gap-2 rounded-full bg-makonis-blue/10 px-3 py-1.5 text-sm text-makonis-navy">
                    {mode}
                    <button type="button" onClick={() => setMode('')}>
                      <CloseIcon className="h-3 w-3" />
                    </button>
                  </span>
                ) : null}
              </div>
            ) : null}
          </AnimatedCard>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filteredJobs.map((job, index) => {
                const isExpanded = expandedJobId === job.jobid

                return (
                  <MotionArticle
                    key={job.jobid}
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <AnimatedCard
                      delay={index * 80}
                      className="h-full rounded-2xl border border-black/10 bg-white p-6 md:p-7"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-makonis-blue">
                            {job.client}
                          </p>
                          <h3 className="mt-3 text-[28px] leading-[1.15] text-makonis-navy md:text-[32px]">
                            {job.jobtitle}
                          </h3>
                        </div>

                        <span
                          className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${
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

                      <div className="mt-6 grid gap-3 text-black/70 sm:grid-cols-2">
                        <div className="flex items-center gap-3 rounded-2xl border border-black/8 bg-[#f7f9fc] px-4 py-3">
                          <div className="flex size-10 items-center justify-center rounded-full bg-white text-makonis-blue">
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

                        <div className="flex items-center gap-3 rounded-2xl border border-black/8 bg-[#f7f9fc] px-4 py-3">
                          <div className="flex size-10 items-center justify-center rounded-full bg-white text-makonis-blue">
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

                      <div className="mt-6 flex flex-wrap gap-2">
                        {job.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-[13px] font-medium text-black/70"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 border-t border-black/10 pt-5">
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedJobId((current) =>
                              current === job.jobid ? null : job.jobid,
                            )
                          }
                          className="text-sm font-semibold text-makonis-blue"
                        >
                          {isExpanded ? 'Hide details' : 'View JD'}
                        </button>

                        <AnimatePresence>
                          {isExpanded ? (
                            <MotionDiv
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <ul className="mt-4 space-y-2 text-[15px] leading-7 text-black/65">
                                {job.responsibilities.map((item) => (
                                  <li key={item} className="flex gap-3">
                                    <span className="mt-2 size-2 rounded-full bg-makonis-blue" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </MotionDiv>
                          ) : null}
                        </AnimatePresence>
                      </div>

                      <div className="mt-6 flex flex-col gap-3 border-t border-black/10 pt-5 sm:flex-row">
                        <Button
                          variant="light"
                          className="w-full sm:w-auto"
                          onClick={() => setExpandedJobId(job.jobid)}
                        >
                          Details
                        </Button>
                        <Button
                          variant="dark"
                          className="w-full sm:w-auto"
                          onClick={openContactForm}
                        >
                          Apply Now
                        </Button>
                      </div>
                    </AnimatedCard>
                  </MotionArticle>
                )
              })}
            </AnimatePresence>

            {!filteredJobs.length ? (
              <AnimatedCard className="rounded-2xl border border-black/10 bg-[#f7f9fc] p-8 text-center lg:col-span-2">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-makonis-blue">
                  No matches
                </p>
                <h3 className="mt-4 text-makonis-navy">No current openings found</h3>
                <p className="mt-3 text-black/60">
                  Try adjusting your filters to see more results.
                </p>
                <Button variant="light" className="mt-6" onClick={clearFilters}>
                  Reset filters
                </Button>
              </AnimatedCard>
            ) : null}
          </div>
        </div>
      </section>

      <section className="bg-makonis-navy py-16 text-white">
        <div className="container-default text-center">
          <FloatUpText className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/65">
              Ready to move forward?
            </p>
            <h2 className="mt-4 text-white">
              Bring your experience to a team that builds with intent
            </h2>
            <p className="mt-4 text-white/75">
              If you do not see a perfect match, reach out and we&apos;ll connect you with the right hiring team.
            </p>
            <Button variant="light" className="mt-8" onClick={openContactForm}>
              Contact hiring team
            </Button>
          </FloatUpText>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default CareersPage
