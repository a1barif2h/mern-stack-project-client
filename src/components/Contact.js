import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMapMarked, faMobileAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import "../styling/Contact.css"

const Contact = () => {
    return (
        <>
            <div className="contact_container">
                <Container className="pt-5">
                    <Row>
                        <Col sm={4}>
                            <div className="d-flex contact_content_container">
                                <div className="contact_icon d-flex justify-content-end">
                                <FontAwesomeIcon className="icon" icon={faMobileAlt} />
                                </div>
                                <div className="contact_content">
                                    <p className="contact_title">
                                        Phone
                                    </p>
                                    <p className="contact_text">
                                        +8801682221674
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="d-flex contact_content_container">
                                <div className="contact_icon d-flex justify-content-end">
                                <FontAwesomeIcon className="icon" icon={faEnvelope} />
                                </div>
                                <div className="contact_content">
                                    <p className="contact_title">
                                        Email
                                    </p>
                                    <p className="contact_text">
                                        a1barif2h@gmail.com
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="d-flex contact_content_container">
                                <div className="contact_icon d-flex justify-content-end">
                                <FontAwesomeIcon className="icon" icon={faMapMarked} />
                                </div>
                                <div className="contact_content">
                                    <p className="contact_title">
                                        Address
                                    </p>
                                    <p className="contact_text">
                                        Dhaka, Bangladesh
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="get_in_touch_container">
                        <div className="get_in_touch">
                            <h2 className="touch_title mb-3">Get in Touch</h2>
                            <div className="form_container">
                                <Form>
                                    <Row>
                                        <Col className="gat_in_touch_input" md={4}>
                                        <Form.Control placeholder="Your Name" />
                                        </Col>
                                        <Col className="gat_in_touch_input" md={4}>
                                        <Form.Control placeholder="Your Email" />
                                        </Col>
                                        <Col className="gat_in_touch_input" md={4}>
                                        <Form.Control placeholder="Your Phone Number" />
                                        </Col>
                                    </Row>
                                    <Form.Group className="mt-4" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" rows={5} placeholder="Message" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Send Message
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Contact;