import './navigation.scss'

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="items">
        <li><a className="is-active item">/</a></li>
        <li><a className="item">Music</a></li>
        <li><a className="item">CV</a></li>
        <li><a className="item">About</a></li>
      </ul>
    </nav>
  )
}

export default Navigation
