import "./contact.css";
import Navbar from "./navbar";
export default function Contact() {
  return (
    <>
    <Navbar />
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="contact-subtitle">
        We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </p>

      <div className="contact-card">
        <form className="contact-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input type="text" placeholder="Enter subject" />
          </div>

          <div className="form-group full-width">
            <label>Message</label>
            <textarea rows="5" placeholder="Write your message here..." required></textarea>
          </div>

          <button type="submit" className="send-btn">Send Message</button>
        </form>
      </div>
    </div>
    </>
  );
}
