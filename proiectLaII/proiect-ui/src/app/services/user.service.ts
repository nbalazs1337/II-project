import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../models/User";
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

    public register(user:User){
        return this.http.put<User>(`${this.url}addNewUser`,user,this.httpOptions);
    }
}