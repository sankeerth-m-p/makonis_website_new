import { whyUs } from '../../config/homeContent.js'

function WhyUsSection() {
  return (
    <section className="bg-white py-24">
      <div className="container-default">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={whyUs.main.image}
              alt={whyUs.main.title}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 flex flex-col justify-center p-10 text-white">
              <p className="mb-3 text-sm text-white/70">
                {whyUs.main.eyebrow}
              </p>

              <h1 className="max-w-md text-white">
                {whyUs.main.title}
              </h1>

              <p className="mt-4 max-w-md text-white/80">
                {whyUs.main.description}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center rounded-lg border border-black/10 p-10 text-center">
              <div className="mb-6 text-xl">⌘</div>

              <h3>
                {whyUs.cards[0].title}
              </h3>

              <p className="mt-3 text-black/70">
                {whyUs.cards[0].description}
              </p>

              <p className="mt-6 font-medium">
                Learn →
              </p>
            </div>

            <div className="flex flex-col items-center rounded-lg border border-black/10 p-10 text-center">
              <div className="mb-6 text-xl">⌘</div>

              <h3>
                {whyUs.cards[1].title}
              </h3>

              <p className="mt-3 text-black/70">
                {whyUs.cards[1].description}
              </p>

              <p className="mt-6 font-medium">
                Explore →
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUsSection
