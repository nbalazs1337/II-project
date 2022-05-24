import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../models/User";
import { Observable } from "rxjs";
import { Brand } from "../models/Brand";
import { Product } from "../models/Product";
import { Basket } from "../models/Basket";
import { Address } from "../models/Address";

@Injectable({
    providedIn: 'root'
})

export class UserService{
    private url = `${environment.apiUrl}`;
    private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    constructor(private http: HttpClient){}
    
    public getPasswordForUser(username:string){
        return this.http.get<User>(`${this.url}getUserByUsername?username=${username}`);
    }

    public register(user:User) :Observable<User> {
        return this.http.put<User>(`${this.url}addNewUser`,user,this.httpOptions);
    }

    public getAllBrands(){
        return this.http.get<Brand[]>(`${this.url}getBrands`)
    }

    public filterProducts(criteria:number){
        return this.http.get<Product[]>(`${this.url}getProducsAfterBrands?brand=${criteria}`)
    }

    public getAllProducts(){
        return this.http.get<Product[]>(`${this.url}getProduct`);
    }

    public getBasket(){
        return this.http.get<Basket[]>(`${this.url}getBasket`);
    }

    public updateAddress(username:string, address:Address){
        return this.http.post<Address>(`${this.url}changeUserAdress?whatToChange=${username}`,address,this.httpOptions);
    }

    public deleteUser(username:string){
        
        return this.http.delete<User>(`${this.url}deleteUser?username=${username}`);
    }

    public user:User = {
        name : '',
        userName : '',
        password : '',
        email : '',
        address : {
          city: '',
          country: '',
          street: '',
          building: '',
          postalcode: '',
          id: 0 
        }
      };
      prods:Product[] = []
      
}