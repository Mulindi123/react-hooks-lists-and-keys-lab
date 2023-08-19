import React from "react";



function ProjectItem({ project }) {
  //console.log("ProjectItem props:", project);
  return (
    <div className="project-item" >
      <h4 name ={project.myName}>{project.name}</h4>
      <p about={project.about}>{project.about}</p>
      <div className="technologies" >
       { project.technologies.map((technology, index)=>(
        <span key={index} technology={technology} >{technology}</span>
       ))}
    

      </div>
    </div>
  );
}

export default ProjectItem;
