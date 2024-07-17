// import React, { useEffect, useRef } from "react";
// import "./home.css";
// import Navbar from "../components/navbar";
// import shanuka from "../pages/my pic.jpg";
// import react from "../pages/react.png";
// import NETcore from "../pages/NET core.png";
// import bootstrap from "../pages/bootstrap.png";
// import typescript from "../pages/TypeScript.png";
// import html from "../pages/html.png";
// import css from "../pages/CSS3.png";
// import figma from "../pages/figma.png";
// import java from "../pages/java.png";
// import c from "../pages/C.png";

// function Home() {
//   const sectionsRef = useRef([]);

//   useEffect(() => {
//     const sections = sectionsRef.current;
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("visible");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     sections.forEach((section) => {
//       observer.observe(section);
//     });

//     return () => {
//       sections.forEach((section) => observer.unobserve(section));
//     };
//   }, []);

//   return (
//     <div>
//       <div className="mt-0 fixed-top">
//         <Navbar />
//       </div>

//       <div className="container-fluid d-flex justify-content-center align-items-center home-container container-spacing">
//         <div className="row justify-content-center home-content">

//           <div className="col-12 col-md-8 col-lg-4 col-xl-4 col-xxl-4 order-1 order-md-1 m-auto home-text">
//             <div className="home-inner " >
//               <h1 className="text-center fade-in first"><i>Hello, I'm Shanuka</i></h1><br/>
//               <h2 className="text-center fade-in second">Second year undergraduate @ <em style={{color:"#BE7B72"}}>University of Moratuwa</em></h2><br/>
//               <p className="text-center fade-in third">I am passionate about innovation and technology, and I develop long-term solutions to boost output while preserving the environment and the welfare of people. </p>
//             </div>
//           </div>
//           <div className="col-12 col-md-8 col-lg-4 col-xl-4 col-xxl-4 order-2 order-md-2 m-auto home-image ">
//             <img src={shanuka} alt="Shanuka" className="img-fluid fade-in fourth rounded" />
//           </div>
//         </div>
//         </div>

//          <div id="about" className="container-fluid about-section container-spacing">
//         <div className="row justify-content-center home-content">
//           <div className="col-8">
//             <h2 className="skills-title">Skills
//               <br/>
//               <p id="my-top-skills">My Top Skills</p>

//             </h2>
//             <div className="row">
//               <div className="col-12 col-md-6 col-lg-4 col-sm-12">
//                 <div className="skill-card">
//                   <img src={react} alt="react" />
//                 <h4>ReactJs</h4>
//                   <p>Javascript library for UI</p>
//                 </div>
//               </div>
//               <div className="col-12 col-md-6 col-lg-4 col-sm-12">
//                 <div className="skill-card ">
//                   <img src={NETcore} alt="aspnet" />
//                   <h4>Asp.Net Core</h4>
//                   <p>Versatile framework for building high-performance web applications</p>
//                 </div>
//               </div>
//               <div className="col-12 col-md-6 col-lg-4 col-sm-12">
//                 <div className="skill-card">
//                   <img src={bootstrap} alt="bootstrap" />
//                   <h4>Bootstrap</h4>
//                   <p>Front-end framework for building responsive web pages</p>
//                 </div>
//               </div>
//               <div className="col-12 col-md-6 col-lg-4 col-sm-12">
//                 <div className="skill-card">
//                   <img src={typescript} alt="typescript" />
//                   <h4>TypeScript</h4>
//                   <p>Dynamic scripting language for web</p>
//                 </div>
//               </div>
//               <div className="col-12 col-md-6 col-lg-4 col-sm-12">
//                 <div className="skill-card ">
//                   <img src={html} alt="html" />
//                   <h4>HTML</h4>
//                   <p>Markup language for web development</p>
//                 </div>
//               </div>
//               <div className="col-12 col-md-6 col-lg-4 col-sm-12">
//                 <div className="skill-card ">
//                   <img src={css} alt="css" />
//                   <h4>CSS</h4>
//                   <p>Styling for web pages</p>
//                 </div>
//               </div>
//               <div className="col-12 col-md-6 col-lg-4 col-sm-12">
//                 <div className="skill-card ">
//                   <img src={figma} alt="figma" />
//                   <h4>Figma</h4>
//                   <p>Collaborative design and prototyping</p>
//                 </div>
//               </div>
//               <div className="col-12 col-md-6 col-lg-4 col-sm-12">
//                 <div className="skill-card ">
//                   <img src={java} alt="java" />
//                   <h4>Java</h4>
//                   <p>Widely-used versatile programming language</p>
//                 </div>
//               </div>
//               <div className="col-12 col-md-6 col-lg-4 col-sm-12">
//                 <div className="skill-card ">
//                   <img src={c} alt="c" />
//                   <h4>C</h4>
//                   <p>Efficient and versatile programming</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import Navbar from "../components/navbar";
import shanuka from "../pages/my pic.jpg";
import react from "../pages/react.png";
import NETcore from "../pages/NET core.png";
import bootstrap from "../pages/bootstrap.png";
import typescript from "../pages/TypeScript.png";
import html from "../pages/html.png";
import css from "../pages/CSS3.png";
import figma from "../pages/figma.png";
import java from "../pages/java.png";
import c from "../pages/C.png";
import unipic from "../pages/unipic.jpg";
import sclpic from "../pages/sclpic.jpg";
import SoftwareProject from "./softwareproject";
import HardwareProject from "./hardwareproject";




function Home() {
  const skillCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [projects, setProjects] = useState("project1");


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillCards = document.querySelectorAll(".skill-card");
    const eduCards = document.querySelectorAll(".edu-card");
    skillCards.forEach((card) => {
      observer.observe(card);
    });

    eduCards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      skillCards.forEach((card) => observer.unobserve(card));
      eduCards.forEach((card) => observer.unobserve(card));
    };
  }, []);

 
  return (
    <div>
      <div className="mt-0 fixed-top">
        <Navbar />
      </div>

      <div className="container-fluid d-flex justify-content-center align-items-center home-container container-spacing">
        <div className="row justify-content-center home-content">
          <div className="col-12 col-md-8 col-lg-4 col-xl-4 col-xxl-4 order-1 order-md-1 m-auto home-text">
            <div className="home-inner">
              <h1 className="text-center fade-in first">
                <i>Hello, I'm Shanuka</i>
              </h1>
              <br />
              <h2 className="text-center fade-in second">
                Second year undergraduate @{" "}
                <em style={{ color: "#BE7B72" }}>University of Moratuwa</em>
              </h2>
              <br />
              <p className="text-center fade-in third">
                I am passionate about innovation and technology, and I develop
                long-term solutions to boost output while preserving the
                environment and the welfare of people.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-4 col-xl-4 col-xxl-4 order-2 order-md-2 m-auto home-image">
            <img
              src={shanuka}
              alt="Shanuka"
              className="img-fluid fade-in fourth rounded"
            />
          </div>
        </div>
      </div>

      <div
        id="about"
        className="container-fluid about-section container-spacing"
      >
        <div className="row justify-content-center home-content">
          <div className="col-8">
            <h2 className="skills-title">
              Skills
              <br />
              <p id="my-top-skills">My Top Skills</p>
            </h2>
            <div className="row">
              {[
                {
                  src: react,
                  alt: "react",
                  title: "ReactJs",
                  description: "Javascript library for UI",
                },
                {
                  src: NETcore,
                  alt: "aspnet",
                  title: "Asp.Net Core",
                  description:
                    "Versatile framework for building high-performance web applications",
                },
                {
                  src: bootstrap,
                  alt: "bootstrap",
                  title: "Bootstrap",
                  description:
                    "Front-end framework for building responsive web pages",
                },
                {
                  src: typescript,
                  alt: "typescript",
                  title: "TypeScript",
                  description: "Dynamic scripting language for web",
                },
                {
                  src: html,
                  alt: "html",
                  title: "HTML",
                  description: "Markup language for web development",
                },
                {
                  src: css,
                  alt: "css",
                  title: "CSS",
                  description: "Styling for web pages",
                },
                {
                  src: figma,
                  alt: "figma",
                  title: "Figma",
                  description: "Collaborative design and prototyping",
                },
                {
                  src: java,
                  alt: "java",
                  title: "Java",
                  description: "Widely-used versatile programming language",
                },
                {
                  src: c,
                  alt: "c",
                  title: "C",
                  description: "Efficient and versatile programming",
                },
              ].map((skill, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4 col-sm-12">
                  <div
                    className="skill-card"
                    ref={(el) => (skillCardsRef.current[index] = el)}
                  >
                    <img src={skill.src} alt={skill.alt} />
                    <h4>{skill.title}</h4>
                    <p>{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="row justify-content-center "
            style={{ marginTop: "50px" }}
          >
            <div className="col-8 ">
              <h2 className="skills-title">Education</h2>
              <div className="row">
                <div className="row col-12 edu-card visible">
                  <div
                    className="col-6 col-lg-6 col-md-12 "
                    style={{ padding: "2%", textAlign: "center" }}
                  >
                    <h4>University of Moratuwa</h4>
                    <p>
                      Currently following a BSc.(Hons) in Information Technolgy,
                      <a
                        href="https://uom.lk/"
                        target="_blank"
                        style={{ border: "none", color: "#BE7B72" }}
                      >
                        University of Moratuwa
                      </a>
                      ,Sri Lanka
                    </p>
                  </div>
                  <div className="col-6 col-lg-6 col-md-12 ">
                    <img
                      src={unipic}
                      alt="unipic"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                </div>
                <br />
                <br />
                <br />
                <div className="row col-12 edu-card visible">
                  <div className="col-6 col-lg-6 col-md-12 ">
                    <img
                      src={sclpic}
                      alt="sclpic"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="col-6 col-lg-6 col-md-12 "
                    style={{ padding: "2%", textAlign: "center" }}
                  >
                    <h4>Lumbini College</h4>
                    <p>
                      I did my AL's in Maths stream at{" "}
                      <a
                        href="http://www.lumbini.sch.lk/"
                        target="_blank"
                        style={{ border: "none" }}
                      >
                        Lumbini College
                      </a>
                      . I obtained A pass for Combined Maths and B passes for
                      Physics and ICT.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="row justify-content-center project-selector "
            style={{ marginTop: "50px" }}
          >
            <div className="col-8 ">
              <h2 className="skills-title">Projects</h2>
              <div>
              
          </div>
          <input type="radio" name="project" id="project1" checked={projects === "project1"} onChange={() => setProjects("project1")} />
          <input type="radio" name="project" id="project2" checked={projects === "project2"} onChange={() => setProjects("project2")} />

          {projects === "project1" ?<SoftwareProject /> : null}
          {projects === "project2" ? <HardwareProject /> : null}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
