import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../entities/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  public host = 'https://an1book.herokuapp.com/';
  //public host = 'http://localhost:8080';

  // Data For Testing 
  data = [
    {
      "id": 1,
      "title": "Learning Java by Building Android Games: Learn Java and Android from scratch by building five exciting games, 3rd Edition",
      "edition": "3rd Three ed. Edition",
      "author": "John Horton",
      "price": "44.99$",
      "lang": "English",
      "pagesNumber": "686 pages"
    },
    {
      "id": 2,
      "title": "Data Structures and Algorithms Made Easy in Java: Data Structure and Algorithmic Puzzles, Second Edition",
      "edition": "2nd Edition",
      "author": "Narasimha Karumanchi",
      "price": "390$",
      "lang": "English",
      "pagesNumber": "412 pages"
    },
    {
      "id": 3,
      "title": "The Little Java Book Of Adventure Game Programming: Learn Object Oriented Programming – advanced coding techniques (Little Programming Books)",
      "edition": "Paperback – November 28, 2020",
      "author": "Huw Collingbourne",
      "price": "18.99$",
      "lang": "English",
      "pagesNumber": "192 pages"
    },
    {
      "id": 4,
      "title": "Learn Java 12 Programming: A step-by-step guide to learning essential concepts in Java SE 10, 11, and 12",
      "edition": "First Edition",
      "author": "Nick Samoylov",
      "price": "34.99$",
      "lang": "English",
      "pagesNumber": "690 pages"
    },
    {
      "id": 5,
      "title": "OCFA Java Foundations Exam Fundamentals 1Z0-811: Study guide for Oracle Certified Foundations Associate, Java Certification",
      "edition": "First Edition",
      "author": "Hanumant Deshmukh",
      "price": "12.99$",
      "lang": "English",
      "pagesNumber": "331 pages"
    }
  ];

  constructor(private http: HttpClient) { }

  public getBooks() {
    return this.http.get<Book[]>(this.host + '/books');
  }

  public getBooks2() {
    return this.data;
  }

  public getBookById(id: number) {
    return this.http.get<Book>(`${this.host}/books/${id}`);
  }

  public deleteBookById(id: number) {
    return this.http.delete<Book>(`${this.host}/books/${id}`);
  }

  public addBook(book: Book) {
    return this.http.post(`${this.host}/books`, book);
  }
}
