import AnimatedCard from '../AnimatedCard.jsx'
import { platformCards, platformShowcase } from '../../config/homeContent.js'
import FloatUpText from '../floatUpText.jsx'

function PlatformsSection() {
  const [card1, card2, card3] = platformCards

  return (
    <section className="bg-white py-24">
      <div className="container-default">

        {/* HEADER */}
        <FloatUpText className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm text-black/60 mb-3">
            {platformShowcase.eyebrow}
          </p>

          <h1>
            {platformShowcase.title}
          </h1>

          <p className="mt-4 text-black/60">
            {platformShowcase.description}
          </p>
        </FloatUpText>

        <div className="grid max-w-6xl mx-auto grid-cols-4 gap-6">
          <AnimatedCard
            delay={0}
            className="col-span-1 flex flex-col overflow-hidden rounded-lg border border-black/10 bg-white"
          >
            <img src={card1.image} alt={card1.title} className="h-48 w-full object-cover" />

            <div className="p-6">
              <p className="mb-2 text-sm text-black/60">Human Resource</p>
              <h3>{card1.title}</h3>
              <p className="mt-3 text-black/70">{card1.description}</p>
              <p className="mt-4 font-medium">Learn -&gt;</p>
            </div>
          </AnimatedCard>

          <AnimatedCard
            delay={120}
            className="col-span-1 flex flex-col overflow-hidden rounded-lg border border-black/10 bg-white"
          >
            <img src={card2.image} alt={card2.title} className="h-48 w-full object-cover" />

            <div className="p-6">
              <p className="mb-2 text-sm text-black/60">Finance</p>
              <h3>{card2.title}</h3>
              <p className="mt-3 text-black/70">{card2.description}</p>
              <p className="mt-4 font-medium">Learn -&gt;</p>
            </div>
          </AnimatedCard>

          <AnimatedCard
            delay={240}
            className="col-span-2 grid grid-cols-2 overflow-hidden rounded-lg border border-black/10 bg-white"
          >
            <img src={card3.image} alt={card3.title} className="h-full w-full object-cover" />

            <div className="p-8 flex flex-col justify-center">
              <p className="mb-2 text-sm text-black/60">Healthcare</p>
              <h2>{card3.title}</h2>
              <p className="mt-4 text-black/70">{card3.description}</p>
              <p className="mt-6 font-medium">Learn -&gt;</p>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  )
}

export default PlatformsSection
