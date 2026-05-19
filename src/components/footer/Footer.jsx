import flag from '../../images/icons/flag-usa.png'

function Footer() {
  return (
    <div>
      <footer className="footer-wrapper">
        <div className="internal-wrapper">

          {/* Trade-in section */}
          <div className="upper-text-container">
            1. Trade In: Trade-in values vary. Trade in your eligible device including iPhone 11 through iPhone 17 models for credit toward a new iPhone. 
            Trade-in value depends on condition, year, and configuration of your device. 
            Must be at least 18 years old. Apple or its trade-in partners reserve the right to refuse or limit any trade-in for any reason. 
            In-store trade-in requires a valid government-issued photo ID. 

            Sales tax may be applied to the full value of the new iPhone. 

            Monthly payment options are available with approved credit and 0% APR financing for qualified customers. 
            Requires activation with supported carriers.

            <a href="#"> Full terms apply</a>.
          </div>

          {/* Footer links */}
          <div className="footer-links-wrapper">

            <div className="links-wrapper-1">
              <h3>Shop and Learn</h3>
              <ul>
                <li><a href="#">Mac</a></li>
                <li><a href="#">iPad</a></li>
                <li><a href="#">iPhone</a></li>
                <li><a href="#">Watch</a></li>
                <li><a href="#">AirPods</a></li>
                <li><a href="#">Accessories</a></li>
              </ul>
            </div>

            <div className="links-wrapper-2">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Apple Music</a></li>
                <li><a href="#">Apple TV+</a></li>
                <li><a href="#">Apple Arcade</a></li>
                <li><a href="#">iCloud</a></li>
              </ul>

              <h3>Account</h3>
              <ul>
                <li><a href="#">Manage Apple ID</a></li>
                <li><a href="#">Apple Store Account</a></li>
              </ul>
            </div>

            <div className="links-wrapper-3">
              <h3>Apple Store</h3>
              <ul>
                <li><a href="#">Find a Store</a></li>
                <li><a href="#">Genius Bar</a></li>
                <li><a href="#">Order Status</a></li>
                <li><a href="#">Shopping Help</a></li>
              </ul>
            </div>

            <div className="links-wrapper-4">
              <h3>For Business</h3>
              <ul>
                <li><a href="#">Apple and Business</a></li>
              </ul>

              <h3>For Education</h3>
              <ul>
                <li><a href="#">Apple and Education</a></li>
              </ul>

              <h3>For Healthcare</h3>
              <ul>
                <li><a href="#">Apple in Healthcare</a></li>
              </ul>

              <h3>For Government</h3>
              <ul>
                <li><a href="#">Apple in Government</a></li>
              </ul>
            </div>

            <div className="links-wrapper-5">
              <h3>Apple Values</h3>
              <ul>
                <li><a href="#">Accessibility</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Environment</a></li>
              </ul>

              <h3>About Apple</h3>
              <ul>
                <li><a href="#">Newsroom</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Investors</a></li>
              </ul>
            </div>

          </div>

          {/* Shop info */}
          <div className="my-apple-wrapper">
            More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#">other retailer</a> near you. Or call <a href="tel:18006927753">1-800-MY-APPLE</a> (1-800-692-7753).
          </div>

          {/* Bottom footer */}
          <div className="copyright-wrapper">

            <div className="copyright">
              Copyright © 2026 Apple Inc. All rights reserved.
            </div>

            <div className="footer-links-terms">
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Sales and Refunds</a></li>
                <li><a href="#">Legal</a></li>
              </ul>
            </div>

            <div className="footer-country">
              <div className="flag-wrapper">
                <img src={flag} alt="USA flag" />
              </div>
              <div className="footer-country-name">United States</div>
            </div>

          </div>

        </div>
      </footer>
    </div>
  )
}


export default Footer