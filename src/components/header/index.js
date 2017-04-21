import React, {Component} from "react";

class Header extends Component {
    render() {
        return (
            <header className='header'>
               <div className="container">
                   <div className="headerWrap">
                       <div className="row">
                           <div className="col-xs-12 col-md-12">
                               <div className="titleHeader">
                                   <span>Летние скидки приближаются!</span>
                               </div>
                           </div>
                           <div className="col-xs-12 col-sm-12 col-md-6">
                               <div className="imgBlock">
                                   <img src={require('../../../static/images/logo.png')} alt=""/>
                               </div>
                           </div>
                           <div className="col-xs-12 col-sm-12 col-md-6">
                               <div className="row">
                                   <div className="col-xs-12 col-sm-6 col-md-8">
                                       <div className="mainBlockTel">
                                           <div className="tel">067-398-4617</div>
                                           <div className="tel">066-521-9728</div>
                                       </div>
                                   </div>
                                   <div className="col-xs-12 col-sm-6 col-md-4">
                                       <div className="mainBlockIcons">
                                           <div className="iconBlock">
                                               <a href="#">
                                                   <i className="fa fa-user" />
                                               </a>
                                           </div>
                                           <div className="iconBlock">
                                               <a href="#">
                                                   <i className="fa fa-shopping-cart" />
                                               </a>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
            </header>
        )
    }
}

export default Header;