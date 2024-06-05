/**O multi select agrupa os componentes necessários para a criação do projecto
 * 1- planear a estrutura dos componentes e do que cada componente necessita
 * 2- gerir os estados entre a passagem dos componentes, usando o zustand
 * 3- Implementação da navegação entre os passos, a seta para seguir, a seta para voltar e um 
 * indicador visual que mostre em que passo é que se está
 * 4- implementar a validação do que se está a colocar para se ter a certeza que só se pode passar para o proximo passo quando a validação está correta
 * 5-submissão dos componentes e dos dados (a confirmação é tambem um componente)
 * 
 */

import React from 'react'
import NameStep from '../../components/ProjectCreationWizard/ProjectName';
const ProjectCreationWizard = ()=>{
    const [step, setStep] =  useState(1);
    const [formData, setFormData] = useState({
        name:'',
        description:'',
        location:'',//este é uma int/id de uma localização da tabela de localizações
        keywords:[],//são as tags que depois se associam as chips dos projetos
        members:[],//array de ids atraves de users disponiveis em base de dados (que não estejam em projetos )
        executionPlan:'',//plano de execução, pode sair mais tarde
        materials:[], //ids de materiais da tabela de materiais 
        //criador
        //data de inicio
        //data de fim 
    })
    const handleChange =(field, value )=>{
        setFormData({
            ...formData,
            [field]:value
        })
    }

    

    const handleNextStep=()=>{
        setStep(step+1);
    }
    const handlePreviousStep=()=>{
        setStep(step-1);
    }
    const handleSubmit = ()=>{
        //função de handle submit
    }
    
    //faz retorno dos steps que temos de implementar 
    return (
        <NameStep formData={formData} onChange={handleChange}/>
    )
}
export default ProjectCreationWizard;
