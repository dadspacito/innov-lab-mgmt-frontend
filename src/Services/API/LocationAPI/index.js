//este API serve singularmente para retornar as localizações
//enganei me na nomenclatura, era suposto ser workplace API

export const LocationAPI={
    GetLocations : async()=>{
        try{
            const response = await fetch ('https://localhost:8443/innovlab/api/locations',{
                method:'GET',
                headers:{
                    'Accept': '*/*',
                    'Content-Type': 'application/json',
                },

            });
            if (response.status === 200){
                const data = await response.json();
                return data;
            }
            else console.log('something has gone wrong with the response status' + response.status)
        }
        catch (error){
            console.error('something went wrong with the try method');
        }
    }
}