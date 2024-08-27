// components/Checkout.tsx
import { cartService } from '../../api/services/CartService';

export const Checkout = () => {
  const handleCheckout = () => {
    alert('Checkout complete! Thank you for your purchase.');
    cartService.claerCart();
  };

  const totalPrice = cartService.getCartItems().reduce((total, item) => total + item.product.price * item.quantity, 0);

  return (
    <div>
      <h2>Checkout</h2>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <button onClick={handleCheckout}>Complete Checkout</button>
    </div>
  );
};
