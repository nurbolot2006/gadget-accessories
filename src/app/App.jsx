import React from 'react';
import Layout from "../components/layout/Layout.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "../pages/home/HomePage.jsx";
import PhonePage from "../pages/phone/PhonePage.jsx";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={ <Layout/>}>
                        <Route index element={ <HomePage/>} />
                        <Route path="/model" element={<PhonePage/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;