import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import MainLayout from "./layouts/MainLayout.jsx";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                {/* Routes With Navbar */}

                <Route element={<MainLayout />}>

                    <Route path="/" element={<Home />} />

                </Route>

            </Routes>

        </BrowserRouter>
    );
}

export default App;