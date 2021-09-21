import React, { useEffect }from 'react'
import './Hero.css'
import { gsap } from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger";
import { CSSRulePlugin } from 'gsap/all';
import { ReactComponent as SplashSvg } from '../../assets/PrimoRealm.svg';
import { ReactComponent as LandingSvg } from '../../assets/PrimoRealmLanding.svg'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);



export default function Hero() {

    useEffect(() => {
        var rule = CSSRulePlugin.getRule(".welcome-title:before")
/*
        gsap.to(rule, {
            scrollTrigger: {
                trigger: "hero-section",
                toggleActions: "restart none none reverse",
                start: "top center"
            }, 
            width: "0%",
            duration:0.8});
*/


        var tl2 = gsap.timeline()
        tl2.from(["#landing-Left_top", "#landing-Right_top"], {
           y:-20,
           duration:1
           
        }).to(["#landing-Left_top", "#landing-Right_top"], {
            y:-20,
            duration:1,
            ease:"sine.inOut"
        }).repeat(-1).yoyo(true)


        
    }, [])


    return (
        <div class="hero-section" id="hero">
            <div class="load" id="load">
            <SplashSvg className="splashLogo"/>
            {/*<h1 id="load-title">
                AOD
                <SplashSvg class="splashLogo"/>
    </h1>*/}
        </div>
            <LandingSvg class="landing-logo"/>
            <h1 id="hero-title"> PRIMO REALM </h1>
            <div id="test">
            <h1 id="welcome-title" class="welcome-title"> Welcome to </h1>
            <div id="line"> </div>
            <h2 id="sub-welcome-title">Feng's Personal Website</h2>
            </div>
            
        </div>
    )
}
