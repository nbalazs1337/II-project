import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throwIfEmpty } from 'rxjs';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private router:Router, private userService:UserService) { }
  username?:string;
  password?:string;
  confirmPass?:string;
  oldPass?:string;
  ngOnInit(): void {
    this.user = this.userService.user;
  }

  user?:User;
  bringUser(){
    console.log(this.user?.userName);
    console.log(this.user?.password);

  }

  changePassword(name?:string, newpass?: string){
    return this.userService.changePassword(name, newpass).subscribe(x => this.user = x)
  }
  check(){
    if (this.user?.userName == undefined || this.user.userName == ''){
      alert("You are not logged in");
    }
  }
  done(){
    this.check();
    if (this.username != this.user?.userName || this.oldPass != this.user?.password){
      this.username = '';
      this.oldPass ='';
      this.password = '';
      this.confirmPass = '';
      alert("Wrong old credentials. Please try again");
    }

    if (this.password != this.confirmPass){
      this.username = '';
      this.oldPass ='';
      this.password = '';
      this.confirmPass = '';
      alert("Passwords does not match. Try again");
    }

    if(this.password == this.confirmPass && this.username == this.user?.userName && this.oldPass == this.user?.password){
      this.changePassword(this.user?.userName ,this.confirmPass);
      alert("Password successfully changed");
      this.router.navigateByUrl('');
    }
  }

}
