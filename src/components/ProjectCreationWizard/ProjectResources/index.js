import React, { useState } from 'react';
import { FormControl, FormGroup, FormControlLabel, Checkbox, Typography, Box, List, ListItem, ListItemText, Paper, Divider } from '@mui/material';
import GenerateMockMaterials from '../../../Services/utils/GenerateMockMaterials';

const mockMaterials = GenerateMockMaterials();

const ProjectResources = ({ formData, onChange }) => {
    // Initialize state for selected materials
    const [selectedMaterials, setSelectedMaterials] = useState([]);

    // Function to handle checkbox change
    const handleCheckboxChange = (materialId) => {
        // Toggle selection of the material
        const updatedSelectedMaterials = selectedMaterials.includes(materialId)
            ? selectedMaterials.filter(id => id !== materialId)
            : [...selectedMaterials, materialId];

        setSelectedMaterials(updatedSelectedMaterials);

        // Update the parent component's form data
        onChange('materials', updatedSelectedMaterials);
    };

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h5" gutterBottom>
                Project Resources
            </Typography>

            {/* Display list of all available materials */}
            <FormControl component="fieldset">
                <FormGroup>
                    {mockMaterials.map(material => (
                        <FormControlLabel
                            key={material.id}
                            control={
                                <Checkbox
                                    checked={selectedMaterials.includes(material.id)}
                                    onChange={() => handleCheckboxChange(material.id)}
                                    name={material.name}
                                />
                            }
                            label={material.name}
                        />
                    ))}
                </FormGroup>
            </FormControl>

            <Divider sx={{ marginY: 2 }} />

            {/* Display list of selected materials */}
            <Typography variant="h6" gutterBottom>
                Selected Materials
            </Typography>
            <Paper elevation={3} sx={{ padding: 2 }}>
                <List>
                    {selectedMaterials.map(materialId => {
                        const material = mockMaterials.find(m => m.id === materialId);
                        return (
                            <ListItem key={materialId}>
                                <ListItemText primary={material.name} />
                            </ListItem>
                        );
                    })}
                </List>
            </Paper>
        </Box>
    );
};

export default ProjectResources;
