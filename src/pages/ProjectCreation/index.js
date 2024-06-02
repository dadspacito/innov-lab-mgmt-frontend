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
const ProjectCreationWizard = ()=>{
    /**
     * TER EM ATENÇÃO SO NOMES DO BACKEND PARA GARANTIR CONSISTENCIA DA NOMENCLATURA
     * quais são as variaveis dos projetos?
     * nome:string
     * descrição:string
     * localização:string
     * keywords:[] - é necessário um modal talvez
     * members:[]
     * planoExecução (que se calhar mais vale não ter e define-se no projeto em si)
     * materiais:[]
     */

    const [step, setStep] =  useState(1);
    const [formData, setFormData] = useState({
        name:'',
        description:'',
        location:'',//este é uma int/id de uma localização da tabela de localizações
        keywords:[],//são as tags que depois se associam as chips dos projetos
        members:[],//array de ids atraves de users disponiveis em base de dados (que não estejam em projetos )
        executionPlan:'',//plano de execução, pode sair mais tarde
        materials:[], //ids de materiais da tabela de materiais 
    })

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
}
