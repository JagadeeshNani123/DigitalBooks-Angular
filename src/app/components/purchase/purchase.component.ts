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
  display = "none";

  objpurchase : Purchase={
    purchaseId: 0,
    emailId : '',
    bookId : 0,
    puchaseMode : '',
    purchaseDate: '',
    isRefunded : 'Y'
  }
  constructor(private services: BookService) { }

  ngOnInit(): void {
  }

  loadBookHistory(){
    
    this.services.GetBookHistory(this.objpurchase.emailId).subscribe(
      response => {this.bookHistoryList = response;
        this.display = "block";
      }
    )
  }

  onSubmit(){
    this.objpurchase.bookId = this.bookID;
    this.services.PurchaseBook(this.objpurchase).subscribe(
      response => { alert("Book Purchased Successfully.");
      this.loadBookHistory(); }
    )
  }
  onFocusOutEvent(event: any){
    this.loadBookHistory();
 }
 
}
