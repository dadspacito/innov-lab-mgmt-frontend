/**
 * esta vai ser a página que serve de dashboard para os projectos
 * LANDING PAGE
 * tem header
 * carrossel de projetos 
 * botão que leva à pagina de projetos
 * campo de busca 
 * 
 */
import React from 'react'
import ProjectCarousel from '../../components/ProjectCarousel'
import {GenerateMockProjects} from '../../Services/utils/GenerateMockProjects'
import ErrorBoundary from '../../Services/utils/ErrorBoundary'
import Header from '../../components/Header';

const projects = GenerateMockProjects();


const Homepage = ()=>{
    return (
        <>
            <ErrorBoundary fallback="there was an error rendering the header component">
                <Header />
            </ErrorBoundary>
            <ErrorBoundary fallback="There was an error rendering the carousel component">
                <ProjectCarousel projects={projects} />
            </ErrorBoundary>
        </>
    )
}
export default Homepage

