import { Address } from "cluster";
import { User } from "./User";

export interface Order{
    totalValue:number;
    address:Address;
    user:User;
    id:number;
}