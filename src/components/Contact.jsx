import "../assets/Styles/Contact.css";
import emailjs from "emailjs-com";

function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_epal575",
      "template_jbbk7fg",
      e.target,
      "enEs9akMYPPg8r-DW"
    )
    .then(() => {
      alert("Message sent successfully");
      e.target.reset();
    })
    .catch(() => {
      alert("Failed to send message");
    });
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Us</h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Get In Touch</h3>

          <form className="contact-form" onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required />
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-map">
        <iframe
            title="Mehaboob Power Tools Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.8163565473005!2d77.10942877368267!3d14.552491978255532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb0d7af96075f2f%3A0x686bc5e4366fa4ac!2sMehaboob%20Power%20Tools!5e0!3m2!1sen!2sin!4v1767637569130!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>

      </div>
    </section>
  );
}

export default Contact;
