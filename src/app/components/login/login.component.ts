import { JsonPipe } from '@angular/common';
import { verifyHostBindings } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/usermodel';
import { BookService } from 'src/app/services/book.service';
import { UsersService } from 'src/app/services/user.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  response :any;
  logUser:any;
  user = {
    userId:'0',
    userName:'',
    emailId:'',
    password:'',
    roleId:1,
    active: true,
    firstName:'',
    lastName:''
  }
  token : string="";
  usernameC:any;
  passwordC:any;
  constructor(private userService: UsersService, private service: BookService, public router:Router) { }

  ngOnInit(): void {
    
  }


  
  login(){
    var val = {
      userName : this.usernameC,
      password : this.passwordC
    }
    this.service.Login(val).subscribe(
      response => {  this.response = response; 
       
        if(this.response.token != ""){
          console.log(this.response);
           // store jwt token in local storage to keep user logged in between page refreshes
           
           localStorage.setItem('token', this.response.token);
           localStorage.setItem('user', JSON.stringify(this.response.user));

          // this.nameEmitter.emit(true);  
          if(this.response.user.roleId == 1) //This is Author
          {
          this.router.navigate(['/author']).then(
            ()=>{window.location.reload()}
          )   
          }
          else{ 
            // This is Reader
            this.router.navigate(['/reader']).then(
              ()=>{window.location.reload()}
            )  
          }
        } 
      }
    )    
  }
}
