import { useState } from "react"
import bgVideo from "../assets/bg.mp4"
import { FaPhoneAlt, FaWhatsapp, FaTools, FaBars } from "react-icons/fa"
import "../assets/Styles/Header.css"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
      <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-brand">Mehaboob Power Tools</div>

        {/* MENU BUTTON (MOBILE) */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>

        {/* NAV LINKS */}
        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
          <a href="#brands" onClick={() => setMenuOpen(false)}>Brands</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      </nav>

    <header className="header" id="home">

      {/* VIDEO */}
      <video autoPlay loop muted playsInline className="bg-video">
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="overlay">
        <h1>Mehaboob Power Tools</h1>

        <p>
          Trusted supplier of power tools, industrial machines, and repair
          services for professionals and businesses.
        </p>

        <div className="actions">
          <a href="tel:9908758148">
            <button className="btn">
              <FaPhoneAlt style={{ marginRight: "8px" }} />
              Call Now
            </button>
          </a>

          <a
            href="https://wa.me/919908758148"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn btn-whatsapp">
              <FaWhatsapp style={{ marginRight: "8px" }} />
              WhatsApp
            </button>
          </a>
        </div>

        <div className="footer-line">
          <FaTools /> Sales • Service • Spare Parts
        </div>
      </div>
    </header>
    </>
  )
}

export default Header
