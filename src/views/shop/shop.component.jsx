import React from 'react'
import PropTypes from 'prop-types'
import { SHOP_DATA } from '../../store/shop-data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
const Shop = props => {

  const collections = SHOP_DATA;

  return (
    <div className='shop-page'>
      {collections.map(({ id, title, items }) => (
        <CollectionPreview key={id} title={title} items={items} ></CollectionPreview>
      ))}

    </div>
  )
}

Shop.propTypes = {

}

export default Shop
