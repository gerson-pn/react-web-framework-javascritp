import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import Login from "./pages/login";
export default function Roteador() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}