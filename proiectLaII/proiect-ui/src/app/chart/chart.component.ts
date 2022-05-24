import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/Product';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(private userservice:UserService, private router:Router) { }
  productsList:Product[] = [];
  totalPrice:number=0;
  ngOnInit(): void {
    this.productsList = this.userservice.prods;
    this.totPrice()
  }
  
  
  totPrice(){
    this.productsList.forEach(element => {
      this.totalPrice+=element.price;
    });
  }

  checkout(){
    console.log("checkout")
    if (this.totalPrice == 0){
      alert("you cannot checkout becouse you bought nothing");
    }

    else{
      if(confirm("You sure you want to leave?")){
        if (confirm(`You are about to exit. Your total price is ${this.totalPrice}`)){
          this.router.navigateByUrl('/checkout')
        }
      }
    }
    
    
  }
  remove(prod:Product){

  }

}
