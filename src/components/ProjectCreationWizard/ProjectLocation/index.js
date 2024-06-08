import React, { useEffect } from 'react';
import GenerateMockLocations from '../../../Services/utils/GenerateMockLocations';
import './style.css'; // Ensure you import the CSS file

// Array of locations
const mockLocations = GenerateMockLocations();

const ProjectLocations = ({ formData, onChange }) => {
    useEffect(() => {
        console.log(mockLocations);
    }, []);

    return (
        <div className='wrapper-div'>
            {mockLocations.map(location => (
                <div 
                    key={location.id} 
                    className={`wrapper-location-div ${formData.location === location.location ? 'selected' : ''}`}
                    onClick={() => onChange('location', location.location)}
                >
                    {location.location}
                </div>
            ))}
        </div>
    );
};

export default ProjectLocations;
