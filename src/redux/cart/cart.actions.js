const namespace = '[CART] :: ';
export const TOGGLE_CART_DROPDOWN = `${namespace}TOGGLE_CART_DROPDOWN`;
export const HIDE_CART_DROPDOWN = `${namespace}HIDE_CART_DROPDOWN`;
export const SHOW_CART_DROPDOWN = `${namespace}SHOW_CART_DROPDOWN`;
export const ADD_ITEM = `${namespace}ADD_ITEM`;
export const REMOVE_ITEM = `${namespace}REMOVE_ITEM`;
export const CLEAR_ITEM_FROM_CART = `${namespace}CLEAR_ITEM_FROM_CART`;

export const toggleCartDropdown = () => ({
  type: TOGGLE_CART_DROPDOWN
});

export const hideCartDropdown = () => ({
  type: HIDE_CART_DROPDOWN
});

export const showCartDropdown = () => ({
  type: SHOW_CART_DROPDOWN
});

export const addItemToCart = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item,
});