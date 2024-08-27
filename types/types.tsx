export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}



export interface CartItem extends Product {
  product: any;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}
