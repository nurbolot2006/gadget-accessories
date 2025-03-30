import React from "react";
import {useTranslation} from "react-i18next";
import "./Header.scss";
import Logo from "../../../assets/logo.svg";
import {FaPhoneAlt} from "react-icons/fa";
import {IoSearch} from "react-icons/io5";
import {MdFavoriteBorder} from "react-icons/md";
import {PiShoppingCart} from "react-icons/pi";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";

const Header = ({onBasketClick}) => {
    const {t, i18n} = useTranslation();
    const basketCount = useSelector((state) => state.basket?.items?.length || 0);
    const favoritesCount = useSelector((state) => state.favorite?.favorites?.length || 0);
    const navigate = useNavigate();

    // Тилди өзгөртүү функциясы
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("i18nextLng", lng);
    };

    return (<header>
        <div className="menu-section">
            <div className="container">
                <div className="row">
                    <div className="menu">
                        <p onClick={() => navigate("/")}>{t("home")}</p>
                        <p onClick={() => navigate('/AboutTheCompany')}>{t("about")}</p>
                        <p onClick={() => navigate('/Delivery')}>{t("delivery")}</p>
                        <p onClick={() => navigate('/Guarantees')}>{t("guarantees")}</p>
                        <p onClick={() => navigate('/Contacts')}>{t("contacts")}</p>
                    </div>
                    <div className="contact">
                        <div className="phone">
                            <button><FaPhoneAlt/></button>
                            <h5>+7 (965) 237-44-49</h5>
                        </div>
                        <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
                            <option value="kg">Кыргызча</option>
                            <option value="ru">Русский</option>
                            <option value="en">English</option>
                        </select>
                        {/*<p>{t("account")}</p>*/}
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="search">
                <div>
                    <img className="img-logo" src={Logo} alt="Логотип"/>
                </div>
                <div className="search-input">
                    <input type="text" placeholder={t("searchPlaceholder")}/>
                    <button className="search-btn"><IoSearch/> {t("searchButton")}</button>
                </div>
                <div className="favorite-basket">
                    <div onClick={() => navigate("/favorites")} style={{cursor: "pointer"}}>
                        <MdFavoriteBorder className="icon"/>
                        <p>{t("favorites")}</p>
                        {favoritesCount > 0 && <span className="basket-count">{favoritesCount}</span>}
                    </div>
                    <div onClick={onBasketClick} style={{cursor: "pointer", position: "relative"}}>
                        <PiShoppingCart className="icon"/>
                        {basketCount > 0 && <span className="basket-count">{basketCount}</span>}
                        <p>{t("cart")}</p>
                    </div>
                </div>
            </div>
        </div>
    </header>);
};

export default Header;
