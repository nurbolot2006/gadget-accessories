import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {
    removeFromBasket, increaseQuantity, decreaseQuantity, clearBasket,
} from "../../redux/slices/basketSlice";
import {useTranslation} from "react-i18next";
import "./BasketModal.scss";
import {IoCloseCircleOutline} from "react-icons/io5";
import {IoMdClose} from "react-icons/io";
import {FiMinus, FiPlus} from "react-icons/fi";
import OrderModal from "../OrderModal/OrderModal";

const BasketModal = ({isOpen, onClose}) => {
    const basketItems = useSelector((state) => state.basket.items);
    const dispatch = useDispatch();
    const {t} = useTranslation();

    const [orderModalOpen, setOrderModalOpen] = useState(false);
    const [orderNumber, setOrderNumber] = useState(null);

    const EmptyImg = "https://estore.mv/Images/Cart/emptycart.png";

    useEffect(() => {
        if (isOpen) setOrderModalOpen(false);
    }, [isOpen]);

    if (!isOpen && !orderModalOpen) return null;

    const totalAmount = basketItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleOrder = () => {
        const newOrderNumber = Math.floor(100 + Math.random() * 900);
        setOrderNumber(newOrderNumber);
        dispatch(clearBasket());
        onClose();
        setTimeout(() => {
            setOrderModalOpen(true);
        }, 100);
    };

    return (<>
        {isOpen && (<div className="basket-modal">
            <div className="modal-content">
                <button className="close-btn" onClick={onClose}>
                    <IoCloseCircleOutline/>
                </button>
                <div>
                    <h2 className="modal-title">{t("yourBasket")}</h2>
                </div>

                {basketItems.length === 0 ? (<div className="empty-cart">
                    <h4 className="empty-cart__title">{t("emptyCart")}</h4>
                    <img className="empty-cart__img" src={EmptyImg} alt={t("emptyCart")}/>
                </div>) : (<>
                    <ul className="basket-list">
                        {basketItems.map((item) => (<div key={item.id} className="basket-item">
                            <img src={item.image} alt="" className="item-image"/>
                            <div className="item-details">
                                <h4 className="item-name">{item.name}</h4>
                                <div className="price-details">
                                    <p className="item-price">{t("price")}:</p>
                                    <h3>{item.price} Сом</h3>
                                </div>
                                <div className="price-details">
                                    <p className="item-price">{t("total")}:</p>
                                    <h3>{item.price * item.quantity} Сом</h3>
                                </div>

                                <div className="quantity-control">
                                    <button
                                        className="quantity-btn"
                                        onClick={() => dispatch(decreaseQuantity(item.id))}
                                    >
                                        <FiMinus/>
                                    </button>
                                    <span className="quantity-number">{item.quantity}</span>
                                    <button
                                        className="quantity-btn"
                                        onClick={() => dispatch(increaseQuantity(item.id))}
                                    >
                                        <FiPlus/>
                                    </button>
                                </div>

                                <button
                                    className="remove-btn"
                                    onClick={() => dispatch(removeFromBasket(item.id))}
                                >
                                    <IoMdClose/>
                                </button>
                            </div>
                        </div>))}
                    </ul>

                    <div className="basket-footer">
                        <p className="total-amount">
                            {t("totalAmount")}: <span>{totalAmount} Сом</span>
                        </p>
                        <button className="clear-btn" onClick={() => dispatch(clearBasket())}>
                            {t("clearAll")}
                        </button>
                        <button className="order-btn" onClick={handleOrder}>
                            {t("placeOrder")}
                        </button>
                    </div>
                </>)}
            </div>
        </div>)}
        {orderModalOpen && <OrderModal orderNumber={orderNumber} onClose={() => setOrderModalOpen(false)}/>}
    </>);
};

export default BasketModal;
