import Button from '../Button.jsx'
import { expertiseBand } from '../../config/homeContent.js'
import FloatUpText from '../floatUpText.jsx'

function ExpertiseSection() {
  return (
    <section className="flex min-h-[80vh] py-5 items-center bg-makonis-navy text-white">
      <div className="container-default w-full">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FloatUpText className="max-w-xl">
            <p className="mb-4 text-sm text-makonis-white/70">
              {expertiseBand.eyebrow}
            </p>

            <h1 className="text-white">
              {expertiseBand.title}
            </h1>

            <p className="mt-6 text-makonis-white/80">
              {expertiseBand.description}
            </p>

            <Button variant="light" className="mt-8">
              {expertiseBand.ctaLabel || 'Explore'}
            </Button>
          </FloatUpText>

          <div className="w-full">
            <div className="relative w-full">
              <div className="absolute inset-0 rounded-xl bg-makonis-purple/10 blur-2xl" />

              {/* ↓ reduced fixed height on mobile */}
              <img
                src={expertiseBand.image}
                alt={expertiseBand.title}
                className="relative h-[260px] lg:h-[420px] w-full animate-floatSlow rounded-lg object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExpertiseSection