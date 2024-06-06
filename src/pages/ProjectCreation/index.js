/**O multi select agrupa os componentes necessários para a criação do projecto
 * 1- planear a estrutura dos componentes e do que cada componente necessita
 * 2- gerir os estados entre a passagem dos componentes, usando o zustand
 * 3- Implementação da navegação entre os passos, a seta para seguir, a seta para voltar e um 
 * indicador visual que mostre em que passo é que se está
 * 4- implementar a validação do que se está a colocar para se ter a certeza que só se pode passar para o proximo passo quando a validação está correta
 * 5-submissão dos componentes e dos dados (a confirmação é tambem um componente)
 * 
 * este componente tem de receber um user que associa logo ao email (username)
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
        //depois da adição dos membros, perguntar se quer gravar o projeto 
        executionPlan:'',//plano de execução, pode sair mais tarde
        materials:[], //ids de materiais da tabela de materiais 
        //criador
        //data de inicio
        //data de fim 
        //estado que é planning ou ready
    })
    const handleChange =(field, value )=>{
        setFormData({
            ...formData,
            [field]:value
        })
        if (field === 'keywords'){
            setFormData({
                ...formData,
                keywords:value
            })
        }
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
    //aqui faz se um switch que consoante o step onde estivermos, faz render aos componentes que se quer
    //faz retorno dos steps que temos de implementar 
    //wrapped em Error boundary
    return (
        
        <NameStep formData={formData} onChange={handleChange}/>
        
    )
}
export default ProjectCreationWizard;
