import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';

import PropTypes from 'prop-types';
import './header.style.scss';
import { auth } from '../../firebase/firebase.utils';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
const Header = ({ currentUser, cartHidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/auth">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!cartHidden ? <CartDropdown /> : null}
    </div>
  );
};

Header.propTypes = {
  currentUser: PropTypes.object
};

const mapStateToProps = ({ user, cart }) => ({
  currentUser: user.currentUser,
  cartHidden: cart.hidden
});

export default connect(mapStateToProps)(Header);
