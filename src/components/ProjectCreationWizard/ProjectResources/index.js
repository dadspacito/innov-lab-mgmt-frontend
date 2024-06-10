import React, { useState, useEffect } from 'react';
import { FormGroup, FormControlLabel, Checkbox, Typography, Box, List, ListItem, ListItemText, Paper, Divider, Button } from '@mui/material';
import GenerateMockMaterials from '../../../Services/utils/GenerateMockMaterials';
import './style.css';

// Generate mock materials
const mockMaterials = GenerateMockMaterials();

const ProjectResources = ({ formData, onChange }) => {
    // Initialize state for selected materials
    const [selectedComponents, setSelectedComponents] = useState([]);
    const [selectedResources, setSelectedResources] = useState([]);

    // Function to compute combined selected materials
    const computeSelectedMaterials = () => {
        return [
            ...mockMaterials.components.filter(component => selectedComponents.includes(component.id)),
            ...mockMaterials.resources.filter(resource => selectedResources.includes(resource.id))
        ];
    };

    // Effect to propagate selected materials to parent
    useEffect(() => {
        const combinedMaterials = computeSelectedMaterials();
        onChange('materials', combinedMaterials);
        console.log(formData);
    }, []);

    // Function to handle checkbox change
    const handleCheckboxChange = (materialId, type) => {
        if (type === 'component') {
            const updatedSelectedComponents = selectedComponents.includes(materialId)
                ? selectedComponents.filter(id => id !== materialId)
                : [...selectedComponents, materialId];
            
            setSelectedComponents(updatedSelectedComponents);
            onChange('components', updatedSelectedComponents);
        } else if (type === 'resource') {
            const updatedSelectedResources = selectedResources.includes(materialId)
                ? selectedResources.filter(id => id !== materialId)
                : [...selectedResources, materialId];

            setSelectedResources(updatedSelectedResources);
            onChange('resources', updatedSelectedResources);
        }
    };

    // Function to handle "Next" button click

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h5" gutterBottom>
                Project Resources
            </Typography>

            {/* Section for Components */}
            <Box sx={{ marginBottom: 2 }}>
                <Typography component="div" variant="h6" gutterBottom>
                    Components
                </Typography>
                <FormGroup>
                    {mockMaterials.components.map(component => (
                        <FormControlLabel
                            key={component.id} // Ensure each FormControlLabel has a unique key
                            control={
                                <Checkbox
                                    checked={selectedComponents.includes(component.id)}
                                    onChange={() => handleCheckboxChange(component.id, 'component')}
                                    name={component.name}
                                />
                            }
                            label={component.name}
                        />
                    ))}
                </FormGroup>
            </Box>

            <Divider sx={{ marginY: 2 }} />

            {/* Section for Resources */}
            <Box sx={{ marginBottom: 2 }}>
                <Typography component="div" variant="h6" gutterBottom>
                    Resources
                </Typography>
                <FormGroup>
                    {mockMaterials.resources.map(resource => (
                        <FormControlLabel
                            key={resource.id} // Ensure each FormControlLabel has a unique key
                            control={
                                <Checkbox
                                    checked={selectedResources.includes(resource.id)}
                                    onChange={() => handleCheckboxChange(resource.id, 'resource')}
                                    name={resource.name}
                                />
                            }
                            label={resource.name}
                        />
                    ))}
                </FormGroup>
            </Box>

            <Divider sx={{ marginY: 2 }} />

            {/* Display list of selected components */}
            {selectedComponents.length > 0 && (
                <>
                    <Typography variant="h6" gutterBottom>
                        Selected Components
                    </Typography>
                    <Paper elevation={3} sx={{ padding: 2 }}>
                        <List>
                            {selectedComponents.map(componentId => {
                                const component = mockMaterials.components.find(c => c.id === componentId);
                                return (
                                    <ListItem key={componentId}>
                                        <ListItemText primary={component.name} />
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Paper>
                </>
            )}

            {/* Display list of selected resources */}
            {selectedResources.length > 0 && (
                <>
                    <Typography variant="h6" gutterBottom>
                        Selected Resources
                    </Typography>
                    <Paper elevation={3} sx={{ padding: 2 }}>
                        <List>
                            {selectedResources.map(resourceId => {
                                const resource = mockMaterials.resources.find(r => r.id === resourceId);
                                return (
                                    <ListItem key={resourceId}>
                                        <ListItemText primary={resource.name} />
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Paper>
                </>
            )}
        </Box>
    );
};

export default ProjectResources;
