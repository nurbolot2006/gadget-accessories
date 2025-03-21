import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsApi } from "../../redux/api/listProductsApi.js";
import { addToBasket } from "../../redux/slices/basketSlice.js";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router";
import { FiPlus, FiMinus } from "react-icons/fi";
import "./ListProducts.scss";

const ListProducts = () => {
    const [data, setData] = useState([]);
    const [likedProducts, setLikedProducts] = useState({});
    const [quantities, setQuantities] = useState({});
    const [message, setMessage] = useState("");

    const location = useLocation();
    const categoryId = location.state?.categoryId;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toggleLike = (id) => {
        setLikedProducts((prev) => ({
            ...prev, [id]: !prev[id],
        }));
    };

    const increaseQuantity = (id, event) => {
        event.stopPropagation();
        setQuantities((prev) => ({
            ...prev, [id]: (prev[id] || 1) + 1,
        }));
    };

    const decreaseQuantity = (id, event) => {
        event.stopPropagation();
        setQuantities((prev) => ({
            ...prev, [id]: Math.max((prev[id] || 1) - 1, 1),
        }));
    };

    const handleAddToBasket = (event, p) => {
        event.stopPropagation();
        dispatch(addToBasket({
            id: p.id,
            name: p.name,
            price: p.price,
            image: p.image,
            quantity: quantities[p.id] || 1,
        }));
        setMessage(`${p.name} добавлен в корзину!`);
        setTimeout(() => setMessage(""), 2900);
    };

    useEffect(() => {
        if (categoryId) {
            productsApi.getProductsByCategory(categoryId).then((p) => {
                setData(p);
            });
        }
    }, [categoryId]);

    if (data.length === 0) {
        return (
            <div className="container">
                <div className="loading-wrapper">
                    {[...Array(12)].map((_, index) => (
                        <div key={index} className="loading-card">
                            <div className="loading-thumbnail"></div>
                            <div className="loading-title"></div>
                            <div className="loading-title"></div>
                            <div className="loading-title-2"></div>
                            <div className="loading-price">
                                <div className="loading-price-bar"></div>
                                <div className="loading-price-bar"></div>
                            </div>
                            <div className="loading-actions">
                                <div className="loading-action-bar large"></div>
                                <div className="loading-action-bar large"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <h2 className="products-title">Выберите бренд</h2>
            <div className="products-list">
                {data.map((p) => {
                    const quantity = quantities[p.id] || 1;
                    const totalPrice = quantity * p.price;

                    return (
                        <div className="product-card" key={p.id}>
                            <div className="product-content" onClick={() => navigate('/Product/' + p.id)}>
                                <button className="favorite-button" onClick={(event) => {
                                    event.stopPropagation();
                                    toggleLike(p.id);
                                }}>
                                    {likedProducts[p.id] ? <FaHeart className="heart-icon active"/> : <FaRegHeart className="heart-icon"/>}
                                </button>
                                <img className="product-image" src={p.image} alt=""/>
                                <h4 className="product-name">{p.name}</h4>
                                <div className="product-details">
                                    <div className="price-section">
                                        <p className="price-label">Цена:</p>
                                        <h4 className="product-price">{p.price} Сом</h4>
                                    </div>
                                    <div className="price-section">
                                        <p className="price-label">Общая сумма:</p>
                                        <h4 className="product-price">{totalPrice} Сом</h4>
                                    </div>
                                    <div className="cart-actions">
                                        <div className="quantity-control">
                                            <button className="quantity-button" onClick={(event) => decreaseQuantity(p.id, event)}>
                                                <FiMinus/>
                                            </button>
                                            <h3 className="quantity-number">{quantity}</h3>
                                            <button className="quantity-button" onClick={(event) => increaseQuantity(p.id, event)}>
                                                <FiPlus/>
                                            </button>
                                        </div>
                                        <button className="add-to-cart" onClick={(event) => handleAddToBasket(event, p)}>В корзину</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            {message && <div className="basket-message">{message}</div>}
        </div>
    );
};

export default ListProducts;
