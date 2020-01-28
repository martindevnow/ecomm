export const addItemToCart = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(item => item.id === itemToAdd.id);
  if (!existingCartItem) {
    return [
      ...cartItems,
      {
        ...itemToAdd,
        quantity: 1,
      }
    ];
  }

  return cartItems.map(item => item.id !== itemToAdd.id ?
    item : {
      ...item,
      quantity: item.quantity + 1
    })
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  return cartItems.map(item => item.id !== itemToRemove.id ? item : {
    ...item,
    quantity: item.quantity - 1,
  }).filter(item => item.quantity)
};

export const clearItemFromCart = (cartItems, itemToRemove) => cartItems.filter(item => item.id !== itemToRemove.id);