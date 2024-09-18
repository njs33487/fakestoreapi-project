import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/Products/ProductList";
import { Cart } from "./components/Cart";
import { Checkout } from "./components/Checkout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./components/Products/ProductDetails";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />}></Route>
          <Route
            path="/product/ :productid "
            element={<ProductDetails />}
          ></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
