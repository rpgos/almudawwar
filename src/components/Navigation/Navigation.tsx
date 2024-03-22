import { useEffect, useState } from 'react'
import './navigation.scss'
import { Link, useLocation } from 'react-router-dom'
import { menuItems } from './menuItems'

function Navigation() {
  const { pathname } = useLocation()
  const [active, setActive] = useState(pathname)

  useEffect(() => {
    setActive(pathname)
  }, [pathname])

  const handleClick = (activeIndex: string) => {
    setActive(activeIndex)
  }

  const isActiveClass = (path: string): string => {
    return active === path ? 'is-active' : ''
  }

  return (
    <nav className="navigation">
      <ul className="menu">
        {
          menuItems.map(item => {
            return <li key={item.name}>
              <Link
                to={item.path}
                className={`${isActiveClass(item.path)} item`}
                onClick={() => handleClick(item.path)}>
                  {item.name}
              </Link>
            </li>
          })
        }
      </ul>
    </nav>
  )
}

export default Navigation
