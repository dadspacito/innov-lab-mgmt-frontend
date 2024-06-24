// Activation.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CircularProgress, Typography, Container, Box } from '@mui/material';
import { userStore } from '../../Services/Store/userStore';

const Activation = () => {
    const { emailtoken } = useParams(); // Extract the token from the URL
    const [activationStatus, setActivationStatus] = useState(null); // To store the status of activation
    const navigate = useNavigate();
    const { clearUser } = userStore();

    useEffect(() => {
        const activateUser = async () => {
            if (!emailtoken) {
                console.error('Error: No email token provided.');
                setActivationStatus('Error: No email token provided.');
                return;
            }

            console.log('Activating user with token:', emailtoken);

            try {
                const response = await fetch(`https://localhost:8443/innovlab/api/users/activations/${emailtoken}`, {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                });

                if (response.status === 200) {
                    console.log('Account successfully activated');
                    setActivationStatus('Success: Your account has been activated!');
                } else {
                    console.log('Activation failed with status:', response.status);
                    setActivationStatus('Error: Invalid email token or activation failed.');
                }
            } catch (error) {
                console.error('Error activating account:', error);
                setActivationStatus('Error: Something went wrong during account activation.');
            }
        };

        if (emailtoken) {
            activateUser();
            clearUser();
        } else {
            setActivationStatus('Error: No email token provided.');
        }
    }, [emailtoken, clearUser]);

    return (
        <Container>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mt={5}>
                {!activationStatus ? (
                    <CircularProgress />
                ) : (
                    <Typography variant="h5">
                        {activationStatus}
                    </Typography>
                )}
            </Box>
        </Container>
    );
};

export default Activation;
