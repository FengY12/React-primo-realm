import React from 'react';
import './ProjectItem.css';
import { Link as LinkR } from "react-router-dom"
import hero from '../Hero/Hero'

{/*export default function ProjectItem( { image, name, urlName, description }) { */}



export default function ProjectItem( {item} ) {



    return (
        <div className="project-item">
            <div id="picture" style={{backgroundImage: `url(${item.image[0]})`}}>
              
             </div>
            <div id="card-text-section">
            <h1 id="name"> {item.name} </h1>

            <div className="project-identifier">
                {item.projectType === "learn"? <p id="learning-project">Learning Project</p> : item.projectType === "personal"? <p id="personal-project">Personal Project</p>: <p id="course-project"> Course Project</p>}

            </div>


            <p id="description"> {item.cardDescription} </p>


            <LinkR to={
                {pathname: item.projectType === "learn"? '/learningproject/'+item.urlName :
                item.projectType === "personal" ? '/personalproject/'+item.urlName : '/courseproject/'+item.urlName,
        state:"hello"}} id="link"> Detail </LinkR> 
        </div>
        </div>
    )
}