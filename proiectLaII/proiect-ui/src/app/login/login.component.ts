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

  check(){
    if (this.password == this.user?.password){
      //to be implemented
      console.log("correct");
    }
    else {
      console.log("wrong");
      alert("Incorrect Username or Password");
    }

    console.log(this.password);
    console.log(this.user?.password);
  }
}
