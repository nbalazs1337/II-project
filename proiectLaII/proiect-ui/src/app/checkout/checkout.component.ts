import { Component, Injectable, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Address } from '../models/Address';

import { Basket } from '../models/Basket';
import { Product } from '../models/Product';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private userservice :UserService) { }

  productsList:Basket[] = [];
  user:User = {
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
  ngOnInit(): void {
    console.log(this.userservice.user)
    this.user = this.userservice.user;
  }
  username?:string;
  building:string = '';
  street:string ='';
  city:string='';
  country:string='';
  postalcode:string='';

  getProducts(){
    this.userservice.getBasket().subscribe(p => this.productsList = p);
  }
  address:Address = {
    city : this.city,
    country:this.country,
    street:this.street,
    building:this.building,
    postalcode:this.postalcode,
    id:1
  };
  
  setAddress(address:Address){
    address = {
      city : this.city,
      country:this.country,
      street:this.street,
      building:this.building,
      postalcode:this.postalcode,
      id:1
    }
  }
  
  changeAddress(){
    if (this.user.userName == ''){
      alert("You are not logged in. Please log in first");
    }
    else{

    this.address={
      city : this.city,
      country:this.country,
      street:this.street,
      building:this.building,
      postalcode:this.postalcode,
      id:1
    }
    this.userservice.updateAddress(this.userservice.user.userName, this.address)
    console.log(this.address)
    console.log(this.user.userName);
    }
    
  }
}
