import { useEffect, useState } from 'react';
import '../pages/custom.css';
import { all } from 'axios';

const About = () => {
    useEffect(() => {
    }, [])

    return (


        <>
            <main>
                <div className="tp-product__area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <div className="row">
                                    <div className="home_about_images">
                                        <img src="assets/img/about/about.png" alt="About Aarti Mithila Kraft" />
                                    </div>

                                    <div className="home_about_content">
                                        <h1>Aarti Mithila Kraft – Authentic Mithila & Madhubani Art Handcrafted in India</h1>
                                        <div style={{ textAlign: 'justify', marginLeft: "2rem", marginRight: "2rem", fontFamily: "sans-serif", fontSize: "16px" }}>
                                            <b>Aarti Mithila Kraft</b> is dedicated to preserving the rich heritage of <b>Mithila (Madhubani)</b> art, one of India’s oldest and most celebrated folk art traditions. Our mission is to keep this timeless craft alive while empowering the skilled artisans of Bihar who handcraft each piece with passion and precision.
                                            <br/><br/>
                                            Every product we offer—whether it’s a Madhubani painting, hand-painted home décor, saree, or gifting item—is <b>100% handcrafted</b> using traditional techniques. No machines, no mass production. Just pure creativity, cultural storytelling, and authentic craftsmanship.
                                            <br/><br/>
                                            <h3 style={{ fontFamily: "sans-serif", fontSize: "16px" }} >✨ What Makes Us Unique?</h3>
                                            <ul>
                                                <li style={{ listStyle: "inside" }}><b>Original Mithila artwork,</b> directly sourced from rural women artisans</li>

                                                <li style={{ listStyle: "inside" }}><b>Eco-friendly and sustainable,</b> using natural colors and handmade materials</li>

                                                <li style={{ listStyle: "inside" }}><b>Each piece is unique,</b> telling a story of culture, devotion, and tradition</li>

                                                <li style={{ listStyle: "inside" }}><b>Fair trade model,</b> ensuring artisans receive fair wages and consistent work</li>
                                            </ul>
                                            From intricate designs inspired by mythology to patterns reflecting festivals, marriage rituals, and nature, our art is a beautiful blend of symbolism and emotion. Every stroke carries the legacy of a centuries-old tradition passed down through generations of Mithila women.
                                            <br/><br/>
                                            <h3 style={{ fontFamily: "sans-serif", fontSize: "16px", marginBottom: "0" }} >❤️ Why Choose Aarti Mithila Kraft?</h3>
                                            <br/>
                                            When you buy from us, you are not just purchasing a product—you are:
                                            <ul>
                                                <li style={{ listStyle: "inside" }}>Supporting <b>local women artisans</b></li>

                                                <li style={{ listStyle: "inside" }}>Encouraging <b>sustainable, handmade craftsmanship</b></li>

                                                <li style={{ listStyle: "inside" }}>Bringing home a <b>piece of India’s cultural heritage</b></li>
                                            </ul>
                                            Your choice makes a real impact. It helps preserve an art form that is slowly disappearing due to mass production and digital prints.
                                            <br/><br/>
                                            <b>Transform your space with art that has meaning.</b>
                                            <br/>
                                            <b>Shop consciously. Shop handcrafted.</b>
                                            <br/><br/>
                                            ✅ <i>Aarti Mithila Kraft — Where tradition meets creativity.</i>
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

export default About;