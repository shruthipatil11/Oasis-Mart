import { Link } from "react-router-dom";

const Categories = ({category}) => {
    const {imageName,alt,categoryName} = category;
  return (
    <Link to="/product-listing">
      <figure className="image-container badge">
        <img className="image--responsive" src={imageName} alt={alt} />
        <div>
          <span>{categoryName}</span>
        </div>
      </figure>
    </Link>
  );
};

export default Categories;
