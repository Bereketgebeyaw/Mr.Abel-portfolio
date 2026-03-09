import { Outlet } from 'react-router-dom'
import { Footer } from '../shared/Footer'
import { Navbar } from '../shared/Navbar'

export function RootLayout() {
  return (
    <div>
      <a className="skipLink" href="#content">
        Skip to content
      </a>
      <Navbar />
      <main id="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

