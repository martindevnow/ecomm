import React from 'react'
import PropTypes from 'prop-types'
import './custom-button.style.scss'
const CustomButton = ({ children, isGoogleSignin, ...otherProps }) => {
  return (
    <button className={`${isGoogleSignin ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
      {children}
    </button>
  )
}

CustomButton.propTypes = {

}

export default CustomButton
