import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/Products/ProductList";
import { Cart } from "./components/Cart";
import { Checkout } from "./components/Checkout";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
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
      <Footer />
    </Router>
    </>
  );
};

export default App;
