//vai receber os componentes associados ao perfil do user
//recebe um header do perfil que mostra a foto e os detalhes do user, tal como a biografia- UserHeader component
//recebe um preferences do user, onde mostra as suas skills e interesses, tal como a preferencia de ter um perfil privado ou publico- UserPreferences component
//recebe os projetos onde este user está inserido, em forma de tabela-UserProjects component
//falta a parte de enviar mensagem a users
//algo como send message, em que aparece uma lista de users e uma text area que permite enviar a mensagem

// UserProfile.js
import React from 'react';
import UserHeader from '../../components/UserProfileComponents/UserHeader';
import UserPreferences from '../../components/UserProfileComponents/UserPreferences';
import UserProjects from '../../components/UserProfileComponents/UserProjects';
import ErrorBoundary from '../../Services/utils/ErrorBoundary';

//fazer uma variavel "is own profile" que retorna true ou false consoante estejamos a ver o nosso perfil ou o de outro user

const UserProfile = ({ user, projects }) => {
  
    //botão navigate back to where user was? is there a way to store that information? ou devemos ter sempre um anchor point que leva o user sempre ao mesmo sitio?
  return (
    <div className="user-profile">
      <ErrorBoundary fallback ='error rendering user header'>
      <UserHeader user={user} />
      </ErrorBoundary>
      <ErrorBoundary fallback = 'error rendering user preferences'>
      <UserPreferences user={user} />
      </ErrorBoundary>
      <ErrorBoundary fallback = 'error rendering user projects'>
      <UserProjects/> {/*userProjects={user.projects} projects={projects}*/}
      </ErrorBoundary>
    </div>
  );
};

export default UserProfile;