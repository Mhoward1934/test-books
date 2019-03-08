import React from "react";
import { Link } from "react-router-dom";
import "landing.css";


const LandingPage = () => (
    <div className="hero-image">
        <div className="hero-text">
            <h1>Welcome to Google Books Search</h1>
            <h4>Search for your favorite books and save them to read later.</h4>
            <Link href="/" to="/"><button>Get Started!</button></Link>
        </div>
    </div>
)

export default LandingPage;