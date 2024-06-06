// ProjectsSection.js
import React from 'react';

const UserProjects = ({ userProjects, projects }) => {
  const userProjectsData = userProjects.map((projectId) =>
    projects.find((project) => project.id === projectId)
  );

  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <ul>
        {userProjectsData.map((project) => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProjects;