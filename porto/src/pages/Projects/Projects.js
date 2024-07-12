import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projectList = [
    { id: 1, title: 'Project One', icon: '🔧' },
    { id: 2, title: 'Project Two', icon: '⚙️' },
    // Add more projects as needed
  ];

  return (
    <div>
      <h1>Projects</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {projectList.map(project => (
          <div key={project.id} style={{ border: '1px solid #ccc', padding: '20px' }}>
            <h2>{project.icon} {project.title}</h2>
            <Link to={`/projects/${project.id}`}>View Project</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;