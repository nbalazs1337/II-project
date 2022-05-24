import { CurrencyPipe } from '@angular/common';
import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private userService:UserService, private router:Router) { }
  productsList:Product[] = [];
  curentUser?:User;
  ngOnInit(): void {
    this.getProducts();   
  }

  getProducts(){
    this.userService.getAllProducts().subscribe(p => this.productsList = p);
  }
  

  addProduct(prod:Product){
    console.log(this.userService.user.userName)
    if (this.userService.user.userName == ''){
      alert("You are not logged in. You cannot add items to the chart")
    }
    else{
      this.userService.prods.push(prod);
      console.log(this.userService.prods);
    }
    
  }

  home(){
    this.router.navigateByUrl('');
  }
}
