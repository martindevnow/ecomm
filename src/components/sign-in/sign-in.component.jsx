import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './sign-in.style.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    setEmail('')
    setPassword('')
  };
  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
    }
  }
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Signin with you email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput type="email" name="email" value={email} required handleChange={handleChange} />
        <FormInput type="password" name="password" value={password} required handleChange={handleChange} />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton isGoogleSignin onClick={signInWithGoogle}>Sign In With Google</CustomButton>
        </div>
      </form>
    </div>
  )
}

SignIn.propTypes = {

}

export default SignIn
