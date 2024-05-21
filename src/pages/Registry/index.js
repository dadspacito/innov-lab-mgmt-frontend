import {React, useState} from 'react';
import { TextField, Button, Box, Typography, Container} from "@mui/material";
import {useNavigate} from 'react-router-dom'

const RegistryForm = () =>{
    const navigate = useNavigate();
    //these values are all that are required for the registry of a user. More details they can complete their profile when they log in
    //navigate to login page
    //navigate to login on register
    const [user, setUser] = useState({
        firstName:'',
        lastName:'',
        username:'',
        email:'',
        password:'',
        //aqui falta o local onde trabalha
    });
    //NAVEGAÇÂO
    const goToLogin =()=>{
        console.log("button clicked")
        navigate('/login', {replace:true})
    }

    //confirmação password
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState(false);
    const [invalidPassword, setInvalidPassword]= useState(false);
    //confirmação email
    const [emailInputError, setEmailInputError] = useState(false);

    //handle inputs for registry
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
    //handle input in the confirm password field
    const handleConfirmPassword = (e)=>{
        const {value} = e.target;
        setConfirmPassword(value);
    }
    //handles email validation
    const emailValidation=(email)=>{
        if (!email || email.length === 0 || !/@/.test(email) || /\s/.test(email)){
          switch(true){
            case !email:
              console.log('email is empty or undefined');
              setEmailInputError(true);
              break;
            case email.length === 0:
              console.log('email length is 0')
              setEmailInputError(true);
              break;
            case !/@/.test(email):
              console.log("there is no @ in your email");
              setEmailInputError(true);
              break;
            case /\s/.test(email):
              console.log('spaces are not allowed in the email');
              setEmailInputError(true);
              break;
            default:
              console.log("there are other validation errors in your email");
              setEmailInputError(true);
          }
        }
        else {
            setEmailInputError(false);
          return true;
        }
      }

      //handles password validation
      //implement a pop-over/some sourt of visual guide to display password rules
      const passwordValidation =(password)=>{
        if (!password || password.length === 0 || password.length < 8 /*|| !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password) || !/[^A-Za-z0-9]/.test(password)*/){
          switch (true){
            case password.length === 0:
                setInvalidPassword(true);
              console.log('your password is undefined')
              return false;
              break;
            case password.length < 8:
                setInvalidPassword(true);
              console.log('your password length does not have minimum 8 chars')
              return false;
              break;

              /*
            case !/[A-Z]/.test(password):
              setInvalidPassword(true);
              console.log('your password must contain an uppercase letter');
              break;
            case !/[a-z]/.test(password):
                setInvalidPassword(true);
              console.log('your password must contain at least one lower case letter');
              break;
            case !/\d/.test(password):
                setInvalidPassword(true);
              console.log('your password must contain at least one digit');
              break;
            case !/[^A-Za-z0-9]/.test(password):
                setInvalidPassword(true);
              console.log('your password must contain at least one special character');
              break;
              */
            default: console.log('your password is wrong')
          }
        }
          setInvalidPassword(false);
          return true;
      }
      //handles comparison between password and confirm password field
      const passwordConfirmation=(password)=>{
        if (password !== confirmPassword){
            setPasswordMatchError(true);
            return console.log("password error");
        }
        setPasswordMatchError(false);
        return true;
      }
      //function that verifies if everything is true    
      const credentialConfirmation = ()=>{
        if (passwordConfirmation(user.password) && emailValidation(user.email) && passwordValidation(user.password)){
            return true;
        }
        else 
        return false;

      }

    /**
     * handle registry credentials
     * if password does not match, return something (can be a function)
     * if email does not return true, return false
     * if both come true return the user data
     * @param {*} event 
     * @returns 
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        if (credentialConfirmation()){
            goToLogin();
            console.log('user sucessfully registered')
        }
        else console.log('error registering user');
    };
    //importante: os data test inputs são valores que se podem dar que permitem que ao fazer o teste seja um identificador
    //a vantagem é que mesmo que os outros identificadores sejam alterados ao longo da produção, este testID nao sofra modificações
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
                    Registry
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        name="firstName"
                        autoFocus
                        value={user.firstName}
                        onChange={handleChange}
                        inputProps={{
                            "data-testid":"first-name-input"
                        }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        value={user.lastName}
                        onChange={handleChange}
                        inputProps={{
                            "data-testid":"last-name-input"
                        }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="Username"
                        label="Username"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        inputProps={{
                            "data-testid":"username-input"
                        }}
                        //aqui tem de ser colocado um erro se o username já existir 
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        error = {emailInputError}
                        helperText ={emailInputError && "invalid email"}  
                        inputProps={{
                            "data-testid":"email-input"
                        }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={user.password}
                        onChange={handleChange}
                        error={invalidPassword}
                        helperText = {invalidPassword && "invalid password"}
                        inputProps={{
                            "data-testid":"password-input"
                        }}
                        
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="confirmPassword"
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        value={confirmPassword}
                        onChange={handleConfirmPassword}
                        error={passwordMatchError}
                        helperText={passwordMatchError && "Passwords do not match"}
                        inputProps={{
                            "data-testid":"confirm-password-input"
                        }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Register
                    </Button>
                    <Button
                        type="button"
                        onClick={goToLogin}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        return to login page
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default RegistryForm;