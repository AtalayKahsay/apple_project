import iphone17ProMax from '../../images/home/iphone17-pro-max-bg.jpg'
import './Iphone17ProMax.css'

function Iphone17ProMax() {
  return (
    <div>
      <section className="second-highlight-wrapper">
			<div className="internal-wrapper">
				<div className="title-wrapper">
					iPhone 17 Pro Max 
				</div> 

				<div className="description-wrapper">
					Bigger screen. A19 Pro chip. Aluminium design.
				</div>

				<div className="price-wrapper">
					From $49.95/mo. or $1,199 with trade‑in.
				</div>

				<div className="links-wrapper">
					<ul>
						<li><a href="">Learn more</a></li>
						<li><a href="">Buy</a></li>
					</ul> 
				</div>

        <div className="second-image-wrapper">
          <img src={iphone17ProMax} />
        </div>
			</div>
		</section>
    </div>
  )
}

export default Iphone17ProMax