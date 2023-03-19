import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserBooksComponent } from './components/user-books/user-books.component';
import { UserBookDetailsComponent } from './components/user-book-details/user-book-details.component';
import { HomeComponent } from './home/home/HomeComponent.1';
import { UserAuthorsComponent } from './components/user-authors/user-authors.component';
import { UserAuthorDetailsComponent } from './components/user-author-details/user-author-details.component';
import { UserCategoriesComponent } from './components/user-categories/user-categories.component';
import { NotFoundComponent } from './error/not-found/not-found.component';

const routes: Routes = [



   {path:'',component:HomeComponent,children:
   [
    {path:'book',component:UserBooksComponent},

    {path:'book/:id',component:UserBookDetailsComponent},
    {path:'author',component:UserAuthorsComponent},
    {path:'author/:id',component:UserAuthorDetailsComponent},
    {path:'catyegory',component:UserCategoriesComponent},
    {path:'category/:id',component:UserCategoriesComponent},

  ]},
  //{path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
