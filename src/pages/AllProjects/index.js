/**
 * esta página é a pagina que os users vão quando querem ver todos os projectos em lista
 * tanto online como offline
 * tem uma tabela com os projetos?
 * este componente recebe os projectos como props e dispoe os numa lista
 */
import React, {useState, useEffect} from 'react';
import { List, ListItem, ListItemText, Chip, Pagination } from '@mui/material';
import { GenerateMockProjects } from '../../Services/utils/GenerateMockProjects';
import './styles.css';
import Header from '../../components/Header/index'
import SearchField from '../../components/SearchBar';


const projects = GenerateMockProjects();
//aqui tera de receber um props que é a array list dos projetos, ou faz se o import da arraylist dos projetos da store
const ProjectList = () => {
    const [page,setPage] = useState(1);
    const [pageSize, setPageSize] =useState(2);
    const [searchQuery, setSearchQuery] = useState('');
    //const visibleProjects = projects.slice(startIndex, startIndex + pageSize);
    useEffect(() => {
        console.log('Search query:', searchQuery);
        console.log('Page:', page);
    }, [searchQuery, page]);
    

    const handlePageChange = (event, newPage) =>{
        setPage(newPage);
    }

    const handleSearch = (query) => {
        setSearchQuery(query);
        setPage(1); // Reset page to 1 when performing a new search
    };


    const startIndex = (page-1) * pageSize;

    const visibleProjects = searchQuery ? searchQuery : projects;
    const pageCount = Math.ceil(visibleProjects.length/pageSize)




    if (!Array.isArray(projects)) {
        return <div>No projects available</div>;
    }
    return (
        <>
        <Header />
        <div className="project-search-container">
        <SearchField data = {projects} onSearch={handleSearch}/>
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
        </div>
        </>
    );
};

export default ProjectList;