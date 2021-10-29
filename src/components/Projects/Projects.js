import React from 'react';
import './Projects.css';
import { ProjectList } from "./ProjectList";
import ProjectItem from './ProjectItem';

export default function Projects() {
    return (
        <div className="projects-section" id="projects">
            <h1 id="background-title"> Projects </h1>


            <div id="contain-box">
            <h1 id="projects-title"> Projects </h1>
            <div id="projects-container">
            
                {ProjectList.map((item, key) => {
                    /* return <ProjectItem image={item.image} name={item.name} urlName = {item.urlName} description={item.description}/>*/
                    return <ProjectItem key= {key} item = {item}  />
                })}

            </div>
        </div>
        </div>
    )
}