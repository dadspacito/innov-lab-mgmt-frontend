/**
 * esta vai ser a página que serve de dashboard para os projectos
 * tem header
 * carrossel de projetos 
 * botão que leva à pagina de projetos
 * campo de busca 
 * 
 */
import react from 'react'
import ProjectCarousel from '../../components/ProjectCarousel'
import { GenerateMockProjects } from 'react-dom/test-utils'

const DashBoard = ()=>{
    return (
        
        <ProjectCarousel projects = {GenerateMockProjects}/>
    )
}
export default DashBoard