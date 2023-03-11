import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/landing/LandingPage';
import { WindowResizingPage } from './pages/windowResizing/WindowResizingPage';
import { AppRoute } from './utils/AppRoute';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path={AppRoute.WindowSizing.fullPath} element={<WindowResizingPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
