import React from "react";
import Slider from 'react-slick';


const SliderComponent = ()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true,
    };
    const images = [
        'assets/img/banner/banner-2.jpg',
        'assets/img/banner/banner-3.jpg',
       
    ];
    return (
        <div className="slider-container">
        <Slider {...settings}>
            {images.map((src, index) => (
                <div key={index}>
                    <img src={src} alt={`Slide ${index + 1}`} />
                </div>
            ))}
        </Slider>
    </div>
    );
}

export default SliderComponent;