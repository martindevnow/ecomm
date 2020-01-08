import React from 'react'
import PropTypes from 'prop-types'
import SignIn from '../../components/sign-in/sign-in.component'

const AuthPage = props => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
    </div>
  )
}

AuthPage.propTypes = {

}

export default AuthPage
