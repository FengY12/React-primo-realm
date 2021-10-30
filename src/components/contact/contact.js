import React, { useEffect }from 'react'
import "../contact/contact.css"
import { ReactComponent as ContactSvg } from '../../assets/PrimoRealm_Contact.svg';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactComponent as EmailSvg } from '../../assets/contactLogo/email_logo.svg';
import { ReactComponent as GitHubSvg } from '../../assets/contactLogo/GitHub_logo.svg';
import { ReactComponent as LinkedinSvg } from '../../assets/contactLogo/Linkedin_logo.svg';
import test from "../../assets/contactLogo/GitHub_logo.svg";


gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    var email = "mailto:wz345@drexel.edu"
    var Linkedin = "https://www.linkedin.com/in/wenfeng-zhong-22bb061ba/"
    var Github = "https://github.com/Fengyzh"
    
    useEffect(() => {

        gsap.fromTo("#contact-logo", {
            rotate:0,
            x:0
        },{
            scrollTrigger: {
                trigger: ".contact-section",
                toggleActions: "restart none none reverse",
                start: "top center"
            },
            rotate: -50,
            x:"-50%",
            ease: "power1.out",
            duration:2});

    }, [])



    return(
        <div className="contact-section" id="contact">
            <h1 id="background-title"> Contact </h1>


            <div className="contact-content">
                <h1 id="contact-title">Me</h1>

                <div className="contact-box" onClick={() => window.open(email)}>
                    <div className="contact-section-titles">Email</div>
                    <div className="contact-btn"> <EmailSvg className="contact-btn-logo" id="email-svg"/> </div>
                </div>

                <div className="contact-box" onClick={() => window.location.href = Linkedin}>
                    <div className="contact-section-titles" >Linkedin</div>
                    <div className="contact-btn" > <LinkedinSvg className="contact-btn-logo"/> </div>
                </div>
                
                <div className="contact-box" onClick={() => window.location.href = Github}>
                    <div className="contact-section-titles">Github</div>
                    <GitHubSvg className="contact-btn-logo" id="git-svg"/>

                </div>
            </div>

        <ContactSvg id="contact-logo"/>
               

        
        
        </div>

   
    )
}