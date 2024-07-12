import React from 'react';

function ProjectButton(props) {
    const handleClick = () => {
        // Add your button click logic here
    };

    return (
        <div
            className="project-button"
            onClick={handleClick}
        >
            Click Me!
        </div>
    );
};

export default ProjectButton;