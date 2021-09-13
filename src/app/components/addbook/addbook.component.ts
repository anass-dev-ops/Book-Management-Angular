import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  bookForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService
    ) { }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group({
      title: '',
      price: '',
      author: '',
      edition: '',
      lang: '',
      pagesNumber: ''
    });
  }

  onAddBook() {
    this.bookService.addBook(this.bookForm.value).subscribe(data => {
      console.log(data);
    });
    
  }

}
