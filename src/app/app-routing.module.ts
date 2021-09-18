import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './components/addbook/addbook.component';
import { BookslistComponent } from './components/bookslist/bookslist.component';
import { DashComponent } from './components/dash/dash.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditebookComponent } from './components/editebook/editebook.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  { path: '', component: ViewComponent }, 
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: '', redirectTo: 'bookslist', pathMatch: 'full'},
    { path: 'addbook', component: AddbookComponent},
    { path: 'bookslist', component: BookslistComponent},
    { path: 'editebook/:id', component: EditebookComponent},
    { path: 'dash', component: DashComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }