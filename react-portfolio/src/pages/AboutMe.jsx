import React from 'react';
import joeyImage from '../images/joey.jpeg'


function AboutMe() {
    return (
        <section className="about-me">
            <img src= {joeyImage} alt="Developer" /> 
            <p>Hi, I'm Joey! I am currently a student in a coding bootcamp with a passion for learning code to climb up to be a GameDev!</p>
        </section>
    );
}

export default AboutMe;
