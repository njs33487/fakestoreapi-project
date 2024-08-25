export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}



export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}
