import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutComponent } from '../checkout/checkout.component';
import { MainPageComponent } from '../main-page/main-page.component';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable({
  providedIn: 'root' // just before your class
})
export class LoginComponent implements OnInit {
  currentUser:User = {
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

  @Input() user:User = {
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
  constructor(private userservice :UserService, private router:Router) { }

  ngOnInit(): void {
  }
  userName:string = '';
  password:string = '';
  passfromdb?:string;

  getPass(){
    this.userservice.getPasswordForUser(this.userName).subscribe(user => this.user = user);
  }

  check(){
    if (this.userservice.user.userName!=''){
      alert("You are already logged in");
    }
    else 
      if (this.password == this.user?.password){
      console.log("correct");
      this.sendUser();
      this.router.navigateByUrl('');
    }
    else {
      console.log("wrong");
      alert("Incorrect Username or Password");
    }
    
    console.log(this.password);
    console.log(this.user);
  }

  home(){
    this.router.navigateByUrl('/register');
  }

  sendUser(){
    this.userservice.user = this.user;
  }
}
