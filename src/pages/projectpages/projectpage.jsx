  import React from 'react';
  import './projectpage.css';

   //import App Projectsr
  import Firebase from '../../assets/project-images/firebase.png';
  import HelloWorld from '../../assets/project-images/helloworld.png';
  import ScoreRecorder from '../../assets/project-images/scorerecorder.png';
  import TodoList from '../../assets/project-images/todolist.png';

  import firebaselogo from '../../assets/programming-logo/firebaselogo.png';
  import flutter from '../../assets/programming-logo/flutter.png';
  import dart from '../../assets/programming-logo/dart.png';
  import sqlite from '../../assets/programming-logo/sqlite.png';


  //import Web Projects
  import commingsooon from '../../assets/comingsoon.png';

  import html from '../../assets/programming-logo/htmllogo.png';
  import css from '../../assets/programming-logo/css.png';
  import js from '../../assets/programming-logo/js.png';
  import react from '../../assets/programming-logo/react.png';
  import javascript from '../../assets/programming-logo/javascript.png';

  

  const ProjectPage = () => {
    const projects = new Array(6).fill(null); 

  //app projects
    const appProjects = [
    {
      title: 'Hello World App',
      description: 'A simple Hello World app built with Flutter and Dart.',
      image: HelloWorld,
      tech: ['flutter', 'sqlite', 'dart'],
      apkLink: '/apk/hello-world.apk',
      codeLink: 'https://github.com/cr4zyCute/hello_world.git',
    },
    {
      title: 'To-Do List App',
      description: 'A simple To-DO List app built with Flutter and Dart.',
      image: TodoList,
      tech: ['flutter', 'sqlite', 'dart'],
      apkLink: '/apk/To-Do-List.apk',
      codeLink: 'https://github.com/cr4zyCute/to_do_list_Acosta.git',
    },
    {
      title: 'Score Recorder',
      description: 'Simple Score Recorder app to record scores of Scores.',
      image: ScoreRecorder,
      tech: ['flutter', 'sqlite', 'dart'],
      apkLink: '/apk/Score-Recorder.apk',
      codeLink: 'https://github.com/cr4zyCute/score_recorder-123.git',
    },
    {
      title: 'Firebase Auth App',
      description: 'Authentication system using Firebase.',
      image: Firebase,
      apkLink: '/apk/Firebase.apk',
      codeLink: 'https://github.com/cr4zyCute/firebase_activity.git',
      tech: ['flutter', 'firebase', 'dart'],
    },

 ];

    // Web projects
    const webProjects = [
      {
        title: 'Sample Website 1',
        description: 'A responsive website built with HTML, CSS, and JavaScript.',
        image: commingsooon,
        tech: ['react', 'css', 'javascript'],
        codeLink: 'https://github.com/cr4zyCute/midterm.git',
      },
      {
        title: 'Sample Website 2',
        description: 'A portfolio website built with HTML, CSS, and JavaScript.',
        image: commingsooon,
        tech: ['html', 'css', 'js'],
        codeLink: 'https://github.com/cr4zyCute/sample-website2.git',
      },
      {
        title: 'Sample Website 2',
        description: 'A portfolio website built with HTML, CSS, and JavaScript.',
        image: commingsooon,
        tech: ['html', 'css', 'js'],
        codeLink: 'https://github.com/cr4zyCute/sample-website2.git',
      },
      {
        title: 'Sample Website 2',
        description: 'A portfolio website built with HTML, CSS, and JavaScript.',
        image: commingsooon,
        tech: ['html', 'css', 'js'],
        codeLink: 'https://github.com/cr4zyCute/sample-website2.git',
      },
      {
        title: 'Sample Website 2',
        description: 'A portfolio website built with HTML, CSS, and JavaScript.',
        image: commingsooon,
        tech: ['html', 'css', 'js'],
        codeLink: 'https://github.com/cr4zyCute/sample-website2.git',
      },
      {
        title: 'Sample Website 2',
        description: 'A portfolio website built with HTML, CSS, and JavaScript.',
        image: commingsooon,
        tech: ['html', 'css', 'js'],
        codeLink: 'https://github.com/cr4zyCute/sample-website2.git',
      },
      {
        title: 'Sample Website 2',
        description: 'A portfolio website built with HTML, CSS, and JavaScript.',
        image: commingsooon,
        tech: ['html', 'css', 'js'],
        codeLink: 'https://github.com/cr4zyCute/sample-website2.git',
      },
    ];

  const techLogos = {
  firebase: firebaselogo,
  flutter: flutter,
  dart: dart,
  sqlite: sqlite,
  html: html,
  css: css,
  js: js,
  react: react,
  javascript: javascript,
  
};


    return (
    <div className="project-page">
    <h1 className="project-title">Projects</h1>
    <h2 className="project-subtitle">App</h2>
    <div className="project-slider">
      <div className="project-wrapper">
      {appProjects.map((project, index) => (
        <div className="project-card" key={index}>
          <div className="image-container">
            <img src={project.image} alt={project.title} />
                <div className="overlay">
                <div className="buttons">
                  <button className="download" >
                    <a href={project.apkLink} download>
                      Download
                    </a>
                  </button>
                  <button  className="code">
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                      View Code
                    </a>
                  </button>
                </div>
                  <div className="tech-icons">
                    {project.tech.map((tech, i) => (
                      <img key={i} src={techLogos[tech]} alt={tech}  />
                    ))}
                  </div>
                </div>
            </div>

          <div className="project-description-wrapper">
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* WEB PROJECTS*/}
    <h2 className="project-subtitle">Website</h2>

          <div className="project-slider">
        <div className="project-wrapper">
          {webProjects.map((project, index) => (
            <div className="project-card" key={`web-${index}`}>
              <div className="image-container">
                <img src={project.image} alt={project.title} />
                <div className="overlay">
                  <div className="buttons">
                    <button className="download">
                      Download
                    </button>
                    <button className="code">
                      <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                        View Code
                      </a>
                    </button>
                  </div>
                  <div className="tech-icons">
                    {project.tech.map((tech, i) => (
                      <img key={i} src={techLogos[tech]} alt={tech} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="project-description-wrapper">
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
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
