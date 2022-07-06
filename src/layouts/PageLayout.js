import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Loader } from 'components';
import { Header } from './Header';
import { Footer } from './Footer';

const PageLayout = (props) => (
  <div className="pt-5">
    <Header />

    {props.loading ? <Loader /> : null}

    <main className={classnames('page-body', props.pageClass)}>
      {props.children}
    </main>

    <Footer />
  </div>
);

PageLayout.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool,
  pageClass: PropTypes.string
};

export default PageLayout;
