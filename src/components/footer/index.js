import React, {Component} from "react";

class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <div className="container">
                    <div className="footerWrap">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6">
                                <div className="leftBlock">
                                    <p>&copy; 2017 Гуртовня "Розумна играшка"</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6">
                                <div className="rightBlock">
                                    <a href="#"><span> Отписаться от рассылки</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;