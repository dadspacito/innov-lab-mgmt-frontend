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



const DashBoard = ()=>{
    return (
        <ErrorBoundary fallback = "Error">
        <ProjectCarousel projects = {GenerateMockProjects}/>
        </ErrorBoundary>
    )
}
export default DashBoard