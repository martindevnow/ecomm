import React from 'react';
import MenuItem from '../../components/menu-item/menu-item.component';

import './directory.style.scss';
export const Directory = () => {
  const sections = [
    {
      title: 'hats',
      subtitle: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      subtitle: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      subtitle: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'men',
      subtitle: 'men',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      id: 4,
      linkUrl: 'shop/men'
    },
    {
      title: 'women',
      subtitle: 'women',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      id: 5,
      linkUrl: 'shop/womens'
    }
  ];
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps}></MenuItem>
      ))}
    </div>
  );
};
