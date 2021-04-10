import { faBriefcase, faClipboardCheck, faEnvelope, faLock, faMobileAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import workingGirl from "../images/workingGirl.jpg";
import "../styling/Signup.css"

const Signup = () => {
    return (
        <>
            <div className="signup_container">
                <div className="signup_section">
                    <Row>
                        <Col className="signup_form_main" md={6}>
                            <h2 className="signup_title">Sign up</h2>
                            <Form className="signup_form_container">

                                <Form.Group>
                                    <div className="d-flex form_filed_container">
                                        <div className="icon_container">
                                            <Form.Label htmlFor="name">
                                                <FontAwesomeIcon className="icon" icon={faUserAlt} />
                                            </Form.Label>
                                        </div>
                                        <div className="filed_container">
                                            <Form.Control name="name" id="name" type="text" placeholder="Your Name" autoComplete="off" />
                                        </div>
                                    </div>
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <div className="d-flex form_filed_container">
                                        <div className="icon_container">
                                            <Form.Label htmlFor="email">
                                                <FontAwesomeIcon className="icon" icon={faEnvelope} />
                                            </Form.Label>
                                        </div>
                                        <div className="filed_container">
                                            <Form.Control name="email" id="email" type="email" placeholder="Your Email" autoComplete="off" />
                                        </div>
                                    </div>
                                </Form.Group>

                                <Form.Group>
                                    <div className="d-flex form_filed_container">
                                        <div className="icon_container">
                                            <Form.Label htmlFor="phone">
                                                <FontAwesomeIcon className="icon" icon={faMobileAlt} />
                                            </Form.Label>
                                        </div>
                                        <div className="filed_container">
                                            <Form.Control name="phone" id="phone" type="number" placeholder="Mobile Number" />
                                        </div>
                                    </div>
                                </Form.Group>

                                <Form.Group>
                                    <div className="d-flex form_filed_container">
                                        <div className="icon_container">
                                            <Form.Label htmlFor="work">
                                                <FontAwesomeIcon className="icon" icon={faBriefcase} />
                                            </Form.Label>
                                        </div>
                                        <div className="filed_container">
                                            <Form.Control name="work" id="work" type="text" placeholder="Your Profession" />
                                        </div>
                                    </div>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <div className="d-flex form_filed_container">
                                        <div className="icon_container">
                                            <Form.Label htmlFor="password">
                                                <FontAwesomeIcon className="icon" icon={faLock} />
                                            </Form.Label>
                                        </div>
                                        <div className="filed_container">
                                            <Form.Control name="password" id="password" type="password" placeholder="Password" />
                                        </div>
                                    </div>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <div className="d-flex form_filed_container form_filed_container">
                                        <div className="icon_container">
                                            <Form.Label htmlFor="confirmPassword">
                                                <FontAwesomeIcon className="icon" icon={faClipboardCheck} />
                                            </Form.Label>
                                        </div>
                                        <div className="filed_container">
                                            <Form.Control name="confirmPassword" id="confirmPassword" type="password" placeholder="Confirm Your Password" />
                                        </div>
                                    </div>
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Register
                                </Button>

                                <span className="for_mobile_register">
                                    <NavLink to="/login">I am already register!</NavLink>
                                </span>
                                
                            </Form>
                        </Col>
                        <Col className="signup_img_container" md={6}>
                            <img src={workingGirl} alt="working girl"/>
                            <p className="for_register">
                                <NavLink to="/login">I am already register!</NavLink>
                            </p>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default Signup;