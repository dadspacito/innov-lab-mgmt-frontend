//fazer mock dos locais onde se pode trabalhar 
import React from 'react'
import GenerateMockLocations from '../../../Services/utils/GenerateMockLocations'

//array das locations
const mockLocations = GenerateMockLocations();

const ProjectLocations =({formData, onChange})=>{
    return (
        <div className = 'wrapper-div'>
            {mockLocations.map(location =>{
                <div key= {location.id} 
                value = {formData.location}
                className = 'wrapper-location-div'
                onClick={()=>onChange('location', location.name)}>
                    <p>location.name</p>
                </div>
            })}
        </div>
    )
}
export default ProjectLocations;