import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedCard from '../AnimatedCard.jsx'
import { whyUs } from '../../config/homeContent.js'

gsap.registerPlugin(ScrollTrigger)

function CompassIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}

const lerp = (a, b, t) => a + (b - a) * t
const clamp01 = (v) => Math.max(0, Math.min(1, v))

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - ((-2 * t + 2) ** 3) / 2
}

const FINAL_MAX_W = 1200

function applyProgress(
  p,
  container,
  hero,
  heroImg,
  heroOverlay,
  heroText,
  heroEyebrow,
  heroTitle,
  heroDesc,
  cards,
) {
  // Animation completes at p=0.5 — the second half is dwell time at stage 2
  const anim = clamp01(p * 2)

  const layoutRaw = clamp01(anim / 0.55)
  const layout = easeInOutCubic(layoutRaw)
  const cardsRaw = clamp01((anim - 0.15) / 0.5)
  const cardsP = easeInOutCubic(cardsRaw)
  const vPad = lerp(0, 24, layout)
  const textT = easeInOutCubic(clamp01(anim / 0.75))

  container.style.padding = '0px'
  container.style.gap = `${lerp(0, 16, layout)}px`

  const vw = window.innerWidth
  const mw = lerp(vw, Math.min(FINAL_MAX_W, vw), layout)
  container.style.maxWidth = `${mw}px`

  hero.style.flex = `${lerp(100, 63, layout)} 0 0%`

  if (heroImg) {
    heroImg.style.top = `${vPad}px`
    heroImg.style.bottom = `${vPad}px`
    heroImg.style.borderRadius = `${lerp(0, 6, layout)}px`
  }

  if (heroOverlay) {
    heroOverlay.style.top = `${vPad}px`
    heroOverlay.style.bottom = `${vPad}px`
    heroOverlay.style.borderRadius = `${lerp(0, 6, layout)}px`
  }

  if (heroText) {
    heroText.style.padding = `${lerp(40, 28, textT)}px`
    heroText.style.alignItems = 'center'
    heroText.style.justifyContent = 'center'
    heroText.style.textAlign = 'center'
    heroText.style.transform = 'translateY(0px)'
  }

  if (heroEyebrow) {
    heroEyebrow.style.fontSize = `${lerp(12, 12, textT)}px`
    heroEyebrow.style.letterSpacing = `${lerp(0.18, 0.09, textT)}em`
    heroEyebrow.style.marginBottom = `${lerp(16, 10, textT)}px`
    heroEyebrow.style.opacity = `${lerp(0.7, 0.8, textT)}`
  }

  if (heroTitle) {
    heroTitle.style.fontSize = `${lerp(56, 32, textT)}px`
    heroTitle.style.lineHeight = `${lerp(1.08, 1.3, textT)}`
    heroTitle.style.letterSpacing = `${lerp(-0.01, -0.01, textT)}em`
  }

  if (heroDesc) {
    heroDesc.style.fontSize = `${lerp(20, 16, textT)}px`
    heroDesc.style.lineHeight = `${lerp(1.55, 1.6, textT)}`
    heroDesc.style.maxWidth = `${lerp(320, 280, textT)}px`
    heroDesc.style.marginTop = `${lerp(20, 16, textT)}px`
    heroDesc.style.opacity = `${lerp(0.9, 0.75, textT)}`
  }

  cards.style.flex = `${lerp(0, 37, layout)} 0 0%`
  cards.style.paddingTop = `${vPad}px`
  cards.style.paddingBottom = `${vPad}px`
  cards.style.opacity = `${cardsP}`
  cards.style.transform = 'none'
}

function snap(
  snapTo,
  state,
  container,
  hero,
  heroImg,
  heroOverlay,
  heroText,
  heroEyebrow,
  heroTitle,
  heroDesc,
  cards,
  onTween,
) {
  const tw = gsap.to(state, {
    progress: snapTo,
    duration: 0.55,
    ease: 'power2.inOut',
    overwrite: true,
    onUpdate() {
      applyProgress(
        state.progress,
        container,
        hero,
        heroImg,
        heroOverlay,
        heroText,
        heroEyebrow,
        heroTitle,
        heroDesc,
        cards,
      )
    },
  })

  onTween(tw)
}

// ─── Mobile-only static layout ───────────────────────────────────────────────

