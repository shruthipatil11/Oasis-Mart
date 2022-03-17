import {Link} from 'react-router-dom';

  const Categories = ({categories}) => {
    return (
        <div className="d-flex-wrap categories">          
        {categories.map(({imageName,categoryName,alt,id}) => 
        (<Link to="/product-listing"><figure key = {id} className="image-container badge">
            <img
              className="image--responsive"
              src={imageName}
              alt={alt}
            />
            <div>
              <span>{categoryName}</span>
            </div>
          </figure></Link>))}
        </div>
    );
}

export default Categories;

{/* <Link to="/product-listing"></Link> */}