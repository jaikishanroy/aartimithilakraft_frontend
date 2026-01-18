import { useEffect, useState } from 'react';
import '../pages/custom.css';
import { all } from 'axios';
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Contact = () => {
    useEffect(() => {
    }, [])
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [product, setProduct] = useState('');
    const [error, setError] = useState('');

    const handleMobile = (e) => {
        const value = e.target.value.replace(/\D/g, ""); // only digits
        if (value.length <= 15) {
            setPhone(value);
        }
        setError("");
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setError("");
    };

    const handleName = (e) => {
        const value = e.target.value.replace(/[^a-zA-Z\s]/g, ""); // only alphabets
        if (value.length <= 25) {
            setName(value);
        }
        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length < 5) {
            setError("Please enter full name.");
            return;
        }
        let checkEmail = email.split('@');
        if (email.length < 5 || checkEmail[0].length < 3 || checkEmail[1].length < 3) {
            setError("Wrong email id.");
            return;
        }
        if (phone.length < 10) {
            setError("Wrong contact no.");
            return;
        }
        alert("Query submitted successfully ✅");

        // Clear form after submit
        // setFormData({
        //     bloggerName: "",
        //     description: "",
        //     image: null,
        // });
    };

    return (


        <>
            <main>
                <div className="tp-product__area">
                    <div className="container">
                        <h1>Contact Us</h1>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <div className="row">
                                    <Row className="justify-content-md-center">
                                        <Col md={4}><img src="/assets/img/logo1.png" alt="Main Logo" /></Col>
                                        <Col md={4} className="p-3 shadow-lg">
                                        <h3 className="mb-4 text-center">Order Here</h3>
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group className="mb-3" controlId="bloggerName">
                                                <Form.Label className="text-start">Full Name:</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="orderName"
                                                    placeholder="Enter your full name"
                                                    value={name}
                                                    onChange={handleName}
                                                    required
                                                    style={{ border: "var(--tblr-border-width) solid var(--tblr-border-color)" }}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="bloggerName">
                                                <Form.Label className="text-start">Email Id:</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    name="orderEmail"
                                                    placeholder="Enter your email id"
                                                    value={email}
                                                    onChange={handleEmail}
                                                    required
                                                    style={{ border: "var(--tblr-border-width) solid var(--tblr-border-color)" }}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="bloggerName">
                                                <Form.Label className="text-start">Contact No.:</Form.Label>
                                                <Form.Control
                                                    type="tel"
                                                    name="orderPhone"
                                                    placeholder="Enter your contact no"
                                                    value={phone}
                                                    onChange={handleMobile}
                                                    required
                                                    style={{ border: "var(--tblr-border-width) solid var(--tblr-border-color)" }}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="bloggerName">
                                                <Form.Control
                                                    type="hidden"
                                                    name="orderProduct"
                                                    value={product}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="blogDescription">
                                                <Form.Label className="text-start">Add Message:</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    rows={6}
                                                    name="description"
                                                    placeholder="Write your content here..."
                                                    required
                                                />
                                            </Form.Group>
                                            {error && (
                                                // Conditionally render the error message
                                                <span id="form-error" style={{ color: 'red', fontSize: '1em' }}>
                                                    {error}
                                                </span>
                                            )}
                                            <div className="text-center">
                                                <Button variant="primary" type="submit" style={{ width: "200px" }}>
                                                    Send Now
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

export default Contact;