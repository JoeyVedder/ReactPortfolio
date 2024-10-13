import React from 'react';

function Resume() {
    return (
        <section className="resume">
            <a href="path-to-resume.pdf" download>Download Resume</a>
            <h3>Proficiencies:</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>NodeJS</li>
                <li>Javascript</li>
                <li>React</li>
            </ul>
        </section>
    );
}

export default Resume;