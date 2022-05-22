import { CurrencyPipe } from '@angular/common';
import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Brand } from '../models/Brand';
import { Product } from '../models/Product';
import { User } from '../models/User';
import { UserService } from '../services/user.service';
@Injectable()
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {

  constructor(private userService:UserService) { }
  productsList:Product[] = [];
  curentUser?:User;
  ngOnInit(): void {
    this.getProducts();   
  }

  getProducts(){
    this.userService.getAllProducts().subscribe(p => this.productsList = p);
  }
  

  display(){
    console.log(this.productsList);
  }
}
