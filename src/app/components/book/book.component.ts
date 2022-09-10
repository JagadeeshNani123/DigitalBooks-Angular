import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/bookmodel';
import { BookService } from 'src/app/services/book.service';

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

  constructor(private bookService : BookService){
  }

  ngOnInit(): void {
    this.getAllBooks();
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

}
