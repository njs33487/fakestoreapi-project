import { useEffect, useState } from "react";
import { Product } from "../../../types/types";
import { ProductService } from "../../../api/services/ProductService";
import { useParams } from "react-router-dom";
import styles from 'productList.module.css';

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    ProductService.getProductById(id)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching product details", error));
  }, [id]);
  if (!product) return <div>Loading...</div>;

  return (
    <>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>{product.title}</h3>
        <img src={product.image} className={styles.cardImage} alt={product.title} />
        <p className={styles.cardContent}>{product.description}</p>
        <p className={styles.cardPrice}>Price: ${product.price.toFixed(2)}</p>
        <button className={styles.cardButton}>Add to Cart</button>
      </div>
    </>
  );
};
