import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../../../types/types";
import { ProductService } from "../../../api/services/ProductService";
import styles from "./ProductList.module.css";

const ProductList = () => {
  const navigate = useNavigate();

   const handleViewDetials = (id: number) => {
    navigate(`/product/${id}`);
  };
  


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
    <div className={styles.productGrid}>
      {products.map((product) => (
        <div key={product.id} className={styles.card}>
          <img
            className={styles.cardImage}
            src={product.image}
            alt={product.title}
          />
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>{product.title}</h2>
            <p className={styles.cardPrice}>${product.price.toFixed(2)}</p>
            <button
              className={styles.cardButton}
              onClick={() => handleViewDetials(product.id)}
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
