import React from 'react';
import PropTypes from 'prop-types';

import './checkout-item.styles.scss';
import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart
} from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const CheckoutItem = ({ item, remove, increase, decrease }) => {
  const { name, price, quantity, imageUrl } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decrease(item)}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={() => increase(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <span className="remove-button" onClick={() => remove(item)}>
        &#10005;
      </span>
    </div>
  );
};

CheckoutItem.propTypes = {};

const mapDispatchToProps = dispatch => ({
  remove: item => dispatch(clearItemFromCart(item)),
  increase: item => dispatch(addItemToCart(item)),
  decrease: item => dispatch(removeItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
