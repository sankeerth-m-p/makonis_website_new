import { AppRouteProvider } from './components/routing/AppRouteContext.jsx'
import { PageTransitionProvider } from './components/transition/PageTransitionContext.jsx'
import TransitionOverlay from './components/transition/TransitionOverlay.jsx'
import useAppRoute from './components/routing/useAppRoute.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import Career2Page from './pages/Career2.jsx'
import Career2RolePage from './pages/Career2RolePage.jsx'
import CareersPage from './pages/CareersPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import About2Page from './pages/About2.jsx'
import ContactPage from './pages/ContactPage.jsx'
import Contact2Page from './pages/Contact2.jsx'
import ServicePage from './pages/ServicePage.jsx'
import TalentSolutionsPage from './pages/TalentSolutionsPage.jsx'
import PlatformPage from './pages/PlatformPage.jsx'

function RouteContent() {
  const { pathname } = useAppRoute()

  if (pathname === '/about2') {
    return <About2Page />
  }

  if (pathname.startsWith('/services/')) {
    const serviceKey = pathname.split('/').filter(Boolean)[1]

    return <ServicePage serviceKey={serviceKey} />
  }

  if (pathname === '/talent-solutions') {
    return <TalentSolutionsPage />
  }

  if (pathname.startsWith('/platforms/')) {
    const platformKey = pathname.split('/').filter(Boolean)[1]

    return <PlatformPage platformKey={platformKey} />
  }

  if (pathname === '/careers' || pathname.startsWith('/careers/')) {
    return <CareersPage />
  }

  if (pathname.startsWith('/career2/') && pathname !== '/career2/') {
    const jobId = pathname.split('/').filter(Boolean)[1]

    return <Career2RolePage jobId={jobId} />
  }

  if (pathname === '/career2' || pathname.startsWith('/career2/')) {
    return <Career2Page />
  }

  if (
    pathname === '/about' ||
    pathname === '/about-us' ||
    pathname.startsWith('/about/') ||
    pathname.startsWith('/about-us/')
  ) {
    return <AboutPage />
  }

  if (pathname === '/contact' || pathname.startsWith('/contact/')) {
    return <ContactPage />
  }

  if (pathname === '/contact2') {
    return <Contact2Page />
  }

  return <HomePage />
}

function App() {
  return (
    <AppRouteProvider>
      <PageTransitionProvider>
        <MainLayout>
          <TransitionOverlay />
          <RouteContent />
        </MainLayout>
      </PageTransitionProvider>
    </AppRouteProvider>
  )
}

export default App
