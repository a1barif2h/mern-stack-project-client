import { faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import loginPic from "../images/login.png";
import "../styling/Login.css"

const Login = () => {
    return (
        <>
        <div className="login_container">
                <div className="login_section">
                    <Row>
                    <Col className="login_img_container" md={6}>
                            <img src={loginPic} alt="working girl"/>
                            <p className="for_register">
                                <NavLink to="/signup">Create a account!</NavLink>
                            </p>
                        </Col>
                        <Col className="login_form_main" md={6}>
                            <h2 className="login_title">Login</h2>
                            <Form className="login_form_container">

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

                                <Button variant="primary" type="submit">
                                    Login
                                </Button>

                                <span className="for_mobile_register">
                                    <NavLink to="/signup">Create a account!</NavLink>
                                </span>
                                
                            </Form>
                            <div className="d-flex login_with_container">
                                <p className="login_with">Ot login with</p>
                                <div className="d-flex social_icon_container">
                                    <p className="facebook">
                                        <FontAwesomeIcon className="social_icon" icon={faFacebookF}/>
                                    </p>
                                    <p className="twitter">
                                        <FontAwesomeIcon className="social_icon" icon={faTwitter}/>
                                    </p>
                                    <p className="google">
                                        <FontAwesomeIcon className="social_icon" icon={faGoogle}/>
                                    </p>
                                </div>
                            </div>
                        </Col>
                        
                    </Row>
                </div>
            </div>
        </>
    );
};

export default Login;