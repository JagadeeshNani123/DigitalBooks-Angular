import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/bookmodel';
import { User } from 'src/app/models/usermodel';
import { BookService } from 'src/app/services/book.service';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'books';
  books:Book[] = [];
  book : Book = {
    bookId: '',
    bookName : '',
    categoryId : '0',
    price : 0,
    publisher :'',
    userId :'',
    publishedDate : '',
    content :'',
    Active : true,
    createdDate : '',
    createdby : '',
    modifiedDate : '',
    modifiedby :''
  }
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
  
    
  selected = "----"
  
  update(e:any){
    this.selected = e.target.value
  }

  constructor(private bookService : BookService, private userService : UsersService){
  }

  ngOnInit(): void {
    this.getAllBooks();
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers()
    .subscribe(
      response => { this.users = response}
    );
  }
  getAllBooks() {
    this.bookService.GetBookList()
    .subscribe(
      response => { this.books = response}
    );
  }
  
  
  
searchBooks(){
  // this.bookService.SearchBooks(this.selectedCategory,this.selectedAuthor,this.price).subscribe(
  //   response => {this.searchResult = response; console.log(this.searchResult);}
  // );
  }
  

  

  populateForm(book: Book){
    this.book = book;

  }
  
  

  getBookSerachList(bookName:string, authourName: string, publisher: string, publishedDate: Date ){

    return this.bookService.getBookSerachList(bookName, authourName, publisher, publishedDate );

}
}
