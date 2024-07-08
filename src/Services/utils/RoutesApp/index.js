// import LoginForm from "./pages/LoginForm";
import LoginForm from "../../../pages/login";
import RegistryForm from "../../../pages/Registry";
import { BrowserRouter} from "react-router-dom";
import { Routes, Route } from "react-router-dom"
import Homepage from "../../../pages/Homepage";
import ProjectList from "../../../pages/AllProjects";
import ProjectCreationWizard from "../../../pages/ProjectCreation";
import UserProfile from "../../../pages/UserProfile";
import RecoverPassword from "../../../pages/RecoverPassword";
import MaterialsList from "../../../pages/ProjectMaterials";
import Header from "../../../components/Header";
import ProjectPage from "../../../pages/ProjectPage";
import { userStore } from "../../Store/userStore";
import Activation from "../../../pages/ActivateAccount";
import ResetPassword from "../../../pages/ResetPassword";


function RoutesApp(){
    const user = userStore((state)=>state.user);
    const isUserLoggedIn = user && user.nickname; // Adjust the condition based on your user's structure

    //o nickname pode sair, é so o {...user}
    return(
        <BrowserRouter>
        <Header isUserOn={isUserLoggedIn} userName={isUserLoggedIn ? user.nickname : ""} user ={isUserLoggedIn ? { ...user } : null} />
        <Routes>
            <Route path='/' element ={<Homepage/>}/>        
            <Route path="/registry" element={<RegistryForm/>} />
            <Route path="/login" element={<LoginForm/>} />
            <Route path='/homepage' element ={<Homepage/>}/>
            <Route path ='/allProjects' element = {<ProjectList/>}/>
            <Route path = '/createProject' element ={<ProjectCreationWizard />}/>
            <Route path = '/userProfile' element = {<UserProfile/>}/>
            <Route path ='/recoverpassword' element = {<RecoverPassword />}/>
            <Route path ='/materialsPage' element = {<MaterialsList/>}/>
            <Route path = '/projectPage' element = {<ProjectPage/>} />
            <Route path ="/users/activations/:emailtoken" element={<Activation />} />
            <Route path = "/reset-password/:emailtoken" element ={<ResetPassword />}/>
      </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp;