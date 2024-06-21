import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';


//aqui define-se a store do user, deixei assim para depois conversarmos como é que queremos que a store fique
export const userStore = create (
    //ver se o persist é necessário aqui
    persist(
        (set) =>({
            user:{},
            username:"",
            userToken:"",
            userEmail:"",
            updateUsername:(username) =>set({username}),
            updateUserToken:(userToken)=>set({userToken}),
            updateUserEmail:(userEmail)=>set({userEmail}),
            updateUser:(user)=>set({user}),
            clearUser:(user)=>set({})
        }),
        {
            name:'userStore',
            storage:createJSONStorage(()=>sessionStorage)
        }
    )
);
