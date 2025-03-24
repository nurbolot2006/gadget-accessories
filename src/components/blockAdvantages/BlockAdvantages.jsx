import React from "react";
import "./BlockAdvantages.scss";
import { useTranslation } from "react-i18next";

import Discount from "../../assets/icons-asvantages/discount-icons.svg";
import Safe from "../../assets/icons-asvantages/safe-icon.svg";
import Factory from "../../assets/icons-asvantages/factory.svg";
import Quality from "../../assets/icons-asvantages/quality-icon.svg";
import Broken from "../../assets/icons-asvantages/broken-icon.svg";

const BlockAdvantages = () => {
    const { t } = useTranslation();

    const card = [
        { icon: Discount, text: t("wholesalePrices") },
        { icon: Safe, text: t("warrantyOneYear") },
        { icon: Factory, text: t("directFromManufacturers") },
        { icon: Quality, text: t("qualityControl") },
        { icon: Broken, text: t("quickReplacement") },
    ];

    return (
        <div className="advantages">
            {card.map((item, index) => (
                <div key={index} className="advantages__card">
                    <img src={item.icon} alt="icon" className="advantages__icon" />
                    <p className="advantages__text">{item.text}</p>
                </div>
            ))}
        </div>
    );
};

export default BlockAdvantages;
