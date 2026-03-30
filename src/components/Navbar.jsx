import { useState, useEffect, useRef } from 'react'
import Button from './Button.jsx'
import { navigation } from '../config/designTokens.js'

function ChevronDownIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 12"
      className="size-3.5 stroke-current"
      fill="none"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.25 4.5 6 8.25 9.75 4.5" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-7 stroke-current"
      fill="none"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4.2-4.2" />
    </svg>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY

          if (currentScrollY < 10) {
            // Always show at the very top
            setIsVisible(true)
          } else if (currentScrollY < lastScrollY.current) {
            // Scrolling up — show
            setIsVisible(true)
          } else if (currentScrollY > lastScrollY.current + 5) {
            // Scrolling down (with 5px threshold to avoid jitter) — hide
            setIsVisible(false)
            setIsOpen(false) // close mobile menu when hiding
          }

          lastScrollY.current = currentScrollY
          ticking.current = false
        })

        ticking.current = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur transition-transform duration-300 ease-in-out"
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
      }}
    >
      <div className="container-default flex h-[var(--navbar-height)] items-center justify-between">
        <div className="flex items-center gap-10">
          <a href="#" className="shrink-0">
            <img
              src="/makonisLogo.png"
              alt="Makonis"
              className="h-12 w-auto object-contain"
            />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-1.5 text-[15px] font-medium tracking-[-0.02em] text-black transition hover:text-makonis-blue"
              >
                <span>{item.label}</span>
                {item.hasDropdown ? <ChevronDownIcon /> : null}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-5 lg:flex">
          <Button variant="light">Talk to an Expert</Button>

          <button
            type="button"
            className="text-black transition hover:text-makonis-blue"
            aria-label="Search"
          >
            <SearchIcon />
          </button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <button type="button" className="text-black" aria-label="Search">
            <SearchIcon />
          </button>

          <button
            type="button"
            className="rounded-md border border-black/10 px-4 py-2 text-sm font-semibold"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            Menu
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-black/10 bg-white lg:hidden">
          <nav className="container-default flex flex-col py-4">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center justify-between py-3 text-base font-medium text-black"
                onClick={() => setIsOpen(false)}
              >
                <span>{item.label}</span>
                {item.hasDropdown ? <ChevronDownIcon /> : null}
              </a>
            ))}

            <Button
              variant="light"
              className="mt-3 w-full"
              onClick={() => setIsOpen(false)}
            >
              Talk to an Expert
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
