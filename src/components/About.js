import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import personImg from "../images/avatar-blank-person.png";
import "../styling/About.css"

const About = () => {
    const aboutTitles = [
        {
            id: 1,
            title: "Youtuber"
        },
        {
            id: 2,
            title: "Instagram"
        },
        {
            id: 3,
            title: "WebsideGitHubMERNDev"
        },
        {
            id: 4,
            title: "Web Developer"
        },
        {
            id: 5,
            title: "Figma"
        },
        {
            id: 6,
            title: "Software Engineer"
        },
    ]
    const aboutData = [
        {
            id: 1,
            title: "User id",
            value: "78965413365987"
        },
        {
            id: 2,
            title: "Name",
            value: "Arif Hossain"
        },
        {
            id: 3,
            title: "Email",
            value: "arif@test.com"
        },
        {
            id: 4,
            title: "Phone",
            value: "0123654789"
        },
        {
            id: 5,
            title: "Profession",
            value: "Web Developer"
        },
    ]
    const [about, setAbout] = useState(true);

    const toggleAbout = (sub) => {
        if(sub === "about"){
            setAbout(true)
        } else {
            setAbout(false)
        }
    }
    return (
        <>
            <div className="about_main_container">
                <div className="about_content_container">
                    <div className="about_container">
                        <div className="about_img_section">
                            <div className="about_img">
                                <img src={personImg} alt=""/>
                            </div>
                            <div className="about_title">
                                {
                                    aboutTitles.map(item => <p key={item.id}> {item.title} </p>)
                                }
                            </div>
                        </div>
                        <div className="profile_content">
                                <div className="profile_content_header">
                                    <div className="profile_main_content">
                                        <p>Mohammad Arif Hossain</p>
                                        <p className="profile_title">Web Developer</p>
                                        <p className="profile_ranking">RANKINGS : 1/10</p>
                                    </div>
                                    <div>
                                        <Button className="edit_profile">Edit Profile</Button>
                                    </div>
                                </div>
                                <div className="profile_content_bottom">
                                    <div className="tab">
                                        <span className={`about ${about ? "tab_active" : ""}`} onClick={() => toggleAbout("about")}>About</span>
                                        <span className={`timeline ${!about ? "tab_active" : ""} `} onClick={() => toggleAbout("timeline")}>Timeline</span>
                                    </div>
                                    <hr className="tabBottom" />
                                    {
                                        about ? 
                                            <>
                                                {
                                                    aboutData.map(item => <div key={item.id} className="about_content">
                                                        <p className="about_title">
                                                            {item.title}
                                                        </p>
                                                        <p className="about_value">
                                                            {item.value}
                                                        </p>
                                                    </div>)
                                                }
                                            </>
                                        :
                                        <h1 className="timeline_title">Nothing to show!</h1>
                                    }
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;