import React, { useCallback, useState } from 'react';
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

  return (
    <section className="section contact-us" id="get-in-touch">
      <div className="container">
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
      </div>
    </section>
  );
};
