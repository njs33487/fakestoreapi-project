import React, { useState, useEffect } from "react";
import axios from "axios";
import { Product } from "./types";



const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>(
          "https://fakestoreapi.com/products"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>${product.price.toFixed(2)}</p>
          <img src={product.image} alt={product.title} />
          <button></button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
