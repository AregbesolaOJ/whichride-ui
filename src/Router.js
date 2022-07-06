import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
import Page from 'pages/Page';

// const Page = lazy(() => import('pages/Page'));

const Scroll = (props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.location]);

  return props.children;
};

Scroll.propTypes = {
  location: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

const ScrollToTop = Scroll;

const RouterComponent = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route
          exact
          path="/"
          element={<Page />}
          //   render={(routeProps) => (
          //     <Suspense fallback={<Loader show />}>
          //       <Page {...routeProps} />
          //     </Suspense>
          //   )}
        />
      </Routes>
    </ScrollToTop>
  );
};

export default RouterComponent;
