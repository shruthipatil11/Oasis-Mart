import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./product-listing.css";
import {
  Header,
  useDataFromServer,
  Sidebar,
  useProductFilters,
  ProductCard,
} from "../../components";

const ProductListing = () => {
  const { state, dispatch } = useDataFromServer();
  let filteredData = [];
  let location = useLocation();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/products");
        dispatch({ type: "saveData", payload: response.data.products });
      } catch (error) {
        console.error(error, "couldn't fetch the featured categories");
      }
    })();
  }, [dispatch]);

  const [filterParamters, dispatchFilter] = useProductFilters(location);

  (() => {
    console.log({ filterParamters });
    filteredData = state.resData
      .filter((product) => product.rating >= filterParamters.rating)
      .filter((product) => {
        return filterParamters.category.includes(product.categoryName);
      })
      .filter((product) => product.price <= filterParamters.priceRange)
      .sort((product1, product2) =>
        filterParamters.sort === "Low to High"
          ? product1.price > product2.price
            ? 1
            : -1
          : product2.price > product1.price
          ? 1
          : -1
      );
  })();

  return (
    <div className="products">
      <Header />
      <Sidebar
        filterParamters={filterParamters}
        dispatchFilter={dispatchFilter}
      />
      <main>
        <div className="mt-mb-1">
          <span className="font-weight-600">Showing all products</span> (showing
          20 products)
        </div>
        <section className="d-flex-wrap">
          {filteredData.map((product) => {
            return <ProductCard key={product._id} productdetails={product} />;
          })}
        </section>
      </main>
    </div>
  );
};

export default ProductListing;
