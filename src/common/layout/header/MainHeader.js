import { Link } from 'react-router-dom'
import intl from 'react-intl-universal'

import { menus } from '.'
import { LocaleSelector } from 'feature/locales'
import { token } from 'feature/auth'

const MainHeader = () => {
  const navList = token.get() ? menus.user : menus.common

  return (
    <header className="flex justify-between fixed top-0 left-0 h-11 w-screen px-4 bg-white">
      <div className="self-center">
        <Link to="/">Logo</Link>
      </div>
      <div className="flex justify-around">
        <LocaleSelector />
        <nav className="self-center">
          <ul className="flex justify-around">
            {navList.map((data) => (
              <li key={data.label} className="mx-1">
                <Link to={data.path}>
                  {intl.get(`nav_${data.label}`).d(data.label)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default MainHeader
