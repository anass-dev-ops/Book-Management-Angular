import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../entities/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  public host = 'https://an1book.herokuapp.com/';
  //public host = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getBooks() {
    return this.http.get<Book[]>(this.host + '/books');
  }
}
