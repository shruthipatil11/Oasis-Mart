import { useEffect } from "react";
import axios from "axios";
import "./home-page.css";
import { Category, Header, useDataFromServer } from "../../components";
import { tshirt } from "../../assets/images";

const HomePage = () => {
  const { state, dispatch } = useDataFromServer();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        dispatch({ type: "saveData", payload: response.data.categories });
      } catch (error) {
        console.error(error, "couldn't fetch the featured categories");
      }
    })();
  }, []);

  return (
    <div className="page homepage">
      <Header />
      {state.loading && (
        <div className="loader">
          <i class="fas fa-spinner"></i>
        </div>
      )}
      <div className="page--center">
        <div className="categories">
          <ul className="d-flex-wrap">
            {state.resData.map((category) => (
              <li key={category.id}>
                <Category category={category} />{" "}
              </li>
            ))}
          </ul>
        </div>

        <h2>TRENDING NOW</h2>
        <div className="d-flex-wrap trending">
          <div className="card card__badge card--vertical">
            <figure className="card__image badge">
              <img className="image--responsive" src={tshirt} alt="product" />
              <span>New</span>
            </figure>
            <div className="card__body">
              <h4 className="font-weight-600">Wireles Headphones</h4>
              <p className="font-small">
                Tangles wires? Not in your vocabulary
              </p>
              <p className="font-small">+ EXPLORE</p>
            </div>
          </div>

          <div className="card card__badge card--vertical">
            <figure className="card__image badge">
              <img className="image--responsive" src={tshirt} alt="product" />
              <span>New</span>
            </figure>
            <div className="card__body">
              <h4 className="font-weight-600">Wireles Headphones</h4>
              <p className="font-small">
                Tangles wires? Not in your vocabulary
              </p>
              <p className="font-small">+ EXPLORE</p>
            </div>
          </div>

          <div className="card card__badge card--vertical">
            <figure className="card__image badge">
              <img className="image--responsive" src={tshirt} alt="product" />
              <span>New</span>
            </figure>
            <div className="card__body">
              <h4 className="font-weight-600">Wireles Headphones</h4>
              <p className="font-small">Tangles wires? In your vocabulary</p>
              <p className="font-small">+ EXPLORE</p>
            </div>
          </div>

          <div className="card card__badge card--vertical">
            <figure className="card__image badge">
              <img className="image--responsive" src={tshirt} alt="product" />
              <span>New</span>
            </figure>
            <div className="card__body">
              <h4 className="font-weight-600">Wireles Headphones</h4>
              <p className="font-small">
                Tangles wires? Not in your vocabulary
              </p>
              <p className="font-small">+ EXPLORE</p>
            </div>
          </div>
        </div>

        <h2>Collections</h2>
        <div className="d-flex-wrap collections">
          <div className="card card--horizontal collection">
            <figure className="card__image ">
              <img className="image--responsive" src={tshirt} alt="product" />
            </figure>
            <div className="card__body">
              <p>New Arrivals</p>
              <div>
                <p className="h3 font-weight-600">Summer Collection</p>
                <p className="font-small">
                  Checkout out best Summer Collection to stay cool and style
                  out!
                </p>
              </div>
            </div>
          </div>

          <div className="card card--horizontal collection">
            <figure className="card__image ">
              <img className="image--responsive" src={tshirt} alt="product" />
            </figure>
            <div className="card__body">
              <p>New Arrivals</p>
              <div>
                <p className="h3 font-weight-600">Summer Collection</p>
                <p className="font-small">
                  Checkout out best Summer Collection to stay cool and style
                  out!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
