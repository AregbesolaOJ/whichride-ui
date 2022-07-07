import { useAnimation, motion } from 'framer-motion';
import React, { useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { validateEmail } from 'utility';

export const ContactUs = () => {
  const [email, setEmail] = useState();
  const checkEmailValidity = useCallback(() => {
    if (email?.length > 0 && !validateEmail(email)) {
      return false;
    }
    return true;
  }, [email]);

  const handleSubmit = () => {};

  const control = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    hidden: { opacity: 0.25, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.75 } }
  };

  useEffect(() => {
    if (inView) {
      control.start('visible');
    }
  }, [inView, control]);

  return (
    <section className="section contact-us" id="get-in-touch" ref={ref}>
      <motion.div
        className="container"
        variants={variants}
        initial="hidden"
        animate={control}
      >
        <h4 className="heading--sm">Sign up to our beta form </h4>
        <p className="paragraph--big my-3">
          Sign up to our mailing list to find out more information and keep up
          to date about our activities
        </p>
        <form className="contact-us__form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group w-100">
            <input
              type="email"
              name="email"
              placeholder="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
            />
            {!checkEmailValidity() ? (
              <p className="error-message mb-0">
                Kindly enter a valid email address
              </p>
            ) : null}
          </div>
          <button
            type="submit"
            disabled={!checkEmailValidity()}
            className="btn"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </motion.div>
    </section>
  );
};
