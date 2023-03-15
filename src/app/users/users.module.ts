import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserHeaderComponent } from './user-layout/user-header/user-header.component';
import { UserFooterComponent } from './user-layout/user-footer/user-footer.component';
import { UserAuthorsComponent } from './components/user-authors/user-authors.component';
import { UserAuthorDetailsComponent } from './components/user-author-details/user-author-details.component';
import { UserCategoriesComponent } from './components/user-categories/user-categories.component';
import { UserCategoryDetailsComponent } from './components/user-category-details/user-category-details.component';
import { UserBooksComponent } from './components/user-books/user-books.component';
import { UserBookDetailsComponent } from './components/user-book-details/user-book-details.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PopularComponent } from './home/popular/popular.component';
import { UserAuthorCardComponent } from './components/user-author-card/user-author-card.component';
import { SharedModule } from '../@shared/@shared.module';



@NgModule({
  declarations: [
    UserHeaderComponent,
    UserFooterComponent,
    UserAuthorsComponent,
    UserAuthorDetailsComponent,
    UserCategoriesComponent,
    UserCategoryDetailsComponent,
    UserBooksComponent,
    UserBookDetailsComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PopularComponent,
    UserAuthorCardComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
