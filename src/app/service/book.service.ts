import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL= {"http://localhost:9090/addBook"}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  postBook(book:any): Observable<any>{
    return this.http.post(BASIC_URL+"/api/book",book);
  }

  getAllBook(): Observable<any> {
    return this.http.get(BASIC_URL+"/api/books");
  }
}
