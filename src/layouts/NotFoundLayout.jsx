import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import '../styles/NotFoundLayout.css'

function NotFoundLayout() {
    return (
        <>
            <div className="notFound-container">
                <img className="notFound-img" src="/assets/img/undraw_Page_not_found.png" alt="" />
                <div className="notFound-text">
                    <h2 className="notFound-title">PAGE NOT FOUND</h2>
                    <div className="notFound-paragraph">
                        <p>We looked everywhere for this page.</p>
                        <p>Are you sure the website URL is correct?</p>
                        <p>Get in touch with the site owner.</p>
                        <div className="notFound-btn-container">
                            <LinkRouter to="/" className="notFound-btn">Go to Home</LinkRouter>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NotFoundLayout;