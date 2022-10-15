import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return <div className="about">
    <div className="about__title">
        <h1>Why Shop With Us?</h1>
    </div>
    <div className="about__subtitle">
        <h3>Why Shop With Us?</h3>
        <p>We offer a huge selection of gear from all University Stores, all in one convenient place. We are passionate about our goal of bringing fans across the globe access to their favorite team's gear. We pride ourselves on not only carrying a large selection of officially licensed products from the top brands, but also industry leading customer service, shipping and return policies.</p>
        <h3>Student Service</h3>
        <p>Our Fan Advocates are committed to your satisfaction and view each time you contact us as a chance to build a relationship. We're shoppers too and dedicated to delivering our customers the kind of shopping experience we would want to have. If your expectations are not exceeded and if you don't look forward to coming back, then we haven't done our job!</p>
        <h3>365-Day Hassle Free Returns</h3>
        <p>Our top priority is to provide the best service possible and if you don't love what you ordered, we don't want you to keep it. If for any reason you are not satisfied with your purchase, you may return the item(s) in original condition for a full refund.</p>
        <h3>Shop with Confidence</h3>
        <p>Protecting your privacy is of the utmost importance to us. We use state-of-the-art encryption technology (SSL) to protect your credit card/personal information. Your information is 100% safe when you shop with us. We sometimes email you to alert you of special sales or new arrivals, but you are free to opt-out of these messages with one click.</p>
    </div>
    <Link to="/" style={{textDecoration: "none"}}><p className="about__home">Back to Home</p></Link>
  </div>;
}

export default About;
