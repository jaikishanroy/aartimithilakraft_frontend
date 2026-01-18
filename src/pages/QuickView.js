
import { useState } from 'react';
import Slider from "react-slick";
import Shopdetails from "./Shopdetails";
import { baseurl } from '../helper/https';

const QuickViewComponent = ( { product1 } ) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [open, setOpen] = useState(false)
  const [modalProduct, setViewProduct] = useState([]);

  function viewProduct(prod){
    setOpen(true);
    setViewProduct(prod);
  }
  return (
    <>
      <div className="container full-width-products">
        <div className="row">
          
          <div className="col-12">
            <h2 className="home_product_heading">Customer Favorites</h2>
          </div>

          <div className="slider-container">
            <Slider {...settings}>

              {product1 && product1.length > 0 ? (
                product1.map((prod) => (
                  <div key={prod.id} className="product-slide">
                    <div className="card home-bx">
                      <figure className="product-figure">
                        <a href="#">
                          <img
                            src={baseurl+prod.cat_image}
                            alt={prod.name || "Product"}
                            className="product-image"
                            onClick={() => viewProduct(prod)}
                          />
                        </a>
                      </figure>
                    </div>
                  </div>
                ))
              ) : (
                <p>No products available</p>
              )}

            </Slider>
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
              style={{ top: "20px", right: "20px" }}
              onClick={() => setOpen(false)}
            >
              <span className="visually-hidden">Close</span>
            </button>

            {/* Modal Body Layout */}
            <Shopdetails product={modalProduct} />
            
          </div>
        </div>
      </div>
    </>
  );
}

export default QuickViewComponent;