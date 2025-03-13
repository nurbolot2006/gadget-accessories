import React from 'react';
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";
import {Outlet} from "react-router";

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;