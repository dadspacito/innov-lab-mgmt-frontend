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
//perceber melhor o que faz o browserRouter 

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header />
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
      </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp;