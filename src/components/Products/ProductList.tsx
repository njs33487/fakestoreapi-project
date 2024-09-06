import { useState, useEffect } from "react";
import { Product } from "../../../types/types";
import { ProductService } from "../../../api/services/ProductService";
import styles from './ProductList.module.css';
import ProductDetails from "./ProductDetails";


const ProductList = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct , setSelectedProduct] = useState<number | null>(null);

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

  const handleProductClick = (productId : number) =>{
    setSelectedProduct(productId);
  };

  return (
    <div className={styles.productGrid}>
      {products.map((product) => (
        <div key={product.id} className={styles.card}>
          <img className={styles.cardImage} src={product.image} alt={product.title} />
          <div className={styles.cardContent}>
          <h2 className={styles.cardTitle}>{product.title}</h2>
          <p className={styles.cardPrice}>${product.price.toFixed(2)}</p>
        <button onClick={() => handleProductClick(product.id)} className={styles.cardButton}> View details</button>
          </div>
          </div>
        ))}
          {selectedProduct && <ProductDetails productId={selectedProduct} />}
        </div>
  );
};

export default ProductList;