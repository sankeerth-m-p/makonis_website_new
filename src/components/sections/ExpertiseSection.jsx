import Button from '../Button.jsx'
import { expertiseBand } from '../../config/homeContent.js'

function ExpertiseSection() {
  return (
  <section className="bg-makonis-navy text-white min-h-[80vh] flex items-center">
  <div className="container-default w-full">

    <div className="grid items-center gap-12 lg:grid-cols-2">

      {/* LEFT */}
      <div className="max-w-xl">
        <p className="text-sm text-makonis-white/70 mb-4">
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
      </div>

      {/* RIGHT */}
      <div className="w-full">
        <img
          src={expertiseBand.image}
          alt={expertiseBand.title}
          className="w-full h-[420px] object-cover rounded-lg"
        />
      </div>

    </div>

  </div>
</section>
  )
}

export default ExpertiseSection