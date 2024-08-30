import { useEffect, useState } from "react";
import { Product } from "../../../types/types";
import { ProductService } from "../../../api/services/ProductService";
import { useParams } from "react-router-dom";

export const ProductDetails = (productId: number) => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await ProductService.getProductById(productId);
      setProduct(data);
    };
    fetchProduct();
  }, [id, productId]);
  if (!product) return <div>Loading...</div>;

  return (
    <>
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <button>Add to Cart</button>
    </>
  );
};
