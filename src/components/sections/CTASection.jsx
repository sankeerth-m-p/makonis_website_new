import Button from '../Button.jsx'
import FloatUpText from '../floatUpText.jsx'

const ctaImage =
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80'

function CTASection() {
  return (
    <section className="bg-makonis-navy text-white">
      <FloatUpText className="container-default py-16 text-center md:py-24 lg:py-28">
        <div className="mx-auto max-w-2xl">
          <p className="text-sm text-white/60 mb-3">
    Ready to talk?
  </p>

  <h2>
    Ready to build something great?
  </h2>

  <p className="mt-4 text-white/60">
    Let&apos;s talk about what&apos;s possible for your enterprise.
  </p>

  <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
    <Button variant="light" className="min-w-[190px]">
      Talk to an Expert
    </Button>
    <Button variant="outline" className="min-w-[120px]">
      Contact
    </Button>
          </div>
        </div>
      </FloatUpText>

      <div className="relative overflow-hidden">
        <img
          src={ctaImage}
          alt="A team member working on a laptop in a modern workspace"
          className="h-[280px] w-full object-cover object-center md:h-[420px] lg:h-[560px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-makonis-navy/20 via-transparent to-transparent" />
      </div>
    </section>
  )
}

export default CTASection
