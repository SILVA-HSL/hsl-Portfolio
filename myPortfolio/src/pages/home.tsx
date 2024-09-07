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
import shanukapdf from "../pages/shanuka cv final.pdf";
import My from "../pages/my.jpg";
import ContactForm from "./contactform";
import linkedin from "../pages/linkedin.png";
import github from "../pages/git.png";
import call from "../pages/call.png";
import email from "../pages/email.png";


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
    const projectSelector = document.querySelectorAll(".project-selector");
    skillCards.forEach((card) => {
      observer.observe(card);
    });

    eduCards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      skillCards.forEach((card) => observer.unobserve(card));
      eduCards.forEach((card) => observer.unobserve(card));
      projectSelector.forEach((card) => observer.unobserve(card));
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
              className="img-fluid fade-in fourth "
              style={{ borderRadius: '50px' }}
             
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
                <div className="row col-12 edu-card visible animate-from-left">
                  <div
                    className="col-12 col-lg-6 col-md-12 "
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
                  <div className="col-12 col-lg-6 col-md-12 ">
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
                <div className="row col-12 edu-card visible animate-from-right">
                  <div className="col-12 col-lg-6 col-md-12 ">
                    <img
                      src={sclpic}
                      alt="sclpic"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    className="col-12 col-lg-6 col-md-12 "
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
            className="row justify-content-center project-selector visible animate-from-right "
            style={{ marginTop: "50px" }}
          >
            <div className="col-8 ">
              <h2 className="skills-title">Projects</h2>
              <p id="my-top-skills">Projects I've Completed</p>
              <div>
              
          </div>
          <input type="radio" name="project" checked={projects === "project1"} onChange={() => setProjects("project1")}  />&nbsp;&nbsp;

          
          <input type="radio" name="project" checked={projects === "project2"} onChange={() => setProjects("project2")}  />
          

          {projects === "project1" ?<SoftwareProject /> : null}
          {projects === "project2" ? <HardwareProject /> : null}

            </div>
          </div>

          <div
            className="row justify-content-center project-selector visible animate-from-right "
            style={{ marginTop: "100px" }}
          >
            <div className="col-8">
              <h2 className="skills-title">Resume</h2>
              <p id="my-top-skills">Career Overview</p>
              <div className="resume col-lg-12 col-sm-12 col-md-12 "><em className="find-my"> Find my resume &#10140;</em> &nbsp;&nbsp;
        <a href={shanukapdf} download className="btn" id="btn-download">
          Download CV
        </a>
      </div>
            </div>
          </div>

          <div
            className="row justify-content-center getting-know visible animate-from-right"
            style={{ marginTop: "100px" }}
          >
            <div className="col-12">
             
              <p id="my-top-skills" style={{fontSize:"3em",paddingTop:'10px',color:'#074173'}}>Getting to Know Me</p>

              <div className="row visible animate-from-right">
                <div className="col-lg-4 col-md-12 col-sm-12 visible animate-from-bottom" style={{textAlign:'end'}}>
                  <img src={My} alt="shanuka" />

                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 about visible animate-from-right">
                Hi, I am Shanuka Lakshan, a dedicated and motivated undergraduate with a strong passion for the IT industry. With a solid academic foundation and a drive for continuous learning, I am eager to contribute my skills and knowledge to a dynamic work environment. I possess effective communication skills and experience in collaborative projects. I am excited about the opportunity to work as a software engineer intern, where I can further develop my technical expertise and gain valuable hands-on experience in the field. Additionally, I am enthusiastic about embracing new challenges and advancing innovative solutions to real-world problems.


                </div>

              </div>
              
            </div>
          </div>
          <div
            className="row justify-content-center contact" id="contact"
            style={{ marginTop: "1px" }}
          >
             <div className="col-12 col-lg-4 col-md-12 visible animate-from-left">
             
             <p id="my-top-skills" style={{fontSize:"3em",paddingTop:'10px',color:'#074173'}}>Contact Me</p>

            <ContactForm/>

</div>
<div className="col-12 col-lg-6 col-md-12 visible animate-form-right">
  <ul className="contact-item">
    <li><img src={email} alt="icons"/>     &nbsp;shanuka70710880@gmail.com</li>
    <li><img src={call} alt="icons" /> +94 76 900 4922</li>
    <li><img src={linkedin} alt="icons"/><a href="https://linkedin.com/in/shanuka-lakshan-53478a218" target="_blank">shanuka Lakshan</a></li>
    <li><img src={github} alt="icons"/><a href="https://github.com/SILVA-HSL" target="_blank">HSL-SILVA</a></li>
  </ul>

</div>
          </div>


        </div>
      </div>
      <footer >
        <div className="container-fluid mt-0">
          <div className="row">
            <div className="col-12">
              <center>
                
                  © 2021 Shanuka Lakshan | All rights reserved.
                  
              </center>
            </div>
            
              </div>
            </div>    
      </footer>
    </div>
  );
}

export default Home;
