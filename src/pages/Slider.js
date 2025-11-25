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
        'assets/img/banner/banner-1.png',
        'assets/img/banner/banner-2.png',
        'assets/img/banner/banner-3.png',
       
    ];
    return (
        <div className="slider-container" style={{ backgroundColor: '#1A1A1A' }}>
            <Slider {...settings}>
                {images.map((src, index) => (
                    <div key={index}>
                        <img src={src} alt={`Slide ${index + 1}`} style={{ width: 'auto', margin: 'auto' }} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SliderComponent;