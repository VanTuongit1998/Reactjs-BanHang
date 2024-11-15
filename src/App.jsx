import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import HeardComponent from './components/heard/HeardComponent'
import ProductComponent from './components/products/ProductComponent';
import SliderComponent from './components/slider/SliderComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import BoucherComponent from './components/bouncher/BoucherComponent';
import FooterComponent from './components/footer/FooterComponent';
import ProductMenComponent from './components/ProductMenComponent';
import SearchComponent from './components/search/SearchComponent';
import DetailComponent from './components/derailproduct/DetailComponent';
import CartComponent from './components/cart/CartComponent';
import PaymentPageComponent from './components/paycomponent/PaymentPageComponent';
import ProductFallComponent from './components/productcollection/ProductFallComponent';

function App() {
  const Home =()=>{
    return(
      <>
        <SliderComponent />
        <ProductComponent />
        <BoucherComponent />
      </>
      
    )
  }
  return (
    <>
      <Router>
      <HeardComponent /> 
     
      <Routes>
        <Route path="/" element={Home()} /> 
        <Route path="/cart" element={<CartComponent />} />
        <Route path="/search/:query" element={<SearchComponent />} />
        <Route path="/detail/:idCategory" element={<DetailComponent />} />
        <Route path="/product-men/:idNav" element={<ProductMenComponent />} />
        {/* <Route path="/payment" element={<PaymentPageComponent />} /> */}
      </Routes>
      <FooterComponent />
    </Router>
      
    </>
  )
}

export default App
