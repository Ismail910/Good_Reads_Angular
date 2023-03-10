import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthorsComponent } from './admin-authors/admin-authors.component';
import { AdminBooksComponent } from './admin-books/admin-books.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {path:'',component:AdminDashboardComponent,children:
  [
    {path:'Books',component:AdminBooksComponent},
    {path:'Authors',component:AdminAuthorsComponent},
    {path:'Categories',component:AdminCategoriesComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
