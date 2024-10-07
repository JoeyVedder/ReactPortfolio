import React from 'react';

function Project({ title, description, deployedUrl, repoUrl }) {
    return (
        <div className='project'>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={deployedUrl} target="_blank" rel="noopener noreferrer">Deployed App</a>
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
    );
}

export default Project;
