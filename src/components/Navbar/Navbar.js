import React, { useEffect }from 'react'
import './Navbar.css'
import { Link as LinkR } from "react-router-dom"
import { Link, animationScroll as scroll } from "react-scroll";
import { ReactComponent as YourSvg } from '../../assets/la.svg';
import { gsap } from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function Navbar() {
    useEffect(() => {


    var tl = gsap.timeline()
   
    /*
    tl.to(".nav-items", {
        stagger:0.3,
        opacity:1,
        duration:0.5,
        
    })
*/
/*
gsap.to(".nav-container", {
    scrollTrigger: {
        trigger: ".about-section",
        toggleActions: "play none none reverse",
        start: "top center",
        
    },
    width: "50%", 
    borderRadius:"50px",
    duration:1});

*/
/*
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-section",
        toggleActions: "play complete reverse reverse",
        start: "top center"
    }});


    tl.fromTo(".nav-container", {
        width: "95%",
        
        },
        {
        backgroundColor:"black" ,
        width: "20%",
        borderRadius:"50px",
        duration:0.8
    })
/*
    tl.fromTo(".nav-list", {
        margin: "auto"
    }, {margin:"10%"})
    
    tl.to("#nav-about", {
        opacity:0,
        duration:"0.1"
    }, "-=1")

    tl.set("#nav-about", {
        text:"A",
    },"-=0.5")

    tl.to("#nav-about", {
        opacity:1,
        duration:"0.1"
    }, "<+0.3")
*/
    }, [])



    return (

        <nav class="nav-bar">
        <div class="nav-container">
           <Link 
                class="logo nav-items" 
                to="hero"
                smooth={true}
                offset={0}
                duration={500}>
           <YourSvg class="logo-pic"/>
           
           </Link> 
           
           
           

           <ul class="nav-list">
               <li class="list-item">
           <Link
           class="nav-items"
            id="nav-about"
            activeClass="active"
            to="about"
            smooth={true}
            spy={true}
            offset={0}
            duration={500}
            > About </Link>
</li>

               
                {/* <li>
                    <LinkR class="nav-item" to="/about">About</LinkR> 
                </li> */}
                <li class="list-item">
                <Link
            class="nav-items"
            id="nav-projects"
            activeClass="active"
            to="projects"
            smooth={true}
            spy={true}
            offset={0}
            duration={500}
            > Projects </Link>
                </li>

                <li class="list-item">
                <Link
            class="nav-items"
            id="nav-contact"
            activeClass="active"
            to="contact"
            smooth={true}
            spy={true}
            offset={0}
            duration={500}
            > Contact </Link>
                </li>



            </ul>
        </div>
        </nav>

    )
}
