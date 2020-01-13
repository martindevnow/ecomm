import React from 'react';
// import PropTypes from 'prop-types';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './authpage.style.scss';

const AuthPage = props => {
  return (
    <div className="auth">
      <SignIn />
      <SignUp />
    </div>
  );
};

// AuthPage.propTypes = {};

export default AuthPage;
