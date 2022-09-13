import { Component, Input, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Purchase } from 'src/app/models/purchasemodel';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  [x: string]: any;

  @Input() bookID:any;
  bookHistoryList : any =[];
  bookNameList : any =[];
  display = "none";
  today = new Date();
  changedDate = '';
  pipe = new DatePipe('en-US');

  objpurchase : Purchase={
    purchaseId: 0,
    emailId : '',
    bookId : 0,
    puchaseMode : '',
    purchaseDate: ''
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
    this.objpurchase.puchaseMode='online';
    let changedFormat = this.pipe.transform(this.today, 'dd-MM-YYYY')?.toString();
    if(changedFormat!=undefined)
    this.objpurchase.purchaseDate = '2022-09-13T16:25:34.652Z';
    this.services.PurchaseBook(this.objpurchase).subscribe(
      response => { alert("Book Purchased Successfully.");
       }
    )
  }
  onFocusOutEvent(event: any){
    this.loadBookHistory();
 }
 
}
