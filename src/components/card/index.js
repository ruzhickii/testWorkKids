import React, {Component} from "react";

class Card extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {card} = this.props;
        let img = require('../../../static/images/imgToy_03.png');
        return (

            <div className="mainCardBlock">
                <div className="cardImgBlock">
                    <img src={img} alt={card.img.alt}/>
                </div>
                <div className="cardContent">
                    <div><span className="nameCard">{card.name}</span></div>
                    <div><span className="priceCard">{card.price}</span></div>
                </div>
            </div>
        )
    }
}

export default Card;