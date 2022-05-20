import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/User';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public myForm: FormGroup;
  constructor(private userservice :UserService, private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(1)]]
    })
   }


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

  userToCheckPass?:User = {
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

  referenceUser?:User = {
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

  getUserToCheckPass(username:string){
    this.userservice.getPasswordForUser(username).subscribe(userToCheckPass => this.userToCheckPass = userToCheckPass);
  }

  checkIfUsernameExists(username:string):boolean{
    if (this.userToCheckPass?.userName == username) {
      console.log("exists");
      //alert("This username already exists. Try another one");
      return true;
    }
    if(this.userToCheckPass?.userName != username){
      console.log("does not exists");
      console.log(username);
      console.log (this.userToCheckPass);
      return false;
    }
    return true;
    
  }

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

  submit(user:User){
    if (this.checkIfUsernameExists(this.username) == false){
      this.addNewUser(user);
    }
    else{
      alert("This username already exists. You should try another one.");
    }
  }


  // de la validations care nu merg
  get m(){
    return this.myForm.controls;
  }

  onSubmit(){
    console.log(this.myForm.value);
  }

 
}
