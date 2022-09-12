import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/bookmodel';
import { Category } from 'src/app/models/categorymodel';
import { User } from 'src/app/models/usermodel';
import { BookService } from 'src/app/services/book.service';
import { CategoryService } from 'src/app/services/category.services';
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

  categories:Category[] = [];
  category : Category = {
    categoryId:'0',
    categoryName:''
  }
  
  searchResult:any;  
  selectedBook = "----";
  selectedAuthor="";
  selectedPublisher="";
  selectedCategory="";

  SelectedBook(book:string){
    this.selectedBook = book;
  }


  SelectedAuthor(author:string){
    this.selectedAuthor = author;
  }

  SelectedPublisher(publisher:string){
    this.selectedPublisher = publisher;
  }

  SelectedCategory(category:string){
    this.selectedCategory = category;
  }
  constructor(private bookService : BookService, private userService : UsersService,
    private categoryService : CategoryService){
  }

  ngOnInit(): void {
    this.getAllBooks();
    this.getAllUsers();
    this.getAllCategories();
  }

  getAllUsers() {
    this.userService.getAllUsers()
    .subscribe(
      response => { this.users = response}
    );
  }

  getAllCategories() {
    this.categoryService.getAllCategories()
    .subscribe(
      response => { this.categories = response}
    );
  }

  getAllBooks() {
    this.bookService.GetBookList()
    .subscribe(
      response => { this.books = response}
    );
  }
  
  
  
searchBooks(){
  this.bookService.SearchBooks(this.selectedCategory,this.selectedAuthor,this.book.price).subscribe(
     response => {this.searchResult = response; console.log(this.searchResult);}
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
