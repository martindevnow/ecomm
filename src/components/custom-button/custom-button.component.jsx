import React from 'react';
import PropTypes from 'prop-types';
import './custom-button.style.scss';
const CustomButton = ({
  children,
  isGoogleSignin,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${isGoogleSignin ? 'google-sign-in' : ''} 
      ${inverted ? 'inverted' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  isGoogleSignin: PropTypes.bool
};

export default CustomButton;
