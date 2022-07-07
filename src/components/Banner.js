import React from 'react';
import heroImage from 'assets/img/hero.png';
import { motion } from 'framer-motion';

export const Banner = () => {
  const titleVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1 }
    }
  };

  const titleItemVariant = {
    visible: (i) => ({ opacity: 1, x: 0, transition: { delay: 1 * i * 0.5 } }),
    hidden: { opacity: 0, x: -500 }
  };

  const heroVariants = {
    hidden: { opacity: 0, scale: 0.25, y: 500 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.75, delay: 0.75 }
    }
  };

  return (
    <section className="banner container">
      <motion.div
        className="banner-info"
        animate="visible"
        initial="hidden"
        variants={titleVariant}
      >
        <motion.h4 variants={titleItemVariant} custom={1} className="heading">
          Compare & book ride-hailing providers{' '}
        </motion.h4>
        <motion.p
          variants={titleItemVariant}
          custom={2}
          className="paragraph--big"
        >
          Save money and time with Whichride. Think Compare the market but for
          taxis.
        </motion.p>
      </motion.div>
      <motion.div
        className="banner-hero"
        animate="visible"
        initial="hidden"
        variants={heroVariants}
      >
        <img
          src={heroImage}
          alt="Whichride"
          title="Checkout Whichride"
          className="img-fluid"
        />
      </motion.div>
    </section>
  );
};
