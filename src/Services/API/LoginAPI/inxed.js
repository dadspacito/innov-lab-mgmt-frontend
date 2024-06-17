//funções para login 
const Login={
    //POST para enviar crendenciais user que existe 
    logInUser: async (email, password)=>{
        const validUser= false;
        try{
            const response = fetch('http://localhost:8080/innovlab',{
                method:'POST',
                headers:{'accept': '*/*',
                'content-type': 'application/json', 
            },
            body:JSON.stringify({email : {email}, password : {password}}),
        }).then(function(response){
            if (response.status === 200){
                console.log(' user logs in');
                validUser= true;
            }
            console.log('error');
        })
    }
        catch(error){
            console.error('something went wrong, response status : ' + response.status)
        }
    }
}
