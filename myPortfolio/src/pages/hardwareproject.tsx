import React from "react";
// import "./softwareproject.css";
import "./hardwareproject.css";
import project_video from "../pages/project_video.mp4";


const HardwareProject = () => {
  return (
    <div className="softwareproject container hardware">
      <div className="row">
        <div className="col-12 col-lg-6 col-md-12">
          <h1>Hardware Project</h1>
          <p id="my-top-skills">Automated Batik Wax Printing Machine</p>
          <p>
          In this project, we developed a batik wax printing machine. That is
used to draw the batik pattern by using batik wax. Any art can be
drawn through the inscape software. The coordinates are feed
through the software and CNC motor drivers work accordingly and
place the injector header to correct position. This is a replacement for
human involvement in the drawing phase.
          </p>
        </div>
        <div className="col-12 col-lg-6 col-md-12 ">
          <video width="100%" height="100%" controls  style={{borderRadius:"30px"}}>
            <source src={project_video} type="video/mp4" />
          </video>
        
        </div>
      </div>
    </div>
  );
};
export default HardwareProject;
