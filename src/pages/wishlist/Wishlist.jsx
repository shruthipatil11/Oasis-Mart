import "./wishlist.css";
import { useEffect } from "react";
import axios from "axios";
import { Header, useCartAndWishlist, ProductCard } from "../../components";

const Wishlist = () => {
  const { state, dispatch } = useCartAndWishlist();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/user/wishlist");
        console.log(response);
        dispatch({
          type: "wishlist",
          payload: response.data.wishlist,
        });
      } catch (error) {
        console.error(error, "couldn't fetch the wishlist");
      }
    })();
  }, [dispatch]);

  return (
    <div className="page">
      <Header />
      {state.wishlist.length > 0 ? (
        <div className="page--center">
          <h2 className="font-weight-600 text--center">Whistlist</h2>
          <div className="d-flex-wrap">
            {state.wishlist.map((product) => {
              return <ProductCard key={product._id} product={product} />;
            })}
          </div>
        </div>
      ) : (
        <h2>No items are added to Wishlist</h2>
      )}
    </div>
  );
};

export default Wishlist;
