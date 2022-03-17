import "./App.css";
import logo from "./logo.png";
import {Routes,Route} from 'react-router-dom';
import {HomePage,ProductListing} from './pages/index';
import MockAPI from  './components/mock-man/Mockman';

function App() {
  return (
    <div className="App">
       <Routes>
         <Route path='/' element={<HomePage/>} />
         <Route path='/product-listing' element={<ProductListing/>} />
         <Route path='/mockman' element={<MockAPI />} />
       </Routes>    
    </div>
  );
}

export default App;
