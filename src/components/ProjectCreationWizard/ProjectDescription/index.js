import React from 'react';
import { Typography, TextareaAutosize, InputLabel } from '@mui/material';
import './style.css'


const ProjectDescription =({formData, onChange})=>{
    const handleChange =(event)=>{
        onChange('description',event.target.value)
        console.log(formData);
    };


    return(
        <Typography variant="body1">
        <InputLabel htmlFor="project-description">Project Description:</InputLabel>
        <TextareaAutosize
                className = 'project-description'
                value={formData.description}
                onChange={handleChange}
                minRows={3} // Optional: specify minimum number of rows
                maxRows={10} // Optional: specify maximum number of rows
            />
    </Typography>
    )
}
export default ProjectDescription;