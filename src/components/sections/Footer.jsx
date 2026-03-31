import { useState } from 'react'
import {
  companyMenuLinks,
  platformMenuLinks,
  serviceMenuSections,
} from '../../config/homeContent.js'

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
    links: companyMenuLinks,
  },
  {
    title: serviceMenuSections[0].title,
    links: serviceMenuSections[0].links,
  },
  {
    title: serviceMenuSections[1].title,
    links: serviceMenuSections[1].links,
  },
  {
    title: serviceMenuSections[2].title,
    links: serviceMenuSections[2].links,
  },
  {
    title: 'Products',
    links: platformMenuLinks,
  },
]

const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookie Settings']
const socialLinks = ['f', 'ig', 'x', 'in', 'yt']

function Footer() {
  const [openMobileSection, setOpenMobileSection] = useState('IT Services')

  const toggleMobileSection = (title) => {
    setOpenMobileSection((current) => (current === title ? '' : title))
  }

  return (
    <footer className="bg-makonis-navy text-makonis-white">
      <div className="container-default py-12 md:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-10">
          <div className="flex justify-center sm:col-span-2 lg:col-span-1 lg:items-start lg:justify-start">
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
              <div className="md:hidden">
                {serviceMenuSections.some((section) => section.title === column.title) ? (
                  <>
                    <button
                      type="button"
                      onClick={() => toggleMobileSection(column.title)}
                      aria-expanded={openMobileSection === column.title}
                      className="flex w-full items-center justify-between border-b border-makonis-white/12 py-3 text-left"
                    >
                      <span className="text-[15px] font-medium text-makonis-white">
                        {column.title}
                      </span>
                      <span className="text-sm text-makonis-white/70">
                        {openMobileSection === column.title ? '-' : '+'}
                      </span>
                    </button>

                    <ul
                      className={`grid overflow-hidden transition-all duration-300 ease-out ${
                        openMobileSection === column.title
                          ? 'grid-rows-[1fr] opacity-100'
                          : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <li className="overflow-hidden">
                        <div className="pt-4">
                          <ul className="space-y-3 text-left">
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
                      </li>
                    </ul>
                  </>
                ) : (
                  <>
                    <p className="text-[15px] font-medium text-makonis-white">{column.title}</p>
                    <ul className="mt-4 space-y-3">
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
                  </>
                )}
              </div>

              <div className="hidden md:block">
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

            </div>
          ))}
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
