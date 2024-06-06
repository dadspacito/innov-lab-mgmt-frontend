import React from 'react'
import {Typography, TextField} from '@mui/material/Typography';

const ProjectName= ({formData, onChange})=>{
    const handleChange=(event)=>{
        onChange('name',event.target.value);
    }
    return (
        <Typography variant="body1">
        <label>Project Name:</label>
        <TextField
                type="text"
                value={formData.name}
                onChange={handleChange}
                variant="outlined" // Optional: specify the input variant
            />
    </Typography>
    )
}
export default ProjectName;