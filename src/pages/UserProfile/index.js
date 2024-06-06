//vai receber os componentes associados ao perfil do user
//recebe um header do perfil que mostra a foto e os detalhes do user, tal como a biografia- UserHeader component
//recebe um preferences do user, onde mostra as suas skills e interesses, tal como a preferencia de ter um perfil privado ou publico- UserPreferences component
//recebe os projetos onde este user está inserido, em forma de tabela-UserProjects component

// UserProfile.js
import React from 'react';
import UserHeader from '../../components/UserProfileComponents/UserHeader';
import UserPreferences from '../../components/UserProfileComponents/UserPreferences';
import UserProjects from '../../components/UserProfileComponents/UserProjects';

//fazer uma variavel "is own profile" que retorna true ou false consoante estejamos a ver o nosso perfil ou o de outro user

const UserProfile = ({ user, projects }) => {
    //botão navigate back to where user was? is there a way to store that information? ou devemos ter sempre um anchor point que leva o user sempre ao mesmo sitio?
  return (
    <div className="user-profile">
      <UserHeader user={user} />
      <UserPreferences user={user} />
      <UserProjects userProjects={user.projects} projects={projects} />
    </div>
  );
};

export default UserProfile;