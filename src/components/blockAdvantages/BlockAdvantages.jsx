import React from 'react';
import "./BlockAdvantages.scss";

import Discount from "../../assets/icons-asvantages/discount-icons.svg";
import Safe from "../../assets/icons-asvantages/safe-icon.svg";
import Factory from "../../assets/icons-asvantages/factory.svg";
import Quality from "../../assets/icons-asvantages/quality-icon.svg";
import Broken from "../../assets/icons-asvantages/broken-icon.svg";

const card = [
    {
        icon: Discount,
        text: "Достойные оптовые цены",
    },
    {
        icon: Safe,
        text: "Даём гарантию от 1 года",
    },
    {
        icon: Factory,
        text: "Работаем напрямую с производителями",
    },
    {
        icon: Quality,
        text: "Контроль качества продукции",
    },
    {
        icon: Broken,
        text: "Быстрая замена при браке",
    },
];


const BlockAdvantages = () => {
    return (
        <div className="advantages">
            {card.map((item, index) => (
                <div key={index} className="advantages__card">
                    <img src={item.icon} alt="icon" className="advantages__icon"/>
                    <p className="advantages__text">{item.text}</p>
                </div>
            ))}
        </div>
    );
};

export default BlockAdvantages;
