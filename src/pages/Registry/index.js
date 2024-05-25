import {React, useState} from 'react';
import { TextField, Button, Box, Typography, Container} from "@mui/material";
import {useNavigate} from 'react-router-dom'


/**funções para exportar, ficam mais facilmente testaveis */
//falta colocar aqui todas as funções que tratam da 
export function passwordConfirmation(password, confirmPassword){
    if (password !== confirmPassword){
            return false
        }
        return true;
}

//handles email validation
 export function emailValidation(email){
    if (!email || email.length === 0 || !/@/.test(email) || /\s/.test(email)){
        switch(true){
            case !email:
                console.log('email is empty or undefined');
                return false;
            case email.length === 0:
                console.log('email length is 0')
                return false;
            case !/@/.test(email):
                console.log("there is no @ in your email");
                return false;
            case /\s/.test(email):
                console.log('spaces are not allowed in the email');
                return false;
            default:
                console.log("there are other validation errors in your email");
                return false;
        }
    }
    else {
        return true;
    }
}
//handles password validation (rules for password input, not comparison with the confirm password field)
export function passwordValidation(password){
    if (!password || password.length === 0 || password.length < 8 /*|| !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password) || !/[^A-Za-z0-9]/.test(password)*/){
        switch (true){
            case password.length === 0:
                console.log('your password is undefined')
                return false;
            case password.length < 8:
                console.log('your password length does not have minimum 8 chars')
                return false;
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
      return true;
  }
//function that wraps together all verifications to allow a user to register
export function credentialConfirmation(password, confirmPassword, email){
    if (passwordConfirmation(password, confirmPassword) && emailValidation(email) && passwordValidation(password)){
        return true;
    }
    else 
        return false;
}

/**COMPONENTE */
const RegistryForm = () =>{
    const navigate = useNavigate();
    //user object that will be sent to backend
    const [user, setUser] = useState({
        firstName:'',
        lastName:'',
        username:'',
        email:'',
        password:'',
    });

    //NAVEGAÇÂO
    const goToLogin =()=>{
        console.log("button clicked")
        navigate('/login', {replace:true})
    }

    //confirmação password
    const [confirmPassword, setConfirmPassword] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

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
        setFormSubmitted(true);
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
                        //email confirmation
                        error = {formSubmitted && !emailValidation(user.email)}
                        helperText ={formSubmitted && !emailValidation(user.email) &&  "invalid email"}  
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
                        //password validation
                        error={formSubmitted && !passwordValidation(user.password)}
                        helperText = {!passwordValidation(user.password) && formSubmitted && "invalid password"}
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
                        //tem de ser no submit para so aparecer quando se quer 
                        error={formSubmitted && !passwordConfirmation(user.password, confirmPassword)}
                        
                        helperText={formSubmitted && !passwordConfirmation(user.password, confirmPassword) && "Passwords do not match"}
                        inputProps={{
                            "data-testid":"confirm-password-input"
                        }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        data-testid="register-button"
                    >
                        Register
                    </Button>
                    <Button
                        type="button"
                        onClick={goToLogin}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        data-testid="return-login-button"
                    >
                        return to login page
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default RegistryForm;

