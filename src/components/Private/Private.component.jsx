import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AccountContext } from '../../contexts/AccountContextProvider';

function Private({ children, ...rest }) {
  const loggedInContext = useContext(AccountContext);
  const isLoggedIn = !!loggedInContext.account;

  return (
    <Route {...rest} render={() => (isLoggedIn ? children : <Redirect to="/login" />)} />
  );
}

export default Private;
