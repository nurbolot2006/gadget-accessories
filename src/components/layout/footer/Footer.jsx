import React from 'react';
import "./Footer.scss";

import Logo from '../../../assets/footer-logo.svg';
import Bumerang from '../../../assets/bumerang-logo.svg';
import PhoneIcon from "../../../assets/icons/phone-icon.svg";
import VkIcon from "../../../assets/icons/vk-icon.svg";
import InstagramIcon from "../../../assets/icons/instagram-icon.svg";
import VisaLogo from "../../../assets/visa-logo.svg";
import MastercardIcon from "../../../assets/mastercard-logo.svg";
import MaestroLogo from "../../../assets/maestro-logo.svg";
import MirLogo from "../../../assets/mir-logo.svg";

const contacts = [
    {
        icon: PhoneIcon,
        text: "+7 (965) 237-44-49"
    },
    {
        icon: VkIcon,
        text: "vk.com/*long_link*"
    },
    {
        icon: InstagramIcon,
        text: "@*long_nickname*"
    }
];

const navLinks = [
    {
        text: "О компании",
        href: "#"
    },
    {
        text: "Доставка и оплата",
        href: "#"
    },
    {
        text: "Гарантии",
        href: "#"
    },
    {
        text: "Контакты",
        href: "#"
    }
];

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__logo">
                    <img src={Logo} alt="Логотип"/>
                </div>

                <nav className="footer__nav">
                    <h3>Навигация</h3>
                    <ul>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.href}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <address className="footer__contacts">
                    <h3>Контакты</h3>
                    <ul>
                        {contacts.map((contact, index) => (
                            <li key={index} className="footer__contact-item">
                                <img src={contact.icon} alt=""/>
                                <span>{contact.text}</span>
                            </li>
                        ))}
                    </ul>
                </address>

                <div className="footer__payments">
                    <h3>Способы оплаты</h3>
                    <div className="footer__payment-icons">
                        <img src={VisaLogo} alt="img"/>
                        <img src={MastercardIcon} alt="img"/>
                        <img src={MaestroLogo} alt="img"/>
                        <img src={MirLogo} alt="img"/>
                    </div>
                </div>

                <div className="footer__dev">
                    <h4>РАЗРАБОТКА САЙТА</h4>
                    <img src={Bumerang} alt="Bumerang Logo"/>
                    <p><a href="#">Политика конфиденциальности</a></p>
                    <p>No Doors Technology © 2020</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
