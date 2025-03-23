import React from 'react';
import "./Header.scss";
import Logo from "../../../assets/logo.svg";
import { FaPhoneAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { PiShoppingCart } from "react-icons/pi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Header = ({ onBasketClick }) => {
    const basketCount = useSelector(state => state.basket.items.length);
    // const favoritesCount = useSelector(state => state.favorite.favorites.length); // Избранноедагы продуктулардын саны
    const navigate = useNavigate();

    return (
        <header>
            <div className="menu-section">
                <div className="container">
                    <div className="row">
                        <div className="menu">
                            <p onClick={() => navigate("/")}>Главная страница</p>
                            <p onClick={() => navigate('/AboutTheCompany')}>О компании</p>
                            <p onClick={() => navigate('/Delivery')}>Доставка и оплата</p>
                            <p onClick={() => navigate('/Guarantees')}>Гарантии</p>
                            <p onClick={() => navigate('/Contacts')}>Контакты</p>
                        </div>
                        <div className="contact">
                            <div className="phone">
                                <button><FaPhoneAlt /></button>
                                <h5>+7 (965) 237-44-49</h5>
                            </div>
                            <select>
                                <option value="ru">Русский</option>
                                <option value="en">English</option>
                            </select>
                            <p>Личный кабинет</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="search">
                    <div>
                        <img className="img-logo" src={Logo} alt="Логотип" />
                    </div>
                    <div className="search-input">
                        <input type="text" placeholder="Введите поисковой запрос..." />
                        <button className="search-btn"><IoSearch /> Найти</button>
                    </div>
                    <div className="favorite-basket">
                        <div
                            // onClick={() => navigate("/favorites")} style={{ cursor: "pointer", position: "relative" }}
                        >
                            <MdFavoriteBorder className="icon" />
                            {/*{favoritesCount > 0 && <span className="basket-count">{favoritesCount}</span>}*/}
                            <p>Избранное</p>
                        </div>
                        <div onClick={onBasketClick} style={{ cursor: "pointer", position: "relative" }}>
                            <PiShoppingCart className="icon" />
                            {basketCount > 0 && <span className="basket-count">{basketCount}</span>}
                            <p>Моя корзина</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;