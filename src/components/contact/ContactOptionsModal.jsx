import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import Button from '../Button.jsx'

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72l.38 2.66a2 2 0 0 1-.57 1.72l-1.2 1.2a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 1.72-.57l2.66.38A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function EditIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
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
      className="group flex h-full w-full flex-col rounded-xl border border-black/10 bg-white p-4 text-left shadow-[0_8px_22px_rgba(0,41,86,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-makonis-blue/30 hover:shadow-[0_12px_28px_rgba(0,41,86,0.1)]"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-makonis-blue/10 text-makonis-navy group-hover:bg-makonis-navy group-hover:text-white">
        {icon}
      </div>

      <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-black/45">
        {caption}
      </p>

      <h3 className="mt-1 text-[17px] text-makonis-navy">
        {title}
      </h3>

      <p className="mt-1 text-[12.5px] leading-5 text-black/65">
        {description}
      </p>

      <div className="mt-3 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-makonis-navy">
        <span>Continue</span>
        <ArrowIcon />
      </div>
    </button>
  )
}

function ContactOptionsModal({ isOpen, onClose, onContactFormClick }) {
  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => (document.body.style.overflow = prev)
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
    <div className="fixed inset-0 z-[999] overflow-y-auto p-3 md:p-6">
      <div className="fixed inset-0 bg-makonis-navy/20 backdrop-blur-sm " onClick={onClose} />

      <div className="relative mx-auto flex min-h-full max-w-5xl items-center ">
        <div className="relative w-full max-h-[85vh] overflow-hidden rounded-xl   border-black/10 bg-white ">

          <button onClick={onClose} className="absolute right-3 top-3 z-20 rounded-md  border-black/10 bg-white p-2">
            <CloseIcon />
          </button>

          <div className="grid lg:grid-cols-[1fr_1.2fr]">

            {/* LEFT */}
            <div className="bg-makonis-navy px-4 py-5 text-white lg:px-6 lg:py-6">
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/65">
                Contact
              </p>

              <h2 className="mt-2 text-[22px]">
                Talk to an expert
              </h2>

              <p className="mt-2 text-[12.5px] text-white/75">
                Choose the fastest way to connect with our team.
              </p>

              <div className="mt-4 space-y-2">
                <div className="rounded-xl border border-white/12 bg-white/10 p-3">
                  <p className="text-[10px] uppercase text-white/60">Phone</p>
                  <a href="tel:+918041707838" className="mt-1 flex items-center gap-2 text-[13px] font-semibold">
                    <PhoneIcon />
                    +91 8041707838
                  </a>
                </div>

                <div className="rounded-xl border border-white/12 bg-white/10 p-3">
                  <p className="text-[10px] uppercase text-white/60">Email</p>
                  <a href="mailto:info@makonissoft.com" className="mt-1 flex items-center gap-2 text-[12.5px]">
                    <MailIcon />
                    info@makonissoft.com
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="px-5 py-6 lg:px-8 lg:py-8">

              <p className="text-[10px] uppercase tracking-[0.18em] text-black/45">
                Choose a path
              </p>

              <h2 className="mt-2 text-[22px] text-makonis-navy">
                How would you like to connect?
              </h2>

              <p className="mt-2 text-[12.5px] text-black/60">
                Pick the option that works best for you.
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <OptionCard icon={<PhoneIcon />} caption="Instant" title="Call me now" description="Live conversation" onClick={handleCallNow} />
                <OptionCard icon={<ChatIcon />} caption="Quick help" title="Chat now" description="Instant guidance" onClick={handleChatNow} />
                <OptionCard icon={<EditIcon />} caption="Detailed" title="Write to us" description="Send requirements" onClick={onContactFormClick} />
              </div>

              <div className="mt-4 flex items-center justify-between border border-black/10 rounded-xl p-3">
                <p className="text-[12px] text-black/55">
                  Not sure? Start with form.
                </p>
                <Button variant="dark" onClick={onContactFormClick}>
                  Open form
                </Button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>,
    document.body
  )
}

export default ContactOptionsModal