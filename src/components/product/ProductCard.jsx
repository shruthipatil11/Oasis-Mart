import { useCartAndWishlist, alreadyInCart, alreadyInWishlist } from "../index";

const ProductCard = ({ product }) => {
  const {
    state: cartAndWishlistState,
    updateCart,
    updateWishlist,
  } = useCartAndWishlist();
  const {
    image,
    alt,
    name,
    price,
    latest,
    rating,
    description,
    originalPrice,
    discount,
    _id,
  } = product;

  return (
    <div className="card card__badge card--vertical">
      <figure className="card__image badge">
        <img className="image--responsive" src={image} alt={alt} />
        {latest && <span>New</span>}
        <div className="card__rating">
          <p>{rating}+</p>
          <i className="far fa-star"></i>
        </div>
      </figure>
      <div className="card__body">
        <h4 className="font-weight-600">{name.toUpperCase()}</h4>
        <p className="font-small">{description}</p>
        <div className="price font-small">
          <b>&#x20B9; {price}</b>
          <p className="price__original">&#x20B9; {originalPrice}</p>
          <p>{discount}% off</p>
        </div>
        <div className="d-flex card--align-items card--spacing">
          <button
            className="btn btn--primary flex-center"
            onClick={() => updateCart(product)}
          >
            <span>
              {" "}
              <i className="fas fa-shopping-cart"></i>
            </span>
            {alreadyInCart(cartAndWishlistState.cart, _id)
              ? "Move toCart"
              : "Add to Cart"}
          </button>
          <button className="wishlist" onClick={() => updateWishlist(product)}>
            {alreadyInWishlist(cartAndWishlistState.wishlist, _id) ? (
              <i className="fas fa-heart fa-lg primary--light-color"></i>
            ) : (
              <i className="far fa-heart primary--light-color fa-lg"></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
