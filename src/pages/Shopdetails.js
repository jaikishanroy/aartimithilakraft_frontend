import { useEffect, useRef, useState } from 'react';
import '../pages/custom.css'
import { getProduct } from '../helper/https';
import { all } from 'axios';
import { useParams } from 'react-router-dom';
import { baseurl } from '../helper/https';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'; // Styles for zoom effect


import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import ReactImageGallery from "react-image-gallery";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import './Shopdetails.css';

const Shopdetails = () => {
    const lensRef = useRef(null); 
   
    const [product, setProduct] = useState([]);
    const param = useParams();
    const imgurl = "http://localhost:8000/";


    useEffect(() => {
        console.log(param.id);
        getProduct(param.id).then((res) => {
            console.log(res);
            setProduct(res.data.product);
        }).catch((err) => {
            console.log(err);
            debugger;
        })

    }, [])
   
    

    return (

        <main>
            <div class="tp-product-details-area pt-130">
                <div class="container">

                    <div class="row">
                        <div class="col-xl-6 col-lg-6">
                            {product.images && (
                                <div className="image-container" >
                                    <div ref={lensRef} className="zoom-lens"></div><ReactImageGallery
                                showBullets={false}
                                showFullscreenButton={false}
                                showPlayButton={false}
                                items={product?.images}

                                renderItem={(item) => (
                                    <div className="zoom-image-container">
                                    <img
                                        src={item.original}
                                        alt={item.description}
                                        className="zoomable-image"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            cursor: 'zoom-in',
                                        }}
                                    />
                                </div>
                                )}
                            /></div>)}
                        </div>
                        <div class="col-xl-6 col-lg-6">
                            <div class="tp-shop-details__right-warp">
                                <h3 class="tp-shop-details__title-sm">{product.name}</h3>
                               
                                <div class="tp-shop-details__price">
                                    <span>{product.price}</span>
                                    {/* <del>$32.00</del>
                                        <span class="red-color">-34%</span> */}
                                </div>
                                <div class="tp-shop-details__text-2">
                                    <p>{product.description}
                                    </p>
                                </div>
                                <div class="tp-shop-details__product-info">
                                    <ul>
                                        {/* <li><span>color :</span>
                                            <div class="tp-shop-details__variation-list">
                                                <button type="button" class="color tp-color-variation-btn">
                                                    <span></span>
                                                </button>
                                                <button type="button" class="color tp-color-variation-btn">
                                                    <span class="red"></span>
                                                </button>
                                                <button type="button" class="color tp-color-variation-btn">
                                                    <span class="blue"></span>
                                                </button>
                                                <button type="button" class="color tp-color-variation-btn">
                                                    <span class="purple"></span>
                                                </button>
                                            </div>
                                        </li> */}
                                        <li><span>Size :NA</span>
                                            <div class="tp-shop-details__size">

                                            </div>
                                        </li>

                                    </ul>
                                </div>
                                {/* <div class="tp-shop-details__social">
                                    <span>Share:</span>
                                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                    <a href="#"><i class="fa-brands fa-vimeo-v"></i></a>
                                    <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                </div> */}
                                {/* <div class="tp-shop-details__quantity-wrap mt-30 d-flex align-items-center">
                                    <div class="tp-shop-details__btn mr-30">
                                        <a class="tp-btn-square" href="cart.html">Add To Cart</a>
                                    </div>
                                    <div class="tp-shop-details__quantity-box">
                                        <div class="tp-shop-details__quantity">
                                            <div class="tp-cart-minus"><i class="fal fa-minus"></i></div>
                                            <input type="text" value="1" />
                                            <div class="tp-cart-plus"><i class="fal fa-plus"></i></div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>



        </main>
    )
}

export default Shopdetails;