import { Routes, Route } from "react-router-dom";

import "./App.scss";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegistrPage from "./pages/RegistrPage";

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