function WhyUsMobile() {
  return (
    <section className="lg:hidden bg-makonis-white">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[360px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${whyUs.main.image}')` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,29,82,0.82)_30%,rgba(10,58,128,0.18)_100%)]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pb-8 pt-6 text-center text-white">
          <p className="mb-3 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-white/70">
            {whyUs.main.eyebrow}
          </p>
          <h2
            className="max-w-[14ch] whitespace-pre-line text-white"
            style={{ fontSize: '30px', lineHeight: 1.2 }}
          >
            {whyUs.main.title}
          </h2>
          <p
            className="mt-4 max-w-[28ch] font-light text-white/75"
            style={{ fontSize: '15px', lineHeight: 1.6 }}
          >
            {whyUs.main.description}
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-3 p-4">
        {whyUs.cards.map((card, index) => (
          <div
            key={card.title}
            className="flex flex-col rounded-lg border border-black/10 bg-white p-5"
          >
            <div className="mb-3 flex size-9 items-center justify-center rounded-full border border-black/10 text-black/80">
              <CompassIcon />
            </div>
            <h3 className="text-[18px] leading-[1.2]">{card.title}</h3>
            <p className="mt-2 text-[13px] leading-[1.6] text-black/70">
              {card.description}
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium">
              <span>{card.ctaLabel || (index === 0 ? 'Learn' : 'Explore')}</span>
              <ArrowIcon />
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Desktop scroll-animated layout ──────────────────────────────────────────

function WhyUsScrollSection() {
  const sectionRef = useRef(null)
  const containerRef = useRef(null)
  const heroRef = useRef(null)
  const heroImgRef = useRef(null)
  const heroOverlayRef = useRef(null)
  const heroTextRef = useRef(null)
  const heroEyebrowRef = useRef(null)
  const heroTitleRef = useRef(null)
  const heroDescRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const container = containerRef.current
    const hero = heroRef.current
    const heroImg = heroImgRef.current
    const heroOverlay = heroOverlayRef.current
    const heroText = heroTextRef.current
    const heroEyebrow = heroEyebrowRef.current
    const heroTitle = heroTitleRef.current
    const heroDesc = heroDescRef.current
    const cards = cardsRef.current

    if (
      !section ||
      !container ||
      !hero ||
      !heroImg ||
      !heroOverlay ||
      !heroText ||
      !heroEyebrow ||
      !heroTitle ||
      !heroDesc ||
      !cards
    ) {
      return undefined
    }

    applyProgress(
      0,
      container,
      hero,
      heroImg,
      heroOverlay,
      heroText,
      heroEyebrow,
      heroTitle,
      heroDesc,
      cards,
    )

    const ctx = gsap.context(() => {
      const state = { progress: 0 }
      let tweenRef = null

      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom top',

        // Stage 1 = p:0  →  Stage 2 = p:0.5
        // p:0.5 → 1.0 is pure dwell time: layout is frozen at stage 2
        // so user can read it before the section unpins
        snap: {
          snapTo: [0, 0.5],
          duration: 0.55,
          ease: 'power2.inOut',
          delay: 0.05,
        },

        onUpdate(self) {
          if (tweenRef) tweenRef.kill()
          applyProgress(
            self.progress,
            container,
            hero,
            heroImg,
            heroOverlay,
            heroText,
            heroEyebrow,
            heroTitle,
            heroDesc,
            cards,
          )
          state.progress = self.progress
        },
        onLeave() {
          // User scrolled past the whole section — visually already at stage 2
          snap(
            1,
            state,
            container,
            hero,
            heroImg,
            heroOverlay,
            heroText,
            heroEyebrow,
            heroTitle,
            heroDesc,
            cards,
            (tw) => { tweenRef = tw },
          )
        },
        onEnterBack() {
          // Re-entering from below — restore stage 2
          snap(
            0.5,
            state,
            container,
            hero,
            heroImg,
            heroOverlay,
            heroText,
            heroEyebrow,
            heroTitle,
            heroDesc,
            cards,
            (tw) => { tweenRef = tw },
          )
        },
        onLeaveBack() {
          // Scrolled back above section — restore stage 1
          snap(
            0,
            state,
            container,
            hero,
            heroImg,
            heroOverlay,
            heroText,
            heroEyebrow,
            heroTitle,
            heroDesc,
            cards,
            (tw) => { tweenRef = tw },
          )
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  const stickyH = 'calc(100vh - var(--navbar-height))'

  return (
    <section ref={sectionRef} className="relative hidden h-[280vh] bg-makonis-white lg:block">
      <div
        className="sticky top-[var(--navbar-height)] flex items-center justify-center overflow-hidden bg-makonis-white"
        style={{ height: stickyH }}
      >
        <div
          ref={containerRef}
          className="flex w-full items-stretch"
          style={{ maxWidth: '100%', height: '100%' }}
        >
          <div
            ref={heroRef}
            className="relative min-w-0 overflow-hidden"
            style={{ flex: '100 0 0%' }}
          >
            <div
              ref={heroImgRef}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${whyUs.main.image}')`,
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}
            />
            <div
              ref={heroOverlayRef}
              className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,29,82,0.78)_30%,rgba(10,58,128,0.18)_100%)]"
              style={{ top: 0, bottom: 0, left: 0, right: 0 }}
            />
            <div
              ref={heroTextRef}
              className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center text-white"
              style={{ transform: 'translateY(0px)' }}
            >
              <p
                ref={heroEyebrowRef}
                className="mb-4 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-white/70"
              >
                {whyUs.main.eyebrow}
              </p>
              <h2
                ref={heroTitleRef}
                className="max-w-[14ch] whitespace-pre-line text-white"
                style={{ fontSize: '56px', lineHeight: 1.08 }}
              >
                {whyUs.main.title}
              </h2>
              <p
                ref={heroDescRef}
                className="mt-5 max-w-[30ch] font-light text-white/75"
                style={{ fontSize: '20px', lineHeight: 1.55 }}
              >
                {whyUs.main.description}
              </p>
            </div>
          </div>

          <div
            ref={cardsRef}
            className="hidden min-w-0 flex-col gap-4 overflow-hidden lg:flex"
            style={{ flex: '0 0 0%', opacity: 0, transform: 'none' }}
          >
            {whyUs.cards.map((card, index) => (
              <AnimatedCard
                key={card.title}
                entry={false}
                className="flex flex-1 flex-col overflow-hidden rounded-lg border border-black/10 bg-white"
              >
                <div className="flex h-full flex-col items-start justify-start p-6 md:p-7">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-full border border-black/10 text-black/80">
                    <CompassIcon />
                  </div>
                  <h3 className="text-[22px] leading-[1.15] md:text-[24px]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-6 text-black/70 md:text-[15px]">
                    {card.description}
                  </p>
                  <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
                    <span>{card.ctaLabel || (index === 0 ? 'Learn' : 'Explore')}</span>
                    <ArrowIcon />
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Export: mobile + desktop together ───────────────────────────────────────

export default function WhyUsSection() {
  return (
    <>
      <WhyUsMobile />
      <WhyUsScrollSection />
    </>
  )
}