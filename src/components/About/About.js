import React, { useEffect }from 'react'
import './About.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function About() {
    useEffect(() => {
        gsap.to(".about-content", {
            scrollTrigger: {
                trigger: "#content-box",
                toggleActions: "restart none none reverse",
                start: "top center"
            },
            y:-20, 
            opacity: 1,
            duration:2});
        
    }, [])

    return (
        <div class="about-section" id="about">
            <h1 class="background-title"> About </h1>


            <div id="content-box">

            <div id="title-box"> 
            <h1 id="primo-realm-title">Primo Realm </h1>

            </div>   
            <div class="text-container">
            <p class="about-content" >
                Primo Realm is my main personal website and the hub for all my personal projects. 
                The website is built with React.JS along with CSS styling. All graphics shown
                in the website are custom made SVGs. The incentive of creating Primo Realm was to not only
                have a place where I can display all my creations and share them with the public, but also
                a testament on what kind of website I can make from scratch.
                
            </p>
            </div>
            <h1 id="about-me-title">Me</h1>

            <div class="text-container">
            <p class="about-content">
                Hello everyone, My name is Feng, I am a Pre-Junior in Drexel University major in Software Engineering.
                I have a strong interest in new techlogies and I am always curious to discover and learn about new
                ideas for the present and the future. Other than coding, I am also interested in creating vector designs
                and 3D models, because it is satisfying to be able to create something from myself.

            </p>
        
            </div>


            </div>
        </div>
    )
}
