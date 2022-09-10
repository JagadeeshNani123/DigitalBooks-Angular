import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/usermodel';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
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

  constructor(private signUpService : UsersService){
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.signUpService.getAllUsers()
    .subscribe(
      response => { this.users = response}
    );
  }

  onSaveSubmit(){
    if(this.user.userId === '0'){
      this.signUpService.addUser(this.user)
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
  
