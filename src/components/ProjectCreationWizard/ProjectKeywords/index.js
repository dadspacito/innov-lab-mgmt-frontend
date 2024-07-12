import React, { useState, useEffect } from 'react';
import { Typography, FormControl, Select, Chip, MenuItem, TextField, Button } from '@mui/material';
import GenerateMockKeywords from '../../../Services/utils/GenerateMockKeywords';
import {ProjectAPI} from '../../../Services/API/ProjectAPI'
import { userStore } from '../../../Services/Store/userStore';

// Generate mock keywords
const mockKeywords = GenerateMockKeywords();

const ProjectKeywords = ({ formData, onChange }) => {
    const userToken = userStore((state)=>state.userToken);
    const [interests,setInterests] = useState([]);
    const [skills,setSkills]=useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        ProjectAPI.GetInterests(userToken).then(data =>{
            setInterests(data);
        })
        ProjectAPI.GetSkills(userToken).then(data=>{
            setSkills(data);
        })
        console.log(interests);
        console.log(skills);
    }, []);
    if (loading) {
        return <div>Loading...</div>; // Render a loading indicator while data is being fetched
    }


    
};

export default ProjectKeywords;
