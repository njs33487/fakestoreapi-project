import { ProductController } from "./components/Products/ProductController";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <ProductController />
      <Footer />
    </>
  );
};

export default App;
