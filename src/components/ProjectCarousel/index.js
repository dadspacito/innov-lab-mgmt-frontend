import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import ProjectDiv from '../projectDiv'; // Ensure the correct path to ProjectDiv
import { useNavigate } from 'react-router-dom';
import './style.css'

//este componente tem de receber o user is logged on 
const ProjectCarousel = ({ projects, isUserOn }) => {
    const navigate = useNavigate();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        centerMode:true,
        centerPadding:'0px',
        slidesToShow: 3, // Show 3 projects at a time
        slidesToScroll: 1, // Scroll one slide at a time
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    //onClick que redireciona para a página do projeto 
    const handleProjectClick = (project) => {
        navigate('/projectPage', { state: { project } });
    };
    //no project div está se a fazer props driiling e é preferivel expandir o projecto la dentro 

    return (
        <Slider {...settings} className="carouselContainer" >
            {projects.map(project => (
                <div key={project.id} className="projectWrapper" onClick={()=>handleProjectClick(project)}>
                    <ProjectDiv title={project.title} description={project.description} isUserOn = {isUserOn} projectTags = {project.tags} />
                </div>
            ))}
        </Slider>
    );
}

ProjectCarousel.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired, // Ensure every project has a unique id
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ProjectCarousel;
