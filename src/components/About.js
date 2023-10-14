import React from 'react';

function About() {
  const sectionStyle = {
    backgroundColor: '#f2f2f2', // Background color
    padding: '20px', // Padding around the section
  };

  const headingStyle = {
    color: '#333', // Text color
  };

  const paragraphStyle = {
    fontSize: '16px', // Font size
    lineHeight: '1.5', // Line height
  };

  return (
    <section id="about" style={sectionStyle}>
      <h2 style={headingStyle}>About Me</h2>
      <p style={paragraphStyle}>
        Greetings! I go by the name of Lakshit Pardeshi, and my heart beats for the realm of technology, coding, and the digital universe. I'm currently immersed in my pursuit of a Bachelor's degree in Computer Science and Engineering at the esteemed institution, VIT Vellore. My academic voyage has laid the groundwork for a profound understanding of computer science, encompassing a myriad of subjects such as programming languages, algorithms, and data structures. I relish the challenge of deciphering intricate problems and transmuting abstract concepts into practical software solutions. Whether it's crafting websites, designing mobile applications, or delving into the realms of machine learning, I approach every new project with boundless enthusiasm, seeing them as an opportunity to expand my horizons. This portfolio, ingeniously brought to life as part of an academic assignment, serves as a showcase of my creative endeavors in the field.
      </p>
    </section>
  );
}

export default About;
