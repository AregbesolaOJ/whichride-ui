import React, { useEffect, useState } from 'react';
import phoneImage from 'assets/img/iPhoneX2.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { StepsCard } from './StepsCard';

const appsArr = [
  {
    id: 1,
    title: 'Enter Location',
    description:
      'Enter your destination to see a list of taxi providers near you.',
    color: 'blue'
  },
  {
    id: 2,
    title: 'Find the perfect ride',
    description:
      'Filter results by driver rating, driver sex, waiting times, price or speed. Reduce carbon footprint by only showing hybrid or electric cars.',
    color: 'green '
  },
  {
    id: 3,
    title: 'Pay and Save',
    description:
      'Once you select a ride, we search the web for coupons to get you an even better deal, then book seemlessly within our app and earn points while you ride.',
    color: 'yellow'
  }
];

export const HowAppWorks = () => {
  const [active, setActive] = useState();
  const headerControl = useAnimation();
  const phoneControl = useAnimation();
  const stepsControl = useAnimation();
  const [ref, inView] = useInView();

  const headerVariants = {
    hidden: { opacity: 0.25, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.75 } }
  };

  const phoneVariant = {
    hidden: { opacity: 0, x: -1000 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.25 }
    }
  };

  const stepsVariant = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, delay: 0.25 }
    }
  };

  const stepsItemVariant = {
    visible: (i) => ({ opacity: 1, x: 0, transition: { delay: 1 * i * 0.5 } }),
    hidden: { opacity: 0, x: 500 }
  };

  useEffect(() => {
    if (inView) {
      phoneControl.start('visible');
      headerControl.start('visible');
      stepsControl.start('visible');
    }
  }, [inView, phoneControl, stepsControl, headerControl]);

  return (
    <section className="section how-it-works" id="app" ref={ref}>
      <div className="container">
        <motion.div
          className="title-content"
          variants={headerVariants}
          initial="hidden"
          animate={headerControl}
        >
          <h4 className="heading--sm color-white">
            Whichride brings together multiple ride hailing providers and local
            taxi firms in one app
          </h4>
          <p className="paragraph--big color-light-gray mt-3">
            Allowing riders to select the provider that offers the best price,
            service or travel time, then seamlessly book within the app{' '}
          </p>
        </motion.div>
        <div className="presentation">
          <motion.div
            className="presentation__media"
            variants={phoneVariant}
            initial="hidden"
            animate={phoneControl}
          >
            <img
              src={phoneImage}
              alt="Whichride"
              title="Checkout Whichride"
              className="img-fluid"
            />
          </motion.div>
          <motion.div
            className="presentation__app-steps"
            variants={stepsVariant}
            initial="hidden"
            animate={stepsControl}
          >
            {appsArr.map((item) => (
              <StepsCard
                key={item.id}
                item={item}
                variants={stepsItemVariant}
                custom={item.id}
                active={active}
                handleSetActive={setActive}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
