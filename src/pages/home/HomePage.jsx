import React from 'react';
import BlockAdvantages from "../../components/blockAdvantages/BlockAdvantages.jsx";
import Model from "../../components/brand/Brand.jsx";
import ListProducts from "../../components/listProducts/ListProducts.jsx";

const HomePage = () => {
    return (
        <div>
            <main>
                <Model/>
                <BlockAdvantages/>
            </main>
        </div>
    );
};

export default HomePage;