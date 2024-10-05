import React from 'react';
import Project from '../components/Project';

function Portfolio() {
    const projects = [
        {title: 'Project 1', deployedUrl: '#', repoUrl: '#' },
        {title: 'Project 2', deployedUrl: '#', repoUrl: '#' },
        {title: 'Project 3', deployedUrl: '#', repoUrl: '#' },
        {title: 'Project 4', deployedUrl: '#', repoUrl: '#' },
        {title: 'Project 5', deployedUrl: '#', repoUrl: '#' },
        {title: 'Project 6', deployedUrl: '#', repoUrl: '#' },
    ];

    return (
        <section className="portfolio">
            {projects.map((project, index) => (
                <Project
                key={index}
                title={project.title}
                deployedUrl={project.deployedUrl}
                repoUrl={project.repoUrl}
                />
            ))}
        </section>
    );
}

export default Portfolio;