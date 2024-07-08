import React from 'react';
import { Button } from '@mui/material';
import './style.css';

const ProjectDiv = ({ project,isUserLoggedIn }) => {
    const { name, description, projectInterests, projectSkills, projectState } = project;


    const handleApply = () => {
        console.log(project)
        console.log(isUserLoggedIn);
        console.log('Apply button clicked');
    };

    return (
        // <div className="projectCard">
        <div className={`projectCard ${projectState === 'IN_PROGRESS' ? 'inProgress' : ''}`}>
            <h2>{name}</h2>
            <p>{description}</p>

            <div className="projectTags">
                {/* Render project interests */}
                <p className="projectInterests">
                    Interests:
                    {projectInterests.map((interest) => (
                        <span key={interest.id}>{interest.name}</span>
                    ))}
                </p>

                {/* Render project skills */}
                <p className="projectSkills">
                    Skills:
                    {projectSkills.map((skill) => (
                        <span key={skill.id}>{skill.name}</span>
                    ))}
                </p>
            </div>

            {isUserLoggedIn && (
                <Button variant="contained" onClick={handleApply}>
                    Apply
                </Button>
            )}
        </div>
    );
};

export default ProjectDiv;
