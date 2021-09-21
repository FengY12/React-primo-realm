import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, {useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../contact/contact';
import { gsap } from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger";
import { CSSRulePlugin } from 'gsap/all';


import ScrollMagic from 'scrollmagic';


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);

export default function HomPage() {

  const [clicked, setclick] = useState(0);

  useEffect(() => {
    var rule = CSSRulePlugin.getRule(".welcome-title:before")
    var scrollBar = CSSRulePlugin.getRule("::-webkit-scrollbar")

    

/*
    gsap.to(rule, {
        width: "0%",
        duration:0.8,
      delay:1.5});
*/

var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene().setPin(".load").addTo(controller);


var tl = gsap.timeline()

function timeline() {
    tl.set(scrollBar, {
      display:"none"
    }).from(".splashLogo", {
      y:-100,
      autoAlpha:0,
      duration:2
    }).to(".splashLogo", {
      transformOrigin:"center",
        scale:100,
        ease: "expo.out",
        duration:1
    }).to(".load", {
      autoAlpha:0,
      duration:2
    }, "-=0.5").to(rule, {
      width: "0%",
      duration:0.8,
    }, "-=2").to(scrollBar, {
      display:"block"
    }, "=-1").set(".nav-bar", {
      display:"flex",
    }, "-=1").to(".nav-items", {
      stagger: {
        amount:1
      },
        opacity:1,
        
    }, "-=1");

  } 
  
  /*
    if (window.scrollY===0) {
      window.scrollTo(0, 0);
      tl.play(0);
 }*/
document.getElementById("load").onclick = () => {
 
  if (clicked === 0) {
    setclick(1)
    tl.totalProgress(0.6)

  }
}


timeline()


/*
 if (window.scrollY===0) {
   console.log("playing")
 timeline()
} else {
  timelineSet()
}
*/

    

//Only Renders when "clicked" sate changes
}, [clicked])


  return (
    <>
      <Navbar />
      <Hero />
      <About />
    <Projects />
    <Contact />
    <script src="js/scrollmagic/minified/ScrollMagic.min.js"></script>

    </>

  );
}

