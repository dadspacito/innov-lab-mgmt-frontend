import { userStore } from "../../Store/userStore";


//const userToken = userStore((state)=>state.updateUserToken)
export const SessionAPI = {
    
    // POST to send user credentials
    //retorna o post login dto que é o que é necessário usar 
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
                const data = await response.json();
                console.log(data);
                console.log(data.token);
                return {success: true , data:data}
            } else if (response.status === 401) { // Unauthorized
                console.error('Unauthorized: Incorrect email or password');
                return { success: false, error: 'Unauthorized' };
            } else if (response.status === 403) { // Forbidden
                console.error('Forbidden: User does not have access');
                return { success: false, error: 'Forbidden' };
            } else if (response.status === 404) { // Not found
                console.error('Not found: The endpoint does not exist');
                return { success: false, error: 'Not Found' };
            } else { // Other errors
                console.error('Login failed with status:', response.status);
                return { success: false, error: `Error: ${response.status}` };
            }
        } catch (error) {
            console.error('Something went wrong:', error);
            return { success: false, error: 'Exception' };
        }
    },
    LogOutUser: async (token)=>{
        try{
            const response = await fetch('https://localhost:8443/innovlab/api/sessions',{
                method:'DELETE',
                headers:{
                    'Accept': '*/*',
                    'Content-Type': 'application/json',
                    'token':token
                },
            });
            if (response.status === 200){
                console.log('user sucessfully logged out');
                return true
            }
        }
        catch(error){
            console.error('Something went wrong:', error);
            return false; // Return false in case of a catch
        }
    },
    // GetWorkPlace: async()
};


