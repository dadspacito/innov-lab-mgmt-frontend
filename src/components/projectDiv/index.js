//aqui são os projects que serão mapeados no carousel 
//fazer por agora apenas a parte do render dos componentes de interesse
//faz se mock aos valores que se quer renderizar, cria-se um objecto aqui
import React from 'react'
import './style.css'

const ProjectDiv = ({title, description})=>{
    return (
        <div className="projectCard">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )

}
export default ProjectDiv