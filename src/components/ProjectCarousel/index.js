import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import ProjectDiv from '../projectDiv'; // Ensure the correct path to ProjectDiv
import './style.css'


const ProjectCarousel = ({ projects }) => {
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

    return (
        <Slider {...settings} className="carouselContainer">
            {projects.map(project => (
                <div key={project.id} className="projectWrapper">
                    <ProjectDiv title={project.title} description={project.description} />
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
