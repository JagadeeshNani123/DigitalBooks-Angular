import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/usermodel';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = 'https://localhost:44392/api/Users';

  constructor(private http: HttpClient) { }

  //Get all Users
  getAllUsers():Observable<User[]>{
      return this.http.get<User[]>(this.baseUrl);
  }

  //Add User
  addUser(user: User):Observable<User> {
    user.userId = '00000000-0000-0000-0000-000000000000';
    return this.http.post<User>(this.baseUrl, user);
  }

  deleteUser(id:string):Observable<User>{
    return this.http.delete<User>(this.baseUrl +'/'+id);
  }

  updateUser(user: User):Observable<User>{
    return this.http.put<User>(this.baseUrl +'/'+user.userId, user);
  }
}
