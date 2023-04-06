import './App.css';
import {Routes,Route} from 'react-router-dom'
import Cart from './pages/Cart';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/productpage' element={<ProductPage/>}/>
        <Route path='/categorypage' element={<CategoryPage/>}/>
        <Route path='/cartpage' element={<Cart/>}/>
      </Routes>
    </>
  );
}

export default App;
