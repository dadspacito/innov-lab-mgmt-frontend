//este componente carrosel recebe um array de projects como props
//que por sua vez cada projeto (que sera um objecto) tem uma estrutura definida que é chamada 

import React from 'react'
import Carousel from 'react-material-ui-carousel'
import ProjectDiv from '../projectDiv'
import './style.css'

//tenho de importar o style desta pagina para o styling do project div ser aqui
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
        <Carousel className="carouselContainer">
            {projects.map(project=>(
                <div key={project.id} className="projectWrapper">
                <ProjectDiv title={project.title} description={project.description} />
              </div>
            ))}
        </Carousel>
    )

}
export default ProjectCarousel