import {useState , useEffect} from 'react';
import { CartItem } from './types';
import { cartService, CartService } from '../services/CartService';

export const Cart = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        setCartItems(cartService.getCartItems());
    })
}
