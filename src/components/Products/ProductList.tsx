import { useState, useEffect } from "react";
import { Product } from "../../../types/types";
import { ProductService } from "../../../api/services/ProductService";

interface ProductListProps {
  onProductSelect: (productId: number) => void;
}

const ProductList = ({onProductSelect}: ProductListProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await ProductService.getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>${product.price.toFixed(2)}</p>
          <img src={product.image} alt={product.title} />
          <button onClick={() =>onProductSelect }>see more</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
