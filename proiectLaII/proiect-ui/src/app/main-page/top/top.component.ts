import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  constructor(private router:Router,private userService:UserService) { }

  ngOnInit(): void {
  }
  checkout(){
    if (this.userService.user.userName == ''){
      alert("You cannot change address because you are not logged in");
    }
    else{
      this.router.navigateByUrl('/checkout');
    }
    
  }
  tempuser:User = {
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
  }

  chart(){
    if (this.userService.user.userName == ''){
      alert("You are not loggend in. YOu have no items in the chart")
    }
    else{
      this.router.navigateByUrl('/chart');
    }
    
  }

  status?:string;
  delete(){
    if (this.userService.user.userName == ''){
      alert("We don't know who you are. Please login first to be able to delete your account");
    }
    else if (confirm("You really sure you want to delete your account?")){
      this.userService.deleteUser(this.userService.user.userName).subscribe(x => this.status="succesfull deleted user");
      alert(this.status);
    }
  }
  logOut(){
    console.log(this.userService.user.userName);
    if (this.userService.user.userName == ''){
      alert("You cannot log out because you are not logged in");
    }
    else{
      this.userService.user = this.tempuser;
      alert("You successfully logged out");
      window.location.reload();
      console.log(this.userService.user);
    }
  }

}
