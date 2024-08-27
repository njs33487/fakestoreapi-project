import { Product } from "../../types/types";

export const ProductService = {
    getProducts:  async (): Promise<Product[]> => {
        const response = await fetch('https://fakestoreapi.com/products');
        return response.json();
    } ,  
    getProductById: async(id: number): Promise<Product> => {
        const response = await fetch(`https:fakestoreapi.com/products/${id}`);
        return response.json();
    },
};