import React, { useEffect, useState } from "react";
import { phoneApi } from "../../redux/api/PhoneApi.js";
import "../../cardStyle/Cards.scss";
import { useNavigate, useParams } from "react-router";
import { useTranslation } from "react-i18next";

const Phones = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const { t } = useTranslation();

    useEffect(() => {
        phoneApi.getPhoneByCategory(id).then(p => {
            console.log(p);
            setData(p);
        });
    }, [id]);

    if (data.length === 0) {
        return (
            <div className="container">
                <h2>{t("loading")}</h2>
                <div className="cards1">
                    {[...Array(12)].map((_, index) => (
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
            <h2>{t("chooseModel")}</h2>
            <div className="cards">
                {data.map(p => (
                    <div className="card" key={p.id}>
                        <div onClick={() => {
                            console.log(p.id);
                            navigate('/category/' + p.id);
                        }}>
                            <img src={p.image} alt={p.name} />
                            <p>{p.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Phones;
