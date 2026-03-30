export const navigation = [
  { label: 'Home', href: '#' },
  { label: 'Products', href: '#', hasDropdown: true, menuId: 'products' },
  { label: 'Services', href: '#', hasDropdown: true, menuId: 'services' },
  { label: 'Careers', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
]

export const megaMenus = {
  products: {
    eyebrow: 'Our Products',
    sections: [
      {
        title: 'Platform suite',
        links: [
          { label: 'Mako Plus', href: '#' },
          { label: 'ATS', href: '#' },
          { label: 'Trade Intelligence', href: '#' },
        ],
      },
    ],
  },
  services: {
    eyebrow: 'Our Services',
    sections: [
      {
        title: 'IT Services',
        links: [
          { label: 'Artificial Intelligence', href: '#' },
          { label: 'Internet of Things', href: '#' },
          { label: 'Device Engineering', href: '#' },
          { label: 'Analytics', href: '#' },
          { label: 'Integration', href: '#' },
          { label: 'Testing', href: '#' },
          { label: 'Global Capability Center', href: '#' },
        ],
      },
      {
        title: 'Semiconductors',
        links: [
          { label: 'RTL Design & Development', href: '#' },
          { label: 'Physical Design', href: '#' },
          { label: 'FPGA Design', href: '#' },
          { label: 'Design Consulting', href: '#' },
          { label: 'Design Verification', href: '#' },
          { label: 'DFT', href: '#' },
          { label: 'Post-Silicon Validation', href: '#' },
        ],
      },
      {
        title: 'Talent Solutions',
        links: [
          { label: 'Contract Staffing', href: '#' },
          { label: 'Contract to Hire', href: '#' },
          { label: 'Direct Hire', href: '#' },
          { label: 'Enterprise RPO', href: '#' },
          { label: 'Executive Search', href: '#' },
          { label: 'Hire Train Deploy', href: '#' },
          { label: 'Staff Augmentation', href: '#' },
        ],
      },
    ],
  },
}
