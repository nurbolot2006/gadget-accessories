import React from 'react';
import "./Header.scss"
import Logo from "../../../assets/logo.svg"
import {FaPhoneAlt} from "react-icons/fa";
import {IoSearch} from "react-icons/io5";
import {MdFavoriteBorder} from "react-icons/md";
import {PiShoppingCart} from "react-icons/pi";

const Header = () => {
    return (
        <div>
            <div className="menu-section">
                <div className="container">
                    <div className="row">
                        <div className={"menu"}>
                            <p>О компании</p>
                            <p>Доставка и оплата</p>
                            <p>Гарантии</p>
                            <p>Контакты</p>
                        </div>
                        <div>
                            <div className="phone">
                                <button>{FaPhoneAlt()}</button>
                                <h5>+7 (965) 237-44-49</h5>
                            </div>
                            <select>
                                <option value="">Русский</option>
                                <option value="">English</option>
                            </select>
                            <p>Личный кабинет</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={" container"}>
                <div className={"search"}>
                    <div>
                        <img className={"img-logo"} src={Logo} alt=""/>
                    </div>
                    <div className="search-input">
                        <input type="text" placeholder={"Введите поисковой запрос.."}/>
                        <button className={"search-btn"}>{IoSearch()} Найти</button>
                    </div>
                    <div className={"favorite-basket"}>
                        <div>
                            <MdFavoriteBorder className={"icon"}/>
                            <p>Избранное</p>
                        </div>
                        <div>
                            <PiShoppingCart className={"icon"}/>
                            <p>Моя корзина</p>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Header;