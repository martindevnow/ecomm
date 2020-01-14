import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';
// import PropTypes from 'prop-types'

const CartDropdown = props => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

CartDropdown.propTypes = {};

export default CartDropdown;
