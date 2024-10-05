import React from 'react';

function Project ({ title, deployedUrl, repoUrl }) {
    return (
        <div className='project'>
            <h3>{placeholdertitle}</h3>
            <a href={deployedUrl} target="_blank" rel="noopener noreferrer">Deployed App</a>
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>  
            </div>
    );
}

export default Project;