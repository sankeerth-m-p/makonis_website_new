export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/platforms/mako-plus', hasDropdown: true, menuId: 'products' },
  { label: 'Services', href: '/services/ai', hasDropdown: true, menuId: 'services' },
  { label: 'Careers', href: '/careers' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const megaMenus = {
  products: {
    eyebrow: 'Our Products',
    sections: [
      {
        title: 'Platform suite',
        links: [
          { label: 'Mako Plus', href: '/platforms/mako-plus' },
          { label: 'Talent Track Pro', href: '/platforms/talent-track-pro' },
          { label: 'Trading Intelligence', href: '/platforms/trading-intelligence' },
        ],
      },
    ],
  },
  services: {
    eyebrow: 'Our Services',
    sections: [
      {
        title: 'Services',
        links: [
          { label: 'Artificial Intelligence', href: '/services/ai' },
          { label: 'Internet of Things', href: '/services/iot' },
          { label: 'System Integration', href: '/services/integration' },
          { label: 'Testing', href: '/services/testing' },
          { label: 'Analytics', href: '/services/data' },
        ],
      },
    ],
  },
}
