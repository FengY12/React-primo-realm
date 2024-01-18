import React, { useEffect }from 'react'
import './About.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function About() {
    useEffect(() => {
        gsap.fromTo("#primo-about-content", {
            y:20,
            opacity:0
        },{
            scrollTrigger: {
                trigger: "#primo-realm-title",
                toggleActions: "restart none none reverse",
                start: "top 80%"
            },
            y:-20, 
            opacity: 1,
            ease: "power1.out",
            duration:2});
            
        gsap.fromTo("#personal-about-content", {
            y:20,
            opacity:0
        },{
            scrollTrigger: {
                trigger: "#about-me-title",
                toggleActions: "restart none none reverse",
                start: "top center"
            },
            y:-20, 
            opacity: 1,
            duration:2,
            ease: "power1.out"
        })

        

    }, [])

    return (
        <div className="about-section" id="about">
            <h1 className="about-background-title"> About </h1>


            <div id="content-box">

            <h1 id="about-me-title">Me</h1>

            <div className="text-container">
            <p className="about-content" id="personal-about-content">
                Hello, my name is Feng, I am a Pre-Junior in Drexel University majoring in Software Engineering.
                In addition to having a strong interest in new technologies, I am always curious to discover and learn about new
                ideas for the future as well. Besides coding, I am also interested in creating vector designs
                and 3D models, because it feels accomplishing to be able to create something by myself.

            </p>
        
            </div>



            <div id="title-box">
            <h1 id="primo-realm-title">Primo Realm </h1>

            </div>   
            <div className="text-container">
            <p className="about-content" id="primo-about-content">
                Welcome to Primo Realm! Primo Realm is my main personal website and the hub for all my personal projects. 
                The website is built with React.JS and other JavaScript libraries such as GSAP for animation. The purpose of creating Primo Realm was to not only
                have a place to display all my projects, but also
                a testament to the kind of websites I can make from scratch.
                
            </p>
            </div>
            
            </div>
        </div>
    )
}
