//este componente carrosel recebe um array de projects como props
//que por sua vez cada projeto (que sera um objecto) tem uma estrutura definida que é chamada 

import React from 'react'
import Carousel from 'react-material-ui-carousel'
import ProjectDiv from '../projectDiv'
const ProjectCarousel= ({projects})=>{
    
    /*ProjectCarousel.propTypes={
        projects:PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                Description: PropTypes.string.isRequired
            })
        )
    }*/
    return (
        <Carousel>
            {projects.map(project=>(
                <ProjectDiv key = {project.id} title = {project.title} description ={project.description}/> 
            ))}
        </Carousel>
    )

}
export default ProjectCarousel