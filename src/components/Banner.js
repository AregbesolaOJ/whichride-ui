import React from 'react';
import heroImage from 'assets/img/hero.png';

export const Banner = () => (
  <section className="banner container">
    <div className="banner-info">
      <h4 className="heading">Compare & book ride-hailing providers </h4>
      <p className="paragraph--big">
        Save money and time with Whichride. Think Compare the market but for
        taxis.
      </p>
    </div>
    <div className="banner-hero">
      <img
        src={heroImage}
        alt="Whichride"
        title="Checkout Whichride"
        className="img-fluid"
      />
    </div>
  </section>
);
