import React, {useEffect, useState} from 'react';
import {phoneApi} from "../../redux/api/PhoneApi.js";
import "../../cardStyle/Cards.scss";
import {useNavigate, useParams} from "react-router";

const Phones = () => {
    const {id} = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        phoneApi.getPhoneByCategory(id).then(p => {
            console.log(p);
            setData(p);
        });
    }, [id]);

    if (data.length === 0) {
        return (<div className="container">
            <h2>Загрузка...</h2>
            <div className="cards1">
                {[...Array(12)].map((_, index) => (<div className="loading-card1" key={index}>
                    <div className="loading-img1"></div>
                    <div className="loading-text1"></div>
                </div>))}
            </div>
        </div>);
    }

    return (
        <div className="container">
            <h2>Выберите модель</h2>
            <div className="cards">
                {data.map(p => (<div className="card" key={p.id}>
                    <div onClick={() => {
                        console.log(p.id)
                        phoneApi.getPhoneByCategory(p.id).then(phone => {
                            console.log(phone)
                            navigate('/category/' + p.id)
                        })
                    }}>
                        <img src={p.image} alt=""/>
                        <p>{p.name}</p>
                    </div>
                </div>))}
            </div>
        </div>);
};

export default Phones;
