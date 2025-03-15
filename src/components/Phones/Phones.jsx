import React, {useEffect, useState} from 'react';
import {phoneApi} from "../../redux/api/phones/PhoneApi.js";
import "../../cardStyle/Cards.scss"

const Phones = () => {
        const [data, setData] = useState([]);

        useEffect(() => {
            phoneApi.getPhone().then(p => {
                console.log(p)
                setData(p);
            })
        }, [])

        if (data.length === 0) {
            return (
                <div className="container">
                    <h2>Загрузка...</h2>
                    <div className="cards">
                        {[...Array(6)].map((_, index) => (
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
                <h2>Выберите модель</h2>
                <div className={"cards"}>
                    {data.map(p => <div className={"card"} key={p.id}>
                        <img src={p.image} alt=""/>
                        <p>{p.name}</p>
                    </div>)}
                </div>
            </div>
        );
    }
;

export default Phones;