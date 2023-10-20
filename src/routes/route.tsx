import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";

export const AppRoutes: React.FC = () => (
    <BrowserRouter>
        <Routes> 
            <Route path="/" element={ <Home /> }/>
        </Routes>
    </BrowserRouter>
)