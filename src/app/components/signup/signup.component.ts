import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/usermodel';
import { UsersService } from 'src/app/services/user.service';
import { Role } from 'src/app/models/rolemodel';
import { RoleService } from 'src/app/services/role.service';
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
  roles : Role[]=[];
  role: Role={
    roleId: 1,
    roleName:''
  }

  selected = "----"
  userRoleId =1;
  update(e:any){
    this.userRoleId = e;
  }

  constructor(private signUpService : UsersService, private roleService: RoleService){
  }

  ngOnInit(): void {
    this.getAllUsers();
    this.getAllRoles();
  }

  getAllUsers() {
    this.signUpService.getAllUsers()
    .subscribe(
      response => { this.users = response}
    );
  }

  getAllRoles() {
    this.roleService.getAllRoles()
    .subscribe(
      response => { this.roles = response}
    );
  }

  onSaveSubmit(){
    if(this.user.userId === '0'){
      this.user.roleId = this.userRoleId;
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
  
