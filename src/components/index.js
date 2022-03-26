import Category from "./category/Category";
import Header from "./header/Header";
import MockAPI from "./mock-man/Mockman";
import Sidebar from "./product/sidebar";
import {
  serverDataReducer
} from "./reducers/server-data-reducer";
import {
  ServerDataContext,
  useDataFromServer,
} from "./context/DataFromServer";
import {
  reducerFunc,
  useProductFilters
} from "./reducers/product-filter-reducer";
import ProductCard from './product/ProductCard';
import {
  cartWishListReducer
} from './reducers/cart-wishlist-reducer';
import {
  CartAndWishlistProvider,
  useCartAndWishlist
} from './context/cartAndWhishlistContext';
import { alreadyInCart, alreadyInWishlist } from './utils/cart-wishlist';

export {
  Category,
  Header,
  MockAPI,
  serverDataReducer,
  ServerDataContext,
  useDataFromServer,
  reducerFunc,
  useProductFilters,
  Sidebar,
  ProductCard,
  cartWishListReducer,
  CartAndWishlistProvider,
  useCartAndWishlist,
  alreadyInCart,
  alreadyInWishlist 
};