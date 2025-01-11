import React, { useState } from 'react';
import Project from '../components/Project';

function Portfolio() {
    const projectsByCategory = {
        Gaming: [
            {
                title: '4096',
                deployedUrl: 'https://joeyvedder.github.io/4096/',
                repoUrl: 'https://github.com/JoeyVedder/4096',
                description: 'Group Project, I mainly worked on the CSS along with the CSS framework Bootstrap I also worked on the HTML. It is a fun puzzle number matching game, where you combine tiles to try to get to 4096.'
            },
            {
                title: 'Phasmophobia Cheat Sheet',
                deployedUrl: '', // No deployed site yet
                repoUrl: 'https://github.com/JoeyVedder/PhasmoCheatSheet',
                description: 'This is a project I decided to work on once my friends and I started playing Phasmophobia. It is a cheat sheet that helps you find out what type of ghost you are dealing with, and what evidence you need to find it.'
            }
        ],
        "Command-Line Tools": [
            {
                title: 'Employee Tracker',
                repoUrl: 'https://github.com/JoeyVedder/employeetracker',
                description: 'This is a command-line application using NodeJS. This application allows you to look at the existing employees, departments, and roles. You can customize it so you can have your own employees, roles, and departments as well.'
            },
            {
                title: 'Vehicle Builder',
                repoUrl: 'https://github.com/JoeyVedder/VehicleBuilder',
                description: 'This is a command-line application using NodeJS. It allows you to pick from existing cars or motorcycles, or build your dream vehicle. Can customize the exterior and interior of your vehicle choice.'
            },
            {
                title: 'README Autogenerator',
                repoUrl: 'https://github.com/JoeyVedder/README-autogeneration',
                description: 'This is a command-line application that allows the user or client to generate a professional style README.'
            },
        ],
        "Client Websites": [
            {
                title: 'Mimis Sweets',
                deployedUrl: '', // No deployed site yet
                repoUrl: 'https://github.com/JoeyVedder/mimissweets',
                description: 'A Client asked for me to make her a bakery website. Will add an order form, menu, and an About Me of the client, among other a ton of other features.'
            },
        ],
        "Future Deployments": [
            {
               title: 'Pix2Print',
               deployedUrl: 'https://pix2print.onrender.com/',
               repoUrl: 'https://github.com/IanStocker02/pix2print',
               description: 'A group project that me and my team decided we wanted to take further. We are going to add more features like subscriptions, and the ability to have better quality options. I mainly worked on the frontend which includes, TypeScript, React, and CSS.'
            },
        ],
    };

    const [openCategory, setOpenCategory] = useState(null);

    const toggleCategory = (category) => {
        setOpenCategory(openCategory === category ? null : category);
    };

    return (
        <section className="portfolio">
            <p style={{ fontSize: '1.2rem', marginBottom: '1rem', textAlign: 'center', color: '#7df6dc' }}>
                Click on a category below to view its projects.
            </p>
            {Object.entries(projectsByCategory).map(([category, projects]) => (
                <div key={category} className="category-folder">
                    <h2 
                        onClick={() => toggleCategory(category)} 
                        style={{ 
                            cursor: 'pointer', 
                            color: openCategory === category ? 'blue' : 'black',
                            textShadow: openCategory === category ? '0 0 10px rgba(0, 123, 255, 0.8)' : 'none',
                            transition: 'text-shadow 0.3s ease-in-out'
                        }}
                    >
                        {category}
                    </h2>
                    {openCategory === category && (
                        <div className="projects-list">
                            {projects.map((project, index) => (
                                <Project
                                    key={index}
                                    title={project.title}
                                    description={project.description}
                                    deployedUrl={project.deployedUrl}
                                    repoUrl={project.repoUrl}
                                />
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </section>
    );
}

export default Portfolio;
