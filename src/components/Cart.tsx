// components/Cart.tsx
import { useState, useEffect } from 'react';
import { CartItem, cartService } from '../../api/services/CartService';

export const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setCartItems(cartService.getCartItems());
  }, []);

  const handleQuantityChange = (productId: number, quantity: number) => {
    cartService.updateQuantity(productId, quantity);
    setCartItems([...cartService.getCartItems()]);
  };

  const handleRemove = (productId: number) => {
    cartService.removeFromCart(productId);
    setCartItems([...cartService.getCartItems()]);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
      <ul>
        {cartItems.map(item => (
          <li key={item.product.id}>
            <div>
              {item.product.title} - ${item.product.price.toFixed(2)}
            </div>
            <div>
              Quantity: 
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={e => handleQuantityChange(item.product.id, parseInt(e.target.value))}
              />
              <button onClick={() => handleRemove(item.product.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};
