import React from 'react';
import "../styling/Home.css"

const Home = () => {
    return (
        <>
            <div className="home_container">
                <div className="d-flex">
                    <div className="first"></div>
                    <div className="secund"></div>
                </div>
                <div className="home_content_container">
                    <p className="welcome_content">Welcome</p>
                    <p className="welcome_main_content">We Are The MERN Developer</p>
                </div>
            </div>
        </>
    );
};

export default Home;