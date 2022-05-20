import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userservice :UserService) { }

  ngOnInit(): void {
  }

  username : string ='';
  password : string = '';
  confirmPassword : string ='';
  email : string = '';
  name: string ='';
  user : User = {
    name: '',
    userName:'',
    email:'',
    password:'',
    address : {
      city:'',
      country:'',
      street:'',
      building:'',
      postalcode:'',
      id:0
    }
  };

  addNewUser(user:User){
    this.user.userName = this.username;
    this.user.email = this.email;
    this.user.name = this.name;
    if (this.password != this.confirmPassword){
      alert("Passwords does not match");
    }
    else{
      this.user.password = this.confirmPassword;
      this.userservice.register(user).subscribe(
        user => this.user = user
      ); 
    }
    //tracking
    console.log(user);
    console.log(this.username);
    console.log(this.user);
    console.log(this.password);
    console.log(this.confirmPassword);
  }
}
