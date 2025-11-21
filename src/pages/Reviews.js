import { useEffect, useState } from 'react';
import '../pages/custom.css';
import { all } from 'axios';
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Reviews = () => {
    useEffect(() => {
    }, []);

    const [formData, setFormData] = useState({
        bloggerName: "",
        description: "",
        image: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "image") {
        setFormData({ ...formData, image: files[0] });
        } else {
        setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Blog Data ->", formData);

        alert("Blog submitted successfully ✅");

        // Clear form after submit
        setFormData({
        bloggerName: "",
        description: "",
        image: null,
        });
    };

    return (


        <>
            <main>
                <div className="tp-product__area">
                    <div className="container">
                        <h1>Customer Feedbacks</h1>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <div className="row">
                                    <Row className="justify-content-md-center">
                                        <Col md={4}><img src="/assets/img/logo1.png" alt="Main Logo" /></Col>
                                        <Col md={4} style={{ border: "var(--tblr-border-width) solid var(--tblr-border-color)", padding: "2rem" }}>
                                        <h3 className="mb-4 text-center">Share Your Experience</h3>
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group className="mb-3" controlId="bloggerName">
                                                <Form.Label className="text-start">Your Full Name:</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="bloggerName"
                                                    placeholder="Enter your full name"
                                                    value={formData.bloggerName}
                                                    onChange={handleChange}
                                                    required
                                                    style={{ border: "var(--tblr-border-width) solid var(--tblr-border-color)" }}
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="blogDescription">
                                            <Form.Label className="text-start">Your experience with us:</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={6}
                                                name="description"
                                                placeholder="Write your content here..."
                                                value={formData.description}
                                                onChange={handleChange}
                                                required
                                            />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="blogThumb">
                                            <Form.Label className="text-start">Upload your profile picture:</Form.Label>
                                            <Form.Control
                                                type="file"
                                                name="image"
                                                accept="image/*"
                                                onChange={handleChange}
                                            />
                                            </Form.Group>

                                            <div className="text-center">
                                            <Button variant="primary" type="submit" style={{ width: "200px" }}>
                                                Publish Content
                                            </Button>
                                            </div>

                                        </Form>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </>)
}

export default Reviews;
