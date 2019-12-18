import React from 'react'
import { MenuItem } from '../../components/menu-item/menu-item.component';

import './directory.style.scss'
export const Directory = () => {
  const sections = [
    { title: 'hats', subtitle: 'hats', imageUrl: 'https://i.ibb.co/cvpntL1/hats.png', id: 1 },
    { title: 'jackets', subtitle: 'jackets', imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png', id: 2 },
    { title: 'sneakers', subtitle: 'sneakers', imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png', id: 3 },
    { title: 'men', subtitle: 'men', imageUrl: 'https://i.ibb.co/R70vBrQ/men.png', id: 4 },
    { title: 'women', subtitle: 'women', imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png', id: 5 },
  ]
  return (
    <div className="directory-menu">
      {
        sections.map(({ id, title, subtitle, imageUrl }) => <MenuItem key={id} title={title} subtitle={subtitle} imageUrl={imageUrl}></MenuItem>)
      }
    </div>
  )
}
