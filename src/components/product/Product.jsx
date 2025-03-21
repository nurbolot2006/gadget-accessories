import React, { useState } from 'react';
import { FiMinus, FiPlus } from "react-icons/fi";
import { useGetProductsByIdQuery } from "../../redux/api/ProductsApi.js";
import { useParams } from "react-router";
import './Product.scss';

const Product = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetProductsByIdQuery(id);
    const [quantities, setQuantities] = useState({});

    const increaseQuantity = (productId, event) => {
        event.stopPropagation();
        setQuantities(prev => ({
            ...prev,
            [productId]: (prev[productId] || 1) + 1
        }));
    };

    const decreaseQuantity = (productId, event) => {
        event.stopPropagation();
        setQuantities(prev => ({
            ...prev,
            [productId]: Math.max((prev[productId] || 1) - 1, 1)
        }));
    };

    if (isLoading) {
        return <h2 className={"container"} style={{
            textAlign: "center",
            marginTop: "100px"
        }}>Loading...</h2>
    }

    return (
        <div className="container">
            {data.map(item => {
                const totalPrice = (quantities[item.id] || 1) * item.price; // Общая сумма

                return (
                    <div key={item.id} className="single-product-card">
                        <div className="single-product-image-wrapper">
                            <img src={item.image} alt="" className="single-product-image" />
                        </div>
                        <div className="single-product-info">
                            <h3 className="single-product-title">{item.name}</h3>
                            <p className="single-product-price">Совместимость: <span>{item.compatibility}</span></p>
                            <p className="single-product-price">Цена: <span>{item.price} Сом</span></p>
                            <p className="single-product-price">Общая сумма: <span>{totalPrice}</span></p>

                            <div className="single-product-actions">
                                <div className="single-product-quantity">
                                    <button className="single-product-quantity-btn"
                                            onClick={(event) => decreaseQuantity(item.id, event)}>
                                        <FiMinus/>
                                    </button>
                                    <h3 className="single-product-quantity-num">{quantities[item.id] || 1}</h3>
                                    <button className="single-product-quantity-btn"
                                            onClick={(event) => increaseQuantity(item.id, event)}>
                                        <FiPlus/>
                                    </button>
                                </div>
                                <button className="single-product-add-to-cart">Добавить в корзину</button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Product;
