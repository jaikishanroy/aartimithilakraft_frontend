import { useEffect, useState } from 'react';
import '../pages/custom.css';
import { useLocation } from 'react-router-dom';
import { allProduct } from '../helper/https';
import { Link } from 'react-router-dom';
import { baseurl, getProduct } from '../helper/https';
import Shopdetails from "./Shopdetails";

const Shop = () => {
    const location = useLocation();
    const [products, setProducts] = useState([]);
    const [open, setOpen] = useState(false)
    const [productDetail, setProductDetail] = useState([]);
    
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get("type");
    useEffect(() => {
        allProduct(type).then((res) => {
            setProducts(res.data.products)
        }).catch((err) => {
            alert("error happend")
        })
    }, [type])

    function viewDetails(productId){
        setOpen(true);
        getProduct(productId).then((res) => {
            setProductDetail(res.data.product);
        }).catch((err) => {
            console.log(err);
            debugger;
        })
    }

    var all_products = (

        products.length > 0 ? ( products.map((obj,index) => {
            let imgurl = baseurl+obj.cat_image
            
            return (
                <div className="col-xl-4 col-lg-6 col-md-6 mb-30" key={index}>
                    <div className="tp-fea-product__item tp-fea-product__item-2">
                        <div onClick={() => viewDetails(obj.id)} style={{cursor:"pointer"}}>
                        <div className="tp-fea-product__thumb fix p-relative">
                            <img src={imgurl} alt="" />
                            <div className="tp-fea-product__icon-box">

                            </div>
                        </div>
                        <div className="tp-fea-product__content text-center">
                        </div>
                        </div>
                    </div>
                </div>
            )
        })) : (
            <div className="text-center py-5">
            <h4>We are still waiting for new designs.</h4>
            </div>
        )


    )
    return (


        <>
            <main>
                <div className="tp-product__area">
                    <div className="container">
                        <h1>{type?.toUpperCase()}</h1>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <div className="row">

                                    {all_products}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={`modal fade ${open ? "show d-block" : ""}`}
                    tabIndex="-1"
                    style={{ background: "rgba(0,0,0,0.6)" }}
                    onClick={() => setOpen(false)}
                >
                    <div
                    className="modal-dialog modal-xl modal-dialog-centered"
                    onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                    >
                        <div className="modal-content p-4 position-relative">

                            {/* Close Button */}
                            <button
                            className="btn-close position-absolute"
                            onClick={() => setOpen(false)}
                            >
                            <span className="visually-hidden">Close</span>
                            </button>

                            <Shopdetails product={productDetail} />
                        </div>
                    </div>
                </div>
                
            </main>
        </>)
}

export default Shop;