import { useEffect, useState } from "react";
import { Product } from "../../../types/types";
import { ProductService } from "../../../api/services/ProductService";
import { CartService } from "../../../api/services/CartService";

interface ProductDetailProps {
  productId: number;
}

export const ProductDetails = ({ productId }: ProductDetailProps) => {
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
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <button onClick={() => CartService.addToCart}>Add to Cart</button>
    </>
  );
};
