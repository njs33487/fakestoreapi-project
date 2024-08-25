import { useEffect, useState } from "react";
import { Product } from "./types";
import { ProductService } from "../services/ProductService";

interface ProductDetailProps {
  productId: number;
}

export const ProductDetail = ({ productId }: ProductDetailProps) => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await ProductService.getProductById(productId);
      setProduct(data);
    };
    fetchProduct();
  }, [productId]);
  if (!product) return <div>Loading...</div>;

  return (
    <>
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <button>Add to Cart</button>
    </>
  );
};
