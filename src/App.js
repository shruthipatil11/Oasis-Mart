import "./App.css";
import {Routes,Route} from 'react-router-dom';
import {HomePage,ProductListing,Wishlist,Cart} from './pages/index';
import MockAPI from  './components/mock-man/Mockman';

function App() {
  return (
    <div className="App">
       <Routes>
         <Route path='/' element={<HomePage/>} />
         <Route path='/product-listing' element={<ProductListing/>} />
         <Route path='/mockman' element={<MockAPI />} />
         <Route path='/wishlist' element={<Wishlist />} />
         <Route path='/cart' element={<Cart />} />
       </Routes>    
    </div>
  );
}

export default App;
