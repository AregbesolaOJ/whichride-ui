import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { OptionCard } from './OptionCard';

const optionsArr = [
  {
    id: 1,
    title: 'More Choices',
    description:
      'WhichRide lets you compare pricing across the major rideshares so you can save money on every ride.',
    color: 'blue'
  },
  {
    id: 2,
    title: 'More Choices',
    description:
      'WhichRide lets you compare pricing across the major rideshares so you can save money on every ride.',
    color: 'green '
  },
  {
    id: 3,
    title: 'More Choices',
    description:
      'WhichRide lets you compare pricing across the major rideshares so you can save money on every ride.',
    color: 'yellow'
  },
  {
    id: 4,
    title: 'More Choices',
    description:
      'WhichRide lets you compare pricing across the major rideshares so you can save money on every ride.',
    color: 'purple'
  }
];

export const AboutUs = () => {
  const headerControl = useAnimation();
  const cardsControl = useAnimation();
  const [ref, inView] = useInView();

  const headerVariants = {
    hidden: { opacity: 0.25, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.75 } }
  };
  const cardsVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.75, delay: 0.5 }
    }
  };

  useEffect(() => {
    if (inView) {
      cardsControl.start('visible');
      headerControl.start('visible');
    }
  }, [inView, cardsControl, headerControl]);

  return (
    <section className="section options" id="about-us" ref={ref}>
      <div className="container">
        <motion.div
          variants={headerVariants}
          animate={headerControl}
          initial="hidden"
        >
          <h4 className="heading--sm text-center pt-3 mb-5">Why Whichride</h4>
        </motion.div>
        <motion.div
          className="options-cards w-100"
          animate={cardsControl}
          variants={cardsVariants}
          initial="hidden"
        >
          {optionsArr.map((option) => (
            <OptionCard key={option.id} {...option} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
