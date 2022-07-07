import React, { useState } from 'react';
import { Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import logo from 'assets/img/logo.png';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="nav shadow-sm" expand="lg" sticky="top">
      <div className="container d-flex justify-content-between align-items-center">
        <NavLink className="navbar-brand pt-3" to="/">
          <img
            src={logo}
            alt="Whichride logo"
            className="img-fluid"
            title="Whichride"
          />
        </NavLink>

        <NavbarToggler
          onClick={toggle}
          className={classnames({ open: isOpen })}
        >
          <div className={classnames('hamburger', { open: isOpen })}>
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
          </div>
        </NavbarToggler>

        <Nav className={classnames('ml-auto', { open: isOpen })} navbar>
          <NavItem className="nav-item">
            <a className="nav-link nav__link" href="#app">
              The App
            </a>
          </NavItem>

          <NavItem className="nav-item">
            <a className="nav-link nav__link" href="#about-us">
              About Us
            </a>
          </NavItem>

          <NavItem className="nav-item">
            <a className="nav-link nav__link" href="#get-in-touch">
              Get In Touch
            </a>
          </NavItem>
        </Nav>
      </div>
    </Navbar>
  );
};
