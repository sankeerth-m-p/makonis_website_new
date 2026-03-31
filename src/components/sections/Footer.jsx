function SocialIcon({ label }) {
  return (
    <span className="text-sm font-semibold leading-none text-makonis-white">
      {label}
    </span>
  )
}

const footerColumns = [
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
      { label: 'Blog', href: '/' },
      { label: 'Press', href: '/' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'AI development', href: '/services/ai' },
      { label: 'IoT solutions', href: '/services/iot' },
      { label: 'Data analytics', href: '/services/data' },
      { label: 'System integration', href: '/services/integration' },
      { label: 'Testing services', href: '/services/testing' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'Mako Plus', href: '/platforms/mako-plus' },
      { label: 'Trading Intelligence', href: '/platforms/trading-intelligence' },
      { label: 'Talent Track Pro', href: '/platforms/talent-track-pro' },
    ],
  },
]

const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookie Settings']
const socialLinks = ['f', 'ig', 'x', 'in', 'yt']

function Footer() {
  return (
    <footer className="bg-makonis-navy text-makonis-white">
      <div className="container-default py-12 md:py-14">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1fr_1fr_1.8fr] lg:gap-10">
          <div className="flex justify-center sm:col-span-2 sm:justify-start lg:col-span-1 lg:items-start">
            <a href="/" className="inline-flex items-center justify-center">
              <img
                src="/makonisLogo.png"
                alt="Makonis"
                className="h-16 w-auto brightness-0 invert sm:h-20 lg:h-24"
              />
            </a>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title} className="text-center sm:text-left">
              <p className="text-[15px] font-medium text-makonis-white">{column.title}</p>

              <ul className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-makonis-white/90 transition hover:text-makonis-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-center text-[15px] font-medium text-makonis-white sm:text-left">News</p>
            <p className="mt-4 text-center text-sm leading-6 text-makonis-white/90 sm:text-left sm:mt-5">
              Stay informed with the latest updates from Makonis on technology, talent, and innovation in enterprise solutions.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-start">
              <div className="min-w-0 flex-1 border-b border-makonis-white/25 pb-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-transparent text-center text-sm text-makonis-white placeholder:text-makonis-white/55 focus:outline-none sm:text-left"
                />
              </div>
              <button
                type="button"
                className="rounded-md border border-makonis-white/25 px-4 py-2 text-sm text-makonis-white transition hover:border-makonis-white sm:shrink-0"
              >
                Subscribe
              </button>
            </div>

            <p className="mx-auto mt-4 max-w-[40ch] text-center text-sm leading-6 text-makonis-white/65 sm:mx-0 sm:text-left">
              By subscribing you agree to our Privacy Policy and consent to receive updates from Makonis.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-makonis-white/18 pt-6">
          <div className="flex flex-col gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
              <p className="text-[15px] text-makonis-white/90">
                &copy; 2024 Makonis. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 lg:justify-start">
                {legalLinks.map((link) => (
                  <a
                    key={link}
                    href="/"
                    className="text-[15px] text-makonis-white/90 underline-offset-4 transition hover:text-makonis-white hover:underline"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 lg:justify-start">
              {socialLinks.map((label) => (
                <a
                  key={label}
                  href="/"
                  className="inline-flex items-center justify-center text-makonis-white transition hover:opacity-70"
                >
                  <SocialIcon label={label} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
