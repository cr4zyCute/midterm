import React from 'react';
import './secondPage.css'; // Import your CSS file

const SecondPage = () => {
  return (
    <div className="second-page">
      <h1 className="about-title">About me</h1>

      <div className="about-description">
        <p>
          <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="cards-grid">
        {[1, 2, 3, 4].map((item) => (
          <div className="info-card" key={item}>
            <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</strong></p>
          </div>
        ))}
      </div>

<div className="tech-icons-container">
  <div className="tech-icons-track">
    {[
      'php', 'python', 'html', 'office', 'js', 'canva', 'sql',
      'flutter', 'firebase', 'react', 'tailwind', 'figma', 'c', 'cpp'
    ].map((icon, index) => (
      <img
        key={index}
        src={`/assets/${icon}.png`}
        alt={icon}
        className="tech-icon"
      />
    ))}
    {/* Duplicate the same icons for seamless looping */}
    {[
      'php', 'python', 'html', 'office', 'js', 'canva', 'sql',
      'flutter', 'firebase', 'react', 'tailwind', 'figma', 'c', 'cpp'
    ].map((icon, index) => (
      <img
        key={`duplicate-${index}`}
        src={`/assets/${icon}.png`}
        alt={icon}
        className="tech-icon"
      />
    ))}
  </div>
</div>

    </div>
  );
};

export default SecondPage;
