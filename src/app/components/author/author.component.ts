import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  searchResult: any;
  ModalTitle:string="";
  display = "none";
  userID : string ='';
  isTesting : boolean =true;
  book : any;
  constructor(private service: BookService) { }

  ngOnInit(): void {
    
    this.service.CheckUserLoggedInOrNot();
    this.GetUserID();
    this.loadBooks();    
    }

  GetUserID(){
    let values = JSON.parse(localStorage.getItem("user") || '');
    this.userID = values.userId;
  }
  
  loadBooks(){
    this.service.SearchBooks('0',this.userID,0).subscribe(
      response => {this.searchResult = response; console.log(this.searchResult);}
    );
    }

    openModal() {
      this.ModalTitle ="Add Book";
      this.display = "block";
    }
  
    onCloseHandled() {
      this.display = "none";
    }

    activeInactiveClick(item:any){
      this.book =item; 
      this.book.active = !item.active;
      console.log("item Value =" + JSON.stringify(item));
      console.log(this.book);
      this.service.UpdateBookStatus(this.book.bookId,this.userID,this.book.active).subscribe(
        response => { alert('Status updated Successfully.'); }
      )
    }
}
