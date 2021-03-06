import React from 'react'
import { withRouter } from 'react-router-dom';
import './menu-item.style.scss'

const MenuItem = ({ title, imageUrl, linkUrl, history, match }) => {
  return (
    <div className="menu-item" onClick={() => history.push(`${match.url}${linkUrl}`)}>
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
  );
}

export default withRouter(MenuItem);