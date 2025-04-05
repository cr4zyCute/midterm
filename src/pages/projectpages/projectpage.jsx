  import React from 'react';
  import './projectpage.css';

  //import images from assets folder
  import Firebase from '../../assets/project-images/firebase.png';
  import HelloWorld from '../../assets/project-images/helloworld.png';
  import ScoreRecorder from '../../assets/project-images/scorerecorder.png';
  import TodoList from '../../assets/project-images/todolist.png';

  

  const ProjectPage = () => {
    const projects = new Array(6).fill(null); 

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
      tech: ['flutter', 'firebase', 'dart'],
        apkLink: '/apk/To-Do-List.apk',
      codeLink: 'https://github.com/cr4zyCute/to_do_list_Acosta.git',
    },
    {
      title: 'Score Recorder',
      description: 'Simple Score Recorder app to record scores of Scores.',
      image: ScoreRecorder,
      tech: ['flutter', 'firebase', 'dart'],
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
                      <img key={i} src={`/assets/${tech}.png`} alt={tech} />
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
