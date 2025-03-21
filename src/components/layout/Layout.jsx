import React, { useState } from 'react';
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";
import BasketModal from "../basketModal/BasketModal";
import { Outlet } from "react-router";

const Layout = () => {
    const [isBasketOpen, setIsBasketOpen] = useState(false);

    return (
        <div>
            <Header onBasketClick={() => setIsBasketOpen(true)} />
            <Outlet />
            <Footer />
            <BasketModal isOpen={isBasketOpen} onClose={() => setIsBasketOpen(false)} />
        </div>
    );
};

export default Layout;
