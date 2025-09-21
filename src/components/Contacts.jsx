import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contacts(){
    return(
        <div className="contacts">
            <h1>Sheila Susan</h1>
            <p className="title">Frontend Developer</p>
            <a 
                href="mailto:sheilasusan175@gmail.com"
                className="email"
            >
                <FaEnvelope className="about-icon"/>
                Email
            </a>
            <a 
                href="https://www.linkedin.com/in/sheila-susan-14111a2b8/" 
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin"
            >
                <FaLinkedin className="about-icon"/>
                Linked In
            </a>
        </div>
    )
}