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
    }
}