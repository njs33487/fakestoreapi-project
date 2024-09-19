export interface Product {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data(data: any): void | PromiseLike<void>;
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}



export interface CartItem extends Product {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  product: any;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}
