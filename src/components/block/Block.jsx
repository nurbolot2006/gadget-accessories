import React, {Component} from 'react';
import Img from "../../assets/Img.png"
import Img2 from "../../assets/img_1.png"

class Block extends Component {
    render() {
        return (
            <div className={"container"}>
                <img style={{
                    width: "100%",
                    marginTop: "60px",
                    borderRadius: "8px",
                }} src={Img} alt=""/>
                <img style={{
                    width: "1110px",
                    marginTop: "200px",
                    marginLeft: "55px",
                    borderRadius: "10px",
                }} src={Img2} alt=""/>
            </div>
        );
    }
}

export default Block;