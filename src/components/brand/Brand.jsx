import React, {useEffect, useState} from 'react';
import {brandApi} from "../../redux/api/BrandApi.js";
import "../../cardStyle/Cards.scss"
import {phoneApi} from "../../redux/api/PhoneApi.js";
import {useNavigate} from "react-router";

const Model = () => {
        const [data, setData] = useState([]);
        const navigate = useNavigate();

        useEffect(() => {
            brandApi.getBrand().then(b => {
                console.log(b)
                setData(b);
            })
        }, [])

        if (data.length === 0) {
            return (
                <div className="container">
                    <h2>Загрузка...</h2>
                    <div className="cards1">
                        {[...Array(4)].map((_, index) => (
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
                <h2>Выберите бренд</h2>
                <div className={"cards"}>
                    {data.map(b => <div className={"card"} key={b.id}>
                        <div onClick={() => {
                            console.log(b.id)
                            phoneApi.getPhoneByCategory(b.id).then(phone => {
                                console.log(phone)
                                navigate('/model/' + b.id)
                            })
                        }}>
                            <img src={b.brand_img} alt=""/>
                            <p>{b.brand_name}</p>
                        </div>
                    </div>)}
                </div>
            </div>
        );
    }
;

export default Model;