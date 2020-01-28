import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types'

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

CartDropdown.propTypes = {};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});
export default connect(mapStateToProps)(CartDropdown);
