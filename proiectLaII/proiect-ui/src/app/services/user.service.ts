import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";
import { User } from "../models/User";
@Injectable({
    providedIn: 'root'
})

export class UserService{
    private url = `${environment.apiUrl}`;
    constructor(private http: HttpClient){}

    public getPasswordForUser(username:string){
        return this.http.get<User>(`${this.url}getUserByUsername?username=${username}`);
    }
}