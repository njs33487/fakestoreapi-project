import { useEffect, useState } from "react";
import { Product } from "../../../types/types";
import styles from "./productList.module.css";

import { cartService } from "../../../api/services/CartService";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, [productId]);
  if (!product) return <div>Loading...</div>;

  return (
    <>
      <div key={product.id} className={styles.card}>
      <p>{product.description}</p>
          <button onClick={() => cartService.addToCart(product)}>
            Add to Cart
          </button>
        </div>
    </>
  );
};

export default ProductDetails;
