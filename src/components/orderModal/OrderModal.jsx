import React from "react";
import "./OrderModal.scss";

const OrderModal = ({ orderNumber, onClose }) => {
    return (
        <div className="order-modal">
            <div className="order-modal-content">
                <h2>Заказ #{orderNumber} оформлен!</h2>
                <p>Скоро с Вами свяжется наш менеджер.</p>
                <button className="ok-btn" onClick={onClose}>ОК</button>
            </div>
        </div>
    );
};

export default OrderModal;
