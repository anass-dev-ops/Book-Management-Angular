import { Component } from '@angular/core';
import { BookService } from './services/book.service';
import { Book } from '../app/entities/Book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book-Management-Angular';

  books: Book[] = [];
  book: Book = {};

  constructor(private bookService: BookService) {
    this.onGetBooks();
    this.onGetBookById(1);
  }

  public onGetBooks() {
    this.bookService.getBooks().subscribe((data: Book[]) => {
      this.books = data;
    });
  }

  public onGetBookById(id: number) {
    this.bookService.getBookById(id).subscribe((data: Book) => {
      this.book = data;
    });
  }
}
