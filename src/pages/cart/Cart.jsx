import { useEffect } from "react";
import axios from "axios";
import {
  Header,
  useCartAndWishlist,
  CartCard,
  OrderSummary,
} from "../../components";
import "./cart.css";

const Cart = () => {
  const { state, dispatch } = useCartAndWishlist();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/user/cart");
        console.log({ response });
        dispatch({
          type: "cart",
          payload: response.data.cart,
        });
      } catch (error) {
        console.error(error, "couldn't fetch the cart");
      }
    })();
  }, [dispatch]);

  return (
    <div className="cart-page">
      <Header />
      <main>
        {state.cart.length > 0 ? (
          <>
            <h2 className="font-weight-600">MY CART ({state.cart.length})</h2>
            <div className="d-flex-wrap">
              <div>
                {state.cart.map((product) => (
                  <CartCard key={product._id} product={product} />
                ))}
              </div>

              <OrderSummary cartItems={state.cart} />
            </div>
          </>
        ) : (
          <h2>No Items are added to cart</h2>
        )}
      </main>
    </div>
  );
};

export default Cart;
