import React, { useState, useEffect } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Fab, Modal, Box, useMediaQuery, Select, MenuItem, FormControl, InputLabel, Button, IconButton, Grid, TextField
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
//import GenerateMockMaterials from '../../Services/utils/GenerateMockMaterials';
import MaterialCreation from '../../components/MaterialCreation';
import { useTheme } from '@mui/material/styles';
import './style.css'; // Import external CSS for styling
import { MaterialAPI } from '../../Services/API/MaterialAPI';
import {userStore} from '../../Services/Store/userStore';

//const mockMaterials = GenerateMockMaterials();

const MaterialsList = () => {
    const userToken = userStore((state) => state.userToken);
    const [openModal, setOpenModal] = useState(false);
    const [materials, setMaterials] = useState([]);
    const [filterType, setFilterType] = useState('All'); // State to manage the selected filter
    //const [filteredMaterials, setFilteredMaterials] = useState(materials);
    const [searchQuery, setSearchQuery] = useState(''); // State for search query

    useEffect(()=>{
        MaterialAPI.GetAllMaterials(userToken).then(data=>{
            setMaterials(data);
        })
        console.log(materials);
        console.log(userToken);
    },[])

    // Function to handle modal opening
    const handleOpenModal = () => setOpenModal(true);

    // Function to handle modal closing
    const handleCloseModal = () => setOpenModal(false);

    // Function to add new material to the list
    // const addMaterial = (newMaterial) => {
    //     const newMaterialWithId = { ...newMaterial, id: materials.length + 1 };
    //     setMaterials(prevMaterials => [...prevMaterials, newMaterialWithId]);
    //     setFilteredMaterials(prevMaterials => [...prevMaterials, newMaterialWithId]); // Update filtered materials too
    // };

    // Handle filter type change
    const handleFilterTypeChange = (event) => {
        setFilterType(event.target.value);
        
    };

    // Filter and search materials based on the selected filter type and search query
    // useEffect(() => {
    //     let updatedMaterials = materials;
    //     //esta função nao esta a fazer update a lista
    //     if (filterType !== 'All') {
    //         updatedMaterials = updatedMaterials.filter(material => material.type === filterType);
    //     }
    //     if (searchQuery) {
    //         updatedMaterials = updatedMaterials.filter(material =>
    //             material.name.toLowerCase().includes(searchQuery.toLowerCase())
    //         );
    //     }
    //     setFilteredMaterials(updatedMaterials);
    // }, [filterType, searchQuery, materials]);

    // Use MUI's useMediaQuery to make the modal responsive
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div className="materials-list-container">
            <Grid container spacing={2} alignItems="center" className="controls-container">
                <Grid item>
                    <TextField
                        label="Search"
                        variant="outlined"
                        size="small"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <FormControl variant="outlined" size="small">
                        <InputLabel id="filter-label">Filter by Type</InputLabel>
                        <Select
                            labelId="filter-label"
                            value={filterType}
                            onChange={handleFilterTypeChange}
                            label="Filter by Type"
                        >
                            <MenuItem value="All">All</MenuItem>
                            <MenuItem value="Component">Component</MenuItem>
                            <MenuItem value="Resource">Resource</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleOpenModal}
                        className="create-material-button"
                        startIcon={<AddIcon fontSize="small" />}
                    >
                        Create New Material
                    </Button>
                </Grid>
            </Grid>

            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="create-material-modal-title"
                aria-describedby="create-material-modal-description"
            >
                <Box
                    className="modal-box"
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: isSmallScreen ? '90%' : 400, // Adjust width based on screen size
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    {/* <MaterialCreation handleClose={handleCloseModal} addMaterial={addMaterial} /> */}
                </Box>
            </Modal>

            <TableContainer component={Paper} className="materials-table-container">
                <Table sx={{ minWidth: 650 }} aria-label="materials table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Brand</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Identifier</TableCell>
                            <TableCell>Supplier</TableCell>
                            <TableCell>Supplier Contact</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>Comments</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {materials.map((material) => (
                            <TableRow key={material.id}>
                                <TableCell>{material.id}</TableCell>
                                <TableCell>{material.name}</TableCell>
                                <TableCell>{material.brand}</TableCell>
                                <TableCell>{material.type}</TableCell>
                                <TableCell>{material.serialNumber}</TableCell>
                                <TableCell>{material.supplier}</TableCell>
                                <TableCell>{material.supplierContact}</TableCell>
                                <TableCell>{material.quantity}</TableCell>
                                <TableCell>{material.description}</TableCell>
                                <TableCell>{material.observations}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MaterialsList;
