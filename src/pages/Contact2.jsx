import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import AnimatedCard from '../components/AnimatedCard.jsx'
import Button from '../components/Button.jsx'
import { useContactModal } from '../components/contact/ContactModalContext.js'
import CTASection from '../components/sections/CTASection.jsx'
import Footer from '../components/sections/Footer.jsx'
import { contactHero, contactLocations, contactGallery } from './legacySiteContent.js'

const MotionDiv = motion.div

const heroBackdrop =
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=80'

const officeRoster = contactLocations.map((location) => ({
  slug: location.id,
  city: location.title,
  officeName: location.fullTitle,
  address: location.address,
  phone: location.phone,
  email: location.email,
  mapEmbedUrl: `https://maps.google.com/maps?q=${encodeURIComponent(
    location.searchQuery || location.address,
  )}&t=&z=14&ie=UTF8&iwloc=&output=embed`,
  mapLink: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    location.searchQuery || location.address,
  )}`,
  photos: contactGallery.slice(0, 3),
}))

function SectionHeader({ title, subtitle, eyebrow }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-makonis-blue">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-4 text-makonis-navy">{title}</h2>
      {subtitle ? <p className="mt-4 text-black/65">{subtitle}</p> : null}
    </div>
  )
}

function ContactHero({ onTalkToExpert, onJumpToSelector }) {
  return (
    <section className="relative overflow-hidden bg-makonis-navy pt-[var(--navbar-height)] text-white">
      <div className="absolute inset-0">
        <img
          src={heroBackdrop}
          alt="A modern workspace with a collaborative team atmosphere"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,160,233,0.22),transparent_34%),linear-gradient(180deg,rgba(0,19,40,0.36),rgba(0,19,40,0.88))]" />
      </div>

      <div className="container-default relative flex items-center py-24 md:py-28 lg:py-32">
        <div className="grid w-full gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Get in touch
            </p>
            <h1 className="hero-title mt-4 max-w-[12ch]">{contactHero.title}</h1>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="text-white/82 md:text-[19px]">
              {contactHero.description}
            </p>
            
          </div>
        </div>
      </div>
    </section>
  )
}

function LocationSelector({ offices, activeSlug, onChange }) {
  return (
    <section id="global-presence" className="bg-white py-5 ">
      <div className="container-default">
        <SectionHeader
          eyebrow="Global offices"
          title="Our Global Presence"
          subtitle="Select a location to view details"
        />

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {offices.map((office) => {
            const isSelected = office.slug === activeSlug

            return (
              <button
                key={office.slug}
                type="button"
                aria-pressed={isSelected}
                onClick={() => onChange(office.slug)}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                  isSelected
                    ? 'bg-makonis-navy text-white shadow-[0_10px_24px_rgba(0,41,86,0.14)]'
                    : 'bg-[#f7f9fc] text-makonis-navy hover:bg-makonis-blue/10 hover:text-makonis-blue'
                }`}
              >
                {office.city}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function LocationDetails({ office }) {
  return (
    <section className="">
      <div className="container-default">
        <AnimatePresence mode="wait">
          <MotionDiv
            key={office.slug}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="grid  min-h-[80vh]  lg:grid-cols-2 lg:items-stretch"
          >
            <AnimatedCard className="h-full rounded-lg border border-black/10 bg-white p-8 shadow-[0_16px_42px_rgba(0,41,86,0.08)] flex flex-col">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-makonis-blue">
                Selected office
              </p>
              <h2 className="mt-3 text-makonis-navy">{office.officeName}</h2>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/35">
                    Address
                  </p>
                  <p className="mt-2 text-black/65">{office.address}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/35">
                    Phone
                  </p>
                  <a
                    href={`tel:${office.phone.replace(/\s+/g, '')}`}
                    className="mt-2 block font-semibold text-makonis-navy transition hover:text-makonis-blue"
                  >
                    {office.phone}
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/35">
                    Email
                  </p>
                  <a
                    href={`mailto:${office.email}`}
                    className="mt-2 block font-semibold text-makonis-navy transition hover:text-makonis-blue"
                  >
                    {office.email}
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={office.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-makonis-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-makonis-blue"
                >
                  Open in Google Maps
                </a>
              </div>
            </AnimatedCard>

            <AnimatedCard className="h-full overflow-hidden rounded-lg border border-black/10 bg-white shadow-[0_16px_42px_rgba(0,41,86,0.08)]">
              <div className="relative h-full overflow-hidden">
                <iframe
                  key={office.slug}
                  title={`${office.city} office map`}
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={office.mapEmbedUrl}
                />
              </div>
            </AnimatedCard>
          </MotionDiv>
        </AnimatePresence>
      </div>
    </section>
  )
}

function OfficeGallery({ office }) {
  return (
    <section className="bg-white py-24 md:py-28 lg:py-32">
      <div className="container-default">
        <SectionHeader
          eyebrow="Workspace"
          title="Inside Our Office"
          subtitle="A closer look at the environment behind each team."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-6">
          {office.photos.map((photo, index) => (
            <AnimatedCard
              key={`${office.slug}-${index}`}
              delay={index * 90}
              className="group overflow-hidden rounded-lg border border-black/10 bg-white shadow-[0_16px_42px_rgba(0,41,86,0.08)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={photo}
                  alt={`${office.city} office ${index + 1}`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-makonis-navy/22 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}

// function ContactForm() {
//   const [formState, setFormState] = useState({
//     fullName: '',
//     emailAddress: '',
//     messageText: '',
//   })
//   const [submitted, setSubmitted] = useState(false)

//   useEffect(() => {
//     if (!submitted) return undefined

//     const timerId = window.setTimeout(() => setSubmitted(false), 2600)
//     return () => window.clearTimeout(timerId)
//   }, [submitted])

//   const handleFieldChange = (event) => {
//     const { name, value } = event.target

//     setFormState((current) => ({
//       ...current,
//       [name]: value,
//     }))
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault()
//     setSubmitted(true)
//     setFormState({
//       fullName: '',
//       emailAddress: '',
//       messageText: '',
//     })
//   }

//   return (
//     <section className="bg-[#f7f9fc] py-24 md:py-28 lg:py-32">
//       <div className="container-default">
//         <div className="mx-auto max-w-3xl text-center">
//           <p className="text-sm font-semibold uppercase tracking-[0.16em] text-makonis-blue">
//             Contact
//           </p>
//           <h2 className="mt-4 text-makonis-navy">Send Us a Message</h2>
//           <p className="mt-4 text-black/65">
//             Use the form below to share what you need, and we will route the conversation to the
//             right team.
//           </p>
//         </div>

//         <AnimatedCard className="mx-auto mt-12 max-w-4xl rounded-[28px] bg-white p-6 shadow-[0_16px_42px_rgba(0,41,86,0.08)] md:p-8">
//           <form onSubmit={handleSubmit} className="grid gap-5">
//             <div className="grid gap-5 md:grid-cols-2">
//               <label className="grid gap-2">
//                 <span className="text-sm font-semibold text-makonis-navy">Name</span>
//                 <input
//                   name="fullName"
//                   value={formState.fullName}
//                   onChange={handleFieldChange}
//                   type="text"
//                   placeholder="Your name"
//                   className="rounded-md border border-black/10 bg-white px-4 py-3 text-[16px] text-makonis-navy outline-none transition placeholder:text-black/35 focus:border-makonis-blue focus:ring-4 focus:ring-makonis-blue/10"
//                 />
//               </label>

//               <label className="grid gap-2">
//                 <span className="text-sm font-semibold text-makonis-navy">Email</span>
//                 <input
//                   name="emailAddress"
//                   value={formState.emailAddress}
//                   onChange={handleFieldChange}
//                   type="email"
//                   placeholder="you@company.com"
//                   className="rounded-md border border-black/10 bg-white px-4 py-3 text-[16px] text-makonis-navy outline-none transition placeholder:text-black/35 focus:border-makonis-blue focus:ring-4 focus:ring-makonis-blue/10"
//                 />
//               </label>
//             </div>

//             <label className="grid gap-2">
//               <span className="text-sm font-semibold text-makonis-navy">Message</span>
//               <textarea
//                 name="messageText"
//                 value={formState.messageText}
//                 onChange={handleFieldChange}
//                 rows="5"
//                 placeholder="Tell us about your project or question"
//                 className="rounded-md border border-black/10 bg-white px-4 py-3 text-[16px] text-makonis-navy outline-none transition placeholder:text-black/35 focus:border-makonis-blue focus:ring-4 focus:ring-makonis-blue/10"
//               />
//             </label>

//             <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
//               <Button variant="dark" type="submit">
//                 Send Message
//               </Button>
//               <p className={`text-sm transition ${submitted ? 'text-makonis-blue' : 'text-black/45'}`}>
//                 {submitted ? 'Message prepared. We will get back to you soon.' : 'We usually reply within one business day.'}
//               </p>
//             </div>
//           </form>
//         </AnimatedCard>
//       </div>
//     </section>
//   )
// }

function Contact2() {
  const { openContactOptions } = useContactModal()
  const [selectedSlug, setSelectedSlug] = useState(officeRoster[0].slug)

  const selectedOffice = useMemo(
    () => officeRoster.find((office) => office.slug === selectedSlug) || officeRoster[0],
    [selectedSlug],
  )

  const jumpToSelector = () => {
    document.getElementById('global-presence')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <>
      <ContactHero onTalkToExpert={openContactOptions} onJumpToSelector={jumpToSelector} />
      <LocationSelector offices={officeRoster} activeSlug={selectedOffice.slug} onChange={setSelectedSlug} />
      <LocationDetails office={selectedOffice} />
      {/* <OfficeGallery office={selectedOffice} /> */}
      {/* <ContactForm /> */}
      <CTASection />
      <Footer />
    </>
  )
}

export default Contact2
