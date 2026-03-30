import Navbar from '../components/Navbar.jsx'

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-makonis-white text-makonis-navy">
      <div className="relative isolate">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  )
}

export default MainLayout
