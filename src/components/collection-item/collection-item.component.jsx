import React from 'react';
import PropTypes from 'prop-types';
import './collection-item.style.scss';
import CustomButton from '../custom-button/custom-button.component';
import { addItemToCart } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const CollectionItem = ({ item, addItem }) => {
  const { id, name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></div>
      <div className="collection-footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

CollectionItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.string
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
