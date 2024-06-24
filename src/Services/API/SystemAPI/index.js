//funções referentes à plataforma, que gerem plataforma, registo de user, inativação de user, etc

export const SystemAPI={
    RegisterUser: async(user)=>{
            try{
                const response = await fetch ('https://localhost:8443/innovlab/api/users',{
                    method:'POST',
                    headers:{
                        'Accept': '*/*',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(user)

    
                });
                if (response.status === 201){
                    console.log('user was sucessfully registered in the database')
                }
                else console.log('something has gone wrong with the response status' + response.status)
            }
            catch (error){
                console.error('something went wrong with the try method');
            }
        }
}