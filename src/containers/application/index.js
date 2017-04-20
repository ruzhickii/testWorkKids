import React, {Component} from "react";
import {Header, Content, Footer} from '../../components';
import DemoImage from '../../../static/images/bg.png'

class Application extends Component {

    render() {
        //const backgroundImage = require('../../../static/images/bg.png');
        return (
            <section className="animated fadeIn" style={{backgroundImage: `url(${DemoImage})`}}>
                <Header  {...this.props}/>
                <Content {...this.props}/>
                <Footer {...this.props}/>
            </section>

        )
    }

}

export default Application
