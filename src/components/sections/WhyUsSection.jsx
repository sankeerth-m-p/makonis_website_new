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

          <div className="grid gap-4 xl:grid-cols-3">
            {whyUs.cards.map((card, index) => (
              <div
                key={card.title}
                className="flex h-full flex-col items-start rounded-lg border border-black/10 p-6 text-left md:p-7"
              >
                <div className="mb-4 flex size-10 items-center justify-center rounded-full border border-black/10 text-xs font-semibold text-black/70">
                  0{index + 1}
                </div>

                <h3 className="text-[22px] leading-[1.15] md:text-[24px]">
                  {card.title}
                </h3>

                <p className="mt-3 text-[14px] leading-6 text-black/70 md:text-[15px]">
                  {card.description}
                </p>

                <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
                  <span>{card.ctaLabel}</span>
                  <span aria-hidden="true">→</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUsSection
