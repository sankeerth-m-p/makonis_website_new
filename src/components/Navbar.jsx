import { useState, useEffect, useRef } from 'react'
import Button from './Button.jsx'
import { megaMenus, navigation } from '../config/designTokens.js'

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

function MenuImagePlaceholder() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-10 w-10 text-black/20"
      fill="currentColor"
    >
      <path d="M19 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 12H5V7h14v10Zm-8.5-7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-3.75 5.5 2.75-3.75 2 2.75 2.75-3.5L18 17H6.75Z" />
    </svg>
  )
}

function MegaMenuCard({ item, compact = false }) {
  return (
    <a
      href={item.href || '#'}
      className={`group grid gap-4 rounded-2xl border border-black/10 bg-white p-4 shadow-[0_1px_0_rgba(0,0,0,0.02)] transition hover:-translate-y-0.5 hover:border-black/15 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] ${
        compact ? 'grid-cols-[72px_minmax(0,1fr)]' : 'grid-cols-[160px_minmax(0,1fr)]'
      }`}
    >
      <div className="flex items-center justify-center overflow-hidden rounded-xl bg-black/8">
        {item.image ? (
          <img
            src={item.image}
            alt=""
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-black/5">
            <MenuImagePlaceholder />
          </div>
        )}
      </div>

      <div className="min-w-0">
        <p className="text-[18px] font-semibold leading-tight text-black">
          {item.title}
        </p>
        <p className="mt-2 text-[15px] leading-6 text-black/70">
          {item.description}
        </p>
        <span className="mt-3 inline-flex text-[15px] font-medium text-makonis-blue underline decoration-black/20 decoration-1 underline-offset-4 transition group-hover:text-makonis-navy">
          Read more
        </span>
      </div>
    </a>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isHeroTop, setIsHeroTop] = useState(true)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const headerRef = useRef(null)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)
  const forceWhiteChrome = !isHeroTop || Boolean(activeDropdown)
  const chromeClass = 'bg-white/60 backdrop-blur-md'
  const navTextClass = forceWhiteChrome
    ? 'text-black hover:text-makonis-blue'
    : 'text-white hover:text-white/80'
  const headerClass = forceWhiteChrome
    ? `border-b border-black/10 ${chromeClass}`
    : 'border-b border-white/25 bg-transparent'

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY

          // ✅ HERO DETECTION
          const isAtHero = currentScrollY < window.innerHeight * 0.9
          setIsHeroTop(isAtHero)

          // ✅ EXISTING SHOW/HIDE LOGIC
          if (currentScrollY < 10) {
            setIsVisible(true)
          } else if (currentScrollY < lastScrollY.current) {
            setIsVisible(true)
          } else if (currentScrollY > lastScrollY.current + 5) {
            setIsVisible(false)
            setIsOpen(false)
            setActiveDropdown(null)
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

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) {
        setActiveDropdown(null)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null)
        setIsOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const activeMenu = activeDropdown ? megaMenus[activeDropdown] : null
  const logoStyle = {
    filter: forceWhiteChrome ? 'none' : 'brightness(0) invert(1)',
  }
  const menuGridClass =
    activeMenu?.sections.length === 3
      ? 'xl:grid-cols-[180px_repeat(3,minmax(0,1fr))]'
      : 'xl:grid-cols-[180px_minmax(0,1fr)]'

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 z-50 w-full transition-all   duration-300 ease-in-out ${headerClass}`}
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(0%)',
      }}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="container-default flex h-[var(--navbar-height)] items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-10">
          <a href="#" className="shrink-0">
            <img
              src="/makonisLogo.png"
              alt="Makonis"
              className="h-12 w-auto object-contain transition"
              style={logoStyle}
            />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) =>
              item.hasDropdown ? (
                <button
                  key={item.label}
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={activeDropdown === item.menuId}
                  className={`inline-flex items-center gap-1.5 text-[16px] leading-[1.6] font-normal tracking-normal transition ${navTextClass}`}
                  onMouseEnter={() => setActiveDropdown(item.menuId)}
                  onFocus={() => setActiveDropdown(item.menuId)}
                  onClick={() => {
                    setActiveDropdown((current) =>
                      current === item.menuId ? null : item.menuId,
                    )
                  }}
                >
                  <span>{item.label}</span>
                  <ChevronDownIcon />
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className={`inline-flex items-center gap-1.5 text-[16px] leading-[1.6] font-normal tracking-normal transition ${navTextClass}`}
                  onMouseEnter={() => setActiveDropdown(null)}
                >
                  <span>{item.label}</span>
                </a>
              ),
            )}
          </nav>
        </div>

        {/* RIGHT */}
        <div className="hidden items-center gap-5 lg:flex">
          <Button variant="light">Talk to an Expert</Button>

          <button
            type="button"
            className={`transition ${navTextClass}`}
            aria-label="Search"
          >
            <SearchIcon />
          </button>
        </div>

        {/* MOBILE */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            className={`${forceWhiteChrome ? 'text-black' : 'text-white'}`}
            aria-label="Search"
          >
            <SearchIcon />
          </button>

          <button
            type="button"
            className={`rounded-md px-4 py-2 text-sm font-semibold border
              ${
                forceWhiteChrome
                  ? 'text-black border-black/10'
                  : 'text-white border-white/30'
              }
            `}
            onClick={() => {
              setActiveDropdown(null)
              setIsOpen((current) => !current)
            }}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            Menu
          </button>
        </div>
      </div>

      {/* DESKTOP MEGA MENU */}
      {activeMenu ? (
        <div className={`hidden min-h-[40vh] border-t  border-black/10 ${chromeClass} shadow-[0_8px_20px_rgba(0,0,0,0.04)] lg:block`}>
          <div className="container-default py-10">
            <div className={`grid gap-8 ${menuGridClass}`}>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-makonis-blue">
                  {activeMenu.eyebrow}
                </p>
              </div>

              {activeMenu.sections.map((section) => (
                <div key={section.title}>
                  <p className="text-[18px] font-semibold leading-tight text-black">
                    {section.title}
                  </p>
                  <div className="mt-4 flex flex-col gap-3">
                    {section.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="text-[16px] font-medium leading-6 text-black transition hover:text-makonis-blue"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {/* MOBILE MENU */}
      {isOpen ? (
        <div className={`border-t border-black/10 ${chromeClass} lg:hidden`}>
          <nav className="container-default flex flex-col py-4">
            {navigation.map((item) => (
              <div key={item.label} className="border-b border-black/5 py-1 last:border-b-0">
                {item.hasDropdown ? (
                  <>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-3 text-[16px] leading-[1.6] font-normal tracking-normal text-black"
                      onClick={() =>
                        setActiveDropdown((current) =>
                          current === item.menuId ? null : item.menuId,
                        )
                      }
                      aria-expanded={activeDropdown === item.menuId}
                    >
                      <span>{item.label}</span>
                      <ChevronDownIcon />
                    </button>

                    {activeDropdown === item.menuId ? (
                      <div className="pb-4 pl-2">
                        <div className="flex flex-col gap-4">
                          {megaMenus[item.menuId].sections.map((section) => (
                            <div key={section.title}>
                              <p className="text-[14px] font-semibold uppercase tracking-[0.12em] text-black/55">
                                {section.title}
                              </p>
                              <div className="mt-2 flex flex-col gap-2">
                                {section.links.map((link) => (
                                  <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-[15px] leading-6 text-black/75"
                                    onClick={() => {
                                      setIsOpen(false)
                                      setActiveDropdown(null)
                                    }}
                                  >
                                    {link.label}
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="flex items-center justify-between py-3 text-[16px] leading-[1.6] font-normal tracking-normal text-black"
                    onClick={() => {
                      setIsOpen(false)
                      setActiveDropdown(null)
                    }}
                  >
                    <span>{item.label}</span>
                  </a>
                )}
              </div>
            ))}

            <Button
              variant="light"
              className="mt-3 w-full"
              onClick={() => {
                setIsOpen(false)
                setActiveDropdown(null)
              }}
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
