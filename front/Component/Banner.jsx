import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Banner1 from "../Assets/banner1.png"
import Banner2 from "../Assets/banner2.jpg"
import Banner3 from "../Assets/banner3.jpg"
import Banner4 from "../Assets/banner4.jpg"
import Banner5 from "../Assets/banner5.jpg"
import Image from 'next/image';


const Banner = () => {

     const sliders = [Banner1, Banner2, Banner3, Banner4, Banner5]

     const settings = {
          autoplay: true,
          autoplaySpeed: 2000,
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
     };

     return (
          <section className='container_banner'>
               <Slider {...settings}>
                    {
                         sliders.map((slider, index) => (
                              <div key={index} className='card_slider'>
                                   <Image src={slider} className='banner' alt="Description de ma bannier" priority />
                              </div>
                         ))
                    }
               </Slider>
          </section>
     );
};

export default Banner;