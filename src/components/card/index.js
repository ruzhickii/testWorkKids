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
                    <div className="nameCardMainBlock">
                        <span className="nameCard">{card.name}</span>
                    </div>
                    <div className="priceCardMainBlock">
                        <span className="priceCard">{card.price} {card.currency}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;