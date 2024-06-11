//vai receber os componentes associados ao perfil do user
//recebe um header do perfil que mostra a foto e os detalhes do user, tal como a biografia- UserHeader component
//recebe um preferences do user, onde mostra as suas skills e interesses, tal como a preferencia de ter um perfil privado ou publico- UserPreferences component
//recebe os projetos onde este user está inserido, em forma de tabela-UserProjects component
//falta a parte de enviar mensagem a users
//algo como send message, em que aparece uma lista de users e uma text area que permite enviar a mensagem

// UserProfile.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import UserHeader from '../../components/UserProfileComponents/UserHeader';
import UserPreferences from '../../components/UserProfileComponents/UserPreferences';
import UserProjects from '../../components/UserProfileComponents/UserProjects';
import ErrorBoundary from '../../Services/utils/ErrorBoundary';
import GenerateMockUsers from '../../Services/utils/GenerateMockUsers';

//fazer uma variavel "is own profile" que retorna true ou false consoante estejamos a ver o nosso perfil ou o de outro user
const mockUser = GenerateMockUsers;
//função para ir buscar interesses e skills. Refazer tabela das skills e interesses par ficar mais de acordo com os dados que vem do backend
//aqui precisa da tabela de skills e interesses

const UserProfile = () => {
  const location = useLocation(); // Use useLocation to access the current location
  const user = location.state?.user; // Retrieve the user from the state
  const projects = location.state?.projects || []; // Retrieve projects if passed, else default to an empty array

  // If user data is not available, you might want to handle this scenario, e.g., redirect or show an error
  if (!user) {
    return <p>No user data available. Please navigate back and select a user.</p>;
  }


  //criar user 
  
  // const user = mockUser;
  
    //botão navigate back to where user was? is there a way to store that information? ou devemos ter sempre um anchor point que leva o user sempre ao mesmo sitio?
    //URL da pagina tem de ter referencia ao token do user? tem de ter referencia a alguma coisa
    //tem de receber um user

  return (
    <div className="user-profile">
      <ErrorBoundary fallback ='error rendering user header'>
      <UserHeader user={user} isOwnProfile={true} />
      </ErrorBoundary>
      <ErrorBoundary fallback = 'error rendering user preferences'>
      <UserPreferences user={user} />
      </ErrorBoundary>
      <ErrorBoundary fallback = 'error rendering user projects'>
      <UserProjects/>
      </ErrorBoundary>
    </div>
  );
};

export default UserProfile;