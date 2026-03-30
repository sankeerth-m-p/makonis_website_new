import { whatWeBuild } from '../../config/homeContent.js'

function WhatWeBuild() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-default">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-makonis-blue">
            {whatWeBuild.eyebrow}
          </p>
          <h2 className="mt-4">{whatWeBuild.title}</h2>
          <p className="mt-5"> {whatWeBuild.description}</p>
        </div>
      </div>
    </section>
  )
}

export default WhatWeBuild
