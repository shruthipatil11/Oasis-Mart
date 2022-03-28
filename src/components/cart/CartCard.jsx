import { useCartAndWishlist, alreadyInWishlist } from "../../components";

const CartCard = ({ product }) => {
  const { image, alt, name, price, originalPrice, discount, _id, qty } =
    product;

  const {
    state,
    updateWishlist,
    removeProductFromCart,
    changeProductQuantity,
  } = useCartAndWishlist();

  return (
    <div key={_id} className=" cart card card--horizontal">
      <figure className="card__image close-container">
        <img className="image--responsive" src={image} alt={alt} />
      </figure>
      <div className="card__body">
        <p className="text--left">{name.toUpperCase()}</p>
        <div className="price">
          <b className="font-weight-600">&#x20B9;{price}</b>
          <p className="price__original">&#x20B9;{originalPrice}</p>
        </div>
        <p className="text--tertiary text--left">{discount}% off</p>
        <div className="card__quantity">
          Quantity:{" "}
          <button onClick={() => changeProductQuantity(_id, "increment")}>
            <i className="fas fa-plus-square"></i>
          </button>
          <input type="text" value={qty} />
          <button
            onClick={() => changeProductQuantity(_id, "decrement")}
            disabled={qty <= 1}
          >
            <i className="fas fa-minus-square"></i>
          </button>
        </div>
        <div className="d-flex-col">
          <button
            className="btn btn--primary flex-center"
            onClick={() => removeProductFromCart(product)}
          >
            Remove from cart
          </button>
          <button
            className="btn btn--outlined btn--primary"
            onClick={() => updateWishlist(product)}
          >
            {alreadyInWishlist(state.wishlist, _id)
              ? "Whislisted"
              : "Add to wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
