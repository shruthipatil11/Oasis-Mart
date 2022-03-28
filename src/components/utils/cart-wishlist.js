  const alreadyInCart = (cart,productId) => {
    return cart.some(
      (product) => product._id === productId
    );
  };

  const alreadyInWishlist = (wishlist,productId) => {
    return wishlist.some(
      (product) => product._id === productId
    );
};
  
export { alreadyInCart, alreadyInWishlist };