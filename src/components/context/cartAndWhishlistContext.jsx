import { createContext, useReducer, useContext } from "react";
import {
  cartWishListReducer,
  alreadyInWishlist,
  alreadyInCart,
} from "../index";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CartAndWishlistContext = createContext(null);
let encodedToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJlZDQ0Yjk5Ni04NDYzLTQ5NzYtOGVhZS1lNTEzYWE1MDdhNmUiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.yNDJ8lOs5rJvbdsaOuVj7rWjVdxzvFF_JZndDZBMxa0";

const CartAndWishlistProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(cartWishListReducer, {
    cart: [],
    wishlist: [],
    loading: true,
  });

  const updateCart = async (product) => {
    dispatch({ type: "showLoader" });
    if (alreadyInCart(state.cart, product._id)) {
      navigate("/cart");
    } else {
      try {
        const response = await axios.post(
          "/api/user/cart",
          {
            product,
          },
          {
            headers: { authorization: encodedToken },
          }
        );
        if (response.status === 201) {
          dispatch({
            type: "cart",
            payload: response.data.cart,
          });
        }
      } catch (error) {
        console.error(error, "couldn't add to the cart");
      }
    }
  };

  const updateWishlist = async (product) => {
    dispatch({ type: "showLoader" });
    let response;

    if (!alreadyInWishlist(state.wishlist, product._id)) {
      try {
        response = await axios.post(
          "/api/user/wishlist",
          {
            product,
          },
          {
            headers: { authorization: encodedToken },
          }
        );
      } catch (error) {
        console.error(error, "couldn't post to the wishlist");
      }
    } else {
      try {
        response = await axios.delete(`/api/user/wishlist/${product._id}`, {
          headers: { authorization: encodedToken },
        });
      } catch (error) {
        console.error(error, "couldn't delete from the wishlist");
      }
    }
    if (response.status === 201 || response.status === 200) {
      dispatch({
        type: "wishlist",
        payload: response.data.wishlist,
      });
    }
  };

  return (
    <CartAndWishlistContext.Provider
      value={{ state, dispatch, updateCart, updateWishlist }}
    >
      {children}
    </CartAndWishlistContext.Provider>
  );
};

const useCartAndWishlist = () => useContext(CartAndWishlistContext);

export { CartAndWishlistProvider, useCartAndWishlist };
