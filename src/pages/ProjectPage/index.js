//ao clickar no projeto, devolve uma página que recebe como props o projeto em que se clickou
// tem como design o header, uma seção com os valores de nome do projeto, gestor, estado, data de inicio, data de fim,  e a data em que o projeto foi completo.
// Nesta seção permite adicionar uma task e abrir o chat de projeto

/**
 * tasks é uma tabela que recebe um array de tarefas do backend e simplesmente as coloca numa tabela que permite ordenar por prioridade, inicio ou fim 
 */
/**
 * chart de gant que mapeia as tarefas do projeto. ver se ha bibliotecas ou recursos que possam ser usados
 */
/**
 * graficos? Não colocar por enquanto, detalhe que pode ser incluido caso cheguemos a essa fase
 */
/**
 * membros do projeto, tabela com os membros (array que recebe de trás)
 */
import React, {useState, useRef} from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,IconButton  } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";
import PropTypes from 'prop-types';

const ProjectPage = () => {
    // Use `useLocation` to get project details from navigation state
    const location = useLocation();
    const project = location.state?.project || {}; // Fallback to an empty object if no project data
    const [ganttDimensions, setGanttDimensions] = useState({ width: '100%', height: 400 });
    const ganttRef = useRef(null);
    const handleCreateTask = () => {
        // Placeholder logic for creating a new task
        console.log('Creating a new task...');
    };
    

    return (
        <Box sx={{ padding: '20px' }}>
            {/* Project Details Section */}
            <Box sx={{ marginBottom: '20px' }}>
                <Typography variant="h4" component="h1">Project Details</Typography>
                <Paper sx={{ padding: '20px', marginTop: '10px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}><strong>Title:</strong> {project.title}</Grid>
                        <Grid item xs={12} md={6}><strong>Project Manager:</strong> {project.manager}</Grid>
                        <Grid item xs={12} md={6}><strong>State:</strong> {project.state}</Grid>
                        <Grid item xs={12} md={6}><strong>Start Date:</strong> {project.startDate}</Grid>
                        <Grid item xs={12} md={6}><strong>End Date:</strong> {project.endDate}</Grid>
                        <Grid item xs={12} md={6}><strong>Completion Date:</strong> {project.completionDate}</Grid>
                    </Grid>
                </Paper>
            </Box>

            {/* Task Table Section */}
            <Box sx={{ marginBottom: '20px' }}>
                <Typography variant="h4" component="h4">Task Table</Typography>
                <IconButton onClick={handleCreateTask} color="primary" aria-label="add task">
                    <AddIcon />
                    <Typography variant="body1" sx={{ marginLeft: '8px' }}>New Task</Typography>
                </IconButton>
                <Paper sx={{ padding: '20px', marginTop: '10px' }}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Task Name</TableCell>
                                    <TableCell>Start Date</TableCell>
                                    <TableCell>End Date</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Priority</TableCell>
                                    <TableCell>Responsible</TableCell>
                                    <TableCell>Comments</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {project.tasks?.map((task) => (
                                    <TableRow key={task.id}>
                                        <TableCell>{task.name}</TableCell>
                                        <TableCell>{task.startDate}</TableCell>
                                        <TableCell>{task.endDate}</TableCell>
                                        <TableCell>{task.status}</TableCell>
                                        <TableCell>{task.priority}</TableCell>
                                        <TableCell>{task.responsible}</TableCell>
                                        <TableCell>{task.comments}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Box>

           {/* Gantt Chart Section */}
           <Box sx={{ marginBottom: '20px' }} ref={ganttRef}>
                <Typography variant="h4" component="h1">Gantt Chart</Typography>
                <Paper sx={{ padding: '20px', marginTop: '10px' }}>
                    <Gantt
                        tasks={project.tasks.map(task => ({
                            id: task.id,
                            name: task.name,
                            start: new Date(task.startDate),
                            end: new Date(task.endDate),
                            progress: task.progress || 0,
                        }))}
                        dependencies={project.dependencies || []}
                        options={{
                            taskHeight: 20,
                            viewMode: 'Week',
                            width: ganttDimensions.width,
                            height: ganttDimensions.height,
                        }}
                    />
                </Paper>
            </Box>

            {/* Project Members Section */}
            <Box sx={{ marginBottom: '20px' }}>
                <Typography variant="h4" component="h1">Project Members</Typography>
                <Paper sx={{ padding: '20px', marginTop: '10px' }}>
                    {project.members?.map((member, index) => (
                        <Typography key={index} variant="body1">
                            {member.name} - {member.role}
                        </Typography>
                    ))}
                </Paper>
            </Box>
        </Box>
    );
}

ProjectPage.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string,
        manager: PropTypes.string,
        state: PropTypes.string,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
        completionDate: PropTypes.string,
        tasks: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            startDate: PropTypes.string,
            endDate: PropTypes.string,
            status: PropTypes.string,
            priority: PropTypes.string,
            responsible: PropTypes.string,
            comments: PropTypes.string,
        })),
        members: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            role: PropTypes.string,
        })),
    }),
};

export default ProjectPage;
