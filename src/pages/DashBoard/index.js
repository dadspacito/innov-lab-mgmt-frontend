/**
 * esta vai ser a página que serve de dashboard para os projectos
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

const projects = GenerateMockProjects();


const DashBoard = ()=>{
    console.log(projects);
    return (
        <ErrorBoundary fallback = "There was an error rendering the carousel component">
        <ProjectCarousel projects = {projects}/>
        </ErrorBoundary>
    )
}
export default DashBoard