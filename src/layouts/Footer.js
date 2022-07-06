import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer-items">
          <li className="footer-item">
            &copy; {new Date().getFullYear()}{' '}
            <Link className="footer-link" to="/">
              Whichride -
            </Link>{' '}
            All rights reserved.
          </li>
          <li className="footer-item">
            <Link className="footer-link" to="/">
              Privacy Policy
            </Link>
          </li>
          <li className="footer-item">
            <Link className="footer-link" to="/">
              Terms and Conditions
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  history: PropTypes.object
};
