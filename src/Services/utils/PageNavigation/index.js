/**
 * esta util tem como objetivo ter funções de utilizade de modo a que não seja preciso estar sempre a puxar 
 */
import React from 'react'
//função que faria o navigate simples,mas que não funciona bem, tenho de ver melhor
import { useNavigate } from 'react-router-dom';

export function usePageNavigation() {
    const navigate = useNavigate();
  
    // Function to navigate to different pages
    return function navigateToPage(page) {
      switch (page) {
        case 'login':
            console.log('login being called')
          navigate('/login', { replace: true });
          break;
        case 'registry':
          navigate('/registry', { replace: true });
          break;
        case 'logout':
            logout()
        default:
          console.log('Default case called in the navigateToPage function');
          break;
      }
    }
    
}


export function logout(){
    console.log('logging out')
    //aqui faz set ao token deste user para null e navega para a homepage sem estar logged in

}