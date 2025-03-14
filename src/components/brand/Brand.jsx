import React, {useEffect, useState} from 'react';
import {brandApi} from "../../redux/api/brand/BrandApi.js";
import "../../cardStyle/Cards.scss"

const Model = () => {
        const [data, setData] = useState([]);

        useEffect(() => {
            brandApi.getModelApi().then(b => {
                console.log(b)
                setData(b);
            })
        }, [])

        if (data.length === 0) {
            return (
                <div className="container">
                    <h2>Загрузка...</h2>
                    <div className="cards">
                        {[...Array(5)].map((_, index) => (
                            <div className="loading-card" key={index}>
                                <div className="loading-img"></div>
                                <div className="loading-text"></div>
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
                        <img src={b.brand_img} alt=""/>
                        <p>{b.brand_name}</p>
                    </div>)}
                </div>
            </div>
        );
    }
;

export default Model;