import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/usermodel';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'users';
  users:User[] = [];
  user : User = {
    userId:'0',
    userName:'',
    emailId:'',
    password:'',
    roleId:1,
    active: true,
    firstName:'',
    lastName:''
  }

  constructor(private loginService : UsersService){
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.loginService.getAllUsers()
    .subscribe(
      response => { this.users = response}
    );
  }

  onLoginSubmit(){
    if(this.user.userId === '0'){
      this.loginService.addUser(this.user)
      .subscribe(
        response => {
          this.getAllUsers();
          this.user = {
            userId:'0',
            userName:'',
            emailId:'',
            password:'',
            roleId:1,
            active: true,
            firstName:'',
            lastName:''
          };
        }
      );
    }
      
  }

}