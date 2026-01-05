import "../assets/Styles/Services.css";

function Services() {
  return (
    <section className="services-section" id="services">
      <h2>Our Services</h2>

      {/* NEW LINE */}
      <p className="services-exp">15+ Years of Excellence</p>

      <p className="services-sub">
        We provide professional industrial services with quality and safety.
      </p>

      <div className="services-grid">
        <div className="service-card">
          <h3>Tool Repair</h3>
          <p>
            Professional repair service for all types of power tools with warranty.
          </p>
        </div>

        <div className="service-card">
          <h3>Machine Installation</h3>
          <p>
            Safe and accurate installation of industrial machines by experts.
          </p>
        </div>

        <div className="service-card">
          <h3>Maintenance</h3>
          <p>
            Regular maintenance service to increase machine life and performance.
          </p>
        </div>

        <div className="service-card">
          <h3>Industrial Support</h3>
          <p>
            On-site support and consultation for industrial requirements.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
