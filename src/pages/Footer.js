import React from "react";



const Footer=()=>{
    return (
        <>
        <footer>
            <div className="px-4">
                <hr />
            </div>

            <div className="container">
                <div
                    className="row text-start mx-1 mx-md-4 my-2 py-4 px-3 px-md-4 rounded-5 text-white"
                    style={{ backgroundColor: "#FF7722" }} >
                    {/* Column 1 */}
                    <div className="col-12 col-sm-6 col-md-3 mb-4">
                    <b className="fs-3 fs-md-2">Our Production House</b>
                    <div className="text-start pt-3">
                        <span>
                            Aarti Mithila Kraft,
                            <br />
                            Gn Gunj Laheria Sarai,
                            <br />
                            Darbhanga, Bihar,
                            <br />
                            India (846001).
                            <br />
                            Tel: +91 62052 50371
                        </span>
                    </div>
                    </div>

                    {/* Column 2 */}
                    <div className="col-12 col-sm-6 col-md-3 mb-4">
                    <b className="fs-3 fs-md-2">Products</b>
                    <ul className="text-start px-0 pt-3">
                        <li>Sarees</li>
                        <li>Kurtas (Men/Women)</li>
                        <li>Shawls / Stoles</li>
                        <li>Purses / Bags</li>
                        <li>Bedsheets / Cushion Covers</li>
                    </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="col-12 col-sm-6 col-md-3 mb-4">
                    <b className="fs-3 fs-md-2">More Info</b>
                    <ul className="text-start px-0 pt-3">
                        <li>Blogs</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                        <li>Certifications</li>
                    </ul>
                    </div>

                    {/* Column 4 */}
                    <div className="col-12 col-sm-6 col-md-3 mb-4">
                    <b className="fs-3 fs-md-2">Connect Us</b>
                    <form className="text-start px-0 pt-3">
                        <input
                        type="email"
                        className="form-control mb-3"
                        placeholder="Enter Email"
                        style={{
                            height: 40,
                            borderRadius: "10px",
                        }}
                        />
                        <button type="submit" className="btn btn-success w-100">
                        Submit
                        </button>
                    </form>
                    </div>
                </div>
            </div>

            {/* Footer bottom */}
            <div className="tp-copyright-4__area">
                <div className="container custom-container-1">
                    <div className="tp-copyright-3__border">
                    <div className="row align-items-center">
                        <div className="col-md-12 text-center">
                        <p>© Arti Mithila Kraft</p>
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