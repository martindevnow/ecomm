import * as CartActions from './cart.actions';
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart
} from './cart.utils';

const initialState = {
  hidden: true,
  cartItems: [],
};

export default (state = initialState, {
  type,
  payload
}) => {
  switch (type) {
    case CartActions.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden
      };

    case CartActions.HIDE_CART_DROPDOWN:
      return {
        ...state,
        hidden: true
      };

    case CartActions.SHOW_CART_DROPDOWN:
      return {
        ...state,
        hidden: false
      };

    case CartActions.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      };

    case CartActions.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload),
      };

    case CartActions.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, payload),
      }
      default:
        return state;
  }
};