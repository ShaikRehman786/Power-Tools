import "../assets/Styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-about">
          <h3>Mehaboob Power Tools</h3>
          <p>
            We provide quality power tools and industrial services with trust
            and reliability.
          </p>
        </div>

        {/* MIDDLE */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#products">Products</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📍 Kalyandurg, Andhra Pradesh</p>
          <p>📞 +91 99087 58148 | +91 94919 51649</p>
          <p>✉️ mehaboobpowertools9@gmail.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Mehaboob Power Tools. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
