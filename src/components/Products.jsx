import "../assets/Styles/Products.css"

import drill from "../assets/products/drill.jpg"
import grinder from "../assets/products/angle-grinder.jpg"
import cutting from "../assets/products/cutting machine.jpg"
import tree from "../assets/products/tree cutter'.jpg"   // 🔧 fixed quote

function Products() {
  return (
    <section className="products-section" id="products">
      <h2>Our Products</h2>
      <p className="products-sub">
        High quality power tools for industrial and professional use.
      </p>

      <div className="products-grid">
        <ProductCard
          img={drill}
          title="Drill Machine"
          desc="Heavy duty drilling machines for all industrial needs."
        />

        <ProductCard
          img={cutting}
          title="Cutting Tools"
          desc="Accurate cutting tools with long life performance."
        />

        <ProductCard
          img={grinder}
          title="Angle Grinder"
          desc="Strong grinders for grinding and polishing work."
        />

        <ProductCard
          img={tree}
          title="Tree Cutter"
          desc="Powerful cutters for wood and garden work."
        />
      </div>
    </section>
  )
}

function ProductCard({ img, title, desc }) {
  return (
    <div className="product-card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

export default Products
