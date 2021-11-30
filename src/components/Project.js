import { useState } from "react";
import {projectsData} from '../data/projectsData';

const Project = (props) => {
    const [currentProject] =  useState(projectsData);
    const project = currentProject[props.projectNumber]

    // random background circle
    let left = Math.floor(Math.random() * 200 + 700) + "px";
    let top = Math.floor(Math.random() * 200 + 150) + "px";
    let size = "scale(" + (Math.random() + 0.7) + ")";
    return (
      <div className="project-main">
        <div className="project-content">
            <h1>{project.title} </h1>
            <p>{project.date}</p>
            <ul className="languages">
                {project.languages.map((item) => {
                    return <li key={item}>{item}</li>
                })}
            </ul>
        </div>
          <div className="img-content">
            <div className="img-container hover">
                <span> 
                <h3>{project.title} </h3>
                <p>{project.infos}</p>
                </span>
                <img src={project.img} alt={project.title} />
            </div>
            <div className="button-container">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover">
                       <span className="button">voir le site</span>
                </a>
            </div>
          </div>
          <span className="random-circle" style={{left, top, transform:size}} > </span>
      </div>
    );
  }
  
  export default Project;
  