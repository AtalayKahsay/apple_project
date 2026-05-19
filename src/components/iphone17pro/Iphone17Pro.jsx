import iphone17Pro from "../../images/home/iphone17-Pro-bg.jpg"
import './Iphone17Pro.css'

function Iphone17Pro() {
  return (
    <div>
      <section className="third-highlight-wrapper">
			<div className="internal-wrapper">
				<div className="title-wraper">
					iPhone 17 Pro 
				</div> 
				<div className="description-wrapper">
					Designed to impress every day.
				</div>
				<div className="price-wrapper">
					From $29.12/mo. or $1099 with trade‑in.
				</div>
				<div className="links-wrapper">
					<ul>
						<li><a href="">Learn more</a></li>
						<li><a href="">Buy</a></li>
					</ul> 
				</div>

        <div className="third-image-wrapper">
          <img src={iphone17Pro} />
        </div>
			</div>
		</section>
    </div>
  )
}

export default Iphone17Pro