// components/ProductController.tsx
import { useState } from 'react';
import ProductList from './ProductList';
import { ProductDetails } from './ProductDetails';
import { Cart } from '../Cart';
import { Checkout } from '../Checkout';
import { cartService } from '../../../api/services/CartService';

export const ProductController = () => {
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  const handleProductSelect = (productId: number) => {
    setSelectedProductId(productId);
  };

  const handleAddToCart = () => {
    if (selectedProductId !== null) {
      const product = cartService.getCartItems().find(item => item.product.id === selectedProductId)?.product;
      if (product) {
        cartService.addToCart(product);
        alert(`${product.title} has been added to your cart.`);
      }
    }
  };

  return (
    <div>
      <ProductList onProductSelect={handleProductSelect} />
      {selectedProductId && (
        <div>
          <ProductDetails productId={selectedProductId} />
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      )}
      <Cart />
      <Checkout />
    </div>
  );
};
