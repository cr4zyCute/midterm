import React from 'react';
import './ProjectPage.css';

const ProjectPage = () => {
  const projects = new Array(6).fill(null); // Example 6 projects

  return (
  <div className="project-page">
  <h1 className="project-title">Projects</h1>
  <h2 className="project-subtitle">App</h2>

  <div className="project-slider">
    <div className="project-wrapper">
      {projects.map((_, index) => (
        <div className="project-card" key={index}>
          <div className="image-container">
            <img src="/assets/sample-image.png" alt="project" />
            <div className="overlay">
              <div className="buttons">
                <button className="download">Download</button>
                <button className="code">View Code</button>
              </div>
              <div className="tech-icons">
                <img src="/assets/flutter.png" alt="flutter" />
                <img src="/assets/sqlite.png" alt="sqlite" />
                <img src="/assets/dart.png" alt="dart" />
              </div>
            </div>
          </div>

          <div className="project-description-wrapper">
            <div className="project-info">
              <h3>Title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum purus id neque efficitur, at feugiat erat egestas.</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* 👇 Duplicate section starts here */}
  <h2 className="project-subtitle">Website</h2>

  <div className="project-slider">
    <div className="project-wrapper">
      {projects.map((_, index) => (
        <div className="project-card" key={`web-${index}`}>
          <div className="image-container">
            <img src="/assets/sample-image.png" alt="project" />
            <div className="overlay">
              <div className="buttons">
                <button className="download">Download</button>
                <button className="code">View Code</button>
              </div>
              <div className="tech-icons">
                <img src="/assets/html.png" alt="html" />
                <img src="/assets/css.png" alt="css" />
                <img src="/assets/js.png" alt="js" />
              </div>
            </div>
          </div>

          <div className="project-description-wrapper">
            <div className="project-info">
              <h3>Website Title</h3>
              <p>This project showcases responsive web design techniques using HTML, CSS, and JavaScript.</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    
  );
};

export default ProjectPage;
