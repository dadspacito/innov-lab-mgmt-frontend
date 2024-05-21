import React from "react";
import { TextField, Button, Box, Typography, Container } from "@mui/material";
import {useNavigate} from 'react-router-dom'

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    // Lógica de autenticação aqui
    //verifica se existe no backend um email e password com este nome para poder entrar na app
    
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
            onClick={() => navigate("/registry")}
            sx={{ mb: 2 }}
          >
            Register
          </Button>
          <Button
            fullWidth
            variant="text"
            //onClick={() => navigate("/recover-password")}
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