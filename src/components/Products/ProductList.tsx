import { useState, useEffect } from "react";
import { Product } from "../../../types/types";
import { ProductService } from "../../../api/services/ProductService";
import styles from '.\modues\ProductList.module.css'

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
        <div key={product.id} className={styles.div}>
          <h2 className={styles.h2}>{product.title}</h2>
          <p className={styles.p}>${product.price.toFixed(2)}</p>
          <img className={styles.img} src={product.image} alt={product.title} />
          <button className={styles.button} onClick={() =>onProductSelect }>see more</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
