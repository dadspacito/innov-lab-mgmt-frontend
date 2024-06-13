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
import Header from '../../components/Header';
import {Button, Box} from '@mui/material'
import { usePageNavigation, } from '../../Services/utils/PageNavigation';
import DescriptionSection from '../../components/DescriptionSection';
import GenerateMockUsers from '../../Services/utils/GenerateMockUsers';
import { useState } from 'react'

const mockUser = GenerateMockUsers();
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

    //RETORNA USER vai buscar o user para fazer set
    //cmd + k + c para commentar blocos de codigo
    useEffect(() => {
        // Set the user to the first mock user with id 1
        const firstUser = mockUser.find(user => user.id === 1);
        if (firstUser) {
            setUser(firstUser);
        }
    }, []);

    const handleUserOn = () => {
        // Toggle the isUserOn state
        setUserOn(prevState => !prevState);
    };
    useEffect(() => {
        console.log('Homepage isUserOn state:', isUserOn);
    }, [isUserOn]);



    return (
        <>
        <Box sx={{ padding: '20px' }}> {/* Add some padding to the main content area */}
            <ErrorBoundary fallback="There was an error rendering the description component">
                <DescriptionSection />
            </ErrorBoundary>
            <ErrorBoundary fallback="There was an error rendering the carousel component">
                <ProjectCarousel projects={projects} isUserOn = {isUserOn}/>
            </ErrorBoundary>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Button onClick={handleViewAllProjects} variant="contained" color="primary" sx={{ marginRight: '10px' }}>
                    View All Projects
                </Button>
                <Button onClick={handleCreateNewProject} variant="contained" color="primary">
                    Create New Project
                </Button>
                <Button onClick={handleUserOn} variant="contained" color="primary">
                {isUserOn ? 'Log Out Admin' : 'Log In as Admin'}
                </Button>
            
            </Box>
        </Box>
    </>
    )
}

export default Homepage

