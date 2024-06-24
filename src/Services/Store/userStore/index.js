import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';


//aqui define-se a store do user, deixei assim para depois conversarmos como é que queremos que a store fique
export const userStore = create (
    //ver se o persist é necessário aqui
    persist(
        (set) =>({
            user:{},
            userToken:"",
            updateUserToken:(userToken)=>set({userToken}),
            updateUser:(user)=>set({user}),

            clearUser:()=>set({
                user:{},
                userToken:"",
             })
        }),
        {
            name:'userStore',
            storage:createJSONStorage(()=>sessionStorage)
        }
    )
);
