import Button from '../components/Button.jsx'
import Footer from '../components/sections/Footer.jsx'
import { useContactModal } from '../components/contact/ContactModalContext.js'
import useAppRoute from '../components/routing/useAppRoute.jsx'
import { servicePageContent } from '../config/homeContent.js'

function ServicePage({ serviceKey }) {
  const { openContactOptions } = useContactModal()
  const { navigate } = useAppRoute()
  const content = servicePageContent[serviceKey]

  if (!content) {
    return null
  }

  return (
    <>
      <section className="bg-white pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="container-default grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-makonis-blue">
              {content.eyebrow}
            </p>

            <h1 className="mt-4 max-w-3xl">
              {content.title}
            </h1>

            <p className="mt-5 max-w-2xl text-black/70">
              {content.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="light" onClick={openContactOptions}>
                Talk to an Expert
              </Button>

              <Button
                variant="light"
                onClick={() => navigate('/')}
              >
                Back home
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-md border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <img
              src={content.image}
              alt={content.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fc] py-16 md:py-20">
        <div className="container-default">
          <div className="grid gap-6 md:grid-cols-3">
            {content.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-md border border-black/10 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-makonis-blue">
                  Capability
                </p>
                <p className="mt-4 text-[18px] leading-7 text-black/75">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default ServicePage
