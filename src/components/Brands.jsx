import "../assets/Styles/Brands.css"

import supersteel from "../assets/brands/supersteel.svg"
import xtrapower from "../assets/brands/xtrapower.png"
// import mal from "../assets/brands/mal.png"

import bosch from "../assets/brands/bosch.svg"
import makita from "../assets/brands/makita.jpg"
// import hitachi from "../assets/brands/hitachi.png"
import dewalt from "../assets/brands/dewalt.png"

function Brands() {
  return (
    <section className="brands-section" id="brands">
      <h2>Our Trusted Brands</h2>
      <p className="brands-sub">
        We deal with branded and trusted power tools for professional use.
      </p>

      <div className="brands-grid">
        <img src={supersteel} alt="Super Steel" />
        <img src={xtrapower} alt="Xtra Power" />
        {/* <img src={mal} alt="MAL" /> */}

        <img src={bosch} alt="Bosch" />
        <img src={makita} alt="Makita" />
        {/* <img src={hitachi} alt="Hitachi" /> */}
        <img src={dewalt} alt="DeWalt" />
      </div>

      <p className="brand-note">
        *Brand logos are used for demonstration purpose only.
      </p>
    </section>
  )
}

export default Brands
