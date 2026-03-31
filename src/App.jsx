import { AppRouteProvider } from './components/routing/AppRouteContext.jsx'
import { PageTransitionProvider } from './components/transition/PageTransitionContext.jsx'
import TransitionOverlay from './components/transition/TransitionOverlay.jsx'
import useAppRoute from './components/routing/useAppRoute.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import CareersPage from './pages/CareersPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ServicePage from './pages/ServicePage.jsx'
import PlatformPage from './pages/PlatformPage.jsx'

function RouteContent() {
  const { pathname } = useAppRoute()

  if (pathname.startsWith('/services/')) {
    const serviceKey = pathname.split('/').filter(Boolean)[1]

    return <ServicePage serviceKey={serviceKey} />
  }

  if (pathname.startsWith('/platforms/')) {
    const platformKey = pathname.split('/').filter(Boolean)[1]

    return <PlatformPage platformKey={platformKey} />
  }

  if (pathname === '/careers' || pathname.startsWith('/careers/')) {
    return <CareersPage />
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
