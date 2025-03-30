import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../../redux/slices/favoriteSlice";

const FavoriteProducts = () => {
    const dispatch = useDispatch();
    const favorite = useSelector((state) => state.favorite.favorites);

    const handleRemove = (id) => {
        dispatch(removeFavorite(id));
    };

    return (
        <div className="container">
            <h2>Избранные товары</h2>
            {favorite.length === 0 ? (
                <p>Нет избранных товаров</p>
            ) : (
                <ul>
                    {favorite.map((item) => (
                        <li key={item.id}>
                            <img src={item.image} alt={item.name} style={{ width: "50px", height: "50px" }} />
                            <p>{item.name}</p>
                            <button onClick={() => handleRemove(item.id)}>Удалить</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FavoriteProducts;
