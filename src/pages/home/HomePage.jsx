import React from 'react';
import BlockAdvantages from "../../components/blockAdvantages/BlockAdvantages.jsx";
import Model from "../../components/brand/Brand.jsx";
import Block from "../../components/block/Block.jsx";

const HomePage = () => {
    return (
        <div>
            <main>
                <Model/>
                <BlockAdvantages/>
                <Block/>
            </main>
        </div>
    );
};

export default HomePage;