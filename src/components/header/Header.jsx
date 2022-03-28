import { uiLogo } from "../../assets/images";
import { Link } from "react-router-dom";
import { useCartAndWishlist } from "../../components";

const Header = () => {
  const { state } = useCartAndWishlist();

  return (
    <header className="header">
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/product-listing">
              <img src={uiLogo} alt="project icon" />
            </Link>
            <p>Oasis Mart</p>
          </li>
          <li className="search-box">
            <div>
              <input type="text" name="search" placeholder="search" />
              <i className="fas fa-search"></i>
            </div>
          </li>
          <li>
            <Link to="/wishlist">
              <figure className="badge badge__count">
                <i className="far fa-heart fa-2x"></i>
                <span className="d-flex-center">{state.wishlist.length}</span>
              </figure>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <figure className="badge badge__count">
                <i className="fas fa-shopping-cart fa-2x"></i>
                <span className="d-flex-center">{state.cart.length}</span>
              </figure>
            </Link>
          </li>
          <li id="sign-up-btn">
            <button className="btn btn--primary">
              <a href="./src/app/auth/auth.html">Sign Up</a>
            </button>
          </li>
          <li id="sign-in-btn" className="display-none">
            <button className="btn btn--primary">
              <a href="./src/app/auth/auth.html">Login</a>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
