import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { ProjectList } from '../Projects/ProjectList';
import './personalProjects.css';
import Icons  from '../../assets/assets';
import { IconExist } from '../../assets/assets';
import ProjectNotFound from '../errorPage/projectNotFound';
import { gsap } from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger";
import { CSSRulePlugin } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);



export default function PProject(props) {
    let history = useHistory();
    var des = "";
    var img = [];
    var name;
    var techUsed = [];

    useEffect(() => {

        var rule = CSSRulePlugin.getRule("#description-title:before")

        gsap.to(rule, {
            scrollTrigger: {
                trigger: "#content-container",
                toggleActions: "restart reset none reverse",
                start: "top center"
            }, 
            width: "0%",
            duration:0.8});
        
        gsap.from(".skill", {
            scrollTrigger: {
                trigger: ".skills-container",
                toggleActions: "play reset none reverse",
                start: "top center"
            }, 
            opacity: "0",
            y:"20px",
            duration:0.8}
        )

        gsap.from(".tech-used", {
            scrollTrigger: {
                trigger: ".technology-used-container",
                toggleActions: "play reset none reverse",
                start: "bottom 100%"
            }, 
            opacity: "0",
            y:"15px",
            duration:0.8
        })
        

        gsap.to("#git-btn", {
            scrollTrigger: {
                trigger: "#content-container",
                toggleActions: "restart reset none reverse",
                start: "top center"
            }, 
            width:"300px",
            fontSize:"1.5rem",
           
        })
        
        window.scrollTo(0, 0)

      }, [])


    
    function isType() {
        console.log(props)
        for (let x of ProjectList) {
            if (x.urlName == props.match.params.name && x.projectType=="personal") {
                return true
            
            }
        }
        return false
    }


    for (let x of ProjectList) {
        if (x.urlName == props.match.params.name && x.projectType=="personal") {
            name = x.name
            des = x.description
            img = x.image
            techUsed = x.technologiesUsed

        }
    }



    return (
        <div class="LProject-page">
            <div id="nav-bar">
            <button id="back-btn" onClick={() => history.goBack()}>Back</button>
            <a id="home-btn"href="/">Home</a>
            </div>
            {isType()?
            <div id="content-container">
            <div id="img-container">
                {img.map(ig => (
            <img src={ig}></img>
            ))
        }
            </div>

        <div class="text-section">
            {isType()? <div class="title-section"><h1 id="project-title"> {name} </h1> <button id="git-btn"> View on GitHub </button></div>: <h1 id="project-title">No Project Found</h1>}
        {/*
            <h1 id="project-title"> {isEmpty()? name : "No Project Found"} </h1>
        */}


            <div class="description-container">
                <h2 class="titles" id="description-title">Description</h2>
                <p id="project-description">{des}</p>
            </div>
            
            <div class="technology-used-container">
                <h2 class="titles"> Technologies Used </h2>
                {techUsed.map(tech => (
                    <div class="tech-used-container">
                 <p class="tech-used"> - {tech} {IconExist(tech)? <img class="icons"src={Icons(tech)}></img> : ""} </p>
                 </div>
                ))
                }
            </div>



            <footer>

            </footer>


            </div>
            </div>: <ProjectNotFound />}
        </div>




    )


}