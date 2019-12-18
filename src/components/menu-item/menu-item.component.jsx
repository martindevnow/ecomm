import React from 'react'

import './menu-item.style.scss'

export const MenuItem = ({ title, imageUrl }) => {
  return (
    <div className="menu-item">
      <div className="background-image" style={
        {
          backgroundImage: `url(${imageUrl})`
        }
      }></div>
      <div className="content">
        <h2 className="title">{title.toUpperCase()}</h2>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}
