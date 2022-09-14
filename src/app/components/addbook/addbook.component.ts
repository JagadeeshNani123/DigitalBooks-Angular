import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/bookmodel';
import { User } from 'src/app/models/usermodel';
import { BookService } from 'src/app/services/book.service';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  CategoryList:any[] =[];
  user: User={
    userId:'0',
    userName:'',
    emailId:'',
    password:'',
    roleId:1,
    active: true,
    firstName:'',
    lastName:''
  }
  books:Book[] = [];
  book : Book = {
    bookId: '0',
    bookName: '',
    categoryId: '',
    price: 0,
    publisher: '',
    userId: '',
    publishedDate: '',
    content: '',
    active: true,
    createdDate: '',
    createdby: '',
    modifiedDate: '',
    modifiedby: ''
  }

  GetUserID(){
    let userValues =localStorage.getItem("user") ;
    if(userValues != 'undefined')
    {
    let values = JSON.parse(localStorage.getItem("user") || '');
    this.book.userId = values.userId;
    this.user=values;
    }
  }

  onSelected(value:string): void {
		this.book.categoryId = value;
	}

  constructor(private service: BookService, private userService: UsersService,public router:Router) { }

  ngOnInit(): void {
    this.GetUserID();
    this.loadCategoryList();
  }

  loadCategoryList() {
    this.service.GetAllCategory()
    .subscribe(
      response => { this.CategoryList = response}
    );
  }

  onSubmitClick(){
    this.book.createdby=this.user.userId;
    this.book.modifiedby=this.user.userId;
    this.book.modifiedDate=this.book.publishedDate;
    this.book.createdDate=this.book.publishedDate;
    this.service.SaveBook(this.book).subscribe(
      response => { 
        alert('Book Added Successfully');
        this.router.navigate(['/author']); 
        window.location.reload();    
    }
    );
  }

}
