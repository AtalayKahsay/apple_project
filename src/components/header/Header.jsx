import logo from '../../images/icons/logo.png'
import searchIcon from '../../images/icons/search-icon.png'
import cart from '../../images/icons/cart.png'

import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <header className="header-wrapper">
        <div className="internal-wrapper"> 
          <div className="header-links-wrapper">
            <ul>
              <li className="logo-link"><Link href="/"><img src={logo} /></Link></li>
              <li><Link href="/mac/">Mac</Link></li>
              <li><Link href="/iphone/">iphone</Link></li>
              <li><Link href="/ipad/">ipad</Link></li>
              <li><Link href="/watch/">Watch</Link></li>
              <li><a href="/tv/">TV</a></li>
              <li><Link href="/music/">Music</Link></li>
              <li><Link href="/support">Support</Link></li>
              <li className="search-link"><Link href="/search/"><img src={searchIcon} /></Link></li>
              <li className="cart-link"><link  href="/cart/"><img src={cart} /></link></li>
            </ul>					
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header