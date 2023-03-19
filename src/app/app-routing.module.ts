import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './users/auth/login/login.component';
import { RegisterComponent } from './users/auth/register/register.component';
import { UserCategoriesComponent } from './users/components/user-categories/user-categories.component';

const routes: Routes = [

  {path:'',loadChildren:()=>import('./users/users.module').then(m=>m.UsersModule)},
  {path:'Admin',loadChildren:()=>
  import('./administration/administration.module').
  then(m=>m.AdministrationModule)
  },

  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'Categories', component:UserCategoriesComponent},

  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
