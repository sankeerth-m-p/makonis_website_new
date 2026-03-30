import { platformCards, platformShowcase } from '../../config/homeContent.js'

function PlatformsSection() {
  const [card1, card2, card3] = platformCards

  return (
    <section className="bg-white py-24">
      <div className="container-default">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm text-black/60 mb-3">
            {platformShowcase.eyebrow}
          </p>

          <h1>
            {platformShowcase.title}
          </h1>

          <p className="mt-4 text-black/60">
            {platformShowcase.description}
          </p>
        </div>

        <div className="grid max-w-6xl mx-auto grid-cols-4 gap-6">

  {/* CARD 1 */}
  <div className="col-span-1 rounded-lg border border-black/10 overflow-hidden flex flex-col">
    <img src={card1.image} className="w-full h-48 object-cover" />

    <div className="p-6">
      <p className="text-sm text-black/60 mb-2">Human Resource</p>
      <h3>{card1.title}</h3>
      <p className="mt-3 text-black/70">{card1.description}</p>
      <p className="mt-4 font-medium">Learn →</p>
    </div>
  </div>

  {/* CARD 2 */}
  <div className="col-span-1 rounded-lg border border-black/10 overflow-hidden flex flex-col">
    <img src={card2.image} className="w-full h-48 object-cover" />

    <div className="p-6">
      <p className="text-sm text-black/60 mb-2">Finance</p>
      <h3>{card2.title}</h3>
      <p className="mt-3 text-black/70">{card2.description}</p>
      <p className="mt-4 font-medium">Learn →</p>
    </div>
  </div>

  {/* BIG CARD */}
  <div className="col-span-2 rounded-lg border border-black/10 overflow-hidden grid grid-cols-2">

    {/* IMAGE */}
    <img src={card3.image} className="w-full h-full object-cover" />

    {/* CONTENT */}
    <div className="p-8 flex flex-col justify-center">
      <p className="text-sm text-black/60 mb-2">Healthcare</p>

      <h2>{card3.title}</h2>

      <p className="mt-4 text-black/70">
        {card3.description}
      </p>

      <p className="mt-6 font-medium">Learn →</p>
    </div>

  </div>

</div>
      </div>
    </section>
  )
}

export default PlatformsSection