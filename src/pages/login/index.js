import React from "react";
import { TextField, Button, Box, Typography, Container } from "@mui/material";
import { usePageNavigation, } from '../../Services/utils/PageNavigation';
import Login from './../../Services/API/LoginAPI';

const LoginForm = () => {
  //const navigate = useNavigate();
  const navigateToPage = usePageNavigation();
  //isto 
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    //aqui chama o serviço de login 
    const email = data.get("email");
    const password = data.get("password");
    Login.logInUser(email, password);

    
    // navigateToPage('homepage')
    // Lógica de autenticação aqui
    //verifica se existe no backend um email e password com este nome para poder entrar na app
    console.log(email + " " + password);
  }


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
