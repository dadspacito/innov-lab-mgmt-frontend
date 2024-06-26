//retorna o user pelo email
export const UserAPI ={
    getUserByEmail: async (email)=>{
        try{
            
            const response = await fetch(`https://localhost:8443/innovlab/api/users/${email}`,{
                method: 'GET',
                headers: {
                    'Accept': '*/*',    
                    'Content-Type':'application/json'
                },
            })
            if (response.status === 200){
                const dataUser = await response.json();
                return dataUser;
            }
            else return null;
        }
        catch (error) {
            console.error('Something went wrong:', error);
            return null; // Return false in case of a catch
        }
    },
    //sees user email and sends password recovery email 
    RecoverPassword: async (email) =>{
    try{
        const response =  await fetch(`https://localhost:8443/innovlab/api/users/passwords/resets`,{
            method:'POST',
            headers:{
                'Accept':'*/*',
                'Content-Type':'application/json',
                'email': email,
            }
        });
        if (response.status === 200){
            console.log('reset password email was sent to this user email')
            console.log(email);
            return true;
        }
        else console.log ('email does not exist ' + response.status);
        return false;
    }
    
    catch(error){
        console.error('something went wrong with the request' +  error)
    }
    },

    // SetNewPassword: async (password)=>{


    // }
}