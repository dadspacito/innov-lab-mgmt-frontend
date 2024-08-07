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

import React, {useState} from 'react'
import ProjectName from '../../components/ProjectCreationWizard/ProjectName';
import ProjectDescription from '../../components/ProjectCreationWizard/ProjectDescription';
import ProjectLocation from '../../components/ProjectCreationWizard/ProjectLocation';
import ProjectKeywords from '../../components/ProjectCreationWizard/ProjectKeywords';
import ProjectMembers from '../../components/ProjectCreationWizard/ProjectMembers';
import ProjectResources from '../../components/ProjectCreationWizard/ProjectResources';
import ProjectDates from '../../components/ProjectCreationWizard/ProjectDates';
import { Button, Box, Container, Typography, Paper } from '@mui/material';
import Header from '../../components/Header';
import ErrorBoundary from './../../Services/utils/ErrorBoundary'
import { userStore } from '../../Services/Store/userStore';

const ProjectCreationWizard = ()=>{
    const userID = userStore((state)=>state.userID)
    const [step, setStep] =  useState(1);
    const [formData, setFormData] = useState({
        name:'',
        description:'',
        workplace:'',//este é uma int/id de uma localização da tabela de localizações
        projectInterests:[],
        projectSkills:[],
        projectMembers:[],//array de ids atraves de users disponiveis em base de dados (que não estejam em projetos )
        projectMaterials:[], //ids de materiais da tabela de materiais 
        projectManager:userID,
        startDate:'',
        endDate:'',
    })

    //falta mudar o handleChange para ter materials e members nos fields 
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
        if (field === 'startDate' || field === 'endDate') {
            // Convert the date value to JSON format
            const jsonDate = (new Date(value)).toJSON();
            setFormData({
                ...formData,
                [field]: jsonDate
            });
        }
    }

    

    const handleNextStep=()=>{
        setStep(step+1);
    }
    const handlePreviousStep=()=>{
        setStep(step-1);
    }
    const handleSubmit = ()=>{
        console.log(formData);
    }
    //aqui faz se um switch que consoante o step onde estivermos, faz render aos componentes que se quer
    const renderStepComponent=()=>{
        switch (step){
            case 1:
                return <ProjectName formData={formData} onChange={handleChange}/>;
            case 2:
                return <ProjectDescription formData={formData} onChange={handleChange}/>
            case 3:
                return <ProjectLocation formData={formData} onChange={handleChange}/>
            case 4:
                return <ProjectKeywords formData={formData} onChange={handleChange}/>
            case 5:
                return <ProjectMembers formData={formData} onChange={handleChange}/>
            case 6:
                return <ProjectResources formData={formData} onChange={handleChange}/>
            case 7:
                return <ProjectDates formData={formData} onChange={handleChange}/>
            default:
                return null;
        }
        
    }
    //faz retorno dos steps que temos de implementar 
    //wrapped em Error boundary
    return (
        <ErrorBoundary>
        <Container maxWidth="md">
            <Paper elevation={3} sx={{ padding: 3, marginTop: 3 }}>
                <Typography variant="h4" gutterBottom>
                    Project Creation Wizard
                </Typography>
                <Box sx={{ marginBottom: 3 }}>
                    {renderStepComponent()}
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={step === 1}
                        onClick={handlePreviousStep}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNextStep}
                    >
                        {step < 7 ? 'Next' : 'Submit'}
                    </Button>
                </Box>
            </Paper>
        </Container>
    </ErrorBoundary>
        
    )
}
export default ProjectCreationWizard;
