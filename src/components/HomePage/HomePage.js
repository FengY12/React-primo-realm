import React, {useContext, useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../contact/contact';
import { gsap } from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger";
import { CSSRulePlugin } from 'gsap/all';


import ScrollMagic from 'scrollmagic';
import { LoadContext } from '../Utils/LoadContext';


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);

export default function HomPage() {

  const { load, setLoad } = useContext(LoadContext);


  const [clicked, setclick] = useState(0);

  useEffect(() => {
    var rule = CSSRulePlugin.getRule(".welcome-title:before")
    var scrollBar = CSSRulePlugin.getRule("::-webkit-scrollbar")
    var subWelcomText = CSSRulePlugin.getRule("#sub-welcome-title::before")

    

/*
    gsap.to(rule, {
        width: "0%",
        duration:0.8,
      delay:1.5});
*/


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
        duration:1.2
    }, "-=0.5").to(".load", {
      autoAlpha:0,
      duration:2
    }, "-=0.5").to(rule, {
      width: "0%",
      duration:0.8,
    }, "-=1.6").to(subWelcomText, {
        width:"0%",
        duration:0.5
    }, "-=1.2").to(scrollBar, {
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
  


document.getElementById("load").onclick = () => {
 
  if (clicked === 0) {
    setclick(1)
    tl.totalProgress(0.6)

  }
}

if (load) {
  timeline()
} else {
  tl.set([".splashLogo", ".load"],{
    autoAlpha:0
  }).set(".nav-bar", {
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
   console.log("playing")
 timeline()
} else {
  timelineSet()
}
*/

    

//Only Renders when "clicked" sate changes
}, [clicked])

useEffect(() => {

  var controller = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene().setPin(".load").addTo(controller);

  var tl3 = gsap.timeline()
  tl3.fromTo("#main-body", { 
    autoAlpha: 0,
    y:-100
  }, {
    y:0,
    autoAlpha:1,
    duration:2,
    delay:2,
  }).fromTo(["#landing-Left_top", "#landing-Right_top"], {
      autoAlpha:0,
      y:20
  }, {
    y:0,
    autoAlpha:1,
    duration:1,
  }, "-=2").fromTo(["#landing-Left_bot", "#landing-Right_bot"], {
      autoAlpha:0,
      y:200
  }, {
    stagger: {
      amount:0.2
    },
    y:0,
    autoAlpha:1,
    duration:1,
  }, "-=1.5")

  var tl2 = gsap.timeline({paused:true})
/*
  tl2.from(["#landing-Left_top", "#landing-Right_top"], {
    y:-20,
    duration:1
    
}).to(["#landing-Left_top", "#landing-Right_top"], {
    y:-20,
    duration:1,
    ease:"sine.inOut"
}).repeat(-1).yoyo(true)
*/

tl3.eventCallback("onComplete", function() {
  tl2.play(0);
});




},[])

  


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

