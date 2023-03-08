import React from 'react';
import Form from './Form';

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="divider"></div>
      <h2 className="section__title contact__title">Contact</h2>
      <p className="section__description">
        I look forward to building your next website!
      </p>
      <Form />
    </section>
  );
}

export default Contact;
