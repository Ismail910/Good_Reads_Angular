import { PopularComponent } from './users/home/popular/popular.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryService } from './services/user/category.service';
import { LoginComponent } from './users/auth/login/login.component';
import { RegisterComponent } from './users/auth/register/register.component';
import { UserCategoryDetailsComponent } from './users/components/user-category-details/user-category-details.component';
import { NotFoundComponent } from './users/error/not-found/not-found.component';
import { HomeComponent } from './users/home/home/HomeComponent.1';
const routes: Routes = [

  {path:'',loadChildren:()=>import('./users/users.module').then(m=>m.UsersModule)},
  {path:'Admin',loadChildren:()=>
  import('./administration/administration.module').
  then(m=>m.AdministrationModule)
  },
  {path:'home', component:PopularComponent},
  {path:'**',component:NotFoundComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
