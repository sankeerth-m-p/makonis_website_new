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
    links: ['About us', 'Careers', 'Contact', 'Blog', 'Press'],
  },
  {
    title: 'Services',
    links: ['AI development', 'IoT solutions', 'Data analytics', 'System integration', 'Talent solutions'],
  },
  {
    title: 'Products',
    links: ['Mako Plus', 'Trading Intelligence', 'Talent Track Pro', 'Semiconductors', 'RTL design'],
  },
]

const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookie Settings']
const socialLinks = ['f', 'ig', 'x', 'in', 'yt']

function Footer() {
  return (
    <footer className="bg-makonis-navy text-makonis-white">
      <div className="container-default py-12  md:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr_1fr_1fr_1.8fr]">
          <div className="flex items-start">
            <a href="#" className="inline-flex items-center">
              <img
                src="/makonisLogo.png"
                alt="Makonis"
                className="h-24 w-auto brightness-0 invert"
              />
            </a>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="text-[15px] font-medium text-makonis-white">{column.title}</p>

              <ul className="mt-5 space-y-4">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-makonis-white/90 transition hover:text-makonis-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-[15px] font-medium text-makonis-white">News</p>
            <p className="mt-5  text-sm leading-6 text-makonis-white/90">
              Stay informed with the latest updates from Makonis on technology, talent, and innovation in enterprise solutions.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-start">
              <div className="min-w-0 flex-1 border-b border-makonis-white/25 pb-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-transparent text-sm text-makonis-white placeholder:text-makonis-white/55 focus:outline-none"
                />
              </div>
              <button
                type="button"
                className="rounded-md border border-makonis-white/25 px-4 py-2 text-sm text-makonis-white transition hover:border-makonis-white"
              >
                Subscribe
              </button>
            </div>

            <p className="mt-4 max-w-[40ch] text-sm leading-6 text-makonis-white/65">
              By subscribing you agree to our Privacy Policy and consent to receive updates from Makonis.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-makonis-white/18 pt-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6">
              <p className="text-[15px] text-makonis-white/90">
                &copy; 2024 Makonis. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {legalLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-[15px] text-makonis-white/90 underline-offset-4 transition hover:text-makonis-white hover:underline"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((label) => (
                <a
                  key={label}
                  href="#"
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
