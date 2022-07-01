import './App.css';
import Product from './components/Product'
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import { CustomerLandingPage } from './components/CustomerLandingPage';
import { Header } from './components/Header';
import { UnderConstructionPage } from './components/UnderConstructionPage';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route exact path="/" element ={< CustomerLandingPage />}/>
      <Route path="/underconstruction" element ={< UnderConstructionPage /> }/>
      <Route path = "ordermedicines" element = { < Product /> }/>
      <Route path=":id" element={ <ProductDetail /> } />
      <Route exact path="/cart" element={ <Cart /> } />
    </Routes>
    </>
  );
}

export default App;
