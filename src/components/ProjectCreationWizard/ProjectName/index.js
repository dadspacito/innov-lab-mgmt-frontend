import React from 'react'
import {Typography, TextField, InputLabel} from '@mui/material';
import './Styles.css'

const ProjectName= ({formData, onChange})=>{
    const handleChange=(event)=>{
        onChange('name',event.target.value);
        console.log(formData);
    }
    return (
        <Typography variant="body1">
        <InputLabel htmlFor="project-name">Project Name:</InputLabel>
        <TextField
                className = "project-name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                variant="outlined" // Optional: specify the input variant
            />
    </Typography>
    )
}
export default ProjectName;