import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/bookmodel';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  CategoryList:any[] =[];
  books:Book[] = [];
  book : Book = {
    bookId: '',
    bookName: '',
    categoryId: '',
    price: 0,
    publisher: '',
    userId: '',
    publishedDate: '',
    content: '',
    Active: true,
    createdDate: '',
    createdby: '',
    modifiedDate: '',
    modifiedby: ''
  }

  GetUserID(){
    let values = JSON.parse(localStorage.getItem("user") || '');
    this.book.userId = values.userId;
  }

  onSelected(value:string): void {
		this.book.categoryId = value;
	}

  constructor(private service: BookService,public router:Router) { }

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
    this.service.SaveBook(this.book).subscribe(
      response => { 
        alert('Book Added Successfully');
        this.router.navigate(['/author']);     
    }
    );
  }

}
