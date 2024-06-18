const Login = {
    // POST to send user credentials
    logInUser: async (email, password) => {
        try {
            const response = await fetch('https://localhost:8443/innovlab/api/sessions', {
                method: 'POST',
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }), // Correct JSON structure
            });

            // Log the status for debugging
            console.log('Response status:', response.status);

            // Check the response status
            if (response.status === 201) { // Successfully authenticated
                console.log('User logs in');
                return true;
            } else if (response.status === 401) { // Unauthorized
                console.error('Unauthorized: Incorrect email or password');
                return false;
            } else if (response.status === 403) { // Forbidden
                console.error('Forbidden: User does not have access');
                return false;
            } else if (response.status === 404) { // Not found
                console.error('Not found: The endpoint does not exist');
                return false;
            } else { // Other errors
                console.error('Login failed with status:', response.status);
                return false;
            }
        } catch (error) {
            console.error('Something went wrong:', error);
            return false; // Return false in case of a catch
        }
    },
    // RegisterUser: async (user)=>{
    //     try{
    //         const response = await fetch ('https://localhost:8443/innovlab/api/sessions',{

    //         })
    //     }

    // }
};

export default Login;
