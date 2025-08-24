import React, { useEffect, useState } from "react";
import SliderComponent from "./Slider";
import Footer from "./Footer";
import { getBlocks } from "../helper/https";

const Home = () => {
  const [block1, setBlock1] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const imgurl = "http://localhost:8000/";

  useEffect(() => {
    getBlocks({ block: 2 })
      .then((res) => {
        setBlock1(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Failed to load blocks. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading-spinner"><p>Loading...</p></div>;
  }

  if (error) {
    return <div className="error-message"><p>{error}</p></div>;
  }

  return (
    <div>
      <SliderComponent />

      <div className="home-about-section">
        <div className="home_about_content">
          <h2>Welcome to Aarti Mithila Kraft</h2>
          <span>Preserving Art & Promoting Artisans</span>
          <p>
            At Aarti Mithila Kaft, we bring the vibrant and intricate art
            of Mithila from the heart of Bihar to the world. Each piece tells
            a story rooted in age-old traditions, meticulously handcrafted
            with passion and precision.
          </p>
        </div>

        <div className="home_about_images">
          <img src="assets/img/banner/about.jpeg" alt="About Aarti Mithila Kraft" />
        </div>
      </div>

      <div className="container full-width-products">
        <div className="row">
          <div className="col-12">
            <h2 className="home_product_heading">Kurta's</h2>
          </div>

          {block1 && block1.length > 0 ? (
            block1.map((prod) => (
              <div className="col-12 col-md-3" key={prod.id}>
                <div className="card home-bx">
                  <figure className="product-figure">
                    <img
                      src={imgurl + (prod.cat_image || "fallback-image.jpg")}
                      alt={prod.name || "Product"}
                    />
                    <div className="quick-view">
                      <p>Quick View</p>
                    </div>
                  </figure>
                </div>
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
