import { useEffect, useState } from 'react';
import '../pages/custom.css';
import { all } from 'axios';

const Gallery = () => {
    useEffect(() => {
    }, [])

    return (


        <>
            <main>
                <div className="tp-product__area">
                    <div className="container">
                        <h1>Happy Moments</h1>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-6 col-md-6 mb-30" >
                                        <div class="tp-fea-product__item tp-fea-product__item-2">
                                            <div className="tp-fea-product__thumb fix p-relative">
                                                <img src="assets/img/gallery/moment-1.png" alt="" />
                                                <div class="tp-fea-product__icon-box">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 mb-30" >
                                        <div class="tp-fea-product__item tp-fea-product__item-2">
                                            <div className="tp-fea-product__thumb fix p-relative">
                                                <img src="assets/img/gallery/moment-3.png" alt="" />
                                                <div class="tp-fea-product__icon-box">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 mb-30" >
                                        <div class="tp-fea-product__item tp-fea-product__item-2">
                                            <div className="tp-fea-product__thumb fix p-relative">
                                                <img src="assets/img/gallery/moment-4.png" alt="" />
                                                <div class="tp-fea-product__icon-box">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 mb-30" >
                                        <div class="tp-fea-product__item tp-fea-product__item-2">
                                            <div className="tp-fea-product__thumb fix p-relative">
                                                <img src="assets/img/gallery/moment-5.png" alt="" />
                                                <div class="tp-fea-product__icon-box">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 mb-30" >
                                        <div class="tp-fea-product__item tp-fea-product__item-2">
                                            <div className="tp-fea-product__thumb fix p-relative">
                                                <img src="assets/img/gallery/moment-6.png" alt="" />
                                                <div class="tp-fea-product__icon-box">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </>)
}

export default Gallery;