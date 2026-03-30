import { serviceCards, whatWeBuild } from '../../config/homeContent.js'

function ServiceIcon({ label }) {
  return (
    <div className="mb-4 text-black/80 text-sm">
      {label}
    </div>
  )
}

function ServicesGrid() {
  const { ai, testing, integration, iot, data } = serviceCards

  return (
    <section className="bg-white py-24">
      <div className="container-default">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm text-black/60 mb-3">
            {whatWeBuild.eyebrow}
          </p>

          <h1>
            {whatWeBuild.title}
          </h1>

          <p className="mt-4 text-black/60">
            {whatWeBuild.description}
          </p>
        </div>

        {/* GRID */}
        <div className="grid max-w-5xl mx-auto grid-cols-4 grid-rows-10 gap-6">

          {/* AI BIG */}
          <div className="col-span-2 row-span-7 rounded-lg border border-black/10 overflow-hidden flex flex-col">
            <div className="p-8">
              <ServiceIcon label="AI" />

              <h2>{ai.title}</h2>

              <p className="mt-4 text-black/70">
                {ai.description}
              </p>

              <p className="mt-6 font-medium">
                Learn →
              </p>
            </div>

            <div className="mt-auto">
              <img
                src={ai.image}
                alt={ai.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* TESTING */}
          <div className="col-span-2 row-span-4 rounded-lg border border-black/10 overflow-hidden grid grid-cols-2">
            <img
              src={testing.image}
              alt={testing.title}
              className="w-full h-full object-cover"
            />

            <div className="p-6 flex flex-col justify-center">
              <ServiceIcon label="Testing" />

              <h3 className="mt-2">
                {testing.title}
              </h3>

              <p className="mt-3 text-black/70">
                {testing.description}
              </p>

              <p className="mt-4 font-medium">
                Learn →
              </p>
            </div>
          </div>

          {/* INTEGRATION (MERGED) */}
          <div className="col-span-2 row-span-6 rounded-lg border border-black/10 overflow-hidden flex flex-col">
            <div className="p-8">
              <ServiceIcon label="Integration" />

              <h2>{integration.title}</h2>

              <p className="mt-4 text-black/70">
                {integration.description}
              </p>

              <p className="mt-6 font-medium">
                Explore →
              </p>
            </div>

            <div className="mt-auto">
              <img
                src={integration.image}
                alt={integration.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* IoT */}
          <div className="col-span-1 row-span-3 rounded-lg border border-black/10 p-6">
            <ServiceIcon label="IoT" />

            <h3>{iot.title}</h3>

            <p className="mt-3 text-black/70">
              {iot.description}
            </p>

            <p className="mt-4 font-medium">
              Learn →
            </p>
          </div>

          {/* Data */}
          <div className="col-span-1 row-span-3 rounded-lg border border-black/10 p-6">
            <ServiceIcon label="Data" />

            <h3>{data.title}</h3>

            <p className="mt-3 text-black/70">
              {data.description}
            </p>

            <p className="mt-4 font-medium">
              Learn →
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ServicesGrid