import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginAdminComponent } from './components/Auth/Admin/login-admin/login-admin.component';

import { LoginUserComponent } from './components/Auth/User/login-user/login-user.component';
import { RegistarUserComponent } from './components/Auth/User/registar-user/registar-user.component';
import { CategorysComponent } from './components/categorys/categorys/categorys.component';
import { BooksComponent } from './components/Books/books/books.component';
import { AuthorsComponent } from './components/Authors/authors/authors.component';
import { ReviewComponent } from './components/Books/review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginAdminComponent,
    RegistarUserComponent,
    LoginUserComponent,
    CategorysComponent,
    BooksComponent,
    AuthorsComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
