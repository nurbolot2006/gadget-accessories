import React, {useEffect, useState} from 'react';
import {brandApi} from "../../redux/model/BrandApi.js";
import "./Brand.scss"

const Model = () => {
        const [data, setData] = useState([]);

        useEffect(() => {
            brandApi.getModelApi().then(b => {
                console.log(b)
                setData(b);
            })
        }, [])

        if (data.length === 0) {
            return <div>
                <div>

                </div>
            </div>
        }

        return (
            <div className="container">
                <h2>Выберите бренд</h2>
                <div className={"brand-carts"}>
                    {/*<div className="brand-cart">*/}
                    {data.map(b => <div className={"brand-cart"} key={b.id}>
                        <img src={b.brand_img} alt=""/>
                        <p>{b.brand_name}</p>
                    </div>)}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
;

export default Model;