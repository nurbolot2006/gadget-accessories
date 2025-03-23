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
import {useNavigate} from "react-router";

const contacts = [
    { icon: PhoneIcon, text: "+7 (965) 237-44-49", link: "tel:+79652374449" },
    { icon: VkIcon, text: "vk.com/*long_link*", link: "https://vk.com" },
    { icon: InstagramIcon, text: "@*long_nickname*", link: "https://instagram.com" }
];


const Footer = () => {
    const navigate = useNavigate();
    return (<footer className="footer">
        <div className="footer__container">
            <div className="footer__logo">
                <img onClick={() => {
                    navigate("/");
                }} src={Logo} alt="Логотип"/>
            </div>

            <nav className="footer__nav">
                <h3>Навигация</h3>
                {/*<ul>*/}
                    <div>
                        <p onClick={() => {
                            navigate('/AboutTheCompany')
                        }}>О компании</p>
                        <p onClick={() => {
                            navigate('/Delivery')
                        }}>Доставка и оплата</p>
                        <p onClick={() => {
                            navigate('/Guarantees')
                        }}>Гарантии</p>
                        <p onClick={() => {
                            navigate('/Contacts')
                        }}>Контакты</p>
                    </div>
                {/*</ul>*/}
            </nav>

            <address className="footer__contacts">
                <h3>Контакты</h3>
                <ul>
                    {contacts.map((contact, index) => (
                        <li key={index} className="footer__contact-item">
                            <img src={contact.icon} alt="" />
                            <a href={contact.link} target="_blank" rel="noopener noreferrer">
                                {contact.text}
                            </a>
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
    </footer>);
};

export default Footer;