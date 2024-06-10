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
    const [user, setUser]= useState(undefined);
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
    useEffect(()=>{
        mockUser.forEach(user=>{
            if (user.id ===1){
                setUser(user);
            }
        })
    },[]);

    //aqui haja um botão que carregue true false ao user
    //faz com que os botoes no das caixas aparecam 
    //ao fazer isto, é preciso desenhar o componente dependente da activação desta boolean
    //puramente para testes
    const handleUserOn =()=>{  
        if (!isUserOn){
            setUserOn(true);
            console.log(isUserOn)
            
        }
        else if(isUserOn){
        setUserOn(false)
        console.log(isUserOn)
        }
    }

    return (
        <>
        <ErrorBoundary fallback="There was an error rendering the header component">
            <Header />
        </ErrorBoundary>
        <Box sx={{ padding: '20px' }}> {/* Add some padding to the main content area */}
            <ErrorBoundary fallback="There was an error rendering the description component">
                <DescriptionSection />
            </ErrorBoundary>
            <ErrorBoundary fallback="There was an error rendering the carousel component">
                <ProjectCarousel projects={projects} />
            </ErrorBoundary>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Button onClick={handleViewAllProjects} variant="contained" color="primary" sx={{ marginRight: '10px' }}>
                    View All Projects
                </Button>
                <Button onClick={handleCreateNewProject} variant="contained" color="primary">
                    Create New Project
                </Button>
                <Button onClick={handleUserOn} variant="contained" color="primary">
                    Log admin
                </Button>
            
            </Box>
        </Box>
    </>
    )
}

export default Homepage

