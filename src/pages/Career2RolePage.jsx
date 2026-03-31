import Button from '../components/Button.jsx'
import Footer from '../components/sections/Footer.jsx'
import FloatUpText from '../components/floatUpText.jsx'
import useAppRoute from '../components/routing/useAppRoute.jsx'
import { careersJobs } from './legacySiteContent.js'

function getRoleTemplate(job) {
  const commonSummary =
    'A focused role for a hands-on builder who likes delivering polished products with clear ownership.'

  const templates = {
    'Full Stack Developer': {
      summary:
        'Build across the stack, own features end to end, and help shape a clean delivery rhythm with product and engineering.',
      responsibilities: [
        'Design and ship user-facing product features',
        'Build APIs, services, and reusable UI patterns',
        'Work closely with QA, design, and delivery leads',
      ],
      requirements: [
        'Strong experience with modern frontend and backend stacks',
        'Comfort working in a collaborative delivery environment',
        'Ability to write clear, maintainable production code',
      ],
    },
    'DevOps Engineer': {
      summary:
        'Own cloud reliability, automate delivery pipelines, and keep environments predictable for fast-moving teams.',
      responsibilities: [
        'Maintain CI/CD pipelines and deployment workflows',
        'Improve observability, resilience, and release safety',
        'Partner with developers to remove delivery bottlenecks',
      ],
      requirements: [
        'Hands-on experience with cloud and container tooling',
        'Familiarity with release automation and infrastructure as code',
        'A calm, systematic approach to operational issues',
      ],
    },
    'Cloud Architect': {
      summary:
        'Shape cloud foundations, define scalable architecture, and guide teams toward resilient platform decisions.',
      responsibilities: [
        'Set architecture standards across cloud environments',
        'Review scalability, cost, and security tradeoffs',
        'Support implementation with hands-on technical guidance',
      ],
      requirements: [
        'Deep cloud architecture experience',
        'Strong understanding of security and scale considerations',
        'Ability to influence engineering direction effectively',
      ],
    },
    'Business Analyst': {
      summary:
        'Translate business goals into clear delivery requirements and help teams stay aligned on what matters most.',
      responsibilities: [
        'Capture requirements and process flows clearly',
        'Coordinate stakeholders and manage priorities',
        'Turn business needs into delivery-ready documentation',
      ],
      requirements: [
        'Experience turning business goals into technical scope',
        'Strong communication and stakeholder management skills',
        'Comfort working across product and engineering teams',
      ],
    },
    'Data Engineer': {
      summary:
        'Build trustworthy data pipelines and models so analytics and product teams can move with confidence.',
      responsibilities: [
        'Create and maintain ETL/ELT pipelines',
        'Model data for reporting and downstream use',
        'Work with analysts to improve data quality',
      ],
      requirements: [
        'Strong data engineering fundamentals',
        'Experience with SQL, pipelines, and cloud tooling',
        'Attention to data quality and reproducibility',
      ],
    },
    'UI/UX Designer': {
      summary:
        'Design crisp, usable interfaces and help teams turn product ideas into intuitive customer experiences.',
      responsibilities: [
        'Create wireframes, prototypes, and interface systems',
        'Refine flows through feedback and iteration',
        'Collaborate closely with engineering and product',
      ],
      requirements: [
        'Portfolio showing product thinking and visual clarity',
        'Strong understanding of UX flows and design systems',
        'Comfort collaborating with developers and PMs',
      ],
    },
  }

  return templates[job.jobtitle] || {
    summary: commonSummary,
    responsibilities: job.responsibilities.slice(0, 3),
    requirements: [
      'Relevant hands-on experience in a delivery environment',
      'Strong communication and ownership mindset',
      'Comfort working with cross-functional teams',
    ],
  }
}

function Career2RolePage({ jobId }) {
  const { navigate } = useAppRoute()
  const job = careersJobs.find((item) => String(item.jobid) === String(jobId))

  if (!job) {
    return (
      <section className="bg-white py-24 md:py-28">
        <div className="container-default">
          <FloatUpText className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-makonis-blue">
              Role details
            </p>
            <h1 className="mt-4">Role not found</h1>
            <p className="mt-5 text-black/65">
              We could not find that opening. Return to the role list and try another one.
            </p>
            <Button variant="dark" className="mt-8" onClick={() => navigate('/career2')}>
              Back to roles
            </Button>
          </FloatUpText>
        </div>
      </section>
    )
  }

  const template = getRoleTemplate(job)

  return (
    <>
      <section className="relative overflow-hidden bg-makonis-navy text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,160,233,0.20),transparent_32%),linear-gradient(180deg,rgba(0,41,86,0.95),rgba(0,24,54,0.98))]" />

        <div className="container-default relative py-24 md:py-28 lg:py-32">
          <FloatUpText className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
              Role details
            </p>
            <h1 className="mt-4 text-white">{job.jobtitle}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-white/80">
              {template.summary}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-white/80">
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">
                {job.loc}, {job.country}
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">
                {job.mode}
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">
                {job.min} - {job.max} Years
              </span>
            </div>
          </FloatUpText>
        </div>
      </section>

      <section className="bg-white py-24 md:py-28">
        <div className="container-default grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <FloatUpText>
            <div className="rounded-3xl border border-black/10 bg-white p-7 shadow-[0_16px_44px_rgba(0,0,0,0.05)]">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-makonis-blue">
                What you will do
              </p>
              <div className="mt-6 space-y-4">
                {template.responsibilities.map((item) => (
                  <div key={item} className="rounded-2xl border border-black/10 bg-[#f7f9fc] p-4">
                    <p className="text-[15px] leading-7 text-black/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </FloatUpText>

          <FloatUpText>
            <div className="rounded-3xl border border-black/10 bg-white p-7 shadow-[0_16px_44px_rgba(0,0,0,0.05)]">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-makonis-blue">
                What we expect
              </p>
              <div className="mt-6 space-y-4">
                {template.requirements.map((item) => (
                  <div key={item} className="rounded-2xl border border-black/10 bg-[#f7f9fc] p-4">
                    <p className="text-[15px] leading-7 text-black/70">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button variant="dark" onClick={() => navigate('/contact')}>
                  Apply Now
                </Button>
                <Button variant="light" onClick={() => navigate('/career2')}>
                  Back to Roles
                </Button>
              </div>
            </div>
          </FloatUpText>
        </div>
      </section>

      <section className="bg-[#f7f9fc] py-24 md:py-28">
        <div className="container-default">
          <FloatUpText className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-makonis-blue">
              Next step
            </p>
            <h2 className="mt-4">A clear next step for the right people</h2>
            <p className="mt-5 text-black/65">
              If this role feels like a fit, send your details and we will connect you with the
              team.
            </p>
            <Button variant="dark" className="mt-8" onClick={() => navigate('/contact')}>
              Contact Us
            </Button>
          </FloatUpText>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Career2RolePage
