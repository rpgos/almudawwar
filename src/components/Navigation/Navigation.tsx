import { useState } from 'react'
import './navigation.scss'
import { Link, useLocation } from 'react-router-dom'

function Navigation() {
  const { pathname } = useLocation()
  const [active, setActive] = useState(pathname)

  const handleClick = (activeIndex: string) => {
    setActive(activeIndex)
  }

  const isActiveClass = (path: string): string => {
    return active === path ? 'is-active' : ''
  }

  return (
    <nav className="navigation">
      <ul className="menu">
        <li><Link to="/" className={`${isActiveClass('/')} item`} onClick={() => handleClick('/')}>/</Link></li>
        <li><Link to="/music" className={`${isActiveClass('/music')} item`} onClick={() => handleClick('/music')}>Music</Link></li>
        <li><Link to="/cv" className={`${isActiveClass('/cv')} item`} onClick={() => handleClick('/cv')}>CV</Link></li>
        <li><Link to="/about" className={`${isActiveClass('/about')} item`} onClick={() => handleClick('/about')}>About</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation
