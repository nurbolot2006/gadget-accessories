import React from 'react';
import Layout from "../components/layout/Layout.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "../pages/home/HomePage.jsx";
import PhonePage from "../pages/phone/PhonePage.jsx";
import Category from "../components/category/Category.jsx";
import ListProductsPage from "../pages/listProducts/ListProductsPage.jsx";
import ProductPage from "../pages/product/ProductPage.jsx";
import CompanyPages from "../pages/company/CompanyPages.jsx";
import GuaranteesPages from "../pages/Guarantees/GuaranteesPages.jsx";
import ContactsPages from "../pages/contacts/ContactsPages.jsx";
import DeliveryPages from "../pages/delivery/DeliveryPages.jsx";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={ <Layout/>}>
                        <Route index element={ <HomePage/>} />
                        <Route path="/model/:id" element={<PhonePage/>} />
                        <Route path="/category/:id" element={<Category/>} />
                        <Route path="/listProducts/:id" element={<ListProductsPage/>} />
                        <Route path="Product/:id" element={<ProductPage/>} />
                        <Route path="/AboutTheCompany" element={<CompanyPages/>} />
                        <Route path="/Delivery" element={<DeliveryPages/>} />
                        <Route path="/Guarantees" element={<GuaranteesPages/>} />
                        <Route path="/Contacts" element={<ContactsPages/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;