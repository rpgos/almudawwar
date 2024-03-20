import { useState } from 'react'
import './navigation.scss'

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
        <li><a className={`${isActiveClass(0)} item`} onClick={() => handleClick(0)}>/</a></li>
        <li><a className={`${isActiveClass(1)} item`} onClick={() => handleClick(1)}>Music</a></li>
        <li><a className={`${isActiveClass(2)} item`} onClick={() => handleClick(2)}>CV</a></li>
        <li><a className={`${isActiveClass(3)} item`} onClick={() => handleClick(3)}>About</a></li>
      </ul>
    </nav>
  )
}

export default Navigation
