import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GuestComponent } from './components/guest/guest.component';
import { AuthorComponent } from './components/author/author.component';
import { AdminComponent } from './components/admin/admin.component';
import { ReaderComponent } from './components/reader/reader.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { AddbookComponent } from './components/addbook/addbook.component';
import { ShowBooksComponent } from './components/book/show-books/show-books.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents, 
    HeaderComponent, 
    FooterComponent, 
    GuestComponent, 
    AuthorComponent, 
    AdminComponent, 
    ReaderComponent,
    PurchaseComponent,
    AddbookComponent,
    ShowBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
