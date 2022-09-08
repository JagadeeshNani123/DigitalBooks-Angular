import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/usermodel';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title = 'users';
  users:User[] = [];
  user : User = {
    userId:'',
    userName:'',
    emailId:'',
    password:'',
    roleId:1,
    active: false,
    firstName:'',
    lastName:''
  }

  constructor(private userService : UsersService){
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers()
    .subscribe(
      response => { this.users = response}
    );
  }

  onSubmit(){
    if(this.user.userId === ''){
      this.userService.addUser(this.user)
      .subscribe(
        response => {
          this.getAllUsers();
          this.user = {
            userId:'',
            userName:'',
            emailId:'',
            password:'',
            roleId:1,
            active: false,
            firstName:'',
            lastName:''
          };
        }
      );
    }
    else{
      this.updateUser(this.user);
    }    
  }

  deleteUser(id:string){
    this.userService.deleteUser(id)
    .subscribe(
      response => {
        this.getAllUsers();
      }
    )
  }

  populateForm(user: User){
    this.user = user;

  }
  
  updateUser(user: User){
    this.userService.updateUser(user)
    .subscribe(
      response => {
        this.getAllUsers();
      }
    )
  }

}
