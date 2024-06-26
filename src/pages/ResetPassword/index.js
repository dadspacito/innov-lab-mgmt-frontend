import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button, Box, Typography, Alert, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';


// Function to validate the password
// const validatePassword = (password) => {
//     if (!password || password.length < 8) {
//         return 'Password must be at least 8 characters long';
//     }
//     if (!/[A-Z]/.test(password)) {
//         return 'Password must contain at least one uppercase letter';
//     }
//     if (!/[a-z]/.test(password)) {
//         return 'Password must contain at least one lowercase letter';
//     }
//     if (!/\d/.test(password)) {
//         return 'Password must contain at least one digit';
//     }
//     if (!/[^A-Za-z0-9]/.test(password)) {
//         return 'Password must contain at least one special character';
//     }
//     return null;
// };

// Function to confirm password match
const confirmPasswordMatch = (password, confirmPassword) => {
    return password === confirmPassword ? null : 'Passwords do not match';
};

const ResetPassword = () => {
    //email use params 
    const {emailtoken} = useParams();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Clear previous error
        setError(null);

        // Validate the new password
        // const passwordError = validatePassword(newPassword);
        // if (passwordError) {
        //     setError(passwordError);
        //     return;
        // }

        // Check if passwords match
        const matchError = confirmPasswordMatch(password, confirmPassword);
        if (matchError) {
            setError(matchError);
            return;
        }

        //this api call can only be made when the password has been validated

        // Call API to update the password (replace with your actual API call)
        //esta função pode ser integrada nas calls api ou wtv para nao estar aqui a função no componente
        try {
            // Assuming the API requires the new password in the request body
            const response = await fetch(`https://localhost:8443/innovlab/api/users/passwords/resets/${emailtoken}`, {
                method: 'POST',
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({password}), // Adjust according to your API's expected format
            });

            if (response.ok) {
                setSuccess(true);
                // Navigate to the login page after a short delay
                setTimeout(() => navigate('/login'), 2000);
            } else {
                // Extract and display error message from response if available
                const errorData = await response.json();
                setError(errorData.message || 'Failed to update the password');
            }
        } catch (error) {
            console.error('Password update failed:', error);
            setError('An unexpected error occurred. Please try again later.');
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h5">
                    Reset Password
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="New Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Confirm New Password"
                        type="password"
                        name = "password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {error && <Alert severity="error">{error}</Alert>}
                    {success && <Alert severity="success">Password updated successfully. Redirecting to login...</Alert>}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Update Password
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default ResetPassword;
