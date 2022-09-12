import { HttpClient } from '@angular/common/http';
import { Injectable, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/bookmodel';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl = 'https://localhost:44392/api/Books';

  constructor(private http: HttpClient) { }

  //Get all Books
  getBookList():Observable<Book[]>{
      return this.http.get<Book[]>(this.baseUrl);
  }

  //Add Book
  addBook(book: Book):Observable<Book> {
    return this.http.post<Book>(this.baseUrl, book);
  }

  //delete Book
  deleteBook(id:string):Observable<Book>{
    return this.http.delete<Book>(this.baseUrl +'/'+id);
  }

  //update Book
  updateBook(book: Book):Observable<Book>{
    return this.http.put<Book>(this.baseUrl +'/'+book.bookId, book);
  }

  getBookSerachList(bookName:string, authourName: string, publisher: string, publishedDate: Date ):Observable<Book>{
    var id = 'bookName='+bookName+'&authorName='+authourName+'&publisher='+publisher+'&publishedDate='+publishedDate;
    return this.http.get<Book>(this.baseUrl+'/'+id)
  }

    SearchBooks(c:string, aID:string, p: number ):Observable<any[]>{
        return this.http.get<any>(this.baseUrl +"SearchBooks/"+ c+"/"+aID+"/"+p);
    }
}
