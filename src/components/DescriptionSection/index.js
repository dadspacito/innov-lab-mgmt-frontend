import React from 'react';
import { Typography, Box } from '@mui/material';

const DescriptionSection = () => {
    return (
        <Box sx={{ margin: '20px 0', padding: '0 20px', textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
                Welcome to the Project Dashboard
            </Typography>
            <Typography variant="body1" paragraph>
                This platform provides a comprehensive view of all the ongoing and upcoming projects.
                You can explore various projects, create new ones, and manage your contributions effectively.
                Start by browsing through the projects or create your own.
            </Typography>
        </Box>
    );
}

export default DescriptionSection;
