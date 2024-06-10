//aqui são os projects que serão mapeados no carousel 
//fazer por agora apenas a parte do render dos componentes de interesse
//faz se mock aos valores que se quer renderizar, cria-se um objecto aqui
import React from 'react'
import './style.css'

const ProjectDiv = ({title, description, isUserOn})=>{
    const handleApply =()=>{
            console.log('click')
    }
    //tem de retornar o numero de elemebntos 
    return (
        

        <div className="projectCard">
            <h2>{title}</h2>
            <p>{description}</p>
            {isUserOn && (
                <>
                    <button onClick={handleApply}>Apply</button>
                    {/* <p>{`Number of Members: ${numberOfMembers}`}</p> */}
                </>
            )}
        </div>
    )

}
export default ProjectDiv