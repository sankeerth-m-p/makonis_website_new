import Button from '../components/Button.jsx'
import Footer from '../components/sections/Footer.jsx'
import useAppRoute from '../components/routing/useAppRoute.jsx'
import { talentSolutionsPageContent } from '../config/homeContent.js'

function TalentSolutionsPage() {
  const { navigate } = useAppRoute()

  return (
    <>
      <section className="bg-white pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="container-default mb-8 flex justify-start">
          <Button variant="light" onClick={() => navigate('/')}>
            Back home
          </Button>
        </div>

        <div className="container-default grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-makonis-blue">
              {talentSolutionsPageContent.eyebrow}
            </p>

            <h1 className="mt-4 max-w-3xl">
              {talentSolutionsPageContent.title}
            </h1>

            <p className="mt-5 max-w-2xl text-black/70">
              {talentSolutionsPageContent.description}
            </p>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <img
              src={talentSolutionsPageContent.image}
              alt={talentSolutionsPageContent.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fc] py-16 md:py-20">
        <div className="container-default">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-makonis-blue">
              Talent services
            </p>
            <h2 className="mt-4">Every hiring model, clearly organized</h2>
            <p className="mt-5 text-black/70">
              Use the links below to jump directly to the talent model that matches your next need.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {talentSolutionsPageContent.offerings.map((offering) => (
              <article
                key={offering.id}
                id={offering.id}
                className="scroll-mt-28 rounded-3xl border border-black/10 bg-white p-6 shadow-[0_12px_34px_rgba(0,0,0,0.04)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-makonis-blue">
                  Talent Solutions
                </p>
                <h3 className="mt-4 text-[24px] leading-[1.15] text-makonis-navy">
                  {offering.title}
                </h3>
                <p className="mt-3 text-[17px] leading-7 text-black/70">
                  {offering.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-makonis-navy py-16 text-white md:py-20">
        <div className="container-default flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
              Next step
            </p>
            <h2 className="mt-4 text-white">
              Talk to us about the hiring model that fits your team.
            </h2>
          </div>

          <Button variant="light" onClick={() => navigate('/contact2')}>
            Talk to an Expert
          </Button>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default TalentSolutionsPage
