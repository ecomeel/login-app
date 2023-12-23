import { Routes, Route } from "react-router-dom";

import "./App.scss";

import HomePage from "./components/Homepage";
import LoginPage from "./components/LoginPage";
import RegistrPage from "./components/RegistrPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrPage />} />
        </Routes>
    );
}

export default App;
