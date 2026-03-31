import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import Button from '../Button.jsx'

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72l.38 2.66a2 2 0 0 1-.57 1.72l-1.2 1.2a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 1.72-.57l2.66.38A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function ChatIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function EditIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8h10" />
      <path d="m9 4 4 4-4 4" />
    </svg>
  )
}

function OptionCard({ icon, title, description, caption, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex h-full w-full flex-col rounded-2xl border border-black/10 bg-white p-5 text-left shadow-[0_10px_28px_rgba(0,41,86,0.07)] transition duration-300 hover:-translate-y-1 hover:border-makonis-blue/30 hover:shadow-[0_16px_36px_rgba(0,41,86,0.12)]"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-makonis-blue/10 text-makonis-navy transition duration-300 group-hover:bg-makonis-navy group-hover:text-white">
        {icon}
      </div>
      <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-black/45">
        {caption}
      </p>
      <h3 className="mt-2 text-[20px] leading-tight text-makonis-navy md:text-[22px]">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-black/65">{description}</p>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-makonis-navy">
        <span>Continue</span>
        <ArrowIcon />
      </div>
    </button>
  )
}

function ContactOptionsModal({ isOpen, onClose, onContactFormClick }) {
  useEffect(() => {
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleCallNow = () => {
    window.location.href = 'tel:+918041707838'
  }

  const handleChatNow = () => {
    window.dispatchEvent(new Event('openChatbot'))
    onClose()
  }

  return createPortal(
    <div className="fixed inset-0 z-[999] overflow-y-auto p-4 md:p-8">
      <div
        className="fixed inset-0 bg-makonis-navy/55 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative mx-auto flex min-h-full max-w-6xl items-center">
        <div className="relative w-full max-h-[90vh] overflow-hidden rounded-2xl border border-black/10 bg-makonis-white shadow-[0_24px_70px_rgba(0,20,45,0.18)]">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 z-20 rounded-full border border-black/10 bg-white/95 p-2.5 text-makonis-navy shadow-sm transition hover:border-black/15 hover:bg-white"
          >
            <CloseIcon />
          </button>

          <div className="grid max-h-[90vh] lg:grid-cols-[1.05fr_1.45fr]">
            <div className="relative max-h-[90vh] overflow-y-auto overflow-x-hidden bg-makonis-navy px-6 py-8 text-white sm:px-8 lg:px-10 lg:py-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,160,233,0.32),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_38%)]" />
              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/65">
                  Contact
                </p>
                <h2 className="mt-3 text-[28px] leading-tight text-white md:text-[32px]">
                  Talk to an expert
                </h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-white/78">
                  Choose the fastest way to connect with our team and we&apos;ll
                  help you find the right next step.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="rounded-2xl border border-white/12 bg-white/8 p-4 backdrop-blur-sm sm:p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
                      Phone
                    </p>
                    <a
                      href="tel:+918041707838"
                      className="mt-3 inline-flex items-center gap-3 text-base font-semibold text-white transition hover:text-white/85"
                    >
                      <PhoneIcon />
                      <span>+91 8041707838</span>
                    </a>
                  </div>

                  <div className="rounded-2xl border border-white/12 bg-white/8 p-4 backdrop-blur-sm sm:p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
                      Email
                    </p>
                    <a
                      href="mailto:info@makonissoft.com"
                      className="mt-3 inline-flex items-center gap-3 text-sm font-medium text-white/88 transition hover:text-white"
                    >
                      <MailIcon />
                      <span>info@makonissoft.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-h-[90vh] overflow-y-auto bg-white px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
              <div className="max-w-3xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/45">
                  Choose a path
                </p>
                <h2 className="mt-3 text-[28px] leading-tight text-makonis-navy md:text-[32px]">
                  How would you like to connect?
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-black/62">
                  Pick the option that works best for you. The flow stays the
                  same, but the experience now fits the rest of the site.
                </p>
              </div>

              <div className="mt-7 grid gap-4 md:grid-cols-3">
                <OptionCard
                  icon={<PhoneIcon />}
                  caption="Instant"
                  title="Call me now"
                  description="Jump into a live conversation with our team right away."
                  onClick={handleCallNow}
                />
                <OptionCard
                  icon={<ChatIcon />}
                  caption="Quick help"
                  title="Chat now"
                  description="Open the assistant for immediate guidance and answers."
                  onClick={handleChatNow}
                />
                <OptionCard
                  icon={<EditIcon />}
                  caption="Detailed brief"
                  title="Write to us"
                  description="Share your requirements and let us follow up with the right team."
                  onClick={onContactFormClick}
                />
              </div>

              <div className="mt-7 flex flex-col gap-3 rounded-2xl border border-black/8 bg-makonis-white/80 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
                <div>
                  <p className="text-sm font-semibold text-makonis-navy">
                    Not sure which route to choose?
                  </p>
                  <p className="mt-1 text-sm leading-6 text-black/55">
                    Start with the form and we&apos;ll guide the conversation from
                    there.
                  </p>
                </div>
                <Button variant="dark" onClick={onContactFormClick}>
                  Open contact form
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}

export default ContactOptionsModal
