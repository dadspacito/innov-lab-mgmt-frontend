import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LoginForm from "./pages/login";
import RegistryForm from "./pages/Registry";
import { BrowserRouter as Router} from "react-router-dom";
import { Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage";
import ProjectList from "./pages/AllProjects";
import ProjectCreationWizard from "./pages/ProjectCreation";
import UserProfile from "./pages/UserProfile";
import RecoverPassword from "./pages/RecoverPassword";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
      <Routes>
        <Route index element={<App />}/>
        <Route path="/registry" element={<RegistryForm/>} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path='/homepage' element ={<Homepage/>}/>
        <Route path ='/allProjects' element = {<ProjectList/>}/>
        <Route path = '/createProject' element ={<ProjectCreationWizard />}/>
        <Route path = '/userProfile' element = {<UserProfile/>}/>
        <Route path ='/recoverpassword' element = {<RecoverPassword />}/>
      </Routes>
    </Router>
);
