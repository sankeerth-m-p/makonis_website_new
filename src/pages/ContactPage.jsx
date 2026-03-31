import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import AnimatedCard from '../components/AnimatedCard.jsx'
import Button from '../components/Button.jsx'
import {
  BuildingIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from '../components/LegacyIcons.jsx'
import FloatUpText from '../components/floatUpText.jsx'
import Footer from '../components/sections/Footer.jsx'
import { useContactModal } from '../components/contact/ContactModalContext.js'
import { contactGallery, contactHero, contactLocations } from './legacySiteContent.js'

const MotionDiv = motion.div

function ContactPage() {
  const { openContactOptions } = useContactModal()
  const [activeLocationId, setActiveLocationId] = useState(contactLocations[0].id)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const activeLocation = useMemo(
    () =>
      contactLocations.find((location) => location.id === activeLocationId) ||
      contactLocations[0],
    [activeLocationId],
  )

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [])

  return (
    <>
      <section className="relative overflow-hidden bg-makonis-navy pt-[var(--navbar-height)] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,160,233,0.24),transparent_34%),radial-gradient(circle_at_right,rgba(255,255,255,0.08),transparent_28%)]" />
        <div className="container-default relative py-16 md:py-20">
          <FloatUpText className="mx-auto max-w-5xl text-center">
            <h1 className="text-white">
              {contactHero.title}
            </h1>
            <p className="mx-auto mt-5 max-w-4xl text-white/80">
              {contactHero.description}
            </p>

            <div className="mt-8 flex justify-center">
              <Button variant="light" onClick={openContactOptions}>
                Talk to an Expert
              </Button>
            </div>
          </FloatUpText>

          <AnimatedCard
            delay={80}
            className="mx-auto mt-10 max-w-5xl rounded-3xl border border-white/20 bg-white p-5 text-makonis-navy shadow-[0_18px_45px_rgba(0,41,86,0.08)] md:p-6"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-makonis-blue">
                  Contact
                </p>
                <h2 className="mt-3 text-makonis-navy">
                  {contactHero.subheading}
                </h2>
                <p className="mt-3 text-black/60">
                  {contactHero.supportingText}
                </p>
              </div>
            </div>

            <div className="relative mt-6" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setDropdownOpen((current) => !current)}
                className={`flex w-full items-center gap-3 rounded-2xl border bg-white px-4 py-4 text-left transition ${
                  dropdownOpen
                    ? 'rounded-b-none border-makonis-blue ring-4 ring-makonis-blue/10'
                    : 'border-black/10'
                }`}
                >
                <span className="flex size-10 items-center justify-center rounded-full bg-makonis-blue/10 text-makonis-blue">
                  <MapPinIcon className="h-4 w-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] uppercase tracking-[0.18em] text-black/35">
                    Office Location
                  </span>
                  <span className="block truncate text-[15px] font-semibold text-makonis-navy">
                    {`${activeLocation.title} - ${activeLocation.region}`}
                  </span>
                </span>
                <svg
                  className={`size-4 shrink-0 text-black/35 transition-transform ${
                    dropdownOpen ? 'rotate-180' : ''
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <AnimatePresence>
                {dropdownOpen ? (
                  <MotionDiv
                    initial={{ opacity: 0, y: -6, scaleY: 0.97 }}
                    animate={{ opacity: 1, y: 0, scaleY: 1 }}
                    exit={{ opacity: 0, y: -6, scaleY: 0.97 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformOrigin: 'top' }}
                    className="absolute z-30 w-full overflow-hidden rounded-b-2xl border border-t-0 border-makonis-blue/20 bg-white shadow-[0_12px_30px_rgba(0,41,86,0.10)]"
                  >
                    <div className="grid gap-2 p-2 md:grid-cols-2">
                      {contactLocations.map((location) => {
                        const isActive = location.id === activeLocationId

                        return (
                          <button
                            key={location.id}
                            type="button"
                            onClick={() => {
                              setActiveLocationId(location.id)
                              setDropdownOpen(false)
                            }}
                            className={`flex items-center gap-3 rounded-2xl border px-3 py-3 text-left transition ${
                              isActive
                                ? 'border-makonis-blue/20 bg-makonis-blue/6'
                                : 'border-transparent hover:border-black/10 hover:bg-[#f7f9fc]'
                            }`}
                          >
                            <span
                              className={`flex size-8 items-center justify-center rounded-md text-sm ${
                                isActive ? 'bg-makonis-blue text-white' : 'bg-makonis-navy text-white'
                              }`}
                            >
                              {location.flag}
                            </span>
                            <span className="min-w-0">
                              <span
                                className={`block truncate text-[14px] font-semibold ${
                                  isActive ? 'text-makonis-blue' : 'text-makonis-navy'
                                }`}
                              >
                                {location.title}
                              </span>
                              <span className="block truncate text-[12px] text-black/35">
                                {location.region}
                              </span>
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  </MotionDiv>
                ) : null}
              </AnimatePresence>
            </div>
          </AnimatedCard>
        </div>
      </section>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0"
      >
        {contactLocations.map((location) => (
          <iframe
            key={location.id}
            title={`preload-${location.id}`}
            loading="lazy"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              location.searchQuery || location.address,
            )}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
            className="h-px w-px border-0"
          />
        ))}
      </div>

      <section className="bg-white py-16 md:py-20">
        <div className="container-default">
          <AnimatePresence mode="wait">
            <MotionDiv
              key={activeLocation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]"
            >
                  <AnimatedCard className="rounded-3xl border border-black/10 bg-white p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-makonis-blue/10 text-xl text-makonis-blue">
                    <BuildingIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-makonis-blue">
                      Selected Location
                    </p>
                    <h2 className="mt-2 text-makonis-navy">
                      {activeLocation.fullTitle}
                    </h2>
                  </div>
                </div>

                <div className="mt-8 space-y-5">
                  <div className="flex gap-4">
                    <div className="flex size-10 items-center justify-center rounded-full bg-[#f7f9fc] text-makonis-blue">
                      <MapPinIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/35">
                        Address
                      </p>
                      <p className="mt-2 text-black/65">{activeLocation.address}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex size-10 items-center justify-center rounded-full bg-[#f7f9fc] text-makonis-blue">
                      <PhoneIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/35">
                        Phone
                      </p>
                      <a
                        href={`tel:${activeLocation.phone.replace(/\s+/g, '')}`}
                        className="mt-2 block font-semibold text-makonis-navy transition hover:text-makonis-blue"
                      >
                        {activeLocation.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex size-10 items-center justify-center rounded-full bg-[#f7f9fc] text-makonis-blue">
                      <EnvelopeIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/35">
                        Email
                      </p>
                      <a
                        href={`mailto:${activeLocation.email}`}
                        className="mt-2 block font-semibold text-makonis-navy transition hover:text-makonis-blue"
                      >
                        {activeLocation.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-black/10 pt-6">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      activeLocation.searchQuery || activeLocation.address,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-makonis-navy px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-makonis-blue"
                  >
                    Open in Google Maps
                    <MapPinIcon className="h-3 w-3" />
                  </a>
                </div>
              </AnimatedCard>

              <AnimatedCard className="overflow-hidden rounded-3xl border border-black/10 bg-white p-3 shadow-[0_16px_40px_rgba(0,0,0,0.05)]">
                <div className="relative min-h-[320px] overflow-hidden rounded-2xl md:min-h-[400px]">
                  <iframe
                    title={`${activeLocation.title} Office Location`}
                    className="absolute inset-0 -mt-[60px] h-[calc(100%+120px)] w-full -mb-[60px]"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://maps.google.com/maps?q=${activeLocation.lat},${activeLocation.lng}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                  />
                </div>
              </AnimatedCard>
            </MotionDiv>
          </AnimatePresence>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-default">
          <FloatUpText className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-makonis-blue">
              Experience our offices
            </p>
            <h2 className="mt-4">Experience Our Offices</h2>
          </FloatUpText>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {contactGallery.map((image, index) => (
              <AnimatedCard
                key={image}
                delay={index * 100}
                className="group relative h-44 overflow-hidden rounded-2xl shadow-[0_16px_40px_rgba(0,41,86,0.08)] md:h-56"
              >
                <img
                  src={image}
                  alt="Office"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-makonis-navy/45 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default ContactPage
