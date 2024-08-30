export interface Product {
  data(data: any): void | PromiseLike<void>;
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
