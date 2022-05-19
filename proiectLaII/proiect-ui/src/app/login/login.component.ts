import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pass:string ='';
  constructor(private userservice :UserService) { }

  ngOnInit(): void {
  }
  userName:string =''
  getPass(){
    this.userservice.getPasswordForUser(this.userName).subscribe(pass => this.pass = pass);
    console.log(this.pass);
  }
}
