import React from "react";



const Footer=()=>{
    return (
        <>
        <footer>
            <div className="px4"><hr/></div>
            <div className="container">
                <div className="row text-start mx-8 my-2 py-4 px-4 rounded-5 text-white" style={{ backgroundColor: '#FF7722' }}>
                    <div className="col-4 col-md-3 mb-3"><b className="fs-2">Our Production House</b>
                        <div className="text-start pt-4">
                            <span>Geetanjali Boutique<br/>Dr. U K Biswas Campus<br/>Income Tax Chowk<br/>Darbhanga<br/>Tel: +91 99756 10574</span>
                        </div>
                    </div>
                    <div className="col-4 col-md-3 mb-3"><b className="fs-2">Products</b>
                        <ul className="text-start px-0 pt-4">
                            <li>Sarees</li>
                            <li>Kurtas (Men/Women)</li>
                            <li>Shawls / Stoles</li>
                            <li>Purses / Bags</li>
                            <li>Bedsheets / Cushion Covers</li>
                        </ul>
                    </div>
                    <div className="col-4 col-md-3 mb-3"><b className="fs-2">More Info</b>
                        <ul className="text-start px-0 pt-4">
                            <li>Blogs</li>
                            <li>About Us</li>
                            <li>Contact us</li>
                            <li>Privacy Policy</li>
                            <li>Certifications</li>
                        </ul>
                    </div>
                    <div className="col-4 col-md-3 mb-3"><b className="fs-2">Connect Us</b>
                        <form className="text-start px-0 pt-4">
                            <input type="email" style={{ height: 36, marginBottom: '10px', borderRadius: '10px', paddingLeft: '5px', paddingRight: '5px' }}></input>
                            <input type="submit" className="btn btn-success"></input>
                        </form>
                    </div>
                </div>
            </div>
            <div className="tp-copyright-4__area">
                <div className="container custom-container-1">
                    <div className="tp-copyright-3__border">
                        <div className="row align-items-center">
                            <div className="col-md-12 ">
                                <div className="tp-copyright-3__left-box">
                                <p>© Arti Mithila Kraft</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
    )
}
export default Footer