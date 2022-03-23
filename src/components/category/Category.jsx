import { NavLink } from "react-router-dom";

const Categories = ({ category }) => {
  const { imageName, alt, categoryName } = category;
  return (
    <NavLink to="/product-listing" state={{ categoryName }}>
      <figure className="image-container badge">
        <img className="image--responsive" src={imageName} alt={alt} />
        <div>
          <span>{categoryName}</span>
        </div>
      </figure>
    </NavLink>
  );
};

export default Categories;
