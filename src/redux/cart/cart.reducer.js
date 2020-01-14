import * as CartActions from './cart.actions';

const initialState = {
  hidden: true
};

export default (state = initialState, { type, payload }) => {
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

    default:
      return state;
  }
};
