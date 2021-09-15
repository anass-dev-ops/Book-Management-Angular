import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-bookslist',
  templateUrl: './bookslist.component.html',
  styleUrls: ['./bookslist.component.css']
})
export class BookslistComponent implements OnInit {
  
  books: any;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    //this.books = this.bookService.getBooks2();
    this.onGetBooks();
  }

  public onGetBooks() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    }, error => {

    });
  }

  public onDelete(id: number) {
    if(confirm("Are You Sur ?")) {
      this.bookService.deleteBookById(id).subscribe(data => {
        this.onGetBooks();
        console.log(data);
      }, error => {

      });
    }
  }

  public onEdite(id: number) {
    
  }

}
