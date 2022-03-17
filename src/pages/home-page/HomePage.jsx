import { useState, useEffect } from "react";
import { bags, footWear, tshirt, watch, westernWear } from "../index";
import "./home-page.css";
import axios from "axios";
import Header from "../../components/header/Header";
import Categories from "./Categories";


const ProductListing = () => {
  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    try {
      const response = await axios.get("/api/categories");
      setCategories(response.data.categories);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="page homepage">
      <Header />

      <div className="page--center">
       <Categories categories={categories}/>

        <h2>TRENDING NOW</h2>
        <div className="d-flex-wrap trending">
          <div className="card card__badge card--vertical">
            <figure className="card__image badge">
              <img
                className="image--responsive"
                src={tshirt}
                alt="product image"
              />
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
              <img
                className="image--responsive"
                src={tshirt}
                alt="product image"
              />
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
              <img
                className="image--responsive"
                src={tshirt}
                alt="product image"
              />
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
              <img
                className="image--responsive"
                src={tshirt}
                alt="product image"
              />
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
              <img
                className="image--responsive"
                src={tshirt}
                alt="product image"
              />
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
              <img
                className="image--responsive"
                src={tshirt}
                alt="product image"
              />
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
export default ProductListing;
