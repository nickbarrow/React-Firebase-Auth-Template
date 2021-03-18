import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function AnonRoute({ component: Component, auth, ...rest }) {
  return (
    <Route {...rest} render={props => 
      auth 
      ? <Redirect to="/" />
      : <Component {...props} /> } /> 
  )
}