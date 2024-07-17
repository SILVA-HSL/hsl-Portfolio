import React from "react";
import "./softwareproject.css";
import project_video from "../pages/sp_pic.png";

const SoftwareProject = () => {
  return (
    <div className="softwareproject container">
      <div className="row">
        <div className="col-12 col-lg-6 col-md-12">
          <h1>Software Project</h1>
          <p id="my-top-skills">Public Transport E-Ticketing System</p>
          <p>
            This project created a user-friendly web application for Sri Lanka's
            public transport. Users can search for and reserve seats on trains
            and buses, track them live, get emergency updates, and schedule
            services. It also registers vehicles and drivers, enhancing
            commuting reliability and convenience.
          </p>
        </div>
        <div className="col-12 col-lg-6 col-md-12">
          {/* <video width="100%" height="100%" controls>
            <source src={project_video} type="video/mp4" />
          </video> */}
          <img src={project_video} alt="project_pic" />
        </div>
      </div>
    </div>
  );
};
export default SoftwareProject;
