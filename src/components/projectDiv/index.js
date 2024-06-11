//aqui são os projects que serão mapeados no carousel 
//fazer por agora apenas a parte do render dos componentes de interesse
//faz se mock aos valores que se quer renderizar, cria-se um objecto aqui
import React from 'react'
import { Button } from '@mui/material'
import './style.css'

const ProjectDiv = ({title, description, isUserOn, projectTags})=>{
    const handleApply =()=>{
            console.log('click')
    };
    //tem de retornar o numero de elemebntos 
    return (
        <div className="projectCard" style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h2 style={{ marginBottom: '10px' }}>{title}</h2>
            <p style={{ marginBottom: '15px' }}>{description}</p>
            <p className='project-tags' style={{ marginBottom: '15px', fontWeight: 'bold' }}>{projectTags}</p>
            {isUserOn && (
                <Button variant="contained" onClick={handleApply} sx={{ marginRight: '10px' }}>
                    Apply
                </Button>
            )}
        </div>
    );
};

export default ProjectDiv;