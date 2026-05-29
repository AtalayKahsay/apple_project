import logo from '../../images/icons/logo.png'
import searchIcon from '../../images/icons/search-icon.png'
import cart from '../../images/icons/cart.png'
import NavbarList from '../navbarList/NavbarList'

import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <header className="header-wrapper">
        <div className="internal-wrapper"> 
          <div className="header-links-wrapper">
            <ul>
              <li className="logo-link"><Link to="/"><img src={logo} alt="Apple logo" /></Link></li>
              <li><NavbarList LinkURL="/mac" LinkName="Mac" /></li>
              <li><NavbarList LinkURL="/iphone" LinkName="iPhone" /></li>
              <li><NavbarList LinkURL="/ipad" LinkName="iPad" /></li>
              <li><NavbarList LinkURL="/watch" LinkName="Watch" /></li>
              <li><NavbarList LinkURL="/tv" LinkName="TV" /></li>
              <li><NavbarList LinkURL="/music" LinkName="Music" /></li>
              <li><NavbarList LinkURL="/support" LinkName="Support" /></li>
              <li className="search-link"><Link to="/search/"><img src={searchIcon} alt="Search icon" /></Link></li>
              <li className="cart-link"><Link  to="/cart/"><img src={cart} alt="Cart icon" /></Link></li>
            </ul>					
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header