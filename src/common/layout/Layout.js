import { useLocation } from 'react-router-dom'

import { Footer } from '.'
import { MainHeader, paths } from './header'

const Layout = ({ children }) => {
  const location = useLocation()
  const hasMainHeaderPath = paths.includes(location.pathname)

  return (
    <>
      {hasMainHeaderPath && <MainHeader />}
      <main className="flex-col items-center justify-center mt-11 mb-28 p-4">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
