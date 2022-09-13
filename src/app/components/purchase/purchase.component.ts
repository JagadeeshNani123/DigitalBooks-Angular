import { Component, Input, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Purchase } from 'src/app/models/purchasemodel';
@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  @Input() bookID:any;
  bookHistoryList : any =[];
  bookNameList : any =[];
  display = "none";

  objpurchase : Purchase={
    purchaseId: 0,
    emailId : '',
    bookId : 0,
    puchaseMode : '',
    purchaseDate: '',
  }
  constructor(private services: BookService) { }

  ngOnInit(): void {
  }

  loadBookHistory(){
    
    this.services.GetBookHistory(this.objpurchase.emailId).subscribe(
      response => 
      {
        this.bookHistoryList = response;
      }
    )
  }


  GetPurchasedBookList(){
    for(let bookHistory of this.bookHistoryList){
      this.bookNameList.AddRange(this.services.GetPurchasedBookList(bookHistory.bookId));
    }
  }

  onSubmit(){
    this.objpurchase.bookId = this.bookID;
    this.services.PurchaseBook(this.objpurchase).subscribe(
      response => { alert("Book Purchased Successfully.");
       }
    )
  }
  onFocusOutEvent(event: any){
    this.loadBookHistory();
 }
 
}
