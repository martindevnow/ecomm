import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import { hideCartDropdown } from '../../redux/cart/cart.actions';
// import PropTypes from 'prop-types'

const CartDropdown = ({ cartItems, history, closeDropdown }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => closeDropdown() && history.push('/checkout')}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

CartDropdown.propTypes = {};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

const mapDispatchToProps = dispatch => ({
  closeDropdown: () => dispatch(hideCartDropdown())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
