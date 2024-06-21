import React, {useState} from "react";
import { TextField, Button, Box, Typography, Container, Alert } from "@mui/material";
import { usePageNavigation, } from '../../Services/utils/PageNavigation';
import {SessionAPI} from '../../Services/API/SessionAPI';
import { UserAPI } from "../../Services/API/UserAPI";
import { userStore } from "../../Services/Store/userStore";

const LoginForm = () => {
  //const navigate = useNavigate();
  const navigateToPage = usePageNavigation();
  const storeUser = userStore((state)=>state.updateUser)
  const [errorMessage, setErrorMessage] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    //aqui chama o serviço de login 
    const email = data.get("email");
    const password = data.get("password");

    try {
      // Attempt to log in the user
      const loginSuccess = await SessionAPI.logInUser(email, password);

      if (loginSuccess) {
        // Fetch user data if login is successful
        const dataUser = await UserAPI.getUserByEmail(email);
        storeUser(dataUser); // Store user data in the state
        navigateToPage('homepage'); // Navigate to the homepage
      } else {
        // Show error message if login fails
        setErrorMessage("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error('Something went wrong during login:', error);
      setErrorMessage("An error occurred during login. Please try again.");
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
          Login
        </Typography>
        {errorMessage && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {errorMessage}
          </Alert>
        )}
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Button
            fullWidth
            variant="text"
            onClick={() => navigateToPage("registry")}
            sx={{ mb: 2 }}
          >
            Register
          </Button>
          <Button
            fullWidth
            variant="text"
            onClick={() => navigateToPage("recoverPassword")}
            sx={{ mb: 2 }}
          >
            Recover Password
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
