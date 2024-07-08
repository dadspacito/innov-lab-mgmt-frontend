import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Chip, Pagination } from '@mui/material';
import './styles.css';
import Header from '../../components/Header/index';
import SearchField from '../../components/SearchBar';
import { ProjectAPI } from '../../Services/API/ProjectAPI';

const ProjectList = () => {
    const [page, setPage] = useState(1);
    const [projects, setProjects] = useState([]);
    const [pageSize, setPageSize] = useState(2);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchType, setSearchType] = useState('name'); // Default search type

    useEffect(() => {
        ProjectAPI.GetHomeProjects().then(data => {
            setProjects(data);
            setLoading(false);
        });
    }, []);

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        //setPage(1); // Reset page to 1 when performing a new search
    };

    const handleSearchTypeChange = (type) => {
        setSearchType(type);
        setSearchQuery(''); // Clear query when search type changes
    };

    const startIndex = (page - 1) * pageSize;

    const visibleProjects = searchQuery ? projects.filter(project => {
        if (searchType === 'name') {
            return project.name.toLowerCase().includes(searchQuery.toLowerCase());
        } else if (searchType === 'tags') {
            return project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        }
        return true; // Default to returning all projects if searchType is not recognized
    }) : projects;

    const pageCount = Math.ceil(visibleProjects.length / pageSize);

    if (!Array.isArray(projects)) {
        return <div>No projects available</div>;
    }
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="project-list-container">
                <div className="project-search-container">
                    <SearchField data={projects} onSearch={handleSearch} />
                    <select value={searchType} onChange={(e) => handleSearchTypeChange(e.target.value)} className="search-selector">
                        <option value="name">Search by Name</option>
                        <option value="tags">Search by Tags</option>
                    </select>
                </div>
                <div className="project-list-wrapper">
                    <h2>Project List</h2>
                    <List>
                        {visibleProjects.map(project => (
                            <ListItem key={project.id} className="project-item">
                                <ListItemText primary={project.name} secondary={project.description} />
                                <div>
                                    {/* Render project interests */}
                                    <p>
                                        Interests:{' '}
                                        {project.projectInterests.map((interest, index) => (
                                            <Chip
                                                key={index}
                                                label={interest.name}
                                                color="primary"
                                                size="small"
                                                variant="outlined"
                                            />
                                        ))}
                                    </p>

                                    {/* Render project skills */}
                                    <p>
                                        Skills:{' '}
                                        {project.projectSkills.map((skill, index) => (
                                            <Chip
                                                key={index}
                                                label={skill.name}
                                                color="primary"
                                                size="small"
                                                variant="outlined"
                                            />
                                        ))}
                                    </p>
                                </div>
                            </ListItem>
                        ))}
                    </List>
                    <Pagination
                        count={pageCount}
                        page={page}
                        onChange={handlePageChange}
                        variant="outlined"
                        shape="rounded"
                        style={{ marginTop: '20px' }}
                    />
                </div>
            </div>
        </>
    );
};

export default ProjectList;
