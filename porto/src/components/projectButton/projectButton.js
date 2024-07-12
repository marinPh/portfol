import React from 'react';
import { Link } from 'react-router-dom'

function ProjectButton(props) {

    return (
        <div
            className="project-button"
            
        >
            <Link to={`/project/${props.id}`}>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </Link>
        </div>
    );
};

export default ProjectButton;