import React, {useEffect} from 'react'
import ProjectCarousel from '../../components/ProjectCarousel'
import ErrorBoundary from '../../Services/utils/ErrorBoundary'
import {Button, Box} from '@mui/material'
import { usePageNavigation, } from '../../Services/utils/PageNavigation';
import DescriptionSection from '../../components/DescriptionSection';
import WebSocketClient from "../../components/Websocket"; 
import { userStore } from '../../Services/Store/userStore'
import { useState } from 'react'

const Homepage = ()=>{
    WebSocketClient(); 
    const notifications = userStore((state) => state.notifications); 
    const [user, setUser]= useState({});
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
          <ProjectCarousel/>
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

