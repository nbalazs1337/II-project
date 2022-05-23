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
    this.router.navigateByUrl('/checkout');
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
