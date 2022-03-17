import {uiLogo} from '../../pages/index';

 const Header = () => {
    return (
        <header className="header">
        <nav>
          <ul className="navbar">
            <li>
              <a href="./src/app/product-listing/product-listing.html">
                <img src={uiLogo} alt="project icon" />
              </a>
              <p>Oasis Mart</p>
            </li>
            <li className="search-box">
              <div>
                <input type="text" name="search" placeholder="search" />
                <i className="fas fa-search"></i>
              </div>
            </li>
            <li>
              <a href="./src/app/wishlist/wishlist.html">
                <figure className="badge badge__count">
                  <i className="far fa-heart fa-2x"></i>
                  <span className="d-flex-center">5</span>
                </figure>
              </a>
            </li>
            <li>
              <a href="./src/app/cart/cart.html">
                <figure className="badge badge__count">
                  <i className="fas fa-shopping-cart fa-2x"></i>
                  <span className="d-flex-center">11</span>
                </figure>
              </a>
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
}

export default Header;
