import React from 'react';
import classNames from 'classnames';
import { motion, useAnimation } from 'framer-motion';

export const OptionCard = ({ title, description, id, color }) => {
  const optionCardControls = useAnimation();

  const childVariants = {
    visible: () => ({
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 500
      }
    }),
    hover: () => ({
      opacity: 1,
      scale: 0.95
    })
  };

  return (
    <motion.div
      className="options-card"
      onMouseEnter={() => optionCardControls.start('hover')}
      onMouseLeave={() => optionCardControls.start('visible')}
      variants={childVariants}
      animate={optionCardControls}
      initial="visible"
      custom={id}
    >
      <div className={classNames(`options-card__icon bg-${color}`)}>
        <img src={require(`assets/img/svg/icon${id}.svg`)} alt={title} />
      </div>
      <h3 className="">{title}</h3>
      <p className="paragraph">{description}</p>
    </motion.div>
  );
};
