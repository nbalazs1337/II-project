import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
@Injectable({
    providedIn: 'root'
})

export class UserService{
    private url = `${environment.apiUrl}`;
    constructor(private http: HttpClient){}

    public getPasswordForUser(username:string){
        return this.http.get<any>(`${this.url}getPassword?username=${username}`);
    }
}