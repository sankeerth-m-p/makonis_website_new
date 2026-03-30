import { trustedClients } from '../../config/homeContent.js'

const marqueeClients = [...trustedClients, ...trustedClients]

function TrustedClientsSection() {
  return (
    <section className="overflow-hidden bg-makonis-navy py-16">
      <div className="container-default flex items-center gap-12">

        {/* LEFT */}
        <div className="shrink-0 max-w-[220px]">
          <p className="text-makonis-white/90">
            Trusted by industry-leading enterprises
          </p>
        </div>

        {/* RIGHT */}
        <div className="relative min-w-0 flex-1 overflow-hidden">

          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-makonis-navy to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-makonis-navy to-transparent" />

          <div className="flex w-max animate-client-scroll gap-4 hover:[animation-play-state:paused]">
            {marqueeClients.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="
                  flex items-center justify-center
                  shrink-0
                  px-5 py-3
                  rounded-md   /* ✅ button radius */
                  border border-black/10
                  bg-white
                  transition
                  hover:border-makonis-blue
                "
              >
                <img
                  src={src}
                  alt={`Client ${index + 1}`}
                  className="h-8 w-auto object-contain opacity-100 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default TrustedClientsSection