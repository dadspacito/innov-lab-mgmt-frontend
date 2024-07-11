import React ,{useState, useEffect} from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import ProjectDiv from '../projectDiv'; // Ensure the correct path to ProjectDiv
import { useNavigate } from 'react-router-dom';
import { ProjectAPI } from '../../Services/API/ProjectAPI';
import './style.css'
import {userStore} from "../../Services/Store/userStore"

//este componente tem de receber o user is logged on 
const ProjectCarousel = () => {
    const navigate = useNavigate();
    const user = userStore((state)=>state.user);
    const userToken = userStore((state)=>state.userToken);
    const [loading, setLoading] = useState(true);
    const [homeProjects, sethomeProjects] = useState([]);

    useEffect(() => {
        ProjectAPI.GetHomeProjects().then(data=>{
            sethomeProjects(data);
            setLoading(false);
        })
     }, []);

    const settings = {
        dots: true,
        speed: 500,
        centerPadding:'0px',
        slidesToShow: 1, // Show 3 projects at a time
        slidesToScroll: 1, // Scroll one slide at a time
        initialSlide:1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows:true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows:true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows:true
                }
            }
        ]
    };
    const isUserLoggedIn = userToken !== "";
    //onClick que redireciona para a página do projeto 
    const handleProjectClick = (project) => {
        navigate('/projectPage', { state: { project } });
    };
    if (loading) {
        return <div>Loading...</div>; // Render a loading indicator while data is being fetched
    }
    return (
        <Slider {...settings} className="carouselContainer" >
            {homeProjects.map(project => (
                <div key={project.id} className="projectWrapper">
                    <ProjectDiv project = {project} isUserLoggedIn={isUserLoggedIn}/>
                </div>
            ))}
        </Slider>
    );
}

// ProjectCarousel.propTypes = {
//     projects: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired, // Ensure every project has a unique id
//             name: PropTypes.string.isRequired,
//             description: PropTypes.string.isRequired,
//         })
//     ).isRequired,
// };

export default ProjectCarousel;
