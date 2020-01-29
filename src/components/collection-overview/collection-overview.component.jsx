import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectShopCollection } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';

import './collection-overview.style.scss';

const CollectionOverview = ({ collection }) => {
  return (
    <div className="collection-overview">
      {collection.map(({ id, title, items }) => (
        <CollectionPreview
          key={id}
          title={title}
          items={items}
        ></CollectionPreview>
      ))}
    </div>
  );
};

CollectionOverview.propTypes = {};

const mapStateToProps = createStructuredSelector({
  collection: selectShopCollection
});

export default connect(mapStateToProps)(CollectionOverview);
