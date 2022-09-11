import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/bookmodel';
import { User } from 'src/app/models/usermodel';
import { BookService } from 'src/app/services/book.service';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  title = 'books';
  books:Book[] = [];
  book : Book = {
    bookId: '',
    bookName : '',
    categoryId : '0',
    price : '',
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
    this.bookService.getBookList()
    .subscribe(
      response => { this.books = response}
    );
  }
  
  
  onSearchSubmit(){
      this.bookService.addBook(this.book)
      .subscribe(
        response => {
          this.getAllBooks();   
    }
    ); 
    
  }   
  

  deleteUser(id:string){
    this.bookService.deleteBook(id)
    .subscribe(
      response => {
        this.getAllBooks();
      }
    )
  }

  populateForm(book: Book){
    this.book = book;

  }
  
  updateUser(book: Book){
    this.bookService.updateBook(book)
    .subscribe(
      response => {
        this.getAllBooks();
      }
    )
  }

  getBookSerachList(bookName:string, authourName: string, publisher: string, publishedDate: Date ){

    return this.bookService.getBookSerachList(bookName, authourName, publisher, publishedDate );

}
}
