import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import WhatsAppFloat from './WhatsAppFloat'
import StickyCta from './StickyCta'

export default function Layout() {
  const { pathname } = useLocation()

  return (
    <div className="min-h-dvh flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow-lg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="flex-1 pb-24 md:pb-0" tabIndex={-1}>
        <Outlet key={pathname} />
      </main>
      <Footer />
      <WhatsAppFloat />
      <StickyCta />
    </div>
  )
}
