import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ViewComponent } from './components/view/view.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddbookComponent } from './components/addbook/addbook.component';
import { BookslistComponent } from './components/bookslist/bookslist.component';
import { EditebookComponent } from './components/editebook/editebook.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    DashboardComponent,
    AddbookComponent,
    BookslistComponent,
    EditebookComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
