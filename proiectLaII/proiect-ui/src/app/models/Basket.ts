import { Product } from "./Product";

export interface Basket{
    totalItems:number;
    products:Product;
    id:number;
}