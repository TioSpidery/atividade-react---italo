import { Link } from 'react-router-dom'
import Menu from './Menu.jsx'

function Header() {
  return (
    <header className="header">
      <div className="container header-interno">
        <Link to="/" className="logo">
          🎮 Pixel<span>Hub</span>
        </Link>
        <Menu />
      </div>
    </header>
  )
}

export default Header
