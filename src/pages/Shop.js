import { useEffect, useState } from 'react';
import '../pages/custom.css'
import { allProduct } from '../helper/https';
import { all } from 'axios';
import { Link } from 'react-router-dom';
import { baseurl } from '../helper/https';

const Shop = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        allProduct().then((res) => {
            setProducts(res.data.data)
        }).catch((err) => {
            alert("error happend")
        })
    }, [])

    const all_products = (

        products.length > 0 && products.map((obj,index) => {
            let imgurl = baseurl+obj.cat_image
            
            return (
                <div className="col-xl-4 col-lg-6 col-md-6 mb-30" key={index}>
                    <div class="tp-fea-product__item tp-fea-product__item-2">
                        <Link to={`/shopdetails/${obj.id}`}>
                        <div className="tp-fea-product__thumb fix p-relative">
                            <img src={imgurl} alt="" />
                            <div class="tp-fea-product__icon-box">

                            </div>
                        </div>
                        <div className="tp-fea-product__content text-center">
                            {/* <div class="tp-fea-product__star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star color"></i>
                    </div> */}
                            {/* <h4 className="tp-fea-product__title-sm"><a href="shopdetails.html">Calendar printing design</a></h4>
                            <div className="tp-fea-product__price">
                                <span>$239.52</span>
                                <del>$362.00</del>
                            </div> */}
                        </div>
                        </Link>
                    </div>
                </div>
            )
        })



    )
    return (


        <>
            <main>
                <div className="tp-breadcrumb__area fix tp-breadcrumb-height bckgrnd"
                    data-background=".../../assets/img/banner/shop-banner.png.png">
                    <div className="container">
                        <div className="row" >
                            <div className="col-12">
                               
                                <div className="tp-breadcrumb__content text-center z-index-5">
                                    <div className="tp-breadcrumb__list">
                                        <span><a href="index.html">Home </a></span>
                                        <span className="dvdr">.</span>
                                        <span>Shop Page</span>
                                    </div>
                                    <h3 className="tp-breadcrumb__title"><span className="p-relative z-index-5">
                                        
                                        <span className="tp-title-shape">

                                        </span>
                                    </span>
                                        
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tp-product__area pt-100 pb-120">
                    <div className="container">
                        {/* <div className="tp-product__top-area pb-30">
                            <div className="row align-items-center">
                                <div className="col-xl-4 col-lg-4 col-md-12 mb-30">
                                    <div className="tp-product__text">
                                        <span>Showing 12 of 120 results</span>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-12 mb-30">
                                    <div className="tp-product__filter">
                                        <select>
                                            <option>Short By Latest</option>
                                            <option>01</option>
                                            <option>02</option>
                                            <option>03</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-12 mb-30">
                                    <div className="tp-product__input">
                                        <input type="text" placeholder="Search your product..." />
                                        <button className="tp-product__search"><i className="fa-light fa-magnifying-glass"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <div className="row">

                                    {all_products}
                                    {/* <div class="col-xl-4 col-lg-6 col-md-6 mb-30">
                                <div class="tp-fea-product__item tp-fea-product__item-2">
                                    <div class="tp-fea-product__thumb fix p-relative">
                                        <img src="assets/img/product/product-4-2.png" alt="" />
                                        <div class="tp-fea-product__thumb-text">
                                            <span>sale</span>
                                        </div>
                                        <div class="tp-fea-product__icon-box">
                                            
                                        </div>
                                    </div>
                                    <div class="tp-fea-product__content text-center">
                                        <div class="tp-fea-product__star">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star color"></i>
                                        </div>
                                        <h4 class="tp-fea-product__title-sm"><a href="shop-details.html">Accesories Lather Shoes</a></h4>
                                        <div class="tp-fea-product__price">
                                            <span>$239.52</span>
                                            <del>$362.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 mb-30">
                                <div class="tp-fea-product__item tp-fea-product__item-2">
                                    <div class="tp-fea-product__thumb fix p-relative">
                                        <img src="assets/img/product/product-4-3.png" alt="" />
                                        <div class="tp-fea-product__icon-box">
                                            
                                        </div>
                                    </div>
                                    <div class="tp-fea-product__content text-center">
                                        <div class="tp-fea-product__star">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star color"></i>
                                        </div>
                                        <h4 class="tp-fea-product__title-sm"><a href="shop-details.html">Box Packag</a></h4>
                                        <div class="tp-fea-product__price">
                                            <span>$239.52</span>
                                            <del>$362.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 mb-30">
                                <div class="tp-fea-product__item tp-fea-product__item-2">
                                    <div class="tp-fea-product__thumb fix p-relative">
                                        <img src="assets/img/product/product-4-3.png" alt="" />
                                        <div class="tp-fea-product__icon-box">
                                            
                                        </div>
                                    </div>
                                    <div class="tp-fea-product__content text-center">
                                        <div class="tp-fea-product__star">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star color"></i>
                                        </div>
                                        <h4 class="tp-fea-product__title-sm"><a href="shop-details.html">Box Packag</a></h4>
                                        <div class="tp-fea-product__price">
                                            <span>$239.52</span>
                                            <del>$362.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 mb-30">
                                <div class="tp-fea-product__item tp-fea-product__item-2">
                                    <div class="tp-fea-product__thumb fix p-relative">
                                        <img src="assets/img/product/product-4-3.png" alt="" />
                                        <div class="tp-fea-product__icon-box">
                                            
                                        </div>
                                    </div>
                                    <div class="tp-fea-product__content text-center">
                                        <div class="tp-fea-product__star">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star color"></i>
                                        </div>
                                        <h4 class="tp-fea-product__title-sm"><a href="shop-details.html">Box Packag</a></h4>
                                        <div class="tp-fea-product__price">
                                            <span>$239.52</span>
                                            <del>$362.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 mb-30">
                                <div class="tp-fea-product__item tp-fea-product__item-2">
                                    <div class="tp-fea-product__thumb fix p-relative">
                                        <img src="assets/img/product/product-4-3.png" alt="" />
                                        <div class="tp-fea-product__icon-box">
                                            
                                        </div>
                                    </div>
                                    <div class="tp-fea-product__content text-center">
                                        <div class="tp-fea-product__star">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star color"></i>
                                        </div>
                                        <h4 class="tp-fea-product__title-sm"><a href="shop-details.html">Box Packag</a></h4>
                                        <div class="tp-fea-product__price">
                                            <span>$239.52</span>
                                            <del>$362.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>)
}

export default Shop;