import { Component, OnInit } from '@angular/core';
import { Basket } from '../models/Basket';
import { Product } from '../models/Product';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private userservice :UserService) { }

  productsList:Basket[] = [];
  ngOnInit(): void {
    
  }

  getProducts(){
    this.userservice.getBasket().subscribe(p => this.productsList = p);
  }

}
