import { useState, useEffect } from "react";
import { Product } from "../../../types/types";
import { ProductService } from "../../../api/services/ProductService";
import { Link } from "react-router-dom";
import styles from './ProductList.module.css';


const ProductList = () => {

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
          <img className={styles.cardImage} src={product.image} alt={product.title} />
          <div className={styles.cardContent}>
          <h2 className={styles.cardTitle}>{product.title}</h2>
          <p className={styles.cardPrice}>${product.price.toFixed(2)}</p>
          <Link to={`./product/${product.id}`}>
        <button className={styles.cardButton}> View details</button>
          </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
