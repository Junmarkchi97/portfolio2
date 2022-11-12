import React, { useEffect, useRef, useState } from "react";
import "./styles/app.scss";

function App() {
  const app = useRef(null);
  const introName = useRef(null);
  const introTitle = useRef(null);
  const introContainer = useRef(null);
  const nav = useRef(null);
  const navRef = useRef([]);
  const projectRef = useRef([]);
  const projectWrapper = useRef(null);
  const projectContainer = useRef(null);
  const projectShadeTop = useRef(null);
  const projectShadeBottom = useRef(null);
  const aboutWrapper = useRef(null);

  const [projects, setProjects] = useState([
    { id: "1", class: "project project1 grid-column-span-2", selected: false },
    { id: "2", class: "project project2", selected: false },
    { id: "3", class: "project project3", selected: false },
    { id: "4", class: "project project4 grid-column-span-2", selected: false },
    { id: "5", class: "project project5", selected: false },
    { id: "6", class: "project project6", selected: false },
    { id: "7", class: "project project7", selected: false },
    { id: "8", class: "project project8 grid-column-span-2", selected: false },
  ]);

  const [navs, setNavs] = useState(["Projects", "About", "Contact", "Resume"]);

  useEffect(() => {
    setTimeout(() => {
      introName.current.style.transform = "translateY(-30px)";

      setTimeout(() => {
        introContainer.current.style.height = "13%";
        introContainer.current.style.scale = "0.8";
        introTitle.current.style.color = "gray";
        nav.current.style.opacity = "1";
        projectContainer.current.style.display = "grid";
      }, 1800);
    }, 1500);
  }, []);

  const handleOnMouseMoveProject = (e) => {
    projectRef.current.map((project) => {
      const rect = project.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      project.style.setProperty("--mouse-x", `${x}px`);
      project.style.setProperty("--mouse-y", `${y}px`);
    });
  };

  const handleOnClickNav = (e) => {
    nav.current.dataset.activeIndex = e.target.id;

    if (e.target.id == 0) {
    } else if (e.target.id == 1) {
    } else if (e.target.id == 2) {
    } else {
    }
  };

  const handleOnScrollProjects = () => {
    const scrollValue = projectContainer.current.scrollTop;
    const scrollMaxValue = projectContainer.current.scrollHeight;

    if (scrollValue === 0) {
      projectShadeTop.current.style.opacity = "0";
      projectShadeBottom.current.style.opacity = "1";
    } else {
      projectShadeTop.current.style.opacity = "1";
      projectShadeBottom.current.style.opacity = "0";
    }
  };

  const handleOnHoverNav = (e) => {
    nav.current.dataset.hoverIndex = e.target.id;
  };

  const handleOnUnHoverNav = (e) => {
    nav.current.dataset.hoverIndex = null;
  };

  return (
    <div id="app" ref={app}>
      <div className="intro-container" ref={introContainer}>
        <div className="intro-name" ref={introName}>
          JUNMARK CHI
        </div>
        <div className="intro-title" ref={introTitle}>
          WEB DEVELOPER
        </div>
      </div>
      <div className="project-wrapper" ref={projectWrapper}>
        <div className="body-shade-top" ref={projectShadeTop}></div>
        <div
          className="project-container"
          onScroll={handleOnScrollProjects}
          ref={projectContainer}
          onMouseMove={(e) => handleOnMouseMoveProject(e)}
        >
          {projects.map((project, index) => {
            return (
              <div
                data-id={project.id}
                className={project.class}
                key={index}
                ref={(e) => (projectRef.current[index] = e)}
              >
                <div className="project-border"></div>
                <div className="project-content"></div>
              </div>
            );
          })}
        </div>
        <div className="body-shade-bottom" ref={projectShadeBottom}></div>
      </div>
      <div className="about-wrapper" ref={aboutWrapper}>
        ABOUT ME
      </div>
      <div className="contact-wrapper"></div>
      <div className="resume-wrapper"></div>
      {/* <div className="scroll-tracker" ref={scrollTracker}></div> */}
      <div className="nav">
        <div className="nav-container" ref={nav}>
          {navs.map((nav, index) => {
            return (
              <div
                id={index}
                key={index}
                className="nav-link"
                onClick={(e) => handleOnClickNav(e)}
                onMouseEnter={(e) => handleOnHoverNav(e)}
                onMouseLeave={(e) => handleOnUnHoverNav(e)}
                ref={(e) => (navRef[index] = e)}
              >
                {nav}
              </div>
            );
          })}
          <div className="social-links">
            <a href="https://github.com/Junmarkchi97" target="_blank" id="4">
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/junmarkchi/"
              target="_blank"
              id="5"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <div className="hover-dot"></div>
          <div className="clicked"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
