import React, { useEffect }from 'react'
import "../contact/contact.css"

export default function Contact() {
    var email = "mailto:wz345@drexel.edu"
    var Linkedin = "https://www.linkedin.com/in/wenfeng-zhong-22bb061ba/"



    return(
        <div class="contact-section" id="contact">
            <h1 id="background-title"> Contact </h1>


            <div class="contact-content">
                <h1 id="contact-title">Me</h1>

                <div class="contact-box">
                    <div id="email-title">Email</div>
                    <div class="contact-btn" onClick={() => window.open(email)}> I </div>
                </div>

                <div class="contact-box">
                    <div>Linkedin</div>
                    <div class="contact-btn" onClick={() => window.location.href = Linkedin}> I </div>
                </div>
                
                <div class="contact-box">
                    <div>Github</div>
                    <div class="contact-btn"> I </div>
                </div>

            </div>


        
        
        </div>

   
    )
}