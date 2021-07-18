import { Component } from '@angular/core';
import { BookService } from './services/book.service';
import { Book } from '../app/entities/Book';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book-Management-Angular';

  books: Book[] = [];
  book: Book = {};
  displayForm = false;
  bookForm: FormGroup;

  constructor(
    private bookService: BookService,
    private formBuilder: FormBuilder) {
    this.onGetBooks();
    this.onGetBookById(1);
    this.initForm();
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

  public onAddBook() {
    console.log(this.bookForm.value);
    this.bookService.addBook(this.bookForm.value).subscribe(data => {
      this.onGetBooks();
    });
  }

  initForm() {
    this.bookForm = this.formBuilder.group({
      title: '',
      description: '',
      price: '',
      author: '',
      edition: ''
    });
  }
}
