import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LoginForm from "./pages/login";
import RegistryForm from "./pages/Registry";
import { BrowserRouter as Router} from "react-router-dom";
import { Routes, Route } from "react-router-dom"
import DashBoard from "./pages/DashBoard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
      <Routes>
        <Route index element={<App />}/>
        <Route path="/registry" element={<RegistryForm/>} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path='/dashboard' element ={<DashBoard/>}/>
      </Routes>
    </Router>
);
