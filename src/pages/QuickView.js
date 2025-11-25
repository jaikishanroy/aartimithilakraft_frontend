
import { useState } from 'react';
import Slider from "react-slick";

const QuickViewComponent = ( { product1 } ) => {
  const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    rating: 3.9,
    reviewCount: 117,
    href: '#',
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-quick-preview-02-detail.jpg',
    imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
    colors: [
      { id: 'white', name: 'White', classes: 'bg-white checked:outline-gray-400' },
      { id: 'gray', name: 'Gray', classes: 'bg-gray-200 checked:outline-gray-400' },
      { id: 'black', name: 'Black', classes: 'bg-gray-900 checked:outline-gray-900' },
    ],
    sizes: [
      { id:1, name: 'XXS', inStock: true },
      { id:2, name: 'XS', inStock: true },
      { id:3, name: 'S', inStock: true },
      { id:4, name: 'M', inStock: true },
      { id:5, name: 'L', inStock: true },
      { id:6, name: 'XL', inStock: true },
      { id:7, name: 'XXL', inStock: true },
      { id:8, name: 'XXXL', inStock: false },
    ],
  }
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
  const [imageSrc, setImageSrc] = useState(product.imageSrc);
  const [imageName, setImageName] = useState(product.name);

  function viewProduct(prod){
    setOpen(true);
    setImageSrc(prod.cat_image);
    setImageName(prod.name);
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
                            src={prod.cat_image || "fallback-image.jpg"}
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
            <div className="row g-4">
              
              {/* LEFT SIDE IMAGE */}
              <div className="col-md-5">
                <img
                  src={imageSrc}
                  alt={imageName}
                  className="img-fluid rounded"
                />
              </div>

              {/* RIGHT SIDE DETAILS */}
              <div className="col-md-7">
                <h2 className="fw-bold">{imageName}</h2>
                <p className="fs-4 fw-semibold">{product.price}</p>

                {/* Reviews */}
                <div className="d-flex align-items-center mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`bi bi-star-fill me-1 ${
                        product.rating > i ? "text-dark" : "text-secondary"
                      }`}
                    ></span>
                  ))}

                  <a href="#" className="ms-2 small text-primary fw-medium">
                    {product.reviewCount} reviews
                  </a>
                </div>

                {/* Color options */}
                <div className="mb-4">
                  <label className="fw-semibold small mb-2">Color</label>
                  <div className="d-flex gap-2">
                    {product.colors.map((color) => (
                      <div key={color.id}>
                        <input
                          type="radio"
                          name="color"
                          className="form-check-input"
                          defaultChecked={color === product.colors[0]}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Size options */}
                <div className="mb-4">
                  <label className="fw-semibold small mb-2">Size</label>
                  <div className="d-grid gap-2" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
                    {product.sizes.map((size) => (
                      <label
                        key={size.id}
                        className={`border rounded text-center p-2 ${
                          !size.inStock ? "bg-light text-muted" : "bg-white"
                        }`}
                      >
                        <input
                          type="radio"
                          name="size"
                          disabled={!size.inStock}
                          className="d-none"
                        />
                        <span className="fw-semibold">{size.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button className="btn btn-dark w-100 py-2 mt-3">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuickViewComponent;