import React, { useEffect, useState } from 'react';
import { TextField, Button, Box, Typography, Modal, Alert,IconButton } from '@mui/material';
import  GenerateMockUsers  from '../../Services/utils/GenerateMockUsers'; // Import your mock users for email verification
import { usePageNavigation, } from '../../Services/utils/PageNavigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { UserAPI } from '../../Services/API/UserAPI';
import { OneK } from '@mui/icons-material';

// Mock users for demonstration
//const mockUsers = GenerateMockUsers();


const RecoverPassword = () => {
    const [email, setEmail] = useState('');
    //modal é para avisar que foi enviado um email de reset password
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState(null);
    const navigateToPage = usePageNavigation();

    const handleChange = (event) => {
        setEmail(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null); // Clear any previous errors

        try {
            const success = await UserAPI.RecoverPassword(email);
            if (success) {
                // If request is successful, show the success modal
                setShowModal(true);
            } else {
                // If the API returns false, it means the email was not found or another error occurred
                setError('Email does not exist or could not be sent.');
            }
        } catch (error) {
            // Handle unexpected errors (network issues, etc.)
            setError('An unexpected error occurred. Please try again later.');
        }
    }

    const handleCloseModal = () => {
        setShowModal(false);
        setEmail('');
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <IconButton onClick={()=>navigateToPage('login')}
                sx={{ 
                    position: 'absolute', 
                    top: 16,  // Adjusts the distance from the top
                    left: 16  // Adjusts the distance from the left
                }}
                >
                    <ArrowBackIcon />
                </IconButton>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, p: 4, border: '1px solid #ddd', borderRadius: 2, boxShadow: 3 }}>
                <Typography variant="h5" gutterBottom>Recover Password</Typography>
                <TextField
                    label="Enter your email"
                    variant="outlined"
                    value={email}
                    onChange={handleChange}
                    fullWidth
                    required
                />
                {error && <Alert severity="error">{error}</Alert>}
                <Button type="submit" variant="contained" color="primary">Submit</Button>
            </Box>

            <Modal
                open={showModal}
                onClose={handleCloseModal}
                aria-labelledby="password-reset-success"
                aria-describedby="password-reset-email-sent"
            >
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 300, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4, textAlign: 'center' }}>
                    <Typography id="password-reset-success" variant="h6" component="h2">Success</Typography>
                    <Typography id="password-reset-email-sent">A password reset link has been sent to your email address.</Typography>
                    <Button onClick={handleCloseModal} variant="contained" sx={{ mt: 2 }}>Close</Button>
                </Box>
            </Modal>
        </Box>
    );
}

export default RecoverPassword;
