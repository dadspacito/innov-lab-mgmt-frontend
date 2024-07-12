import React, { useState, useEffect } from 'react';
import {LocationAPI} from '../../../Services/API/LocationAPI'
import './style.css'; // Ensure you import the CSS file

// Array of locations

const ProjectLocations = ({ formData, onChange }) => {
    const [workplaces,setWorkplaces] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        LocationAPI.GetLocations().then(data =>{
            setWorkplaces(data);
            setLoading(false);
            console.log(workplaces)
        })
    }, []);
    if (loading) {
        return <div>Loading...</div>; // Render a loading indicator while data is being fetched
    }
    return (
        <div className='wrapper-div'>
            {workplaces.map(workplace => (
                <div 
                    key={workplace.id} 
                    className={`wrapper-location-div ${formData.workplace === workplace.workplace ? 'selected' : ''}`}
                    onClick={() => onChange('workplace', workplace.workplace)}
                >
                    {workplace.workplace}
                </div>
            ))}
        </div>
    );
};

export default ProjectLocations;
