export const MaterialAPI={
    //ver se é necessário token para ver materiais. É necessário para adicionar e remover
    GetAllMaterials:async (userToken)=>{
        try{
            const response = await fetch("https://localhost:8443/innovlab/api/materials", {
                method:'GET',
                headers:{
                    'Accept': '*/*',
                    'Content-Type': 'application/json',
                    'token':userToken,
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
    },
    AddMaterialToList:async()=>{},
    RemoveMaterialFromList: async()=>{},

}