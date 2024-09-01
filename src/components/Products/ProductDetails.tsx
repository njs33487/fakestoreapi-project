import { useEffect, useState } from "react";
import { Product } from "../../../types/types";
import { ProductService } from "../../../api/services/ProductService";
import { cartService } from "../../../api/services/CartService";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
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
      <button onClick={() => cartService.addToCart(product)}>
        Add to Cart
      </button>
    </>
  );
};

export default ProductDetails;
