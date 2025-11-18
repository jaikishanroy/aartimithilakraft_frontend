import { useEffect, useRef, useState } from 'react';
import '../pages/custom.css'
import { getProduct } from '../helper/https';
import { all } from 'axios';
import { baseurl } from '../helper/https';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'; // Styles for zoom effect


import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import ReactImageGallery from "react-image-gallery";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import './Shopdetails.css';

const Shopdetails = ( { product } ) => {
    const lensRef = useRef(null); 
   
    // const [product, setProduct] = useState([]);
    const imgurl = "http://localhost:8000/";


    useEffect(() => {
    }, [])
   
    

    return (

        <main>
            <div class="tp-product-details-area">
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
                                        <li><span>Size :NA</span>
                                            <div class="tp-shop-details__size">

                                            </div>
                                        </li>

                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>



        </main>
    )
}

export default Shopdetails;