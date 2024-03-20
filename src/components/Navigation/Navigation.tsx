import { useState } from 'react'
import './navigation.scss'
import { Link } from 'react-router-dom'

function Navigation() {
  const [active, setActive] = useState(0)

  const handleClick = (activeIndex: number) => {
    setActive(activeIndex)
  }

  const isActiveClass = (index: number): string => {
    return active === index ? 'is-active' : ''
  }

  return (
    <nav className="navigation">
      <ul className="menu">
        <li><Link to="/" className={`${isActiveClass(0)} item`} onClick={() => handleClick(0)}>/</Link></li>
        <li><Link to="/music" className={`${isActiveClass(1)} item`} onClick={() => handleClick(1)}>Music</Link></li>
        <li><Link to="/cv" className={`${isActiveClass(2)} item`} onClick={() => handleClick(2)}>CV</Link></li>
        <li><Link to="/about" className={`${isActiveClass(3)} item`} onClick={() => handleClick(3)}>About</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation
