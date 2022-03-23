const Sidebar = ({ dispatchFilter, filterParamters }) => {
  return (
    <aside className="sidebar__parent">
      <div className="sidebar d-flex-col filters">
        <div className="filters--spacing ">
          <h3>Filters</h3>
          <button
            class="btn btn--primary clear-all"
            onClick={() => dispatchFilter({ type: "clearAll" })}
          >
            {" "}
            Clear All{" "}
          </button>
        </div>
        <div>
          <h3>Price</h3>
          <ul className="filters--spacing">
            <li>100</li>
            <li>1000</li>
            <li>2000</li>
          </ul>
          <input
            type="range"
            value={filterParamters.priceRange}
            min="100"
            max="2000"
            className="filters__range"
            onChange={(e) =>
              dispatchFilter({ type: "priceRange", payload: e.target.value })
            }
          />
        </div>
        <div>
          <h3>Category</h3>
          <ul>
            <li>
              <input
                type="checkbox"
                name="category"
                checked={
                  filterParamters.category.includes("Show Pieces")
                    ? "checked"
                    : ""
                }
                onChange={() =>
                  dispatchFilter({
                    type: "category",
                    payload: "Show Pieces",
                  })
                }
              />
              Show Pieces
            </li>
            <li>
              <input
                type="checkbox"
                name="category"
                checked={
                  filterParamters.category.includes("Wall Decor")
                    ? "checked"
                    : ""
                }
                onChange={() =>
                  dispatchFilter({ type: "category", payload: "Wall Decor" })
                }
              />
              Wall Decor
            </li>
            <li>
              <input
                type="checkbox"
                name="category"
                checked={
                  filterParamters.category.includes("Clocks") ? "checked" : ""
                }
                onChange={() =>
                  dispatchFilter({ type: "category", payload: "Clocks" })
                }
              />
              Clocks
            </li>
            <li>
              <input
                type="checkbox"
                name="category"
                checked={
                  filterParamters.category.includes("Plant & Planters")
                    ? "checked"
                    : ""
                }
                onChange={() =>
                  dispatchFilter({
                    type: "category",
                    payload: "Plant & Planters",
                  })
                }
              />
              Plant & Planters
            </li>
          </ul>
        </div>
        <div>
          <h3>Rating</h3>
          <ul>
            <li>
              <input
                type="radio"
                name="rating"
                checked={filterParamters.rating === 4 ? "checked" : ""}
                onChange={() => dispatchFilter({ type: "rating", payload: 4 })}
              />
              4 stars and above
            </li>
            <li>
              <input
                type="radio"
                name="rating"
                checked={filterParamters.rating === 3 ? "checked" : ""}
                onChange={() => dispatchFilter({ type: "rating", payload: 3 })}
              />
              3 stars and above
            </li>
            <li>
              <input
                type="radio"
                name="rating"
                checked={filterParamters.rating === 2 ? "checked" : ""}
                onChange={() => dispatchFilter({ type: "rating", payload: 2 })}
              />
              2 stars and above
            </li>
            <li>
              <input
                type="radio"
                name="rating"
                checked={filterParamters.rating === 1 ? "checked" : ""}
                onChange={() => dispatchFilter({ type: "rating", payload: 1 })}
              />
              1 stars and above
            </li>
          </ul>
        </div>
        <div>
          <h3>Sort by</h3>
          <ul>
            <li>
              <input
                type="radio"
                name="sorting"
                checked={
                  filterParamters.sort === "Low to High" ? "checked" : ""
                }
                onChange={() =>
                  dispatchFilter({ type: "sort", payload: "Low to High" })
                }
              />
              Price - Low to High
            </li>
            <li>
              <input
                type="radio"
                name="sorting"
                checked={
                  filterParamters.sort === "High to Low" ? "checked" : ""
                }
                onChange={() =>
                  dispatchFilter({ type: "sort", payload: "High to Low" })
                }
              />
              Price - High to Low
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
