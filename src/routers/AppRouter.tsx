import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameDetailPage from "../pages/GameDetails";
import HomePage from "../pages/HonePage";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
    <Route path="/game/:id" element={<GameDetailPage />} />
    </Routes>
    </BrowserRouter>
);
}
