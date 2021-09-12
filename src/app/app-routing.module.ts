import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './components/addbook/addbook.component';
import { BookslistComponent } from './components/bookslist/bookslist.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  { path: '', component: ViewComponent }, 
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: '', redirectTo: 'bookslist', pathMatch: 'full'},
    { path: 'addbook', component: AddbookComponent},
    { path: 'bookslist', component: BookslistComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }