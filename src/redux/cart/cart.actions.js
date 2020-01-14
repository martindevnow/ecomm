const namespace = 'CART';
export const TOGGLE_CART_DROPDOWN = `${namespace}::TOGGLE_CART_DROPDOWN`;
export const HIDE_CART_DROPDOWN = `${namespace}::HIDE_CART_DROPDOWN`;

export const toggleCartDropdown = () => ({
  type: TOGGLE_CART_DROPDOWN
});

export const hideCartDropdown = () => ({
  type: HIDE_CART_DROPDOWN
});
