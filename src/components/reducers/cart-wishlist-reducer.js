const cartWishListReducer = (state, action) => {
  switch (action.type) {
    case "cart":
      return { ...state, cart: action.payload, loading: false };
    case "wishlist":
      return { ...state, wishlist: action.payload, loading: false };
    case "showLoader":
      return { ...state, loader: true };
    default:
      return state;
  }
};

export { cartWishListReducer };
