import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  @Input() user?:User;
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
    if (this.password == this.user?.password){
      console.log("correct");
      this.router.navigateByUrl('');
    }
    else {
      console.log("wrong");
      alert("Incorrect Username or Password");
    }
    
    console.log(this.password);
    console.log(this.user?.password);
  }

  home(){
    this.router.navigateByUrl('/register');
  }
}
