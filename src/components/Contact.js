import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me for collaborations or opportunities!</p>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
      <p>Email: <a href="mailto:gorrepatipraveeng@gmail.com">gorrepatipraveeng@gmail.com</a></p>
      <p>Phone: +91 9346068631</p>
    </section>
  );
};

export default Contact;