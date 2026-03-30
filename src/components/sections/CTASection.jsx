import Button from '../Button.jsx'

function CTASection() {
  return (
    <section className="bg-makonis-navy py-16 text-center text-white md:py-20">
      <div className="container-default">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-white">Ready to build something great?</h2>
          <p className="mt-5 text-makonis-white">
            Let&apos;s shape the next version of your platform, product, or delivery model together.
          </p>
          <Button variant="light" className="mt-8">
            Talk to an Expert
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CTASection
