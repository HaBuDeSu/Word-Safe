import React from 'react';

import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props =>
    localStorage.getItem('userToken') ? (
      <Component {...props} />
    ) : (
      <Redirect to='/sign-up' />
    )}
  />
);

export default PrivateRoute;
