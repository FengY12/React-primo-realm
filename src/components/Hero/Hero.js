import React, { useEffect }from 'react'
import './Hero.css'
import { gsap } from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger";
import { CSSRulePlugin } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);



export default function Hero() {

    useEffect(() => {
        var rule = CSSRulePlugin.getRule(".welcome-title:before")

        gsap.to(rule, {
            scrollTrigger: {
                trigger: "hero-section",
                toggleActions: "restart none none reverse",
                start: "top center"
            }, 
            width: "0%",
            duration:0.8});
        
    }, [])


    return (
        <div class="hero-section" id="hero">
            <h1 id="hero-title"> PRIMO REALM </h1>
            <div id="test">
            <h1 id="welcome-title" class="welcome-title"> Welcome to </h1>
            <div id="line"> </div>
            <h2 id="sub-welcome-title">Feng's Personal Website</h2>
            </div>
        </div>
    )
}
