import { ContactModalProvider } from '../components/contact/ContactModalProvider.jsx'
import Navbar from '../components/Navbar.jsx'

function MainLayout({ children }) {
  return (
    <ContactModalProvider>
      <div className="min-h-screen bg-makonis-white text-makonis-navy">
        <div className="relative isolate">
          <Navbar />
          <main>{children}</main>
        </div>
      </div>
    </ContactModalProvider>
  )
}

export default MainLayout
