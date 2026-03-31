import { useEffect, useMemo, useState } from 'react'
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

function PaperPlaneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M22 2 11 13" />
      <path d="m22 2-7 20-4-9-9-4Z" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M20 21a8 8 0 0 0-16 0" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

function CityIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 21h18" />
      <path d="M5 21V7l8-4v18" />
      <path d="M19 21V11l-6-4" />
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

function ChevronIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m6 8 4 4 4-4" />
    </svg>
  )
}

function Field({ label, icon, error, children }) {
  return (
    <div>
      <label className="mb-1.5 ml-1 block text-[10.5px] font-semibold uppercase tracking-[0.18em] text-black/45">
        {label} <span className="text-red-500">*</span>
      </label>
      <div className={`relative rounded-xl border bg-white transition focus-within:border-makonis-blue/45 focus-within:shadow-[0_0_0_3px_rgba(0,160,233,0.12)] ${error ? 'border-red-400' : 'border-black/10'}`}>
        <div className="pointer-events-none absolute left-0 top-0 flex h-9 w-9 items-center justify-center text-black/35">
          {icon}
        </div>
        {children}
      </div>
      {error ? <p className="ml-1 mt-1.5 text-[11px] text-red-500">{error}</p> : null}
    </div>
  )
}

function ContactFormModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    mobile: '',
    enquiryType: 'Product Enquiry',
    selection: '',
    description: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => (document.body.style.overflow = prev)
  }, [isOpen])

  const dynamicOptions = useMemo(() => {
    if (formData.enquiryType === 'Product Enquiry') {
      return ['Talent Track Pro', 'Mako Plus', 'Trading Intelligence']
    }
    if (formData.enquiryType === 'Service Enquiry') {
      return ['Staffing Solutions', 'Consulting', 'Engineering Services']
    }
    return []
  }, [formData.enquiryType])

  const validate = () => {
    const e = {}
    if (!formData.name.trim()) e.name = 'Name is required'

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) e.email = 'Email is required'
    else if (!emailRegex.test(formData.email)) e.email = 'Invalid email'

    if (!formData.city.trim()) e.city = 'City is required'

    const mobileRegex = /^[0-9]{10}$/
    if (!formData.mobile.trim()) e.mobile = 'Mobile required'
    else if (!mobileRegex.test(formData.mobile)) e.mobile = 'Must be 10 digits'

    if (formData.enquiryType !== 'General Enquiry' && !formData.selection) {
      e.selection = 'Select option'
    }

    if (!formData.description.trim()) e.description = 'Required'

    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((p) => ({
      ...p,
      [name]: value,
      ...(name === 'enquiryType' ? { selection: '' } : {}),
    }))

    setErrors((p) => ({
      ...p,
      [name]: undefined,
      ...(name === 'enquiryType' ? { selection: undefined } : {}),
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 1000))
    setIsSubmitting(false)
    onClose()
  }

  if (!isOpen) return null

  return createPortal(
    <div className="fixed inset-0 z-[1000] overflow-y-auto p-3 md:p-6">
      <div className="fixed inset-0 bg-makonis-navy/20 backdrop-blur-sm" onClick={onClose} />

      <div className="relative mx-auto flex min-h-full max-w-5xl items-center">
        <div className="relative w-full max-h-[85vh] overflow-hidden rounded-md  border-black/10 bg-white shadow-[0_20px_60px_rgba(0,20,45,0.18)]">

          <button onClick={onClose} className="absolute right-3 top-3 z-20 rounded-md  border-black/10 bg-white p-2">
            <CloseIcon />
          </button>

          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">

            {/* LEFT */}
            <div className="relative overflow-y-auto bg-makonis-navy px-4 py-5 text-white lg:px-6 lg:py-6">
              <div className="relative">
                <p className="text-[10.5px] uppercase tracking-[0.18em] text-white/65">
                  Contact form
                </p>

                <h2 className="mt-2 text-[22px] leading-tight">
                  Tell us what you're building
                </h2>

                <p className="mt-2 text-[12.5px] text-white/75">
                  Share your project details and we’ll connect you with the right team.
                </p>

                <div className="mt-4 grid gap-2">
                  <div className="rounded-md border border-white/12 bg-white/10 p-3">
                    <p className="text-[10px] uppercase text-white/60">What happens next</p>
                    <p className="mt-1 text-[12px] text-white/80">
                      We review and respond with the next steps.
                    </p>
                  </div>

                  <div className="rounded-md border border-white/12 bg-white/10 p-3">
                    <p className="text-[10px] uppercase text-white/60">Focus</p>
                    <p className="mt-1 text-[12px] text-white/80">
                      Products, services, partnerships.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="overflow-y-auto px-5 py-6 lg:px-8 lg:py-8">

              <div>
                <p className="text-[10.5px] uppercase tracking-[0.18em] text-black/45">
                  Project details
                </p>

                <h2 className="mt-2 text-[22px] text-makonis-navy">
                  Start the conversation
                </h2>

                <p className="mt-2 text-[12.5px] text-black/60">
                  Fill details and we’ll connect you with the right expert.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-4 space-y-3">

                <div className="grid gap-3 md:grid-cols-2">
                  <Field label="Name" icon={<UserIcon />} error={errors.name}>
                    <input name="name" className="h-9 w-full pl-9 pr-3 text-[12.5px]" onChange={handleChange} value={formData.name} />
                  </Field>

                  <Field label="Email" icon={<MailIcon />} error={errors.email}>
                    <input name="email" className="h-9 w-full pl-9 pr-3 text-[12.5px]" onChange={handleChange} value={formData.email} />
                  </Field>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <Field label="City" icon={<CityIcon />} error={errors.city}>
                    <input name="city" className="h-9 w-full pl-9 pr-3 text-[12.5px]" onChange={handleChange} value={formData.city} />
                  </Field>

                  <Field label="Mobile" icon={<PhoneIcon />} error={errors.mobile}>
                    <input name="mobile" className="h-9 w-full pl-9 pr-3 text-[12.5px]" onChange={handleChange} value={formData.mobile} />
                  </Field>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <Field label="Enquiry type" icon={<ChevronIcon />}>
                    <select name="enquiryType" className="h-9 w-full pl-3 text-[12.5px]" onChange={handleChange} value={formData.enquiryType}>
                      <option>Product Enquiry</option>
                      <option>Service Enquiry</option>
                      <option>General Enquiry</option>
                    </select>
                  </Field>

                  {formData.enquiryType !== 'General Enquiry' && (
                    <Field label="Selection" icon={<ChevronIcon />} error={errors.selection}>
                      <select name="selection" className="h-9 w-full pl-3 text-[12.5px]" onChange={handleChange} value={formData.selection}>
                        <option value="">Select</option>
                        {dynamicOptions.map((o) => <option key={o}>{o}</option>)}
                      </select>
                    </Field>
                  )}
                </div>

                <div>
                  <textarea
                    name="description"
                    rows="3"
                    className="w-full rounded-md border px-3 py-2 text-[12.5px]"
                    placeholder="Tell us more..."
                    onChange={handleChange}
                    value={formData.description}
                  />
                </div>

                <div className="flex items-center justify-between pt-3">
                  <p className="text-[12px] text-black/55">
                    We’ll contact you regarding your enquiry.
                  </p>

                  <Button type="submit" variant="dark">
                    {isSubmitting ? 'Sending...' : 'Send'}
                  </Button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default ContactFormModal