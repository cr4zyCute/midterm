import React from 'react';
import './secondpage.css'; // Import your CSS file

  //programming languages icons
  import Adobe from '../../assets/programming-logo/adoboi.png';
  import AndroidStudio from '../../assets/programming-logo/android-studio.png';
  import angular from '../../assets/programming-logo/angular.png';
  import arduino from '../../assets/programming-logo/arduino.png';
  import bootsrap from '../../assets/programming-logo/bootsrap.png';
  import c from '../../assets/programming-logo/c.png';
  import canva from '../../assets/programming-logo/canva.png';
  import chashtag from '../../assets/programming-logo/chashtag.png';
  import cisco from '../../assets/programming-logo/cisco.png';
  import cplus from '../../assets/programming-logo/cplus.png';
  import css from '../../assets/programming-logo/css.png';
  import dart from '../../assets/programming-logo/dart.png';
  import figma from '../../assets/programming-logo/figma.png';
  import firebaselogo from '../../assets/programming-logo/firebaselogo.png';
  import flutter from '../../assets/programming-logo/flutter.png';
  import html from '../../assets/programming-logo/html.png';
  import java from '../../assets/programming-logo/java.png';
  import javascript from '../../assets/programming-logo/javascript.png';
  import js from '../../assets/programming-logo/js.png';
  import laravel from '../../assets/programming-logo/firebaselogo.png';
  import mongodb from '../../assets/programming-logo/mongodb.png';
  import mysql from '../../assets/programming-logo/mysql.png';
  import nodejs from '../../assets/programming-logo/nodejs.png';
  import php from '../../assets/programming-logo/php.png';
  import ps from '../../assets/programming-logo/ps.png';
  import python from '../../assets/programming-logo/python.png';
  import react from '../../assets/programming-logo/react.png';
  import sqlite from '../../assets/programming-logo/sqlite.png';
  import sqlserver from '../../assets/programming-logo/sqlserver.png';
  import xamarin from '../../assets/programming-logo/xamarin.png';
  
  
const SecondPage = () => {
  const techIcons = [
  { src: Adobe, alt: 'Adobe' },
  { src: AndroidStudio, alt: 'Android Studio' },
  { src: angular, alt: 'Angular' },
  { src: arduino, alt: 'arduino' },
  { src: bootsrap, alt: 'bootsrap' },
  { src: c, alt: 'c' },
  { src: canva, alt: 'canva' },
  { src: chashtag, alt: 'chashtag' },
  { src: cisco, alt: 'cisco' },
  { src: cplus, alt: 'cplus' },
  { src: css, alt: 'css' },
  { src: dart, alt: 'dart' },
  { src: figma, alt: 'figma' },
  { src: flutter, alt: 'flutter' },
  { src: html, alt: 'html' },
  { src: java, alt: 'java' },
  { src: javascript, alt: 'javascript' },
  { src: js, alt: 'js' },
  { src: laravel, alt: 'laravel' },
  { src: mongodb, alt: 'mongodb' },
  { src: mysql, alt: 'mysql' },
  { src: nodejs, alt: 'nodejs' },
  { src: php, alt: 'php' },
  { src: ps, alt: 'ps' },
  { src: python, alt: 'python' },
  { src: react, alt: 'react' },
  { src: sqlite, alt: 'sqlite' },
  { src: sqlserver, alt: 'sqlserver' },
  { src: xamarin, alt: 'xamarin' },

];
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
      {[...techIcons, ...techIcons].map((icon, index) => (
        <img
          key={index}
          src={icon.src}
          alt={icon.alt}
          className="tech-icon"
        />
      ))}
          {/* Duplicate the same icons for seamless looping */}
      {[...techIcons, ...techIcons].map((icon, index) => (
        <img
          key={index}
          src={icon.src}
          alt={icon.alt}
          className="tech-icon"
        />
      ))}
  </div>
</div>

    </div>
  );
};

export default SecondPage;
