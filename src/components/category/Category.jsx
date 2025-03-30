import React, {useEffect, useState} from "react";
import {categoryApi} from "../../redux/api/CategoryApi.js";
import "../../cardStyle/Cards.scss";
import {useNavigate} from "react-router";
import {useTranslation} from "react-i18next";

const Category = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const {t} = useTranslation();

    useEffect(() => {
        categoryApi.getCategory().then(c => {
            console.log(c);
            setData(c);
        });
    }, []);

    if (data.length === 0) {
        return (
            <div className="container">
                <h2>{t("loading")}</h2>
                <div className="cards1">
                    {[...Array(8)].map((_, index) => (
                        <div className="loading-card1" key={index}>
                            <div className="loading-img1"></div>
                            <div className="loading-text1"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <h2>{t("chooseCategory")}</h2>
            <div className="cards">
                {data.map(c => (
                    <div className="card" key={c.id}>
                        <div onClick={() => {
                            navigate('/listProducts/' + c.id, {state: {categoryId: c.id}});
                        }}>
                            <img src={c.category_img} alt={c.category_text}/>
                            <p>{c.category_text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
