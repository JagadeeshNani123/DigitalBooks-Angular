import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-purchased-book-history',
  templateUrl: './show-purchased-book-history.component.html',
  styleUrls: ['./show-purchased-book-history.component.css']
})
export class ShowPurchasedBookHistoryComponent implements OnInit {
  @Input() purchasedBookHistory : any=[];
  constructor() { }

  ngOnInit(): void {

  }

}
