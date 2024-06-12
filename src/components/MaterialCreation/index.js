import React, { useState } from 'react';
import { Box, TextField, Button, Grid, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import './style.css'; // Import external CSS for styling

const MaterialCreation = ({ handleClose, addMaterial }) => {
    // Initialize state for each form input field
    const [materialData, setMaterialData] = useState({
        id: '',
        name: '',
        brand: '',
        type: '',
        identifier: '',
        supplier: '',
        supplierContact: '',
        amount: '',
        comments: ''
    });

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMaterialData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle type selection change
    const handleTypeChange = (e) => {
        setMaterialData(prevState => ({
            ...prevState,
            type: e.target.value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        addMaterial(materialData);
        handleClose(); // Close the modal
    };

    return (
        <Box component="form" onSubmit={handleSubmit} className="material-creation-form">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        name="id"
                        label="ID"
                        value={materialData.id}
                        onChange={handleInputChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="name"
                        label="Name"
                        value={materialData.name}
                        onChange={handleInputChange}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="brand"
                        label="Brand"
                        value={materialData.brand}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth required>
                        <InputLabel id="type-label">Type</InputLabel>
                        <Select
                            labelId="type-label"
                            name="type"
                            value={materialData.type}
                            onChange={handleTypeChange}
                        >
                            <MenuItem value="Component">Component</MenuItem>
                            <MenuItem value="Resource">Resource</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="identifier"
                        label="Identifier"
                        value={materialData.identifier}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="supplier"
                        label="Supplier"
                        value={materialData.supplier}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="supplierContact"
                        label="Supplier Contact"
                        value={materialData.supplierContact}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="amount"
                        label="Amount"
                        value={materialData.amount}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="comments"
                        label="Comments"
                        value={materialData.comments}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Add Material
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MaterialCreation;
