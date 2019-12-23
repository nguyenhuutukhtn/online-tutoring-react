/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const TutorRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const userInfo = localStorage.getItem('userInfo');
      if (!userInfo) {
        return (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        );
      }
      const { role } = JSON.parse(localStorage.getItem('userInfo'));
      if (role === 'tutor') {
        return <Component {...props} />;
      }
      return <Redirect to={{ pathname: '/' }} />;
    }}
  />
);

export default TutorRoute;
