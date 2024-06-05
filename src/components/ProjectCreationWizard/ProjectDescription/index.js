import React from 'react';
import { Typography, TextareaAutosize } from '@mui/material';


const ProjectDescription =({formData, onChange})=>{
    const handleChange =(event)=>{
        onChange('description',event.target.value)
    };


    return(
        <Typography variant="body1">
        <label>Give a small project description:</label>
        <TextareaAutosize
                value={formData.description}
                onChange={handleChange}
                minRows={3} // Optional: specify minimum number of rows
                maxRows={10} // Optional: specify maximum number of rows
            />
    </Typography>
    )
}
export default ProjectDescription;