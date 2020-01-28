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
    item :
    {
      ...item,
      quantity: item.quantity + 1
    })
}