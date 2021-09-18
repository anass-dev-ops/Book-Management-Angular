import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/entities/Book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-editebook',
  templateUrl: './editebook.component.html',
  styleUrls: ['./editebook.component.css']
})
export class EditebookComponent implements OnInit {

  id: number;
  bookForm: FormGroup;
  book: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private formBuilder: FormBuilder,
    private route: Router
    ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.onGetBookById(this.id);
    this.bookForm = this.formBuilder.group({
      title: new FormControl(''),
      price: new FormControl(''),
      author: new FormControl(''),
      edition: new FormControl(''),
      lang: new FormControl(''),
      pagesNumber: new FormControl('')
    });
    
  }

  initForm(book: Book) {
    this.bookForm = this.formBuilder.group({
      id: new FormControl(book.id),
      title: new FormControl(book.title),
      price: new FormControl(book.price),
      author: new FormControl(book.author),
      edition: new FormControl(book.edition),
      lang: new FormControl(book.lang),
      pagesNumber: new FormControl(book.pagesNumber)
    });
  }

  onGetBookById(id: number) {
    this.bookService.getBookById(id).subscribe(data => {
      this.book = data;
      console.log(this.book);
      this.initForm(this.book);
    }, error => {

    });
  }

  onEditeBook() {
    this.bookService.updateBook(this.bookForm.value).subscribe(data => {
      console.log(data);
      this.route.navigateByUrl(`/dashboard/bookslist`);
    }, error => {

    });
  }

}
