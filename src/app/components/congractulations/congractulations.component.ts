import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-congractulations',
  templateUrl: './congractulations.component.html',
  styleUrls: ['./congractulations.component.css']
})
export class CongractulationsComponent implements OnInit {
  alertMessage: string = '';
  ModalTitle:string="";
  display:string="";
  constructor(public router:Router) { }

  ngOnInit(): void {
    this.openModal();
  }
   
  openModal() {
    this.alertMessage = localStorage.getItem('alertFrom')||'';
    this.ModalTitle ="Success";
    this.display = "block";
  }

  onCloseHandled() {
   localStorage.removeItem('alertFrom');
   if(this.alertMessage.includes("purchase"))
   {
   this.router.navigate(['/book']); 
   }
   else if(this.alertMessage.includes("book"))
    {
    this.router.navigate(['/author']); 
    }
    else
    this.router.navigate(['/login']);
  }

}


