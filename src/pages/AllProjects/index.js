/**
 * esta página é a pagina que os users vão quando querem ver todos os projectos em lista
 * tanto online como offline
 * tem uma tabela com os projetos?
 * este componente recebe os projectos como props e dispoe os numa lista
 */
import React, {useState} from 'react';
import { List, ListItem, ListItemText, Chip, Pagination } from '@mui/material';
import { GenerateMockProjects } from '../../Services/utils/GenerateMockProjects';
import './styles.css';
import Header from '../../components/Header/index'


const projects = GenerateMockProjects();
//aqui tera de receber um props que é a array list dos projetos, ou faz se o import da arraylist dos projetos da store
const ProjectList = () => {
    const [page,setPage] = useState(1);
    const [pageSize, setPageSize] =useState(2);
    const pageCount = Math.ceil(projects.length/pageSize)
    const startIndex = (page-1) * pageSize;
    const visibleProjects = projects.slice(startIndex, startIndex + pageSize);

    const handlePageChange = (event, newPage) =>{
        setPage(newPage);
    }



    if (!Array.isArray(projects)) {
        return <div>No projects available</div>;
    }
    return (
        <>
        <Header />
        <div className="project-list-container"> {/* Apply container class */}
            <div className="project-list-wrapper"> {/* Apply wrapper class */}
            <h2>Project List</h2>
            <List>
                {/* Map through the projects array passed as prop to render each project */}
                {visibleProjects.map(project => (
                    <ListItem key={project.id} className="project-item">
                        <ListItemText primary={project.title} secondary={project.description} />
                        <div>
                            {project.tags.map((tag,index)=>(
                                <Chip key ={index} label ={tag}  color="primary" size="small" />
                            ))}
                        </div>
                    </ListItem>
                ))}
            </List>
            <Pagination
            count={pageCount}
            page={page}
            onChange={handlePageChange}
            variant ="outlined"
            shape ="rounded"
            />
            </div>
        </div>
        </>
    );
};

export default ProjectList;