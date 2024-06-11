import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import GenerateMockMaterials from './../../Services/utils/GenerateMockMaterials';

const mockMaterials = GenerateMockMaterials();

const MaterialsList = () => {
    // Combine components and resources into one list with a type indicator
    const combinedMaterials = [
        ...mockMaterials.components.map(material => ({ ...material, type: 'Component' })),
        ...mockMaterials.resources.map(material => ({ ...material, type: 'Resource' }))
    ];

    return (
        <TableContainer component={Paper} sx={{ marginTop: '20px', padding: '20px' }}>
            <Table sx={{ minWidth: 650 }} aria-label="materials table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Type</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {combinedMaterials.map((material) => (
                        <TableRow key={material.id}>
                            <TableCell>{material.id}</TableCell>
                            <TableCell>{material.name}</TableCell>
                            <TableCell>{material.type}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MaterialsList;
