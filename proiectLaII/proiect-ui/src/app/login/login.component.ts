import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // user:User = {
  //   name : '',
  //   userName : '',
  //   password : '',
  //   email : '',
  //   address : {
  //     city: '',
  //     country: '',
  //     street: '',
  //     building: '',
  //     postalcode: '',
  //     id: 0 
  //   }
  // };

  user?:User;
  constructor(private userservice :UserService) { }

  ngOnInit(): void {
  }
  userName:string = '';
  password:string = '';
  passfromdb?:string;

  getPass(){
    this.userservice.getPasswordForUser(this.userName).subscribe(user => this.user = user);
  }

  
  auxiliary(){
    console.log(this.user?.password);
  }

  check(){
    if (this.passfromdb == this.user?.password){
      console.log ("correct");
    }
    else {
      console.log("wrong");
    }
  }
}
