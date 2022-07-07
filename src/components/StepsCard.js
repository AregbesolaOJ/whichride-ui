import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

export const StepsCard = ({
  item,
  active,
  handleSetActive,
  variants,
  custom
}) => {
  return (
    <motion.div
      className="presentation__app-step"
      custom={custom}
      tabIndex="-1"
      variants={variants}
      aria-hidden
      role="button"
      onClick={() => handleSetActive(item.id)}
    >
      <div className="step-label">
        <div
          className={classNames('step-label__avatar', {
            active: active === item.id
          })}
        >
          <p className=" m-0">Step {item.id}</p>
        </div>
      </div>
      <div className="content">
        <h4 className="paragraph--big color-white">{item.title}</h4>
        <p className="paragraph color-light-gray m-0">{item.description}</p>
      </div>
    </motion.div>
  );
};
