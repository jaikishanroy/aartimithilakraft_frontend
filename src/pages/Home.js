import React, { useEffect, useState, useRef } from "react";
import SliderComponent from "./Slider";
import Footer from "./Footer";
import { blockProduct, getBlocks } from "../helper/https";
import QuickViewComponent from "./QuickView";
import Blogs from "./BlogSlider";

const Home = () => {
  const [block1, setBlock1] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const imgurl = "http://localhost:8000/";

  const SLIDER_WIDTH = 400;
  const MAX_WIDTH = 900;

  let block2 = [
    {
      id: 1,
      name: "Radhe Krishna 1",
      cat_image: "assets/img/topSellingItems/item-1.png",
    },
    {
      id: 2,
      name: "Radhe Krishna 2",
      cat_image: "assets/img/topSellingItems/item-2.png",
    },
    {
      id: 3,
      name: "Radhe Krishna 3",
      cat_image: "assets/img/topSellingItems/item-3.png",
    },
    {
      id: 4,
      name: "Radhe Krishna 4",
      cat_image: "assets/img/topSellingItems/item-4.png",
    },
    {
      id: 5,
      name: "Radhe Krishna 5s",
      cat_image: "assets/img/topSellingItems/item-5.png",
    },
  ];

  useEffect(() => {
    getBlocks()
      .then((res) => {
        const formattedBlocks = res.data?.[0]?.products?.map((item) => ({
          id: item.id,
          name: item.name,
          cat_image: item.images?.[0]?.original,
        }));
        setBlock1(formattedBlocks || block2);
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
          <span>Preserving Tradition, Elevating Artisans</span>
          <p style={{ textAlign: 'justify' }}>
            At Aarti Mithila Kraft, our mission is to preserve the timeless beauty of Mithila artistry while uplifting the artisans who pour their heart into every creation. We bring the vibrant, intricate, and meaningful art of Mithila from the cultural heartland of Bihar to the global stage. Every piece we offer is more than just a product—it is a narrative of heritage, devotion, and ancestral wisdom passed down through generations. Handcrafted with meticulous precision, each artwork reflects the artisan’s emotions, patience, and connection to their roots. By choosing Aarti Mithila Kraft, you not only welcome a unique handmade art piece into your space but also support sustainable livelihoods and help keep a centuries-old tradition alive.
          </p>
        </div>

        <div className="home_about_images">
          <img src="assets/img/banner/welcome.png" alt="About Aarti Mithila Kraft" />
        </div>
      </div>

      <div>
        <QuickViewComponent product1={block1} />
      </div>

    </div>
  );

};

export default Home;
