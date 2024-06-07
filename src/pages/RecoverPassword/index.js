import React, { useEffect, useState } from 'react';
import { TextField, Button, Box, Typography, Modal, Alert,IconButton } from '@mui/material';
import  GenerateMockUsers  from '../../Services/utils/GenerateMockUsers'; // Import your mock users for email verification
import { usePageNavigation, } from '../../Services/utils/PageNavigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Mock users for demonstration
const mockUsers = GenerateMockUsers();


const RecoverPassword = () => {
    const [email, setEmail] = useState('');
    const [emailExists, setEmailExists] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState(null);
    const navigateToPage = usePageNavigation();

   useEffect(() => {
        console.log(mockUsers);
    }, []);

    const handleChange = (event) => {
        setEmail(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Check if the email exists in the mock users
        const user = mockUsers.find(user => user.email === email);
        if (user) {
            setEmailExists(true);
            setShowModal(true);
            setError(null);
            navigateToPage('login');
        } else {
            setEmailExists(false);
            setError("The provided email does not exist.");
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
