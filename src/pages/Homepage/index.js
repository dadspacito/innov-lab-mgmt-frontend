/**
 * esta vai ser a página que serve de dashboard para os projectos
 * LANDING PAGE
 * tem header
 * carrossel de projetos 
 * botão que leva à pagina de projetos
 * campo de busca 
 * 
 */
import React, {useEffect} from 'react'
import ProjectCarousel from '../../components/ProjectCarousel'
import {GenerateMockProjects} from '../../Services/utils/GenerateMockProjects'
import ErrorBoundary from '../../Services/utils/ErrorBoundary'
import {Button, Box} from '@mui/material'
import { usePageNavigation, } from '../../Services/utils/PageNavigation';
import DescriptionSection from '../../components/DescriptionSection';
//import GenerateMockUsers from '../../Services/utils/GenerateMockUsers';
import { useState } from 'react'
//import { userStore } from '../../Services/Store/userStore';
//DADOS PARA TESTES
// const mockUser = GenerateMockUsers();
const projects = GenerateMockProjects();
const Homepage = ()=>{
    const [user, setUser]= useState({});
    const [isUserOn, setUserOn] = useState(false);
    const navigateToPage = usePageNavigation();
    const handleViewAllProjects = ()=>{
        navigateToPage('allProjects');
    }
    const handleCreateNewProject = ()=>{
        navigateToPage('createProject')
    }

    return (
        <>
        <Box sx={{ padding: '50px' }}> {/* Add some padding to the main content area */}
            <ErrorBoundary fallback="There was an error rendering the description component">
                <DescriptionSection />
            </ErrorBoundary>
        <Box 
            sx={{ 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Light shadow with slight blur
            borderRadius: '8px', // Optional: adds rounded corners to the container
            overflow: 'visible', // Ensures content within the container respects the rounded corners
            marginTop: '20px' // Optional: add some spacing above the carousel
            }}>
        <ErrorBoundary fallback="There was an error rendering the carousel component">
          <ProjectCarousel projects={projects} isUserOn={isUserOn} />
        </ErrorBoundary>
        </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px' , padding:'15px'}}>
                <Button onClick={handleViewAllProjects} variant="contained" color="primary" sx={{ marginRight: '10px' }}>
                    View All Projects
                </Button>
                <Button onClick={handleCreateNewProject} variant="contained" color="primary">
                    Create New Project
                </Button>
            </Box>
        </Box>
    </>
    )
}

export default Homepage

