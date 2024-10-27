export const addToCart = (product) => {
    return {
      type: 'ADD_TO_CART',
      payload: product,
    };
  };
  
  export const removeFromCart = (id) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: id,
    };
  };


  export const increaseQuantity = (itemId) => ({
    type: 'INCREASE_QUANTITY',
    payload: itemId,
  });
  
  export const decreaseQuantity = (itemId) => ({
    type: 'DECREASE_QUANTITY',
    payload: itemId,
  });
  