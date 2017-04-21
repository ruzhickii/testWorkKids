import React, {Component} from "react";
import Card from '../card';
import Button from '../button';
import * as cardProps from '../../cardProps';

class Content extends Component {
    render() {
        return (
            <section className="content">
                <section className="section_1">
                    <div className="container">
                        <div className="contentWrap">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12">
                                    <div className="imgBlock">
                                        <img src={require('../../../static/images/img_1.png')} alt=""/>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-12">
                                    <div className="textBlock">
                                        <p>Приближается лето,а вместе с ним и каникулы!Дайте возможность детям провести
                                            его весело и интересно Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                            enim ad minim veniam, quis nostrud exercitation ullamco .</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section_2">
                    <div className="container">
                        <div className="contentWrap">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                    <div className="titleSection_2">
                                        <span>Рекомендуемые товары</span>
                                    </div>
                                </div>
                                <div className="cardWrapper">
                                    {[...Array(3)].map((n, index) =>
                                        <div key={index} className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                            <Card card={cardProps[index]}/>
                                        </div>
                                    )}
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                    <Button />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section_3">
                    <div className="container">
                        <div className="contentWrap">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                    <div className="titleSection_3">
                                        <span>Популярные товары</span>
                                    </div>
                                </div>
                                <div className="cardWrapper">
                                    {[3, 4, 5].map((n, index) =>
                                        <div key={index} className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                            <Card card={cardProps[n]}/>
                                        </div>
                                    )}
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                    <Button />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section_4">
                    <div className="container">
                        <div className="contentWrap">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                    <div className="titleSection_4">
                                        <span>Каталог товаров</span>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-8 col-md-8">
                                    <div>
                                        <ul className="uList">
                                            <li><a href="">Новинки</a></li>
                                            <li><a href="">Акции</a></li>
                                            <li><a href="">Конструкторы</a></li>
                                            <li><a href="">Для малышей</a></li>
                                            <li><a href="">Для девочек</a></li>
                                            <li><a href="">Для мальчиков</a></li>
                                            <li><a href="">Мягкие игрушки</a></li>
                                            <li><a href="">Развивающие игрушки</a></li>
                                            <li><a href="">Настольные игры</a></li>
                                            <li><a href="">Творчество</a></li>
                                            <li><a href="">Канцелярия</a></li>
                                            <li><a href="">Книги</a></li>
                                            <li><a href="">Разукраски</a></li>
                                            <li><a href="">Спорттовары</a></li>
                                            <li><a href="">Детский транспорт</a></li>
                                            <li><a href="">Детская мебель</a></li>
                                            <li><a href="">Для праздников</a></li>
                                            <li><a href="">Для дома</a></li>
                                            <li><a href="">Для лета</a></li>
                                            <li><a href="">Kidigo</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-4 col-md-4">
                                    <div className="imgBlock">
                                        <img src={require('../../../static/images/img_7_03.png')} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}

export default Content
