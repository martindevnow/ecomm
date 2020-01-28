import React from 'react';
import PropTypes from 'prop-types';
import './collection-preview.style.scss';
import CollectionItem from '../collection-item/collection-item.component';
const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((_, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item}></CollectionItem>
          ))}
      </div>
    </div>
  );
};

CollectionPreview.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array
};

export default CollectionPreview;
