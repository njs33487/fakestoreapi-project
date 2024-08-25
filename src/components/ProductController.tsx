import { useState } from "react";
import ProductList from "./ProoductList";
import { ProductDetail } from "./ProductDetails";

export const ProductController = () => {
  const [selectedProductId, setSelectedProductById] = useState<number | null>(
    null
  );

  return (
    <>
      <ProductList />
      <button onClick={() => setSelectedProductById(1)}>View Product 1</button>
      <button onClick={() => setSelectedProductById(2)}>View Product 2</button>
      {selectedProductId && <ProductDetail productId={selectedProductId} />}
    </>
  );
};
