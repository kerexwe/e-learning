import React, { Component } from "react";
import Slider from "react-slick";
import scss from './Say.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import person1 from './assets/person1.svg'
import person2 from './assets/person2.svg'
import person3 from './assets/person3.svg'
import person4 from './assets/person4.svg'
import person5 from './assets/person5.svg'



function Say() {

    const array = [person1, person2, person3, person4, person5]
    const arrayText = ['Robert Fox', 'Niki', 'Jay']
    const settings = {
        customPaging: function (i: number) {
            console.log(i)
            return (
                <a>
                    <img src={array[i]} />
                    <p>{arrayText[i]}</p>
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className={scss.cont}>
            <Slider {...settings}>
                <div>
                    Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach. Truly professionals!
                </div>
                <div>
                    Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach. Truly professionals!
                </div>
                <div>
                    Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach. Truly professionals!
                </div>
                <div>
                    Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach. Truly professionals!
                </div>
                <div>
                    Amazing experience i love it a lot. Thanks to the team that dreams come true, great! I appreciate there attitude and approach. Truly professionals!
                </div>

            </Slider>
        </div>
    )
}

export default Say
