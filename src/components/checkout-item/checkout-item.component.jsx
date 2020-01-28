import React from 'react';
import PropTypes from 'prop-types';

import './checkout-item.styles.scss';

const CheckoutItem = ({ item }) => {
  const { name, price, quantity, imageUrl } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">${price}</span>
      <span className="remove-button">&#10005;</span>
    </div>
  );
};

CheckoutItem.propTypes = {};

export default CheckoutItem;
