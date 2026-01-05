import bgVideo from '../assets/bg.mp4'
import { FaPhoneAlt, FaWhatsapp, FaTools } from "react-icons/fa"
import "../assets/Styles/Header.css"

function Header() {
return (
    <header className="header">

      {/* NAVBAR */}
    <nav className="navbar">
        <div className="nav-brand">
        Mehaboob Power Tools
        </div>

        <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#products">Products</a>
        <a href="#brands">Brands</a>
        <a href="#contact">Contact</a>
        </div>
    </nav>

      {/* VIDEO */}
    <video autoPlay loop muted playsInline className="bg-video">
        <source src={bgVideo} type="video/mp4" />
    </video>

      {/* OVERLAY */}
    <div className="overlay" id="home">
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

        <a href="https://wa.me/919908758148" target="_blank">
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
)
}

export default Header
