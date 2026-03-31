import { useState } from 'react'
import { expertiseBand } from '../../config/homeContent.js'
import FloatUpText from '../floatUpText.jsx'

const services = [
  {
    title: 'RTL Design & Development',
    description: 'Architecture definition, micro-architecture, and high-performance RTL coding.',
    href: '/services/rtl-design',
    icon: '/service_icons/rtl-design.png',
  },
  {
    title: 'Physical Design',
    description: 'GDSII delivery including floorplanning, placement, CTS, and routing for advanced nodes.',
    href: '/services/physical-design',
    icon: '/service_icons/physical-design.png',
  },
  {
    title: 'FPGA Design',
    description: 'Custom FPGA solutions, hardware acceleration, and IP core development.',
    href: '/services/fpga-design',
    icon: '/service_icons/fpga-design.png',
  },
  {
    title: 'Design Consulting',
    description: 'Strategic consulting to optimize design flows, methodology, and PPA targets.',
    href: '/services/consulting',
    icon: '/service_icons/design-consulting.png',
  },
  {
    title: 'Design Verification',
    description: 'Functional and physical verification using UVM for first-pass silicon success.',
    href: '/services/verification',
    icon: '/service_icons/design-verification.png',
  },
  {
    title: 'DFT',
    description: 'Scan insertion, ATPG, and MBIST strategies to maximise test coverage and yield.',
    href: '/services/dft',
    icon: '/service_icons/dft.png',
  },
  {
    title: 'Post-Silicon Validation',
    description: 'Silicon bring-up, characterisation, and debugging under real-world conditions.',
    href: '/services/post-silicon',
    icon: '/service_icons/post-silicon.png',
  },
]

function ExpertiseSection() {
  const [showServices, setShowServices] = useState(false)
  const [showMobileServices, setShowMobileServices] = useState(false)

  return (
    <section className="bg-makonis-navy py-5 text-white">
      <div className="container-default md:hidden">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm">
          <FloatUpText>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
              {expertiseBand.eyebrow}
            </p>

            <h1 className="max-w-[11ch] text-[34px] leading-[1.08] text-white">
              {expertiseBand.title}
            </h1>

            <p className="mt-4 max-w-md text-[15px] text-white/78">
              {expertiseBand.description}
            </p>
          </FloatUpText>

          <button
            onClick={() => setShowMobileServices((current) => !current)}
            aria-expanded={showMobileServices}
            className="mt-5 inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 py-2.5 text-[14px] font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/20"
          >
            {showMobileServices ? 'Hide capabilities' : (expertiseBand.ctaLabel || 'Our Core Capabilities')}
            <span className="text-makonis-cyan">{showMobileServices ? '−' : '→'}</span>
          </button>

          <div
            className={`grid overflow-hidden transition-all duration-300 ease-out ${
              showMobileServices ? 'mt-5 grid-rows-[1fr] opacity-100' : 'mt-0 grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <div className="space-y-3">
                {services.map((service) => (
                  <a
                    key={service.href}
                    href={service.href}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/10 p-4 transition-colors duration-200 hover:bg-black/15"
                  >
                    <div className="h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-white/10">
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-[16px] leading-tight text-white">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-[13px] leading-5 text-white/70">
                        {service.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden overflow-x-hidden md:flex">
        <div
          className="flex w-full items-stretch transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]"
          style={{ transform: showServices ? 'translateX(-100%)' : 'translateX(0)' }}
        >
          {/* Panel 1: Hero content */}
          <div className="min-w-full">
            <div className="container-default flex min-h-[calc(100vh-var(--navbar-height))] w-full items-center py-10 md:py-0">
              <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-12">
                <FloatUpText className="max-w-2xl">
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60 md:text-[12px]">
                    {expertiseBand.eyebrow}
                  </p>

                  <h1 className="max-w-[12ch] text-white">
                    {expertiseBand.title}
                  </h1>

                  <p className="mt-5 max-w-xl text-white/80 md:mt-6">
                    {expertiseBand.description}
                  </p>

                  <button
                    onClick={() => setShowServices(true)}
                    className="mt-7 inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-5 py-2.5 text-[15px] font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:gap-3 hover:border-white/30 hover:bg-white/20 md:mt-8"
                  >
                    {expertiseBand.ctaLabel || 'Our Core Capabilities'}
                    <span className="text-makonis-cyan">&rarr;</span>
                  </button>
                </FloatUpText>

                <div className="w-full">
                  <div className="relative w-full">
                    <div className="absolute inset-0 rounded-xl bg-makonis-purple/10 blur-2xl" />
                    <img
                      src={expertiseBand.image}
                      alt={expertiseBand.title}
                      className="relative h-[220px] w-full animate-floatSlow rounded-lg object-cover transition-transform duration-700 hover:scale-[1.02] sm:h-[260px] lg:h-[420px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Panel 2: Services grid */}
          <div className="min-w-full">
            <div className="container-default flex min-h-[calc(100vh-var(--navbar-height))] w-full items-center py-10 md:py-12">
              <div className="w-full">
                <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div className="max-w-2xl">
                    <p className="mb-3 font-semibold uppercase tracking-[0.18em] text-white/60">
                      Our Core Capabilities
                    </p>
                  </div>
                  <button
                    onClick={() => setShowServices(false)}
                    className="inline-flex items-center gap-2 self-start rounded-md border border-white/20 px-4 py-2 text-[15px] font-semibold text-white/70 transition-all duration-200 hover:border-white/30 hover:text-white"
                  >
                    &larr; Back
                  </button>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {services.map((service, i) => (
                    <a
                      key={service.href}
                      href={service.href}
                      className="group relative flex flex-col gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-makonis-cyan/40 hover:bg-white/10 md:p-4.5"
                      style={{ animationDelay: `${i * 60}ms` }}
                    >
                      <div className="h-12 w-12 overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-110">
                        <img
                          src={service.icon}
                          alt={service.title}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="mb-1.5 text-[18px] leading-[1.15] text-white md:text-[20px]">
                          {service.title}
                        </h3>
                        <p className="text-[13px] leading-5 text-white/68">
                          {service.description}
                        </p>
                      </div>

                      <span className="flex items-center gap-1 text-[13px] font-semibold text-makonis-cyan/70 transition-all duration-200 group-hover:gap-2 group-hover:text-makonis-cyan">
                        Explore &rarr;
                      </span>

                      <div className="absolute right-3 top-3 h-1 w-1 rounded-full bg-makonis-cyan/0 transition-colors duration-300 group-hover:bg-makonis-cyan/60" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExpertiseSection
