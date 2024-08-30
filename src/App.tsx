import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ProductList from "./components/Products/ProductList";
import { Cart } from "./components/Cart";
import { Checkout } from "./components/Checkout";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" Component={ProductList}/>
        <Route path="/cart" Component={Cart}/>
        <Route path="/checkout" Component={Checkout}/>
      </Routes>
    </Router>
    < Footer />
    </>
  );
};

export default App;
