import React from 'react';

function Project() {
  const projectStyle = {
    backgroundColor: '#f9f9f9', // Background color for each project
    padding: '20px', // Padding around each project
    margin: '20px 0', // Margin space between projects
  };

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project" style={projectStyle}>
        <h3>Go Lang Web Application</h3>
        <p>
          Developed a web application using Go Lang, HTML, CSS, and JavaScript. This project showcases my proficiency in building web applications with a focus on Go Lang's capabilities.
        </p>
      </div>

      <div className="project" style={projectStyle}>
        <h3>CSS Animation Showcase</h3>
        <p>
          Curated a collection of CSS animations to showcase a variety of effects and transitions. These animations were meticulously crafted using pure CSS, enhancing web design and user experience.
        </p>
      </div>

      <div className="project" style={projectStyle}>
        <h3>C++ Console Game</h3>
        <p>
          Designed a text-based console game using C++. This engaging game features challenges, interactions, and gameplay implemented in C++, providing a fun and immersive gaming experience.
        </p>
      </div>

      <div className="project" style={projectStyle}>
        <h3>Arduino IoT Project</h3>
        <p>
          Engineered an Arduino-based Internet of Things (IoT) project for data collection and cloud-based data transmission. This project demonstrates how Arduino can be used in real-world applications for data sensing and monitoring.
        </p>
      </div>
    </section>
  );
}

export default Project;
