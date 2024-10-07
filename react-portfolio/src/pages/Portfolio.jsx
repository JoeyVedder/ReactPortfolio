import React from 'react';
import Project from '../components/Project';

function Portfolio() {
    const projects = [
        { 
            title: '4096', 
            deployedUrl: 'https://joeyvedder.github.io/4096/', 
            repoUrl: 'https://github.com/JoeyVedder/4096',
            description: 'Group Project, I mainly worked on the CSS along with the CSS framework Bootsrap I also worked on the HTML. It is a fun puzzle number matching game, where you combine tiles to try to get to 4096.' 
        },
        { 
            title: 'Employee Tracker', 
            repoUrl: '#',
            description: 'This is a command-line application using NodeJS. This application allows you to look at the existing employees,departments,and roles. You can customize it so you can have your own employees, roles, and departments as well.' 
        },
        { 
            title: 'Vehicle Builder', 
            repoUrl: '#',
            description: 'This is a command-line application using NodeJs. It allows you to pick from existing cars or motorcycles, or build your dream vehicle. Can customize the exterior and interior of your vehicle choice' 
        },
        { 
            title: 'Mimis Sweets', 
            repoUrl: '#',
            description: 'A Client asked for me to make her a bakery website. Will add an order form, menu, and an About Me of the client.' 
        },
        { 
            title: 'README autogenerator',  
            repoUrl: '#',
            description: 'This is a command-line application that allows the user or client to generate a professional style README.' 
        },
    ];

    return (
        <section className="portfolio">
            {projects.map((project, index) => (
                <Project
                    key={index}
                    title={project.title}
                    description={project.description}
                    deployedUrl={project.deployedUrl}
                    repoUrl={project.repoUrl}
                />
            ))}
        </section>
    );
}

export default Portfolio;
