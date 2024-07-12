export const ProjectAPI={
    //tem de ir buscar projectos basicos
    GetHomeProjects : async ()=>{
        try{
            const response = await fetch("https://localhost:8443/innovlab/api/projects/basicProject", {
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
    },

    GetDetailedProject: async(userToken, projectID)=>{
        try{
        const response = await fetch(`https://localhost:8443/innovlab/api/projects/detailedProject/${projectID}`, {
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

    CreateNewProject: async(userToken,formData)=>{
        try{
            const response = await fetch(`https://localhost:8443/innovlab/api/projects`, {
                method:'POST',
                headers:{
                    'Accept': '*/*',
                    'Content-Type': 'application/json',
                    'token':userToken,
                },
                body: JSON.stringify(formData)
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
    GetInterests: async(userToken) =>{
        try{
            const response = await fetch(`https://localhost:8443/innovlab/api/interests`, {
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
    GetSkills: async(userToken) =>{
        try{
            const response = await fetch(`https://localhost:8443/innovlab/api/skills`, {
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




}