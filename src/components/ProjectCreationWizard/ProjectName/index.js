import React from 'react'
import Typography from '@mui/material/Typography';

const NameStep= ({formData, onChange})=>{
    const handleNameChange=(event)=>{
        onChange('name',event.target.value);
    }
    return (
        <Typography variant="body1">
        <label>Project Name:</label>
        <input
            type="text"
            value={formData.name}
            onChange={handleNameChange}
        />
    </Typography>
    )
}
export default NameStep;