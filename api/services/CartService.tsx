import { Product } from "../../types/types";

export interface CartItem {
  product: Product;
  quantity: number;
}

export class CartService {
  private cartItems: CartItem[] = [];

  // add to cart
  addToCart(product: Product) {
    const existingItem = this.cartItems.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }
  }
  // remove item from cart
  removeFromCart(productId: number) {
    this.cartItems.filter((items) => items.product.id !== productId);
  }
  // update cart
  updateQuantity(productId: number, quantity: number) {
    const item = this.cartItems.find((item) => item.product.id === productId);
    if (item) {
      item.quantity = quantity;
    }
  }
  // get cart items
  getCartItems(): CartItem[] {
    return (this.cartItems = []);
  }
  // clear cart
  claerCart() {
    this.cartItems = [];
  }
}
export const cartService = new CartService();
