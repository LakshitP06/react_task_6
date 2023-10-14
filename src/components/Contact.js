import React from 'react';

function Contact() {
  const paragraphStyle = {
    fontSize: '18px', // Font size
    color: '#0073e6', // Text color
    margin: '10px 0', // Margin space
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p style={paragraphStyle}>Thank you for visiting my portfolio. If you're interested in discussing a potential project, have questions, or just want to connect, please don't hesitate to get in touch. You can reach me through any of the following methods:</p>
      <p style={paragraphStyle}>Email: [Your Email Address]</p>
    </section>
  );
}

export default Contact;