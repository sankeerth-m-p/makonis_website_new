import { useEffect, useMemo, useState } from 'react'
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

function PaperPlaneIcon() {
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
      <path d="M22 2 11 13" />
      <path d="m22 2-7 20-4-9-9-4Z" />
    </svg>
  )
}

function UserIcon() {
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
      <path d="M20 21a8 8 0 0 0-16 0" />
      <circle cx="12" cy="7" r="4" />
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

function CityIcon() {
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
      <path d="M3 21h18" />
      <path d="M5 21V7l8-4v18" />
      <path d="M19 21V11l-6-4" />
    </svg>
  )
}

function PhoneIcon() {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72l.38 2.66a2 2 0 0 1-.57 1.72l-1.2 1.2a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 1.72-.57l2.66.38A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function ChevronIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 8 4 4 4-4" />
    </svg>
  )
}

function Field({
  label,
  icon,
  error,
  children,
}) {
  return (
    <div>
      <label className="mb-2 ml-1 block text-[11px] font-semibold uppercase tracking-[0.18em] text-black/45">
        {label} <span className="text-red-500">*</span>
      </label>
      <div
        className={`relative rounded-2xl border bg-white transition focus-within:border-makonis-blue/45 focus-within:shadow-[0_0_0_4px_rgba(0,160,233,0.12)] ${
          error ? 'border-red-400' : 'border-black/10'
        }`}
      >
        <div className="pointer-events-none absolute left-0 top-0 flex h-11 w-11 items-center justify-center text-black/35">
          {icon}
        </div>
        {children}
      </div>
      {error ? <p className="ml-1 mt-2 text-xs text-red-500">{error}</p> : null}
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
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
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
    const nextErrors = {}
    if (!formData.name.trim()) nextErrors.name = 'Name is required'

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      nextErrors.email = 'Invalid email format'
    }

    if (!formData.city.trim()) nextErrors.city = 'City is required'

    const mobileRegex = /^[0-9]{10}$/
    if (!formData.mobile.trim()) {
      nextErrors.mobile = 'Mobile number is required'
    } else if (!mobileRegex.test(formData.mobile)) {
      nextErrors.mobile = 'Mobile number must be 10 digits'
    }

    if (formData.enquiryType !== 'General Enquiry' && !formData.selection) {
      nextErrors.selection = 'Please choose an option'
    }

    if (!formData.description.trim()) nextErrors.description = 'Description is required'

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
      ...(name === 'enquiryType' ? { selection: '' } : {}),
    }))

    setErrors((current) => ({
      ...current,
      [name]: undefined,
      ...(name === 'enquiryType' ? { selection: undefined } : {}),
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    await new Promise((resolve) => window.setTimeout(resolve, 1200))
    setIsSubmitting(false)
    onClose()
  }

  if (!isOpen) return null

  return createPortal(
    <div className="fixed inset-0 z-[1000] overflow-y-auto p-4 md:p-8">
      <div
        className="fixed inset-0 bg-makonis-navy/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative mx-auto flex min-h-full max-w-6xl items-center">
        <div className="relative w-full max-h-[88vh] overflow-hidden rounded-md border border-black/10 bg-makonis-white shadow-[0_24px_70px_rgba(0,20,45,0.18)]">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-20 rounded-md border border-black/10 bg-white/95 p-2 text-makonis-navy shadow-sm transition hover:border-black/15 hover:bg-white"
          >
            <CloseIcon />
          </button>

          <div className="grid max-h-[88vh] lg:grid-cols-[0.82fr_1.18fr]">
            <div className="relative max-h-[88vh] overflow-y-auto overflow-x-hidden bg-makonis-navy px-5 py-6 text-white sm:px-6 lg:px-8 lg:py-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,160,233,0.32),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_38%)]" />
              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/65">
                  Contact form
                </p>
                <h2 className="mt-3 text-[24px] leading-tight text-white md:text-[28px]">
                  Tell us what you&apos;re building
                </h2>
                <p className="mt-3 max-w-md text-[13px] leading-6 text-white/78">
                  Share your project details and the right Makonis team will get
                  back to you with the next step.
                </p>

                <div className="mt-6 grid gap-3">
                  <div className="rounded-md border border-white/12 bg-white/10 p-4 backdrop-blur-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
                      What happens next
                    </p>
                    <p className="mt-2 text-[13px] leading-5 text-white/82">
                      We review your requirement, route it to the right team,
                      and reach out with a clear response.
                    </p>
                  </div>
                  <div className="rounded-md border border-white/12 bg-white/10 p-4 backdrop-blur-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
                      Response focus
                    </p>
                    <p className="mt-2 text-[13px] leading-5 text-white/82">
                      Products, services, general enquiries, and enterprise
                      partnerships.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-h-[90vh] overflow-y-auto bg-white px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
              <div className="max-w-3xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/45">
                  Project details
                </p>
                <h2 className="mt-3 text-[24px] leading-tight text-makonis-navy md:text-[28px]">
                  Start the conversation
                </h2>
                <p className="mt-3 max-w-2xl text-[13px] leading-6 text-black/62">
                  Fill in the details below and we&apos;ll connect you with the
                  right expert.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div className="grid gap-3 md:grid-cols-2">
                  <Field label="Name" icon={<UserIcon />} error={errors.name}>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      className="h-10 w-full rounded-md bg-transparent pl-11 pr-4 text-[13px] text-black outline-none"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Field>

                  <Field label="Email" icon={<MailIcon />} error={errors.email}>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@company.com"
                      className="h-10 w-full rounded-md bg-transparent pl-11 pr-4 text-[13px] text-black outline-none"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Field>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <Field label="City" icon={<CityIcon />} error={errors.city}>
                    <input
                      type="text"
                      name="city"
                      placeholder="Bangalore"
                      className="h-10 w-full rounded-md bg-transparent pl-11 pr-4 text-[13px] text-black outline-none"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </Field>

                  <Field label="Mobile" icon={<PhoneIcon />} error={errors.mobile}>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="9876543210"
                      className="h-10 w-full rounded-md bg-transparent pl-11 pr-4 text-[13px] text-black outline-none"
                      value={formData.mobile}
                      onChange={handleChange}
                    />
                  </Field>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <Field label="Enquiry type" icon={<ChevronIcon />} error={null}>
                    <select
                      name="enquiryType"
                      className="h-10 w-full appearance-none rounded-md bg-transparent pl-4 pr-11 text-[13px] text-black outline-none"
                      value={formData.enquiryType}
                      onChange={handleChange}
                    >
                      <option value="Product Enquiry">Product Enquiry</option>
                      <option value="Service Enquiry">Service Enquiry</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </Field>

                  {formData.enquiryType !== 'General Enquiry' ? (
                      <Field
                      label={formData.enquiryType === 'Product Enquiry' ? 'Product' : 'Service'}
                      icon={<ChevronIcon />}
                      error={errors.selection}
                    >
                      <select
                        name="selection"
                        className="h-10 w-full appearance-none rounded-md bg-transparent pl-4 pr-11 text-[13px] text-black outline-none"
                        value={formData.selection}
                        onChange={handleChange}
                      >
                        <option value="">Select option</option>
                        {dynamicOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </Field>
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </div>

                <div>
                  <label className="mb-2 ml-1 block text-[11px] font-semibold uppercase tracking-[0.18em] text-black/45">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <div
                    className={`rounded-md border bg-white transition focus-within:border-makonis-blue/45 focus-within:shadow-[0_0_0_4px_rgba(0,160,233,0.12)] ${
                      errors.description ? 'border-red-400' : 'border-black/10'
                    }`}
                  >
                    <textarea
                      name="description"
                      rows="4"
                      placeholder="Tell us more about your requirements..."
                      className="w-full resize-none rounded-md bg-transparent px-4 py-3 text-[13px] text-black outline-none"
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.description ? (
                    <p className="ml-1 mt-2 text-xs text-red-500">{errors.description}</p>
                  ) : null}
                </div>

                <div className="flex flex-col gap-3 border-t border-black/8 pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-xl text-[13px] leading-5 text-black/55">
                    By sending this form, you&apos;re asking our team to contact
                    you about your enquiry.
                  </p>

                  <Button
                    type="submit"
                    variant="dark"
                    disabled={isSubmitting}
                    className={isSubmitting ? 'cursor-not-allowed opacity-70' : ''}
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        <span>Sending...</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2">
                        <PaperPlaneIcon />
                        <span>Send message</span>
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}

export default ContactFormModal
